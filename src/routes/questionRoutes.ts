import express from 'express';
import multer from 'multer';
import path from 'path';
import { body } from 'express-validator';

import {
  createQuestion,
  getQuestions
} from '../controllers/questionController';

const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../', 'uploads')); // Specify the upload folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post(
  '/question',
  upload.single('image'),
  body('type').isIn(['MCQ', 'Descriptive']),
  body('question').isString(),
  createQuestion
);

router.get('/exam', getQuestions);

export default router;
