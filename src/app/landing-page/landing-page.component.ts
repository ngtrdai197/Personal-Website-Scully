import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	template: `
		<section class="landing-page h-screen w-screen relative overflow-hidden">
			<div class="full-bg w-full h-full absolute top-0 left-0"></div>
			<Particles id="tsparticles" [options]="particlesOptions"></Particles>
			<div
				id="typing"
				class="text-white text-3xl font-bold flex flex-col items-center w-full"
			>
				<p>Hello, I'm Dai !!!</p>
				<a
					routerLink="/iadn"
					class="italic font-medium text-white text-sm hover:underline hover:text-blue-500"
					>View me</a
				>
			</div>
		</section>
	`,
	styles: [
		`
			.landing-page {
				background: url('./assets/full-bg.jpg') no-repeat;
				background-position: center;
				background-size: cover;
			}
			.full-bg {
				background-color: #4b81a2;
				opacity: 0.5;
			}
			#typing {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			#typing a:hover {
				cursor: pointer;
			}
		`,
	],
})
export class LandingPageComponent implements OnInit {
	particlesOptions = {
		fpsLimit: 60,
		interactivity: {
			detectsOn: 'canvas',
			events: {
				onClick: {
					enable: true,
					mode: 'push',
				},
				onHover: {
					enable: true,
					mode: 'repulse',
				},
				resize: true,
			},
			modes: {
				bubble: {
					distance: 400,
					duration: 2,
					opacity: 0.8,
					size: 40,
					speed: 3,
				},
				push: {
					quantity: 4,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
			},
		},
		particles: {
			color: {
				value: '#ffffff',
			},
			links: {
				color: '#ffffff',
				distance: 150,
				enable: true,
				opacity: 0.7,
				width: 1,
			},
			collisions: {
				enable: true,
			},
			move: {
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: false,
				speed: 7,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					value_area: 800,
				},
				value: 80,
			},
			opacity: {
				value: 0.7,
			},
			shape: {
				type: 'circle',
			},
			size: {
				random: true,
				value: 5,
			},
		},
		detectRetina: true,
	};
	constructor() {}

	ngOnInit(): void {}
}
