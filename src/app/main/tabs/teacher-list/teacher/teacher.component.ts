import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../../../../model/teacher.model";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input() teacher: Teacher;

  constructor() { }

  ngOnInit(): void {
  }

}
