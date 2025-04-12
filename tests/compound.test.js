describe('Compound Interest Calculator', () => {
    test('should calculate the correct CAGR', () => {
        const totalAmount = 260000 ;
        const initialInvestment = 22000;
        const years = 5;

        const cagr =calculateCAGR(totalAmount, initialInvestment, years);
        expect(cagr).toBeCloseTo(0.236, 3); // 23.6%
        });
    
    });
    test('should return 0 CAGR if year is 0', () => {
        const totalAmount = 260000;
        const initialInvestment = 22000;
        const years = 0;

        const cagr = calculateCAGR(totalAmount, initialInvestment, years);
        expect(cagr).toBe(0); // 0%

    });

    test('should return 0 CAGR if years is 0', () => {
        const totalAmount = 50000;
        const initialInvestment = 5000;
        const years = 0;

        const cagr = calculateCAGR(totalAmount, initialInvestment, years);
        expect(cagr).toBe(0);
    });

    test('should calculate total contributions correctly', () => {
        const depositAmount = 100;
        const depositFrequency = 12; // Monthly
        const years = 5;
