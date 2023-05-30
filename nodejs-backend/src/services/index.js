const users = require("./users/users.service.js");
const cart = require("./cart/cart.service.js");
const productlist = require("./productlist/productlist.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(cart);
  app.configure(productlist);
  // ~cb-add-configure-service-name~
};
