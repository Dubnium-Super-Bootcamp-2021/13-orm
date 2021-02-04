<<<<<<< HEAD
const { init } = require('./task/task.service');
const { run } = require('./server');
async function main() {
  try {
    console.log('connecting....');
    await init();
    console.log('Server connected');
  } catch (err) {
    console.error('Koneksi error = ', err);
    return;
  }
  run();
=======
const {
  init,
  writeData,
  readAllData,
  readOneData,
  deleteData,
  updateDataDone,
  updateDataCancel,
} = require('./lib/orm/main');

async function main() {
  const data = {
    name: 'Angga',
    email: 'angga@email.com',
    nohp: '123456789',
    address: 'Nganjuk',
    photo: 'hallo.png',
    bio: 'World',
  };

  const data2 = {
    job: 'Design',
    attachment: 'text.txt',
    done: false,
    cancel: false,
  };

  const conn = await init();
  //test writeData
  await writeData('Worker', data);
  await writeData('Task', data2);
  //test readAllData
  await readAllData('Task');
  //test readOneData
  await readOneData('Worker', 2);
  //test removeData
  await deleteData('Worker', 2);
  //test updateDataDone
  await updateDataDone('Task', 2, true);
  //test updateDataCancel
  await updateDataCancel('Task', 3, true);
  conn.close();
  // getConnection().close();
>>>>>>> 108bc2e6b8c674790a91d86060399e5332490c8e
}

main();
