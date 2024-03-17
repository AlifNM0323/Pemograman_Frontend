// Dectructing

const req = {
    body: {
        name: "Alif",
        age: 21,
        major: "TI"
    },
};

const {name, major, age} = req.body;

console.log(req.body.name, req.body.age, req.body.major);

const family = ["Michael", "Hannah", "Jonas"];

const [suami, istri, anak] = family;

console.log(` Suami: ${suami}`);

