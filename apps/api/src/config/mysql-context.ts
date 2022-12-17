import mysql from 'mysql';

export async function connectMysqlContext() {
  const conn = mysql.connection({
    host: 'http://localhost:3306',
    user: 'root',
    password: 'yourpassword',
  });

  conn.connect(function (err) {
    if (err) {
      console.log(`error with connecting to mysql db; error object: ${err}`);
    }
    console.log(`successfully connected to mysql db`);
  });
}
