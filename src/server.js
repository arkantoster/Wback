const express = require("express");
const cookieParser = require("cookie-parser");
const { alunosRouter } = require("./routes/alunosRouter");
const { turmasRouter } = require("./routes/turmasRouter");
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/alunos", alunosRouter);
app.use("/turmas", turmasRouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const initilizeServer = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

initilizeServer();
