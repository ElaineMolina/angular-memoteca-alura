import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from './thought/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {

 private readonly API = 'http://localhost:3000/pensamentos'
//  private readonly API = 'http://localhost:3000/pensamentos/listThought'

  constructor(private http: HttpClient) {}


  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Thought[]> {
    const itensPorPagina = 6;

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    if (favoritos) {
      params = params.set('favorito', true);
    }

    return this.http.get<Thought[]>(this.API, { params });
  }

  // listarPensamentosFavoritos(pagina: number, filtro: string): Observable<Thought[]> {
  //   const itensPorPagina = 6;

  //   let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina).set("favorito", true)

  //   if (filtro.trim().length > 2) {
  //     params = params.set('q', filtro)
  //   }
  //   return this.http.get<Thought[]>(this.API, {params})
  // }

  criar(pensamento: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, pensamento)
  }

  excluir(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  buscarPorId(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }

  editar(pensamento: Thought): Observable<Thought> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Thought>(url, pensamento);
  }

  mudarFavorito(pensamento: Thought): Observable<Thought> {
    pensamento.favorito = !pensamento.favorito;
    // const url = `${this.API}/${pensamento.id}`
    // return this.http.put<Thought>(url, pensamento)
    return this.editar(pensamento);
  }
}
