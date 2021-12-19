import {LooseParser as Parser} from "./acorn/acorn-loose/dist/acorn-loose.mjs"

export class Transpile {


    forToWhile(node) {
        console.assert(node.type === 'ForStatement', "is given node a for statement")
        const newNode = {type: 'BlockStatement', start: 0, end: 0, body: []}
        newNode.body.push(this.initUpdateToExpr(node.init))  // add initializer

        let newBody
        if (node.body.type === 'BlockStatement') {
            newBody = {...node.body}
        } else {
            newBody = {type: 'BlockStatement', start: 0, end: 0, body: [{...node.body}]}
        }
        newBody.body.push(this.initUpdateToExpr(node.update))

        const whileNode = {type: 'WhileStatement', start: 0, end: 0, test: node.test, body: newBody}

        newNode.body.push(whileNode)
        return newNode
    }

    selfAssignToUpdateAndInplace(node) {
        console.assert(node.type === 'AssignmentExpression', "is given node a assignment statement")
        const left = node.left
        const right = node.right

        if (node.operator === '+=' && right.type === 'Literal') {
            if (right.value === 1) {
                return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '++', prefix: false}
            } else if (right.value === -1) {
                return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '--', prefix: false}
            }
        } else if (node.operator === '-=' && right.type === 'Literal') {
            if (right.value === 1) {
                return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '--', prefix: false}
            } else if (right.value === -1) {
                return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '++', prefix: false}
            }
        }

        if (node.operator !== '=' || right.type !== 'BinaryExpression') return node

        if (right.operator === '+') {
            let another
            if (this.isSameValue(left, right.left)) {
                another = right.right
            }
            if (this.isSameValue(left, right.right)) {
                another = right.left
            }
            if (another !== undefined) {
                if (another.type === 'Literal' && another.value === 1) {
                    return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '++', prefix: false}
                } else if (another.type === 'UnaryExpression' && another.operator === '-' && another.argument.value === 1) {
                    return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '--', prefix: false}
                }
                return {type: 'AssignmentExpression', start: 0, end: 0, left: left, operator: '+=', right: another}
            }
        } else if (right.operator === '-') {
            if (this.isSameValue(left, right.left)) {
                if (right.right.type === 'Literal' && right.right.value === 1) {
                    return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '--', prefix: false}
                } else if (another.type === 'UnaryExpression' && another.operator === '-' && another.argument.value === 1) {
                    return {type: 'UpdateExpression', start: 0, end: 0, argument: left, operator: '++', prefix: false}
                }
                return {type: 'AssignmentExpression', start: 0, end: 0, left: left, operator: '-=', right: right.right}
            }
        } else if (right.operator === '*') {
            let another
            if (this.isSameValue(left, right.left)) {
                another = right.right
            }
            if (this.isSameValue(left, right.right)) {
                another = right.left
            }
            if (another !== undefined) return {
                type: 'AssignmentExpression',
                start: 0,
                end: 0,
                left: left,
                operator: '+=',
                right: another
            }
        } else if (right.operator === '/') {
            if (this.isSameValue(left, right.left)) {
                if (right.right.type === 'UnaryExpression' && right.right.operator === '-' && right.right.argument.value === 1) {
                    return {type: 'AssignmentExpression', start: 0, end: 0, left: left, operator: '*=', right: right.right}
                }
                return {type: 'AssignmentExpression', start: 0, end: 0, left: left, operator: '/=', right: right.right}
            }
        } else if (right.operator === '%') {
            if (this.isSameValue(left, right.left)) {
                return {type: 'AssignmentExpression', start: 0, end: 0, left: left, operator: '%=', right: right.right}
            }
        }
        return node
    }

    isSameValue(left, right) {
        if (left.type !== right.type) return false
        if (left.type === 'Literal') return left.value === right.value
        if (left.type === 'Identifier') return left.name === right.name
        if (left.type === 'MemberExpression') return this.isSameValue(left.object, right.object) && this.isSameValue(left.property, right.property)
    }

    initUpdateToExpr(node) {
        if (node.type === 'VariableDeclaration') return {...node}
        return {type: 'ExpressionStatement', start: 0, end: 0, expression: {...node}}
    }

    convertAll(node) {
        if (Array.isArray(node.body)) {
            for (let i = 0; i < node.body.length; i++) {
                node.body[i] = this.convertAll(node.body[i])
            }
        } else if (node.body !== undefined) {
            node.body = this.convertAll(node.body)
        }
        return this.convert(node)
    }

    convert(node) {
        if (node.type === 'ForStatement') {
            return this.convertAll(this.forToWhile(node))
        }
        if (node.type === 'ExpressionStatement' && node.expression.type === 'AssignmentExpression') {
            return {...node, expression: this.selfAssignToUpdateAndInplace(node.expression)}
        }

        return node
    }

    ConvertAllCode(code) {
        let newNode = (new Transpile).convertAll(Parser.parse(code, {ranges: false}));
        return escodegen.generate(newNode)
    }
}