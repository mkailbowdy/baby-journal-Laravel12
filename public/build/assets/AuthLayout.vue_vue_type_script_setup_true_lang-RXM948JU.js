import { c as d, b as p } from './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
import { a as _, d as a, o as c, u as f, r as i, P as m, e as o, w as r, t as s, b as t, g as u } from './app-BvLwQa5L.js'; /**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S = d('LoaderCircleIcon', [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]]),
    h = { class: 'flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10' },
    x = { class: 'w-full max-w-sm' },
    g = { class: 'flex flex-col gap-8' },
    v = { class: 'flex flex-col items-center gap-4' },
    y = { class: 'mb-1 flex h-9 w-9 items-center justify-center rounded-md' },
    k = { class: 'sr-only' },
    w = { class: 'space-y-2 text-center' },
    L = { class: 'text-xl font-medium' },
    b = { class: 'text-center text-sm text-muted-foreground' },
    B = a({
        __name: 'AuthSimpleLayout',
        props: { title: {}, description: {} },
        setup(n) {
            return (e, l) => (
                c(),
                _('div', h, [
                    t('div', x, [
                        t('div', g, [
                            t('div', v, [
                                o(
                                    f(m),
                                    { href: e.route('home'), class: 'flex flex-col items-center gap-2 font-medium' },
                                    {
                                        default: r(() => [
                                            t('div', y, [o(p, { class: 'size-9 fill-current text-[var(--foreground)] dark:text-white' })]),
                                            t('span', k, s(e.title), 1),
                                        ]),
                                        _: 1,
                                    },
                                    8,
                                    ['href'],
                                ),
                                t('div', w, [t('h1', L, s(e.title), 1), t('p', b, s(e.description), 1)]),
                            ]),
                            i(e.$slots, 'default'),
                        ]),
                    ]),
                ])
            );
        },
    }),
    j = a({
        __name: 'AuthLayout',
        props: { title: {}, description: {} },
        setup(n) {
            return (e, l) => (
                c(),
                u(B, { title: e.title, description: e.description }, { default: r(() => [i(e.$slots, 'default')]), _: 3 }, 8, [
                    'title',
                    'description',
                ])
            );
        },
    });
export { j as _, S as L };
