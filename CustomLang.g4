grammar CustomLang;

program
    : def* call* EOF;

def 
    : ID LCURLY call* RCURLY; 
    

call
    : ID LPAREN x_offset=expr COMMA 
				y_offset=expr COMMA 
				length=expr COMMA 
				rotation=expr RPAREN;

expr
    : l=expr op=(MUL | DIV) r=expr	    #mulExpr
    | l=expr op=(PLUS | MINUS) r=expr	#addExpr
    | MINUS? FLOAT					    #floatVal
    | MINUS? INT					    #intVal
    | LPAREN expr RPAREN		    	#nestedExpr
    ;

COMMA  : ',';
LPAREN : '(';
RPAREN : ')';
LCURLY : '{';
RCURLY : '}';

PLUS    : '+';
MINUS   : '-';
MUL     : '*';
DIV     : '/';

INT   : [0-9]+;
FLOAT : [0-9]+ '.' [0-9]+;
ID    : [a-zA-Z][a-zA-Z0-9_]*;
WS    : [ \t\n\r\f]+ -> skip;
