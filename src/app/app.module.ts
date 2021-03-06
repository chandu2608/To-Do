import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import {APP_ROUTES} from './app.routing';
import {AppService} from './services/app.service';
import {dateFormatPipe} from './pipes/date.pipe';
import { DatePipe } from '@angular/common';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AuthGuard } from './auth-guard';
// import { AsyncLocalStorageModule } from 'angular-async-local-storage';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent,
    dateFormatPipe
  ],
  imports: [
    BrowserModule,
    // AsyncLocalStorageModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [AppService,AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
