function tailsNeverFails(){
  let tails = Math.random() >= 0.5
  if (tails) 
    return tails + 1 
  end 
}
while (tailsNeverFails()) {
  console.log('You got ${tails} tails in a row! ')
}


function moveDodgerRight() {
 var rightNumbers = dodger.style.right.replace('px', '')
 var right = parseInt(rightNumbers, 10)
 
 if (right > 0) {
   dodger.style.right = `${right + 1}px`
 } 
} 

document.addEventListener('keydown', function(e) {
  if (e.which === 36) {
    moveDodgerRight()
  }
})