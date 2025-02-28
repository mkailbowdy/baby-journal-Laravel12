import { i as S, m as V, w as a, g as b, h as d, d as g, e as r, u as s, b as t, C as v, s as w, o as y } from './app-BvLwQa5L.js';
import { _ as k } from './AppLayout.vue_vue_type_script_setup_true_lang-D79AWIv_.js';
import { _ as I } from './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
import './index-DqefOai5.js';
import { b as f, a as m, _ as u } from './Label.vue_vue_type_script_setup_true_lang-DwuZXgNq.js';
import { a as C, _ as x } from './Layout.vue_vue_type_script_setup_true_lang-Bz6dgga1.js';
import { S as $ } from './transition-DX-IJY94.js';
const N = { class: 'space-y-6' },
    P = { class: 'grid gap-2' },
    E = { class: 'grid gap-2' },
    U = { class: 'grid gap-2' },
    B = { class: 'flex items-center gap-4' },
    D = g({
        __name: 'Password',
        props: { className: {} },
        setup(M) {
            const c = [{ title: 'Password settings', href: '/settings/password' }],
                l = w(null),
                p = w(null),
                o = v({ current_password: '', password: '', password_confirmation: '' }),
                _ = () => {
                    o.put(route('password.update'), {
                        preserveScroll: !0,
                        onSuccess: () => o.reset(),
                        onError: (i) => {
                            i.password && (o.reset('password', 'password_confirmation'), l.value instanceof HTMLInputElement && l.value.focus()),
                                i.current_password && (o.reset('current_password'), p.value instanceof HTMLInputElement && p.value.focus());
                        },
                    });
                };
            return (i, e) => (
                y(),
                b(
                    k,
                    { breadcrumbs: c },
                    {
                        default: a(() => [
                            r(s(V), { title: 'Profile settings' }),
                            r(x, null, {
                                default: a(() => [
                                    t('div', N, [
                                        r(C, {
                                            title: 'Update password',
                                            description: 'Ensure your account is using a long, random password to stay secure',
                                        }),
                                        t(
                                            'form',
                                            { onSubmit: S(_, ['prevent']), class: 'space-y-6' },
                                            [
                                                t('div', P, [
                                                    r(
                                                        s(u),
                                                        { for: 'current_password' },
                                                        { default: a(() => e[3] || (e[3] = [d('Current password')])), _: 1 },
                                                    ),
                                                    r(
                                                        s(m),
                                                        {
                                                            id: 'current_password',
                                                            ref_key: 'currentPasswordInput',
                                                            ref: p,
                                                            modelValue: s(o).current_password,
                                                            'onUpdate:modelValue': e[0] || (e[0] = (n) => (s(o).current_password = n)),
                                                            type: 'password',
                                                            class: 'mt-1 block w-full',
                                                            autocomplete: 'current-password',
                                                            placeholder: 'Current password',
                                                        },
                                                        null,
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                    r(f, { message: s(o).errors.current_password }, null, 8, ['message']),
                                                ]),
                                                t('div', E, [
                                                    r(s(u), { for: 'password' }, { default: a(() => e[4] || (e[4] = [d('New password')])), _: 1 }),
                                                    r(
                                                        s(m),
                                                        {
                                                            id: 'password',
                                                            ref_key: 'passwordInput',
                                                            ref: l,
                                                            modelValue: s(o).password,
                                                            'onUpdate:modelValue': e[1] || (e[1] = (n) => (s(o).password = n)),
                                                            type: 'password',
                                                            class: 'mt-1 block w-full',
                                                            autocomplete: 'new-password',
                                                            placeholder: 'New password',
                                                        },
                                                        null,
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                    r(f, { message: s(o).errors.password }, null, 8, ['message']),
                                                ]),
                                                t('div', U, [
                                                    r(
                                                        s(u),
                                                        { for: 'password_confirmation' },
                                                        { default: a(() => e[5] || (e[5] = [d('Confirm password')])), _: 1 },
                                                    ),
                                                    r(
                                                        s(m),
                                                        {
                                                            id: 'password_confirmation',
                                                            modelValue: s(o).password_confirmation,
                                                            'onUpdate:modelValue': e[2] || (e[2] = (n) => (s(o).password_confirmation = n)),
                                                            type: 'password',
                                                            class: 'mt-1 block w-full',
                                                            autocomplete: 'new-password',
                                                            placeholder: 'Confirm password',
                                                        },
                                                        null,
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                    r(f, { message: s(o).errors.password_confirmation }, null, 8, ['message']),
                                                ]),
                                                t('div', B, [
                                                    r(
                                                        s(I),
                                                        { disabled: s(o).processing },
                                                        { default: a(() => e[6] || (e[6] = [d('Save password')])), _: 1 },
                                                        8,
                                                        ['disabled'],
                                                    ),
                                                    r(
                                                        s($),
                                                        {
                                                            show: s(o).recentlySuccessful,
                                                            enter: 'transition ease-in-out',
                                                            'enter-from': 'opacity-0',
                                                            leave: 'transition ease-in-out',
                                                            'leave-to': 'opacity-0',
                                                        },
                                                        {
                                                            default: a(
                                                                () => e[7] || (e[7] = [t('p', { class: 'text-sm text-neutral-600' }, 'Saved', -1)]),
                                                            ),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['show'],
                                                    ),
                                                ]),
                                            ],
                                            32,
                                        ),
                                    ]),
                                ]),
                                _: 1,
                            }),
                        ]),
                        _: 1,
                    },
                )
            );
        },
    });
export { D as default };
