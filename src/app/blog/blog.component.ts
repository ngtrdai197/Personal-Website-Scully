import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewChecked,
} from '@angular/core'
import { ScullyRoutesService } from '@scullyio/ng-lib'
import { shareReplay, tap } from 'rxjs/operators'

import { HighlightService } from '../core/services/highlight.service'
import { ISeo, SeoService } from '../core/services'
import { environment as env } from '@/environments/environment'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit, AfterViewChecked {
  constructor(
    private highlightService: HighlightService,
    private readonly scullyRoutesService: ScullyRoutesService,
    private readonly seoService: SeoService,
  ) {}
  ngOnInit() {
    this.scullyRoutesService
      .getCurrent()
      .pipe(
        tap((blog: ISeo) => {
          this.seoService.update({
            ...blog,
            url: `${env.baseUrl}${blog.route}`,
          })
        }),
        shareReplay(1),
      )
      .subscribe()
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll()
  }
}
