/* eslint-disable no-console */
import * as dotenv from 'dotenv';
import * as mysql from 'mysql2';
import type { ResultSetHeader } from 'mysql2';

dotenv.config();

// 需要创建的数据库名称
const database = process.env.MYSQL_DATABASE;
// 数据库连接配置
const config = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
};

// 封装连接执行方法
function queryDatabaseSQL(sql: string, values: (string | number)[]) {
  const conn = mysql.createConnection({ ...config, ...{ database } });
  conn.connect();
  return new Promise<ResultSetHeader | unknown[]>((resolve, reject) => {
    conn.query(sql, values, (err, rows: ResultSetHeader) => {
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

async function init() {
  // 更新数据 SQL 语句
  const sql = `
  UPDATE user_info SET username=?  WHERE id=?;
  `;

  // 执行更新数据操作
  const data: ResultSetHeader = (await queryDatabaseSQL(sql, [
    'hi_vue_001',
    1
  ])) as ResultSetHeader;
  console.log(
    `运营搭建平台 - 数据表 user_info 成功更新${data?.affectedRows}条数据`
  );
  console.log(data);
}

// 开始执行数据库操作
init();
