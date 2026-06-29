const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>GitHub Actions CI/CD Demo</h1>
        <h2>Updated Version 2.0</h2>
        <p>Application Successfully Deployed using GitHub Actions</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
