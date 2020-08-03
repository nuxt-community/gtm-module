const logSyle = 'background: #2E495E;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;'

export function log(...args) {
  // eslint-disable-next-line no-console
  <% if (options.debug) { %>console.log('%cGTM', logSyle, ...args)<% } %>
}
