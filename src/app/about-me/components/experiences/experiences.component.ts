import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

interface IExperience {
	time: string;
	title: string;
	company: string;
	position: string;
	tech: string;
	url: string;
}

@Component({
	selector: 'app-experiences',
	templateUrl: './experiences.component.html',
	styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
	public experiences: IExperience[];
	constructor(private readonly translocoService: TranslocoService) {}

	ngOnInit(): void {}

	public getExperiences(): IExperience[] {
		return [
			{
				time: this.translocoService.translate('startTimeAtBNK'),
				title: 'Software Development Engineer',
				company: '@BnK SOLUTION',
				url: 'https://bnksolution.com/vi_VN/',
				position: 'Fullstack web developer',
				tech: 'Technologies: ReactJs, NestJs framework (NodeJs), Typescipt, PostgresQL, MySQL (TypeORM), Docker, ...',
			},
			{
				time: this.translocoService.translate('startTimeAtAntTech'),
				title: 'Software Development Engineer',
				company: '@ANT-TECH',
				url: 'https://ant-tech.eu/',
				position: 'Fullstack web developer',
				tech: 'Technologies: Angular, NestJs framework (NodeJs), GraphQL, Typescipt, MongoDB, Docker, ...',
			},
			{
				time: this.translocoService.translate('startTimeAtJaneto'),
				title: 'Software Development Engineer',
				company: '@JANETO',
				url: 'https://janeto.com/vi/',
				position: 'Fullstack web developer',
				tech: 'Technologies: Angular, NodeJs, Typescipt, MongoDB.',
			},
		];
	}
}
