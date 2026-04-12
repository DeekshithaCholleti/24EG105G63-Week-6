import exp from 'express'
import {connect} from 'mongoose';
import { empRoute} from './API/empApp.js';
import cors from "cors";
const app=exp();
//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
app.use(exp.json())
app.use('/emp-api',empRoute)
//DB connection
const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/empdb");
    console.log("DB connected");
    app.listen(4000, () => console.log("server listening on port 4000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};
connectDB();
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
