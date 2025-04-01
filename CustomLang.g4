grammar CustomLang;

program
    : def* call* EOF;

def 
    : ID LPAREN (vardef (COMMA vardef)*)? RPAREN LCURLY statement* RCURLY;
    
vardef: ID;

statement
    : call 
    | ifexpr
    ;

call
    : ID LPAREN (expr (COMMA expr)*)? RPAREN SEMI;

ifexpr
    : IF LPAREN expr (EQUAL | GREATER | LESSER) expr RPAREN LCURLY statement* RCURLY;

expr
    : expr op=(MUL | DIV) expr   #mulExpr
    | expr op=(PLUS | MINUS) expr #addExpr
    | ID LPAREN (expr (COMMA expr)*)? RPAREN #funcCall
    | ID                       #varVal
    | FLOAT                    #floatVal
    | INT                      #intVal
    | LPAREN expr RPAREN        #parenExpr
    ;

SEMI   : ';';
COMMA  : ',';
LPAREN : '(';
RPAREN : ')';
LCURLY : '{';
RCURLY : '}';

PLUS    : '+';
MINUS   : '-';
MUL     : '*';
DIV     : '/';

IF      : 'if';
EQUAL   : '==';
GREATER : '>';
LESSER  : '<';

INT   : [0-9]+;
FLOAT : [0-9]+ '.' [0-9]+;
ID    : [a-zA-Z_][a-zA-Z_0-9]*;
WS    : [ \t\n\r\f]+ -> skip;
