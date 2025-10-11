import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InscricaoService } from '../../services/inscricao.service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="inscricao-section">
      <div class="container">
        <h2>Faça sua Inscrição</h2>
        <form [formGroup]="inscricaoForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              formControlName="nome_completo"
              class="form-control"
              [class.is-invalid]="nomeCompleto?.invalid && nomeCompleto?.touched"
            >
            <div class="invalid-feedback" *ngIf="nomeCompleto?.invalid && nomeCompleto?.touched">
              Nome completo é obrigatório
            </div>
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              class="form-control"
              [class.is-invalid]="email?.invalid && email?.touched"
            >
            <div class="invalid-feedback" *ngIf="email?.invalid && email?.touched">
              E-mail válido é obrigatório
            </div>
          </div>

          <div class="form-group">
            <label for="telefone">Telefone/WhatsApp</label>
            <input
              type="tel"
              id="telefone"
              formControlName="telefone"
              class="form-control"
              [class.is-invalid]="telefone?.invalid && telefone?.touched"
            >
            <div class="invalid-feedback" *ngIf="telefone?.invalid && telefone?.touched">
              Telefone válido é obrigatório (apenas números)
            </div>
          </div>

          <button type="submit" class="btn btn-primary" [disabled]="inscricaoForm.invalid || isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Garantir Minha Vaga' }}
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .inscricao-section {
      padding: 4rem 0;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 0 15px;
    }

    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #333;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #495057;
    }

    .form-control {
      display: block;
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .form-control:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .btn {
      display: block;
      width: 100%;
      padding: 1rem;
      font-size: 1.1rem;
      font-weight: 600;
      text-align: center;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;
    }

    .btn:hover {
      background-color: #0056b3;
    }

    .btn:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }

    .invalid-feedback {
      display: block;
      width: 100%;
      margin-top: 0.25rem;
      font-size: 80%;
      color: #dc3545;
    }

    .is-invalid {
      border-color: #dc3545;
    }

    .is-invalid:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
  `]
})
export class InscricaoComponent implements OnInit {
  inscricaoForm!: FormGroup;
  isSubmitting = false;
  loading;
  error;

  constructor(
    private fb: FormBuilder,
    private inscricaoService: InscricaoService
  ) {
    this.loading = this.inscricaoService.getLoading();
    this.error = this.inscricaoService.getError();
  }

  ngOnInit(): void {
    this.inscricaoForm = this.fb.group({
      nome_completo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]]
    });
  }

  get nomeCompleto() { return this.inscricaoForm.get('nome_completo'); }
  get email() { return this.inscricaoForm.get('email'); }
  get telefone() { return this.inscricaoForm.get('telefone'); }

  onSubmit(): void {
    if (this.inscricaoForm.valid) {
      this.isSubmitting = true;
      this.inscricaoService.criarInscricao(this.inscricaoForm.value)
        .subscribe({
          next: (response) => {
            console.log('Inscrição realizada com sucesso', response);
            alert('Inscrição realizada com sucesso!');
            this.inscricaoForm.reset();
          },
          error: (error) => {
            console.error('Erro ao realizar inscrição', error);
            alert('Erro ao realizar inscrição. Por favor, tente novamente.');
          },
          complete: () => {
            this.isSubmitting = false;
          }
        });
    }
  }
}