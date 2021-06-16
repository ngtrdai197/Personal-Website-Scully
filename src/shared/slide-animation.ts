import {
	trigger,
	transition,
	style,
	query,
	animateChild,
	group,
	animate,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
	transition('* <=> *', [
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%',
			}),
		]),
		query(':enter', [style({ right: '-100%' })], { optional: true }),
		query(':leave', animateChild(), { optional: true }),
		group([
			query(
				':leave',
				[animate('300ms ease-in-out', style({ right: '100%' }))],
				{
					optional: true,
				},
			),
			query(':enter', [animate('300ms ease-in-out', style({ right: '0%' }))], {
				optional: true,
			}),
		]),
		query(':enter', animateChild(), { optional: true }),
	]),
]);

export const swipeDownInAnimation = trigger('routeAnimations', [
	transition('* <=> *', [
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%',
			}),
		]),
		query(':enter', [style({ top: '-100%' })], { optional: true }),
		query(':leave', animateChild(), { optional: true }),
		group([
			query(':leave', [animate('300ms ease-in-out', style({ top: '100%' }))], {
				optional: true,
			}),
			query(':enter', [animate('300ms ease-in-out', style({ top: '0%' }))], {
				optional: true,
			}),
		]),
		query(':enter', animateChild(), { optional: true }),
	]),
]);
