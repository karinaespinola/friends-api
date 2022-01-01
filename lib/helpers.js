const capitalize = (stringToCapitalize) => {
  if(typeof stringToCapitalize !== 'string') return null;
  const initialChar = stringToCapitalize.charAt(0).toUpperCase();
  return initialChar + stringToCapitalize.slice(1);
}

module.exports = { capitalize }