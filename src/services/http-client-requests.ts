import { enviroment } from "../environments/environment";
import { Icart } from "../models/stateCart";
import { Products } from "../models/products";
import { IReservation } from "../models/reservation";
import { IGetUser } from "../models/IgetUser";


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

    static async getProducts(endPoint: string, productGroupName: string){
        const response  = await fetch(enviroment.LOCAL_API_URL + endPoint+`/${productGroupName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        });
        if(!response.ok){
            console.log(new Error(response+""));
        }
        const result: Products[] = await response.json();
        
        console.log("Succesful get request");
        
        return result;
    }

    static async getReservation(endPoint: string){
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        });
        const result: IReservation[] = await response.json();
        if(!response.ok){
            console.log(new Error(response+""));
        }

        return result

    }
    static async getReservationWithId(endPoint: string, userId: string){
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint + `/${userId}`, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            }
        });
        const result: IReservation[] = await response.json();
        console.log(result);
        
        if(!response.ok){
            console.log(new Error(response+""));
        }

        return result

    }

    static async deleteReservation(endPoint: string,reserveId:string, userId: string){
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint + `/${reserveId}?userId=${userId}`,
            {
                method: "DELETE",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            }
            
        )

        const result = response.json()
        console.log(result);
        
        if(!response.ok){
            return response
        }
        return result;
    }
    static async deleteProfile(endPoint: string,userId: string){
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint + `/${userId}`,
            {
                method: "PATCH",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                },
                body: JSON.stringify({accountIsActive: false})
            }
            
        )

        const result: IGetUser = await response.json()
        console.log(result);
        
        if(!response.ok){
            console.log(response);
        }
        return result;
    }

    static async postReservation(endPoint: string, data: IReservation){

        const response = await fetch(enviroment.LOCAL_API_URL + endPoint,
            {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                },
                body: JSON.stringify(data)

            }
            
        )

        const result = response.json()
        if(!response.ok){
            return response
        }
        return result;
    }

    static async getUser(endPoint: string, id: string | undefined){
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint + `/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken')
                }
            });

            const result: IGetUser = await response.json();
            if(!response.ok){
                localStorage.removeItem("authToken");
                localStorage.removeItem("userId");
                window.location.reload();
            }

            return result
    }

    static async postOrder(endPoint: string,userId: string, order: Icart[], reservationId: number | null, fullPrice: number){
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
        const result = await response.json();
        console.log(result);
        
        return result; 
        
    }
 

}