import { revenueRouter } from './controller/router/revenueRouter';
import app from "./controller/app"
import { userRouter } from "./controller/router/userRouter"


app.use('/user/', userRouter)

app.use('/revenue', revenueRouter)
