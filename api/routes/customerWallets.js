module.exports = app => {
    const controller = app.controllers.customerWallets;
  
    app.route('/api/v1/users')
      .get(controller.listCustomerWallets);
}