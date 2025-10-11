import { Injectable, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscricao } from '../models/inscricao.model';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {
  private apiUrl = 'http://localhost:3000/api/inscricoes';
  
  // Signals para gerenciar o estado
  private inscricoes = signal<Inscricao[]>([]);
  private loading = signal<boolean>(false);
  private error = signal<string | null>(null);

  constructor(private http: HttpClient) {
    // Effect para logar mudanças no estado
    effect(() => {
      console.log('Estado das inscrições:', this.inscricoes());
    });
  }

  criarInscricao(inscricao: Inscricao): Observable<Inscricao> {
    this.loading.set(true);
    this.error.set(null);
    
    return new Observable<Inscricao>(observer => {
      this.http.post<Inscricao>(this.apiUrl, inscricao).subscribe({
        next: (response) => {
          const inscricoesAtuais = this.inscricoes();
          this.inscricoes.set([...inscricoesAtuais, response]);
          this.loading.set(false);
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          this.error.set('Erro ao criar inscrição');
          this.loading.set(false);
          observer.error(error);
        }
      });
    });
  }

  verificarEmailExistente(email: string): Observable<boolean> {
    this.loading.set(true);
    this.error.set(null);

    return new Observable<boolean>(observer => {
      this.http.get<boolean>(`${this.apiUrl}/verificar-email/${email}`).subscribe({
        next: (existe) => {
          this.loading.set(false);
          observer.next(existe);
          observer.complete();
        },
        error: (error) => {
          this.error.set('Erro ao verificar email');
          this.loading.set(false);
          observer.error(error);
        }
      });
    });
  }

  // Getters para os signals
  getLoading() { return this.loading; }
  getError() { return this.error; }
  getInscricoes() { return this.inscricoes; }
}