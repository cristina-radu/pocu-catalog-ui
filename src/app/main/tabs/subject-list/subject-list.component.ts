import {Component, OnInit} from '@angular/core';
import {Subject} from "../../../model/subject.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CrudService} from "../../../service/crud.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private httpClient: HttpClient, private crudService: CrudService) {
  }

  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    this.httpClient.get<Subject[]>(environment.getSubjectsUrl, this.crudService.getRequestOptions())
      .subscribe(response => {
          console.log(response);
          this.subjects = response;
        },
        error => {
          console.log('error');
        });
  }

}
