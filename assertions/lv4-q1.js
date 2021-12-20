json =
    {
        title: '条件分岐1',
        description: '一つの引数を受け取り、その値が奇数なら"odd"という文字列を返し、偶数なら"even"という文字列を返す関数を作成せよ。',
        tags: ['関数定義', 'if文'],
        assertions:
            [
                {
                    message: '正しく関数が宣言されていません',
                    assertion: {
                        all: [{
                            type: 'FunctionDeclaration',
                        }]
                    },
                    tags: ['関数定義']
                },
                {
                    message: '関数の引数が正しく設定されていません',
                    assertion: {
                        all: [{
                            type: 'FunctionDeclaration',
                            params: [
                                {type: 'Identifier'},
                            ]
                        }]
                    },
                    tags: ['関数定義', '関数からの値の返却']
                },
                {
                    message: '条件分岐が行われていません',
                    assertion: {
                        all: [
                            {
                                type: 'IfStatement'
                            }
                        ]
                    },
                    tags: ['if文']
                },
                {
                    message: '判定条件に%が用いられていません',
                    assertion: {
                        all: [
                            {
                                type: 'BinaryExpression',
                                operator: '%'
                            }
                        ]
                    },
                    tag: ['算術理解', 'if文']
                },
                {
                    message: '正しい文字列が使われていません',
                    assertion: {
                        all: [
                            {
                                type: 'Literal',
                                value: 'even'
                            },
                            {
                                type: 'Literal',
                                value: 'odd'
                            }
                        ]
                    },
                    tag: []
                },
                {
                    message: '判定条件の値が誤っています',
                    assertion: {
                        all: [
                            {
                                none: [{
                                    all: [
                                        {
                                            type: 'BinaryExpression',
                                            operator: '%',
                                            left: {
                                                type: 'Identifier'
                                            },
                                            right: {
                                                type: 'Literal',
                                                value: 2
                                            }
                                        },
                                        {
                                            none: [
                                                {
                                                    type: 'BinaryExpression',
                                                    operator: '%'
                                                }
                                            ]
                                        }
                                    ]
                                }]
                            },
                            {
                                oneOf: [
                                    {
                                        type: 'BinaryExpression',
                                        operator: '%',
                                        left: {
                                            type: 'Identifier'
                                        },
                                        right: {
                                            type: 'Literal',
                                            value: 2
                                        }
                                    },
                                    {
                                        none: [
                                            {
                                                type: 'BinaryExpression',
                                                operator: '%'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    tag: ['算術理解', 'if文']

                },
                {
                    message: '関数内でreturn文が使われていません',
                    assertion: {
                        all: [
                            {
                                type: 'ReturnStatement'
                            }
                        ]
                    },
                    tags: ['関数定義', '関数からの値の返却']
                },
                {
                    message: '関数から値が返却されていません',
                    assertion: {
                        none: [
                            {
                                type: 'ReturnStatement',
                                argument: null
                            }
                        ]
                    },
                    tags: ['関数定義', '関数からの値の返却']
                },
            ]
    }