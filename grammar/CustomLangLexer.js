// Generated from CustomLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,75,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,
8,1,9,4,9,47,8,9,11,9,12,9,48,1,10,4,10,52,8,10,11,10,12,10,53,1,10,1,10,
4,10,58,8,10,11,10,12,10,59,1,11,1,11,5,11,64,8,11,10,11,12,11,67,9,11,1,
12,4,12,70,8,12,11,12,12,12,71,1,12,1,12,0,0,13,1,1,3,2,5,3,7,4,9,5,11,6,
13,7,15,8,17,9,19,10,21,11,23,12,25,13,1,0,4,1,0,48,57,2,0,65,90,97,122,
4,0,48,57,65,90,95,95,97,122,3,0,9,10,12,13,32,32,79,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,1,
27,1,0,0,0,3,29,1,0,0,0,5,31,1,0,0,0,7,33,1,0,0,0,9,35,1,0,0,0,11,37,1,0,
0,0,13,39,1,0,0,0,15,41,1,0,0,0,17,43,1,0,0,0,19,46,1,0,0,0,21,51,1,0,0,
0,23,61,1,0,0,0,25,69,1,0,0,0,27,28,5,44,0,0,28,2,1,0,0,0,29,30,5,40,0,0,
30,4,1,0,0,0,31,32,5,41,0,0,32,6,1,0,0,0,33,34,5,123,0,0,34,8,1,0,0,0,35,
36,5,125,0,0,36,10,1,0,0,0,37,38,5,43,0,0,38,12,1,0,0,0,39,40,5,45,0,0,40,
14,1,0,0,0,41,42,5,42,0,0,42,16,1,0,0,0,43,44,5,47,0,0,44,18,1,0,0,0,45,
47,7,0,0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,20,
1,0,0,0,50,52,7,0,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,
0,0,0,54,55,1,0,0,0,55,57,5,46,0,0,56,58,7,0,0,0,57,56,1,0,0,0,58,59,1,0,
0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,22,1,0,0,0,61,65,7,1,0,0,62,64,7,2,0,
0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,24,1,0,0,0,
67,65,1,0,0,0,68,70,7,3,0,0,69,68,1,0,0,0,70,71,1,0,0,0,71,69,1,0,0,0,71,
72,1,0,0,0,72,73,1,0,0,0,73,74,6,12,0,0,74,26,1,0,0,0,6,0,48,53,59,65,71,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CustomLangLexer extends antlr4.Lexer {

    static grammarFileName = "CustomLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "','", "'('", "')'", "'{'", "'}'", "'+'", 
                         "'-'", "'*'", "'/'" ];
	static symbolicNames = [ null, "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", 
                          "PLUS", "MINUS", "MUL", "DIV", "INT", "FLOAT", 
                          "ID", "WS" ];
	static ruleNames = [ "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "PLUS", 
                      "MINUS", "MUL", "DIV", "INT", "FLOAT", "ID", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CustomLangLexer.EOF = antlr4.Token.EOF;
CustomLangLexer.COMMA = 1;
CustomLangLexer.LPAREN = 2;
CustomLangLexer.RPAREN = 3;
CustomLangLexer.LCURLY = 4;
CustomLangLexer.RCURLY = 5;
CustomLangLexer.PLUS = 6;
CustomLangLexer.MINUS = 7;
CustomLangLexer.MUL = 8;
CustomLangLexer.DIV = 9;
CustomLangLexer.INT = 10;
CustomLangLexer.FLOAT = 11;
CustomLangLexer.ID = 12;
CustomLangLexer.WS = 13;



