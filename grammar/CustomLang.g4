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
    : expr op=(MUL | DIV) expr    # mulExpr
    | expr op=(PLUS | MINUS) expr # addExpr
    | MINUS? FLOAT                # floatVal
    | MINUS? INT                  # intVal
    | ID                          # idVal
    | LPAREN expr RPAREN         # nestedExpr
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
