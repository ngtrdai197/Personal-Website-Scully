import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-my-cv',
	template: ` <embed [attr.src]="pdfUrl" type="application/pdf" /> `,
	styles: [
		`
			embed {
				width: 100%;
				min-height: 100vh;
			}
		`,
	],
})
export class MyCvComponent {
	public pdfUrl = this.sanitizerService.bypassSecurityTrustResourceUrl(
		'/assets/NGUYEN-TRONG-DAI.pdf',
	);
	constructor(private readonly sanitizerService: DomSanitizer) {}
}
