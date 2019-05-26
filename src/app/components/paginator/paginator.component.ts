import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
  pageSizeOptions: [];

  @Input()
  config: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pageChange(newPage: number) {
    this.router.navigate(['/page/', newPage]);
  }

  changePageItemCount(selectedItem) {
    this.config.itemsPerPage = selectedItem.value;
  }

}
