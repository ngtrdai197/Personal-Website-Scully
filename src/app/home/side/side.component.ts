import { ApplicationRef, Component, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval, Subscription } from 'rxjs';
import { first, map, mapTo, startWith } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';

@Component({
	selector: 'app-side',
	templateUrl: 'side.component.html',
	styleUrls: ['side.component.scss'],
})
export class SideComponent implements OnDestroy {
	public hasUpdate$ = this.swUpdate.available.pipe(
		map(({ type }) => console.log(type)),
		mapTo(true),
		startWith(false),
	);
	public subscription: Subscription;

	constructor(
		readonly appRef: ApplicationRef,
		private readonly swUpdate: SwUpdate,
		private readonly transloco: TranslocoService,
	) {
		if (swUpdate.isEnabled) {
			const appIsStable$ = appRef.isStable.pipe(
				first(isStable => isStable === true),
			);
			const everyFiveMinutes$ = interval(5 * 60 * 1000); // every 5 minutes
			const everyFiveMinutesOnceAppIsStable$ = concat(
				appIsStable$,
				everyFiveMinutes$,
			);
			this.subscription = everyFiveMinutesOnceAppIsStable$.subscribe(() =>
				swUpdate.checkForUpdate(),
			);
		}
	}

	ngOnDestroy() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	public reload(hasUpdate: boolean) {
		if (!hasUpdate) return;
		window?.location?.reload();
	}

	public onChangeLanguage(language: string) {
		this.transloco.setActiveLang(language);
		localStorage.setItem('currentLang', language);
	}
}
