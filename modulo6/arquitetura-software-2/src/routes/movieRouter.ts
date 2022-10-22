import { MovieController } from './../controller/MovieController';
import express from 'express'

export const movieRouter = express.Router()

const movieController = new MovieController()

movieRouter.post("/create", movieController.create)

movieRouter.get("/get", movieController.get)
