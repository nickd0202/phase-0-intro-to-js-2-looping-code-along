const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

function writeCards(names, event ){
  let newArray = [];
  for(let num = 0; num <= names.length - 1; num++){
  newArray.push(`Thank you, ${names[num]}, for the wonderful ${event} gift!`);
    console.log(newArray);
  }
  return newArray;
}

wrapGifts(gifts);

function countDown(count){
  while (count >= 0){
    console.log(count);
    count--;
  }
}