// Generated from CustomLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,82,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,
1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,4,10,54,8,10,11,10,12,10,55,1,11,4,
11,59,8,11,11,11,12,11,60,1,11,1,11,4,11,65,8,11,11,11,12,11,66,1,12,1,12,
5,12,71,8,12,10,12,12,12,74,9,12,1,13,4,13,77,8,13,11,13,12,13,78,1,13,1,
13,0,0,14,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
27,14,1,0,4,1,0,48,57,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,3,0,
9,10,12,13,32,32,86,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,34,1,
0,0,0,5,36,1,0,0,0,7,38,1,0,0,0,9,40,1,0,0,0,11,42,1,0,0,0,13,44,1,0,0,0,
15,46,1,0,0,0,17,48,1,0,0,0,19,50,1,0,0,0,21,53,1,0,0,0,23,58,1,0,0,0,25,
68,1,0,0,0,27,76,1,0,0,0,29,30,5,114,0,0,30,31,5,111,0,0,31,32,5,111,0,0,
32,33,5,116,0,0,33,2,1,0,0,0,34,35,5,44,0,0,35,4,1,0,0,0,36,37,5,40,0,0,
37,6,1,0,0,0,38,39,5,41,0,0,39,8,1,0,0,0,40,41,5,123,0,0,41,10,1,0,0,0,42,
43,5,125,0,0,43,12,1,0,0,0,44,45,5,43,0,0,45,14,1,0,0,0,46,47,5,45,0,0,47,
16,1,0,0,0,48,49,5,42,0,0,49,18,1,0,0,0,50,51,5,47,0,0,51,20,1,0,0,0,52,
54,7,0,0,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,22,
1,0,0,0,57,59,7,0,0,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,1,0,0,0,60,61,1,
0,0,0,61,62,1,0,0,0,62,64,5,46,0,0,63,65,7,0,0,0,64,63,1,0,0,0,65,66,1,0,
0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,24,1,0,0,0,68,72,7,1,0,0,69,71,7,2,0,
0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,26,1,0,0,0,
74,72,1,0,0,0,75,77,7,3,0,0,76,75,1,0,0,0,77,78,1,0,0,0,78,76,1,0,0,0,78,
79,1,0,0,0,79,80,1,0,0,0,80,81,6,13,0,0,81,28,1,0,0,0,6,0,55,60,66,72,78,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CustomLangLexer extends antlr4.Lexer {

    static grammarFileName = "CustomLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'root'", "','", "'('", "')'", "'{'", "'}'", 
                         "'+'", "'-'", "'*'", "'/'" ];
	static symbolicNames = [ null, null, "COMMA", "LPAREN", "RPAREN", "LCURLY", 
                          "RCURLY", "PLUS", "MINUS", "MUL", "DIV", "INT", 
                          "FLOAT", "ID", "WS" ];
	static ruleNames = [ "T__0", "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", 
                      "PLUS", "MINUS", "MUL", "DIV", "INT", "FLOAT", "ID", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CustomLangLexer.EOF = antlr4.Token.EOF;
CustomLangLexer.T__0 = 1;
CustomLangLexer.COMMA = 2;
CustomLangLexer.LPAREN = 3;
CustomLangLexer.RPAREN = 4;
CustomLangLexer.LCURLY = 5;
CustomLangLexer.RCURLY = 6;
CustomLangLexer.PLUS = 7;
CustomLangLexer.MINUS = 8;
CustomLangLexer.MUL = 9;
CustomLangLexer.DIV = 10;
CustomLangLexer.INT = 11;
CustomLangLexer.FLOAT = 12;
CustomLangLexer.ID = 13;
CustomLangLexer.WS = 14;



