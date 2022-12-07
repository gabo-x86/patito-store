import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatitoComponent } from './components/forms/add-patito/add-patito.component';
import { MainViewComponent } from './components/forms/main-view/main-view.component';

const routes: Routes = [
    {path: '', component: MainViewComponent},
    {path: 'add-patito', component: AddPatitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
