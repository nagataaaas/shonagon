json =
    {
        quiz: '二つの引数を受け取り足し算を行う関数を宣言せよ。',
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
                            {type: 'Identifier'},
                        ]
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