const express = require('express');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const auth = require('../middleware/auth');
const ExcelRecord = require('../models/ExcelRecord');

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Route: POST /api/upload
router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const filePath = path.join(__dirname, '../', 'uploads', req.file.filename); // Correct path
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet); // Corrected variable name

    // Save to DB
    const newRecord = new ExcelRecord({
      user: req.user._id,
      fileName: req.file.originalname,
      filePath: req.file.path,
      data: jsonData,
    });

    await newRecord.save();

    fs.unlinkSync(filePath); // Delete the uploaded file

    res.status(201).json({
      message: 'Excel file uploaded and saved to database successfully',
      recordId: newRecord._id,
      rowCount: jsonData.length,
      filePath: req.file.path
    });

  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ error: 'Failed to process the file' });
  }
});

module.exports = router;
