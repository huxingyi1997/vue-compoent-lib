import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';
import type { QueryError } from 'mysql2';

dotenv.config();

const config = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

export function runSQL(
  sql: string,
  values: (string | number)[] | Record<string, string | number>
): Promise<any> {
  const conn = mysql.createConnection({ ...config });
  conn.connect();
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (err: QueryError | null, results: any) => {
      if (err) {
        conn.end();
        reject(err);
      } else {
        conn.end();
        resolve(results);
      }
    });
  });
}

function toHumpName(name: string): string {
  return name.replace(/_(\w)/g, function (all: string, letter: string) {
    return letter.toUpperCase();
  });
}

export function tranformModelData<T>(data: any): T {
  const result: any = {} as T;
  if (data) {
    Object.keys(data).forEach((key) => {
      const humpName = toHumpName(key);
      result[humpName] = data[key];
    });
  }
  return result;
}
