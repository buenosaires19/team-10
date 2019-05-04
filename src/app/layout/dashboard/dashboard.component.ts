import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    i=0;

    constructor( private data:ActivatedRoute) {
        console.log(this.data.snapshot.params)
        console.log(Math.round(Math.random()))
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Carerras',
                text: 'Encuentra la informacion necesaria de tu carrera',
                link: '/carreras'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Test Vocacional',
                text: 'Descubre tus gustos y orientacion',
                link: '/test'

            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Tips Para Entrevistas',
                text: 'No te pongas nervioso en tu proxima entrevista',
                link: 'tips'

            }
        );

    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
