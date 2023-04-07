//structure
//Required External modules
//App Variables
//App Configuration
//Server Activation

//Required External modules
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

//App variables
dotenv.config()
const port = process.env.PORT;

//App Configuration
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('HelloWorldFrank!')
})

//Server Activation
app.listen(port, ()=>{
    console.log('Listening on port ${port}');
});



