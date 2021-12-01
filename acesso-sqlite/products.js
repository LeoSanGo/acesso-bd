const db = require('./db');
const init = database => {

  const create = async(data) => {
    const dbConn = await db.init(database);
    await db.queryWithParams(dbConn, `insert into products (id, product, price) values(?, ?, ?)`, data);
  }

  const findAll = async() => {
    const dbConn = await db.init(database);
    return await db.query(dbConn, `select * from products`);
  }

  const remove = async(id) => {
    const dbConn = await db.init(database);
    await db.queryWithParams(dbConn, `delete from products where id = ?`, [id]);
  }

  const update = async(id, data) => {
    const dbConn = await db.init(database);
    await db.queryWithParams(dbConn, `update products set product=?, price=? where id=?`, [...data, id]);
  }

  const findAllPaginated = async({ pageSize = 1, currentPage = 0 }) => {
    const dbConn = await db.init(database);
    const records = await db.query(dbConn, `select * from products limit ${currentPage*pageSize}, ${pageSize+1}`);
    if (records.length > pageSize) {
      records.pop();
    }
    return {
      data: records,
      hasNext: records.length > pageSize
    };
  }
  return {
    findAll,
    findAllPaginated,
    remove, 
    create,
    update
  }
}

module.exports = init