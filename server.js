const express = require('express');
const cors = require('cors')
const { auth } = require('express-oauth2-jwt-bearer');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
  });
  
// enforce on all endpoints
//app.use(jwtCheck);

app.get('/',(req,res)=> {
   
    res.send('Hello from index route');
})

app.get('/protected',jwtCheck ,(req,res)=> {
    
    res.send('Hello from protected route');
})

app.listen(4000, ()=> console.log('Server on port 4000'))