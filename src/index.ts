//structure
//Required External modules
//App Variables
//App Configuration
//Server Activation

import router from '@/routers/routes';

//Required External modules
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import validateEnv from '@/utils/validateEnv'; //import validateEnv
import usersRouter from './routers/users.routes';

//App variables
dotenv.config();

validateEnv(); //call validateEnv

const port = process.env.PORT;

//App Configuration
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());



//Server Activation
app.listen(port, () => {
  console.log('Listening on port ${port}');
});

//Routes
app.use('/',router);
app.use('/',usersRouter);