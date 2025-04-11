document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.getElementById("CompoundInterestForm");// Replace with actual form ID

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission for demonstration
            

        // Get user input values
        let initialInvestment = parseFloat(document.getElementById("initialInvestment").value) || 0;
        let annualinterestRate = (parseFloat(document.getElementById("interest-rate").value) || 0) / 100;
        let compoundfrequency = parseInt(document.getElementById("compoundfrequency").value) || 1; // Default to 1 to avoid division by zero
        let years = parseInt(document.getElementById("years").value) || 0;

        let depositAmount = parseFloat(document.getElementById("depositAmount").value) || 0;
        let depositFrequency = parseInt(document.getElementById("depositFrequency").value) || 1; // Default to 1 to avoid division by zero

        let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value) || 0;
        let withdrawalFrequency = parseInt(document.getElementById("withdrawalFrequency").value) || 1; // Default to 1 to avoid division by zero

        // Validate compoundfrequency
        if (compoundfrequency <= 0) {
            alert("Compounding frequency must be greater than 0.");
            console.error("Invalid compounding frequency: " + compoundfrequency); // Log error for debugging
            return; // Stop further execution
        }

        if (initialInvestment <= 0) {
            alert("Initial Investment must be greater than 0.");
            return; // Stop further execution
        }

        if (annualinterestRate <= 0) {
            alert("Interest rate must be greater than 0.");
            return; // Stop further execution
        }

        if (years <= 0) {
            alert("Number of years must be greater than 0.");
            return; // Stop further execution
        }
        console.log("Form submitted!"); // Debugging message

        // Initialize total values
        let totalAmount = initialInvestment;
        let totalContributions = 0;
        let totalWithdrawals = 0;

         // Clear previous table rows
         const resultsTableBody = document.querySelector("#resultsTable tbody");
         resultsTableBody.innerHTML = "";

          // Loop through each year to calculate future values
          for (let i = 0; i < years; i++) {
            let yearDeposits = 0;
            let yearWithdrawals = 0;
            let yearInterest = 0;

            // Apply deposits and interest compounding for each deposit period
            for (let j = 0; j < depositFrequency; j++) {
                if (depositAmount > 0) { // Only apply if deposit amount is greater than 0
                    totalAmount += depositAmount;
                    totalContributions += depositAmount; //Track total contributions
                    }
                }
            
            // Apply withdrawals and interest compounding for each withdrawal period
            for (let k = 0; k < withdrawalFrequency; k++) {
                if (withdrawalAmount > 0) { // Only apply if withdrawal amount is greater than 0
                    if (totalAmount >= withdrawalAmount) {
                        totalAmount -= withdrawalAmount; //Subtract withdrawl
                        totalWithdrawals += withdrawalAmount; //Track total withdrawals
                    } else {
                        console.error("Not enough funds available to process withdrawal."); // Log error
                        alert("Not enough funds available to process withdrawal. Stopping calculation."); // Notify user
                        break; // stop withdrawls if not enough funds
                    }
                }
            }

            //Apply interest compounding for each year
            for (let m = 0; m < compoundfrequency; m++) {
                totalAmount *= (1 + annualinterestRate / compoundfrequency); //Compound Interest
            }
    }

            // Calculate Compound Annual Growth Rate (CAGR)
            let cagr;
            if (years > 0 && (initialInvestment + totalContributions - totalWithdrawals) > 0) {
                cagr = Math.pow(totalAmount / (initialInvestment + totalContributions - totalWithdrawals), 1 / years) - 1;
            } else {
                cagr = 0; // set CAGR to 0 if years is 0 to avoid division by zero
            }
        
            // Display the results
            document.getElementById('futureValue').innerHTML = `Future Value: <span class="black">£${totalAmount.toFixed(2)}</span>`;
            document.getElementById('totalContributions').innerHTML = `Total Contributions: <span class="black">£${totalContributions.toFixed(2)}</span>`;
            document.getElementById('totalWithdrawals').innerHTML = `Total Withdrawals: <span class="red">£${totalWithdrawals.toFixed(2)}</span>`;
            document.getElementById('totalInterest').innerHTML = `Total Interest: <span class="blue">£${(totalAmount - initialInvestment - totalContributions + totalWithdrawals).toFixed(2)}</span>`;
            document.getElementById('cagr').innerHTML = `CAGR: <span class="green">${(cagr * 100).toFixed(2)}%</span>`;
    });
} else {
    console.error("Form element not found."); // Debugging message
}
});