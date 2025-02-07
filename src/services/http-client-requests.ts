import { enviroment } from "../environments/environment";

export class HttpClientRequests {
    
    

    static async fetchData(): Promise<object> {
        const response = await fetch(enviroment.LOCAL_API_URL);
        const result = await response.json();
        return result;
    }

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
        const result = await response.json();
        console.log("Success post!");
        if(result.token){
            localStorage.setItem('authToken', result.token);
        }
        return result
    }
    

    /* static async checkTheToken(){
        const response = await fetch(enviroment.LOCAL_API_URL + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post data');
        }
        const result = await response.json();
        console.log("Success post!");
        return result
    } */
 

}