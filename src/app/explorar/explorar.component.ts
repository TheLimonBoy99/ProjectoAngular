import { Component } from '@angular/core';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent {
  categorias = [
    {
      nombre: 'Tecnologia',
      descripcion: 'En el alcance de tus manos',
      imagenUrl: './assets/Tecnologia.jpg'
    },
    {
      nombre: 'Halloween',
      descripcion: 'Ideas para tu festejo',
      imagenUrl: './assets/halloween.jpg'
    },
    {
      nombre: 'Lo actual',
      descripcion: 'Checa lo de hoy',
      imagenUrl: './assets/media.jpg'
    },
    // Agrega más categorías aquí
  ];
}