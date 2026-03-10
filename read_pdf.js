const fs = require('fs');
const PDFParser = require("pdf2json");

function parsePDF(file) {
    return new Promise((resolve, reject) => {
        const pdfParser = new PDFParser(this, 1);
        pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
        pdfParser.on("pdfParser_dataReady", pdfData => {
            resolve(pdfParser.getRawTextContent());
        });
        pdfParser.loadPDF(file);
    });
}

parsePDF('C:\\Users\\HP\\Desktop\\Rohit\'s Resume.pdf')
    .then(text => { fs.writeFileSync('resume.txt', text); console.log("Done1"); })
    .catch(err => {
        console.error("Error with Rohit's Resume.pdf:", err);
        return parsePDF('C:\\Users\\HP\\Desktop\\RohitBhardwaj_22BCS15703.pdf')
            .then(text => { fs.writeFileSync('resume.txt', text); console.log("Done2"); });
    })
    .catch(console.error);
