import { Injectable } from "@angular/core";

@Injectable()
export class GenericClass {

  constructor() {

  }

  showSomeText(x: string = 'test') {
    console.log(x);
  }

}
