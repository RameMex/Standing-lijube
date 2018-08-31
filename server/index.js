const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//app.use(cors({origin: 'https://standing-lijube.firebaseapp.com'}));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
// Routes
app.use('/ api / employees', require('./routes/employee.routes'));
app.use('/ api / equipos', require('./routes/equipos.routes'));
app.use('/ api / partidos', require('./routes/partidos.routes'));
app.use('/ api / posiciones', require('./routes/posiciones.routes'));
app.use('/ api / trabajadores', require('./routes/trabajadores.routes'));


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
