const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
    it('Verifica se a função `productDetails` retorna um array.', () => {
      // expect(typeof productDetails).toBe('array');
    // console.log(Array.isArray(productDetails));
      expect(Array.isArray(productDetails)).toBeTruthy();
  });
  it.('Verifica se o retorno da função `productDetails` contém dois itens dentro.', () => {
    console.log(Object.keys(productDetails('Alcool gel', 'Máscara').length));
    expect(Object.keys(productDetails('Alcool gel', 'Máscara').length)).toBe(2);
  });
  it.('Verifica se dois itens dentro do array retornado pela função`productDetails` são objetos', () => {
    
  });
    

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
});
