import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import app from './app';
import { QuestionService } from './services/questionService';
import { testDBConnection } from './config/db';

dotenv.config();

const PORT = process.env.PORT || 3000;
const questionService = new QuestionService();

const checkAndCreateUploadsDir = () => {
  const uploadsDir = path.join(__dirname, '..', 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log(`'uploads' folder created at ${uploadsDir}`);
  }
};

// Test database connection and initialize questions on startup
(async () => {
  await testDBConnection();
  await questionService.initializeQuestions(); // Initialize questions

  // Ensure uploads directory exists
  checkAndCreateUploadsDir();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
