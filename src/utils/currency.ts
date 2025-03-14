export type Currency = 'USD' | 'PHP';

export interface Price {
  amount: number;
  currency: Currency;
}

const EXCHANGE_RATES = {
  PHP: 58 // 1 USD = 58 PHP
};

export const formatPrice = (price: Price): string => {
  const formatter = new Intl.NumberFormat(price.currency === 'PHP' ? 'en-PH' : 'en-US', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(price.amount);
};

export const convertPrice = (usdAmount: number, targetCurrency: Currency): Price => {
  if (targetCurrency === 'USD') return { amount: usdAmount, currency: 'USD' };
  return { amount: usdAmount * EXCHANGE_RATES.PHP, currency: 'PHP' };
};

export const getLocalCurrency = async (): Promise<Currency> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code === 'PH' ? 'PHP' : 'USD';
  } catch (error) {
    console.error('Error fetching local currency:', error);
    return 'USD';
  }
}; 