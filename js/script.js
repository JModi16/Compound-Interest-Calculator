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
    }