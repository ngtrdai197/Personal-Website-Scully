import { ApplicationRef, Component, OnDestroy } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'
import { interval, concat, Subscription } from 'rxjs'
import { tap, mapTo, startWith, first } from 'rxjs/operators'
@Component({
  selector: 'app-side',
  templateUrl: 'side.component.html',
  styleUrls: ['side.component.scss'],
})
export class SideComponent implements OnDestroy {
  public hasUpdate$ = this.swUpdate.available.pipe(
    tap(console.log),
    mapTo(true),
    startWith(false),
  )
  public subscription: Subscription

  constructor(
    readonly appRef: ApplicationRef,
    private readonly swUpdate: SwUpdate,
  ) {
    if (swUpdate.isEnabled) {
      const appIsStable$ = appRef.isStable.pipe(
        first((isStable) => isStable === true),
      )
      const everyFiveMinutes$ = interval(1 * 60 * 1000) // every 5 minutes
      const everyFiveMinutesOnceAppIsStable$ = concat(
        appIsStable$,
        everyFiveMinutes$,
      )
      this.subscription = everyFiveMinutesOnceAppIsStable$.subscribe(() =>
        swUpdate.checkForUpdate(),
      )
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  public reload(hasUpdate: boolean) {
    if (!hasUpdate) return
    window?.location?.reload()
  }
}
