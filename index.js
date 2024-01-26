import express from 'express';
import fs from 'fs';
import readline from 'readline';
const app = express();
const port = process.argv[2] || 8080;

app.get('/data', async (req, res) => {
    const { n, m } = req.query;
    if(!n){
        res.status(400).send('Missing n query parameter');
        return;
    } 
    if(parseInt(m) > 31){
        res.status(404).send('Number of files should be less than 31');
        return;
    }
    if(!n && !m){
        res.status(400).send('Missing n and m query parameters');
        return;
    }
    try {
        const filePath = `./txtfiles/${n}.txt`;
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let lineNumber = 1;
        let fileContent = '';

        for await (const line of rl) {
            if (m && lineNumber === parseInt(m)) {
                fileContent = line;
                break;
            } else if (!m) {
                fileContent += line + '\n';
            }
            lineNumber++;
        }
        res.send(fileContent);
    } catch (error) {
        res.status(500).send('Error reading file : '+ error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
