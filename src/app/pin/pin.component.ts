import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {
  categories: string[] = ['Todos los Pines', 'Videos', 'Tableros', 'Perfiles', 'Productos'];
  selectedCategory: string = 'Todos los Pines';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    // Aquí puedes realizar la lógica de filtrado según la categoría seleccionada
    // Por ejemplo, emitiendo un evento o llamando a una función en otro componente
  }
}

