import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoApComponent } from './logo-ap/logo-ap.component';



@NgModule({
  declarations: [
   
  
    HeaderComponent,
           LogoApComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
  
  ]

})
export class ComponentsModule { }
