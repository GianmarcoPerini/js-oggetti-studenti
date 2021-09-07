let student = {
    Name: "Gianmarco",
    Surname:"Perini",
    Age: 26
}

for(let x in student){
    console.log(x, ": ", student[x]);
}

let arrStudent = [
    {
        Name:"Marco",
        Surname:"Fas",
        Age: 31
    },

    {
        Name:"Gio",
        Surname:"Rin",
        Age: 40
    },

    {
        Name:"Tes",
        Surname:"Lea",
        Age: 21
    }
]



let request = prompt("Vuoi esegueire la registrazione?");

while(request == "si"){
    student = {
        Name: prompt("tuo Name"),
        Surname: prompt("tuo Surname"),
        Age: parseInt(prompt("tua età"))
    }
    arrStudent.push(student)
    request = prompt("Vuoi esegueire la registrazione?");
}

for(let y in arrStudent){
    console.log(y, ": ", arrStudent[y]);
}