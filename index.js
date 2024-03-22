//* Dinamik Typed Intrepretasiya olunan dil -> Javascript

//* 2 cur deyishen tip var: Primitive, referans
//* 1) primitive -> string "" '' `` ´´ (backtick)
//* boolean true false
//* undefined null
//* number 0, -1234

//* 2) referans -> [], {}

//* const let var
//* var -> 2009 standartidir



const telebeler = [
{
    fin:"5443CFD",
    name: "Sadiq",
    surname: "Nuriyev",
    isStudent: true
},
{
    fin:"6443CFD",
    name:"Kenan",
    surname:"Babayev",
    isStudent: false
},
{
    fin:"7443CFD",
    name: "Amin",
    surname: "Quliyev",
    isStudent: true,
},
{
    fin:"5443BFC",
    name: "Tahir",
    surname: "Esgerov",
    isStudent: false,
}
];

for(let i=0; i<telebeler.length; i++) {
    document.querySelector("tbody").innerHTML += `<tr>
<th scope="row"> ${telebeler[i].fin} </th>
<td> ${telebeler[i].surname} </td>
<td> ${telebeler[i].name} </td>
<td> ${telebeler[i].isStudent ? "Telebe tehsil alir" : "Telebe mezundur"}</td>
<td onclick="alert(Funksiya calisdi)"> <i class="bi bi-pencil-square"></i> </td>
<td> <i class="bi bi-trash"></i> </td>
</tr>`
}

//* DRY Dont Repeat Yourself

//* Regular Funksiya
//* function hesabla(eded1, eded2) {
//* return eded1 + eded2 }

//* Arrow Function
//* birsetirlik kodlar ucun nezerde tutulub.
const oxFunksiya = (eded1, eded2) => eded1+eded2
//* fiqurlu moterize {} olmayan yerde "return" funksiyasi olmaz !!!


console.log(oxFunksiya(65,54))

//* funksiyanin hansi novzu var?
//* 1. Regular funksiya
//* 2. Arrow funksiya
//* 3. IIFE Immediately Invoked Function Expression

(function() {
    console.log("Hello") //* IIFE
}())