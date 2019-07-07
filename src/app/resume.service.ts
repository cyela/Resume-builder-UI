import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resume } from './Model/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http:HttpClient) { }

  postResume(resume:Resume):any{
    return  this.http.post('http://localhost:8080/api/resume',resume);
   }

   getResume(resume:string):any{
    const httpOptions = {
      'responseType'  : 'arraybuffer' as 'json'
       //'responseType'  : 'blob' as 'json'        //This also worked
    };
    return  this.http.get('http://localhost:8080/api/resumef?filename='+resume,httpOptions);
   }
}
