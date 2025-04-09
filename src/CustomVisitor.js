import CustomLangVisitor from "../grammar/CustomLangVisitor.js";

export default class CustomVisitor extends CustomLangVisitor {
  constructor() {
    super();
    this.functionDefs = [];
    this.topLevelCalls = [];
    this.inFunction = false;
  }

  visit(ctx) {
    if (!ctx) return null;
    return super.visit(ctx);
  }

  visitProgram(ctx) {
    const defs = ctx.def?.() ?? [];
    for (const defCtx of defs) {
      const func = this.visit(defCtx);
      if (func) this.functionDefs.push(func);
    }

    const calls = ctx.call?.() ?? [];
    for (const callCtx of calls) {
      const call = this.visit(callCtx);
      if (call) this.topLevelCalls.push(call);
    }

    return {
      functions: this.functionDefs.join("\n\n"),
      calls: this.topLevelCalls.map((c) => `  ${c}`).join("\n"),
    };
  }

  visitDef(ctx) {
    const funcName = ctx.ID().getText();
    const calls = ctx.call?.() || [];

    this.inFunction = true;
    const body = calls.map((c) => `  ${this.visit(c)}`).join("\n");
    this.inFunction = false;

    return `function ${funcName}(x, y, len, rot) {
    if (len < 0.05) return;
    push();
    rotate(rot);
  ${body}
    pop();
  }`;
  }

  visitCall(ctx) {
    const funcName = ctx.ID().getText();
    const x = this.visit(ctx.x_offset);
    const y = this.visit(ctx.y_offset);
    const len = this.visit(ctx.length);
    const rot = this.visit(ctx.rotation);

    const xExpr = this.inFunction ? `x + ${x} * len` : x;
    const yExpr = this.inFunction ? `y + ${y} * len` : y;
    const lenExpr = this.inFunction ? `len * ${len}` : len;

    return `${funcName}(${xExpr}, ${yExpr}, ${lenExpr}, ${rot});`;
  }

  visitMulExpr(ctx) {
    const [left, right] = ctx.expr();
    const op = ctx.op.text;
    return `${this.visit(left)} ${op} ${this.visit(right)}`;
  }

  visitAddExpr(ctx) {
    const [left, right] = ctx.expr();
    const op = ctx.op.text;
    return `${this.visit(left)} ${op} ${this.visit(right)}`;
  }

  visitFloatVal(ctx) {
    const sign = ctx.MINUS() ? "-" : "";
    return sign + ctx.FLOAT().getText();
  }

  visitIntVal(ctx) {
    const sign = ctx.MINUS() ? "-" : "";
    return sign + ctx.INT().getText();
  }

  visitIdVal(ctx) {
    return ctx.ID().getText();
  }

  visitNestedExpr(ctx) {
    return `(${this.visit(ctx.expr())})`;
  }
}
