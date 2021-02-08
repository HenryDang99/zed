(function(controllers){
    orderController = require('./orderController');
    controllers.init = function(app){
        orderController.init(app);
    }
})(module.exports);