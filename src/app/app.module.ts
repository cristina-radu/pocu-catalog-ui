import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabsComponent} from "./main/tabs/tabs.component";
import {MainComponent} from "./main/main.component";
import {MaterialModule} from "./material.module";
import {TeacherListComponent} from "./main/tabs/teacher-list/teacher-list.component";
import {TeacherComponent} from "./main/tabs/teacher-list/teacher/teacher.component";
import {SubjectListComponent} from "./main/tabs/subject-list/subject-list.component";
import {SubjectComponent} from "./main/tabs/subject-list/subject/subject.component";
import {HttpClientModule} from "@angular/common/http";
import {CrudService} from "./service/crud.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TabsComponent,
    TeacherListComponent,
    TeacherComponent,
    SubjectListComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
