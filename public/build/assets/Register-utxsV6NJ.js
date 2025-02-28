import { C as _, m as c, b as d, u as e, d as g, h as l, e as o, g as p, w as t, o as u, j as V, i as x } from './app-BvLwQa5L.js';
import { _ as y } from './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
import { L as C, _ as v } from './AuthLayout.vue_vue_type_script_setup_true_lang-RXM948JU.js';
import './index-DqefOai5.js';
import { _ as i, b as m, a as n } from './Label.vue_vue_type_script_setup_true_lang-DwuZXgNq.js';
import { _ as b } from './TextLink.vue_vue_type_script_setup_true_lang-BsTg7Kg5.js';
const $ = { class: 'grid gap-6' },
    N = { class: 'grid gap-2' },
    q = { class: 'grid gap-2' },
    U = { class: 'grid gap-2' },
    k = { class: 'grid gap-2' },
    B = { class: 'text-center text-sm text-muted-foreground' },
    M = g({
        __name: 'Register',
        setup(L) {
            const a = _({ name: '', email: '', password: '', password_confirmation: '' }),
                f = () => {
                    a.post(route('register'), { onFinish: () => a.reset('password', 'password_confirmation') });
                };
            return (w, s) => (
                u(),
                p(
                    v,
                    { title: 'Create an account', description: 'Enter your details below to create your account' },
                    {
                        default: t(() => [
                            o(e(c), { title: 'Register' }),
                            d(
                                'form',
                                { onSubmit: x(f, ['prevent']), class: 'flex flex-col gap-6' },
                                [
                                    d('div', $, [
                                        d('div', N, [
                                            o(e(i), { for: 'name' }, { default: t(() => s[4] || (s[4] = [l('Name')])), _: 1 }),
                                            o(
                                                e(n),
                                                {
                                                    id: 'name',
                                                    type: 'text',
                                                    required: '',
                                                    autofocus: '',
                                                    tabindex: 1,
                                                    autocomplete: 'name',
                                                    modelValue: e(a).name,
                                                    'onUpdate:modelValue': s[0] || (s[0] = (r) => (e(a).name = r)),
                                                    placeholder: 'Full name',
                                                },
                                                null,
                                                8,
                                                ['modelValue'],
                                            ),
                                            o(m, { message: e(a).errors.name }, null, 8, ['message']),
                                        ]),
                                        d('div', q, [
                                            o(e(i), { for: 'email' }, { default: t(() => s[5] || (s[5] = [l('Email address')])), _: 1 }),
                                            o(
                                                e(n),
                                                {
                                                    id: 'email',
                                                    type: 'email',
                                                    required: '',
                                                    tabindex: 2,
                                                    autocomplete: 'email',
                                                    modelValue: e(a).email,
                                                    'onUpdate:modelValue': s[1] || (s[1] = (r) => (e(a).email = r)),
                                                    placeholder: 'email@example.com',
                                                },
                                                null,
                                                8,
                                                ['modelValue'],
                                            ),
                                            o(m, { message: e(a).errors.email }, null, 8, ['message']),
                                        ]),
                                        d('div', U, [
                                            o(e(i), { for: 'password' }, { default: t(() => s[6] || (s[6] = [l('Password')])), _: 1 }),
                                            o(
                                                e(n),
                                                {
                                                    id: 'password',
                                                    type: 'password',
                                                    required: '',
                                                    tabindex: 3,
                                                    autocomplete: 'new-password',
                                                    modelValue: e(a).password,
                                                    'onUpdate:modelValue': s[2] || (s[2] = (r) => (e(a).password = r)),
                                                    placeholder: 'Password',
                                                },
                                                null,
                                                8,
                                                ['modelValue'],
                                            ),
                                            o(m, { message: e(a).errors.password }, null, 8, ['message']),
                                        ]),
                                        d('div', k, [
                                            o(
                                                e(i),
                                                { for: 'password_confirmation' },
                                                { default: t(() => s[7] || (s[7] = [l('Confirm password')])), _: 1 },
                                            ),
                                            o(
                                                e(n),
                                                {
                                                    id: 'password_confirmation',
                                                    type: 'password',
                                                    required: '',
                                                    tabindex: 4,
                                                    autocomplete: 'new-password',
                                                    modelValue: e(a).password_confirmation,
                                                    'onUpdate:modelValue': s[3] || (s[3] = (r) => (e(a).password_confirmation = r)),
                                                    placeholder: 'Confirm password',
                                                },
                                                null,
                                                8,
                                                ['modelValue'],
                                            ),
                                            o(m, { message: e(a).errors.password_confirmation }, null, 8, ['message']),
                                        ]),
                                        o(
                                            e(y),
                                            { type: 'submit', class: 'mt-2 w-full', tabindex: '5', disabled: e(a).processing },
                                            {
                                                default: t(() => [
                                                    e(a).processing ? (u(), p(e(C), { key: 0, class: 'h-4 w-4 animate-spin' })) : V('', !0),
                                                    s[8] || (s[8] = l(' Create account ')),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            ['disabled'],
                                        ),
                                    ]),
                                    d('div', B, [
                                        s[10] || (s[10] = l(' Already have an account? ')),
                                        o(
                                            b,
                                            { href: w.route('login'), class: 'underline underline-offset-4', tabindex: 6 },
                                            { default: t(() => s[9] || (s[9] = [l('Log in')])), _: 1 },
                                            8,
                                            ['href'],
                                        ),
                                    ]),
                                ],
                                32,
                            ),
                        ]),
                        _: 1,
                    },
                )
            );
        },
    });
export { M as default };
