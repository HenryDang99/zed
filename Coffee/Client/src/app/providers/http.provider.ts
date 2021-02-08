import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";

@Injectable()
export class HttpProvider {
    constructor(private http: HttpClient, 
        @Inject('BASE_URL') private baseUrl){

    }
    get(url){
        return new Promise<any>((resolve, reject) => {
            this.http.get<any>(this.baseUrl + url).toPromise().then(data => {
                if (data){
                    resolve(data);
                }else{
                    reject("No data");
                }
            }, error => {
                reject(error);
            });
        });
    }
    post(url, body){
        return new Promise<any>((resolve, reject) => {
            this.http.post<any>(this.baseUrl + url, body).toPromise().then(data =>{
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
}