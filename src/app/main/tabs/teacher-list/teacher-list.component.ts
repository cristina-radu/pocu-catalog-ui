import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CrudService} from "../../../service/crud.service";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];
  constructor(private httpClient: HttpClient, private crudService: CrudService) { }

  ngOnInit(): void {
    this.setUp();
  }

  setUp(){
    this.httpClient.get<Teacher[]>(environment.getTeachersUrl, this.crudService.getRequestOptions())
      .subscribe(response => {
        console.log(response);
        this.teachers = response;
      },
        error => {
          console.log('ERROR');
        });
  }

}
