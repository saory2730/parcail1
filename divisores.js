function sumarDivisores(numero) {
    let suma = 0;
    
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma;
}

function sonNumerosAmigos(numero1, numero2) {
    let sumaDivisoresNumero1 = sumarDivisores(numero1);
    
    if (sumaDivisoresNumero1 !== numero2) {
        return "NO son números amigos.";
    }
    
    let sumaDivisoresNumero2 = sumarDivisores(numero2);
    
    return `SÍ son números amigos, ya que la suma de los divisores de ${numero1} es igual a ${numero2} y viceversa.`;
}

let numero1 = parseInt(prompt("Ingrese el primer número: "));
let numero2 = parseInt(prompt("Ingrese el segundo número: "));

let mensaje = sonNumerosAmigos(numero1, numero2);
alert(mensaje);
  



  