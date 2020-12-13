import { Component, HostBinding, OnInit } from '@angular/core'

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.scss'],
})
export class CopyRightComponent implements OnInit {
  @HostBinding('class') fontSize = 'text-sm cursor-pointer'
  constructor() {}

  ngOnInit(): void {}
}
