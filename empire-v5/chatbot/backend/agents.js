const agents = require("../agents/registry.json");

function findAgent(category) {
  const map = {
    legal: "PrimeDox",
    security: "OmniGuard",
    business: "Gap Hunter",
    cannabis: "PrimeDox",
    default: "Empire Concierge"
  };

  return map[category] || "Empire Concierge";
}

module.exports = { findAgent };
