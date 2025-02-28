import {
    P as $,
    o as a,
    k as b,
    j as f,
    p as h,
    r as k,
    e as l,
    a as o,
    d as p,
    h as P,
    t as r,
    b as s,
    u as t,
    w as u,
    n as v,
    g as w,
    F as x,
    c as y,
} from './app-BvLwQa5L.js';
import { e as B, _ as C, a as m } from './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
const g = p({
        __name: 'Separator',
        props: { orientation: {}, decorative: { type: Boolean }, asChild: { type: Boolean }, as: {}, class: {}, label: {} },
        setup(c) {
            const e = c,
                n = y(() => {
                    const { class: d, ..._ } = e;
                    return _;
                });
            return (d, _) => (
                a(),
                w(
                    t(B),
                    b(n.value, { class: t(m)('relative shrink-0 bg-border', e.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full', e.class) }),
                    {
                        default: u(() => [
                            e.label
                                ? (a(),
                                  o(
                                      'span',
                                      {
                                          key: 0,
                                          class: h(
                                              t(m)(
                                                  'absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-xs text-muted-foreground',
                                                  e.orientation === 'vertical' ? 'w-[1px] px-1 py-2' : 'h-[1px] px-2 py-1',
                                              ),
                                          ),
                                      },
                                      r(e.label),
                                      3,
                                  ))
                                : f('', !0),
                        ]),
                        _: 1,
                    },
                    16,
                    ['class'],
                )
            );
        },
    }),
    N = { class: 'mb-0.5 text-base font-medium' },
    S = { key: 0, class: 'text-sm text-muted-foreground' },
    q = p({
        __name: 'HeadingSmall',
        props: { title: {}, description: {} },
        setup(c) {
            return (e, n) => (a(), o('header', null, [s('h3', N, r(e.title), 1), e.description ? (a(), o('p', S, r(e.description), 1)) : f('', !0)]));
        },
    }),
    V = { class: 'mb-8 space-y-0.5' },
    j = { class: 'text-xl font-semibold tracking-tight' },
    F = { key: 0, class: 'text-sm text-muted-foreground' },
    H = p({
        __name: 'Heading',
        props: { title: {}, description: {} },
        setup(c) {
            return (e, n) => (
                a(),
                o(
                    x,
                    null,
                    [
                        s('div', V, [s('h2', j, r(e.title), 1), e.description ? (a(), o('p', F, r(e.description), 1)) : f('', !0)]),
                        l(t(g), { class: 'my-6' }),
                    ],
                    64,
                )
            );
        },
    }),
    L = { class: 'px-4 py-6' },
    z = { class: 'flex flex-col space-y-8 md:space-y-0 lg:flex-row lg:space-x-12 lg:space-y-0' },
    A = { class: 'w-full max-w-xl lg:w-48' },
    D = { class: 'flex flex-col space-x-0 space-y-1' },
    E = { class: 'flex-1 md:max-w-2xl' },
    I = { class: 'max-w-xl space-y-12' },
    G = p({
        __name: 'Layout',
        setup(c) {
            const e = [
                    { title: 'Profile', href: '/settings/profile' },
                    { title: 'Password', href: '/settings/password' },
                    { title: 'Appearance', href: '/settings/appearance' },
                ],
                n = window.location.pathname;
            return (d, _) => (
                a(),
                o('div', L, [
                    l(H, { title: 'Settings', description: 'Manage your profile and account settings' }),
                    s('div', z, [
                        s('aside', A, [
                            s('nav', D, [
                                (a(),
                                o(
                                    x,
                                    null,
                                    v(e, (i) =>
                                        l(
                                            t(C),
                                            {
                                                key: i.href,
                                                variant: 'ghost',
                                                class: h(['w-full justify-start', { 'bg-muted': t(n) === i.href }]),
                                                'as-child': '',
                                            },
                                            {
                                                default: u(() => [
                                                    l(t($), { href: i.href }, { default: u(() => [P(r(i.title), 1)]), _: 2 }, 1032, ['href']),
                                                ]),
                                                _: 2,
                                            },
                                            1032,
                                            ['class'],
                                        ),
                                    ),
                                    64,
                                )),
                            ]),
                        ]),
                        l(t(g), { class: 'my-6 md:hidden' }),
                        s('div', E, [s('section', I, [k(d.$slots, 'default')])]),
                    ]),
                ])
            );
        },
    });
export { G as _, q as a };
