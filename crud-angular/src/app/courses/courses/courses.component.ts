import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService){
    //this.courses = [];
    this.courses = this.coursesService.listAll();
  }

  ngOnInit(): void {

  }

}
