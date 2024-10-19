// Capitalize a string
export const capitalize = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1);
}

// Converts a string with dashes to a string with spaces
// and capitalizes the first letter of each word
export const capitalizeWords = (str) => {
  return str.split('-').map(capitalize).join(' ');
}