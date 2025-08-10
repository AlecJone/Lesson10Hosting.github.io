function changeGreeting() {
  const newGreeting = document.getElementById("newGreeting").value;
  const greetingPara = document.getElementById("greeting");
  if (newGreeting.trim() !== "") {
    greetingPara.textContent = newGreeting;
  }
}

function updateFirstParagraph() {
  const newText = document.getElementById("newPara1").value;
  const para1 = document.getElementById("para1");
  if (newText.trim() !== "") {
    para1.textContent = newText;
  }
}

function changeBackgroundColor() {
  const selectedColor = document.getElementById("bgColor").value;
  document.body.style.backgroundColor = selectedColor;
}

function applyChanges() {
  changeGreeting();
  updateFirstParagraph();
  changeBackgroundColor();
}