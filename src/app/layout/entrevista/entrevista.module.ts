import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { EntrevistaRoutingModule } from './entrevista-routing.module';
import { EntrevistaComponent } from './entrevista.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        StatModule,
        EntrevistaRoutingModule
    ],
    declarations: [
        EntrevistaComponent
    ]
})
export class EntrevistaModule {}
