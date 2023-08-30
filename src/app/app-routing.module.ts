import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThought',
    component: ListThoughtsComponent
  },
  // {
  //   path: 'pensamentos/excluirPensamento/:id',
  //   component: ExcluirPensamentoComponent
  // },
  // {
  //   path: 'pensamentos/editarPensamento/:id',
  //   component: EditarPensamentoComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
