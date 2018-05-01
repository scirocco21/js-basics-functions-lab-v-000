// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return block >= 42 ? block - 42 : 42 - block;
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(origin, destination) {
  return blocksTravelled(origin, destination) * 264;
}

function blocksTravelled(origin, destination) {
  return destination > origin ? destination - origin : origin - destination;
}

function calculatesFarePrice(origin, destination) {
  switch(true) {
    case: distanceTravelledInFeet(origin destination) <== 400 
    return 0
  }
}
