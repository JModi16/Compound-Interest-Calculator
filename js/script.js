document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    let investmentForm = document.getElementById("CompoundInterestForm");

    //Handle form submission
investmentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    let initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
    let annualinterestRate = parseFloat(document.getElementById("interest-rate").value) || 0;
    let compoundFreq = parseInt(document.getElementById("compoundfrequency").value) || 0;
    let years = parseInt(document.getElementById("years").value) || 0;

    let depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
    let depositFreq = parseInt(document.getElementById("depositFrequency").value) || 0;
    let annualIncrease = parseFloat(document.getElementById("annualIncrease").value) || 0;

    let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
    let withdrawalFreq = parseInt(document.getElementById("withdrawalFrequency").value) || 0;
    let withdrawalIncrease = parseFloat(document.getElementById("withdrawalIncrease").value) || 0;/*may not be required*/
    let annualDecrease = parseFloat(document.getElementById("annualDecrease").value) || 0;/*may not be required*/

    // Initialize total values
    let totalAmount = initialInvestment;
    let totalContributions = 0;
    let totalWithdrawals = 0;

    // Loop through each year to calculate future values
    for (let i = 0; i < years; i++) {
        // Apply deposits and interest compounding for each deposit period
        for (let j = 0; j < compoundFreq; j++) {
            totalAmount += depositAmount;
            totalAmount *= (1 + annualinterestRate / compoundFreq);
                            }
                        }
                    }
                }
            }

))
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
let totalWithdrawals = 0; // 



    // Loop through each year to calculate future values
    for (let i = 0; i < years; i++) {
        // Apply deposits and interest compounding for each deposit period
        for (let j = 0; j < compoundFreq; j++) {
        totalAmount += depositAmount;
        totalAmount *= (1+ annualRate / depositFreq);
        
        // Calculate deposits and withdrawals for the current year
        for (let k = 0; k < depositFreq; k++) {
            totalAmount += depositAmount;
            totalAmount *= (1 + annualRate / withdrawalFreq);
    
              // Increase deposit amount by annual increase rate
            }
            // Increase deposit amount by annual increase rate after all deposit periods in the year
            depositAmount = increaseDeposit(depositAmount, annualIncrease);
    
             // Decrease withdrawal amount by annual decrease rate
            withdrawalAmount -= withdrawalAmount * annualDecrease;
        }

        // Calculate Compound Annual Growth Rate (CAGR)
        let cagr = Math.pow(totalAmount / initialInvestment, 1 / years) - 1;

          // Display the results
    document.getElementById('futureValue').innerHTML = `Future Value: <span class="black">£${totalAmount.toFixed(2)}</span>`;
    document.getElementById('totalContributions').innerHTML = `Total Contributions: <span class="black">£${totalContributions.toFixed(2)}</span>`;
    document.getElementById('totalWithdrawals').innerHTML = `Total Withdrawals: <span class="red">£${totalWithdrawals.toFixed(2)}</span>`;
    document.getElementById('totalInterest').innerHTML = `Total Interest: <span class="blue">£${(totalAmount - initialInvestment - totalContributions + totalWithdrawals).toFixed(2)}</span>`;
    document.getElementById('cagr').innerHTML = `CAGR: <span class="green">${(cagr * 100).toFixed(2)}%</span>`;
    
     // Call the functiion to display chart
     updateChart(totalAmount, totalContributions, totalWithdrawals, totalAmount - initialInvestment -totalContributions + totalWithdrawals, 
        cagr);

    // Function to update the chart
    function updateChart(futureValue, totalContributions, totalWithdrawals, totalInterest, cagr) {
        const ctx = document.getElementById('investmentChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Future Value', 'Total Contributions', 'Total Withdrawals', 'Total Interest'],
                datasets: [{
                    label: 'Investment Growth',
                    data: [futureValue, totalContributions, totalWithdrawals, totalInterest],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: true,
                    color: 'black',
                    align: 'end',
                    anchor: 'end',
                    formatter: function(value) {
                        return '£' + parseFloat(value).toFixed(2);
                    }
                        }
               