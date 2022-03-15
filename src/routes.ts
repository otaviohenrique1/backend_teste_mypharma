import { Router } from "express";
import CategoriasController from "./controllers/CategoriasController";
import MarcasController from "./controllers/MarcasController";
import ProdutosController from "./controllers/ProdutosController";
import UsuariosController from "./controllers/UsuariosController";

const router = Router();

router.get('/produtos', ProdutosController.listar);
router.post('/produtos', ProdutosController.cadastro);
router.get('/produtos/uuid', ProdutosController.busca); /* Arrumar */
router.delete('/produtos/uuid', ProdutosController.excluir); /* Arrumar */
router.put('/produtos/uuid', ProdutosController.editar); /* Arrumar */

router.post('/usuarios', UsuariosController.cadastro);
router.post('/usuarios/login', UsuariosController.login); /* Arrumar */
router.post('/usuarios/logout', UsuariosController.logout); /* Arrumar */

router.get('/categorias', CategoriasController.listar);
router.post('/categorias', CategoriasController.cadastro);
router.get('/categorias/uuid', CategoriasController.busca); /* Arrumar */
router.delete('/categorias/uuid', CategoriasController.excluir); /* Arrumar */
router.put('/categorias/uuid', CategoriasController.editar); /* Arrumar */

router.get('/marcas', MarcasController.listar);
router.post('/marcas', MarcasController.cadastro);
router.get('/marcas/uuid', MarcasController.busca); /* Arrumar */
router.delete('/marcas/uuid', MarcasController.excluir); /* Arrumar */
router.put('/marcas/uuid', MarcasController.editar); /* Arrumar */

export default router;