import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Carerras',
                text: 'Encuentra la informacion necesaria de tu carrera',
                link: 'carreras'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Test Vocacional',
                text: 'Descubre tus gustos y orientacion',
                link: ''

            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Tips Para Entrevistas',
                text: 'No te pongas nervioso en tu proxima entrevista',
                link: 'tips'

            },
            {
                imagePath: 'assets/images/slider4.jpg',
                label: 'Vida de un profesional',
                text: 'Un dia en la vida de un profesional',
                link: 'tips'

            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
