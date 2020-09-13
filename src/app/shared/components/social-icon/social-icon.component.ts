import { Component, OnInit } from '@angular/core'

import { facebook, twitter } from '../../svgIcon'
import { ISocial } from '@/app/core/models/social.interface'

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss'],
})
export class SocialIconComponent implements OnInit {
  public socials: Array<ISocial> = [
    { svgLink: twitter, link: 'https://github.com/nartc' },
    { svgLink: facebook, link: 'https://www.linkedin.com/in/chauntran/' },
    { svgLink: facebook, link: 'https://www.linkedin.com/in/chauntran/' },
    { svgLink: facebook, link: 'https://www.linkedin.com/in/chauntran/' },
  ]
  constructor() {}

  ngOnInit() {}
}
