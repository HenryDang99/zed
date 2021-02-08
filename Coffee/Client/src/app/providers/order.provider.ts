import { Injectable } from "@angular/core";
import { HttpProvider } from "./http.provider";
import { of } from "rxjs";

@Injectable()
export class OrderProvider {
    path = '/Order';
    constructor(private http: HttpProvider){

    }
    getOrders(){
        return this.http.get(this.path);
        //return of(ORDERS).toPromise();
    }
    update(order){
        return this.http.post(this.path, order);
    }
    getOrderDetail(id){
        return this.http.get(this.path + '/' + id);
    }
    getSchema(){
        return of(SCHEMA).toPromise();
    }
}
const SCHEMA = [
    {field: 'orderNo', header: 'Order Number'},
    {field: 'orderDate', header: 'Order Time'},
    {field: 'waitTime', header: 'Wait Time'},
    {field: 'name', header: 'Name'},
    {field: 'quantity', header: 'Quantity'},
    {field: 'cost', header: 'Cost'},
    {field: 'payment', header: 'Payment'},
    {field: 'status', header: 'Status'},
];

const ORDERS = [
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
]