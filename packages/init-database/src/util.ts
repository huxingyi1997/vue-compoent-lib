import * as dotenv from 'dotenv';
import * as mysql from 'mysql2';

dotenv.config();

export const database = process.env.MYSQL_DATABASE;

const config = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
};

const pool = mysql.createPool(config);
const poolDatabase = mysql.createPool({ ...config, ...{ database } });

export async function querySQLByPool(sql: string) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, results, fields) => {
      if (err) {
        pool.end();
        reject(err);
      } else {
        resolve({ results, fields });
      }
    });
  });
}

export async function queryDatabaseSQLByPool(sql: string) {
  return new Promise((resolve, reject) => {
    poolDatabase.query(sql, (err, results, fields) => {
      if (err) {
        pool.end();
        reject(err);
      } else {
        resolve({ results, fields });
      }
    });
  });
}

export async function queryDatabaseSQL(
  sql: string,
  values: (string | number)[]
) {
  const conn = mysql.createConnection({ ...config, ...{ database } });
  conn.connect();
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (err, rows) => {
      if (err) {
        conn.end();
        reject(err);
      } else {
        conn.end();
        resolve(rows);
      }
    });
  });
}

export async function closePools() {
  pool.end();
  poolDatabase.end();
}
