const intents = require("./../router/intents.json");

function routeMessage(message) {
  const text = message.toLowerCase();

  for (const category in intents) {
    for (const keyword of intents[category]) {
      if (text.includes(keyword.toLowerCase())) {
        return category;
      }
    }
  }

  return "default";
}

module.exports = { routeMessage };
