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

	public get getExperiences(): IExperience[] {
		return [
			{
				time: this.translocoService.translate('startTimeAtCPL'),
				title: 'Software Development Engineer',
				company: '@CRYPTOPIE-LABO',
				url: 'https://cryptopie-labo.com/',
				position: 'Backend developer',
				tech: 'Technologies: NestJs, MySQL, Redis, Docker, K8s, Kafka, gRPC, ...',
			},
			{
				time: this.translocoService.translate('startTimeAtBNK'),
				title: 'Software Development Engineer',
				company: '@BnK SOLUTION',
				url: 'https://bnksolution.com/vi_VN/',
				position: 'Fullstack web developer',
				tech: 'Technologies: ReactJs, NestJs, Typescipt, PostgresQL, MySQL, Docker, ...',
			},
			{
				time: this.translocoService.translate('startTimeAtAntTech'),
				title: 'Software Development Engineer',
				company: '@ANT-TECH',
				url: 'https://ant-tech.eu/',
				position: 'Fullstack web developer',
				tech: 'Technologies: Angular, NestJs, GraphQL, Typescipt, MongoDB, Docker, ...',
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
