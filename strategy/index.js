const logger = (strategy, level, message, ...args) => {
  strategy(level, message, ...args)
};

const logToConsoleStrategy = (level, message) => {
  console[level](message);
};

const logToDOMStrategy = (level, message, elem) => {
  elem.innerHTML = `<span class="${level}">${message}</span>`;
};

logger(logToConsoleStrategy, 'warn', 'warning');
logger(logToDOMStrategy, 'error', 'error', document.getElementById('log'));

