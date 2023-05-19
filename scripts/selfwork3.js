//esercizio 1

// let v=null;
// v=prompt(`scrivi il voto del tuo esame!`)
// if(v>0&&v<18){
//     alert(`devi studiare di più,il tuo voto è insufficiente!`)

// }else if(v>=18&&v<=21){
//     alert(`hai superato l'esame ma potevi fare meglio`)

// }else if(v>21&&v<=24){
//     alert(`si vede che hai studiato, la prossima volta andra meglio`)
// }else if(v>24&&v<=27){
//     alert(`si vede che ti sei impegnato , hai sostenutop un buonissimo esame`)
// }else if(v>27&&v<=29){
//     alert(`ottimo lavoro sei vicino alla perfezione`)

// }else if(v===30){
//     alert(`eccellente, hai sostenuto un esame perfetto`)

// }else{
//     alert(`hai scritto un voto non valido`)
// }


//esercizio 2

// let num=prompt(`scrivi un numero e ti calcolerò la tabellina fino a 10`)
// for(let i=0;i<=10;i++){

// console.log(`${num}X${i}=${num*i}`)
// }

// esercizio 3

// let password=prompt(`digita la tua pasword`)
// if(password.length<6||password.length>20){
//     alert(`la password deve contemere minimo 6 e massimo 20 cartteri`)

// }else if(!password.includes(`!`||!password.includes(`-`)||!password.includes(`_`))){
//     alert(`la password deve contenere uno di queseti caratteri ; “!”, “_”, “-” `)
// }else if(!/\d/.test(password)){
//     alert(`la password deve contenere almeno 1 numero`)
// }else{
//     console.log(`la password è stata scritta bene`)
// }


//esercizio 4
// const text=`Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo

// “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC

// “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

// Traduzione del 1914 di H. Rackham

// "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

// La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC

// "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

// Traduzione del 1914 di H. Rackham

// "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”`;

// let vocale_a=0;
// let vocale_e=0;
// let vocale_i=0;
// let vocale_o=0;
// let vocale_u=0;
// let totalvocali=0;

// //console.log(textFinal)
// //console.log(textFinal.length)
// for(let i=0;i<text.length;i++){
//   let textFinal=text.charAt(i).toLowerCase()
//   switch(textFinal){
//     case "a":
//         vocale_a+=1
//         totalvocali+=1
//         break;
//     case "e" :
//         vocale_e+=1
//         totalvocali+=1

//         break;
//     case "i":
//         vocale_i+=1
//         totalvocali+=1

//         break;
//     case "o":
//         vocale_o+=1
//         totalvocali+=1

//         break;
//     case "u":
//         vocale_u+=1
//         totalvocali+=1

//         break;
//   }
    

   
// }
// console.log(`vocale a ${vocale_a}\n vovale e ${vocale_e}\nvocale i ${vocale_i}\nvovale o ${vocale_o}\nvocale u ${vocale_u}`);
// console.log(totalvocali);

// esercizio 5

//let numeroTiri = parseInt(prompt("Inserisci il numero di tiri per ciascun giocatore:"));



// const n=5;
// let resutPlayer1=0;
// let resutPlayer2=0;
// for(let i=0;i<n;i++){
//    let rolls=Math.floor(Math.random()*6)+1;
//    let rolls2=Math.floor(Math.random()*6)+1;
  
//    resutPlayer1+=rolls
//    resutPlayer2+=rolls2
//    console.log(`Tiro`,i,`giocatore 1 ha fatto:`,rolls)
//    console.log(`Tiro: ${i} giocatore 2 ha fatto: ${rolls2}`)

// }
// console.log(`Il giocatore 1 ha totalizzato:`,resutPlayer1,`\n il giocatore 2 ha totalizzato`,resutPlayer2)

// if(resutPlayer1>resutPlayer2){
//     console.log(`il giocatore 1 ha vinto con il punteggio di ${resutPlayer1}`)
// }else if(resutPlayer1<resutPlayer2){
//     console.log(`il giocatore 2 ha vinto con il punteggio di ${resutPlayer2}`)
// }else{
//     console.log(`il due giocatori hanno pareggiato con i risultati ${resutPlayer1} a ${resutPlayer2}`)
// }