let hq = 42;
function distanceFromHqInBlocks(location){
    return Math.abs(location - hq);
}


function distanceFromHqInFeet(location) {
    distanceFromHqInBlocks(location);
    return Math.abs(location -hq) * 264

}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
    
  }
 // if the distance > 400 feet it
 // is  return free


 function calculatesFarePrice(start, destination){
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet < 400) {
        return 0;
    } else if (distanceInFeet >= 400 && distanceInFeet < 2000){
        return (distanceInFeet - 400) * .02;
    } else if (distanceInFeet >= 2000 &&  distanceInFeet < 2500){
        return 25;
    } else
        return ('cannot travel that far');
    
 }


  
