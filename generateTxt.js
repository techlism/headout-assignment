import fs from 'fs'
import crypto from 'crypto'

const generateRandomText = (sizeInBytes) => {
    const randomText = crypto.randomBytes(sizeInBytes).toString('hex');
    return randomText;
};

const createFile = (filePath, fileSizeInBytes, lineLength) => {
    const randomText = generateRandomText(fileSizeInBytes);
    const lines = [];

    for (let i = 0; i < randomText.length; i += lineLength) {
        lines.push(randomText.slice(i, i + lineLength));
    }

    const formattedText = lines.join('\n');

    fs.writeFile(filePath, formattedText, (err) => {
        if (err) {
            console.error(`Error creating file: ${err}`);
        }
    });
};

const fileSizeInBytes = 100 * 1024 * 1024; // 100MB
const lineLength = 80; 

for (let i = 0; i<=30; i++ ){
    const filePath = `./txtfiles/${i+1}.txt`;
    createFile(filePath, fileSizeInBytes, lineLength);
}