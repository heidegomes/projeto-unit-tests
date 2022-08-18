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
    expect(Array.isArray(productDetails())).toBeTruthy();
  });
  it('Verifica se o retorno da função `productDetails` contém dois itens dentro.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
  });
  it('Verifica se dois itens dentro do array retornado pela função`productDetails` são objetos', () => {
    expect(typeof Object.values(productDetails('Alcool gel', 'Máscara'))).toBe('object');
  }); 
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toBe(productDetails('Alcool gel', 'Máscara')[1]);
  }); 
  it('Verifica se os dois productIds terminam com 123.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toMatch('123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch('123');
  }); 
});
