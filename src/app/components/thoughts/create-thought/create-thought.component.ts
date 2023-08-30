import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento: Thought = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor(
    private service: ThoughtService,
    private router: Router) {}

  ngOnInit(): void {}

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listThought'])
    })
  }
  cancelar(){
    this.router.navigate(['/listThought'])
  }
}
