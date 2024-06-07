import controller from '../controllers/paymentsControllers';

export default (app) => {
  app.post('/payments/persist', controller.persist);
  app.post('/payments/persist/:id', controller.persist);
  app.post('/payments/destroy', controller.destroy);
  app.get('/payments', controller.get);
  app.get('/payments/:id', controller.get);
};
