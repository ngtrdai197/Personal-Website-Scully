import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-introduce',
  template: `
    <h3 class="mb-2 leading-6 text-3xl font-medium">I'm Dai Nguyen</h3>
    <h6 class="mb-3 leading-6 italic">Junior Web Developer</h6>

    <p class="mb-1 leading-6">Hello, I'm Dai Nguyen !</p>
    <p class="mb-1 leading-6">
      I graduated from Post and Telecommunication Institute of Technology,
      Faculty of Information Technology - majoring in software engineering at
      the end of 2019.
    </p>
    <p class="mb-1 leading-6">
      I am currently working as an engineer at
      <a
        class="text-primary font-medium hover:underline"
        href="https://bnksolution.com/vi_VN/"
        target="_blank"
      >
        B&K Solution</a
      >. Currently working and participating in software development at
      <a
        class="text-primary font-medium hover:underline"
        href="https://www.cimbbank.com.vn/vi/personal/home.html"
        target="_blank"
      >
        CIMB</a
      >
      bank in Vietnam.
    </p>
    <p class="mb-1 leading-6">
      I have a strong passion as a software engineer, I have always learned and
      researched from everywhere to be able to build high quality software, such
      as: Web App (Angular, React Js) , behind the Web App is: Nest Js.
    </p>
    <p class="mb-1 leading-6">
      Also, I'm learning more about the mobile world, with pretty cool
      technologies: Flutter, React Native.
    </p>
    <p class="mb-1 leading-6">
      In life I like to do and learn new things, but at work I always enjoy
      learning new things, languages, solutions and the best things for my work.
    </p>
  `,
  styles: [``],
})
export class IntroduceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
