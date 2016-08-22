// js code for tax on your salary income

document.getElementById("calculate").addEventListener("click", function tax() {
    
    var x = parseInt(document.getElementById("income").value);
    console.log(x);
    "use strict";
    

    // no income tax
    if (x <= 11000) { 
        money = 0;
    }

    // £11000 tax free allowance then rest of money is tax to 20%
    else if (x > 11000 && x <= 32000) {
        money = ((x - 11000) * 0.20);
    }

    // £11000 tax free allowance money earnt between £11000 to £32000 is tax at 20%. Money earnt above £32000 is taxed at 40%
    else if (x > 32000 && x <= 100000) {
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
    
    // tax taxed as before, but for every £2 you earn over £100000, £1 is taken off your £11000 tax free allowance
    else if (x > 100000 && x < 122000) {
        var allowance = ((x -100000) / 2);
        var taxFree = (11000 - allowance);
        console.log(allowance);
        var moneyTaxedAtHigherRate = (x - (taxFree + 32000));
        console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = (32000 * 0.20);
        console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        console.log(higerRateAmount);
        money = (basicRateAmount + higerRateAmount);
        
    }

    // no tax allowance so all your income is taxed
    else if (x >= 122000 && x <= 150000) {
        console.log(x);
        var moneyTaxedAtHigherRate = (x - 32000);
        console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = (32000 * 0.20);
        console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        console.log(higerRateAmount);
        money = (basicRateAmount + higerRateAmount);
        
    }
    
    // Additional rate taxed, so any money make above £150000 is taxed at 45%
    else if (x > 150000) {
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
    
    //var to calculate the monthly, weekly and money taken home for the year.
    console.log(money);
    var monthlyTax = (money/12);
    var weeklyTax = (money/52);
    var takeHome = (x-money);
    
    // output onto the HTML doc
    document.getElementById("yearlyTax").innerHTML = money.toFixed(2);
    document.getElementById("monthlyTax").innerHTML = monthlyTax.toFixed(2);
    document.getElementById("weeklyTax").innerHTML = weeklyTax.toFixed(2);
    document.getElementById("takeHome").innerHTML = takeHome.toFixed(2);

});
