// Generated from CustomLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CustomLangListener from './CustomLangListener.js';
import CustomLangVisitor from './CustomLangVisitor.js';

const serializedATN = [4,1,14,72,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,
1,1,5,1,26,8,1,10,1,12,1,29,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
3,3,59,8,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,67,8,3,10,3,12,3,70,9,3,1,3,0,1,6,
4,0,2,4,6,0,2,1,0,9,10,1,0,7,8,77,0,11,1,0,0,0,2,22,1,0,0,0,4,32,1,0,0,0,
6,58,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,
0,0,0,12,17,1,0,0,0,13,11,1,0,0,0,14,16,3,4,2,0,15,14,1,0,0,0,16,19,1,0,
0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,0,0,
1,21,1,1,0,0,0,22,23,5,13,0,0,23,27,5,5,0,0,24,26,3,4,2,0,25,24,1,0,0,0,
26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,
31,5,6,0,0,31,3,1,0,0,0,32,33,5,13,0,0,33,34,5,3,0,0,34,35,3,6,3,0,35,36,
5,2,0,0,36,37,3,6,3,0,37,38,5,2,0,0,38,39,3,6,3,0,39,40,5,2,0,0,40,41,3,
6,3,0,41,42,5,4,0,0,42,5,1,0,0,0,43,44,6,3,-1,0,44,45,5,8,0,0,45,59,3,6,
3,8,46,47,5,1,0,0,47,48,5,3,0,0,48,49,3,6,3,0,49,50,5,4,0,0,50,59,1,0,0,
0,51,59,5,12,0,0,52,59,5,11,0,0,53,59,5,13,0,0,54,55,5,3,0,0,55,56,3,6,3,
0,56,57,5,4,0,0,57,59,1,0,0,0,58,43,1,0,0,0,58,46,1,0,0,0,58,51,1,0,0,0,
58,52,1,0,0,0,58,53,1,0,0,0,58,54,1,0,0,0,59,68,1,0,0,0,60,61,10,7,0,0,61,
62,7,0,0,0,62,67,3,6,3,8,63,64,10,6,0,0,64,65,7,1,0,0,65,67,3,6,3,7,66,60,
1,0,0,0,66,63,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,7,1,0,
0,0,70,68,1,0,0,0,6,11,17,27,58,66,68];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CustomLangParser extends antlr4.Parser {

    static grammarFileName = "CustomLang.g4";
    static literalNames = [ null, "'root'", "','", "'('", "')'", "'{'", 
                            "'}'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, "COMMA", "LPAREN", "RPAREN", "LCURLY", 
                             "RCURLY", "PLUS", "MINUS", "MUL", "DIV", "INT", 
                             "FLOAT", "ID", "WS" ];
    static ruleNames = [ "program", "def", "call", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CustomLangParser.ruleNames;
        this.literalNames = CustomLangParser.literalNames;
        this.symbolicNames = CustomLangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
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
	        this.state = 11;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 8;
	                this.def(); 
	            }
	            this.state = 13;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 14;
	            this.call();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
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
	        this.state = 22;
	        this.match(CustomLangParser.ID);
	        this.state = 23;
	        this.match(CustomLangParser.LCURLY);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 24;
	            this.call();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
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



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CustomLangParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(CustomLangParser.ID);
	        this.state = 33;
	        this.match(CustomLangParser.LPAREN);
	        this.state = 34;
	        localctx.x_offset = this.expr(0);
	        this.state = 35;
	        this.match(CustomLangParser.COMMA);
	        this.state = 36;
	        localctx.y_offset = this.expr(0);
	        this.state = 37;
	        this.match(CustomLangParser.COMMA);
	        this.state = 38;
	        localctx.length = this.expr(0);
	        this.state = 39;
	        this.match(CustomLangParser.COMMA);
	        this.state = 40;
	        localctx.rotation = this.expr(0);
	        this.state = 41;
	        this.match(CustomLangParser.RPAREN);
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
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, CustomLangParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            localctx = new MinusExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 44;
	            this.match(CustomLangParser.MINUS);
	            this.state = 45;
	            this.expr(8);
	            break;
	        case 1:
	            localctx = new RootExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 46;
	            this.match(CustomLangParser.T__0);
	            this.state = 47;
	            this.match(CustomLangParser.LPAREN);
	            this.state = 48;
	            this.expr(0);
	            this.state = 49;
	            this.match(CustomLangParser.RPAREN);
	            break;
	        case 12:
	            localctx = new FloatValContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 51;
	            this.match(CustomLangParser.FLOAT);
	            break;
	        case 11:
	            localctx = new IntValContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(CustomLangParser.INT);
	            break;
	        case 13:
	            localctx = new IdValContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(CustomLangParser.ID);
	            break;
	        case 3:
	            localctx = new NestedExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.match(CustomLangParser.LPAREN);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
	            this.match(CustomLangParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 66;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CustomLangParser.RULE_expr);
	                    this.state = 60;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 61;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 62;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new AddExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CustomLangParser.RULE_expr);
	                    this.state = 63;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 64;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 65;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
CustomLangParser.T__0 = 1;
CustomLangParser.COMMA = 2;
CustomLangParser.LPAREN = 3;
CustomLangParser.RPAREN = 4;
CustomLangParser.LCURLY = 5;
CustomLangParser.RCURLY = 6;
CustomLangParser.PLUS = 7;
CustomLangParser.MINUS = 8;
CustomLangParser.MUL = 9;
CustomLangParser.DIV = 10;
CustomLangParser.INT = 11;
CustomLangParser.FLOAT = 12;
CustomLangParser.ID = 13;
CustomLangParser.WS = 14;

CustomLangParser.RULE_program = 0;
CustomLangParser.RULE_def = 1;
CustomLangParser.RULE_call = 2;
CustomLangParser.RULE_expr = 3;

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

	LCURLY() {
	    return this.getToken(CustomLangParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(CustomLangParser.RCURLY, 0);
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
        this.x_offset = null;
        this.y_offset = null;
        this.length = null;
        this.rotation = null;
    }

	ID() {
	    return this.getToken(CustomLangParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(CustomLangParser.LPAREN, 0);
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


class RootExprContext extends ExprContext {

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
	        listener.enterRootExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitRootExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitRootExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.RootExprContext = RootExprContext;

class IdValContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CustomLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterIdVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitIdVal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitIdVal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.IdValContext = IdValContext;

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

class NestedExprContext extends ExprContext {

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
	        listener.enterNestedExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitNestedExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitNestedExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.NestedExprContext = NestedExprContext;

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

class MinusExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MINUS() {
	    return this.getToken(CustomLangParser.MINUS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.enterMinusExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CustomLangListener ) {
	        listener.exitMinusExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CustomLangVisitor ) {
	        return visitor.visitMinusExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CustomLangParser.MinusExprContext = MinusExprContext;


CustomLangParser.ProgramContext = ProgramContext; 
CustomLangParser.DefContext = DefContext; 
CustomLangParser.CallContext = CallContext; 
CustomLangParser.ExprContext = ExprContext; 
