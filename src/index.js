import express from 'express';

const PORT = 5001;
const app = express();

app.get('/', (req, res) => {
    res.json({
        "Message": "Hello...!!!"
    });
});

app.listen(PORT, () => {
    console.log(`Application server is listening on port ${PORT}`);
});