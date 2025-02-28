import {
    N as _,
    b,
    p as f,
    M as g,
    k as h,
    a as i,
    w as k,
    L as m,
    o as n,
    u as o,
    d as r,
    K as u,
    c as V,
    g as v,
    r as w,
    t as x,
} from './app-BvLwQa5L.js';
import { a as c, V as y } from './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
import { u as B } from './index-DqefOai5.js';
const E = r({
        __name: 'Input',
        props: { defaultValue: {}, modelValue: {}, class: {} },
        emits: ['update:modelValue'],
        setup(t, { emit: e }) {
            const s = t,
                a = B(s, 'modelValue', e, { passive: !0, defaultValue: s.defaultValue });
            return (M, d) =>
                u(
                    (n(),
                    i(
                        'input',
                        {
                            'onUpdate:modelValue': d[0] || (d[0] = (p) => (g(a) ? (a.value = p) : null)),
                            class: f(
                                o(c)(
                                    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                                    s.class,
                                ),
                            ),
                        },
                        null,
                        2,
                    )),
                    [[m, o(a)]],
                );
        },
    }),
    C = { class: 'text-sm text-red-600 dark:text-red-500' },
    I = r({
        __name: 'InputError',
        props: { message: {} },
        setup(t) {
            return (e, s) => u((n(), i('div', null, [b('p', C, x(e.message), 1)], 512)), [[_, e.message]]);
        },
    }),
    L = r({
        __name: 'Label',
        props: { for: {}, asChild: { type: Boolean }, as: {}, class: {} },
        setup(t) {
            const e = t,
                s = V(() => {
                    const { class: l, ...a } = e;
                    return a;
                });
            return (l, a) => (
                n(),
                v(
                    o(y),
                    h(s.value, {
                        class: o(c)('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', e.class),
                    }),
                    { default: k(() => [w(l.$slots, 'default')]), _: 3 },
                    16,
                    ['class'],
                )
            );
        },
    });
export { L as _, E as a, I as b };
