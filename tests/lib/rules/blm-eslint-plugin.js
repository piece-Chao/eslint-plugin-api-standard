/**
 * @fileoverview 规范 api 请求函数格式
 * @author machao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/blm-eslint-plugin"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("blm-eslint-plugin", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "  ",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
