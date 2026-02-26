import express from 'express';

const PORT = 5001;
const app = express();

const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "There are 10 types of people in the world: those who understand binary and those who don't.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Why did the function break up with the loop? Too many cycles.",
    "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
    "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings.",
    "I told my computer I needed a break, and it said: 'No problem, I'll go to sleep.'",
    "Why do programmers hate nature? Too many bugs.",
    "What’s a programmer’s favorite place? The Foo Bar.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "Why was the computer cold? It forgot to close its Windows.",
    "What do you call 8 hobbits? A hob-byte.",
    "Why did the coder bring a ladder? To reach the high-level language.",
    "Why do Python programmers prefer snakes? Because they love indentation.",
    "Why did the developer stay calm? He had exception handling.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why was the bug so confident? It already passed QA."
];

const quotes = [
    "Discipline beats motivation when motivation fades.",
    "Small daily improvements lead to massive long-term results.",
    "Focus on progress, not perfection.",
    "Consistency is the real superpower.",
    "Your future is created by what you do today, not tomorrow.",
    "Do it scared, but do it.",
    "Hard work compounds just like interest.",
    "Growth begins at the edge of comfort.",
    "You don’t need to be perfect, just persistent.",
    "One step at a time is still progress.",
    "Dream big, start small, act now.",
    "Action cures fear.",
    "Stay patient and trust the process.",
    "Make today count.",
    "Push yourself, no one else will do it for you.",
    "Build habits, not excuses.",
    "Success is rented, and rent is due every day.",
    "Your comfort zone will not build your future.",
    "Struggle now, shine later.",
    "Progress, not excuses."
];

app.get('/', (req, res) => {
    res.json({
        "Message": "Hello CI/CD app...!!!"
    });
});

app.get("/quote", (req, res) => {
    const random = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[random] });
});

app.get("/joke", (req, res) => {
    const random = Math.floor(Math.random() * jokes.length);
    res.json({ quote: jokes[random] });
});


app.listen(PORT, () => {
    console.log(`Application server is listening on port ${PORT}`);
});