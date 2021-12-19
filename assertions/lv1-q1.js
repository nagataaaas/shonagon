json =
    {
        quiz: '変数aを値100で初期化し、コンソールに出力せよ。また、変数aに50を再代入し、コンソールに出力せよ。',
        assertions:
            [
                {
                    onerror: 'aが正しく宣言されていません',
                    all: [{
                        type: 'VariableDeclaration',
                        kind: {
                            allow: ['let', 'var', 'const']
                        }
                    }]
                },
                {
                    onerror: 'constで宣言された値は再代入不可能です',
                    none: [
                        {
                            type: 'VariableDeclaration',
                            kind: {
                                allow: ['const']
                            }
                        }
                    ]
                },
                {
                    onerror: 'aの値が正しく代入されていません',
                    all: [{
                        oneOf: [
                            {
                                type: 'VariableDeclarator',
                                id: {
                                    type: 'Identifier',
                                    name: 'a'
                                },
                                init: {
                                    type: 'Literal',
                                    value: 100
                                }
                            },
                            {
                                type: 'AssignmentExpression',
                                left: {
                                    type: 'Identifier',
                                    name: 'a'
                                },
                                operator: '=',
                                right: {
                                    type: 'Literal',
                                    value: 100
                                }
                            },
                        ],
                        all: [
                            {
                                type: 'AssignmentExpression',
                                left: {
                                    type: 'Identifier',
                                    name: 'a'
                                },
                                operator: '=',
                                right: {
                                    type: 'Literal',
                                    value: 50
                                }
                            },
                        ]
                    }]
                },
                {
                    onerror: '正しく出力されていません',
                    all: [
                        {
                            type: 'CallExpression',
                            callee: {
                                type: 'MemberExpression',
                                object: {
                                    type: 'Identifier',
                                    name: 'console'
                                },
                                property: {
                                    type: 'Identifier',
                                    name: 'log'
                                }
                            },
                            arguments: {
                                type: 'Identifier',
                                name: 'a'
                            }
                        }
                    ]
                }
            ]
    }