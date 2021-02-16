import { Component, OnInit } from '@angular/core';

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
  empresa = 'Vaesco';

  constructor() {}

  ngOnInit(): void {}
}
