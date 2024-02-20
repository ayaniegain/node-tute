import express from "express";
import { loginMiddleware } from "./middleware/middleware.js";
import { router as userRouter } from "./routes/user.route.js";

import { router as productRouter } from "./routes/product.router.js";
const app = express();
let PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(loginMiddleware);

//User
app.use("/api/v1/users/", userRouter);

//Product
app.use("/api/v1/products/", productRouter);

app.listen(PORT, () => {
  console.log(`port running on ${PORT}`);
});
