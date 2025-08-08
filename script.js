const messages = [
  "You wake up. The box is here again.",
  "The box pulses faintly. It wants something.",
  "A whisper: 'Do not open it yet.'",
  "You feel watched.",
  "The air is heavier today.",
  "It moved.",
  "Another note appears: 'You're not ready.'",
  "The box hums. It's almost... breathing.",
  "A scratch on the wall: tally marks. Are those yours?",
  "You remember nothing. But the box remembers you.",
];

const choices = [
  {
    text: "Touch the box",
    effect: () => {
      advanceProgress(1);
      showMessage("It's warm. Something shifts inside.");
    }
  },
  {
    text: "Wait and observe",
    effect: () => {
      advanceProgress(0);
      showMessage("Nothing happens. Or maybe... everything does.");
    }
  },
  {
    text: "Speak to it",
    effect: () => {
      advanceProgress(2);
      showMessage("A voice responds. It's your own.");
    }
  }
];

let progress = parseInt(localStorage.getItem("progress")) || 0;

function getRandomMessage() {
  return messages[Math.min(progress, messages.length - 1)];
}

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
  renderChoices();
}

function renderChoices() {
  const choiceContainer = document.getElementById("choices");
  choiceContainer.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = choice.effect;
    choiceContainer.appendChild(btn);
  });
}

function advanceProgress(amount) {
  progress += amount;
  localStorage.setItem("progress", progress);
  setTimeout(() => {
    showMessage(getRandomMessage());
  }, 5000);
}

window.onload = () => {
  showMessage(getRandomMessage());
};
