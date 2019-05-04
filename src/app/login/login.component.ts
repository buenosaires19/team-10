import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public correo: string;
    public clave: string;

    constructor(
      public router: Router
    ) {
        this.correo = '';
        this.clave = '';
    }

    ngOnInit() {}

    onLoggedin() {
        // NO FUNCIONAN LOS NGMODELS
        switch ( (<HTMLInputElement> document.getElementById('correoInput')).value ) {
            case 'admin@gmail.com':
                localStorage.setItem('perfil', 'Admin');
                localStorage.setItem('nombre', 'Octavio Villegas');
                break;
            case 'profesor@gmail.com':
                localStorage.setItem('perfil', 'Profesor');
                localStorage.setItem('nombre', 'Maximiliano Neiner');
                break;
            default:
                localStorage.setItem('perfil', 'Alumno');
                localStorage.setItem('nombre', 'Josias Rivola');
                break;
        }

        localStorage.setItem('isLoggedin', 'true');
    }
}
