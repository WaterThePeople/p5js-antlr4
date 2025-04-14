let userInput, runButton;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent(document.body);
  background(220);

  userInput = createElement('textarea');
  userInput.parent('editor-container');

  runButton = createButton('Run Code');
  runButton.mousePressed(runUserCode);
  runButton.parent('editor-container');
}

function runUserCode() {
  background(220);
  let code = userInput.value();
  try {
    eval(code);
  } catch (err) {
    console.error('Error in your code:', err);
    fill(255, 0, 0);
    text('⚠️ Error in your code (check console)', 10, height - 10);
  }
}
