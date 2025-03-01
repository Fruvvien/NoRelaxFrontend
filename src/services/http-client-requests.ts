import { error } from "console";
import { enviroment } from "../environments/environment";
import { Drinks } from "../models/drinks";


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
        if(result.token){
            localStorage.setItem('authToken', result.token);

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
 

}