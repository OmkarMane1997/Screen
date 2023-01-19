const express = require("express"); // import express
const cors = require("cors");
const path = require("path");
const { StatusCodes } = require("http-status-codes");

// Creating the reference on Express
const app = express();

const PORT = 4000;

//Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// import route
const CurdRoute = require("./routes/Route");
app.use(`/api/v1`, CurdRoute);

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is Start And Listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.message });
  }
};
startServer();
