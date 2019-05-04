import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'chat/:tipo', loadChildren: './chats/chats.module#ChatsModule' },
            { path: 'preguntas/:tipo', loadChildren: './preguntas/preguntas.module#PreguntasModule' },
            { path: 'tips', loadChildren: './entrevista/entrevista.module#EntrevistaModule' },
            { path: 'carreras', loadChildren: './carreras/carreras.module#CarrerasModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
