import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../../../model/teacher.model";
import {MatDialog} from "@angular/material/dialog";
import {AddEditTeacherComponent} from "../../../common/add-edit-teacher/add-edit-teacher.component";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {CrudService} from "../../../../service/crud.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input() teacher: Teacher;
  @Output() teacherDataChanged = new EventEmitter();

  constructor(private httpClient: HttpClient, private crudService: CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEdit(){
    console.log("You pressed edit");
    const dialogRef = this.dialog.open(AddEditTeacherComponent, {data: {teacher: this.teacher, isInsertMode: false}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.teacherDataChanged.next();
    });
  }

  onDelete(){
    this.httpClient.delete(environment.deleteTeacherUrl.replace('{id}', this.teacher.id+ ''), this.crudService.getRequestOptions())
      .subscribe(res => {
        console.log('Delete successful');
        this.teacherDataChanged.next();
      },
        error => {
          console.log('Error on deleting a teacher');
        })
  }
}
