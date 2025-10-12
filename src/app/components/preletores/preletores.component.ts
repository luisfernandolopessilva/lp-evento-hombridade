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
  templateUrl: './preletores.html',
  styleUrls: ['./preletores.scss']
})
export class PreletoresComponent {
  preletores: Preletor[] = [
    {
      nome: 'Pastor João Silva',
      titulo: 'Pastor Senior',
      bio: 'Mais de 20 anos de experiência em mentoria de homens',
      foto: 'assets/images/preletor1.jpg'
    },
    {
      nome: 'Dr. Pedro Santos',
      titulo: 'Psicólogo Cristão',
      bio: 'Especialista em relacionamentos familiares',
      foto: 'assets/images/preletor2.jpg'
    },
    {
      nome: 'Lucas Oliveira',
      titulo: 'Líder de Ministério',
      bio: 'Fundador do ministério Homens de Valor',
      foto: 'assets/images/preletor3.jpg'
    }
  ];
}