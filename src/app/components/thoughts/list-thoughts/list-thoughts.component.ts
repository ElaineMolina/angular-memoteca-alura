import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listaPensamentos: Thought[] =  [];
  constructor() { }

  ngOnInit(): void {
  }

}
