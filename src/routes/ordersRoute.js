import controller from '../controllers/ordersControllers';

export default (app) => {
  app.post('/orders/persist', controller.persist);
  app.post('/orders/persist/:id', controller.persist);
  app.post('/orders/destroy', controller.destroy);
  app.get('/orders', controller.get);
  app.get('/orders/:id', controller.get);
};
