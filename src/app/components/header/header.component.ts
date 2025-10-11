import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <h1>Desperte o Homem que Deus te Chamou para Ser</h1>
          <p class="subtitle">Uma conferência de 2 dias para homens que desejam aprofundar seu relacionamento com Deus e seu propósito</p>
          <div class="cta-container">
            <button class="cta-button" (click)="scrollToInscricao()">Faça sua Inscrição</button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/images/header-bg.jpg');
      background-size: cover;
      background-position: center;
      min-height: 100vh;
      display: flex;
      align-items: center;
      color: white;
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .header-content {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      line-height: 1.5;
    }

    .cta-container {
      margin-top: 2rem;
    }

    .cta-button {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.25rem;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #c0392b;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }
    }
  `]
})
export class HeaderComponent {
  scrollToInscricao() {
    const inscricaoElement = document.querySelector('app-inscricao');
    inscricaoElement?.scrollIntoView({ behavior: 'smooth' });
  }
}