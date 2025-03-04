# RyoKanvas

RyoKanvas is a booking application that allows users to reserve spots. Users can leave a review on any spot they have previously visited. Users can also create their own spots for other users to reserve.

**[🔭 Click here to visit the RyoKanvas website!](https://ryokanvas.onrender.com/)**

![RyoKanvas](https://github.com/user-attachments/assets/e7d6499f-4447-4e09-be77-08dd24679dfd)

RyoKanvas uses the following technologies:

| Frontend                                         | Backend                                          | Database                                         |
|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)|[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/-Express-373737?style=for-the-badge&logo=Express&logoColor=white)](https://expressjs.com/) [![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)|[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![SQLite3](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=SQLite&logoColor=white)](https://www.sqlite.org/)|

## Database Schema

![RyoKanvas Database Schema](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-12/airbnb-db-schema.png)

## [Frontend Routes Documentation](https://github.com/fayfan/RyoKanvas/wiki/Frontend-Routes-Documentation)

## [Backend API Documentation](https://github.com/fayfan/RyoKanvas/wiki/Backend-API-Documentation)

## Local Setup

To set up RyoKanvas for local development, run the following commands in your terminal:
```
gh clone fayfan/RyoKanvas
cp backend/.env.example backend/.env
cd backend && npm install
npx dotenv sequelize db:seed:undo:all
npx dotenv sequelize db:migrate:undo:all
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
npm start
cd ../frontend && npm install
npm run dev
```

RyoKanvas is set to run SQLite3 in development & PostgreSQL in production.
