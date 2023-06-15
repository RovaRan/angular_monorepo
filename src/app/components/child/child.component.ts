import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() // title: string = '';
  get title(): string {
    return this._title
  }

  set title(title: string) {
    this._title = ' xxx ' + title
  }

  private _title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
