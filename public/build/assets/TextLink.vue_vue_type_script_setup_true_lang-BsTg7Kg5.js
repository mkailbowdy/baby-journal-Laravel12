import { o as a, r as d, P as n, g as o, d as r, w as s, u as t } from './app-BvLwQa5L.js';
const l = r({
    __name: 'TextLink',
    props: { href: {}, tabindex: {}, method: {}, as: {} },
    setup(i) {
        return (e, u) => (
            a(),
            o(
                t(n),
                {
                    href: e.href,
                    tabindex: e.tabindex,
                    method: e.method,
                    as: e.as,
                    class: 'hover:decoration-current! text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out dark:decoration-neutral-500',
                },
                { default: s(() => [d(e.$slots, 'default')]), _: 3 },
                8,
                ['href', 'tabindex', 'method', 'as'],
            )
        );
    },
});
export { l as _ };
