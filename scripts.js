import express from 'express';
const CONST_PORTA = process.env.CONST_PORTA;
const app = express();

app.get('/', (request, response) => {
    response.json([
        {
            titolo_blog: "server del mio blog"
        },

        {
            titolo: "Introduzione a JavaScript",
            contenuto: "JavaScript è uno dei linguaggi più utilizzati per lo sviluppo web moderno.",
            immagine: "https://example.com/images/javascript.jpg",
            tags: ["javascript", "web", "programmazione"]
        },
        {
            titolo: "Guida ai CSS Flexbox",
            contenuto: "Flexbox permette di creare layout responsive in modo semplice ed efficace.",
            immagine: "https://example.com/images/flexbox.jpg",
            tags: ["css", "flexbox", "design"]
        },
        {
            titolo: "HTML per principianti",
            contenuto: "HTML è il linguaggio base per la creazione delle pagine web.",
            immagine: "https://example.com/images/html.jpg",
            tags: ["html", "frontend", "web"]
        },
        {
            titolo: "Node.js e backend",
            contenuto: "Node.js consente di sviluppare applicazioni server-side utilizzando JavaScript.",
            immagine: "https://example.com/images/nodejs.jpg",
            tags: ["nodejs", "backend", "javascript"]
        },
        {
            titolo: "Introduzione a React",
            contenuto: "React è una libreria JavaScript molto popolare per creare interfacce utente.",
            immagine: "https://example.com/images/react.jpg",
            tags: ["react", "frontend", "ui"]
        }
    ])
})


app.listen(CONST_PORTA, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('sei in ascolto sulla porta 300')
    }
});