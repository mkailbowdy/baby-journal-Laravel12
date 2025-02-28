import {
    A as $,
    E as B,
    s as E,
    I as K,
    c as P,
    D as R,
    H as T,
    d as _,
    J as be,
    B as ge,
    G as k,
    z as me,
    p as we,
    F as ye,
} from './app-BvLwQa5L.js';
function Se(e) {
    typeof queueMicrotask == 'function'
        ? queueMicrotask(e)
        : Promise.resolve()
              .then(e)
              .catch((t) =>
                  setTimeout(() => {
                      throw t;
                  }),
              );
}
function U() {
    let e = [],
        t = {
            addEventListener(n, r, l, a) {
                return n.addEventListener(r, l, a), t.add(() => n.removeEventListener(r, l, a));
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                t.add(() => cancelAnimationFrame(r));
            },
            nextFrame(...n) {
                t.requestAnimationFrame(() => {
                    t.requestAnimationFrame(...n);
                });
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                t.add(() => clearTimeout(r));
            },
            microTask(...n) {
                let r = { current: !0 };
                return (
                    Se(() => {
                        r.current && n[0]();
                    }),
                    t.add(() => {
                        r.current = !1;
                    })
                );
            },
            style(n, r, l) {
                let a = n.style.getPropertyValue(r);
                return (
                    Object.assign(n.style, { [r]: l }),
                    this.add(() => {
                        Object.assign(n.style, { [r]: a });
                    })
                );
            },
            group(n) {
                let r = U();
                return n(r), this.add(() => r.dispose());
            },
            add(n) {
                return (
                    e.push(n),
                    () => {
                        let r = e.indexOf(n);
                        if (r >= 0) for (let l of e.splice(r, 1)) l();
                    }
                );
            },
            dispose() {
                for (let n of e.splice(0)) n();
            },
        };
    return t;
}
var J;
let Ee = Symbol('headlessui.useid'),
    Oe = 0;
const Te =
    (J = me) != null
        ? J
        : function () {
              return $(Ee, () => `${++Oe}`)();
          };
