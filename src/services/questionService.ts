import { RowDataPacket } from 'mysql2';

import pool from '../config/db';
import { Question } from '../models/question';
import { predefinedQuestions } from '../data/questionsData';

export class QuestionService {
  async createQuestion(createQuestion: Question): Promise<void> {
    const { type, question, options, answer, image } = createQuestion;
    await pool.query(
      'INSERT INTO questions (type, question, options, answer, image) VALUES (?, ?, ?, ?, ?)',
      [type, question, JSON.stringify(options), answer, image]
    );
  }

  async getQuestions(): Promise<Question[]> {
    const [rows] = await pool.query(
      'SELECT * FROM questions ORDER BY RAND() LIMIT 10'
    );
    return rows as Question[];
  }

  async initializeQuestions(): Promise<void> {
    // Define the type of the rows we expect from the query
    type CountRow = RowDataPacket & { count: number };

    // Run the query and type the result as a tuple of [CountRow[], FieldPacket[]]
    const [rows]: [CountRow[], any] = await pool.query(
      'SELECT COUNT(*) AS count FROM questions'
    );

    // Access the count from the first row
    const count = rows[0]?.count || 0;

    if (count === 0) {
      console.log('No questions found. Adding predefined questions...');
      for (const question of predefinedQuestions) {
        await this.createQuestion(question);
      }
      console.log('Predefined questions added to the database.');
    } else {
      console.log(
        `Found ${count} questions in the database. Skipping initialization.`
      );
    }
  }
}
