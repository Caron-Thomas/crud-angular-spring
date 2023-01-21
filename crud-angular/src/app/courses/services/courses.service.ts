import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listAll(): Course[] {
    return [
      { _id: '1', name: 'Angular' , category: 'front-end' },
      { _id: '2', name: 'TS' , category: 'front-en  d' }
    ];
  }
}
