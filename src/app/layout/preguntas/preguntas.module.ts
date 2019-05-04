import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { PreguntaRoutingModule } from './preguntas-routing.module';
import { PreguntasComponent } from './preguntas.component';
import { StatModule } from '../../shared';
import { ModalComponent } from './modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        PreguntaRoutingModule,
        StatModule
    ],
    declarations: [
        PreguntasComponent,
        ModalComponent
    ],
    entryComponents: [
      ModalComponent
    ]
  })
export class PreguntasModule {}
