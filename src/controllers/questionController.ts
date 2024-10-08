import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { QuestionService } from '../services/questionService';
import { Question } from '../models/question';

const questionService = new QuestionService();

export const createQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { type, question, options, answer } = req.body;
  let image = null;

  // If question type is Descriptive, check if an image file is provided
  if (type === 'Descriptive' && req.file) {
    image = req.file.path; // Store the file path to the image
  }

  const newQuestion: Question = {
    type,
    question,
    options: type === 'MCQ' ? JSON.parse(options) : undefined,
    answer,
    image
  };

  await questionService.createQuestion(newQuestion);
  res.status(201).json({ message: 'Question created successfully' });
};

export const getQuestions = async (req: Request, res: Response) => {
  const questions = await questionService.getQuestions();
  res.json(questions);
};
