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

const filterUser = users.filter(function (user){
    return user.age > 21;
});

console.log(filterUser);