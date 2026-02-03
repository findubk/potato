const messageEl = document.getElementById("message");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const appEl = document.querySelector(".app");
const celebrationEl = document.getElementById("celebration");
const heartsLayer = document.getElementById("hearts-layer");

const emojis = ["😂", "🥺", "💖", "😏", "😍", "✨", "💘", "😌", "🫶", "🔥", "😇", "💞", "🤭", "💫"];
const noReplies = [
  "Try again",
  "Seriously?",
  "Please?",
  "No is not an option",
  "That button seems broken",
  "Are you sure sure?",
  "Think one more time",
  "Wrong answer, darling",
  "Oops, misclick?",
  "Let us pretend that was yes",
  "Come on now",
  "Be nice",
  "You can do better",
  "I believe in your yes",
  "Not this one",
  "Bold choice... but no",
  "Retry level unlocked",
  "Error 404: no unavailable",
  "Nice try",
  "Still waiting for yes",
  "Give it another tap",
  "You are too cute for no",
  "That is a temporary no",
  "Plot twist: say yes",
  "Recalculating your answer",
  "Nope, try romance mode",
  "One more chance",
  "Just tap yes already",
  "No button is tired",
  "Hmm... suspicious choice",
  "Are we joking now?",
  "This feels illegal",
  "Respectfully, no no",
  "Mission failed, retry",
  "Press yes for happiness",
  "Do it for love",
  "You know the right one",
  "No thank you",
  "Try the other button",
  "That was adorable, but no",
  "Be my Valentine maybe?",
  "I can wait... but why",
  "Love says yes",
  "Denied. Retry.",
  "You clicked no again?",
  "I am not giving up",
  "Final warning: choose yes",
  "Last chance (not really)",
  "Please please please",
  "Okay, now say yes",
];

const openers = [
  "Nice try",
  "Bold move",
  "Cute attempt",
  "Romantic error",
  "Uh oh",
  "Plot twist",
  "Fun fact",
  "Breaking news",
  "Tiny reminder",
  "Friendly notice",
  "Suspicious choice",
  "Gentle nudge",
  "Soft rejection",
  "Love update",
  "Emotional alert"
];
const middles = [
  "but destiny says yes",
  "my heart disagrees",
  "that was the wrong button",
  "love demands a retry",
  "the universe blinked",
  "romance.exe crashed",
  "your finger slipped",
  "this feels personal",
  "I refuse to accept this",
  "we both know better",
  "chemistry detected",
  "the vibes say otherwise",
  "the stars are screaming",
  "that answer was shy",
  "your future self says yes"
];
const endings = [
  "try again",
  "press yes",
  "say yes already",
  "don’t fight fate",
  "be brave",
  "follow your heart",
  "you know the drill",
  "love wins",
  "fix it pls",
  "one more tap",
  "choose happiness",
  "romance mode on",
  "this is flirting",
  "accept the love",
  "do the right thing"
];

const moreReplies = Array.from({ length: 300 }, (_, i) => {
  const e1 = emojis[i % emojis.length];
  const e2 = emojis[(i + 3) % emojis.length];
  const opener = openers[i % openers.length];
  const middle = middles[i % middles.length];
  const ending = endings[i % endings.length];

  return `${opener} ${e1} ${middle}… ${ending} ${e2}`;
});

const allReplies = [...noReplies, ...moreReplies];

let noClickCount = 0;
let heartsIntervalId = null;

const spawnHeart = () => {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${3 + Math.random() * 3}s`;
  heart.style.fontSize = `${16 + Math.random() * 22}px`;
  heart.style.transform = `rotate(${Math.random() * 50 - 25}deg)`;
  heartsLayer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6500);
};

const startHearts = () => {
  for (let i = 0; i < 16; i += 1) {
    setTimeout(spawnHeart, i * 70);
  }

  if (!heartsIntervalId) {
    heartsIntervalId = setInterval(spawnHeart, 180);

    setTimeout(() => {
      clearInterval(heartsIntervalId);
      heartsIntervalId = null;
    }, 6000);
  }
};

yesBtn.addEventListener("click", () => {
  messageEl.textContent = "Love you potato 🥔";
  appEl.hidden = true;
  celebrationEl.hidden = false;
  startHearts();
});

noBtn.addEventListener("click", () => {
  messageEl.textContent = "Hmm... I think you meant yes.";
  noBtn.textContent = allReplies[noClickCount % allReplies.length];
  noClickCount += 1;
});
