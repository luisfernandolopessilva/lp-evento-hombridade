import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Localização</h4>
            <p>Centro de Eventos XYZ</p>
            <p>Rua das Flores, 123</p>
            <p>São Paulo - SP</p>
          </div>

          <div class="footer-section">
            <h4>Contato</h4>
            <p>Email: contato@eventohombridade.com</p>
            <p>Tel: (11) 99999-9999</p>
            <p>WhatsApp: (11) 99999-9999</p>
          </div>

          <div class="footer-section">
            <h4>Redes Sociais</h4>
            <div class="social-links">
              <a href="#" target="_blank">Facebook</a>
              <a href="#" target="_blank">Instagram</a>
              <a href="#" target="_blank">YouTube</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{currentYear}} Evento de Hombridade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #2c3e50;
      color: white;
      padding: 4rem 0 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .footer-section h4 {
      color: #e74c3c;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }

    .footer-section p {
      margin-bottom: 0.8rem;
      color: #ecf0f1;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #e74c3c;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-bottom p {
      color: #95a5a6;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 1.5rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}