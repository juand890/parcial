import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import {GrupoaComponent} from './grupoa/grupoa.component';
import {GrupobComponent} from './grupob/grupob.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    GrupoaComponent,
    GrupobComponent,
    AppComponent,
    ThemeComponent
    
  ],
  imports: [AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
