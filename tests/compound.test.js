const { calculateCAGR, calculateFutureValue } = require('../js/script.js');

describe('Compound Interest Calculator', () => {
    test('should calculate the correct CAGR', () => {
        const totalAmount = 260000 ;
        const initialInvestment = 22000;
        const years = 10;

        const cagr = calculateCAGR(totalAmount, initialInvestment, years);
        expect(cagr).toBeCloseTo(0.281, 3); // 28.1%
        });
    
    });
    test('should return 0 CAGR if years is 0', () => {
        const totalAmount = 260000;
        const initialInvestment = 22000;
        const years = 0;

        const cagr = calculateCAGR(totalAmount, initialInvestment, years);
        expect(cagr).toBe(0); // 0%

    });

    test('should calculate correct future value with deposits and withdrawls', () => {
        const initialInvestment = 10400; // Initial investment of £10,000
        const annualInterestRate = 0.04; // 5%
        const compoundFrequency = 12; // Monthly
        const years = 5;
        const depositAmount = 1000; // Monthly deposit of £1,000
        const depositFrequency = 12; // Monthly
        const withdrawalAmount = 120; // Monthly withdrawal of £150
        const withdrawalFrequency = 12; // Monthly

        const futureValue = calculateFutureValue(
            initialInvestment,
            annualInterestRate,
            compoundFrequency,
            years,
            depositAmount,
            depositFrequency,
            withdrawalAmount,
            withdrawalFrequency
        );

    
        expect(futureValue).toBeCloseTo(72137.00, 2); // Expected future value: ~£72,137.00
    });

    test('should calculate total contributions correctly', () => {
        const depositAmount = 1000; // Monthly deposit of £1000
        const depositFrequency = 12; // Monthly
        const years = 5;

        const totalContributions = depositAmount * depositFrequency * years;
        expect(totalContributions).toBe(60000); // Expected total contributions: £6,0000
    });



    test('should calculate total withdrawals correctly', () => {
        const withdrawalAmount = 150;
        const withdrawalFrequency = 12; // Monthly
        const years = 5;

        const totalWithdrawals = withdrawalAmount * withdrawalFrequency * years;
        expect(totalWithdrawals).toBe(9000); // Expected total withdrawals: £9,000
    });

    test('should calculate yearly interest correctly', () => {
        const yearStartAmount = 10000;
        const annualInterestRate = 0.05; // 5%
        const compoundFrequency = 12; // Monthly

        const yearlyInterest = calculateYearlyInterest(yearStartAmount, annualInterestRate, compoundFrequency);
        expect(yearlyInterest).toBeCloseTo(511.62, 2); // Expected yearly interest: ~£511.62
    });
