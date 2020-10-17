import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);
    

// MVC - MODEL(TABELAS) - VIEWS(VISUALIZAÇÂO) - CONROLLERS(LOGICA DAS ROTAS)
// padrões de metodos controller é ter index, show, create, update, delete

// Rota = conjunto
// Recurso = usuario
// Metodos HTTP = GET, POST, PUT, DELETE
// GET => BUSCAR INFORMACAO
// POST => CRIANDO INFORMACAO NOVA
// PUT => EDITAR INFORMACAO
// DELETE => DELETAR UM INFORMACAO

// Parametros: 3 TIPOS DE PARAMETROS
// QUERY PARAMS: http://localhost:3333/users?search=joao
// ROUTE PARAMS: http://localhost:3333/users/1 (identificar um recurso para metodos PUT E DELETE)
// BODY: http://localhost:3333/users/1 (usado para enviar parametros que não cabem no query e route params)

// Driver nativo, Query builder, ORM
// driver nativo é o banco de dados instalado 'Select * From users'
// a principal vantagem de abstrair a conexao do BD é poder trocar de tipo de dados sem alterar o codigo
// knex.js escrever a query com js -> knex('user).select('*').where('name','diego')
// ORM (object relational object) -> cada tabela de dados é identificada por uma clase no JS -> ou seja, para um consulta com 3 registros será retornado 3 objetos


//migrations é o controle versionamento de alterações do BD 

export default routes;