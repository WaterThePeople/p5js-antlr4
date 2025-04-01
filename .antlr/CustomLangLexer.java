// Generated from c:/Users/Maksymilian/Desktop/studia wroc³aw/p5js+antlr4/CustomLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CustomLangLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SEMI=1, COMMA=2, LPAREN=3, RPAREN=4, LCURLY=5, RCURLY=6, PLUS=7, MINUS=8, 
		MUL=9, DIV=10, IF=11, EQUAL=12, GREATER=13, LESSER=14, INT=15, FLOAT=16, 
		ID=17, WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SEMI", "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "PLUS", "MINUS", 
			"MUL", "DIV", "IF", "EQUAL", "GREATER", "LESSER", "INT", "FLOAT", "ID", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "','", "'('", "')'", "'{'", "'}'", "'+'", "'-'", "'*'", 
			"'/'", "'if'", "'=='", "'>'", "'<'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SEMI", "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "PLUS", 
			"MINUS", "MUL", "DIV", "IF", "EQUAL", "GREATER", "LESSER", "INT", "FLOAT", 
			"ID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CustomLangLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CustomLang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012a\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f"+
		"\u0001\f\u0001\r\u0001\r\u0001\u000e\u0004\u000eE\b\u000e\u000b\u000e"+
		"\f\u000eF\u0001\u000f\u0004\u000fJ\b\u000f\u000b\u000f\f\u000fK\u0001"+
		"\u000f\u0001\u000f\u0004\u000fP\b\u000f\u000b\u000f\f\u000fQ\u0001\u0010"+
		"\u0001\u0010\u0005\u0010V\b\u0010\n\u0010\f\u0010Y\t\u0010\u0001\u0011"+
		"\u0004\u0011\\\b\u0011\u000b\u0011\f\u0011]\u0001\u0011\u0001\u0011\u0000"+
		"\u0000\u0012\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012\u0001\u0000\u0004\u0001\u0000"+
		"09\u0003\u0000AZ__az\u0004\u000009AZ__az\u0003\u0000\t\n\f\r  e\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000"+
		"\u0000\u0003\'\u0001\u0000\u0000\u0000\u0005)\u0001\u0000\u0000\u0000"+
		"\u0007+\u0001\u0000\u0000\u0000\t-\u0001\u0000\u0000\u0000\u000b/\u0001"+
		"\u0000\u0000\u0000\r1\u0001\u0000\u0000\u0000\u000f3\u0001\u0000\u0000"+
		"\u0000\u00115\u0001\u0000\u0000\u0000\u00137\u0001\u0000\u0000\u0000\u0015"+
		"9\u0001\u0000\u0000\u0000\u0017<\u0001\u0000\u0000\u0000\u0019?\u0001"+
		"\u0000\u0000\u0000\u001bA\u0001\u0000\u0000\u0000\u001dD\u0001\u0000\u0000"+
		"\u0000\u001fI\u0001\u0000\u0000\u0000!S\u0001\u0000\u0000\u0000#[\u0001"+
		"\u0000\u0000\u0000%&\u0005;\u0000\u0000&\u0002\u0001\u0000\u0000\u0000"+
		"\'(\u0005,\u0000\u0000(\u0004\u0001\u0000\u0000\u0000)*\u0005(\u0000\u0000"+
		"*\u0006\u0001\u0000\u0000\u0000+,\u0005)\u0000\u0000,\b\u0001\u0000\u0000"+
		"\u0000-.\u0005{\u0000\u0000.\n\u0001\u0000\u0000\u0000/0\u0005}\u0000"+
		"\u00000\f\u0001\u0000\u0000\u000012\u0005+\u0000\u00002\u000e\u0001\u0000"+
		"\u0000\u000034\u0005-\u0000\u00004\u0010\u0001\u0000\u0000\u000056\u0005"+
		"*\u0000\u00006\u0012\u0001\u0000\u0000\u000078\u0005/\u0000\u00008\u0014"+
		"\u0001\u0000\u0000\u00009:\u0005i\u0000\u0000:;\u0005f\u0000\u0000;\u0016"+
		"\u0001\u0000\u0000\u0000<=\u0005=\u0000\u0000=>\u0005=\u0000\u0000>\u0018"+
		"\u0001\u0000\u0000\u0000?@\u0005>\u0000\u0000@\u001a\u0001\u0000\u0000"+
		"\u0000AB\u0005<\u0000\u0000B\u001c\u0001\u0000\u0000\u0000CE\u0007\u0000"+
		"\u0000\u0000DC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000FD\u0001"+
		"\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000G\u001e\u0001\u0000\u0000"+
		"\u0000HJ\u0007\u0000\u0000\u0000IH\u0001\u0000\u0000\u0000JK\u0001\u0000"+
		"\u0000\u0000KI\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000LM\u0001"+
		"\u0000\u0000\u0000MO\u0005.\u0000\u0000NP\u0007\u0000\u0000\u0000ON\u0001"+
		"\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000"+
		"QR\u0001\u0000\u0000\u0000R \u0001\u0000\u0000\u0000SW\u0007\u0001\u0000"+
		"\u0000TV\u0007\u0002\u0000\u0000UT\u0001\u0000\u0000\u0000VY\u0001\u0000"+
		"\u0000\u0000WU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000X\"\u0001"+
		"\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000Z\\\u0007\u0003\u0000\u0000"+
		"[Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000][\u0001\u0000\u0000"+
		"\u0000]^\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_`\u0006\u0011"+
		"\u0000\u0000`$\u0001\u0000\u0000\u0000\u0006\u0000FKQW]\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}