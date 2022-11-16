import { UserBusiness } from './../../business/UserBusiness';
import { UserDatabase } from '../../data/mySQL/UserDatabase';
import express from "express"
import { UserController } from "../UserController"

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post("/create", userController.create)