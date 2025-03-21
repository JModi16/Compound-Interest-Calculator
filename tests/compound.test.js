
function calculateInvestment() {
    // Get user input values
    let initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
    let annualRate = parseFloat(document.getElementById("interestRate").value) / 100; // Convert to decimal
    let compoundFreq = parseInt(document.getElementById("compoundFreq").value) || 1;
    
    let years = parseInt(document.getElementById("years").value) || 0;
    let months = parseInt(document.getElementById("months").value) || 0;
    let days = parseInt(document.getElementById("days").value) || 0;
    
    let depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
    let depositFreq = parseInt(document.getElementById("depositFreq").value) || 1;
    
    let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
    let withdrawalFreq = parseInt(document.getElementById("withdrawalFreq").value) || 1;
    
    let annualIncrease = parseFloat(document.getElementById("annualIncrease").value) / 100 || 0;

        // Calculate total number of periods
    }