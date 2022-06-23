const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.SERVERPORT || 3039;
const cors = require('cors');

app.use(cors({
  origin: "*"
}))


app.get('/health', (req: any, res: any) => {
  res.setHeader('Access-Control-Allow-Origin', `*`);
  res.send({
    status: 'ok'
  });
});

app.get('/yay', (req: any, res: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('hello from backend yay');
});

app.get('/pay', (req: any, res: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('give me pay');
});


app.get('/ok', (req: any, res: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('im ok');
});

app.get('/not', (req: any, res: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('im not');
});


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});