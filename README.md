# Online Exam Backend

This project is a backend service for an online examination system built using Node.js, Express.js, and TypeScript. It provides APIs for managing multiple-choice and descriptive questions, including image upload functionality for descriptive questions. The data is stored in a MySQL database, and the application also supports initial data seeding and image handling for uploaded content.

## Features

- **Multiple Question Types**: Supports MCQ and Descriptive question types.
- **Image Upload for Descriptive Questions**: Allows uploading images related to descriptive questions.
- **Data Seeding**: Automatically seeds predefined questions if the database is empty on startup.
- **MySQL Database**: Stores question data using a MySQL database.
- **TypeScript**: Full type support for robust and maintainable code.
- **File Uploads**: Uses `multer` for handling file uploads.

## Prerequisites

- **Node.js** and **npm** (or **Yarn**)
- **MySQL Database**

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saurabh0227/online-exam-backend.git
   cd online-exam-backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   ```bash
   Create a .env file in the root directory with the following variables:
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=root_password
   DB_NAME=exam_db
   ```
4. **Set up the MySQL Database**:
   ```
   CREATE TABLE questions (
   id INT AUTO_INCREMENT PRIMARY KEY,
   type ENUM('MCQ', 'Descriptive') NOT NULL,
   question TEXT NOT NULL,
   options JSON DEFAULT NULL,
   answer TEXT NOT NULL,
   image TEXT DEFAULT NULL
   );
   ```
5. **Run the Application**:

```
Start the server in development mode:
npm run dev
```

## Usage

Create Question: Send a POST request to /api/question with JSON data for multiple-choice or descriptive questions. For descriptive questions, an optional image can be uploaded.

Retrieve Questions: Send a GET request to /api/exam to fetch a random selection of questions.
