import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';

interface Personne {
  name: string | undefined
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  get title(): string {
    return this._title
  }

  set title(title: string) {
    this._title = ' xxx ' + title
  }

  @Input()
  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = ' xxx ' + name
  }

  @Input()
  get age(): number {
    return this._age
  }

  set age(age: number) {
    this._age = age
  }

  public personData$: Observable<any>; // Use type instead

  private _title!: string;
  private _name!: string;
  private _age!: number;
  
  constructor(private genericService: GenericService) {
    this.personData$ = this.getData$();
   }

  ngOnInit(): void {
    this.getData(); 
  }

  /**
   * Appel service pour récuperer les données de NestJS 
   * Lien: http://localhost:3000/
   */
  getData() {
    const x$ = this.genericService.getData();
    // Modifier le titre
    x$.subscribe({
      next: (s: Personne) => {
        this.title = s.name ?? ''
      }
    })
  }

  getData$(): Observable<any> {
    return this.genericService.getData();
  }

}
