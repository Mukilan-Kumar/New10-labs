// Utility functions

export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const calculateDiscount = (originalPrice, sellingPrice) => {
  return Math.round(((originalPrice - sellingPrice) / originalPrice) * 100);
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
