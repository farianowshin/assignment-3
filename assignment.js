//first problem solving :
function kilometerToMeter(kilometer){
    if(kilometer >= 0){
        var meter = kilometer*1000;
        return meter;
    }
    else{
        return "Result is not possible.";
    }
}
//testing with possitive input.
var result = kilometerToMeter(8);
console.log(result);
//testing with negative input.
var result2 = kilometerToMeter(-4);
console.log(result2);


//second problem solving :
function budgetCalculator(watch,mobile,laptop){
    if(watch >= 0 && mobile >= 0 && laptop >= 0){
        var watchCost = watch*50;
        var mobileCost = mobile*100;
        var laptopCost = laptop*500;
        var totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
    }
    else{
        return "Result is not possible";
    }
}
//testing with possitive input.
var result = budgetCalculator(2,5,6);
console.log(result);
//testing with negative and positive value together.
var result2 = budgetCalculator(-3,9,7);
console.log(result2);


//third problem solving :
function hotelCost(day){
    if(day >=1 && day <=10){
        var totalCost = day*100;
        return totalCost;
    }
    else if(day >=11 && day <=20){
        var firstPart = 10*100;
        var remaining = day-10;
        var secondPart = remaining*80;
        var totalCost = firstPart + secondPart;
        return totalCost;
    }
    else if(day>20){
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = day-20;
        var thirdPart = remaining*50;
        var totalCost = firstPart + secondPart + thirdPart;
        return totalCost;
    }
    else{
        return "There is no cost.";
    }
}
//testing with positive input.
var result = hotelCost(23);
console.log(result);
//testing with negative input.
var result2 = hotelCost(-8);
console.log(result2);


//fourth problem solving :
function megaFriend(friend){
    if(friend.length > 0){
        var largest = friend[0];
        for(var i=0; i<friend.length; i++){
            if(friend[i].length > largest.length){
                largest = friend[i];
            }
        }
        return largest;
    }
    else{
        return "It is not possible.";
    }
}
//testing with some name of my friends.
var friendName = ['faria','Nowshin','Mahima Nowrin','Najma','Serajul Hoque','Zehadh'];
var result1 = megaFriend(friendName);
console.log(result1);
//testing with empty array.
var friendName2 = [];
var result2 = megaFriend(friendName2);
console.log(result2);