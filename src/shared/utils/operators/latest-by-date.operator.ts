import { tap } from 'rxjs/operators';

// Source from: https://github.com/nartc/tnc-scully/blob/main/src/app/shared/utils/operators/latest-by-date.operator.ts

export function latestByDate<
	TItems extends Array<{ publishedAt?: string }> = Array<{
		publishedAt?: string;
	}>,
>() {
	return tap<TItems>(items =>
		items.sort((a, b) => {
			const d1 = new Date(a.publishedAt);
			const d2 = new Date(b.publishedAt);
			return d2.getTime() - d1.getTime();
		}),
	);
}
