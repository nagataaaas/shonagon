json =
    {
        title: '足し算を行う関数',
        description: '二つの引数を受け取り足し算を行う関数を宣言せよ。',
        tags: ['関数定義', '算術理解'],
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
                                {type: 'Identifier'},
                            ]
                        }]
                    },
                    tags: ['関数定義']
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
                    },
                    tags: ['算術理解']
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