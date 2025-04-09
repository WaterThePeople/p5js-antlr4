// Generated from c:/Users/Max/Desktop/Studia Wroclaw/Modelowanie i analiza systemow informatycznych/Projekt/projekt/p5js-antlr4/CustomLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CustomLangParser}.
 */
public interface CustomLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CustomLangParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(CustomLangParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link CustomLangParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(CustomLangParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link CustomLangParser#def}.
	 * @param ctx the parse tree
	 */
	void enterDef(CustomLangParser.DefContext ctx);
	/**
	 * Exit a parse tree produced by {@link CustomLangParser#def}.
	 * @param ctx the parse tree
	 */
	void exitDef(CustomLangParser.DefContext ctx);
	/**
	 * Enter a parse tree produced by {@link CustomLangParser#call}.
	 * @param ctx the parse tree
	 */
	void enterCall(CustomLangParser.CallContext ctx);
	/**
	 * Exit a parse tree produced by {@link CustomLangParser#call}.
	 * @param ctx the parse tree
	 */
	void exitCall(CustomLangParser.CallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code intVal}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIntVal(CustomLangParser.IntValContext ctx);
	/**
	 * Exit a parse tree produced by the {@code intVal}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIntVal(CustomLangParser.IntValContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addExpr}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAddExpr(CustomLangParser.AddExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addExpr}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAddExpr(CustomLangParser.AddExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nestedExpr}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNestedExpr(CustomLangParser.NestedExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nestedExpr}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNestedExpr(CustomLangParser.NestedExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code mulExpr}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMulExpr(CustomLangParser.MulExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code mulExpr}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMulExpr(CustomLangParser.MulExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code floatVal}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterFloatVal(CustomLangParser.FloatValContext ctx);
	/**
	 * Exit a parse tree produced by the {@code floatVal}
	 * labeled alternative in {@link CustomLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitFloatVal(CustomLangParser.FloatValContext ctx);
}