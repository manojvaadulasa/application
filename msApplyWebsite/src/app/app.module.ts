import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatConfirmDeleteComponent } from './mat-confirm-delete/mat-confirm-delete.component';
import { FormsComponent } from './forms/forms.component';
import { CrudTableComponent } from './crud-table/crud-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagenotfoundComponent,
    AboutMeComponent,
    CrudTableComponent,
    FormsComponent,
    MatConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
