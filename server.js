const http = require("http");
const fs = require("fs"); 

const localhost = "127.0.0.1";
const port = 4001;

const server = http.createServer((req, res) => {
const url = req.url;

if (url === "/sobre") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
const arquivoHtml = fs.readFileSync("./sobre.html", "utf8");
    res.end(arquivoHtml);
} else {

res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
res.write("Esta página não existe.");
res.end();
}
});

server.listen(port, localhost, () => {
console.log(`O servidor está rodando...`);
});
