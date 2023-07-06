import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GenericService { 

  constructor(private httpClient: HttpClient) {

  }
  showSomeText(x: string = 'test') {
    console.log(x);
  }

  getData(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/');
  }
  
  /**
   * debounce() prend une fonction et un laps de temps
   * La fonction ne sera executé qu'après ce delais
   */
  debounce(fun: Function, delay: number) {
    let timeout: any;
    return function(...args: any[]) {
      const context = {};
      clearTimeout(timeout);
      timeout = setTimeout(() => fun.apply(context, args), delay);
    }
  }
}