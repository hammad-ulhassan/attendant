// const express = require('express');
const dotenv = require('dotenv');
import express from 'express';
dotenv.config();

const app = express();
const port: string | number = process.env.SERVERPORT || 3039;
const token: string | undefined = process.env.ACCESS_TOKEN
const cors = require('cors');

app.use(cors({
  origin: "*"
}))

// export const getGist = async (id: string) => {
//   const response = await fetch(`https://api.github.com/gists/${id}`, {
//     headers: new Headers({
//       Authorization: `Bearer ${API_KEY}`,
//       Accept: "application/json",
//     }),
//   });
//   if (!response.ok) {
//     throw new Error("Gist Data coud not be fetched!");
//   } else {
//     const res: IGist = await response.json();
//     return res;
//   }
// };

app.get('/gistData', (req:any, res:any)=>{
  console.log(req)
})


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