function Q(e) {
    var t;
    if (e == null || e.value == null) return null;
    let n = (t = e.value.$el) != null ? t : e.value;
    return n instanceof Node ? n : null;
}
function j(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == 'function' ? l(...n) : l;
    }
    let r = new Error(
        `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t)
            .map((l) => `"${l}"`)
            .join(', ')}.`,
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(r, j), r);
}
var je = Object.defineProperty,
    $e = (e, t, n) => (t in e ? je(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    X = (e, t, n) => ($e(e, typeof t != 'symbol' ? t + '' : t, n), n);
let Fe = class {
        constructor() {
            X(this, 'current', this.detect()), X(this, 'currentId', 0);
        }
        set(t) {
            this.current !== t && ((this.currentId = 0), (this.current = t));
        }
        reset() {
            this.set(this.detect());
        }
        nextId() {
            return ++this.currentId;
        }
        get isServer() {
            return this.current === 'server';
        }
        get isClient() {
            return this.current === 'client';
        }
        detect() {
            return typeof window > 'u' || typeof document > 'u' ? 'server' : 'client';
        }
    },
    Le = new Fe();
var ee = ((e) => ((e[(e.None = 0)] = 'None'), (e[(e.RenderStrategy = 1)] = 'RenderStrategy'), (e[(e.Static = 2)] = 'Static'), e))(ee || {}),
    b = ((e) => ((e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e))(b || {});
function te({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...l }) {
    var a;
    let i = re(r, n),
        u = Object.assign(l, { props: i });
    if (e || (t & 2 && i.static)) return I(u);
    if (t & 1) {
        let s = (a = i.unmount) == null || a ? 0 : 1;
        return j(s, {
            0() {
                return null;
            },
            1() {
                return I({ ...l, props: { ...i, hidden: !0, style: { display: 'none' } } });
            },
        });
    }
    return I(u);
}
function I({ props: e, attrs: t, slots: n, slot: r, name: l }) {
    var a, i;
    let { as: u, ...s } = le(e, ['unmount', 'static']),
        o = (a = n.default) == null ? void 0 : a.call(n, r),
        f = {};
    if (r) {
        let v = !1,
            c = [];
        for (let [g, h] of Object.entries(r)) typeof h == 'boolean' && (v = !0), h === !0 && c.push(g);
        v && (f['data-headlessui-state'] = c.join(' '));
    }
    if (u === 'template') {
        if (((o = ne(o ?? [])), Object.keys(s).length > 0 || Object.keys(t).length > 0)) {
            let [v, ...c] = o ?? [];
            if (!Ae(v) || c.length > 0)
                throw new Error(
                    [
                        'Passing props on "template"!',
                        '',
                        `The current component <${l} /> is rendering a "template".`,
                        'However we need to passthrough the following props:',
                        Object.keys(s)
                            .concat(Object.keys(t))
                            .map((d) => d.trim())
                            .filter((d, p, F) => F.indexOf(d) === p)
                            .sort((d, p) => d.localeCompare(p))
                            .map((d) => `  - ${d}`).join(`
`),
                        '',
                        'You can apply a few solutions:',
                        [
                            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
                            'Render a single element as the child so that we can forward the props onto that element.',
                        ].map((d) => `  - ${d}`).join(`
`),
                    ].join(`
`),
                );
            let g = re((i = v.props) != null ? i : {}, s, f),
                h = ge(v, g, !0);
            for (let d in g) d.startsWith('on') && (h.props || (h.props = {}), (h.props[d] = g[d]));
            return h;
        }
        return Array.isArray(o) && o.length === 1 ? o[0] : o;
    }
    return R(u, Object.assign({}, s, f), { default: () => o });
}
function ne(e) {
    return e.flatMap((t) => (t.type === ye ? ne(t.children) : [t]));
}
function re(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r) l.startsWith('on') && typeof r[l] == 'function' ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : (t[l] = r[l]);
    if (t.disabled || t['aria-disabled']) return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
    for (let r in n)
        Object.assign(t, {
            [r](l, ...a) {
                let i = n[r];
                for (let u of i) {
                    if (l instanceof Event && l.defaultPrevented) return;
                    u(l, ...a);
                }
            },
        });
    return t;
}
function le(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n;
}
function Ae(e) {
    return e == null ? !1 : typeof e.type == 'string' || typeof e.type == 'object' || typeof e.type == 'function';
}
let ae = Symbol('Context');
var m = ((e) => ((e[(e.Open = 1)] = 'Open'), (e[(e.Closed = 2)] = 'Closed'), (e[(e.Closing = 4)] = 'Closing'), (e[(e.Opening = 8)] = 'Opening'), e))(
    m || {},
);
function Ce() {
    return ie() !== null;
}
function ie() {
    return $(ae, null);
}
function Be(e) {
    B(ae, e);
}
function Pe(e) {
    let t = { called: !1 };
    return (...n) => {
        if (!t.called) return (t.called = !0), e(...n);
    };
}
function M(e, ...t) {
    e && t.length > 0 && e.classList.add(...t);
}
function C(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t);
}
var N = ((e) => ((e.Finished = 'finished'), (e.Cancelled = 'cancelled'), e))(N || {});
function ke(e, t) {
    let n = U();
    if (!e) return n.dispose;
    let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
        [a, i] = [r, l].map((u) => {
            let [s = 0] = u
                .split(',')
                .filter(Boolean)
                .map((o) => (o.includes('ms') ? parseFloat(o) : parseFloat(o) * 1e3))
                .sort((o, f) => f - o);
            return s;
        });
    return a !== 0 ? n.setTimeout(() => t('finished'), a + i) : t('finished'), n.add(() => t('cancelled')), n.dispose;
}
function Z(e, t, n, r, l, a) {
    let i = U(),
        u = a !== void 0 ? Pe(a) : () => {};
    return (
        C(e, ...l),
        M(e, ...t, ...n),
        i.nextFrame(() => {
            C(e, ...n), M(e, ...r), i.add(ke(e, (s) => (C(e, ...r, ...t), M(e, ...l), u(s))));
        }),
        i.add(() => C(e, ...t, ...n, ...r, ...l)),
        i.add(() => u('cancelled')),
        i.dispose
    );
}
function S(e = '') {
    return e.split(/\s+/).filter((t) => t.length > 1);
}
let q = Symbol('TransitionContext');
var xe = ((e) => ((e.Visible = 'visible'), (e.Hidden = 'hidden'), e))(xe || {});
function He() {
    return $(q, null) !== null;
}
function Ie() {
    let e = $(q, null);
    if (e === null) throw new Error('A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.');
    return e;
}
function Me() {
    let e = $(D, null);
    if (e === null) throw new Error('A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.');
    return e;
}
let D = Symbol('NestingContext');
function x(e) {
    return 'children' in e ? x(e.children) : e.value.filter(({ state: t }) => t === 'visible').length > 0;
}
function ue(e) {
    let t = E([]),
        n = E(!1);
    T(() => (n.value = !0)), K(() => (n.value = !1));
    function r(a, i = b.Hidden) {
        let u = t.value.findIndex(({ id: s }) => s === a);
        u !== -1 &&
            (j(i, {
                [b.Unmount]() {
                    t.value.splice(u, 1);
                },
                [b.Hidden]() {
                    t.value[u].state = 'hidden';
                },
            }),
            !x(t) && n.value && (e == null || e()));
    }
    function l(a) {
        let i = t.value.find(({ id: u }) => u === a);
        return i ? i.state !== 'visible' && (i.state = 'visible') : t.value.push({ id: a, state: 'visible' }), () => r(a, b.Unmount);
    }
    return { children: t, register: l, unregister: r };
}
let oe = ee.RenderStrategy,
    Ne = _({
        props: {
            as: { type: [Object, String], default: 'div' },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: '' },
            enterFrom: { type: [String], default: '' },
            enterTo: { type: [String], default: '' },
            entered: { type: [String], default: '' },
            leave: { type: [String], default: '' },
            leaveFrom: { type: [String], default: '' },
            leaveTo: { type: [String], default: '' },
        },
        emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 },
        setup(e, { emit: t, attrs: n, slots: r, expose: l }) {
            let a = E(0);
            function i() {
                (a.value |= m.Opening), t('beforeEnter');
            }
            function u() {
                (a.value &= ~m.Opening), t('afterEnter');
            }
            function s() {
                (a.value |= m.Closing), t('beforeLeave');
            }
            function o() {
                (a.value &= ~m.Closing), t('afterLeave');
            }
            if (!He() && Ce()) return () => R(Ue, { ...e, onBeforeEnter: i, onAfterEnter: u, onBeforeLeave: s, onAfterLeave: o }, r);
            let f = E(null),
                v = P(() => (e.unmount ? b.Unmount : b.Hidden));
            l({ el: f, $el: f });
            let { show: c, appear: g } = Ie(),
                { register: h, unregister: d } = Me(),
                p = E(c.value ? 'visible' : 'hidden'),
                F = { value: !0 },
                O = Te(),
                L = { value: !1 },
                V = ue(() => {
                    !L.value && p.value !== 'hidden' && ((p.value = 'hidden'), d(O), o());
                });
            T(() => {
                let y = h(O);
                K(y);
            }),
                k(() => {
                    if (v.value === b.Hidden && O) {
                        if (c.value && p.value !== 'visible') {
                            p.value = 'visible';
                            return;
                        }
                        j(p.value, { hidden: () => d(O), visible: () => h(O) });
                    }
                });
            let W = S(e.enter),
                z = S(e.enterFrom),
                se = S(e.enterTo),
                Y = S(e.entered),
                de = S(e.leave),
                fe = S(e.leaveFrom),
                pe = S(e.leaveTo);
            T(() => {
                k(() => {
                    if (p.value === 'visible') {
                        let y = Q(f);
                        if (y instanceof Comment && y.data === '') throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
                    }
                });
            });
            function ce(y) {
                let H = F.value && !g.value,
                    w = Q(f);
                !w ||
                    !(w instanceof HTMLElement) ||
                    H ||
                    ((L.value = !0),
                    c.value && i(),
                    c.value || s(),
                    y(
                        c.value
                            ? Z(w, W, z, se, Y, (A) => {
                                  (L.value = !1), A === N.Finished && u();
                              })
                            : Z(w, de, fe, pe, Y, (A) => {
                                  (L.value = !1), A === N.Finished && (x(V) || ((p.value = 'hidden'), d(O), o()));
                              }),
                    ));
            }
            return (
                T(() => {
                    be(
                        [c],
                        (y, H, w) => {
                            ce(w), (F.value = !1);
                        },
                        { immediate: !0 },
                    );
                }),
                B(D, V),
                Be(P(() => j(p.value, { visible: m.Open, hidden: m.Closed }) | a.value)),
                () => {
                    let { appear: y, show: H, enter: w, enterFrom: A, enterTo: qe, entered: De, leave: Ve, leaveFrom: We, leaveTo: ze, ...G } = e,
                        ve = { ref: f },
                        he = { ...G, ...(g.value && c.value && Le.isServer ? { class: we([n.class, G.class, ...W, ...z]) } : {}) };
                    return te({
                        theirProps: he,
                        ourProps: ve,
                        slot: {},
                        slots: r,
                        attrs: n,
                        features: oe,
                        visible: p.value === 'visible',
                        name: 'TransitionChild',
                    });
                }
            );
        },
    }),
    Re = Ne,
    Ue = _({
        inheritAttrs: !1,
        props: {
            as: { type: [Object, String], default: 'div' },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: '' },
            enterFrom: { type: [String], default: '' },
            enterTo: { type: [String], default: '' },
            entered: { type: [String], default: '' },
            leave: { type: [String], default: '' },
            leaveFrom: { type: [String], default: '' },
            leaveTo: { type: [String], default: '' },
        },
        emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 },
        setup(e, { emit: t, attrs: n, slots: r }) {
            let l = ie(),
                a = P(() => (e.show === null && l !== null ? (l.value & m.Open) === m.Open : e.show));
            k(() => {
                if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
            });
            let i = E(a.value ? 'visible' : 'hidden'),
                u = ue(() => {
                    i.value = 'hidden';
                }),
                s = E(!0),
                o = { show: a, appear: P(() => e.appear || !s.value) };
            return (
                T(() => {
                    k(() => {
                        (s.value = !1), a.value ? (i.value = 'visible') : x(u) || (i.value = 'hidden');
                    });
                }),
                B(D, u),
                B(q, o),
                () => {
                    let f = le(e, ['show', 'appear', 'unmount', 'onBeforeEnter', 'onBeforeLeave', 'onAfterEnter', 'onAfterLeave']),
                        v = { unmount: e.unmount };
                    return te({
                        ourProps: { ...v, as: 'template' },
                        theirProps: {},
                        slot: {},
                        slots: {
                            ...r,
                            default: () => [
                                R(
                                    Re,
                                    {
                                        onBeforeEnter: () => t('beforeEnter'),
                                        onAfterEnter: () => t('afterEnter'),
                                        onBeforeLeave: () => t('beforeLeave'),
                                        onAfterLeave: () => t('afterLeave'),
                                        ...n,
                                        ...v,
                                        ...f,
                                    },
                                    r.default,
                                ),
                            ],
                        },
                        attrs: {},
                        features: oe,
                        visible: i.value === 'visible',
                        name: 'Transition',
                    });
                }
            );
        },
    });
export { Ue as S };
