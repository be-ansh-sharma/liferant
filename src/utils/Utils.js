import dayjs from './dayconfig';

const isBrowser = typeof window !== 'undefined';

const toSeoUrl = url => {
  return url
    .toString() // Convert to string
    .normalize('NFD') // Change diacritics
    .replace(/[\u0300-\u036f]/g, '') // Remove illegal characters
    .replace(/\s+/g, '-') // Change whitespace to dashes
    .toLowerCase() // Change to lowercase
    .replace(/&/g, '-and-') // Replace ampersand
    .replace(/[^a-z0-9\-]/g, '') // Remove anything that is not a letter, number or dash
    .replace(/-+/g, '-') // Remove duplicate dashes
    .replace(/^-*/, '') // Remove starting dashes
    .replace(/-*$/, ''); // Remove trailing dashes
};

const transformTime = (date, pattern) => dayjs(date).format(pattern);

const transformDoc = doc => {
  if (doc) {
    return {
      ...doc.data(),
      refId: doc.id,
    };
  }
  return null;
};

const sortByDate = (list, mode) => {
  return [
    ...list.sort(function (a, b) {
      if (mode === 'desc') {
        return new Date(b.created) - new Date(a.created);
      } else {
        return new Date(a.created) - new Date(b.created);
      }
    }),
  ];
};

const sortByValue = (list, key, mode) => {
  if (mode === 'desc') {
    return [...list.sort((a, b) => b[key] - a[key])];
  } else {
    return [...list.sort((a, b) => a[key] - b[key])];
  }
};

const shorthandNumber = num => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(num);
};

const shuffleArray = array => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

module.exports = {
  toSeoUrl,
  transformTime,
  transformDoc,
  sortByDate,
  sortByValue,
  shorthandNumber,
  isBrowser,
  shuffleArray,
};
