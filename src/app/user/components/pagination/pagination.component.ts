import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() max: number = 10;
  @Input() current: number = 1;
  @Input() perpage: number = 2;
  pagesneeded: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.pagesneeded = this.max / this.current;
  }

  ngOnChanges(){
    this.pagesneeded = this.max / this.current;
  }

}
