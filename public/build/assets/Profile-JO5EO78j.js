import {
    r as _,
    w as a,
    i as A,
    c as B,
    j as C,
    k as D,
    u as e,
    d as f,
    g,
    x as h,
    m as I,
    h as m,
    P as M,
    s as N,
    o as p,
    v as P,
    e as s,
    C as S,
    b as u,
    y as U,
    p as V,
    a as y,
} from './app-BvLwQa5L.js';
import { _ as G, X as Y } from './AppLayout.vue_vue_type_script_setup_true_lang-D79AWIv_.js';
import {
    _ as b,
    O as F,
    P as H,
    I as j,
    d as K,
    S as O,
    $ as q,
    B as R,
    a as v,
    o as W,
    n as X,
    X as z,
} from './AppLogoIcon.vue_vue_type_script_setup_true_lang-BOEeQAcq.js';
import './index-DqefOai5.js';
import { a as $, b as k, _ as x } from './Label.vue_vue_type_script_setup_true_lang-DwuZXgNq.js';
import { a as E, _ as T } from './Layout.vue_vue_type_script_setup_true_lang-Bz6dgga1.js';
import { S as J } from './transition-DX-IJY94.js';
const L = f({
        __name: 'Dialog',
        props: { open: { type: Boolean }, defaultOpen: { type: Boolean }, modal: { type: Boolean } },
        emits: ['update:open'],
        setup(d, { emit: l }) {
            const n = O(d, l);
            return (c, t) => (p(), g(e(X), P(h(e(n))), { default: a(() => [_(c.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Q = f({
        __name: 'DialogClose',
        props: { asChild: { type: Boolean }, as: {} },
        setup(d) {
            const l = d;
            return (o, i) => (p(), g(e(z), P(h(l)), { default: a(() => [_(o.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Z = f({
        __name: 'DialogContent',
        props: {
            forceMount: { type: Boolean },
            trapFocus: { type: Boolean },
            disableOutsidePointerEvents: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
            class: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'openAutoFocus', 'closeAutoFocus'],
        setup(d, { emit: l }) {
            const o = d,
                i = l,
                n = B(() => {
                    const { class: t, ...r } = o;
                    return r;
                }),
                c = O(n, i);
            return (t, r) => (
                p(),
                g(e(j), null, {
                    default: a(() => [
                        s(e(q), {
                            class: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                        }),
                        s(
                            e(H),
                            D(e(c), {
                                class: e(v)(
                                    'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                                    o.class,
                                ),
                            }),
                            {
                                default: a(() => [
                                    _(t.$slots, 'default'),
                                    s(
                                        e(z),
                                        {
                                            class: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                                        },
                                        {
                                            default: a(() => [
                                                s(e(Y), { class: 'h-4 w-4' }),
                                                r[0] || (r[0] = u('span', { class: 'sr-only' }, 'Close', -1)),
                                            ]),
                                            _: 1,
                                        },
                                    ),
                                ]),
                                _: 3,
                            },
                            16,
                            ['class'],
                        ),
                    ]),
                    _: 3,
                })
            );
        },
    }),
    ee = f({
        __name: 'DialogDescription',
        props: { asChild: { type: Boolean }, as: {}, class: {} },
        setup(d) {
            const l = d,
                o = B(() => {
                    const { class: n, ...c } = l;
                    return c;
                }),
                i = F(o);
            return (n, c) => (
                p(),
                g(
                    e(K),
                    D(e(i), { class: e(v)('text-sm text-muted-foreground', l.class) }),
                    { default: a(() => [_(n.$slots, 'default')]), _: 3 },
                    16,
                    ['class'],
                )
            );
        },
    }),
    se = f({
        __name: 'DialogFooter',
        props: { class: {} },
        setup(d) {
            const l = d;
            return (o, i) => (
                p(), y('div', { class: V(e(v)('flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2', l.class)) }, [_(o.$slots, 'default')], 2)
            );
        },
    }),
    te = f({
        __name: 'DialogHeader',
        props: { class: {} },
        setup(d) {
            const l = d;
            return (o, i) => (
                p(), y('div', { class: V(e(v)('flex flex-col gap-y-1.5 text-center sm:text-left', l.class)) }, [_(o.$slots, 'default')], 2)
            );
        },
    }),
    ae = f({
        __name: 'DialogTitle',
        props: { asChild: { type: Boolean }, as: {}, class: {} },
        setup(d) {
            const l = d,
                o = B(() => {
                    const { class: n, ...c } = l;
                    return c;
                }),
                i = F(o);
            return (n, c) => (
                p(),
                g(
                    e(R),
                    D(e(i), { class: e(v)('text-lg font-semibold leading-none tracking-tight', l.class) }),
                    { default: a(() => [_(n.$slots, 'default')]), _: 3 },
                    16,
                    ['class'],
                )
            );
        },
    }),
    oe = f({
        __name: 'DialogTrigger',
        props: { asChild: { type: Boolean }, as: {} },
        setup(d) {
            const l = d;
            return (o, i) => (p(), g(e(W), P(h(l)), { default: a(() => [_(o.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    re = { class: 'space-y-6' },
    le = { class: 'space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10' },
    ne = { class: 'grid gap-2' },
    de = f({
        __name: 'DeleteUser',
        setup(d) {
            const l = N(null),
                o = S({ password: '' }),
                i = (c) => {
                    c.preventDefault(),
                        o.delete(route('profile.destroy'), {
                            preserveScroll: !0,
                            onSuccess: () => n(),
                            onError: () => {
                                var t;
                                return (t = l.value) == null ? void 0 : t.focus();
                            },
                            onFinish: () => o.reset(),
                        });
                },
                n = () => {
                    o.clearErrors(), o.reset();
                };
            return (c, t) => (
                p(),
                y('div', re, [
                    s(E, { title: 'Delete account', description: 'Delete your account and all of its resources' }),
                    u('div', le, [
                        t[7] ||
                            (t[7] = u(
                                'div',
                                { class: 'relative space-y-0.5 text-red-600 dark:text-red-100' },
                                [
                                    u('p', { class: 'font-medium' }, 'Warning'),
                                    u('p', { class: 'text-sm' }, 'Please proceed with caution, this cannot be undone.'),
                                ],
                                -1,
                            )),
                        s(e(L), null, {
                            default: a(() => [
                                s(
                                    e(oe),
                                    { 'as-child': '' },
                                    {
                                        default: a(() => [
                                            s(e(b), { variant: 'destructive' }, { default: a(() => t[1] || (t[1] = [m('Delete account')])), _: 1 }),
                                        ]),
                                        _: 1,
                                    },
                                ),
                                s(e(Z), null, {
                                    default: a(() => [
                                        u(
                                            'form',
                                            { class: 'space-y-6', onSubmit: i },
                                            [
                                                s(
                                                    e(te),
                                                    { class: 'space-y-3' },
                                                    {
                                                        default: a(() => [
                                                            s(e(ae), null, {
                                                                default: a(
                                                                    () => t[2] || (t[2] = [m('Are you sure you want to delete your account?')]),
                                                                ),
                                                                _: 1,
                                                            }),
                                                            s(e(ee), null, {
                                                                default: a(
                                                                    () =>
                                                                        t[3] ||
                                                                        (t[3] = [
                                                                            m(
                                                                                ' Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ',
                                                                            ),
                                                                        ]),
                                                                ),
                                                                _: 1,
                                                            }),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                u('div', ne, [
                                                    s(
                                                        e(x),
                                                        { for: 'password', class: 'sr-only' },
                                                        { default: a(() => t[4] || (t[4] = [m('Password')])), _: 1 },
                                                    ),
                                                    s(
                                                        e($),
                                                        {
                                                            id: 'password',
                                                            type: 'password',
                                                            name: 'password',
                                                            ref_key: 'passwordInput',
                                                            ref: l,
                                                            modelValue: e(o).password,
                                                            'onUpdate:modelValue': t[0] || (t[0] = (r) => (e(o).password = r)),
                                                            placeholder: 'Password',
                                                        },
                                                        null,
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                    s(k, { message: e(o).errors.password }, null, 8, ['message']),
                                                ]),
                                                s(
                                                    e(se),
                                                    { class: 'gap-2' },
                                                    {
                                                        default: a(() => [
                                                            s(
                                                                e(Q),
                                                                { 'as-child': '' },
                                                                {
                                                                    default: a(() => [
                                                                        s(
                                                                            e(b),
                                                                            { variant: 'secondary', onClick: n },
                                                                            { default: a(() => t[5] || (t[5] = [m(' Cancel ')])), _: 1 },
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                            ),
                                                            s(
                                                                e(b),
                                                                { variant: 'destructive', disabled: e(o).processing },
                                                                {
                                                                    default: a(
                                                                        () =>
                                                                            t[6] || (t[6] = [u('button', { type: 'submit' }, 'Delete account', -1)]),
                                                                    ),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['disabled'],
                                                            ),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                            ],
                                            32,
                                        ),
                                    ]),
                                    _: 1,
                                }),
                            ]),
                            _: 1,
                        }),
                    ]),
                ])
            );
        },
    }),
    ie = { class: 'flex flex-col space-y-6' },
    ue = { class: 'grid gap-2' },
    ce = { class: 'grid gap-2' },
    pe = { key: 0 },
    me = { class: '-mt-4 text-sm text-muted-foreground' },
    fe = { key: 0, class: 'mt-2 text-sm font-medium text-green-600' },
    _e = { class: 'flex items-center gap-4' },
    ke = f({
        __name: 'Profile',
        props: { mustVerifyEmail: { type: Boolean }, status: {}, className: {} },
        setup(d) {
            const l = [{ title: 'Profile settings', href: '/settings/profile' }],
                i = U().props.auth.user,
                n = S({ name: i.name, email: i.email }),
                c = () => {
                    n.patch(route('profile.update'), { preserveScroll: !0 });
                };
            return (t, r) => (
                p(),
                g(
                    G,
                    { breadcrumbs: l },
                    {
                        default: a(() => [
                            s(e(I), { title: 'Profile settings' }),
                            s(T, null, {
                                default: a(() => [
                                    u('div', ie, [
                                        s(E, { title: 'Profile information', description: 'Update your name and email address' }),
                                        u(
                                            'form',
                                            { onSubmit: A(c, ['prevent']), class: 'space-y-6' },
                                            [
                                                u('div', ue, [
                                                    s(e(x), { for: 'name' }, { default: a(() => r[2] || (r[2] = [m('Name')])), _: 1 }),
                                                    s(
                                                        e($),
                                                        {
                                                            id: 'name',
                                                            class: 'mt-1 block w-full',
                                                            modelValue: e(n).name,
                                                            'onUpdate:modelValue': r[0] || (r[0] = (w) => (e(n).name = w)),
                                                            required: '',
                                                            autocomplete: 'name',
                                                            placeholder: 'Full name',
                                                        },
                                                        null,
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                    s(k, { class: 'mt-2', message: e(n).errors.name }, null, 8, ['message']),
                                                ]),
                                                u('div', ce, [
                                                    s(e(x), { for: 'email' }, { default: a(() => r[3] || (r[3] = [m('Email address')])), _: 1 }),
                                                    s(
                                                        e($),
                                                        {
                                                            id: 'email',
                                                            type: 'email',
                                                            class: 'mt-1 block w-full',
                                                            modelValue: e(n).email,
                                                            'onUpdate:modelValue': r[1] || (r[1] = (w) => (e(n).email = w)),
                                                            required: '',
                                                            autocomplete: 'username',
                                                            placeholder: 'Email address',
                                                        },
                                                        null,
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                    s(k, { class: 'mt-2', message: e(n).errors.email }, null, 8, ['message']),
                                                ]),
                                                t.mustVerifyEmail && !e(i).email_verified_at
                                                    ? (p(),
                                                      y('div', pe, [
                                                          u('p', me, [
                                                              r[5] || (r[5] = m(' Your email address is unverified. ')),
                                                              s(
                                                                  e(M),
                                                                  {
                                                                      href: t.route('verification.send'),
                                                                      method: 'post',
                                                                      as: 'button',
                                                                      class: 'hover:decoration-current! text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out dark:decoration-neutral-500',
                                                                  },
                                                                  {
                                                                      default: a(
                                                                          () =>
                                                                              r[4] || (r[4] = [m(' Click here to resend the verification email. ')]),
                                                                      ),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['href'],
                                                              ),
                                                          ]),
                                                          t.status === 'verification-link-sent'
                                                              ? (p(), y('div', fe, ' A new verification link has been sent to your email address. '))
                                                              : C('', !0),
                                                      ]))
                                                    : C('', !0),
                                                u('div', _e, [
                                                    s(
                                                        e(b),
                                                        { disabled: e(n).processing },
                                                        { default: a(() => r[6] || (r[6] = [m('Save')])), _: 1 },
                                                        8,
                                                        ['disabled'],
                                                    ),
                                                    s(
                                                        e(J),
                                                        {
                                                            show: e(n).recentlySuccessful,
                                                            enter: 'transition ease-in-out',
                                                            'enter-from': 'opacity-0',
                                                            leave: 'transition ease-in-out',
                                                            'leave-to': 'opacity-0',
                                                        },
                                                        {
                                                            default: a(
                                                                () => r[7] || (r[7] = [u('p', { class: 'text-sm text-neutral-600' }, 'Saved.', -1)]),
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
                                    s(de),
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
export { ke as default };
