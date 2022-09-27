import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { RedessocialesComponent } from './components/redessociales/redessociales.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    RedessocialesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
