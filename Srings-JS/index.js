let ranks = ['ram', 'sham', 'harry', 'larry'];

function sortStrings(stringArray) { 
  let copy = stringArray.slice();

  copy.sort((a, b) => a.localeCompare(b));
  return copy;
}
console.log(sortStrings(ranks));

// .Slice() 
function last(subject, length) { 
  return subject.slice(-length);
}
console.log("Once upon a time".slice(-4));

// Truncate the string
function truncate(str) { 
  const maxLength = 40;
  if (str.length <= maxLength) { 
    return str;
  }
  return str.slice(0, maxLength) + "...";
}
console.log(truncate("NO NEWS TODAY"));
console.log(truncate("BREAKING NEWS: ECONOMY - THINGS KEEP HAPPINING TO IT!"));


// Checking and Performing opration On URL
const url = "https://www.pluralsight.com/search?q=Javascript";

function isUrlSecure (str) { 
  return str.startsWith("http://");
}

function isPicture(str) { 
  return str.endsWith(".png") || str.endsWith(".jpg");
}

function isQuerry(str) { 
  return str.includes("?q");
}

console.log(
  `The providede url ${url}
  is secure: ${isUrlSecure(url)},
  is a query: ${isQuerry(url)},
  points to a picture: ${isPicture(url)}
`);

// Coversion+++++++++++++++++++++++++++++++++++++++++++++++++++++

// converting Array into a string
const stringArr = [1, 2, 3].toString();
console.log([1, 2, 3]);
console.log(stringArr);

// USD to EUR
const sum = 123456;
const rate = 0.8;
console.log(`${sum} USD is ${(sum*rate).toFixed(2)} EUR`);

function applyUsLocale(sum) { 
  return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(sum);
}

function applyEurLocale(sum, locale) { 
  return new Intl.NumberFormat(locale, {style: "currency", currency: "EUR"}).format(sum);
}

const converted = (sum * rate).toFixed(2);
const americanSum = applyUsLocale(sum);
const germanResult = applyEurLocale(converted, 'de-DE');
const frenchResult = applyEurLocale(converted, 'fr-FR');
console.log(`${americanSum} is ${germanResult}`);

console.log(`${americanSum} is ${frenchResult}`);

// Next Stop :- REGEX !!