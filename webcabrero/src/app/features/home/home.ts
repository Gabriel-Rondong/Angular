import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

type Noticia = {
  id: number;
  titulo: string;
  bajada: string;
  imagen: string;
  fecha: string; // ISO
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  // Imagen grande (hero)
  hero = {
    src: 'assets/hero-cabrero.jpg',
    alt: 'Nuestra fiesta en el progreso',
    titulo: 'Nuestra fiesta en el progreso',
  };

  // Mock de noticias (puedes reemplazar por servicio real luego)
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Sembramos trigo para la trilla',
      bajada: 'Vecinos y vecinas se sumaron a la siembra comunitaria.',
      imagen: 'assets/noticias/siembra.jpg',
      fecha: '2025-09-10',
    },
    {
      id: 2,
      titulo: 'Certificamos tres nuevos cursos',
      bajada: 'Más de 60 personas finalizaron su capacitación.',
      imagen: 'assets/noticias/cursos.jpg',
      fecha: '2025-09-05',
    },
    {
      id: 3,
      titulo: 'Papelucho en Cabrero',
      bajada: 'Una función llena de risas y emoción para toda la familia.',
      imagen: 'assets/noticias/papelucho.jpg',
      fecha: '2025-08-28',
    },
    {
      id: 4,
      titulo: 'Segundo listado oficial COSOC',
      bajada: 'Se publica el segundo listado del consejo de la sociedad civil.',
      imagen: 'assets/noticias/cosoc.jpg',
      fecha: '2025-08-21',
    },
  ];
}
