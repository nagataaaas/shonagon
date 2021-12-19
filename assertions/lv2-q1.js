json =
    {
        quiz: '用意されたstringの変数a,bを整数に変換し、足し算を行え。',
        assertions:
            [
                {
                    message: 'aが正しく整数に変換されていません',
                    assertion: {
                        all: [{
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'parseInt'
                            },
                            arguments: {
                                type: 'Identifier',
                                name: 'a'
                            }
                        }]
                    }
                },
                {
                    message: 'bが正しく整数に変換されていません',
                    assertion: {
                        all: [{
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'parseInt'
                            },
                            arguments: {
                                type: 'Identifier',
                                name: 'b'
                            }
                        }]
                    }
                },
                {
                    message: 'constで宣言された値には再代入不可能です',
                    assertion: {
                        none: [{
                            oneOf: [{
                                type: 'AssignmentExpression',
                                left: {
                                    type: 'Identifier',
                                    name: 'a'
                                }
                            }, {
                                type: 'AssignmentExpression',
                                left: {
                                    type: 'Identifier',
                                    name: 'b'
                                }
                            }]
                        }]
                    }
                },
                {
                    message: '足し算が行われていません',
                    assertion: {
                        oneOf: [
                            {
                                type: 'BinaryExpression',
                                operator: '+',
                            },
                            {
                                type: 'AssignmentExpression',
                                operator: '+='
                            },
                        ]
                    }
                },
                {
                    message: '数字に変換してから足し算をする必要があります',
                    assertion: {
                        none: [
                            {
                                type: 'BinaryExpression',
                                operator: '+',
                                left: {
                                    type: 'Identifier',
                                    name: 'a'
                                },
                                right: {
                                    type: 'Identifier',
                                    name: 'b'
                                }
                            },
                            {
                                type: 'BinaryExpression',
                                operator: '+',
                                left: {
                                    type: 'Identifier',
                                    name: 'b'
                                },
                                right: {
                                    type: 'Identifier',
                                    name: 'a'
                                }
                            },
                        ]
                    }
                },
            ]
    }