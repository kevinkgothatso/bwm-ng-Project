import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; //imported 


import { AppComponent } from './app.component';
import {HeaderComponent}  from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';

//Refrencing the rental module
import {RentalModule} from './rental/rental.module';

const routes : Routes = [
   {path: '', redirectTo:'/rentals',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent, //the initial component
    HeaderComponent,
  ],
  imports: [
    RouterModule.forRoot(routes), //imported
    BrowserModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
