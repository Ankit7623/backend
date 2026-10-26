import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("server is ready");
});

// get a list 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 3,
            title: "Why did the bicycle fall over?",
            content: "Because it was two-tired!"
        },
        {
            id: 4,
            title: "Why did the math book look sad?",
            content: "Because it had too many problems!"
        },
        {
            id: 5,
            title: "Why did the tomato turn red?",
            content: "Because it saw the salad dressing!"
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});




