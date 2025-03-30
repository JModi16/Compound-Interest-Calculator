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

          // Increase deposit amount by annual increase rate
        }
        // Increase deposit amount by annual increase rate after all deposit periods in the year
        depositAmount = increaseDeposit(depositAmount, annualIncrease);

         // Decrease withdrawal amount by annual decrease rate
         withdrawalAmount -= withdrawalAmount * annualDecrease;
     }
     
     // Display the results
    SSed(2)}%</span>`;

    }