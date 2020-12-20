import { Component, OnInit } from '@angular/core'

interface IExperience {
  time: string
  title: string
  company: string
  position: string
  tech: string
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  public experiences: IExperience[] = [
    {
      time: 'December 2020 - Present',
      title: 'Software Development Engineer',
      company: '@B&K SOLUTION',
      position: 'Fullstack web developer',
      tech:
        'Technologies: ReactJs, NestJs framework (NodeJs), Typescipt, PostgresQL, MySQL (TypeORM), Docker, ...',
    },
    {
      time: 'September 2020 - November 2020',
      title: 'Software Development Engineer',
      company: '@FAVIE-TECH',
      position: 'Fullstack web developer',
      tech:
        'Technologies: Angular, NestJs framework (NodeJs), GraphQL, Typescipt, PostgresQL (TypeORM), Docker, ...',
    },
    {
      time: 'November 2019 - November 2020',
      title: 'Software Development Engineer',
      company: '@ANT-TECH',
      position: 'Fullstack web developer',
      tech:
        'Technologies: Angular, NestJs framework (NodeJs), GraphQL, Typescipt, MongoDB, Docker, ...',
    },
    {
      time: 'February 2019 - October 2019',
      title: 'Software Development Engineer',
      company: '@JANETO',
      position: 'Fullstack web developer',
      tech: 'Technologies: Angular, NodeJs, Typescipt, MongoDB.',
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
