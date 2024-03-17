/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE

import users from '../models/users.js';



/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const formattedUsers = users.map((user) => {
          return {
            name: title + ' ' + user.name, // Menggunakan operator + untuk menggabungkan string
            age: user.age,
            major: user.major
          };
        });
        resolve(formattedUsers);
      }, 3000); // Menunggu 3 detik sebelum mengembalikan hasil
    });
  };
  
  module.exports = formatUser;

  
  
  
  

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (users, name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = users.find(user => user.name === name);
        if (foundUser) {
          resolve(foundUser);
        } else {
          reject(new Error(`User with name ${name} not found`));
        }
      }, 2000); // Menunggu 2 detik sebelum mengembalikan hasil
    });
  };
  
//   module.exports = findByName;
  
  

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (users, major) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredUsers = users.filter(user => user.major === major);
        resolve(filteredUsers);
      }, 4000); // Menunggu 4 detik sebelum mengembalikan hasil
    });
  };
  
//   module.exports = filterByMajor;
  
  

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE

export { formatUser, findByName, filterByMajor };

