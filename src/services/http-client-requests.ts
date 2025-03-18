import { error } from "console";
import { enviroment } from "../environments/environment";
import { Drinks } from "../models/drinks";
import { Icart } from "../models/stateCart";


interface IauthDatas{
    id: number
    userId:number,
    token:string,
    createdAt: string,
   
}

export class HttpClientRequests {
    static async postData(data: object, endPoint: string) {
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
           
            return false;
           
        }
        const result: IauthDatas = await response.json();
        console.log("Success post!");
        if(result.token && result.userId){
            localStorage.setItem('authToken', result.token);
            localStorage.setItem('userId', result.userId.toString());
        }
        return result
    }

    static async getDrinks(endPoint: string){
        const response  = await fetch(enviroment.LOCAL_API_URL + endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if(!response.ok){
            console.log(new Error(response+""));
        }
        const result: Drinks[] = await response.json();
        console.log("Succesful get request");
        
        return result;
    }

    static async postOrder(endPoint: string,userId: string, order: Icart[], reservationId: number, fullPrice: number){
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            body: JSON.stringify({ userId, order,reservationId,fullPrice})
        });
        if(!response.ok){
            console.log(new Error(JSON.stringify(response)));
        }
        const result = response.json();
        console.log(result);
        
        return result; 
        
    }
 

}