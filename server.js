/**
 * @readonly
 * @require {bring library in node_modules}
 * @app {express intence}
 * @todo
 */

const express = require('express');
const app = express();

/**
 * @listen {server port, runing function}
 * @port {8080}
 * port crush
 * To use port number command / netstat -tnlp
 * terminal - sudo lsof -i {port number} / usering port check
 *          - sudo kill -9(9mean : kill process) {PID value}
 * web Brower - localhost:{port number} - local computer enter in port number
 */
app.listen(8080, function() {
  console.log("listening on 8080")
});

/**
 * {ex1} 경로 들어오면 {ex2}를 보내줌
 */