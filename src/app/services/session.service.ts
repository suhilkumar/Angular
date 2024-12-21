import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  getItems(key:string): string {
    const item =  localStorage.getItem(key) as string;
    return item;
  }
  setItems(key:string, value: any) :void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearItems():void {
    localStorage.clear()
  }
  removeItem(key: string): void {
    localStorage.removeItem(key)
  }
}
