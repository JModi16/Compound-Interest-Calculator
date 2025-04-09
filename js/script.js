document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    let investmentForm = document.getElementById("CompoundInterestForm");

    // Handle form submission
    investmentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("Form submitted!"); // Debugging message

        // Get user inputs
        let initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
        let annualinterestRate = (parseFloat(document.getElementById("interest-rate").value) || 0) / 100;
        const compoundfrequency = parseInt(document.getElementById("compoundfrequency").value) || 1; // Default to 1 to avoid division by zero
        let years = parseInt(document.getElementById("years").value) || 0;

        let depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
        let depositFrequency = parseInt(document.getElementById("depositFrequency").value) || 1; // Default to 1 to avoid division by zero
        let annualIncrease = parseFloat(document.getElementById("annualIncrease").value) || 0;

        let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
        let withdrawalFrequency = parseInt(document.getElementById("withdrawalFrequency").value) || 1; // Default to 1 to avoid division by zero

        // Initialize total values
        let totalAmount = initialInvestment;
        let totalContributions = 0;
        let totalWithdrawals = 0;

        // Loop through each year to calculate future values
        for (let i = 0; i < years; i++) {
            // Apply deposits and interest compounding for each deposit period
            for (let j = 0; j < depositFrequency; j++) {
                if (depositAmount > 0) { // Only apply if deposit amount is greater than 0
                    totalAmount += depositAmount;
                    if (depositFrequency > 0) {
                        totalAmount *= (1 + annualinterestRate / depositFrequency);
                    }
                }
            }

            // Apply withdrawals and interest compounding for each withdrawal period
            for (let k = 0; k < withdrawalFrequency; k++) {
                if (withdrawalFrequency > 0) { // Ensure withdrawalFreq is valid
                    totalAmount *= (1 + annualinterestRate / withdrawalFrequency);
                }
                totalAmount -= withdrawalAmount;
                if (totalAmount < withdrawalAmount) {
                    break; // Stop further withdrawals if totalAmount is insufficient
                }
            }

            // Update total contributions and withdrawals
            totalContributions += depositAmount * depositFrequency;
            totalWithdrawals += withdrawalAmount * withdrawalFrequency;

            // Increase deposit amount by annual increase rate
            if (depositAmount > 0) {
                depositAmount += depositAmount * annualIncrease;
            }

            // Increase withdrawal amount by annual increase rate
            if (withdrawalAmount > 0) {
                withdrawalAmount += withdrawalAmount * annualIncrease;
            }
        }

        // Calculate Compound Annual Growth Rate (CAGR)
    
        if  (years > 0 )  {
          cagr = Math.pow((totalAmount / initialInvestment), (1 / years)) - 1;
        }  else {
            cagr = 0; // set CAGR to 0 if years is 0 to avoid division by zero
        }
        

        // Display the results
        document.getElementById('futureValue').innerHTML = `Future Value: <span class="black">£${totalAmount.toFixed(2)}</span>`;
        document.getElementById('totalContributions').innerHTML = `Total Contributions: <span class="black">£${totalContributions.toFixed(2)}</span>`;
        document.getElementById('totalWithdrawals').innerHTML = `Total Withdrawals: <span class="red">£${totalWithdrawals.toFixed(2)}</span>`;
        document.getElementById('totalInterest').innerHTML = `Total Interest: <span class="blue">£${(totalAmount - initialInvestment - totalContributions + totalWithdrawals).toFixed(2)}</span>`;
                document.getElementById('cagr').innerHTML = `CAGR: <span class="green">${(cagr * 100).toFixed(2)}%</span>`;
            });
        });

        