import { app } from "./app";
import { getUsersName } from "./endpoints/getUsersName";
import { getUsersType } from "./endpoints/getUsersType";
import { getUsersOrder } from "./endpoints/getUsersOrder";
import { getUsersPage } from "./endpoints/getUsersPage";
import { getUsers } from "./endpoints/getUsers";

app.get("/users", getUsers)
app.get("/users/page", getUsersPage)
app.get("/users/name", getUsersName)
app.get("/users/order", getUsersOrder)
app.get("/users/:type", getUsersType)