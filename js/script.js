document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.getElementById("CompoundInterestForm");// Replace with actual form ID
    const resetButton = document.getElementById("resetButton"); // Get the reset button

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const resultsTableBody = document.getElementById("results-body"); //replaced with table id in html
            if (!resultsTableBody) {
                console.error("The results table body element is missing in the DOM.");
            return; // Stop further execution
        }

        resultsTableBody.innerHTML = ""; // Clear all rows

        // Proceed with calculations...
            

        // Get user input values
        let initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
        let annualinterestRate = (parseFloat(document.getElementById("interest-rate").value) || 0) / 100;
        let compoundfrequency = parseInt(document.getElementById("compoundfrequency").value) || 1; // Default to 1 to avoid division by zero
        let years = parseInt(document.getElementById("years").value) || 0;

        let depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
        let depositFrequency = document.getElementById("depositFrequency").value; // Get as a string
        let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
        let withdrawalFrequency = document.getElementById("withdrawalFrequency").value; // Get as a string

        // Validate inputs
        if (compoundfrequency <= 0 || initialInvestment <= 0 || annualinterestRate <= 0 || years <= 0) {
            alert("Please ensure all inputs are valid and greater than 0.");
            return;
            }
            // Validate deposit frequency only if deposit amount is entered
            if (depositAmount > 0 && (depositFrequency === "" || isNaN(parseInt(depositFrequency)))) {
                alert("Please select a valid deposit frequency.");
                return; 
            }

            // Validate withdrawal frequency only if withdrawal amount is entered
            if (withdrawalAmount > 0 && (withdrawalFrequency === "" || isNaN(parseInt(withdrawalFrequency)))) {
                alert("Please select a valid withdrawal frequency.");
                return;
            }

            // Convert frequencies to integers
            depositFrequency = parseInt(depositFrequency) || 1; // Default to 1 if not selected
            withdrawalFrequency = parseInt(withdrawalFrequency) || 1; // Default to 1 if not selected

          
         
        

     // Initialize total values
     let totalAmount = initialInvestment;
     let totalContributions = 0;
     let totalWithdrawals = 0;
     let finalCagr = 0; // Declare finalCagr outside the loop        
        


          // Loop through each year to calculate future values
          for (let i = 0; i < years; i++) {
            let yearDeposits = 0;
            let yearWithdrawals = 0;
            let yearInterest = 0;

            // Apply deposits  for each deposit period
            for (let j = 0; j < depositFrequency; j++) {
                if (depositAmount > 0) { // Only apply if deposit amount is greater than 0
                    totalAmount += depositAmount;
                    totalContributions += depositAmount; //Track total contributions
                    yearDeposits += depositAmount;
                    }
                }
            
            // Apply withdrawals and interest compounding for each withdrawal period
            for (let k = 0; k < withdrawalFrequency; k++) {
                if (withdrawalAmount > 0 && totalAmount >= withdrawalAmount) {
                    totalAmount -= withdrawalAmount; //Subtract withdrawl
                    totalWithdrawals += withdrawalAmount; //Track total withdrawals
                    yearWithdrawals += withdrawalAmount;
                } else {
                    alert("Insufficient funds for withdrawal or withdrawal amount is 0.");
                    return; // Stop further execution
                }
            }

            //Apply interest compounding for each year
            let yearStartAmount = totalAmount;
            for (let m = 0; m < compoundfrequency; m++) {
                totalAmount *= (1 + annualinterestRate / compoundfrequency); //Compound Interest
            }
            yearInterest = totalAmount - yearStartAmount;

      // Calculate Compound Annual Growth Rate (CAGR)
      let cagr = 0;
      if (yearStartAmount > 0) {
        cagr = Math.pow(totalAmount / yearStartAmount, 1 / 1) - 1; // Annual growth rate
    }
    
     // Add a row to the table
        const row = document.createElement("tr");
    row.innerHTML = `
        <td>${i + 1}</td>
        <td>£${totalAmount.toFixed(2)}</td>
        <td>£${yearInterest.toFixed(2)}</td>
        <td>£${totalContributions.toFixed(2)}</td>
        <td>£${totalWithdrawals.toFixed(2)}</td>
        <td>${(cagr * 100).toFixed(2)}%</td>
    `;
         resultsTableBody.appendChild(row);
        }
        
         // Calculate Final CAGR
         if (years > 0 && initialInvestment > 0) {
            finalCagr = calculateCAGR(totalAmount, initialInvestment, years); // Calculate Final CAGR
        } else {
            finalCagr = 0; // Set CAGR to 0 if the denominator is invalid
        }
            // Display the results
            document.getElementById('futureValue').innerHTML = `Future Value: <span class="black">£${(totalAmount || 0).toFixed(2)}</span>`;
            document.getElementById('totalContributions').innerHTML = `Total Contributions: <span class="black">£${(totalContributions || 0).toFixed(2)}</span>`;
            document.getElementById('totalWithdrawals').innerHTML = `Total Withdrawals: <span class="red">£${(totalWithdrawals || 0).toFixed(2)}</span>`;
            document.getElementById('totalInterest').innerHTML = `Total Interest: <span class="blue">£${((totalAmount || 0) - (initialInvestment || 0) - (totalContributions || 0) + (totalWithdrawals || 0)).toFixed(2)}</span>`;
            document.getElementById('cagr').innerHTML = `CAGR (Capital Annual Growth Rate): <span class="green">${((finalCagr || 0) * 100).toFixed(2)}%</span>`;
    });
}


// Add event listener for the reset button
if (resetButton) {
    resetButton.addEventListener("click", function () {
        // Clear the results section
            document.getElementById('futureValue').innerHTML = `Future Value: <span class="black">0.00</span>`;
            document.getElementById('totalContributions').innerHTML = `Total Contributions: <span class="black">0.00</span>`;
            document.getElementById('totalWithdrawals').innerHTML = `Total Withdrawals: <span class="red">0.00</span>`;
            document.getElementById('totalInterest').innerHTML = `Total Interest: <span class="blue">0.00</span>`;
            document.getElementById('cagr').innerHTML = `CAGR: <span class="green">0.00%</span>`;

            // Clear the investment breakdown table
            const resultsTableBody = document.getElementById("results-body");
            if (resultsTableBody) {
                resultsTableBody.innerHTML = ""; // Clear all rows
            }
        });
    }
});
// Define the calculateCAGR function
function calculateCAGR(totalAmount, initialInvestment, years) {
    if (years === 0) return 0; // Avoid division by zero
    return parseFloat((Math.pow(totalAmount / initialInvestment, 1 / years) - 1).toFixed(6));
}