import { formatCurrency } from './utils';

describe('utils', () => {
  it('formatCurrency', () => {
    expect(formatCurrency(10)).toBe('₹10.00');

    expect(formatCurrency(10000)).toBe('₹10,000.00');
  });
});
