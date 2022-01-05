const sqlite = require('sqlite3').verbose();

const openDatabase = databaseFile => new Promise((resolve, reject) => {
  const db = new sqlite.Database(databaseFile, (err) => {
    if(err) {
      reject(err)
    } else {
      resolve(db)
    }
  });
});

const init = async (databaseFile) => {
  const db = await openDatabase(databaseFile) 

   const exists = await query(db, `SELECT name from sqlite_master where type = 'table' and name = 'categories'`)

  await run(db, `
    CREATE TABLE categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT
    );
  `) 

  return db
}

const queryWithParams = (db, query, values) => new Promise((resolve, reject) => {
  db.run(query, values, err => {
    if (err){
      reject(err)
    } else {
      resolve();
    }
  });
});

const query = (db, query) => new Promise((resolve, reject) => {
  db.all(query, (err, rows) => {
    if (err){
      reject(err)
    } else {
      resolve(rows);
    }
  });
});

module.exports = {
  init,
  queryWithParams,
  query
}