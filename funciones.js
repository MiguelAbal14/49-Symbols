const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");


const persona = {
    [NOMBRE]: "Miguel",
    [SALUDAR]: function () {
        console.log("saludar");
    },
    edad: 27
}

console.log(persona);

persona.pais = "Argentina";

for (const key in persona) {
    if (Object.hasOwnProperty.call(persona, key)) {
        const element = persona[key];
        "saludar"
    }
}