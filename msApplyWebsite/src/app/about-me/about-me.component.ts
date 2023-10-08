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
    this.careerGoal=`My ultimate career goal is to become a Software Architect specializing in framework and
    database selection across diverse projects, with a particular focus on integrating AI into web
    technologies given the rapid advancements in the field. I aim to excel in ensuring the seamless
    management and long-term maintenance of these projects throughout their life cycles.`;
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
