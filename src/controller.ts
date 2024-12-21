import { Request, Response } from "express";

interface User {
  id?: string;
  name: string;
  age: number;
  country: string;
}

export class Controller {
  private users: User[] = [];

  index = (req: Request, res: Response) => {
    res.status(200).json(this.users);
  }

  
  create = (req: Request, res: Response) =>{
    const userData = req.body as Omit<User, "id">;

    const user:User = {
      id: String(this.users.length + 1),
      ...userData
    }

    this.users.push(user);
    
    return res.status(201).json(user);
  }
}