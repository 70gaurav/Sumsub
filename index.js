import  express  from "express";
import  cors from "cors";
import bodyParser from 'body-parser';
import { sequelize } from "./models/index.js";
import authrouter from "./routes/customerRoutes.js";


const app = express()
app.use(cors())
app.use(bodyParser.json());

app.use("/auth" , authrouter)

app.get("/" ,(req , res) => {
    res.send("hello world")
})













sequelize
  .sync() 
  .then(() => {
    app.listen(8080, () => {
      console.log('Server started at port 8080');
    });
  })
  .catch((err) => {
    console.error('Failed to sync models:', err);
  });

