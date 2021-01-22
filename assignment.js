//https://github.com/mijankarim/javascript-problem-solving
// Problem one
function kilometerToMeter(kilometer){
    if (kilometer < 0) {
        return "Distance should not be negetive integer!!!"
    } else {
        return kilometer * 1000;        
    }    
}


// Problem two
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Number of Product Should not be Negetive!!!";
    } else {
        return totalPrice = (watch * 50) + (phone * 100) + (laptop * 500);
    }    
}


// Problem three
function hotelCost(day) {
    var cost = 0;
    if (day < 0) {
        return "Number of days can not be negetive integer!!!"
    } else if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstTendays = 10 * 100;
        var remaining = day -10;
        var secondTendays = remaining * 80;
        cost = firstTendays + secondTendays;
    } else {
        var firstTendays = 10 * 100;
        var secondTendays = 10 * 80;
        var remaining = day - 20;
        var thirdTendays = remaining * 50;
        cost = firstTendays + secondTendays + thirdTendays;
    }
    return cost;
}

// Problem four
function megaFriend(friends) {
    var maxLength = 0 ;
    var longestName = '';
    if (friends.length == 0 || !Array.isArray(friends)) {
        console.log("Input is not an Array or Array is empty!!!");
    } else {
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length > maxLength) {
                maxLength = friends[i].length;
                longestName = friends[i];
            }
        }
    }
    return longestName;
}
