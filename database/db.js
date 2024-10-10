import pgPromise from 'pg-promise';


const pgp = pgPromise();
const db = pgp({
    host: 'localhost',  // seu host
    port: 5433,         // sua porta
    database: 'CookiesDaMo',
    user: 'postgres',  // seu usuário do PostgreSQL
    password: 'postgres' // sua senha do PostgreSQL
});
db.query("SELECT 1 + 1 AS result").then((result)=>console.log(result))
export default db;
