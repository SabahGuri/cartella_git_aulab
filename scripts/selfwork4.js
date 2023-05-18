//esercizio 1 selfwork 4

// let numero=prompt(`inserisci un numero che che può essere negativo,0 ,positivo.`)
// function checkNumber(num){
    
//     if(num<0){
//         alert(`il numero ${num} è negativo .`)
//     }else if(num==0){
//         alert(`hai inserito ${num}`)
//     }else if(num>0){
//         alert(`il numero ${num} è postivo. `)
//     }else{
//         alert(`non hai inserito un numero`)
//     }
//     return

// }
//     let finalReult=checkNumber(numero)

// esercizio 2 selfwork 4
// let n=prompt(`inserisci un dato qualsisi`);
// let m=prompt(`inserisci un dato qualsisi`);
// let check=true;

// function newFunction(argomento1,argomento2){
// if(argomento1===argomento2){
//     console.log(check)

// }else{
//     console.log(!check)
// }
// }
// newFunction(n,m)


// //esercizio scrivi una stringa e trova il numero di lettere
// let str1=prompt(`scrivi una frase`)
// let letter=0;

// function myFuntion(stringa,lettera){
// for(i=0;i<str1.length;i++){
//     let char=str1.charAt(i).toLowerCase()
//     switch(char){
//         case "s":
//             letter+=1
//             break

//     }
// }

// }
// myFuntion(str1,letter)

// console.log(letter)


//esercizio area cerchio
// function calculateArea(radius,precision){
//     let areaCircumference=Math.pow(radius,2)*Math.PI;
//     let areaFixed=areaCircumference.toFixed(precision);
//     return areaFixed
// }

// let calc=calculateArea(5,0)
// console.log(calc)






//esercizio FantaCalcio
// function votoTotale(baseVoto,golFatti,assistEffettuati,autogol,ammonizione,espulsione){
//     let votoGiocatore=baseVoto;
//     let bonusgol=golFatti*3;
//     let bonusAssist=assistEffettuati;
//     let malusAutogol=autogol;
//     let malAmmo=ammonizione;
//     let malEspul=espulsione;
//     if(malAmmo==true){
//         ammonizione==0,5;
//     }else{
//         ammonizione==0
//     }
//     if(malEspul==false){
//         espulsione==0
//     }else{
//         espulsione==2
//     }
//      let votoFinal=votoGiocatore+bonusgol+bonusAssist-malusAutogol-malAmmo-malEspul;
//      return votoFinal
    
// }


// let final=votoTotale(8,2,1,0,true,false)
// console.log(final)

//esercizio minigame
// let casualNumber=Math.random()*100;
// let fixedCasual=casualNumber.toFixed(0)
// const answ1=`pari`;
// const answ2=`dispari`;
// alert(`il numero casuale è ${fixedCasual},scegli se è pari o dispari`)
// let answ=prompt(`Rispondi "pari" se il numero è pari,Rispondi "dispari" se il numero è dispari`)
// function numeroPariODispari(num,answ){
    
    
//     if(num%2===0&&answ===answ1){
//         alert(`risposta corretta`)

//     }else if(num%2===0&&answ!=answ1){
//         alert(`${answ1} è la risposta corretta, tu invece hai risposto ${answ2}`)
//     }else if(!num%2===0&&answ===answ2){
//         alert(`la risposta corretta è ${answ2} e tu hai risposto correttamente`)
//     }else if(!num%2===0&&answ===answ1) {
//         alert(`${answ2} è la risposta giusta ma tu hai risposto ${answ1}`)
//     }else{
//         alert(`la tua risposta non rispetta i parametri 'pari'o 'diapari'!`)
//     }
//     return


// }
// let result=numeroPariODispari(fixedCasual,answ)











  
   

