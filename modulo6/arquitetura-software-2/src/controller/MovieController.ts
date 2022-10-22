import { MovieBusiness } from '../business/MovieBusiness';
import { Request, Response } from "express";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release} = req.body;

      const userBusiness = new MovieBusiness();
      await userBusiness.create({title, description, duration_in_minutes, year_of_release});

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async get(req:Request, res:Response){
    try {
      const title = req.body.title

      const movieBusiness = new MovieBusiness()
      const result = await movieBusiness.get(title)

      res.status(200).send({Movies: result})
    } catch (error:any) {
      res.status(400).send(error.message)
    }
  }
}
