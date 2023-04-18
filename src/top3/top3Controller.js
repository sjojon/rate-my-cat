// Sortere 5 top cats fra modell
let result = top5(catObject);
let list = '';
let list2 = '';

// let test = catObject.map(function (cat) {
//     let catScore = cat.furQuality + cat.faceCuteness + cat.charisma + cat.tail;
//     return { name: cat.name, catScore: catScore };
// });


// function top5() {
//     merged.sort(function (a, b) {
//         return b.score - a.score;
//     });
// }


function top5() {
    let copy = catObject.slice(); // For ikke å modifisere original objektet må det kopieres først
    let sortedCats = copy.sort(function (a, b) {
        let aScore = a.furQuality + a.faceCuteness + a.charisma + a.tail; // For å legge sammen til 1 sum
        let bScore = b.furQuality + b.faceCuteness + b.charisma + b.tail;
        return bScore - aScore; // b må stå først, hvis ikke så kommer laveste score på toppen
    });
    // console.log(sortedCats);
    reSorted = sortedCats;
    // console.log(reSorted);
    sortedCats = reSorted.map(function (cat) {
        let catScore = cat.furQuality + cat.faceCuteness + cat.charisma + cat.tail;
        return { name: cat.name, catScore: catScore };
    });
    // console.table(reSorted);
    // console.table(sortedCats);
    return sortedCats.slice(0, 5);
}



// Lister opp Top5
for (let i = 0; i < result.length; i++) {
    list += ` <li> ${result[i].name}: med ${result[i].catScore} poeng</li>`;
}

// Lister opp original objektet
for (let i = 0; i < catObject.length; i++) {
    list2 += ` <li> ${catObject[i].name}</li>`;
}




// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// cars.sort(function (a, b) {
//     return a.year - b.year;
// });