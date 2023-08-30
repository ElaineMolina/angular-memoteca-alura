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
  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

}
