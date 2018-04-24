const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
      mortgage = new Mortgage();
    });
    it('should have monthly payment', () => {
      expect(mortgage.monthlyPayment).to.exist;
    });
    

});