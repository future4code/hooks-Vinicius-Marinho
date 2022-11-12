import { RevenueBusiness } from "./../business/RevenueBusiness";
import { Request, Response } from "express";
import { RevenueInputDTO } from "../model/revenue";

export class RevenueController {
  public revenueCreate = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;

      const input: RevenueInputDTO = {
        title,
        description,
        token: req.headers.authorization as string,
      };
      const revenuebusines = new RevenueBusiness();
      await revenuebusines.createRevenue(input);

      res.status(201).send({ message: "Receita criada!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getRevenue = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const input = {
        id,
        token: req.headers.authorization as string,
      };

      const revenueBusiness = new RevenueBusiness();
      const revenues = await revenueBusiness.getRevenue(input);

      res
        .status(201)
        .send({
          id: revenues.id,
          title: revenues.title,
          description: revenues.description,
          createdAt: revenues.date,
        });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
