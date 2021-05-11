/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import pool from '../postgres';
import User from '../models/user.model';
import { QueryResult } from 'pg';

export const userController = {
  getUser: (req: Request, res: Response) => {
    const sqlQuery = {
      name: 'fetch-username',
      text: 'SELECT id, username, email FROM users WHERE id = $1',
      values: [req.params.id],
    };

    pool.query(sqlQuery, (error, response: QueryResult<User>) => {
      if (error) {
        console.log(error.stack);
      } else {
        const { id, username, email } = response.rows[0];
        const currentUser = new User(id, username, email);
        return res.send(currentUser);
      }
    });
  },
};

export default userController;
