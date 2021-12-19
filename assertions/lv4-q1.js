json =
    {
        quiz: '一つの引数を受け取り、その値が奇数なら\"odd\"という文字列を返し、偶数なら\"even\"という文字列を返す関数を作成せよ。',
        assertions:
            [
                {
                    message: '正しく関数が宣言されていません',
                    assertion: {
                        all: [{
                            type: 'FunctionDeclaration',
                        }]
                    }
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
                    }
                },
                {
                    message: '条件分岐が行われていません',
                    assertion: {
                        all: [
                            {
                                type: 'IfStatement'
                            }
                        ]
                    }
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
                    }
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
                    }
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
                    }

                },
                {
                    message: '関数内でreturn文が使われていません',
                    assertion: {
                        all: [
                            {
                                type: 'ReturnStatement'
                            }
                        ]
                    }
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
                    }
                },
            ]
    }