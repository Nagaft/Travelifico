const msql = require("mysql2/promise");
const env_parse = require('dotenv').config();
if (env_parse.error) {
    throw env_parse.error;
} else {
    console.log(env_parse.parsed)
}

const createDb = async () => {

    const conn = process.env.DATABASE_URL
        ? await msql.createConnection(process.env.DATABASE_URL)
        : await msql.createConnection({
            user: "root",
            password: "Telecaster12",
            host: "localhost"
        });

    const created = await conn.execute("CREATE DATABASE IF NOT EXISTS travelifico_db");
    return created;
};

module.exports = { createDb };