import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CrudService} from "../../../service/crud.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEditTeacherComponent} from "../../common/add-edit-teacher/add-edit-teacher.component";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];
  constructor(private httpClient: HttpClient, private crudService: CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.setUp();
  }

  setUp(){
    this.getAllTeachers();
  }

  private getAllTeachers() {
    this.httpClient.get<Teacher[]>(environment.getTeachersUrl, this.crudService.getRequestOptions())
      .subscribe(response => {
          this.teachers = response;
        },
        error => {
          console.log('ERROR');
        });
  }

  onAddTeacher() {
    const dialogRef = this.dialog.open(AddEditTeacherComponent, {data: {teacher: new Teacher(null, null, null, null, null, 0), isInsertMode: true}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllTeachers();
    });
  }

  updateTeacherList(){
    this.getAllTeachers();
  }

}
