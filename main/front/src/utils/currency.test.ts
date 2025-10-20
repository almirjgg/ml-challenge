import { formatCurrency } from './currency';

describe('formatCurrency', () => {
  it('should format ARS currency correctly with decimals', () => {
    expect(formatCurrency(1234.56, 'ARS')).toBe('$ 1.234,56');
  });

  it('should format ARS currency correctly without decimals', () => {
    expect(formatCurrency(5000, 'ARS')).toBe('$ 5.000');
  });

  it('should handle zero correctly', () => {
    expect(formatCurrency(0, 'ARS')).toBe('$ 0');
  });
});
