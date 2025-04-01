import fs from "fs/promises";
import antlr4 from 'antlr4';
import CustomLangLexer from './CustomLangLexer.js';
import CustomLangParser from './CustomLangParser.js';
import CustomVisitor from './CustomVisitor.js';

async function translateFile() {
  try {
    const input = await fs.readFile("input.txt", "utf8");

    const chars = new antlr4.InputStream(input);
    const lexer = new CustomLangLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CustomLangParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.program();

    const visitor = new CustomVisitor();
    const output = visitor.visit(tree);

    await fs.writeFile("output.txt", output);
    console.log("Translation completed.");

  } catch (err) {
    console.error("Error:", err);
  }
}

translateFile();
