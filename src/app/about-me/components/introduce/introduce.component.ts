import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-introduce',
	template: `
		<h3 class="mb-2 leading-6 text-3xl font-medium" transloco="me"></h3>
		<h6 class="mb-3 leading-6 italic">Junior Web Developer</h6>

		<p class="mb-1 leading-6" transloco="hi"></p>
		<p class="mb-1 leading-6" transloco="school"></p>
		<p class="mb-1 leading-6">
			{{ 'workAt' | transloco }}
			<a
				class="text-primary font-medium hover:underline"
				href="https://bnksolution.com/vi_VN/"
				target="_blank"
			>
				B&K Solution </a
			>. {{ 'participatingAt' | transloco
			}}<a
				class="text-primary font-medium hover:underline"
				href="https://www.cimbbank.com.vn/vi/personal/home.html"
				target="_blank"
			>
				CIMB</a
			>
			{{ 'bankInVietNam' | transloco }}
		</p>
		<p class="mb-1 leading-6" transloco="stackTech"></p>
		<p class="mb-1 leading-6" transloco="mobileTech"></p>
		<p class="mb-1 leading-6" transloco="interesting"></p>
	`,
	styles: [``],
})
export class IntroduceComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
