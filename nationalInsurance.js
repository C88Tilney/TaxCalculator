document.getElementById("calculate").addEventListener("click", function insurance() {
    
    var x = parseInt(document.getElementById("income").value);
    var weeklyIncome = (x / 52);
    console.log(weeklyIncome);
    "use strict";
    

    // no NI
    if (weeklyIncome <= 155) { 
        money = 0;
    }

    // NI at 12%
    else if (weeklyIncome > 155 && weeklyIncome <= 827) {
        money = ((weeklyIncome-155) * 0.12);
        console.log(money);
    }

    // NI at 2% of money earnt over £827
    else if (weeklyIncome > 827 ) {
        var topRate = (weeklyIncome - 827);
        console.log(topRate);
        var normalRate = (827-155)*0.12;
        console.log(normalRate);
        var NIHiger = topRate * 0.02;
        console.log(NIHiger);
      
        money = (normalRate + NIHiger);
    }
        
    var monthlyNI = (money*52)/12;
    var yearlyNI = (money*52);
    
    // output
       document.getElementById("weeklyNI").innerHTML = money.toFixed(2);
    document.getElementById("monthlyNI").innerHTML = monthlyNI.toFixed(2);
    document.getElementById("yearlyNI").innerHTML = yearlyNI.toFixed(2);

});