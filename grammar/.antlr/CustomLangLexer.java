// Generated from c:/Users/Max/Desktop/Studia Wroclaw/Modelowanie i analiza systemow informatycznych/Projekt/projekt/p5js-antlr4/grammar/CustomLang.g4 by ANTLR 4.13.1
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
		T__0=1, COMMA=2, LPAREN=3, RPAREN=4, LCURLY=5, RCURLY=6, PLUS=7, MINUS=8, 
		MUL=9, DIV=10, INT=11, FLOAT=12, ID=13, WS=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "PLUS", "MINUS", 
			"MUL", "DIV", "INT", "FLOAT", "ID", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'root'", "','", "'('", "')'", "'{'", "'}'", "'+'", "'-'", "'*'", 
			"'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "COMMA", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "PLUS", 
			"MINUS", "MUL", "DIV", "INT", "FLOAT", "ID", "WS"
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
		"\u0004\u0000\u000eR\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0004\n6\b\n\u000b\n\f\n7\u0001\u000b\u0004\u000b"+
		";\b\u000b\u000b\u000b\f\u000b<\u0001\u000b\u0001\u000b\u0004\u000bA\b"+
		"\u000b\u000b\u000b\f\u000bB\u0001\f\u0001\f\u0005\fG\b\f\n\f\f\fJ\t\f"+
		"\u0001\r\u0004\rM\b\r\u000b\r\f\rN\u0001\r\u0001\r\u0000\u0000\u000e\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u0001"+
		"\u0000\u0004\u0001\u000009\u0002\u0000AZaz\u0004\u000009AZ__az\u0003\u0000"+
		"\t\n\f\r  V\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0001\u001d\u0001\u0000\u0000\u0000\u0003\"\u0001\u0000\u0000\u0000\u0005"+
		"$\u0001\u0000\u0000\u0000\u0007&\u0001\u0000\u0000\u0000\t(\u0001\u0000"+
		"\u0000\u0000\u000b*\u0001\u0000\u0000\u0000\r,\u0001\u0000\u0000\u0000"+
		"\u000f.\u0001\u0000\u0000\u0000\u00110\u0001\u0000\u0000\u0000\u00132"+
		"\u0001\u0000\u0000\u0000\u00155\u0001\u0000\u0000\u0000\u0017:\u0001\u0000"+
		"\u0000\u0000\u0019D\u0001\u0000\u0000\u0000\u001bL\u0001\u0000\u0000\u0000"+
		"\u001d\u001e\u0005r\u0000\u0000\u001e\u001f\u0005o\u0000\u0000\u001f "+
		"\u0005o\u0000\u0000 !\u0005t\u0000\u0000!\u0002\u0001\u0000\u0000\u0000"+
		"\"#\u0005,\u0000\u0000#\u0004\u0001\u0000\u0000\u0000$%\u0005(\u0000\u0000"+
		"%\u0006\u0001\u0000\u0000\u0000&\'\u0005)\u0000\u0000\'\b\u0001\u0000"+
		"\u0000\u0000()\u0005{\u0000\u0000)\n\u0001\u0000\u0000\u0000*+\u0005}"+
		"\u0000\u0000+\f\u0001\u0000\u0000\u0000,-\u0005+\u0000\u0000-\u000e\u0001"+
		"\u0000\u0000\u0000./\u0005-\u0000\u0000/\u0010\u0001\u0000\u0000\u0000"+
		"01\u0005*\u0000\u00001\u0012\u0001\u0000\u0000\u000023\u0005/\u0000\u0000"+
		"3\u0014\u0001\u0000\u0000\u000046\u0007\u0000\u0000\u000054\u0001\u0000"+
		"\u0000\u000067\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u000078\u0001"+
		"\u0000\u0000\u00008\u0016\u0001\u0000\u0000\u00009;\u0007\u0000\u0000"+
		"\u0000:9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<:\u0001\u0000"+
		"\u0000\u0000<=\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>@\u0005"+
		".\u0000\u0000?A\u0007\u0000\u0000\u0000@?\u0001\u0000\u0000\u0000AB\u0001"+
		"\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000"+
		"C\u0018\u0001\u0000\u0000\u0000DH\u0007\u0001\u0000\u0000EG\u0007\u0002"+
		"\u0000\u0000FE\u0001\u0000\u0000\u0000GJ\u0001\u0000\u0000\u0000HF\u0001"+
		"\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000I\u001a\u0001\u0000\u0000"+
		"\u0000JH\u0001\u0000\u0000\u0000KM\u0007\u0003\u0000\u0000LK\u0001\u0000"+
		"\u0000\u0000MN\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000NO\u0001"+
		"\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000PQ\u0006\r\u0000\u0000Q\u001c"+
		"\u0001\u0000\u0000\u0000\u0006\u00007<BHN\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}