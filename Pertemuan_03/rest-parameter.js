// Membuat fungsi sum dengan rest parameter

// function sum(...numbers) {
//     let hasil = 0;

//     for (const number of numbers){
//         hasil += number;
//     }
    
//     return hasil;
// }

// console.log(sum(1, 2, 3, 4, 5));

// Membuat showfamily menggunakan rest parameter

function showFamilies(suami, istri, ...anakanak){
    console.log(`Suami : ${suami}`);
    console.log(`Istri : ${istri}`);

    for (const anak of anakanak){
        console.log(`Anak : ${anak}`);
    }
}

showFamilies("Mikel", "Hannah", "Jonas", "Marta", "Magnu");