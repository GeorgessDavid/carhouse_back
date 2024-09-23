import cors from 'cors';
import express from 'express';
import methodOverride from 'method-override';
import index from './src/endpoint/index.routes.js'

const app = express();
const port = process.env.PORT || 3007;


// Configuración de CORS para peticiones HTTP
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use(cors({
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type']
}))


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));


// Configuración de rutas.
app.use('/', index);

// Configuración de escucha del servidor.
app.listen(port, () => {
    console.log('\nServer ON')
    console.log(`\nhttp://localhost:${port}/`)
})