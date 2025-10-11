import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PreletoresComponent } from './components/preletores/preletores.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SobreComponent,
    PreletoresComponent,
    ProgramacaoComponent,
    InscricaoComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <app-sobre></app-sobre>
      <app-preletores></app-preletores>
      <app-programacao></app-programacao>
      <app-inscricao></app-inscricao>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #ffffff;
    }
  `]
})
export class App {
  title = 'Evento de Hombridade';
}
