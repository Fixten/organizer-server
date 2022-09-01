import cors from "cors";
import express from "express";

import controllers from "./controllers/index.js";

const app = express();

app.use(cors());
app.use("/api", controllers);

const port = 3001;
app.listen(port, () => console.log(`Server is running on ${port}`));
