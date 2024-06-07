import controller from '../controllers/cuponsController';

export default (app) => {
  app.post('/cupons/persist', controller.persist);
  app.post('/cupons/persist/:id', controller.persist);
  app.post('/cupons/destroy', controller.destroy);
  app.get('/cupons', controller.get);
  app.get('/cupons/:id', controller.get);
};
