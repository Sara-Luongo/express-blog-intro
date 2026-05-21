import express from 'express';
const CONST_PORTA = process.env.CONST_PORTA;
const app = express();




app.listen(`${CONST_PORTA}`, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('sei in ascolto sulla porta 300')
    }
});