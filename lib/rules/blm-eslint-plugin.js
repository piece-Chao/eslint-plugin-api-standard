/**
 * @fileoverview 规范 api 请求函数格式
 * @author machao
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const errorTips = (context, node) = (
  context.report({
    node,
    message: 'api 格式不正确'
  })
)

// 处理返回值
const handleReturnStatement = (context, node) => {
  if (node.argument.type !== 'CallExpression' || node.argument.callee.type !== 'Identifier' || !node.argument.arguments || !node.argument.arguments.length) {
    errorTips(context, node)
  } else {
    const ObjectExpression = node.argument.arguments[0]
    if (ObjectExpression.type !== 'ObjectExpression' || !ObjectExpression.properties || !ObjectExpression.properties.length) {
      errorTips(context, node)
    } else {
      const { properties } = ObjectExpression
      for (const item of properties) {
        switch(item.key.name) {
        case 'url':
        case 'method':
          if (item.value.type !== 'Literal' || typeof item.value.value !== 'string') {
            errorTips(context, node)
          }
          break
        case 'data':
        case 'header':
        case 'headers':
          if (item.value.type !== 'Identifier' || item.value.value) {
            errorTips(context, node)
          }
          break
        }
      }
    }
  }
}


// 处理函数声明
const handleFunctionDeclaration = (context, node) => {
  const ReturnStatement = node.declaration.body.body[0]
  if (!ReturnStatement || ReturnStatement.type !== 'ReturnStatement') {
    errorTips(context, node)
  } else {
    handleReturnStatement(context, ReturnStatement)
  }
}

// 处理箭头函数
const handleVariableDeclaration = (context, node) => {
  const VariableDeclarator = node.declaration.declarations[0]
  if (!VariableDeclarator || VariableDeclarator.type !== 'VariableDeclarator') {
    errorTips(context, node)
  } else {
    const ArrowFunctionExpression = VariableDeclarator.init
    if (!ArrowFunctionExpression || ArrowFunctionExpression.type !== 'ArrowFunctionExpression') {
      errorTips(context, node)
    } else {
      const ReturnStatement = ArrowFunctionExpression.body.body[0]
      if (!ReturnStatement || ReturnStatement.type !== 'ReturnStatement') {
        errorTips(context, node)
      } else {
        handleReturnStatement(context, ReturnStatement)
      }
    }
  }
}

// 只能包含普通函数和箭头函数写法
const handleExportNamedDeclaration = (context, node) => {
  if (node.declaration.type === 'FunctionDeclaration') {
    handleFunctionDeclaration(context, node)
  } else if (node.declaration.type === 'VariableDeclaration') {
    handleVariableDeclaration(context, node)
  } else {
    errorTips(context, node)
  }
}

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "规范 api 请求函数格式",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      'Program'(node) {
        const body = node.body;
        for (let item of body) {
          if (item.type === 'ImportDeclaration') {
            continue;
          } else if (item.type === 'ExportNamedDeclaration') {
            handleExportNamedDeclaration(context, item)
          } else {
            errorTips(context, node)
          }
        }
      }
    };
  },
};
