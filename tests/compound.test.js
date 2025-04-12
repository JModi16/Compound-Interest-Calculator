describe('Compound Interest Calculator', () => {
    test('should calculate the correct CAGR', () => {
        const totalAmount = ;
        const initialInvestment = ;
        const years = 5;
        
        const cagr =calculateCAGR(totalAmount, initialInvestment, years);
        expect(cagr).toBeCloseTo(0.1487, 4); // Expect CAGR to be around 14.87%
    }
