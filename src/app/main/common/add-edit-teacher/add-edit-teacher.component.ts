import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../../../model/teacher.model";
import {environment} from "../../../../environments/environment";
import {CrudService} from "../../../service/crud.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css']
})
export class AddEditTeacherComponent implements OnInit {
  teacher: Teacher;
  cnpPattern = '^[0-9]{13}$';
  salaryPattern = '^[0-9]+$';
  isInsertMode; true;

  constructor(private httpClient: HttpClient, private crudService: CrudService, public dialogRef: MatDialogRef<AddEditTeacherComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.teacher = this.data.teacher;
    this.isInsertMode = this.data.isInsertMode;
  }

  onSubmit(teacherForm: NgForm){
    console.log('submit button');
    if(!teacherForm.valid) {
      return;
    }
    const birthDayString = teacherForm.value.birthdate instanceof Date ?
    teacherForm.value.birthdate.toISOString().split('T')[0] : teacherForm.value.birthdate;

    const employmentDayString = teacherForm.value.employmentdate instanceof Date ?
    teacherForm.value.employmentdate.toISOString().split('T')[0] : teacherForm.value.employmentdate;

    const teacher = new Teacher(teacherForm.value.firstname, teacherForm.value.lastname, birthDayString,
      employmentDayString, teacherForm.value.cnp, Number(teacherForm.value.salary));

    if(this.isInsertMode){
      this.saveTeacher(teacher);
    }
    if(!this.isInsertMode){
      this.updateTeacher(teacher);
    }
  }

  saveTeacher(teacher: Teacher){
    this.httpClient.post<string>(environment.saveTeacherUrl, teacher, this.crudService.getRequestOptions())
      .subscribe( response => {
        console.log('Teacher saved successfully!');
        this.close();
      },
        error => {
        console.log('Error when saving teacher!');
        })
  }

  updateTeacher(teacher: Teacher){
    teacher.id = this.teacher.id;
    this.httpClient.put(environment.updateTeacherUrl.replace('{id}', teacher.id+ ''), teacher, this.crudService.getRequestOptions())
      .subscribe( response => {
        console.log('Teacher updated successfully!');
        this.close();
      },
        error => {
        console.log('Error when updating teacher!');
        })
  }

  close() {
    this.dialogRef.close();
  }
}
