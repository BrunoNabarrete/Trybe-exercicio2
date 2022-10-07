const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

sendMarsTemperature = () => {
    setTimeout(() => {
        const tempMarte = getMarsTemperature()
        return console.log(`A temperatura de Marte é: ${tempMarte} celsius!`)
    }, messageDelay());

}
sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo