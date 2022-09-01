import cors from "cors";
import express from "express";

import { graphql } from "./graphql/index.js";

const app = express();

app.use(cors());
app.use("/graphql", graphql);

const port = 4000;
app.listen(port, () => console.log(`Server is running on ${port}`));
