import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  careerGoal : string ="";
  primaryTechnicalSkills:string[]=[];
  secondaryTechnicalSkills:string[]=[];
  constructor() {
    this.careerGoal=`My long-term career aspiration is to become a Software Architect responsible for
    selecting appropriate frameworks for front-end, back-end, and databases in various projects, ensuring
    their successful management and maintenance throughout their life cycles.`;
    this.primaryTechnicalSkills=[
      "HTML",
      "CSS",
      "Bootstrap",
      "Angular",
      "Git",
      "Typescript",
      "Data structures"
    ];
    this.secondaryTechnicalSkills=[
      "SQL",
      "Java",
      "Springboot",
      "RxJS",
      "Jasmine/Karma testing",
      "C/C++",
      "NgRX"
    ]
  }

}
