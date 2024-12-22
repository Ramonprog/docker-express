import { Request, Response } from "express";
import { knex } from "./database";

interface User {
  id?: string;
  name: string;
  age: number;
  country: string;
}

export class Controller {

  index = async (req: Request, res: Response) => {
    const users = await knex('users')
    return res.status(200).json(users);
  }

  
  create = async (req: Request, res: Response) =>{
    const userData = req.body as Omit<User, "id">;

    const user = await knex('users').insert(userData).returning('*');
    return res.status(201).json(user);
  }
}