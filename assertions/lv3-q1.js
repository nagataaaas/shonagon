json =
    {
        quiz: '二つの引数を受け取り足し算を行う関数を宣言せよ。',
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
                                {type: 'Identifier'},
                            ]
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