// js code for tax on your salary income

document.getElementById("calculate").addEventListener("click", function tax() {
    
    var x = parseInt(document.getElementById("income").value);
    console.log(x);
    "use strict";


    if (x < 0) {
        money = "You owe someone money!";
    }

    else if (x >= 0 && x < 11000) {
        money = "You pay no tax";
    }

    else if (x >= 11000 && x < 43000) {
        money = ((x - 11000) * 0.20);
    }

    else if (x > 43001 && x < 122000) {
        money = ((x - 11000) * 0.40);
    }

    else if (x > 122001 && x < 150000) {
        money = (x * 0.40);
    }
    else if (x >= 150000) {
        money = (x * 0.45);
    }
    
    console.log(money);

    document.getElementById("yearlyTax").innerHTML = money;
    
    var monthlyTax = (money/12);
    var weeklyTax = (money/52);
    
    document.getElementById("monthlyTax").innerHTML = monthlyTax;
    document.getElementById("weeklyTax").innerHTML = weeklyTax;
    

});
