/* eslint-disable no-console */
import { closePools, queryDatabaseSQL } from './util';
import selectDemo from './sql/select_material_log.sql?raw';

async function main() {
  const data = await queryDatabaseSQL(selectDemo, []);
  console.log('data ===', data);

  await closePools();
}

main();
