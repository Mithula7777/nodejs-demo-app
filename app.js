const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello! My Node.js CI/CD Pipeline is Working!');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy'
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Application running on port 3000');
    });
}
