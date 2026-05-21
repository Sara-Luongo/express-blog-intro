import express from 'express';
const CONST_PORTA = process.env.CONST_PORTA;
const app = express();

const posts = [{
    titolo: "Introduzione a JavaScript",
    contenuto: "JavaScript è uno dei linguaggi più utilizzati per lo sviluppo web moderno.",
    immagine: "http://localhost:3000/javascript.png",
    tags: ["javascript", "web", "programmazione"]
},
{
    titolo: "Guida ai CSS Flexbox",
    contenuto: "Flexbox permette di creare layout responsive in modo semplice ed efficace.",
    immagine: "http://localhost:3000/css.png",
    tags: ["css", "flexbox", "design"]
},
{
    titolo: "HTML per principianti",
    contenuto: "HTML è il linguaggio base per la creazione delle pagine web.",
    immagine: "http://localhost:3000/html.png",
    tags: ["html", "frontend", "web"]
},
{
    titolo: "Node.js e backend",
    contenuto: "Node.js consente di sviluppare applicazioni server-side utilizzando JavaScript.",
    immagine: "http://localhost:3000/node.js.png",
    tags: ["nodejs", "backend", "javascript"]
},
{
    titolo: "Introduzione a React",
    contenuto: "React è una libreria JavaScript molto popolare per creare interfacce utente.",
    immagine: "http://localhost:3000/react.png",
    tags: ["react", "frontend", "ui"]
}
];
//prima rotta
app.get('/', (request, response) => {
    response.json(
        {
            titolo_blog: "server del mio blog"
        },
    )
});
//seconda rotta 
app.get('/bacheca', (request, response) => {
    response.json(posts)
});

//middlewere static
app.use(express.static("pubblic"))


app.listen(CONST_PORTA, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('sei in ascolto sulla porta 300')
    }
});