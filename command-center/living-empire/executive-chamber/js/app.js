const executives = {
  primedox: {
    name: "PrimeDox AI",
    title: "THE SCHOLAR",
    role: "DOCUMENT INTELLIGENCE",
    short: "P"
  },

  vigilax: {
    name: "Vigilax AI",
    title: "THE SENTINEL",
    role: "SECURITY COMMAND",
    short: "V"
  },

  soulstack: {
    name: "SoulStack AI",
    title: "THE STRATEGIST",
    role: "STRATEGY & INTELLIGENCE",
    short: "S"
  }
};

let current = executives.primedox;

const API_BASE =
  localStorage.getItem("fhi_war_room_api") ||
  "http://127.0.0.1:8787";

const stageAvatar = document.getElementById("stageAvatar");
const stageName = document.getElementById("stageName");
const stageRole = document.getElementById("stageRole");
const stageStatus = document.getElementById("stageStatus");
const chatTitle = document.getElementById("chatTitle");
const messages = document.getElementById("messages");
const input = document.getElementById("chatInput");
const connectionStatus = document.getElementById("connectionStatus");

function addMessage(text, type = "ai") {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function switchExecutive(id) {
  if (!executives[id]) return;

  current = executives[id];

  stageAvatar.textContent = current.short;
  stageName.textContent = current.name;
  stageRole.textContent = current.title;
  stageStatus.textContent = "EXECUTIVE ONLINE";
  chatTitle.textContent = current.name;

  document.querySelectorAll(".executive").forEach(card => {
    card.classList.toggle(
      "active",
      card.dataset.agent === id
    );
  });

  addMessage(
    `${current.name}: Executive session active. Awaiting your instruction.`,
    "ai"
  );
}

async function checkWarRoom() {
  try {
    const response = await fetch(
      `${API_BASE}/api/avatars`,
      {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      }
    );

    if (!response.ok) throw new Error("API unavailable");

    connectionStatus.textContent =
      "WAR ROOM: CONNECTED";

    connectionStatus.style.color =
      "rgb(127,240,193)";

    return true;

  } catch {
    connectionStatus.textContent =
      "WAR ROOM: OFFLINE / DEMO MODE";

    return false;
  }
}

async function sendToWarRoom(text) {
  /*
   * We intentionally do not guess a POST contract.
   * The existing validated backend remains authoritative.
   *
   * Until its exact conversation route is explicitly wired,
   * the chamber remains in safe local-session mode.
   */
  return null;
}

function localExecutiveResponse(text) {
  const lower = text.toLowerCase();

  if (
    lower.includes("demand") ||
    lower.includes("letter") ||
    lower.includes("case") ||
    lower.includes("court")
  ) {
    return `${current.name}: I can structure this matter into facts, issues, evidence, chronology, authorities, requested relief, risks, and a proposed work product. I will prepare it for your review rather than take a consequential action.`;
  }

  if (
    lower.includes("email") ||
    lower.includes("respond") ||
    lower.includes("reply")
  ) {
    return `${current.name}: I can analyze the correspondence, identify the issues, and prepare a response draft. Sending remains subject to your explicit approval.`;
  }

  if (current === executives.vigilax) {
    return "I can assess the matter from a security and risk perspective and identify threats, exposure, controls, and recommended mitigations.";
  }

  if (current === executives.soulstack) {
    return "I can synthesize the matter across operations, strategy, priorities, dependencies, and business impact and turn that into an executive proposal.";
  }

  return "I'm ready. Give me the matter and I'll structure the work into an auditable proposal for your review.";
}

document.querySelectorAll(".executive").forEach(card => {
  card.addEventListener(
    "click",
    () => switchExecutive(card.dataset.agent)
  );
});

document.getElementById("chatForm").addEventListener(
  "submit",
  async event => {
    event.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    stageStatus.textContent = "THINKING";

    const backendResponse =
      await sendToWarRoom(text);

    addMessage(
      backendResponse ||
      localExecutiveResponse(text),
      "ai"
    );

    stageStatus.textContent =
      "EXECUTIVE ONLINE";
  }
);

document.querySelectorAll("[data-work]").forEach(button => {
  button.addEventListener("click", () => {

    const work = button.dataset.work;

    const prompts = {
      case:
        "PrimeDox, open a case-work session. I want to organize facts, chronology, evidence, issues, authorities, risks and next actions.",

      demand:
        "PrimeDox, prepare a demand-letter work session. Identify the factual record, legal issues, evidence, requested relief, risks and required review points.",

      document:
        "PrimeDox, prepare a document-analysis session. Identify the document's purpose, important facts, issues, evidence and follow-up questions.",

      email:
        "PrimeDox, prepare an email-review session. Analyze the correspondence and prepare a response draft for my approval. Do not send anything.",

      research:
        "PrimeDox, prepare a research plan identifying the questions, sources, evidence and authorities that need to be investigated.",

      council:
        "Council, analyze this matter from document, security and strategy perspectives and prepare a coordinated proposal for human review."
    };

    input.value = prompts[work] || "";
    input.focus();
  });
});

checkWarRoom();
