import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {
  public preguntas = [
    {
    'id': 1 ,
    'pregunta': '¿Cuanto gana un contador?',
    'idAlumno': 1,
    'idProfesional': 1,
    'publico': true,
    'respuesta': '50.000 pesos',
    'positivo': true,
    'tipo': 'economia',
    'fecha': '12/5/19'
    },
    {
    'id': 2 ,
    'pregunta': '¿Cuanto dura la carrera de Economista?',
    'idAlumno': 2,
    'idProfesional': 2,
    'publico': true,
    'respuesta': '5 años',
    'positivo': true,
    'tipo': 'economia',
    'fecha': '13/1/19'
    },
    {
    'id': 3 ,
    'pregunta': '¿Cuanto dura la carrera de Ciencias politicas?',
    'idAlumno': 2,
    'idProfesional': 3,
    'publico': true,
    'respuesta': '3 años',
    'positivo': true,
    'tipo': 'arte',
    'fecha': '13/1/19'
    },
    {
    'id': 4 ,
    'pregunta': '¿Cuantos años dura una carrera de ingenieria ?',
    'idAlumno': 3,
    'idProfesional': 5,
    'publico': true,
    'respuesta': '5 años',
    'positivo': true,
    'tipo': 'economia',
    'fecha': '6/7/19'
    },
    {
    'id': 5 ,
    'pregunta': '¿Cuantos años dura la carrera de licenciatura en arte',
    'idAlumno': 3,
    'idProfesional': 7,
    'publico': true,
    'respuesta': '5 años',
    'positivo': true,
    'tipo': 'politica',
    'fecha': '6/7/19'
    },
    {
    'id': 6 ,
    'pregunta': '¿Que puede esperar uno de la carre de licenciatura en artes?',
    'idAlumno': 3,
    'idProfesional': 7,
    'publico': true,
    'respuesta': 'La carrera universitaria de Licenciatura en Artes forma en las diferentes expresiones artísticas',
    'positivo': true,
    'tipo': 'arte',
    'fecha': '6/7/19'
    },
    {
    'id': 7 ,
    'pregunta': '¿Cuanto dura en promedio la carrera de contador publico?',
    'idAlumno': 1,
    'idProfesional': 2,
    'publico': true,
    'respuesta': '5 años y medio en promedio.',
    'positivo': true,
    'tipo': 'tecnologia',
    'fecha': '6/7/19'
    }
  ];
  public iconosTipos = [
    { tipo: 'economia', icono: 'fa fa-line-chart'},
    { tipo: 'tecnologia', icono: 'fa fa-laptop'},
    { tipo: 'arte', icono: 'fa fa-paint-brush'},
    { tipo: 'politica', icono: 'fa fa-gavel'}
  ];
  public profesional: boolean;
  public alumnoLoggueado = false;
  public perfil = ''; // profesional

  constructor() {
    let i = 0;
    for (const pregunta of this.preguntas) {
      pregunta['lado'] = i ? 'timeline-inverted' : '';
      console.log(pregunta);
      i = 1 - i;
      for (const t of this.iconosTipos) {
        if (t.tipo === pregunta.tipo) {
          pregunta['icono'] = t.icono;
        }
      }
    }
    if (this.perfil === 'profesional') {
      this.profesional = true;
    } else {
      this.profesional = false;
    }
    if (this.perfil === 'usuario') {
      this.alumnoLoggueado = true;
    }

  }

  ngOnInit() {
  }

}
