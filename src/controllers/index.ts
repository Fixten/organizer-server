import * as express from "express";

const router = express.Router();

router.get("/notes", (_, res) => {
  res.send([
    { title: "first", text: "test" },
    { title: "hehe", text: "adin" },
  ]);
});

router.get("/save-note", (_, res) => {
  res.send({ message: "ok" });
});

export default router;
