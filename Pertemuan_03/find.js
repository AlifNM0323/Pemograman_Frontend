// Membuat array object

const users = [
    {
        name : "Jonas",
        age : 15,
    },

    {
        name : "Mikel",
        age : 40,
    },
    
    {
        name : "Hannah",
        age : 35,
    },

];

// Menjalankan method find

const foundUser = users.find(function (user){
    return user.age > 21;
});

console.log(foundUser);