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
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class NewsComponent {
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Sembramos trigo para la trilla',
      bajada: 'Vecinos y vecinas se sumaron a la siembra comunitaria.',
      imagen: 'https://www.cabrero.cl/images/250831-siembra-trigox.jpg',
      fecha: '2025-09-10',
    },
    {
      id: 2,
      titulo: 'Certificamos tres nuevos cursos',
      bajada: 'Más de 60 personas finalizaron su capacitación.',
      imagen: 'https://www.cabrero.cl/images/w250828-tres-cursos-PMJH.jpg',
      fecha: '2025-09-05',
    },
    {
      id: 3,
      titulo: 'Papelucho en Cabrero',
      bajada: 'Una función llena de risas y emoción para toda la familia.',
      imagen: 'https://www.cabrero.cl/images/W250829-PAPELUCHO.jpg',
      fecha: '2025-08-28',
    },
    {
      id: 4,
      titulo: 'Segundo listado oficial COSOC',
      bajada: 'Se publica el segundo listado del consejo de la sociedad civil.',
      imagen: 'https://www.cabrero.cl/images/BANNER-COSOC.png',
      fecha: '2025-08-21',
    },
  ];
}
