function Dice(numberSides){
  this.sides = numberSides;
  this.roll = function(){
    return Math.floor(Math.random() * this.sides) + 1;
  }
}