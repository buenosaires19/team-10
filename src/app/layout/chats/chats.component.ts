import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  privado;
  chats = [
    {
      "id": 1,
      "tipo":"economia",
      "idAlumno": 1,
      "idProfesional": 1,
      "pregRes": [
        {
          "alumno": true,
          "datos": "Como hago para hacer un curriculum para contabilidad?",
          "hora": "hace 7 minutos"
        },

        {
          "alumno": false,
          "datos": "Lo que tenes que hacer una sintesis de datos personales e historia profesional.",
          "hora": "hace 6 minutos"
        },

        {
          "alumno": false,
          "datos": "A veces es útil tomar como guía algunos ejemplos de internet",
          "hora": "hace 5 minutos"
        }
      ],
      "fin":false,
      "fecha": "12/4/2019"
    },
    {
      "id": 2,
      "tipo":"economia",
      "idAlumno": 1,
      "idProfesional": 6,
      "pregRes": [
        {
          "alumno": true,
          "datos": "¿Cuanto tiempo lleva normalmente una carrera de ingeniería?",
          "hora": "hace 15 minutos"
        },

        {
          "alumno": false,
          "datos": "Es una chat un relativamente controversial ya que depende de muchos factores",
          "hora": "hace 15 minutos"
        },
        {
          "alumno": true,
          "datos": "cual seria en le mejor de los casos?",
          "hora": "hace 15 minutos"
        },
        {
          "alumno": false,
          "datos": "5 años.",
          "hora": "hace 15 minutos"
        }
      ],
      "fin":false,
      "publico": true,
      "positivo": true,
      "fecha": "12/4/2019"
    },
    {
      "id": 3,
      "tipo":"economia",
      "idAlumno": 1,
      "idProfesional": 5,
      "pregRes": [
        {
          "alumno": true,
          "datos": "¿Cuanto tiempo lleva normalmente una carrera de ingeniería?",
          "hora": "hace 3 dias"
        },

        {
          "alumno": false,
          "datos": "Es una chat un relativamente controversial ya que depende de muchos factores",
          "hora": "hace 3 dias"
        },
        {
          "alumno": true,
          "datos": "cual seria en le mejor de los casos?",
          "hora": "hace 3 dias"
        },
        {
          "alumno": false,
          "datos": "5 años.",
          "hora": "hace 3 dias"
        }
      ],
      "fin":false,
      "publico": true,
      "positivo": true,
      "fecha": "12/4/2019"
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
  public perfil = '';
  public admin=false;

  constructor(private data:ActivatedRoute) {
    this.perfil = localStorage.getItem('tipo');
    this.privado = this.data.snapshot.params.tipo;
    
    let i = 0;
    for (const chat of this.chats) {
      for (const t of this.iconosTipos) {
        if (t.tipo === chat.tipo) {
          chat['icono'] = t.icono;
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
    if (this.perfil === 'usuario') {
      this.admin = true;
    }
    

  }
  ngOnInit() {
  }

}

