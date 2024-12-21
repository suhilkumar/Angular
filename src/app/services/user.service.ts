import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    sayHi(){
        console.log("hi I am User Service without Injectable")
    }
    print(val: string){
        console.log("this is from User Service", val)
    }
}

