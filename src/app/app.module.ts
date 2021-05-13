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
import {AddEditTeacherComponent} from "./main/common/add-edit-teacher/add-edit-teacher.component";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TabsComponent,
    TeacherListComponent,
    TeacherComponent,
    SubjectListComponent,
    SubjectComponent,
    AddEditTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [CrudService, AddEditTeacherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
