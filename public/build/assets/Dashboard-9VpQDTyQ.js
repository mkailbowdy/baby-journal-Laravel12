import { u as _, a, c as b, b as e, m as h, o as i, F as p, e as r, d as t, w as u } from './app-BvLwQa5L.js';
import { _ as c } from './AppLayout.vue_vue_type_script_setup_true_lang-D79AWIv_.js';
import './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
import './index-DqefOai5.js';
const m = { class: 'absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20', fill: 'none' },
    f = ['id'],
    v = ['fill'],
    o = t({
        __name: 'PlaceholderPattern',
        setup(n) {
            const d = b(() => `pattern-${Math.random().toString(36).substring(2, 9)}`);
            return (l, s) => (
                i(),
                a('svg', m, [
                    e('defs', null, [
                        e(
                            'pattern',
                            { id: d.value, x: '0', y: '0', width: '8', height: '8', patternUnits: 'userSpaceOnUse' },
                            s[0] || (s[0] = [e('path', { d: 'M-1 5L5 -1M3 9L8.5 3.5', 'stroke-width': '0.5' }, null, -1)]),
                            8,
                            f,
                        ),
                    ]),
                    e('rect', { stroke: 'none', fill: `url(#${d.value})`, width: '100%', height: '100%' }, null, 8, v),
                ])
            );
        },
    }),
    x = { class: 'flex h-full flex-1 flex-col gap-4 rounded-xl p-4' },
    k = { class: 'grid auto-rows-min gap-4 md:grid-cols-3' },
    g = { class: 'relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border' },
    w = { class: 'relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border' },
    $ = { class: 'relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border' },
    B = { class: 'relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border md:min-h-min' },
    L = t({
        __name: 'Dashboard',
        props: { name: {} },
        setup(n) {
            const d = [{ title: 'Dashboard', href: '/dashboard' }];
            return (l, s) => (
                i(),
                a(
                    p,
                    null,
                    [
                        r(_(h), { title: 'Dashboard' }),
                        r(
                            c,
                            { breadcrumbs: d },
                            {
                                default: u(() => [
                                    e('div', x, [e('div', k, [e('div', g, [r(o)]), e('div', w, [r(o)]), e('div', $, [r(o)])]), e('div', B, [r(o)])]),
                                ]),
                                _: 1,
                            },
                        ),
                    ],
                    64,
                )
            );
        },
    });
export { L as default };
