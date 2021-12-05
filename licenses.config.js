module.exports = {
  isValidLicense: new RegExp(
    '\\b(mit|apache\\b.*2|0?bsd|isc|unlicense|CC-BY-*)\\b',
    'i'
  )
};
