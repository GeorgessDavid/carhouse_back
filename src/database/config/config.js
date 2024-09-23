import mysql2 from 'mysql2';
import dotenv from 'dotenv'
dotenv.config();


export default {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        "port": process.env.DB_PORT,
        "dialectModule": mysql2
    },
    "test": {
        "username": "cmd",
        "paassword": "Levetiracetam 1500",
        "database": "cmd_pami_test",
        "host": "mysql-cmd.alwaysdata.net",
        "dialect": "mysql",
        "port": 3306,
        "dialectModule": mysql2
    }, 
    "production": {
        "username": "cmd",
        "password": "Levetiracetam 1500",
        "database": "cmd_pami",
        "host": "mysql-cmd.alwaysdata.net",
        "dialect": "mysql",
        "port": 3306,
        "dialectModule": mysql2
    }
}