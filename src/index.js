const app = require('./app');

async function main(){
    await app.listen(3000);
    console.log("Aplicación de Node hecha a las 4:05 AM :D")


}

main();