import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-introduce',
	template: `
		<ng-container *transloco="let t">
			<h3 class="mb-2 leading-6 text-3xl font-medium">{{ t('me') }}</h3>
			<h6 class="mb-3 leading-6 italic">Junior Web Developer</h6>

			<p class="mb-1 leading-6 text-sm">{{ t('hi') }}</p>
			<p class="mb-1 leading-6 text-sm">{{ t('school') }}</p>
			<p class="mb-1 leading-6 text-sm">
				{{ t('workAt') }}
				<a
					class="text-primary font-medium hover:underline"
					href="https://bnksolution.com/vi_VN/"
					target="_blank"
					rel="”noopener”"
				>
					B&K Solution </a
				>. {{ t('participatingAt')
				}}<a
					class="text-primary font-medium hover:underline"
					href="https://www.cimbbank.com.vn/vi/personal/home.html"
					target="_blank"
					rel="”noopener”"
				>
					CIMB</a
				>
				{{ t('bankInVietNam') }}
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
