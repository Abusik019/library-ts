"use strict";
// Необходимо разработать систему управления библиотекой, которая будет включать в себя следующие модули:
// Модуль авторизации: должен обеспечивать аутентификацию пользователей и предоставлять им доступ к различным функциям системы.
// Модуль управления книгами: должен позволять пользователям добавлять, удалять, редактировать и просматривать книги в библиотеке.
// Модуль поиска книг: должен предоставлять пользователям возможность искать книги по названию, автору или другим атрибутам.
// ** Модуль статистики: должен собирать и отображать статистику использования системы, такую как количество пользователей, количество книг и т. д.
// Реализовать модуль авторизации, который будет обеспечивать аутентификацию пользователей с помощью JWT-токенов.
// Создать модуль управления книгами, который позволит пользователям добавлять, удалять, редактировать и просматривать книги.
// Разработать модуль поиска книг, который будет предоставлять пользователям возможность поиска книг по различным критериям.
// Спроектировать модуль статистики, который будет собирать и отображать информацию о системе.
// Обеспечить модульность системы, чтобы её можно было легко расширять и модифицировать.
// Предоставить документацию по системе, включая описание каждого модуля и его функций. (очень кратко)
// // Middleware check JWT
// import { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers['authorization'] || req.body.token || req.query.token;
//   if (!token) {
//     return res.status(401).send({ message: 'Неавторизованный доступ' });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(403).send({ error: 'Некорректный токен' });
//   }
// };
