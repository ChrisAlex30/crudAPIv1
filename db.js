import pkg from 'pg';
import "dotenv/config"
const { Pool } = pkg; 

const db = new Pool({
  host: process.env.CONN_STR_host,
  user: process.env.CONN_STR_user,
  database:process.env.CONN_STR_database,
  password:process.env.CONN_STR_password,
  port:process.env.CONN_STR_port
})



export default db;