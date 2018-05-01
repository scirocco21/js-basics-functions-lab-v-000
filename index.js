// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return block >= 42 ? block - 42 : 42 - block;
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(origin, destination) {

}

function blocksTravelled(origin, destination) {
  return destination > origin ? destination - origin : origin - destination;
}
