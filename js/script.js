document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("investmentForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});
function calculateInvestment() {
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
    const annualinterestRate = parseFloat(document.getElementById("rate").value) / 100;
    const compoundFreq = parseInt(document.getElementById("compoundFrequency").value) || 1;
    const years = parseInt(document.getElementById("years").value) || 0;

    const depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
    const depositFreq = parseInt(document.getElementById("depositFrequency").value) || 1;

    const withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
        const withdrawalFreq = parseInt(document.getElementById("withdrawalFrequency").value) || 1;

    if (initialInvestment <= 0 || annualinterestRate <= 0 || compoundFreq <= 0 || years <= 0) {
        alert("Please enter valid values");
        return;
    }

    let futureValue = initialInvestment;
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    let balances = [initialInvestment];
    let yearsArr = [0];

    const compoundFactor = Math.pow(1 + annualinterestRate / compoundFreq, compoundFreq);

    for (let i = 1; i <= years; i++) {
        for (let j = 0; j < compoundFreq; j++) {
            totalDeposits += depositAmount * depositFreq / compoundFreq;
            totalWithdrawals += withdrawalAmount * withdrawalFreq / compoundFreq;
            futureValue += depositAmount * depositFreq / compoundFreq;
            futureValue -= withdrawalAmount * withdrawalFreq / compoundFreq;
            futureValue *= Math.pow(1 + annualinterestRate / compoundFreq, 1 / compoundFreq);
        }
        balances.push(futureValue);
        yearsArr.push(i);
    }
    }