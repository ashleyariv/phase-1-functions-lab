function distanceFromHqInBlocks(number){
    return Math.abs(number - 42);
}
function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number) * 264;
}
function distanceTravelledInFeet (start,end) {
    return Math.abs(start - end) * 264;
}
function calculatesFarePrice (start, end) {
   const distance = distanceTravelledInFeet (start,end);
   if (distance <= 400) {
    return 0;
   }
   if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } 
    if (distance > 2000 && distance < 2500) {
        return 25;
    }
    if (distance >= 2500) {
        return "cannot travel that far";
    }
}