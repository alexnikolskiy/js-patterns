class HtmlOutput {
  output(message = {}) {
    const { author, time, text } = message;

    return `
      <div class="message">
        <div class="message__header">
          <span class="message__author">${author}</span>
          <span class="message__time">${new Date(time)}</span>
        </div>
        <div class="message__body">${text}</div>      
      </div>`;
  }
}

module.exports = HtmlOutput;
