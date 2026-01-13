const express = require('express');
const fs = require('fs');
const path = require('path');
const { read3DModel } = require('./helpers.js')
const cors = require('cors');
const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors())

app.use('/', express.static(path.join(__dirname + '/public')));

app.get((req, res) => {
    res.status(404).send("<h1>Error 404: Resource Not Found</h1>");
})

app.get('/3dmodels', (req, res) => {
    const modelFiles = fs.readdirSync(path.join(__dirname, "/public/models")).filter(f => f.endsWith('.obj'));
    const models = [];
    for (const file of modelFiles) {
        const content = fs.readFileSync(path.join(__dirname, "/public/models", file));
        
        models.push(read3DModel(file, content.toString()))
    }

    res.json(models);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));