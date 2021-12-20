json =
    {
        title: '変数を宣言する',
        description: '変数aを値100で初期化し、コンソールに出力せよ。また、変数aに50を再代入し、コンソールに出力せよ。',
        tags: ['変数'],
        assertions:
            [
                {
                    message: 'aが正しく宣言されていません',
                    assertion: {
                        all: [{
                            type: 'VariableDeclaration',
                            kind: {
                                allow: ['let', 'var', 'const']
                            }
                        }]
                    },
                    tags: ['変数']
                },
                {
                    message: 'constで宣言された値は再代入不可能です',
                    assertion: {
                        none: [
                            {
                                type: 'VariableDeclaration',
                                kind: {
                                    allow: ['const']
                                }
                            }
                        ]
                    },
                    tags: ['変数', '定数']
                },
                {
                    message: 'aの値が正しく代入されていません',
                    assertion: {
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
                    tags: ['変数']
                },
                {
                    message: '正しく出力されていません',
                    assertion: {
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
                    },
                    tags: ['関数呼び出し']
                }
            ]
    }