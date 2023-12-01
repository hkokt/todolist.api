import Database from "./dto/Database";
import App from "./server/app";
const port = 8080;
new App().server.listen(port);
console.log(`server rodando na porta:${port}`);


Database.query('select 1+1 as teste;')
    .then(rs => console.log(rs))
    .catch(err => console.log(err))