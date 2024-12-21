import { Injectable } from "@angular/core";
import { ILogger } from "../types/logger.type";
@Injectable({
providedIn: "root"
})
export class LoggerService implements ILogger {
     prefix = "root"
    log(message: string) {
        console.log("from Logger Service" , this.prefix, message)
    };

}