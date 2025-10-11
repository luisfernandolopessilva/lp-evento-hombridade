import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Preletor {
  nome: string;
  titulo: string;
  bio: string;
  foto: string;
}

@Component({
  selector: 'app-preletores',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="preletores">
      <div class="container">
        <h2>Nossos Preletores</h2>
        <div class="preletores-grid">
          <div *ngFor="let preletor of preletores" class="preletor-card">
            <div class="preletor-foto">
              <img [src]="preletor.foto" [alt]="preletor.nome">
            </div>
            <div class="preletor-info">
              <h3>{{preletor.nome}}</h3>
              <h4>{{preletor.titulo}}</h4>
              <p>{{preletor.bio}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .preletores {
      padding: 5rem 0;
      background-color: #ffffff;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    h2 {
      text-align: center;
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .preletores-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .preletor-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .preletor-card:hover {
      transform: translateY(-5px);
    }

    .preletor-foto {
      height: 280px;
      overflow: hidden;
    }

    .preletor-foto img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .preletor-info {
      padding: 1.5rem;
    }

    h3 {
      color: #2c3e50;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      color: #e74c3c;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    p {
      color: #555;
      line-height: 1.6;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .preletores {
        padding: 3rem 0;
      }

      h2 {
        font-size: 2rem;
      }

      .preletor-foto {
        height: 220px;
      }
    }
  `]
})
export class PreletoresComponent {
  preletores: Preletor[] = [
    {
      nome: 'Pr. João Silva',
      titulo: 'Pastor Sênior | Especialista em Liderança Cristã',
      bio: 'Com mais de 20 anos de ministério, o Pr. João tem dedicado sua vida a mentorear homens e fortalecer famílias através de princípios bíblicos.',
      foto: '/assets/images/preletor-1.jpg'
    },
    {
      nome: 'Dr. Pedro Santos',
      titulo: 'Psicólogo Cristão | Escritor',
      bio: 'Especialista em relacionamentos familiares, Dr. Pedro tem ajudado homens a desenvolverem uma masculinidade saudável baseada em valores cristãos.',
      foto: '/assets/images/preletor-2.jpg'
    },
    {
      nome: 'Paulo Oliveira',
      titulo: 'Empresário | Líder de Ministério de Homens',
      bio: 'Como empresário cristão bem-sucedido, Paulo compartilha como integrar fé e negócios, mantendo a integridade em um mundo corporativo.',
      foto: '/assets/images/preletor-3.jpg'
    }
  ];
}