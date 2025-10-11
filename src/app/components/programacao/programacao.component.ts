import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Atividade {
  horario: string;
  titulo: string;
  descricao: string;
  preletor?: string;
}

interface DiaProgramacao {
  data: string;
  atividades: Atividade[];
}

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="programacao">
      <div class="container">
        <h2>Programação do Evento</h2>
        <div class="programacao-grid">
          <div *ngFor="let dia of programacao" class="dia-programacao">
            <h3>{{dia.data}}</h3>
            <div class="timeline">
              <div *ngFor="let atividade of dia.atividades" class="atividade">
                <div class="horario">{{atividade.horario}}</div>
                <div class="conteudo">
                  <h4>{{atividade.titulo}}</h4>
                  <p>{{atividade.descricao}}</p>
                  <span *ngIf="atividade.preletor" class="preletor">{{atividade.preletor}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .programacao {
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

    .programacao-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .dia-programacao {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #e74c3c;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .timeline {
      position: relative;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background-color: #e74c3c;
    }

    .atividade {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 2rem;
    }

    .atividade::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 0;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #e74c3c;
    }

    .horario {
      color: #e74c3c;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .conteudo {
      background-color: #f8f9fa;
      padding: 1rem;
      border-radius: 5px;
    }

    h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    p {
      color: #555;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .preletor {
      display: block;
      color: #e74c3c;
      font-style: italic;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .programacao {
        padding: 3rem 0;
      }

      h2 {
        font-size: 2rem;
      }

      .dia-programacao {
        padding: 1.5rem;
      }
    }
  `]
})
export class ProgramacaoComponent {
  programacao: DiaProgramacao[] = [
    {
      data: 'Sábado, 12 de Outubro',
      atividades: [
        {
          horario: '08:00 - 09:00',
          titulo: 'Credenciamento e Café da Manhã',
          descricao: 'Recepção dos participantes e momento de comunhão'
        },
        {
          horario: '09:00 - 10:30',
          titulo: 'Sessão 1: O Chamado à Hombridade Cristã',
          descricao: 'Fundamentos bíblicos da masculinidade',
          preletor: 'Pr. João Silva'
        },
        {
          horario: '11:00 - 12:30',
          titulo: 'Sessão 2: Liderança Espiritual na Família',
          descricao: 'Como ser um líder segundo o coração de Deus',
          preletor: 'Dr. Pedro Santos'
        }
      ]
    },
    {
      data: 'Domingo, 13 de Outubro',
      atividades: [
        {
          horario: '09:00 - 10:30',
          titulo: 'Sessão 3: Integridade nos Negócios',
          descricao: 'Vivendo os valores cristãos no ambiente profissional',
          preletor: 'Paulo Oliveira'
        },
        {
          horario: '11:00 - 12:00',
          titulo: 'Momento de Adoração e Ministração',
          descricao: 'Tempo especial de louvor e palavra'
        },
        {
          horario: '12:00 - 13:00',
          titulo: 'Encerramento e Compromisso',
          descricao: 'Momento de decisão e oração'
        }
      ]
    }
  ];
}