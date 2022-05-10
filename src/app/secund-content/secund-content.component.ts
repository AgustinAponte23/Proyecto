import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secund-content',
  templateUrl: './secund-content.component.html',
  styleUrls: ['./secund-content.component.css']
})
export class SecundContentComponent implements OnInit {

  estudiantes= [
    {
      nombre: 'Ricardo',
      nota:4,
      curso: 'Angular',
      aprobado: false,

    },
    {
      nombre:'Malena',
      nota:9,
      curso:'React',
      aprobado: true,
    },
    {
      nombre:'Valentin',
      nota:10,
      curso:'Vue',
      aprobado: true,
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
