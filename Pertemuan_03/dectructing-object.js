// Dectructing

const req = {
    body: {
        name: "Alif",
        age: 21,
        major: "TI"
    },
};


// Memanggil nilai name, age, major
// console.log(req.body.name, req.body.age, req.body.major);

// Menyimpan nilai object ke variable terpisah 

// const name = req.body.name;
// const age = req.body.age;
// const major = req.body.major;

// console.log(name, age, major);

// Melakukan dectructing object berdasarkan key

const {name, age, major} = req.body;

console.log(name, age, major);



