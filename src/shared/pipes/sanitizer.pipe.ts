import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'sanitizer',
})
export class SanitizerPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	transform(value: string): unknown {
		return this.sanitizer.bypassSecurityTrustHtml(value);
	}
}
