import fs from "fs/promises";
import antlr4 from "antlr4";
import CustomLangLexer from "../grammar/CustomLangLexer.js";
import CustomLangParser from "../grammar/CustomLangParser.js";
import CustomVisitor from "./CustomVisitor.js";

async function translateFile() {
  try {
    const input = await fs.readFile(
      "../text_files/recursive_square.txt",
      "utf8"
    );

    const chars = new antlr4.InputStream(input);
    const lexer = new CustomLangLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CustomLangParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.program();

    const visitor = new CustomVisitor();
    const result = visitor.visit(tree);

    const calls = result?.calls ?? "";
    const functions = result?.functions ?? "";

    const finalCode = `function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(255);
  translate(width / 2, height / 2);
${calls}
}

function kwadrat(x, y, len, rot) {
  push();
  translate(x * width, y * height);
  rotate(rot);
  rectMode(CENTER);
  rect(0, 0, len * width, len * height);
  pop();
}

${functions}
`;

    await fs.writeFile("../text_files/output.txt", finalCode);
    console.log("✅ Translation completed! See output.txt");
  } catch (err) {
    console.error("❌ Error during translation:", err);
  }
}

translateFile();
