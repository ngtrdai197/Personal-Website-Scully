import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-introduce',
	template: `
		<ng-container *transloco="let t">
			<h3 class="mb-2 leading-6 text-3xl font-medium">{{ t('me') }}</h3>
			<h5 class="mb-3 leading-6 italic">Backend Developer</h5>

			<p class="mb-1 leading-6 text-sm">{{ t('hi') }}</p>
			<p class="mb-1 leading-6 text-sm">{{ t('school') }}</p>
			<p class="mb-1 leading-6 text-sm">
				{{ t('workAt') }}
				<a
					class="text-primary font-medium hover:underline"
					href="https://cryptopie-labo.com/"
					target="_blank"
					rel="”noopener”"
				>
					Cryptopie-Labo</a
				>. {{ t('participatingAt')
				}}<a
					class="text-primary font-medium hover:underline"
					href="https://bitcastle.io/"
					target="_blank"
					rel="”noopener”"
				>
				Bitcastle</a
				>
			</p>
			<p class="mb-1 leading-6 text-sm">{{ t('stackTech') }}</p>
			<p class="mb-1 leading-6 text-sm">{{ t('mobileTech') }}</p>
			<p class="mb-1 leading-6 text-sm">{{ t('interesting') }}</p>
		</ng-container>
	`,
})
export class IntroduceComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
