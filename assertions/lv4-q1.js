json =
    {
        quiz: '一つの引数を受け取り、その値が奇数なら\"odd\"という文字列を返し、偶数なら\"even\"という文字列を返す関数を作成せよ。',
        assertions:
            [
                {
                    onerror: '正しく関数が宣言されていません',
                    all: [{
                        type: 'FunctionDeclaration',
                    }]
                },
                {
                    onerror: '関数の引数が正しく設定されていません',
                    all: [{
                        type: 'FunctionDeclaration',
                        params: [
                            {type: 'Identifier'},
                        ]
                    }]
                },
                {
                    onerror: '条件分岐が行われていません',
                    all: [
                        {
                            type: 'IfStatement'
                        }
                    ]
                },
                {
                    onerror: '判定条件に%が用いられていません',
                    all: [
                        {
                            type: 'BinaryExpression',
                            operator: '%'
                        }
                    ]
                },
                {
                    onerror: '正しい文字列が使われていません',
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
                {
                    onerror: '判定条件の値が誤っています',
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
                {
                    onerror: '関数内でreturn文が使われていません',
                    all: [
                        {
                            type: 'ReturnStatement'
                        }
                    ]
                },
                {
                    onerror: '関数から値が返却されていません',
                    none: [
                        {
                            type: 'ReturnStatement',
                            argument: null
                        }
                    ]
                },
            ]
    }