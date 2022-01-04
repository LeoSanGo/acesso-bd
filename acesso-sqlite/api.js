const categories = require('./categories')('./banco.sqlite3')
const products = require('./products')('./banco.sqlite3')

const test = async() => {
 /*  await categories.create([1, 'opa 1']);
  await categories.create([2, 'opa 2']);
  await categories.create([3, 'opa 3']);
  await categories.create([4, 'opa 4']);*/
  //await categories.remove([1]);
  //await categories.update(8, ['Categoria atualizada']); 
  /* console.log(await categories.findAll());
  console.log('cp: 0', await categories.findAllPaginated({ pageSize: 2, currentPage: 0 }));
  console.log('cp: 1', await categories.findAllPaginated({ pageSize: 2, currentPage: 1 }));
  console.log('cp: 2', await categories.findAllPaginated({ pageSize: 2, currentPage: 2 })); */

  //await products.create([2, 'aaaa', 90])
  //await products.addImage(2, [3, '<url3>', '<desc3>'])
  //await products.update(1, ['new prod', 89])
  await products.remove([1]) 
  console.log(await products.findAll());
  console.log('cp: 0', await products.findAllPaginated({ pageSize: 2, currentPage: 0 }));
  await products.updateCategories(1, [1])
  console.log(await products.findAllByCategory(8));
  
}

test();