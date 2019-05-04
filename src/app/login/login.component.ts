import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ReadJsonService } from '../shared/read-json/read-json.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public correo: string;
    public clave: string;
    public admins: any[];
    public alumnos: any[];
    public profesionales: any[];

    constructor(
      public router: Router,
      public readJson: ReadJsonService
    ) {
        this.correo = '';
        this.clave = '';
        this.admins = this.readJson.getAdmins();
        this.alumnos = this.readJson.getAlumnos();
        this.profesionales = this.readJson.getProfesionales();
    }

    ngOnInit() {

    }

    onLoggedin() {
        const correo = (<HTMLInputElement> document.getElementById('correoInput')).value;
        const clave = (<HTMLInputElement> document.getElementById('claveInput')).value;

        for (let i = 0; i < this.admins.length; i++) {
            if (this.admins[i].mail === correo && this.admins[i].contrasenia === clave) {
                localStorage.setItem('tipo', this.admins[i].tipo);
                localStorage.setItem('nombre', this.admins[i].nombre);
                localStorage.setItem('apellido', this.admins[i].apellido);
                localStorage.setItem('id', this.admins[i].id);
                localStorage.setItem('mail', this.admins[i].mail);
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
                break;
            }
        }

        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].mail === correo && this.admins[i].contrasenia === clave) {
                localStorage.setItem('tipo', this.alumnos[i].tipo);
                localStorage.setItem('nombre', this.alumnos[i].nombre);
                localStorage.setItem('apellido', this.alumnos[i].apellido);
                localStorage.setItem('id', this.alumnos[i].id);
                localStorage.setItem('mail', this.alumnos[i].mail);
                localStorage.setItem('dni', this.alumnos[i].dni);
                localStorage.setItem('provincia', this.alumnos[i].provincia);
                localStorage.setItem('localidad', this.alumnos[i].localidad);
                localStorage.setItem('nivelEstudio', this.alumnos[i].nivelEstudio);
                localStorage.setItem('estadoEstudio', this.alumnos[i].estadoEstudio);
                localStorage.setItem('nacimiento', this.alumnos[i].nacimiento);
                localStorage.setItem('telefono', this.alumnos[i].telefono);
                localStorage.setItem('sexo', this.alumnos[i].sexo);
                localStorage.setItem('preguntasEconomia', this.alumnos[i].preguntasEconomia);
                localStorage.setItem('preguntasArte', this.alumnos[i].preguntasArte);
                localStorage.setItem('preguntasPolitica', this.alumnos[i].preguntasPolitica);
                localStorage.setItem('preguntasTecnologia', this.alumnos[i].preguntasTecnologia);
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
                break;
            }
        }

        for (let i = 0; i < this.profesionales.length; i++) {
            if (this.profesionales[i].mail === correo && this.admins[i].contrasenia === clave) {
                localStorage.setItem('tipo', this.profesionales[i].tipo);
                localStorage.setItem('nombre', this.profesionales[i].nombre);
                localStorage.setItem('apellido', this.profesionales[i].apellido);
                localStorage.setItem('id', this.profesionales[i].id);
                localStorage.setItem('mail', this.profesionales[i].mail);
                localStorage.setItem('dni', this.profesionales[i].dni);
                localStorage.setItem('provincia', this.profesionales[i].provincia);
                localStorage.setItem('localidad', this.profesionales[i].localidad);
                localStorage.setItem('categoria', this.profesionales[i].categoria);
                localStorage.setItem('chat', this.profesionales[i].chat);
                localStorage.setItem('videoChat', this.profesionales[i].videoChat);
                localStorage.setItem('presencial', this.profesionales[i].presencial);
                localStorage.setItem('telefono', this.profesionales[i].telefono);
                localStorage.setItem('nacimiento', this.profesionales[i].nacimiento);
                localStorage.setItem('sexo', this.profesionales[i].sexo);
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
                break;
            }
        }


    }
}
