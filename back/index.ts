import express, { Express } from 'express';
import dotenv from 'dotenv';
import CalendarRouter from "./routers/CalendarRouter"
import cors from "cors"
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;



app.use(express.json());
app.use(cors())


const calendarRouter = new CalendarRouter()
app.use('/calendar', calendarRouter.getRouter())

app.use(express.static(__dirname + "/pages/admin/static"));
app.use('/admin', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/admin/index.html'));
})

app.use(express.static(__dirname + "/pages/main/static"));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/main/index.html'));
})



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});