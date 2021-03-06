import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-list-pagination',
  templateUrl: './search-list-pagination.component.html',
  styleUrls: ['./search-list-pagination.component.scss']
})
export class SearchListPaginationComponent implements OnInit {

  @Input()
  total: number = 0;

  @Input()
  page: number = 1;

  @Output()
  goTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  totalPages() {
    return Math.ceil(this.total / 10);
  }

  pagesRange() {
    return this.range(1, this.totalPages() + 1);
  }

  prevPage() {
    return Math.max(1, this.page - 1);
  }

  nextPage() {
    return Math.min(this.totalPages(), this.page + 1);
  }

  pageClicked(page: number) {
    this.goTo.next(page);
  }

  range(start, stop, step=1){
    if (!stop) { start=0;stop=start; }
    return Array.from(new Array(Number((stop-start)/step)), (x,i) => start+ i*step)
  }

}
