import { a as _, e as a, C as c, j as d, d as f, m as g, h as l, o as m, g as n, b as o, w as r, u as s, t as w, i as x } from './app-BvLwQa5L.js';
import { _ as V } from './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
import { L as $, _ as C } from './AuthLayout.vue_vue_type_script_setup_true_lang-RXM948JU.js';
import './index-DqefOai5.js';
import { a as b, b as k, _ as y } from './Label.vue_vue_type_script_setup_true_lang-DwuZXgNq.js';
import { _ as v } from './TextLink.vue_vue_type_script_setup_true_lang-BsTg7Kg5.js';
const B = { key: 0, class: 'mb-4 text-center text-sm font-medium text-green-600' },
    E = { class: 'space-y-6' },
    N = { class: 'grid gap-2' },
    h = { class: 'my-6 flex items-center justify-start' },
    F = { class: 'space-x-1 text-center text-sm text-muted-foreground' },
    T = f({
        __name: 'ForgotPassword',
        props: { status: {} },
        setup(j) {
            const t = c({ email: '' }),
                p = () => {
                    t.post(route('password.email'));
                };
            return (i, e) => (
                m(),
                n(
                    C,
                    { title: 'Forgot password', description: 'Enter your email to receive a password reset link' },
                    {
                        default: r(() => [
                            a(s(g), { title: 'Forgot password' }),
                            i.status ? (m(), _('div', B, w(i.status), 1)) : d('', !0),
                            o('div', E, [
                                o(
                                    'form',
                                    { onSubmit: x(p, ['prevent']) },
                                    [
                                        o('div', N, [
                                            a(s(y), { for: 'email' }, { default: r(() => e[1] || (e[1] = [l('Email address')])), _: 1 }),
                                            a(
                                                s(b),
                                                {
                                                    id: 'email',
                                                    type: 'email',
                                                    name: 'email',
                                                    autocomplete: 'off',
                                                    modelValue: s(t).email,
                                                    'onUpdate:modelValue': e[0] || (e[0] = (u) => (s(t).email = u)),
                                                    autofocus: '',
                                                    placeholder: 'email@example.com',
                                                },
                                                null,
                                                8,
                                                ['modelValue'],
                                            ),
                                            a(k, { message: s(t).errors.email }, null, 8, ['message']),
                                        ]),
                                        o('div', h, [
                                            a(
                                                s(V),
                                                { class: 'w-full', disabled: s(t).processing },
                                                {
                                                    default: r(() => [
                                                        s(t).processing ? (m(), n(s($), { key: 0, class: 'h-4 w-4 animate-spin' })) : d('', !0),
                                                        e[2] || (e[2] = l(' Email password reset link ')),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                ['disabled'],
                                            ),
                                        ]),
                                    ],
                                    32,
                                ),
                                o('div', F, [
                                    e[4] || (e[4] = o('span', null, 'Or, return to', -1)),
                                    a(v, { href: i.route('login') }, { default: r(() => e[3] || (e[3] = [l('log in')])), _: 1 }, 8, ['href']),
                                ]),
                            ]),
                        ]),
                        _: 1,
                    },
                )
            );
        },
    });
export { T as default };
