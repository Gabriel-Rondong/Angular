
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'  // si solo tienes un archivo CSS
})
export class FormComponent {
  formData = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  enviar() {
    console.log("ddad");
    console.log('Datos del formulario:', this.formData);
  }
}

