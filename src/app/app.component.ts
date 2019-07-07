import { Component } from '@angular/core';
import { ResumeService } from './resume.service';
import { Education } from './Model/education';
import { Header } from './Model/header';
import { Experience } from './Model/experience';
import { stringify } from '@angular/compiler/src/util';
import { Project } from './Model/project';
import { Resume } from './Model/resume';
import { Myresume } from './Model/myresume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  resume:Myresume=new Myresume();

  constructor(private api:ResumeService){
    
    
  }

  createpdf(){
    // Header 
    let head:Header=new Header(this.resume.fullname,this.resume.address,this.resume.emailAddress,this.resume.phoneNumber,this.resume.linkedin,this.resume.github,this.resume.website);
   
    // Education
    let edu:Education=new Education(this.resume.unvName,this.resume.unvDegree,this.resume.unvCourse,this.resume.unvPeriod,this.resume.unvAddress,this.resume.unvGpa);
    let edut:Education=new Education(this.resume.unvName1,this.resume.unvDegree1,this.resume.unvCourse1,this.resume.unvPeriod1,this.resume.unvAddress1,this.resume.unvGpa1);
    
    let edlist:Education[]=[];
    edlist.push(edu);
    edlist.push(edut);

    // Experience
    let res:string[]=[];
    res.push(this.resume.compResp);
    let exp:Experience=new Experience(this.resume.compName,this.resume.compRole,this.resume.compPeriod,this.resume.compAddress,res);
    
    let res2:string[]=[];
    res2.push(this.resume.compResp1);
    let exp2:Experience=new Experience(this.resume.compName1,this.resume.compRole1,this.resume.compPeriod1,this.resume.compAddress1,res2);
    
    let explist:Experience[]=[];
    explist.push(exp);
    explist.push(exp2);

    // Skills
    let map:{ [name: string]: string }={};
    map[this.resume.skilCategory]=this.resume.skillNames;
    map[this.resume.skilCategory1]=this.resume.skillNames1;
    map[this.resume.skilCategory2]=this.resume.skillNames2;
    map[this.resume.skilCategory3]=this.resume.skillNames3;

    // Projects
    let pro:Project=new Project(this.resume.projName,this.resume.projDesc,this.resume.projTech);
    let pro2:Project=new Project(this.resume.projName1,this.resume.projDesc1,this.resume.projTech1);

    let prolist:Project[]=[];
    prolist.push(pro);
    prolist.push(pro2);

    let resume=new Resume(head, edlist,explist,map, prolist);
    console.log(resume);
    this.api.postResume(resume).subscribe(res=>{
      console.log(res);
    }); 
    this.api.getResume(this.resume.fullname).subscribe(response=>{
      console.log(response);
      let file = new Blob([response], { type: 'application/pdf' });            
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    })   
  }
}
