import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ChatsComponent } from './chats/chats.component';
import { CarrerasComponent } from './carreras/carreras.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, EntrevistaComponent, PreguntasComponent, ChatsComponent, CarrerasComponent]
})
export class LayoutModule {}
