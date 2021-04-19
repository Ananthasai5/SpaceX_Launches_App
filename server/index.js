import express from "express";
import { handleRender } from "./initialState";

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static("./build"));
app.use(handleRender);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
