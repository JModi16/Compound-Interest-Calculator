document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    let investmentForm = document.getElementById("investmentForm");

    //Handle form submission
investmentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    let initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
    let annualinterestRate = parseFloat(document.getElementById("annualinterestRate").value) || 0;
    let compoundFreq = parseInt(document.getElementById("compoundFreq").value) || 0;
    let years = parseInt(document.getElementById("years").value) || 0;

    let depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
    let depositFreq = parseInt(document.getElementById("depositFreq").value) || 0;
    let annualIncrease = parseFloat(document.getElementById("annualIncrease").value) || 0;

    let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
    let withdrawalFreq = parseInt(document.getElementById("withdrawalFreq").value) || 0;
    let withdrawalIncrease = parseFloat(document.getElementById("withdrawalIncrease").value) || 0;
    let annualDecrease = parseFloat(document.getElementById("annualDecrease").value) || 0;

    // Initialize total values
    let totalAmount = initialInvestment;
    let totalContributions = 0;
    let totalWithdrawals = 0;

    // Loop through each year to calculate future values
    for (let i = 0; i < years; i++) {
        // Apply deposits and interest compounding for each deposit period
        for (let j = 0; j < compoundFreq; j++) {
            totalAmount += depositAmount;
            totalAmount *= (1 + annualinterestRate / depositFreq);
        }
    }
});
// Get user inputs
    let initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
    let annualinterestRate = parseFloat(document.getElementById("annualinterestRate").value) || 0;
    let compoundFreq = parseInt(document.getElementById("compoundFreq").value) || 0;
    let years = parseInt(document.getElementById("years").value) || 0;
    
    let depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
    let depositFreq = parseInt(document.getElementById("depositFreq").value) || 0;
    let annualIncrease = parseFloat(document.getElementById("annualIncrease").value) || 0;

    let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
    let withdrawalFreq = parseInt(document.getElementById("withdrawalFreq").value) || 0;
    let withdrawalIncrease = parseFloat(document.getElementById("withdrawalIncrease").value) || 0;
    let annualDecrease = parseFloat(document.getElementById("annualDecrease").value) || 0;

// Initialize total values
let totalAmount = initialInvestment;
let totalContributions = 0;

// Removed duplicate declaration of totalWithdrawals


    // Loop through each year to calculate future values
    for (let i = 0; i < years; i++) {
        // Apply deposits and interest compounding for each deposit period
        for (let j = 0; j < compoundFreq; j++) {
        totalAmount += depositAmount;
        totalAmount *= (1+ annualRate / depositFreq);
        
        // Calculate deposits and withdrawals for the current year
        for (let k = 0; k < depositFreq; k++) {
            totalAmount += depositAmount;
            totalAmount *= (1+ annualRate /withdrawlFreq);
        }

        //Update total contributions and withdrawals
        totalContributions += depositAmount * depositFreq;
        totalWithdrawals += withdrawalAmount * withdrawalFreq;

        // Calculate future value for the current year
        totalAmount = (totalAmount + totalContributions - totalWithdrawals) * Math.pow(1 + annualinterestRate / compoundFreq, compoundFreq);

        // Update the future value in the UI
        document.getElementById("futureValue").textContent = totalAmount.toFixed(2);
            
        });
    

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
        const cagr = (Math.pow(futureValue / initialInvestment, 1 / years) - 1) * 100;

        document.getElementById("futureValue").textContent = futureValue.toFixed(2);
        document.getElementById("cagr").textContent = cagr.toFixed(2) + "%";

        updateChart(yearsArr, balances);
        }
    
function updateChart(yearsArr, balances) {
    const ctx = document.getElementById("chart").getContext("2d");

    if (window.investmentchart) {
        window.investmentchart.destroy();
    }

    window.investmentchart = new Chart(ctx, {
        type: "line",
        data: {
            labels: yearsArr,
            datasets: [{
                label: "Balance",
                data: balances,
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    window.investmentchart = new Chart(ctx, {
        type: "line",
        data: {
            labels: yearsArr,
            datasets: [{
                label: "Balance",
                data: balances,
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {title: { display: true, text: 'Years'}},
                y: {title: { display: true, text: "Investment (£)" }, beginAtZero: false}
            }
        }
    });
}
    