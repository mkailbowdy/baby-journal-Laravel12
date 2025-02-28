import { A as $, s as A, U as D, J as E, G, H as I, Q as J, T as L, c as M, u as Q, R as T, V as j, W as v, S as x } from './app-BvLwQa5L.js';
function R(e) {
    return J() ? (T(e), !0) : !1;
}
const g = new WeakMap(),
    z = (...e) => {
        var t;
        const o = e[0],
            l = (t = x()) == null ? void 0 : t.proxy;
        if (l == null && !L()) throw new Error('injectLocal must be called in setup');
        return l && g.has(l) && o in g.get(l) ? g.get(l)[o] : $(...e);
    },
    B = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const P = (e) => typeof e < 'u',
    U = Object.prototype.toString,
    H = (e) => U.call(e) === '[object Object]';
function C(e) {
    return e.endsWith('rem') ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function w(e) {
    return Array.isArray(e) ? e : [e];
}
function K(e, t, o) {
    return E(e, t, { ...o, immediate: !0 });
}
const F = B ? window : void 0;
function X(e) {
    var t;
    const o = v(e);
    return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Y(...e) {
    const t = [],
        o = () => {
            t.forEach((n) => n()), (t.length = 0);
        },
        l = (n, s, u, a) => (n.addEventListener(s, u, a), () => n.removeEventListener(s, u, a)),
        d = M(() => {
            const n = w(v(e[0])).filter((s) => s != null);
            return n.every((s) => typeof s != 'string') ? n : void 0;
        }),
        m = K(
            () => {
                var n, s;
                return [
                    (s = (n = d.value) == null ? void 0 : n.map((u) => X(u))) != null ? s : [F].filter((u) => u != null),
                    w(v(d.value ? e[1] : e[0])),
                    w(Q(d.value ? e[2] : e[1])),
                    v(d.value ? e[3] : e[2]),
                ];
            },
            ([n, s, u, a]) => {
                if ((o(), !(n != null && n.length) || !(s != null && s.length) || !(u != null && u.length))) return;
                const h = H(a) ? { ...a } : a;
                t.push(...n.flatMap((p) => s.flatMap((i) => u.map((r) => l(p, i, r, h)))));
            },
            { flush: 'post' },
        ),
        f = () => {
            m(), o();
        };
    return R(o), f;
}
function Z() {
    const e = j(!1),
        t = x();
    return (
        t &&
            I(() => {
                e.value = !0;
            }, t),
        e
    );
}
function _(e) {
    const t = Z();
    return M(() => (t.value, !!e()));
}
const k = Symbol('vueuse-ssr-width');
function q() {
    const e = L() ? z(k, null) : null;
    return typeof e == 'number' ? e : void 0;
}
function ne(e, t = {}) {
    const { window: o = F, ssrWidth: l = q() } = t,
        d = _(() => o && 'matchMedia' in o && typeof o.matchMedia == 'function'),
        m = A(typeof l == 'number'),
        f = j(),
        n = j(!1),
        s = (u) => {
            n.value = u.matches;
        };
    return (
        G(() => {
            if (m.value) {
                m.value = !d.value;
                const u = v(e).split(',');
                n.value = u.some((a) => {
                    const h = a.includes('not all'),
                        p = a.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
                        i = a.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                    let r = !!(p || i);
                    return p && r && (r = l >= C(p[1])), i && r && (r = l <= C(i[1])), h ? !r : r;
                });
                return;
            }
            d.value && ((f.value = o.matchMedia(v(e))), (n.value = f.value.matches));
        }),
        Y(f, 'change', s, { passive: !0 }),
        M(() => n.value)
    );
}
function ee(e) {
    return JSON.parse(JSON.stringify(e));
}
function oe(e, t, o, l = {}) {
    var d, m, f;
    const { clone: n = !1, passive: s = !1, eventName: u, deep: a = !1, defaultValue: h, shouldEmit: p } = l,
        i = x(),
        r =
            o ||
            (i == null ? void 0 : i.emit) ||
            ((d = i == null ? void 0 : i.$emit) == null ? void 0 : d.bind(i)) ||
            ((f = (m = i == null ? void 0 : i.proxy) == null ? void 0 : m.$emit) == null ? void 0 : f.bind(i == null ? void 0 : i.proxy));
    let b = u;
    t || (t = 'modelValue'), (b = b || `update:${t.toString()}`);
    const V = (c) => (n ? (typeof n == 'function' ? n(c) : ee(c)) : c),
        O = () => (P(e[t]) ? V(e[t]) : h),
        N = (c) => {
            p ? p(c) && r(b, c) : r(b, c);
        };
    if (s) {
        const c = O(),
            W = A(c);
        let S = !1;
        return (
            E(
                () => e[t],
                (y) => {
                    S || ((S = !0), (W.value = V(y)), D(() => (S = !1)));
                },
            ),
            E(
                W,
                (y) => {
                    !S && (y !== e[t] || a) && N(y);
                },
                { deep: a },
            ),
            W
        );
    } else
        return M({
            get() {
                return O();
            },
            set(c) {
                N(c);
            },
        });
}
export { ne as a, Y as b, oe as u };
