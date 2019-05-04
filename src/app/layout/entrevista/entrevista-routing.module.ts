import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrevistaComponent } from './entrevista.component';

const routes: Routes = [
    {
        path: '', component: EntrevistaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntrevistaRoutingModule {
}
