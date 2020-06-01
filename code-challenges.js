// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lAckadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const encoder = (string) => {
  let code = string.toLowerCase().split("").map(value => {
    if(value === "a"){
      return 4
    } else if(value === "e"){
      return 3
    } else if(value === "i"){
      return 1
    } else if(value === "o"){
      return 0
    } else {
      return value
    }
  })
  return code.join("")
}
console.log(encoder(secretCodeWord1))
console.log(encoder(secretCodeWord2))



// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const doYouHaveAnA = (array) => {
  return array.filter(value => value.includes("a") || value.includes("A")).join(" ")
}
console.log(doYouHaveAnA(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const fullHouse = (array) => {
  let secondCard = null
  let hand = {
    card1: 0,
    card2: 0
  }
  array.forEach(value => {
    if(value === array[0]){
      hand.card1 += 1
    } else {
      secondCard = value
    }
  })
  array.forEach(value => {
    if(value == secondCard){
      hand.card2 += 1
    }
  })
  if(hand.card1 === 3 && hand.card2 === 2){
    return true
  } else if(hand.card1 === 2 && hand.card2 === 3){
    return true
  } else {
    return false
  }
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
