import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InscricaoService } from '../../services/inscricao.service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscricao.html',
  styleUrls: ['./inscricao.scss']
})
export class InscricaoComponent implements OnInit {
  inscricaoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private inscricaoService: InscricaoService
  ) {}

  ngOnInit(): void {
    this.inscricaoForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      igreja: ['', [Validators.required]],
      expectativas: ['']
    });
  }

  onSubmit(): void {
    if (this.inscricaoForm.valid) {
      this.inscricaoService.criarInscricao(this.inscricaoForm.value).subscribe({
        next: (response) => {
          console.log('Inscrição realizada com sucesso:', response);
          this.inscricaoForm.reset();
          // Aqui você pode adicionar uma mensagem de sucesso para o usuário
        },
        error: (error) => {
          console.error('Erro ao realizar inscrição:', error);
          // Aqui você pode adicionar uma mensagem de erro para o usuário
        }
      });
    }
  }
}