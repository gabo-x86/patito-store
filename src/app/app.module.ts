import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { AddPatitoComponent } from './components/forms/add-patito/add-patito.component';
import { MainViewComponent } from './components/forms/main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ButtonComponent,
    TableComponent,
    AddPatitoComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
