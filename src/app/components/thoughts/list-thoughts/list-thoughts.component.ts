import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought/thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listaPensamentos: Thought[] =  [];
  paginaAtual: number =  1;
  haMaisPensamentos: boolean = true;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual)
    .subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }
}
