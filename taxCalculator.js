// js code for tax on your salary income

document.getElementById("calculate").addEventListener("click", function tax() {
  var grossSalary = parseInt(document.getElementById("salary").value);

  if (grossSalary < 0) {
    document.getElementById("yearlyTax").innerHTML = "You owe someone money!";
  }

  if (grossSalary >= 0 && grossSalary < 11000) {
    document.getElementById("yearlyTax").innerHTML = "You pay no tax";
  }

  if (grossSalary >= 11000 && grossSalary < 43000) {
    document.getElementById("yearlyTax").innerHTML = ((grossSalary - 11000) * 0.20);
  }

  if (grossSalary > 43001 && grossSalary < 122000) {
    document.getElementById("yearlyTax").innerHTML = ((grossSalary - 11000) * 0.40);
  }

  if (grossSalary > 122001 && grossSalary < 150000) {
    document.getElementById("yearlyTax").innerHTML = (grossSalary * 0.40);
  }
  if (grossSalary >= 150000) {
    var additional = (grossSalary * 0.45);
      document.getElementById("yearlyTax").innerHTML = additional;
  }

});