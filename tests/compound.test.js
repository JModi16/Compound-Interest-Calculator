const { calculateCAGR } = require('../js"/script.js');

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


    test('should calculate total contributions correctly', () => {
        const depositAmount = 1000; // Monthly deposit of £1000
        const depositFrequency = 12; // Monthly
        const years = 5;

        const totalContributions = depositAmount * depositFrequency * years;
        expect(totalContributions).toBe(60000); // Expected total contributions: £6,0000
    });

    test('should calculate total withdrawals correctly', () => {
        const withdrawalAmount = 50;
        const withdrawalFrequency = 12; // Monthly
        const years = 5;

        const totalWithdrawals = withdrawalAmount * withdrawalFrequency * years;
        expect(totalWithdrawals).toBe(3000); // Expected total withdrawals: £3,000
    });