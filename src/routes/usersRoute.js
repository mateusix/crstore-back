import controller from '../controllers/usersControllers';

export default (app) => {
  app.post('/users/persist', controller.persist);
  app.post('/users/persist/:id', controller.persist);
  app.post('/users/destroy', controller.destroy);
  app.get('/users', controller.get);
  app.get('/users/:id', controller.get);
};
