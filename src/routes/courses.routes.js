const { Router } = require('express');
const { courseController } = require('../controllers');

const router = Router();

// Atualizar a rota para ela aceitar queries para decidir se serão incluídos os professores e os alunos
router.get('/', courseController.getAll);

// Atualizar a rota para ela aceitar queries para decidir se serão incluídos os professores e os alunos
router.get('/:id', courseController.getById);

module.exports = router;
