const categories = require('./categories');

const test = async() => {
 /*  await categories.create([1, 'opa 1']);
  await categories.create([2, 'opa 2']);
  await categories.create([3, 'opa 3']);
  await categories.create([4, 'opa 4']);*/
  //await categories.remove([1]);
  //await categories.update(8, ['Categoria atualizada']); 
  console.log(await categories.findAll());
  console.log('cp: 0', await categories.findAllPaginated({ pageSize: 2, currentPage: 0 }));
  console.log('cp: 1', await categories.findAllPaginated({ pageSize: 2, currentPage: 1 }));
  console.log('cp: 2', await categories.findAllPaginated({ pageSize: 2, currentPage: 2 }));
}

test();