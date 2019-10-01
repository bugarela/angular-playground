import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoas-page',
  templateUrl: './pessoas-page.component.html',
  styleUrls: ['./pessoas-page.component.scss']
})
export class PessoasPageComponent implements OnInit {
  id: number;

  constructor(
    protected $activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getIdFromParam();
  }

  getIdFromParam(): void {
    this.$activatedRoute.params.subscribe(resp => {
      this.id = resp.idPessoa;
      console.log(resp);
    });
  }
}
