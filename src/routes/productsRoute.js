import controller from '../controllers/productsControllers';

export default (app) => {
  app.post('/products/persist', controller.persist);
  app.post('/products/persist/:id', controller.persist);
  app.post('/products/destroy', controller.destroy);
  app.get('/products', controller.get);
  app.get('/products/:id', controller.get);
};
