require("dotenv").config();
const DB_DATABASE=erupe
const DB_PORT=5432
const DB_HOST="0.0.0.0"
const DB_PASSWORD=123
const DB_USER=postgres

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({connectionString: isProduction ? process.env.DATABASE_URL : connectionString});

module.exports = { pool };