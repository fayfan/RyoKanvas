# RyoKanvas

RyoKanvas is a booking application that allows users to reserve spots. Users can leave a review on any spot they have previously visited. Users can also create their own spots for other users to reserve.

**[🔭 Click here to visit the RyoKanvas website!](https://ryokanvas.onrender.com/)**

RyoKanvas uses the following technologies:

| Frontend                                         | Backend                                          | Database                                         |
|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)|[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/-Express-373737?style=for-the-badge&logo=Express&logoColor=white)](https://expressjs.com/)|[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)|

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

## [Frontend Routes Documentation](https://github.com/fayfan/RyoKanvas/wiki/Frontend-Routes-Documentation)

## [Backend API Documentation](https://github.com/fayfan/RyoKanvas/wiki/Backend-API-Documentation)

## Database Schema Design

![airbnb-database-schema]

[airbnb-database-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-12/airbnb-db-schema.png
[airbnb-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-12/airbnb-db-diagram-info.txt
