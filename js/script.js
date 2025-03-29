document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
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
        const cagr = (Math.pow(futureValue / initialInvestment, 1 / years) - 1) * 100;

        document.getElementById("futureValue").textContent = futureValue.toFixed(2);
        document.getElementById("cagr").textContent = cagr.toFixed(2) + "%";

        updateChart(yearsArr, balances);
        }
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
    