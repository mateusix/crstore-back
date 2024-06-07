import controller from '../controllers/ordersProductControllers';

export default (app) => {
  app.post('/ordersProducts/persist', controller.persist);
  app.post('/ordersProducts/persist/:id', controller.persist);
  app.post('/ordersProducts/destroy', controller.destroy);
  app.get('/ordersProducts', controller.get);
  app.get('/ordersProducts/:id', controller.get);
};
