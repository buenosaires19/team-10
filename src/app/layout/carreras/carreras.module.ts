import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarrerasComponent } from './carreras.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        CarrerasRoutingModule,
        StatModule
    ],
    declarations: [
        CarrerasComponent
    ]
})
export class CarrerasModule {}
