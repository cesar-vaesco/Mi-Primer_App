import { Component, OnInit } from '@angular/core';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: '<p>Aquí iria un empleado!!!!</p>',
  styleUrls: ['./empleado.component.css'],
  // styles: ['p {background-color:red}'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'César';
  apellido = 'Vargas';
  edad = 3;
  //empresa = 'Vaesco';
  habilitacionCuadro = true;
  usuarioRegistrado = false;
  textoDeRegistro = 'No hay nadie registrado';


  getRegistroUsuario() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    //alert('Usuario se ha registrado....');
    //this.textoDeRegistro= 'El usuario se acaba de registrar';
   // alert(event.target);
    if ((<HTMLInputElement>event.target).value == 'si') {
      this.textoDeRegistro = 'El usuario se acaba de registrar';
    } else {
      this.textoDeRegistro = 'No hay nadie registrado';
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
