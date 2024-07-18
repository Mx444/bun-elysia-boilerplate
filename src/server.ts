import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello, world!");

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});
