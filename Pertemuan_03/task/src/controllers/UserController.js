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
// const formatUser = (title) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const formattedUsers = users.map((user) => {
//           return {
//             name: title + ' ' + user.name, // Menggunakan operator + untuk menggabungkan string
//             age: user.age,
//             major: user.major
//           };
//         });
//         resolve(formattedUsers);
//       }, 3000); // Menunggu 3 detik sebelum mengembalikan hasil
//     });
//   };
  
//   module.exports = formatUser;

const formatUser = (title) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // Sample data users
          const users = [
            {
              name: "Aufa",
              age: 22,
              major: "Frontend Engineer",
            },
            {
              name: "Isfa",
              age: 20,
              major: "Android Engineer",
            },
            {
              name: "Agung",
              age: 24,
              major: "Data Engineer",
            },
            {
              name: "Nurul",
              age: 24,
              major: "English",
            },
            {
              name: "Jaki",
              age: 27,
              major: "English",
            },
          ];

          // Format user names
          const formattedUsers = users.map((user) => {
              return {
                name: title + ' ' + user.name, // Menggunakan operator + untuk menggabungkan string
                age: user.age,
                major: user.major
              };
          });

          resolve(formattedUsers);
      }, 3000); // Wait for 3 seconds before returning the result
  });
};


/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
// const findByName = (name) => {};
// UserController.js


// Definisikan fungsi findByName
const findByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.name === name);
      if (user) {
        resolve(user);
      } else {
        reject(new Error(`Tidak ada pengguna dengan nama ${name}`));
      }
    }, 2000);
  });
};

// export { findByName };


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
// const filterByMajor = (major) => {};
const filterByMajor = (major) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usersWithMajor = users.filter((user) => user.major === major);
      if (usersWithMajor.length > 0) {
        resolve(usersWithMajor);
      } else {
        reject(new Error(`Tidak ada pengguna dengan major ${major}`));
      }
    }, 4000);
  });
};



/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE

export { formatUser, findByName, filterByMajor };
