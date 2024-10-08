import { RowDataPacket } from 'mysql2';
import pool from '../config/db';
import { Question } from '../models/question';
import { predefinedQuestions } from '../data/questionsData';

export class QuestionService {
  async createQuestion(createQuestion: Question): Promise<void> {
    try {
      const { type, question, options, answer, image } = createQuestion;
      await pool.query(
        'INSERT INTO questions (type, question, options, answer, image) VALUES (?, ?, ?, ?, ?)',
        [type, question, JSON.stringify(options), answer, image]
      );
      console.log(`Question added: ${question}`);
    } catch (error) {
      const err = error as Error;
      console.error(`Error adding question: ${err.message}`);
      throw new Error('Failed to add question to the database');
    }
  }

  async getQuestions(): Promise<Question[]> {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM questions ORDER BY RAND() LIMIT 10'
      );
      return rows as Question[];
    } catch (error) {
      const err = error as Error;
      console.error(`Error retrieving questions: ${err.message}`);
      throw new Error('Failed to retrieve questions from the database');
    }
  }

  async initializeQuestions(): Promise<void> {
    try {
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
          try {
            await this.createQuestion(question);
          } catch (error) {
            const err = error as Error;
            console.error(
              `Failed to insert question: ${question.question}. ${err.message}`
            );
          }
        }
        console.log('Predefined questions added to the database.');
      } else {
        console.log(
          `Found ${count} questions in the database. Skipping initialization.`
        );
      }
    } catch (error) {
      const err = error as Error;
      console.error(`Error initializing questions: ${err.message}`);
      throw new Error('Failed to initialize questions in the database');
    }
  }
}
