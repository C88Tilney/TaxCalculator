//ADD Event Listeners 
document.getElementById("calculate").addEventListener("click", validate, false);


//Validation Function
function validate(){
    var x = parseInt(document.getElementById("income").value);
    
    if (x < 0 || isNaN(x)) {
        alert("Incorrect input. Please place a your salary in the box.");
    }
    else {
        tax();
    }
}



// js code for tax on your salary income

    function tax() {
    var x = parseInt(document.getElementById("income").value);

    // no income tax
    if (x <= 11000) { 
        TaxPerYear = 0;
    }

    // £11000 tax free allowance then rest of money is tax to 20%
    else if (x > 11000 && x <= 32000) {
        TaxPerYear = ((x - 11000) * 0.20);
    }

    // £11000 tax free allowance money earnt between £11000 to £32000 is tax at 20%. Money earnt above £32000 is taxed at 40%
    else if (x > 32000 && x <= 100000) {
        var totalTaxable = (x - 11000);
        //console.log(totalTaxable);
        var moneyTaxedAtHigherRate = (x - (32000+11000));
        //console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = ((totalTaxable - moneyTaxedAtHigherRate) * 0.20);
        //console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        //console.log(higerRateAmount);
        TaxPerYear = (basicRateAmount + higerRateAmount);
    }
    
    // tax taxed as before, but for every £2 you earn over £100000, £1 is taken off your £11000 tax free allowance
    else if (x > 100000 && x < 122000) {
        var allowance = ((x -100000) / 2);
        var taxFree = (11000 - allowance);
        //console.log(allowance);
        var moneyTaxedAtHigherRate = (x - (taxFree + 32000));
        //console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = (32000 * 0.20);
        //console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        //console.log(higerRateAmount);
        TaxPerYear = (basicRateAmount + higerRateAmount);
        
    }

    // no tax allowance so all your income is taxed
    else if (x >= 122000 && x <= 150000) {
        //console.log(x);
        var moneyTaxedAtHigherRate = (x - 32000);
        //console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = (32000 * 0.20);
        //console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        //console.log(higerRateAmount);
        TaxPerYear = (basicRateAmount + higerRateAmount);
        
    }
    
    // Additional rate taxed, so any money make above £150000 is taxed at 45%
    else if (x > 150000) {
        //console.log(x);
        var moneyTaxedAtHigherRate = (150000 - 32000);
        //console.log(moneyTaxedAtHigherRate);
        var basicRateAmount = (32000 * 0.20);
        //console.log(basicRateAmount);
        var higerRateAmount = (moneyTaxedAtHigherRate * .40);
        //console.log(higerRateAmount);
        var additionalRateBand = ((x - 150000)* .45)
        TaxPerYear = (basicRateAmount + higerRateAmount + additionalRateBand);
    }
    
    //var to calculate the monthly, weekly and money taken home for the year.
    //console.log(TaxPerYear);
    var monthlyTax = (TaxPerYear/12);
    var weeklyTax = (TaxPerYear/52);
    
    
    // output onto the HTML doc
    document.getElementById("yearlyTax").innerHTML = TaxPerYear.toFixed(2);
    document.getElementById("monthlyTax").innerHTML = monthlyTax.toFixed(2);
    document.getElementById("weeklyTax").innerHTML = weeklyTax.toFixed(2);
    
   
    // National Insurance Calculation
 
    var weeklyIncome = (x / 52);
    //console.log(weeklyIncome);
    "use strict";
    

    // no NI
    if (weeklyIncome <= 155) { 
        weeklyNI = 0;
    }

    // NI at 12%
    else if (weeklyIncome > 155 && weeklyIncome <= 827) {
        weeklyNI = ((weeklyIncome-155) * 0.12);
        //console.log(weeklyNI);
    }

    // NI at 2% of money earnt over £827
    else if (weeklyIncome > 827 ) {
        var topRate = (weeklyIncome - 827);
        //console.log(topRate);
        var normalRate = (827-155)*0.12;
        //console.log(normalRate);
        var NIHiger = topRate * 0.02;
        //console.log(NIHiger);
      
        weeklyNI = (normalRate + NIHiger);
    }
        
    var monthlyNI = (weeklyNI*52)/12;
    var yearlyNI = (weeklyNI*52);
    
    // output for NI
    document.getElementById("weeklyNI").innerHTML = weeklyNI.toFixed(2);
    document.getElementById("monthlyNI").innerHTML = monthlyNI.toFixed(2);
    document.getElementById("yearlyNI").innerHTML = yearlyNI.toFixed(2);
    
      
        
        
    // Calculation for money taken home per year
    
    var takeHome = x - (TaxPerYear + yearlyNI)
    //console.log(weeklyNI);
    //console.log(x);
    //console.log(yearlyNI);
    document.getElementById("takeHome").innerHTML = takeHome.toFixed(2);
    

};

