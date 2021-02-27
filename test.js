// importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js');

// comienza tu primera prueba
test('from 150 dollars to equal 15987.5', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromDollarToYen(150);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(15987.5);
});
// comienza tu primera prueba
test('from 150 dollars to equal 180', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromEuroToDollar(150);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(180);
});

// comienza tu primera prueba
test('from 1279 yan to equal 8', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromYanToPound(1279);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(8);
});