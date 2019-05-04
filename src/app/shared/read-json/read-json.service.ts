import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {
  private alumnos: any[];
  private admins: any[];
  private profesionales: any[];

  constructor(private http: HttpClient) {
    this.alumnos = [];
    this.admins = [];
    this.profesionales = [];

    this.getAdminsJSON().subscribe(data => {
      for (let i = 0; true; i++) {
        if (data[i] === undefined) { break; }
        this.admins.push(data[i]);
      }
    });

    this.getAlumnosJSON().subscribe(data => {
      for (let i = 0; true; i++) {
        if (data[i] === undefined) { break; }
        this.alumnos.push(data[i]);
      }
    });

    this.getProfesionalesJSON().subscribe(data => {
      for (let i = 0; true; i++) {
        if (data[i] === undefined) { break; }
        this.profesionales.push(data[i]);
      }
    });
  }

  private getAdminsJSON() {
    return this.http.get('./assets/mock_data/admin.json');
  }

  private getProfesionalesJSON() {
    return this.http.get('./assets/mock_data/profesional.json');
  }

  private getAlumnosJSON() {
    return this.http.get('./assets/mock_data/alumnos.json');
  }

  public getAdmins() {
    return this.admins;
  }

  public getAlumnos() {
    return this.alumnos;
  }

  public getProfesionales() {
    return this.profesionales;
  }
}
