import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ChatRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ChatRoutingModule,
        StatModule
    ],
    declarations: [
        ChatsComponent
    ]
})
export class ChatsModule {}
