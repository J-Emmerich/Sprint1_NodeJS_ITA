//DOM variables
const exercici1 = document.getElementById('exercici1');
const exercici2 = document.getElementById('exercici2');
const exercici3 = document.getElementById('exercici3');
const exercici4 = document.getElementById('exercici4');
const exercici5 = document.getElementById('exercici5');
const answer = document.getElementById("answer");
const answerUl = answer.querySelector('ul');


exercici1.addEventListener('click', (e)=>{
    if(e.target.className == "button"){
        e.preventDefault()
        while(answerUl.firstChild){
            answerUl.removeChild(answerUl.firstChild);
        }
        let input = exercici1.querySelector('input');
        printLetters(input.value);
        exercici1.reset();
    }

})
exercici2.addEventListener('click', (e)=>{
    if(e.target.className == "button"){
        e.preventDefault()
        while(answerUl.firstChild){
            answerUl.removeChild(answerUl.firstChild);
        }
        let input = exercici2.querySelector('input');
        printPosition(input.value);
        exercici2.reset();
    }

})
exercici3.addEventListener('click', (e)=>{
    if(e.target.className == "button"){
        e.preventDefault()
        while(answerUl.firstChild){
            answerUl.removeChild(answerUl.firstChild);
        }
        let input = exercici3.querySelector('input');
        nameMap(input.value);
        exercici3.reset();
    }

})
exercici4.addEventListener('click', (e)=>{
    if(e.target.className == "button"){
        e.preventDefault()
        while(answerUl.firstChild){
            answerUl.removeChild(answerUl.firstChild);
        }
        let nombre = exercici4.querySelector('input');
        let apellido = document.getElementById("apellido");
        fullname(nombre.value, apellido.value);
        exercici4.reset();
    }

})
exercici5.addEventListener('click', (e)=>{
    if(e.target.className == "button"){
        e.preventDefault()
        while(answerUl.firstChild){
            answerUl.removeChild(answerUl.firstChild);
        }
        let input = exercici5.querySelector('input');
        findEmails(input.value);
        exercici5.reset();
    }

})


//Exercici 1
function printLetters(nombre){
    for(i = 0; i<nombre.length;i++){
        liMaker(nombre[i]);
    }

}


//Exercici 2

function printPosition(nombre){

    for(let i = 0; i<nombre.length;i++){
        
        if(nombre[i].search(/[aeiou]/i) !== -1){
            liMaker(`He trobat la vocal: ${nombre[i]} en la posición ${i}`);
        }else if(nombre[i].search(/[b-df-hj-np-tv-z]/i) !== -1){
            
            liMaker(`He trobat la consonant: ${nombre[i]} en la posición ${i}`);
        }else if(nombre[i].search(/[0-9]/) !== -1){
            liMaker(`Els noms de persones no contenen el número: ${nombre[i]} en la posición ${i}`);
        }
    }
}
    

//Exercici 3
function nameMap(nombre){
 let mapNombre = nombre.split("");
    mapNombre = mapNombre.map((lletra)=>{
        let vegades = 0;
        for(i = 0; i<nombre.length;i++){
            if(nombre[i] == lletra)
            vegades++;
        }
        return `${lletra}:${vegades}`
        
    }
    )
let mapNombreNoRepeat = [...new Set(mapNombre)]
    liMaker(mapNombreNoRepeat);
}

// Exercici 4

function fullname(nombre, cognom){
nombre = nombre.split("");
cognom = cognom.split("");
    let fullName = nombre.concat(" ", cognom);
    liMaker(fullName);
}


//Nivel 2

function findEmails(text){

    let myRegex = /[^\s\(]\S{1,}(?=@)\S{1,}\.\S{1,}[^\)\.\s:]/gi
    text = text.match(myRegex);
    let emailsNoRepeat = [...new Set(text)];
    liMaker(emailsNoRepeat);
}




function liMaker(text){
    const li = document.createElement('li');
    li.innerText = text;
answerUl.appendChild(li);
}