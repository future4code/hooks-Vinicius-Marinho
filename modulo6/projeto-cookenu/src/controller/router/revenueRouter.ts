import { RevenueController } from '../RevenueController';
import express from "express";

export const revenueRouter = express.Router()

const revenueController = new RevenueController()

revenueRouter.post('/create', revenueController.revenueCreate)
revenueRouter.get('/:id', revenueController.getRevenue)
