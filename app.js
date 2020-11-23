//LA IDEA DE NODE ES EMULAR, LEVANTAR UN SERVIDORR EN LA MISMA COMPU(LOCAL), SIN NECESIDAR DE ESTAR BUSCANDO OTRO SERVIDOR WEB

const http = require('http'); //modulo nativo de node : trae muchos metodos 

//console.log(http);

//utlizamos el metodo(y es llamado metodo porque es una de las propiedades del objeto o modulo del http) que prooviene del modulo http: createServer.. 1°nos permite levantar un servidor,recibe un callback(1°request,2°response)// luego le alegramos otro metodo   listen() : coloca en escucha al servidor creado,


// 
http.createServer(function(req,res){
    //Va a quedar SOLO EN ESPERA EN EL NAVEGADOR, es como que te sigue esuchando, si no tiene codigo dentro


    //-------------------------------------------------------
    // levantando un servidor en js, 
    //1°configurar definir  las cabeceras
    // write(representaelestadoEnNumero(200= ok),objetoliteral: content-type: )
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'}); // 1° texto plano sin formato html,e sun texto normal

//2°trabajamos con una propiedad del objeto request
    switch(req.url){
        case '/':
            res.end('Bienvenido a nuetsro sitio');break;
        case '/productos' : 
        res.end('Nuestros Porductos');break;
        case '/contacto':
            res.end('Dejanos tu mensaje');break;
        default : 
        res.end('No esta en disponile - 404');break;
        }




    //2°practicaprimera sin el switch: pero si solo hay esto al entrar en cualquier pagina por url me aparecee sto siempre, entonces x es  se modica y se anula /finaliza la escucha o el cargado del servidor, esto termina de crear el servidor
       // res.end('Mi primer sServidor en node');
    
}).listen(3030,'localhost',()=>console.log('El Sservidor funcionando en el puerto 3030')); //se le puede colocar cualquier numero dentro de listen (va puerto cualquiera/inventado)


//¡¡¡¡createserver y listen te levantan el servidor!!