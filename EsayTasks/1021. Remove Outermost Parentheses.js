/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  return new Solution(S).GetRemoved();
};

class Solution {
  constructor(S) {
    this.ResetState();

    this.m_Input = [...S];
    this.m_Primitives = [];
  }

  ResetState() {
    /**
     * @type {"BuildPrimitive"|"PrimitiveFound"}
     */
    this.m_Status = "BuildPrimitive";

    this.m_CurrentPrimitive = "";
    this.m_DanglingLeftParen = 0;
  }

  BuildPrimitive(parenthese) {
    this.m_CurrentPrimitive += parenthese;
    this.UpdateStatus(parenthese);

    if (this.m_Status === "PrimitiveFound") {
      this.StorePrimitive();
    }
  }

  UpdateStatus(parenthese) {
    if (parenthese === "(") {
      ++this.m_DanglingLeftParen;
    } else if (parenthese === ")") {
      --this.m_DanglingLeftParen;

      if (this.m_DanglingLeftParen === 0) {
        this.m_Status = "PrimitiveFound";
      }
    }
  }

  StorePrimitive() {
    this.m_Primitives.push(this.m_CurrentPrimitive);
    this.ResetState();
  }

  GetRemoved() {
    this.m_Input.forEach((parenthese) => this.BuildPrimitive(parenthese));
    return this.m_Primitives.map(this.RemoveOuterParentheses).join("");
  }

  RemoveOuterParentheses(primitive) {
    return primitive.substring(1, primitive.length - 1);
  }
}
