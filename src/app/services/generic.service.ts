import { Injectable } from "@angular/core";

@Injectable()
export class GenericClass {

  constructor() {

  }

  showSomeText(x: string = 'test') {
    console.log(x);
  }

}

export class IPersonneService {
  protected gc: GenericClass | undefined = undefined;
  constructor(private genericClass: GenericClass | undefined) {

  }

}

export class PersonneService extends IPersonneService {
  protected gxc: GenericClass | undefined = undefined;

  constructor() {
    super()
    
  }

  getPersonnes() {
    this.genericClass.showSomeText()
  }
}