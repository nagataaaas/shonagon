json =
    {
        quiz: '用意されたstringの変数a,bを整数に変換し、足し算を行え。',
        assertions:
            [
                {
                    onerror: 'aが正しく整数に変換されていません',
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
                },
                {
                    onerror: 'bが正しく整数に変換されていません',
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
                },
                {
                    onerror: 'constで宣言された値には再代入不可能です',
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
                },
                {
                    onerror: '足し算が行われていません',
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
                },
                {
                    onerror: '数字に変換してから足し算をする必要があります',
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
                },
            ]
    }