// Generated from CustomLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CustomLangListener from './CustomLangListener.js';
import CustomLangVisitor from './CustomLangVisitor.js';

const serializedATN = [4,1,18,121,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,5,0,22,8,0,10,0,12,
0,25,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,34,8,1,10,1,12,1,37,9,1,3,1,39,
8,1,1,1,1,1,1,1,5,1,44,8,1,10,1,12,1,47,9,1,1,1,1,1,1,2,1,2,1,3,1,3,3,3,
55,8,3,1,4,1,4,1,4,1,4,1,4,5,4,62,8,4,10,4,12,4,65,9,4,3,4,67,8,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,80,8,5,10,5,12,5,83,9,5,1,5,1,
5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,93,8,6,10,6,12,6,96,9,6,3,6,98,8,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,3,6,108,8,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,116,8,6,
10,6,12,6,119,9,6,1,6,0,1,12,7,0,2,4,6,8,10,12,0,3,1,0,12,14,1,0,9,10,1,
0,7,8,130,0,17,1,0,0,0,2,28,1,0,0,0,4,50,1,0,0,0,6,54,1,0,0,0,8,56,1,0,0,
0,10,71,1,0,0,0,12,107,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,
17,15,1,0,0,0,17,18,1,0,0,0,18,23,1,0,0,0,19,17,1,0,0,0,20,22,3,8,4,0,21,
20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,
1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,29,5,17,0,0,29,38,5,3,0,0,30,35,3,
4,2,0,31,32,5,2,0,0,32,34,3,4,2,0,33,31,1,0,0,0,34,37,1,0,0,0,35,33,1,0,
0,0,35,36,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,38,30,1,0,0,0,38,39,1,0,0,
0,39,40,1,0,0,0,40,41,5,4,0,0,41,45,5,5,0,0,42,44,3,6,3,0,43,42,1,0,0,0,
44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,
49,5,6,0,0,49,3,1,0,0,0,50,51,5,17,0,0,51,5,1,0,0,0,52,55,3,8,4,0,53,55,
3,10,5,0,54,52,1,0,0,0,54,53,1,0,0,0,55,7,1,0,0,0,56,57,5,17,0,0,57,66,5,
3,0,0,58,63,3,12,6,0,59,60,5,2,0,0,60,62,3,12,6,0,61,59,1,0,0,0,62,65,1,
0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,66,58,1,0,
0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,5,4,0,0,69,70,5,1,0,0,70,9,1,0,0,0,
71,72,5,11,0,0,72,73,5,3,0,0,73,74,3,12,6,0,74,75,7,0,0,0,75,76,3,12,6,0,
76,77,5,4,0,0,77,81,5,5,0,0,78,80,3,6,3,0,79,78,1,0,0,0,80,83,1,0,0,0,81,
79,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,81,1,0,0,0,84,85,5,6,0,0,85,11,
1,0,0,0,86,87,6,6,-1,0,87,88,5,17,0,0,88,97,5,3,0,0,89,94,3,12,6,0,90,91,
5,2,0,0,91,93,3,12,6,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,
0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,97,89,1,0,0,0,97,98,1,0,0,0,98,99,1,0,
0,0,99,108,5,4,0,0,100,108,5,17,0,0,101,108,5,16,0,0,102,108,5,15,0,0,103,
104,5,3,0,0,104,105,3,12,6,0,105,106,5,4,0,0,106,108,1,0,0,0,107,86,1,0,
0,0,107,100,1,0,0,0,107,101,1,0,0,0,107,102,1,0,0,0,107,103,1,0,0,0,108,
117,1,0,0,0,109,110,10,7,0,0,110,111,7,1,0,0,111,116,3,12,6,8,112,113,10,
6,0,0,113,114,7,2,0,0,114,116,3,12,6,7,115,109,1,0,0,0,115,112,1,0,0,0,116,
119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,13,1,0,0,0,119,117,1,0,0,
0,14,17,23,35,38,45,54,63,66,81,94,97,107,115,117];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CustomLangParser extends antlr4.Parser {

    static grammarFileName = "CustomLang.g4";
    static literalNames = [ null, "';'", "','", "'('", "')'", "'{'", "'}'", 
                            "'+'", "'-'", "'*'", "'/'", "'if'", "'=='", 
                            "'>'", "'<'" ];
    static symbolicNames = [ null, "SEMI", "COMMA", "LPAREN", "RPAREN", 
                             "LCURLY", "RCURLY", "PLUS", "MINUS", "MUL", 
                             "DIV", "IF", "EQUAL", "GREATER", "LESSER", 
                             "INT", "FLOAT", "ID", "WS" ];
    static ruleNames = [ "program", "def", "vardef", "statement", "call", 
                         "ifexpr", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CustomLangParser.ruleNames;
        this.literalNames = CustomLangParser.literalNames;
        this.symbolicNames = CustomLangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CustomLangParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 14;
	                this.def(); 
	            }
	            this.state = 19;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 20;
	            this.call();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(CustomLangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	def() {
	    let localctx = new DefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CustomLangParser.RULE_def);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(CustomLangParser.ID);
	        this.state = 29;
	        this.match(CustomLangParser.LPAREN);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 30;
	            this.vardef();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 31;
	                this.match(CustomLangParser.COMMA);
	                this.state = 32;
	                this.vardef();
	                this.state = 37;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 40;
	        this.match(CustomLangParser.RPAREN);
	        this.state = 41;
	        this.match(CustomLangParser.LCURLY);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===17) {
	            this.state = 42;
	            this.statement();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(CustomLangParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vardef() {
	    let localctx = new VardefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CustomLangParser.RULE_vardef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(CustomLangParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CustomLangParser.RULE_statement);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.call();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.ifexpr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CustomLangParser.RULE_call);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(CustomLangParser.ID);
	        this.state = 57;
	        this.match(CustomLangParser.LPAREN);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 229384) !== 0)) {
	            this.state = 58;
	            this.expr(0);
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 59;
	                this.match(CustomLangParser.COMMA);
	                this.state = 60;
	                this.expr(0);
	                this.state = 65;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 68;
	        this.match(CustomLangParser.RPAREN);
	        this.state = 69;
	        this.match(CustomLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifexpr() {
	    let localctx = new IfexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CustomLangParser.RULE_ifexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(CustomLangParser.IF);
	        this.state = 72;
	        this.match(CustomLangParser.LPAREN);
	        this.state = 73;
	        this.expr(0);
	        this.state = 74;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 75;
	        this.expr(0);
	        this.state = 76;
	        this.match(CustomLangParser.RPAREN);
	        this.state = 77;
	        this.match(CustomLangParser.LCURLY);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===17) {
	            this.state = 78;
	            this.statement();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 84;
	        this.match(CustomLangParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, CustomLangParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FuncCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 87;
	            this.match(CustomLangParser.ID);
	            this.state = 88;
	            this.match(CustomLangParser.LPAREN);
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 229384) !== 0)) {
	                this.state = 89;
	                this.expr(0);
	                this.state = 94;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===2) {
	                    this.state = 90;
	                    this.match(CustomLangParser.COMMA);
	                    this.state = 91;
	                    this.expr(0);
	                    this.state = 96;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 99;
	            this.match(CustomLangParser.RPAREN);
	            break;

	        case 2:
	            localctx = new VarValContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 100;
	            this.match(CustomLangParser.ID);
	            break;

	        case 3:
	            localctx = new FloatValContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 101;
	            this.match(CustomLangParser.FLOAT);
	            break;

	        case 4:
	            localctx = new IntValContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            this.match(CustomLangParser.INT);
	            break;

	        case 5:
	            localctx = new ParenExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 103;
	            this.match(CustomLangParser.LPAREN);
	            this.state = 104;
	            this.expr(0);
	            this.state = 105;
	            this.match(CustomLangParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 117;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 115;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CustomLangParser.RULE_expr);
	                    this.state = 109;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 110;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 111;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new AddExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CustomLangParser.RULE_expr);
	                    this.state = 112;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 113;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 114;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 119;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CustomLangParser.EOF = antlr4.Token.EOF;
CustomLangParser.SEMI = 1;
CustomLangParser.COMMA = 2;
CustomLangParser.LPAREN = 3;
CustomLangParser.RPAREN = 4;
CustomLangParser.LCURLY = 5;
CustomLangParser.RCURLY = 6;
CustomLangParser.PLUS = 7;
CustomLangParser.MINUS = 8;
CustomLangParser.MUL = 9;
CustomLangParser.DIV = 10;
CustomLangParser.IF = 11;
CustomLangParser.EQUAL = 12;
CustomLangParser.GREATER = 13;
CustomLangParser.LESSER = 14;
CustomLangParser.INT = 15;
CustomLangParser.FLOAT = 16;
CustomLangParser.ID = 17;
CustomLangParser.WS = 18;

CustomLangParser.RULE_program = 0;
CustomLangParser.RULE_def = 1;
CustomLangParser.RULE_vardef = 2;
CustomLangParser.RULE_statement = 3;
CustomLangParser.RULE_call = 4;
CustomLangParser.RULE_ifexpr = 5;
CustomLangParser.RULE_expr = 6;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CustomLangParser.RULE_program;
    }

	EOF() {
	    return this.getToken(CustomLangParser.EOF, 0);
	};

	def = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefContext);
	    } else {
	        return this.getTypedRuleContext(DefContext,i);
	    }
	};

	call = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallContext);
	    } else {
	        return this.getTypedRuleContext(CallContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CustomLangParser.RULE_def;
    }

	ID() {
	    return this.getToken(CustomLangParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(CustomLangParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CustomLangParser.RPAREN, 0);
	};

	LCURLY() {
	    return this.getToken(CustomLangParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(CustomLangParser.RCURLY, 0);
	};

	vardef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VardefContext);
	    } else {
	        return this.getTypedRuleContext(VardefContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CustomLangParser.COMMA);
	    } else {
	        return this.getToken(CustomLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VardefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CustomLangParser.RULE_vardef;
    }

	ID() {
	    return this.getToken(CustomLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterVardef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitVardef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitVardef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CustomLangParser.RULE_statement;
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	ifexpr() {
	    return this.getTypedRuleContext(IfexprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CustomLangParser.RULE_call;
    }

	ID() {
	    return this.getToken(CustomLangParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(CustomLangParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CustomLangParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(CustomLangParser.SEMI, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CustomLangParser.COMMA);
	    } else {
	        return this.getToken(CustomLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CustomLangParser.RULE_ifexpr;
    }

	IF() {
	    return this.getToken(CustomLangParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(CustomLangParser.LPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(CustomLangParser.RPAREN, 0);
	};

	LCURLY() {
	    return this.getToken(CustomLangParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(CustomLangParser.RCURLY, 0);
	};

	EQUAL() {
	    return this.getToken(CustomLangParser.EQUAL, 0);
	};

	GREATER() {
	    return this.getToken(CustomLangParser.GREATER, 0);
	};

	LESSER() {
	    return this.getToken(CustomLangParser.LESSER, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterIfexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitIfexpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitIfexpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CustomLangParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IntValContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(CustomLangParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterIntVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitIntVal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitIntVal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.IntValContext = IntValContext;

class AddExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(CustomLangParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CustomLangParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterAddExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitAddExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitAddExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.AddExprContext = AddExprContext;

class MulExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CustomLangParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CustomLangParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterMulExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitMulExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitMulExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.MulExprContext = MulExprContext;

class FloatValContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(CustomLangParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterFloatVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitFloatVal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitFloatVal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.FloatValContext = FloatValContext;

class FuncCallContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CustomLangParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(CustomLangParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CustomLangParser.RPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CustomLangParser.COMMA);
	    } else {
	        return this.getToken(CustomLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterFuncCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitFuncCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitFuncCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.FuncCallContext = FuncCallContext;

class VarValContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CustomLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterVarVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitVarVal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitVarVal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.VarValContext = VarValContext;

class ParenExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(CustomLangParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(CustomLangParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterParenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitParenExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitParenExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.ParenExprContext = ParenExprContext;


CustomLangParser.ProgramContext = ProgramContext; 
CustomLangParser.DefContext = DefContext; 
CustomLangParser.VardefContext = VardefContext; 
CustomLangParser.StatementContext = StatementContext; 
CustomLangParser.CallContext = CallContext; 
CustomLangParser.IfexprContext = IfexprContext; 
CustomLangParser.ExprContext = ExprContext; 
