const findElem = function (query) {
  if (!query) {
    return null;
  }

  const matches = query.match(/^((?:\.|#)\w+)$/);

  if (!matches) {
    return null;
  }

  const type = matches[1].slice(0,1);
  const match = matches[1].slice(1);

  switch (type) {
    case '#':
      return document.getElementById(match);
    case '.':
      return document.getElementsByClassName(match)[0];
    default:
      return null;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const input = findElem('#msg');
  const div = findElem('.block');

  console.log(input, div);
});
