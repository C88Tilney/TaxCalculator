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

    else if (x >= 11000 && x < 32000) {
        money = ((x - 11000) * 0.20);
    }

    else if (x > 32001 && x < 99000) {
        var totalTaxable = (x - 11000);
        console.log(totalTaxable);
        var moneyTaxedAtHigherRate = (x - (32000+11000));
        console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = ((totalTaxable - moneyTaxedAtHigherRate) * 0.20);
        console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        console.log(higerRateAmount);
        money = (basicRateAmount + higerRateAmount);
    }

    else if (x > 100000 && x < 149999) {
        console.log(x);
        var moneyTaxedAtHigherRate = (x - 32000);
        console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = (32000 * 0.20);
        console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        console.log(higerRateAmount);
        money = (basicRateAmount + higerRateAmount);
        
    }
    else if (x >= 150000) {
        console.log(x);
        var moneyTaxedAtHigherRate = (150000 - 32000);
        console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = (32000 * 0.20);
        console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        console.log(higerRateAmount);
        var additionalRateBand = ((x - 150000)* .45)
        money = (basicRateAmount + higerRateAmount + additionalRateBand);
    }
    
    console.log(money);
    var monthlyTax = (money/12);
    var weeklyTax = (money/52);
    var takeHome = (x-money);
    
    
    document.getElementById("yearlyTax").innerHTML = money.toFixed(2);
    document.getElementById("monthlyTax").innerHTML = monthlyTax.toFixed(2);
    document.getElementById("weeklyTax").innerHTML = weeklyTax.toFixed(2);
    document.getElementById("takeHome").innerHTML = takeHome.toFixed(2);

});
