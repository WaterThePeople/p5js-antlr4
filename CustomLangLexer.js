// Generated from CustomLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,18,97,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,1,1,1,1,2,
1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,
10,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,4,14,69,8,14,11,14,12,14,70,1,
15,4,15,74,8,15,11,15,12,15,75,1,15,1,15,4,15,80,8,15,11,15,12,15,81,1,16,
1,16,5,16,86,8,16,10,16,12,16,89,9,16,1,17,4,17,92,8,17,11,17,12,17,93,1,
17,1,17,0,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
25,13,27,14,29,15,31,16,33,17,35,18,1,0,4,1,0,48,57,3,0,65,90,95,95,97,122,
4,0,48,57,65,90,95,95,97,122,3,0,9,10,12,13,32,32,101,0,1,1,0,0,0,0,3,1,
0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,1,37,1,
0,0,0,3,39,1,0,0,0,5,41,1,0,0,0,7,43,1,0,0,0,9,45,1,0,0,0,11,47,1,0,0,0,
13,49,1,0,0,0,15,51,1,0,0,0,17,53,1,0,0,0,19,55,1,0,0,0,21,57,1,0,0,0,23,
60,1,0,0,0,25,63,1,0,0,0,27,65,1,0,0,0,29,68,1,0,0,0,31,73,1,0,0,0,33,83,
1,0,0,0,35,91,1,0,0,0,37,38,5,59,0,0,38,2,1,0,0,0,39,40,5,44,0,0,40,4,1,
0,0,0,41,42,5,40,0,0,42,6,1,0,0,0,43,44,5,41,0,0,44,8,1,0,0,0,45,46,5,123,
0,0,46,10,1,0,0,0,47,48,5,125,0,0,48,12,1,0,0,0,49,50,5,43,0,0,50,14,1,0,
0,0,51,52,5,45,0,0,52,16,1,0,0,0,53,54,5,42,0,0,54,18,1,0,0,0,55,56,5,47,
0,0,56,20,1,0,0,0,57,58,5,105,0,0,58,59,5,102,0,0,59,22,1,0,0,0,60,61,5,
61,0,0,61,62,5,61,0,0,62,24,1,0,0,0,63,64,5,62,0,0,64,26,1,0,0,0,65,66,5,
60,0,0,66,28,1,0,0,0,67,69,7,0,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,
0,0,70,71,1,0,0,0,71,30,1,0,0,0,72,74,7,0,0,0,73,72,1,0,0,0,74,75,1,0,0,
0,75,73,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,79,5,46,0,0,78,80,7,0,0,0,
79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,32,1,0,0,0,83,
87,7,1,0,0,84,86,7,2,0,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,
1,0,0,0,88,34,1,0,0,0,89,87,1,0,0,0,90,92,7,3,0,0,91,90,1,0,0,0,92,93,1,
0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,6,17,0,0,96,36,1,0,
0,0,6,0,70,75,81,87,93,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CustomLangLexer extends antlr4.Lexer {

    static grammarFileName = "CustomLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "','", "'('", "')'", "'{'", "'}'", 
                         "'+'", "'-'", "'*'", "'/'", "'if'", "'=='", "'>'", 
                         "'<'" ];
	static symbolicNames = [ null, "SEMI", "COMMA", "LPAREN", "RPAREN", "LCURLY", 
                          "RCURLY", "PLUS", "MINUS", "MUL", "DIV", "IF", 
                          "EQUAL", "GREATER", "LESSER", "INT", "FLOAT", 
                          "ID", "WS" ];
	static ruleNames = [ "SEMI", "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", 
                      "PLUS", "MINUS", "MUL", "DIV", "IF", "EQUAL", "GREATER", 
                      "LESSER", "INT", "FLOAT", "ID", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CustomLangLexer.EOF = antlr4.Token.EOF;
CustomLangLexer.SEMI = 1;
CustomLangLexer.COMMA = 2;
CustomLangLexer.LPAREN = 3;
CustomLangLexer.RPAREN = 4;
CustomLangLexer.LCURLY = 5;
CustomLangLexer.RCURLY = 6;
CustomLangLexer.PLUS = 7;
CustomLangLexer.MINUS = 8;
CustomLangLexer.MUL = 9;
CustomLangLexer.DIV = 10;
CustomLangLexer.IF = 11;
CustomLangLexer.EQUAL = 12;
CustomLangLexer.GREATER = 13;
CustomLangLexer.LESSER = 14;
CustomLangLexer.INT = 15;
CustomLangLexer.FLOAT = 16;
CustomLangLexer.ID = 17;
CustomLangLexer.WS = 18;



