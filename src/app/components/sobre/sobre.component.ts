import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="sobre">
      <div class="container">
        <h2>Sobre o Evento</h2>
        <div class="content">
          <div class="section">
            <h3>O que esperar?</h3>
            <ul>
              <li>Palestras impactantes</li>
              <li>Momentos de louvor e adoração</li>
              <li>Grupos de discussão e mentoria</li>
              <li>Comunhão e networking com outros homens de fé</li>
            </ul>
          </div>

          <div class="section">
            <h3>Para quem é este evento?</h3>
            <ul>
              <li>Homens que buscam crescimento espiritual</li>
              <li>Pais que desejam ser referência para seus filhos</li>
              <li>Maridos que querem fortalecer seu casamento</li>
              <li>Líderes que buscam desenvolvimento integral</li>
              <li>Jovens que almejam construir um alicerce sólido</li>
            </ul>
          </div>

          <div class="section">
            <h3>Por que participar?</h3>
            <p>Em um mundo que questiona constantemente os valores cristãos e o papel do homem na sociedade, 
               este evento oferece direcionamento bíblico, ferramentas práticas e uma rede de apoio para 
               homens que desejam viver segundo o coração de Deus.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .sobre {
      padding: 5rem 0;
      background-color: #f8f9fa;
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

    .content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .section {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #e74c3c;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;
    }

    li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #27ae60;
    }

    p {
      line-height: 1.6;
      color: #555;
    }

    @media (max-width: 768px) {
      .sobre {
        padding: 3rem 0;
      }

      h2 {
        font-size: 2rem;
      }

      .section {
        padding: 1.5rem;
      }
    }
  `]
})
export class SobreComponent {}