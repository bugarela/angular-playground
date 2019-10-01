import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoas-api-table',
  templateUrl: './pessoas-api-table.component.html',
  styleUrls: ['./pessoas-api-table.component.scss']
})
export class PessoasApiTableComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['name', 'height', 'mass'];

  constructor(
    protected $httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.initializeDataSource();
  }

  initializeDataSource(): void {
    this.$httpClient.request('GET', 'https://swapi.co/api/people').subscribe((resp: any) => {
      console.log(resp);
      this.dataSource = resp.results;
    });
  }

}
