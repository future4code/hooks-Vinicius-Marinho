import { getUsers } from './endpoints/getUsers';
import { app } from "./app";
import { postUsers } from "./endpoints/postUsers";
import { postProducts } from "./endpoints/postProducts";
import { getProducts } from './endpoints/getProducts';
import { postPurchases } from './endpoints/postPurchases';
import { getPurchasesUsers } from './endpoints/getPurchasesUsers';

app.get("/users", getUsers)
app.get("/products", getProducts)
app.get("/users/:user_id/purchases", getPurchasesUsers)
app.post("/users", postUsers)
app.post("/products", postProducts)
app.post("/purchases", postPurchases)