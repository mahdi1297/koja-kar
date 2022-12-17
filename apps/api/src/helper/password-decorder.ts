import * as bcrypt from 'bcrypt';

export function passworHasher(passText: string) {
  return new Promise((resolve) => {
    resolve(bcrypt.hashSync(passText, 10));
  });
}

// Compares dbPassword that is stored in db whit plainPassword
export function comparePasswords(dbPassword: string, plainPassword) {
  return new Promise((resolve, reject) => {
    try {
      bcrypt.compare(plainPassword, dbPassword, function (err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    } catch (err) {
      reject(err);
    }
  });
}
