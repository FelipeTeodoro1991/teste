const {sum, sumThree, multiplica, somaMultiplica} = require('./sum') 
//1 (Obrigatório) - Crie um teste para garantir que o Jest está funcionando normalmente em seu projeto.

it('a soma de 1 e 2 tem que ser 3', () => {
expect(sum(1,2)).toBe(3);
});

//2 (Obrigatório) - Crie uma função que some três números, logo após crie um teste 
//utilizando Jest para garantir que a soma desses valores está correta.

it('soma de 1,2,3 numeros tem que ser 6', ( ) => {
   expect(sumThree(1,2,3)).toBe(6);
})

//3 (Obrigatório) - Crie uma função que multiplica dois números, logo após crie um
//teste Utilizando o Jest para garantir que a multiplicação desses valores está correta.
it ('multiplicação de 2,3 tem que ser 6', ( )=> {
   expect(multiplica(5,5)).toBe(25)
})

// 4 (Obrigatório) - Crie uma função que recebe três parâmetros, essa função deve
// retornar a soma dos dois primeiros parâmetros e multiplicar pelo terceiro parâmetro,
// por fim crie um teste utilizando o Jest para garantir o resultado está correto.
it ('a soma de 2 e 3 multiplicado por 2 deve ser 10', ( ) => {
expect(somaMultiplica(2,3,2)).toBe(10)
})