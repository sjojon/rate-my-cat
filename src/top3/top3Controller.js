// Sortere 5 top cats fra modell
const catObject = model.data.cats;
let result = top5(catObject);
let list = '';
let list2 = '';




function top5() {
    let copy = catObject.slice(); // For ikke å modifisere original objektet må det kopieres først
    let sortedCats = copy.sort((a, b) => {
        let aScore = a.furQuality + a.faceCuteness + a.charisma + a.tail;
        let bScore = b.furQuality + b.faceCuteness + b.charisma + b.tail;
        return bScore - aScore; // b må stå først, hvis ikke så kommer laveste score på toppen
    });
    return sortedCats.slice(0, 5);
}

// Lister opp Top5
for (let i = 0; i < result.length; i++) {
    list += ` <li> ${result[i].name}</li>`;
}

// Lister opp original objektet
for (let i = 0; i < catObject.length; i++) {
    list2 += ` <li> ${catObject[i].name}</li>`;
}

