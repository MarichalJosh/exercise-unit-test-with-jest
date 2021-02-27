// esta es mi función que suma dos números
//const sum = (a,b) => {return a + b}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromEuroToDollar, fromYanToPound, fromDollarToYen };

//ctrl k c( covierte todo en cometario) o k u (Lo devuelve a estado normal)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (dollar){
    var yenes = (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];    
    return yenes;
}
function fromEuroToDollar (euro){
    var dollars = (euro * oneEuroIs ["USD"])
    return dollars;
}
function fromYanToPound(yen){
    let euro = (yen / oneEuroIs.JPY); //conviertiendo yen a euros
    let pound = euro * oneEuroIs.GBP;
    return pound
}
console.log(fromYanToPound(1279))
console.log(fromDollarToYen(150))
console.log(fromEuroToDollar(150))
