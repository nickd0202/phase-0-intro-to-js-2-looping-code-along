function countDown(){
    for (let i = 10; i >= 0; i--){
        console.log(i);
    }
}

function writeCards(names, celebrations){
    let card =[];
    for (let j = 0; j < names.length; j++){
       let message = `Thank you, ${names[j]}, for the wonderful ${celebrations} gift!`;
        card.push(message);
    }
     return card;
}
