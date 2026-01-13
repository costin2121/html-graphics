const express = require('express');
const fs = require('fs');
const path = require('path');
const { read3DModel } = require('./helpers')
const cors = require('cors');
const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors())
app.get('/3dmodels', (req, res) => {
    const modelFiles = fs.readdirSync(path.join(__dirname, "../models")).filter(f => f.endsWith('.obj'));
    const models = [];
    for (const file of modelFiles) {
        const content = fs.readFileSync(path.join(__dirname, "../models", file));
        
        models.push(read3DModel(file, content.toString()))
    }

    res.json(models);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));