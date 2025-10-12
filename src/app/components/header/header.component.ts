import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  scrollToInscricao(): void {
    const inscricaoSection = document.querySelector('.inscricao-section');
    if (inscricaoSection) {
      inscricaoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSobre(): void {
    const sobreSection = document.querySelector('.sobre-section');
    if (sobreSection) {
      sobreSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}