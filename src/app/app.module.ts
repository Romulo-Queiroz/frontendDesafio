import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateLancamentoComponentComponent } from './create-lancamento-component/create-lancamento-component.component';

@NgModule({
  declarations: [
    CreateLancamentoComponentComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
  ],
  providers: [
    CreateLancamentoComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
