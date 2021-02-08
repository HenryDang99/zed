let ORDERS = [
  {id: 1, orderNo: '765823', orderDate: '2021-02-07 09:20:30', payment: 'Paid', status:'Order',
      customer: {
          firstName: 'William',
          lastName: 'Milk'
      },
      details: [
          {name: 'Capucino', cost: '3.5', size: 'Medium', note: '1 sugar'},
          {name: 'Latte', cost: '2.5', size: 'Regular', note: 'no sugar'},
  ]},
  {id: 2, orderNo: '45657', orderDate: '2021-02-07 10:20:30', payment: '', status:'Arrived',
      customer: {
          firstName: 'Julia',
          lastName: 'Robert'
      },
      details: [
          {name: 'Short Black', cost: '5.5', size: 'Small', note: '1 sugar'},
  ]},
  {id: 3, orderNo: '43345', orderDate: '2021-02-07 09:25:30', name: 'Tim', payment: 'Paid', status:'Preparing',
      customer: {
          firstName: 'Tim',
          lastName: 'Burton'
      },
      details: [
          {name: 'Vocalno', cost: '7.5', size: 'Large', note: 'with cream'}
  ]},
  {id: 4, orderNo: '54645', orderDate: '2021-02-07 09:45:30', name: 'Cherry', payment: '', status:'Arrived',
      customer: {
          firstName: 'Cherry',
          lastName: 'Black'
      },
      details: [
          {name: 'Americano', cost: '5.0', size: 'Regular', note: '1 sugar, white'},
          {name: 'Ice Mocha', cost: '6.5', size: 'Large', note: 'No sugar'},
  ]},
];
(function(controller){
    controller.init = function(app) {
        app.get('/api/order', function(req, res){
            res.send(ORDERS.filter(n => n.status !== 'Deliver'));
        });
        app.post('/api/order', (req, res) =>{
          order = ORDERS.find(n => n.id == req.body.id);
          if (order){
            order.status = req.body.status;
            console.log(order);
          }
          res.send('OK');
      });
    };
})(module.exports);