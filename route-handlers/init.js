const Datbase = require("better-sqlite3")
const db = new Datbase("social.db")

db.exec(`
    CREATE TABLE IF  NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        surname TEXT,
        salary INTEGER
    )  
`)