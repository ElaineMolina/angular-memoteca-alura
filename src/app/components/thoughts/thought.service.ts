import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from './thought/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:3000/pensamentos';

  listar(pagina: number, filtro: string): Observable<Thought[]> {

    const itensPorPagina = 6;

    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina)

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro)
    }
    return this.http.get<Thought[]>(this.API, {params})
    // return this.http.get<Thought[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`);
  }

  criar(pensamento: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, pensamento);
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
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Thought>(url, pensamento )
}

mudarFavorito(pensamento: Thought): Observable<Thought> {
  pensamento.favorito = !pensamento.favorito
  // const url = `${this.API}/${pensamento.id}`
  // return this.http.put<Thought>(url, pensamento)
  return this.editar(pensamento)
}

}
