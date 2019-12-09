/*const http = require('http'); // Crea el servidor

const server= http.createServer((req,res) => {
    res.status=200;
    res.setHeader('Content-Type','text/plain');
    res.end('hello world');

});

server.listen(3000,() => {  // escucha al servidor
    console.log('Server on port 3000')


});*/

// 1) Escribo en terminal: node index.js para ejecutar el archivo
// 2) luego, abro una pagina y escribo: localhost:3000

// 3) creo un archivo json con: npm --y

// 4) instalo Express con: npm i express    --> no olvidar que "npm i..." sirve para instalar cuaquier cosa.
// Cada vez que armo un proyecto debo instalar todo (json, express, etc).

//----------------------------- Ahora viene lo mismo del código de arriba pero con EXPRESS -------------------

const express = require('express'); // 1) Importo express y lo guardo en una constante. Esto ES requerir un módulo.

const morgan= require('morgan');

const app= express(); // 2) Ejecuto express y me devuelve un OBJETO. "const app" ES el servidor.

/*function logger(req,res,next){               // Es una función y es un middleware, sirve para validar datos antes de que lleguen
    console.log('Requerimiento recivido');   // a las rutas
    next();


}*/

app.use(express.json());  // IMPORTANTE: sirve para que Express pueda leer formato json u objetos de JS.

//app.use(logger); //

app.use(morgan('dev')); // Es un middleware que sirve para ver las rutas de donde me envían info

app.get('/', (req,res) => { // 5) le digo que el sevidor me responda "hello world" y le doy una ruta con '/'
    res.send('Devulve un get');


}); 

app.post('/about', (req,res) => { 
    res.send('Devuelve un post');

}); 


app.put('/contact', (req,res) => { 
    res.send('Devuelve un put');  

}); 

app.delete('/test', (req,res) => { 
    res.send('<h1> Devuelve un deleate </h1>');  // IMPORTANTE: En la respuesta guardé un <h1>

}); 

app.post('/user/:id', (req,res) => { // Por primera vez creo una RUTA DINÁMICA, es decir, se crea a medida q cambia el id.
                                     // Ej: user/123 , user/546, etc.
     
    console.log(req.body);           // Sirve para compatibilizar el json.
    console.log(req.params);         // sirve para mostrar el dato del json, en este caso, el id.

    res.send('Devuelve un post');

}); 


app.listen(5000, () => {   // 3) con el método listen hago que el servidor "escuche" mis peticiones.
    console.log('server on port 5000');  // Ojo con el punto y coma.

});

// 4) Una vez escrito esto, lo ejecuto con node index.js

// en la página me va a mostrar "cannot GET /" y esto es porque aun le falta una(s) ruta(s).

// 5) Ruteo.


// IMPORTANTE: para no andar abriendo y cerrando la termial, instalo Nodemon que me permite actualizar el código en realtime.
// npm i nodemon -D para instalarlo solamente en ESTE proyecto. El -D es para instalar localmente.
// Luego, ejecuto nodemon con: npx nodemon index.js


/*app.get('/about', (req,res) => { 
    res.send('About me');


}); */

// Esta es la estructura básica de una relación servidor-web;
// el app.get puede cambiar a app.post, app.put, app.delete, formando asi el REST.


// IMPORTANTÍSIMO: utilizo POSTMAN para verificar los ruteos que NO son get.

// le hice un cambio







