import CustomLangVisitor from './CustomLangVisitor.js';

export default class CustomVisitor extends CustomLangVisitor {

    visitProgram(ctx) {
        return ctx.def().map(def => this.visit(def)).join("\n\n") + "\n\n" +
            ctx.call().map(call => this.visit(call)).join("\n");
    }

    visitDef(ctx) {
        const functionName = ctx.ID().getText();
        const params = ctx.vardef() ? ctx.vardef().map(param => param.getText()) : [];
        const body = ctx.statement().map(stmt => this.visit(stmt)).join("\n  ");

        return `function ${functionName}(${params.join(", ")}) {\n  ${body}\n}`;
    }

    visitCall(ctx) {
        const functionName = ctx.ID().getText();
        const args = ctx.expr() ? ctx.expr().map(expr => this.visit(expr)) : [];

        return `${functionName}(${args.join(", ")});`;
    }

    visitIfexpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const operator = ctx.EQUAL() ? "===" : ctx.GREATER() ? ">" : ctx.LESSER() ? "<" : "";
        const right = this.visit(ctx.expr(1));

        const body = ctx.statement().map(stmt => this.visit(stmt)).join("\n  ");

        return `if (${left} ${operator} ${right}) {\n  ${body}\n}`;
    }

    visitMulExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        return `(${left} ${ctx.op.text} ${right})`;
    }

    visitAddExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        return `(${left} ${ctx.op.text} ${right})`;
    }

    visitParenExpr(ctx) {
        return `(${this.visit(ctx.expr())})`;
    }

    visitFuncCall(ctx) {
        const functionName = ctx.ID().getText();
        const args = ctx.expr() ? ctx.expr().map(expr => this.visit(expr)) : [];

        if (functionName === "sqrt") {
            return `Math.sqrt(${args.join(", ")})`;
        }

        return `${functionName}(${args.join(", ")})`;
    }

    visitVarVal(ctx) {
        return ctx.ID().getText();
    }

    visitFloatVal(ctx) {
        return ctx.FLOAT().getText();
    }

    visitIntVal(ctx) {
        return ctx.INT().getText();
    }
}
