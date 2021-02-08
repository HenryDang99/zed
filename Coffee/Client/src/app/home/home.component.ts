import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderProvider } from '../providers';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    columns:any[] = [];
    orders:any[] = [];
    constructor(private router: Router,
                private orderProvider: OrderProvider){
    
    }
    ngOnInit(){
        this.getSchema();
    }
    toggleDetail(order){
        this.orders.forEach(o => {
            o.showDetail = false;
        });
        order.showDetail = true;
    }
    getSchema(){
        this.orderProvider.getSchema().then((data) => {
            this.columns = data || [];
            this.getOrders();
        }, error => {

        });
    }
    
    waitTime(order){
        if (order.waitTime){
            let d = new Date(order.waitTime * 1000);
            d.setHours(d.getUTCHours());
            return d;
        }
        return null;
    }
    onChangeStatus(order, action){
        order.status = action;
        if ( order.status === 'Arrived'){
            order.waitTime = 0;
            order.interval =  setInterval(
                function(){ order.waitTime += 10; }, 
                10000
            );
        }else if (order.status === 'Ready'){
            clearInterval(order.interval);
        }
        this.updateOrder(order);
    }
    enableAction(order, action){
        return order.status === action;
    }
    getOrders(){
        this.orderProvider.getOrders().then((data) => {
            this.orders = data || [];
            this.orders.forEach(o => {
                o.quantity = 0;
                o.cost = 0.0;
                o.details.forEach(d => {
                    o.quantity++;
                    o.cost += parseFloat(d.cost);
                });
            });
        }, error => {
            console.log(error);
        });
    }
    updateOrder(order){
        this.orderProvider.update(order).then((data) => {
            if (data == 'OK'){

            }else{
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
}