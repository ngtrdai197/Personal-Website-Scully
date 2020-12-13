import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-introduce',
  template: `
    <div class="sec-about p-4 ">
      <p class="mb-1">
        I am currently a final year student of the post and telecommunications
        technology school. Information technology major!
      </p>
      <p class="mb-1">
        I learned how to build a website with the Front-End: Angular framework,
        and a bit with Reactjs - Vuejs.
      </p>
      <p class="mb-1">
        In life I like to do and learn new things, but in work I like to learn
        new languages, good solutions to apply to work. 
      </p>
    </div>
  `,
  styles: [``],
})
export class IntroduceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
