import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-my-cv',
	template: ` <embed #pdf [attr.src]="pdfUrl" type="application/pdf" /> `,
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
	@ViewChild('pdf') pdf: TemplateRef<any>;
	public pdfUrl = this.sanitizerService.bypassSecurityTrustResourceUrl(
		'/assets/NGUYEN-TRONG-DAI.pdf',
	);
	constructor(private readonly sanitizerService: DomSanitizer) {}
}
