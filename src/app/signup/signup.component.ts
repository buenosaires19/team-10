import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public nombre: string;
    public apellido: string;
    public dni: number;
    public nacimiento: Date;
    public email: string;
    public educacion: string;
    public sexo: string;
    public provincia: string;
    public contrasena: string;
    public telefono: number;
    public edad: number;



    constructor() {}

    ngOnInit() {}

    public onRegistro() {
        this.nombre = (<HTMLInputElement> document.getElementById('nombre')).value;
        this.apellido = (<HTMLInputElement> document.getElementById('apellido')).value;
        this.dni = parseInt((<HTMLInputElement> document.getElementById('dni')).value);
        //this.nacimiento = new Date((<HTMLInputElement> document.getElementById('nacimiento')).value);
        this.email = (<HTMLInputElement> document.getElementById('email')).value;
        this.educacion = (<HTMLSelectElement> document.getElementById('educacion')).value;
        this.sexo = (<HTMLInputElement> document.getElementById('sexo')).value;
        this.provincia = (<HTMLInputElement> document.getElementById('provincia')).value;
        this.contrasena = (<HTMLInputElement> document.getElementById('contrasena')).value;
        this.telefono = parseInt((<HTMLInputElement> document.getElementById('telefono')).value);
        this.edad = parseInt((<HTMLInputElement>document.getElementById("edad")).value);

    }
}
