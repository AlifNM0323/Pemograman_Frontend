/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */

const users = [
  { name: "Gina", age: 25, major: "Computer Science" },
  { name: "Jemi", age: 30, major: "Mathematics" },
  { name: "Ali", age: 22, major: "Biology" },
  { name: "Boby", age: 28, major: "Physics" },
  { name: "Evelin", age: 35, major: "Chemistry" }
];

console.log(users);

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  users.forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`);
  });
};

all();

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */

const store = (user) => {
  users.push(user);
  console.log(`${user.name} has been added.`);
};

const newUser = { name: "Ali", age: 22, major: "Biology" };
store(newUser);

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */

const update = (index, user) => {
  if (index >= 0 && index < users.length) {
    users[index] = user;
    console.log(`User at index ${index} has been updated.`);
  } else {
    console.log(`Invalid index: ${index}`);
  }
};

const updatedUser = { name: "Jane Doe", age: 28, major: "Psychology" };
update(1, updatedUser);

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */

const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    const deletedUser = users.splice(index, 1)[0];
    console.log(`User at index ${index} (${deletedUser.name}) has been deleted.`);
  } else {
    console.log(`Invalid index: ${index}`);
  }
};

destroy(2);

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
