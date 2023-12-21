// packages imports
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

//securty packges
import helmet from "helmet";
import xss from "xss-clean";
// files imports
import connectDB from "./config/db.js";
// routes import
import authRoutes from "./routes/authRoutes.js";
import errroMiddelware from "./middelwares/errroMiddleware.js";
import jobsRoutes from "./routes/jobsRoute.js";
import userRoutes from "./routes/userRoutes.js";

//Dot ENV config
dotenv.config({path:"./config/.env"});
// mongodb connection
connectDB();

const app = express();
//middelwares
app.use(helmet());
app.use(xss());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// login signup routes for the user 
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);

app.use(errroMiddelware);

//port
const PORT = process.env.PORT || 5000;
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.MODE} Mode on port no ${PORT}`
  );
});

