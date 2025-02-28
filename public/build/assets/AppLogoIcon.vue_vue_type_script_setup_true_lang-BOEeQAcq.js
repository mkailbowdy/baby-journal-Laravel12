import {
    aa as $o,
    a6 as _n,
    K as _o,
    d as A,
    a4 as An,
    M as Ao,
    r as B,
    Z as bn,
    a8 as Bn,
    B as Bo,
    w as C,
    a0 as Cn,
    Y as Co,
    a3 as Do,
    s as E,
    v as ee,
    a1 as En,
    q as Eo,
    u as f,
    k as F,
    ad as Fo,
    V as gn,
    J as H,
    Q as hn,
    ab as Io,
    g as k,
    S as ke,
    a9 as kn,
    a2 as ko,
    x as le,
    ac as Lo,
    D as me,
    t as Mo,
    ae as No,
    U as oe,
    F as On,
    $ as Oo,
    a as ot,
    o as P,
    O as Pn,
    N as Po,
    e as q,
    a7 as Ro,
    X as Se,
    a5 as So,
    j as st,
    i as St,
    c as T,
    G as te,
    h as To,
    H as ue,
    I as ut,
    b as Vo,
    A as wn,
    E as xn,
    _ as ye,
    R as yn,
    p as zo,
    z as Zt,
} from './app-BvLwQa5L.js';
function Dn(e) {
    var t,
        n,
        o = '';
    if (typeof e == 'string' || typeof e == 'number') o += e;
    else if (typeof e == 'object')
        if (Array.isArray(e)) {
            var r = e.length;
            for (t = 0; t < r; t++) e[t] && (n = Dn(e[t])) && (o && (o += ' '), (o += n));
        } else for (n in e) e[n] && (o && (o += ' '), (o += n));
    return o;
}
function Sn() {
    for (var e, t, n = 0, o = '', r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Dn(e)) && (o && (o += ' '), (o += t));
    return o;
}
const Jt = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
    Qt = Sn,
    Wo = (e, t) => (n) => {
        var o;
        if ((t == null ? void 0 : t.variants) == null) return Qt(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: r, defaultVariants: a } = t,
            l = Object.keys(r).map((c) => {
                const s = n == null ? void 0 : n[c],
                    u = a == null ? void 0 : a[c];
                if (s === null) return null;
                const p = Jt(s) || Jt(u);
                return r[c][p];
            }),
            i =
                n &&
                Object.entries(n).reduce((c, s) => {
                    let [u, p] = s;
                    return p === void 0 || (c[u] = p), c;
                }, {}),
            d =
                t == null || (o = t.compoundVariants) === null || o === void 0
                    ? void 0
                    : o.reduce((c, s) => {
                          let { class: u, className: p, ...v } = s;
                          return Object.entries(v).every((m) => {
                              let [y, g] = m;
                              return Array.isArray(g) ? g.includes({ ...a, ...i }[y]) : { ...a, ...i }[y] === g;
                          })
                              ? [...c, u, p]
                              : c;
                      }, []);
        return Qt(e, l, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    },
    jo = ['top', 'right', 'bottom', 'left'],
    Ee = Math.min,
    J = Math.max,
    rt = Math.round,
    Je = Math.floor,
    ie = (e) => ({ x: e, y: e }),
    Ko = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
    Ho = { start: 'end', end: 'start' };
function Ct(e, t, n) {
    return J(e, Ee(t, n));
}
function ge(e, t) {
    return typeof e == 'function' ? e(t) : e;
}
function he(e) {
    return e.split('-')[0];
}
function Ne(e) {
    return e.split('-')[1];
}
function Tt(e) {
    return e === 'x' ? 'y' : 'x';
}
function Mt(e) {
    return e === 'y' ? 'height' : 'width';
}
function Ae(e) {
    return ['top', 'bottom'].includes(he(e)) ? 'y' : 'x';
}
function Rt(e) {
    return Tt(Ae(e));
}
function Go(e, t, n) {
    n === void 0 && (n = !1);
    const o = Ne(e),
        r = Rt(e),
        a = Mt(r);
    let l = r === 'x' ? (o === (n ? 'end' : 'start') ? 'right' : 'left') : o === 'start' ? 'bottom' : 'top';
    return t.reference[a] > t.floating[a] && (l = at(l)), [l, at(l)];
}
function Uo(e) {
    const t = at(e);
    return [Ot(e), t, Ot(t)];
}
function Ot(e) {
    return e.replace(/start|end/g, (t) => Ho[t]);
}
function qo(e, t, n) {
    const o = ['left', 'right'],
        r = ['right', 'left'],
        a = ['top', 'bottom'],
        l = ['bottom', 'top'];
    switch (e) {
        case 'top':
        case 'bottom':
            return n ? (t ? r : o) : t ? o : r;
        case 'left':
        case 'right':
            return t ? a : l;
        default:
            return [];
    }
}
function Xo(e, t, n, o) {
    const r = Ne(e);
    let a = qo(he(e), n === 'start', o);
    return r && ((a = a.map((l) => l + '-' + r)), t && (a = a.concat(a.map(Ot)))), a;
}
function at(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Ko[t]);
}
function Yo(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Tn(e) {
    return typeof e != 'number' ? Yo(e) : { top: e, right: e, bottom: e, left: e };
}
function lt(e) {
    const { x: t, y: n, width: o, height: r } = e;
    return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function en(e, t, n) {
    let { reference: o, floating: r } = e;
    const a = Ae(t),
        l = Rt(t),
        i = Mt(l),
        d = he(t),
        c = a === 'y',
        s = o.x + o.width / 2 - r.width / 2,
        u = o.y + o.height / 2 - r.height / 2,
        p = o[i] / 2 - r[i] / 2;
    let v;
    switch (d) {
        case 'top':
            v = { x: s, y: o.y - r.height };
            break;
        case 'bottom':
            v = { x: s, y: o.y + o.height };
            break;
        case 'right':
            v = { x: o.x + o.width, y: u };
            break;
        case 'left':
            v = { x: o.x - r.width, y: u };
            break;
        default:
            v = { x: o.x, y: o.y };
    }
    switch (Ne(t)) {
        case 'start':
            v[l] -= p * (n && c ? -1 : 1);
            break;
        case 'end':
            v[l] += p * (n && c ? -1 : 1);
            break;
    }
    return v;
}
const Zo = async (e, t, n) => {
    const { placement: o = 'bottom', strategy: r = 'absolute', middleware: a = [], platform: l } = n,
        i = a.filter(Boolean),
        d = await (l.isRTL == null ? void 0 : l.isRTL(t));
    let c = await l.getElementRects({ reference: e, floating: t, strategy: r }),
        { x: s, y: u } = en(c, o, d),
        p = o,
        v = {},
        m = 0;
    for (let y = 0; y < i.length; y++) {
        const { name: g, fn: h } = i[y],
            {
                x: w,
                y: x,
                data: _,
                reset: D,
            } = await h({
                x: s,
                y: u,
                initialPlacement: o,
                placement: p,
                strategy: r,
                middlewareData: v,
                rects: c,
                platform: l,
                elements: { reference: e, floating: t },
            });
        (s = w ?? s),
            (u = x ?? u),
            (v = { ...v, [g]: { ...v[g], ..._ } }),
            D &&
                m <= 50 &&
                (m++,
                typeof D == 'object' &&
                    (D.placement && (p = D.placement),
                    D.rects && (c = D.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: r }) : D.rects),
                    ({ x: s, y: u } = en(c, p, d))),
                (y = -1));
    }
    return { x: s, y: u, placement: p, strategy: r, middlewareData: v };
};
async function Ke(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: o, y: r, platform: a, rects: l, elements: i, strategy: d } = e,
        {
            boundary: c = 'clippingAncestors',
            rootBoundary: s = 'viewport',
            elementContext: u = 'floating',
            altBoundary: p = !1,
            padding: v = 0,
        } = ge(t, e),
        m = Tn(v),
        g = i[p ? (u === 'floating' ? 'reference' : 'floating') : u],
        h = lt(
            await a.getClippingRect({
                element:
                    (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n
                        ? g
                        : g.contextElement || (await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating))),
                boundary: c,
                rootBoundary: s,
                strategy: d,
            }),
        ),
        w = u === 'floating' ? { x: o, y: r, width: l.floating.width, height: l.floating.height } : l.reference,
        x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)),
        _ = (await (a.isElement == null ? void 0 : a.isElement(x)))
            ? (await (a.getScale == null ? void 0 : a.getScale(x))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        D = lt(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: i, rect: w, offsetParent: x, strategy: d })
                : w,
        );
    return {
        top: (h.top - D.top + m.top) / _.y,
        bottom: (D.bottom - h.bottom + m.bottom) / _.y,
        left: (h.left - D.left + m.left) / _.x,
        right: (D.right - h.right + m.right) / _.x,
    };
}
const Jo = (e) => ({
        name: 'arrow',
        options: e,
        async fn(t) {
            const { x: n, y: o, placement: r, rects: a, platform: l, elements: i, middlewareData: d } = t,
                { element: c, padding: s = 0 } = ge(e, t) || {};
            if (c == null) return {};
            const u = Tn(s),
                p = { x: n, y: o },
                v = Rt(r),
                m = Mt(v),
                y = await l.getDimensions(c),
                g = v === 'y',
                h = g ? 'top' : 'left',
                w = g ? 'bottom' : 'right',
                x = g ? 'clientHeight' : 'clientWidth',
                _ = a.reference[m] + a.reference[v] - p[v] - a.floating[m],
                D = p[v] - a.reference[v],
                L = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
            let M = L ? L[x] : 0;
            (!M || !(await (l.isElement == null ? void 0 : l.isElement(L)))) && (M = i.floating[x] || a.floating[m]);
            const N = _ / 2 - D / 2,
                W = M / 2 - y[m] / 2 - 1,
                b = Ee(u[h], W),
                S = Ee(u[w], W),
                O = b,
                j = M - y[m] - S,
                I = M / 2 - y[m] / 2 + N,
                G = Ct(O, I, j),
                K = !d.arrow && Ne(r) != null && I !== G && a.reference[m] / 2 - (I < O ? b : S) - y[m] / 2 < 0,
                Z = K ? (I < O ? I - O : I - j) : 0;
            return { [v]: p[v] + Z, data: { [v]: G, centerOffset: I - G - Z, ...(K && { alignmentOffset: Z }) }, reset: K };
        },
    }),
    Qo = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'flip',
                options: e,
                async fn(t) {
                    var n, o;
                    const { placement: r, middlewareData: a, rects: l, initialPlacement: i, platform: d, elements: c } = t,
                        {
                            mainAxis: s = !0,
                            crossAxis: u = !0,
                            fallbackPlacements: p,
                            fallbackStrategy: v = 'bestFit',
                            fallbackAxisSideDirection: m = 'none',
                            flipAlignment: y = !0,
                            ...g
                        } = ge(e, t);
                    if ((n = a.arrow) != null && n.alignmentOffset) return {};
                    const h = he(r),
                        w = Ae(i),
                        x = he(i) === i,
                        _ = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)),
                        D = p || (x || !y ? [at(i)] : Uo(i)),
                        L = m !== 'none';
                    !p && L && D.push(...Xo(i, y, m, _));
                    const M = [i, ...D],
                        N = await Ke(t, g),
                        W = [];
                    let b = ((o = a.flip) == null ? void 0 : o.overflows) || [];
                    if ((s && W.push(N[h]), u)) {
                        const I = Go(r, l, _);
                        W.push(N[I[0]], N[I[1]]);
                    }
                    if (((b = [...b, { placement: r, overflows: W }]), !W.every((I) => I <= 0))) {
                        var S, O;
                        const I = (((S = a.flip) == null ? void 0 : S.index) || 0) + 1,
                            G = M[I];
                        if (G) return { data: { index: I, overflows: b }, reset: { placement: G } };
                        let K =
                            (O = b.filter((Z) => Z.overflows[0] <= 0).sort((Z, ne) => Z.overflows[1] - ne.overflows[1])[0]) == null
                                ? void 0
                                : O.placement;
                        if (!K)
                            switch (v) {
                                case 'bestFit': {
                                    var j;
                                    const Z =
                                        (j = b
                                            .filter((ne) => {
                                                if (L) {
                                                    const U = Ae(ne.placement);
                                                    return U === w || U === 'y';
                                                }
                                                return !0;
                                            })
                                            .map((ne) => [ne.placement, ne.overflows.filter((U) => U > 0).reduce((U, Ze) => U + Ze, 0)])
                                            .sort((ne, U) => ne[1] - U[1])[0]) == null
                                            ? void 0
                                            : j[0];
                                    Z && (K = Z);
                                    break;
                                }
                                case 'initialPlacement':
                                    K = i;
                                    break;
                            }
                        if (r !== K) return { reset: { placement: K } };
                    }
                    return {};
                },
            }
        );
    };
function tn(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function nn(e) {
    return jo.some((t) => e[t] >= 0);
}
const er = function (e) {
    return (
        e === void 0 && (e = {}),
        {
            name: 'hide',
            options: e,
            async fn(t) {
                const { rects: n } = t,
                    { strategy: o = 'referenceHidden', ...r } = ge(e, t);
                switch (o) {
                    case 'referenceHidden': {
                        const a = await Ke(t, { ...r, elementContext: 'reference' }),
                            l = tn(a, n.reference);
                        return { data: { referenceHiddenOffsets: l, referenceHidden: nn(l) } };
                    }
                    case 'escaped': {
                        const a = await Ke(t, { ...r, altBoundary: !0 }),
                            l = tn(a, n.floating);
                        return { data: { escapedOffsets: l, escaped: nn(l) } };
                    }
                    default:
                        return {};
                }
            },
        }
    );
};
async function tr(e, t) {
    const { placement: n, platform: o, elements: r } = e,
        a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
        l = he(n),
        i = Ne(n),
        d = Ae(n) === 'y',
        c = ['left', 'top'].includes(l) ? -1 : 1,
        s = a && d ? -1 : 1,
        u = ge(t, e);
    let {
        mainAxis: p,
        crossAxis: v,
        alignmentAxis: m,
    } = typeof u == 'number'
        ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
    return i && typeof m == 'number' && (v = i === 'end' ? m * -1 : m), d ? { x: v * s, y: p * c } : { x: p * c, y: v * s };
}
const nr = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: 'offset',
                options: e,
                async fn(t) {
                    var n, o;
                    const { x: r, y: a, placement: l, middlewareData: i } = t,
                        d = await tr(t, e);
                    return l === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset
                        ? {}
                        : { x: r + d.x, y: a + d.y, data: { ...d, placement: l } };
                },
            }
        );
    },
    or = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'shift',
                options: e,
                async fn(t) {
                    const { x: n, y: o, placement: r } = t,
                        {
                            mainAxis: a = !0,
                            crossAxis: l = !1,
                            limiter: i = {
                                fn: (g) => {
                                    let { x: h, y: w } = g;
                                    return { x: h, y: w };
                                },
                            },
                            ...d
                        } = ge(e, t),
                        c = { x: n, y: o },
                        s = await Ke(t, d),
                        u = Ae(he(r)),
                        p = Tt(u);
                    let v = c[p],
                        m = c[u];
                    if (a) {
                        const g = p === 'y' ? 'top' : 'left',
                            h = p === 'y' ? 'bottom' : 'right',
                            w = v + s[g],
                            x = v - s[h];
                        v = Ct(w, v, x);
                    }
                    if (l) {
                        const g = u === 'y' ? 'top' : 'left',
                            h = u === 'y' ? 'bottom' : 'right',
                            w = m + s[g],
                            x = m - s[h];
                        m = Ct(w, m, x);
                    }
                    const y = i.fn({ ...t, [p]: v, [u]: m });
                    return { ...y, data: { x: y.x - n, y: y.y - o, enabled: { [p]: a, [u]: l } } };
                },
            }
        );
    },
    rr = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: o, placement: r, rects: a, middlewareData: l } = t,
                        { offset: i = 0, mainAxis: d = !0, crossAxis: c = !0 } = ge(e, t),
                        s = { x: n, y: o },
                        u = Ae(r),
                        p = Tt(u);
                    let v = s[p],
                        m = s[u];
                    const y = ge(i, t),
                        g = typeof y == 'number' ? { mainAxis: y, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...y };
                    if (d) {
                        const x = p === 'y' ? 'height' : 'width',
                            _ = a.reference[p] - a.floating[x] + g.mainAxis,
                            D = a.reference[p] + a.reference[x] - g.mainAxis;
                        v < _ ? (v = _) : v > D && (v = D);
                    }
                    if (c) {
                        var h, w;
                        const x = p === 'y' ? 'width' : 'height',
                            _ = ['top', 'left'].includes(he(r)),
                            D = a.reference[u] - a.floating[x] + ((_ && ((h = l.offset) == null ? void 0 : h[u])) || 0) + (_ ? 0 : g.crossAxis),
                            L = a.reference[u] + a.reference[x] + (_ ? 0 : ((w = l.offset) == null ? void 0 : w[u]) || 0) - (_ ? g.crossAxis : 0);
                        m < D ? (m = D) : m > L && (m = L);
                    }
                    return { [p]: v, [u]: m };
                },
            }
        );
    },
    ar = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'size',
                options: e,
                async fn(t) {
                    var n, o;
                    const { placement: r, rects: a, platform: l, elements: i } = t,
                        { apply: d = () => {}, ...c } = ge(e, t),
                        s = await Ke(t, c),
                        u = he(r),
                        p = Ne(r),
                        v = Ae(r) === 'y',
                        { width: m, height: y } = a.floating;
                    let g, h;
                    u === 'top' || u === 'bottom'
                        ? ((g = u), (h = p === ((await (l.isRTL == null ? void 0 : l.isRTL(i.floating))) ? 'start' : 'end') ? 'left' : 'right'))
                        : ((h = u), (g = p === 'end' ? 'top' : 'bottom'));
                    const w = y - s.top - s.bottom,
                        x = m - s.left - s.right,
                        _ = Ee(y - s[g], w),
                        D = Ee(m - s[h], x),
                        L = !t.middlewareData.shift;
                    let M = _,
                        N = D;
                    if (
                        ((n = t.middlewareData.shift) != null && n.enabled.x && (N = x),
                        (o = t.middlewareData.shift) != null && o.enabled.y && (M = w),
                        L && !p)
                    ) {
                        const b = J(s.left, 0),
                            S = J(s.right, 0),
                            O = J(s.top, 0),
                            j = J(s.bottom, 0);
                        v
                            ? (N = m - 2 * (b !== 0 || S !== 0 ? b + S : J(s.left, s.right)))
                            : (M = y - 2 * (O !== 0 || j !== 0 ? O + j : J(s.top, s.bottom)));
                    }
                    await d({ ...t, availableWidth: N, availableHeight: M });
                    const W = await l.getDimensions(i.floating);
                    return m !== W.width || y !== W.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function dt() {
    return typeof window < 'u';
}
function De(e) {
    return $t(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Q(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(e) {
    var t;
    return (t = ($t(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $t(e) {
    return dt() ? e instanceof Node || e instanceof Q(e).Node : !1;
}
function re(e) {
    return dt() ? e instanceof Element || e instanceof Q(e).Element : !1;
}
function se(e) {
    return dt() ? e instanceof HTMLElement || e instanceof Q(e).HTMLElement : !1;
}
function on(e) {
    return !dt() || typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof Q(e).ShadowRoot;
}
function Ge(e) {
    const { overflow: t, overflowX: n, overflowY: o, display: r } = ae(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !['inline', 'contents'].includes(r);
}
function lr(e) {
    return ['table', 'td', 'th'].includes(De(e));
}
function ct(e) {
    return [':popover-open', ':modal'].some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
function It(e) {
    const t = Lt(),
        n = re(e) ? ae(e) : e;
    return (
        ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((o) => (n[o] ? n[o] !== 'none' : !1)) ||
        (n.containerType ? n.containerType !== 'normal' : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
        (!t && (n.filter ? n.filter !== 'none' : !1)) ||
        ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((o) => (n.willChange || '').includes(o)) ||
        ['paint', 'layout', 'strict', 'content'].some((o) => (n.contain || '').includes(o))
    );
}
function ir(e) {
    let t = _e(e);
    for (; se(t) && !Ie(t); ) {
        if (It(t)) return t;
        if (ct(t)) return null;
        t = _e(t);
    }
    return null;
}
function Lt() {
    return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Ie(e) {
    return ['html', 'body', '#document'].includes(De(e));
}
function ae(e) {
    return Q(e).getComputedStyle(e);
}
function ft(e) {
    return re(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function _e(e) {
    if (De(e) === 'html') return e;
    const t = e.assignedSlot || e.parentNode || (on(e) && e.host) || de(e);
    return on(t) ? t.host : t;
}
function Mn(e) {
    const t = _e(e);
    return Ie(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : se(t) && Ge(t) ? t : Mn(t);
}
function He(e, t, n) {
    var o;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const r = Mn(e),
        a = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
        l = Q(r);
    if (a) {
        const i = Et(l);
        return t.concat(l, l.visualViewport || [], Ge(r) ? r : [], i && n ? He(i) : []);
    }
    return t.concat(r, He(r, [], n));
}
function Et(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Rn(e) {
    const t = ae(e);
    let n = parseFloat(t.width) || 0,
        o = parseFloat(t.height) || 0;
    const r = se(e),
        a = r ? e.offsetWidth : n,
        l = r ? e.offsetHeight : o,
        i = rt(n) !== a || rt(o) !== l;
    return i && ((n = a), (o = l)), { width: n, height: o, $: i };
}
function Ft(e) {
    return re(e) ? e : e.contextElement;
}
function Re(e) {
    const t = Ft(e);
    if (!se(t)) return ie(1);
    const n = t.getBoundingClientRect(),
        { width: o, height: r, $: a } = Rn(t);
    let l = (a ? rt(n.width) : n.width) / o,
        i = (a ? rt(n.height) : n.height) / r;
    return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), { x: l, y: i };
}
const sr = ie(0);
function $n(e) {
    const t = Q(e);
    return !Lt() || !t.visualViewport ? sr : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ur(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== Q(e)) ? !1 : t;
}
function Be(e, t, n, o) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        a = Ft(e);
    let l = ie(1);
    t && (o ? re(o) && (l = Re(o)) : (l = Re(e)));
    const i = ur(a, n, o) ? $n(a) : ie(0);
    let d = (r.left + i.x) / l.x,
        c = (r.top + i.y) / l.y,
        s = r.width / l.x,
        u = r.height / l.y;
    if (a) {
        const p = Q(a),
            v = o && re(o) ? Q(o) : o;
        let m = p,
            y = Et(m);
        for (; y && o && v !== m; ) {
            const g = Re(y),
                h = y.getBoundingClientRect(),
                w = ae(y),
                x = h.left + (y.clientLeft + parseFloat(w.paddingLeft)) * g.x,
                _ = h.top + (y.clientTop + parseFloat(w.paddingTop)) * g.y;
            (d *= g.x), (c *= g.y), (s *= g.x), (u *= g.y), (d += x), (c += _), (m = Q(y)), (y = Et(m));
        }
    }
    return lt({ width: s, height: u, x: d, y: c });
}
function Nt(e, t) {
    const n = ft(e).scrollLeft;
    return t ? t.left + n : Be(de(e)).left + n;
}
function In(e, t, n) {
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        r = o.left + t.scrollLeft - (n ? 0 : Nt(e, o)),
        a = o.top + t.scrollTop;
    return { x: r, y: a };
}
function dr(e) {
    let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
    const a = r === 'fixed',
        l = de(o),
        i = t ? ct(t.floating) : !1;
    if (o === l || (i && a)) return n;
    let d = { scrollLeft: 0, scrollTop: 0 },
        c = ie(1);
    const s = ie(0),
        u = se(o);
    if ((u || (!u && !a)) && ((De(o) !== 'body' || Ge(l)) && (d = ft(o)), se(o))) {
        const v = Be(o);
        (c = Re(o)), (s.x = v.x + o.clientLeft), (s.y = v.y + o.clientTop);
    }
    const p = l && !u && !a ? In(l, d, !0) : ie(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - d.scrollLeft * c.x + s.x + p.x,
        y: n.y * c.y - d.scrollTop * c.y + s.y + p.y,
    };
}
function cr(e) {
    return Array.from(e.getClientRects());
}
function fr(e) {
    const t = de(e),
        n = ft(e),
        o = e.ownerDocument.body,
        r = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
        a = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let l = -n.scrollLeft + Nt(e);
    const i = -n.scrollTop;
    return ae(o).direction === 'rtl' && (l += J(t.clientWidth, o.clientWidth) - r), { width: r, height: a, x: l, y: i };
}
function pr(e, t) {
    const n = Q(e),
        o = de(e),
        r = n.visualViewport;
    let a = o.clientWidth,
        l = o.clientHeight,
        i = 0,
        d = 0;
    if (r) {
        (a = r.width), (l = r.height);
        const c = Lt();
        (!c || (c && t === 'fixed')) && ((i = r.offsetLeft), (d = r.offsetTop));
    }
    return { width: a, height: l, x: i, y: d };
}
function vr(e, t) {
    const n = Be(e, !0, t === 'fixed'),
        o = n.top + e.clientTop,
        r = n.left + e.clientLeft,
        a = se(e) ? Re(e) : ie(1),
        l = e.clientWidth * a.x,
        i = e.clientHeight * a.y,
        d = r * a.x,
        c = o * a.y;
    return { width: l, height: i, x: d, y: c };
}
function rn(e, t, n) {
    let o;
    if (t === 'viewport') o = pr(e, n);
    else if (t === 'document') o = fr(de(e));
    else if (re(t)) o = vr(t, n);
    else {
        const r = $n(e);
        o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
    }
    return lt(o);
}
function Ln(e, t) {
    const n = _e(e);
    return n === t || !re(n) || Ie(n) ? !1 : ae(n).position === 'fixed' || Ln(n, t);
}
function mr(e, t) {
    const n = t.get(e);
    if (n) return n;
    let o = He(e, [], !1).filter((i) => re(i) && De(i) !== 'body'),
        r = null;
    const a = ae(e).position === 'fixed';
    let l = a ? _e(e) : e;
    for (; re(l) && !Ie(l); ) {
        const i = ae(l),
            d = It(l);
        !d && i.position === 'fixed' && (r = null),
            (a ? !d && !r : (!d && i.position === 'static' && !!r && ['absolute', 'fixed'].includes(r.position)) || (Ge(l) && !d && Ln(e, l)))
                ? (o = o.filter((s) => s !== l))
                : (r = i),
            (l = _e(l));
    }
    return t.set(e, o), o;
}
function gr(e) {
    let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
    const l = [...(n === 'clippingAncestors' ? (ct(t) ? [] : mr(t, this._c)) : [].concat(n)), o],
        i = l[0],
        d = l.reduce(
            (c, s) => {
                const u = rn(t, s, r);
                return (
                    (c.top = J(u.top, c.top)), (c.right = Ee(u.right, c.right)), (c.bottom = Ee(u.bottom, c.bottom)), (c.left = J(u.left, c.left)), c
                );
            },
            rn(t, i, r),
        );
    return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}
function hr(e) {
    const { width: t, height: n } = Rn(e);
    return { width: t, height: n };
}
function yr(e, t, n) {
    const o = se(t),
        r = de(t),
        a = n === 'fixed',
        l = Be(e, !0, a, t);
    let i = { scrollLeft: 0, scrollTop: 0 };
    const d = ie(0);
    if (o || (!o && !a))
        if (((De(t) !== 'body' || Ge(r)) && (i = ft(t)), o)) {
            const p = Be(t, !0, a, t);
            (d.x = p.x + t.clientLeft), (d.y = p.y + t.clientTop);
        } else r && (d.x = Nt(r));
    const c = r && !o && !a ? In(r, i) : ie(0),
        s = l.left + i.scrollLeft - d.x - c.x,
        u = l.top + i.scrollTop - d.y - c.y;
    return { x: s, y: u, width: l.width, height: l.height };
}
function mt(e) {
    return ae(e).position === 'static';
}
function an(e, t) {
    if (!se(e) || ae(e).position === 'fixed') return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return de(e) === n && (n = n.ownerDocument.body), n;
}
function Fn(e, t) {
    const n = Q(e);
    if (ct(e)) return n;
    if (!se(e)) {
        let r = _e(e);
        for (; r && !Ie(r); ) {
            if (re(r) && !mt(r)) return r;
            r = _e(r);
        }
        return n;
    }
    let o = an(e, t);
    for (; o && lr(o) && mt(o); ) o = an(o, t);
    return o && Ie(o) && mt(o) && !It(o) ? n : o || ir(e) || n;
}
const br = async function (e) {
    const t = this.getOffsetParent || Fn,
        n = this.getDimensions,
        o = await n(e.floating);
    return { reference: yr(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function wr(e) {
    return ae(e).direction === 'rtl';
}
const xr = {
    convertOffsetParentRelativeRectToViewportRelativeRect: dr,
    getDocumentElement: de,
    getClippingRect: gr,
    getOffsetParent: Fn,
    getElementRects: br,
    getClientRects: cr,
    getDimensions: hr,
    getScale: Re,
    isElement: re,
    isRTL: wr,
};
function Nn(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Cr(e, t) {
    let n = null,
        o;
    const r = de(e);
    function a() {
        var i;
        clearTimeout(o), (i = n) == null || i.disconnect(), (n = null);
    }
    function l(i, d) {
        i === void 0 && (i = !1), d === void 0 && (d = 1), a();
        const c = e.getBoundingClientRect(),
            { left: s, top: u, width: p, height: v } = c;
        if ((i || t(), !p || !v)) return;
        const m = Je(u),
            y = Je(r.clientWidth - (s + p)),
            g = Je(r.clientHeight - (u + v)),
            h = Je(s),
            x = { rootMargin: -m + 'px ' + -y + 'px ' + -g + 'px ' + -h + 'px', threshold: J(0, Ee(1, d)) || 1 };
        let _ = !0;
        function D(L) {
            const M = L[0].intersectionRatio;
            if (M !== d) {
                if (!_) return l();
                M
                    ? l(!1, M)
                    : (o = setTimeout(() => {
                          l(!1, 1e-7);
                      }, 1e3));
            }
            M === 1 && !Nn(c, e.getBoundingClientRect()) && l(), (_ = !1);
        }
        try {
            n = new IntersectionObserver(D, { ...x, root: r.ownerDocument });
        } catch {
            n = new IntersectionObserver(D, x);
        }
        n.observe(e);
    }
    return l(!0), a;
}
function Or(e, t, n, o) {
    o === void 0 && (o = {});
    const {
            ancestorScroll: r = !0,
            ancestorResize: a = !0,
            elementResize: l = typeof ResizeObserver == 'function',
            layoutShift: i = typeof IntersectionObserver == 'function',
            animationFrame: d = !1,
        } = o,
        c = Ft(e),
        s = r || a ? [...(c ? He(c) : []), ...He(t)] : [];
    s.forEach((h) => {
        r && h.addEventListener('scroll', n, { passive: !0 }), a && h.addEventListener('resize', n);
    });
    const u = c && i ? Cr(c, n) : null;
    let p = -1,
        v = null;
    l &&
        ((v = new ResizeObserver((h) => {
            let [w] = h;
            w &&
                w.target === c &&
                v &&
                (v.unobserve(t),
                cancelAnimationFrame(p),
                (p = requestAnimationFrame(() => {
                    var x;
                    (x = v) == null || x.observe(t);
                }))),
                n();
        })),
        c && !d && v.observe(c),
        v.observe(t));
    let m,
        y = d ? Be(e) : null;
    d && g();
    function g() {
        const h = Be(e);
        y && !Nn(y, h) && n(), (y = h), (m = requestAnimationFrame(g));
    }
    return (
        n(),
        () => {
            var h;
            s.forEach((w) => {
                r && w.removeEventListener('scroll', n), a && w.removeEventListener('resize', n);
            }),
                u == null || u(),
                (h = v) == null || h.disconnect(),
                (v = null),
                d && cancelAnimationFrame(m);
        }
    );
}
const Er = nr,
    Ar = or,
    ln = Qo,
    _r = ar,
    Pr = er,
    Br = Jo,
    kr = rr,
    Dr = (e, t, n) => {
        const o = new Map(),
            r = { platform: xr, ...n },
            a = { ...r.platform, _c: o };
        return Zo(e, t, { ...r, platform: a });
    };
function Sr(e) {
    return e != null && typeof e == 'object' && '$el' in e;
}
function At(e) {
    if (Sr(e)) {
        const t = e.$el;
        return $t(t) && De(t) === '#comment' ? null : t;
    }
    return e;
}
function Me(e) {
    return typeof e == 'function' ? e() : f(e);
}
function Tr(e) {
    return {
        name: 'arrow',
        options: e,
        fn(t) {
            const n = At(Me(e.element));
            return n == null ? {} : Br({ element: n, padding: e.padding }).fn(t);
        },
    };
}
function zn(e) {
    return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sn(e, t) {
    const n = zn(e);
    return Math.round(t * n) / n;
}
function Mr(e, t, n) {
    n === void 0 && (n = {});
    const o = n.whileElementsMounted,
        r = T(() => {
            var M;
            return (M = Me(n.open)) != null ? M : !0;
        }),
        a = T(() => Me(n.middleware)),
        l = T(() => {
            var M;
            return (M = Me(n.placement)) != null ? M : 'bottom';
        }),
        i = T(() => {
            var M;
            return (M = Me(n.strategy)) != null ? M : 'absolute';
        }),
        d = T(() => {
            var M;
            return (M = Me(n.transform)) != null ? M : !0;
        }),
        c = T(() => At(e.value)),
        s = T(() => At(t.value)),
        u = E(0),
        p = E(0),
        v = E(i.value),
        m = E(l.value),
        y = gn({}),
        g = E(!1),
        h = T(() => {
            const M = { position: v.value, left: '0', top: '0' };
            if (!s.value) return M;
            const N = sn(s.value, u.value),
                W = sn(s.value, p.value);
            return d.value
                ? { ...M, transform: 'translate(' + N + 'px, ' + W + 'px)', ...(zn(s.value) >= 1.5 && { willChange: 'transform' }) }
                : { position: v.value, left: N + 'px', top: W + 'px' };
        });
    let w;
    function x() {
        if (c.value == null || s.value == null) return;
        const M = r.value;
        Dr(c.value, s.value, { middleware: a.value, placement: l.value, strategy: i.value }).then((N) => {
            (u.value = N.x), (p.value = N.y), (v.value = N.strategy), (m.value = N.placement), (y.value = N.middlewareData), (g.value = M !== !1);
        });
    }
    function _() {
        typeof w == 'function' && (w(), (w = void 0));
    }
    function D() {
        if ((_(), o === void 0)) {
            x();
            return;
        }
        if (c.value != null && s.value != null) {
            w = o(c.value, s.value, x);
            return;
        }
    }
    function L() {
        r.value || (g.value = !1);
    }
    return (
        H([a, l, i, r], x, { flush: 'sync' }),
        H([c, s], D, { flush: 'sync' }),
        H(r, L, { flush: 'sync' }),
        hn() && yn(_),
        { x: Se(u), y: Se(p), strategy: Se(v), placement: Se(m), middlewareData: Se(y), isPositioned: Se(g), floatingStyles: h, update: x }
    );
}
function Y(e, t) {
    const n = typeof e == 'string' && !t ? `${e}Context` : t,
        o = Symbol(n);
    return [
        (r) => {
            const a = wn(o, r);
            if (a || a === null) return a;
            throw new Error(
                `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(', ')}` : `\`${e}\``}`,
            );
        },
        (r) => (xn(o, r), r),
    ];
}
function Vn(e, t, n) {
    const o = n.originalEvent.target,
        r = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function Rr(e, t) {
    var n;
    const o = gn();
    return (
        te(
            () => {
                o.value = e();
            },
            { ...t, flush: (n = void 0) != null ? n : 'sync' },
        ),
        An(o)
    );
}
function Ue(e) {
    return hn() ? (yn(e), !0) : !1;
}
function $r() {
    const e = new Set(),
        t = (n) => {
            e.delete(n);
        };
    return {
        on: (n) => {
            e.add(n);
            const o = () => t(n);
            return Ue(o), { off: o };
        },
        off: t,
        trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n))),
    };
}
function Ir(e) {
    let t = !1,
        n;
    const o = kn(!0);
    return (...r) => (t || ((n = o.run(() => e(...r))), (t = !0)), n);
}
function Wn(e) {
    let t = 0,
        n,
        o;
    const r = () => {
        (t -= 1), o && t <= 0 && (o.stop(), (n = void 0), (o = void 0));
    };
    return (...a) => ((t += 1), n || ((o = kn(!0)), (n = o.run(() => e(...a)))), Ue(r), n);
}
function Oe(e) {
    return typeof e == 'function' ? e() : f(e);
}
const be = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const Lr = (e) => typeof e < 'u',
    Fr = Object.prototype.toString,
    Nr = (e) => Fr.call(e) === '[object Object]',
    zr = () => {},
    un = Vr();
function Vr() {
    var e, t;
    return (
        be &&
        ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) &&
        (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
            (((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 &&
                /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent)))
    );
}
function Wr(e) {
    return ke();
}
function jn(e, t = 1e4) {
    return Io((n, o) => {
        let r = Oe(e),
            a;
        const l = () =>
            setTimeout(() => {
                (r = Oe(e)), o();
            }, Oe(t));
        return (
            Ue(() => {
                clearTimeout(a);
            }),
            {
                get() {
                    return n(), r;
                },
                set(i) {
                    (r = i), o(), clearTimeout(a), (a = l());
                },
            }
        );
    });
}
function jr(e, t) {
    Wr() && $o(e, t);
}
function Kn(e, t, n = {}) {
    const { immediate: o = !0 } = n,
        r = E(!1);
    let a = null;
    function l() {
        a && (clearTimeout(a), (a = null));
    }
    function i() {
        (r.value = !1), l();
    }
    function d(...c) {
        l(),
            (r.value = !0),
            (a = setTimeout(() => {
                (r.value = !1), (a = null), e(...c);
            }, Oe(t)));
    }
    return o && ((r.value = !0), be && d()), Ue(i), { isPending: An(r), start: d, stop: i };
}
function Pe(e) {
    var t;
    const n = Oe(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const zt = be ? window : void 0;
function Le(...e) {
    let t, n, o, r;
    if ((typeof e[0] == 'string' || Array.isArray(e[0]) ? (([n, o, r] = e), (t = zt)) : ([t, n, o, r] = e), !t)) return zr;
    Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
    const a = [],
        l = () => {
            a.forEach((s) => s()), (a.length = 0);
        },
        i = (s, u, p, v) => (s.addEventListener(u, p, v), () => s.removeEventListener(u, p, v)),
        d = H(
            () => [Pe(t), Oe(r)],
            ([s, u]) => {
                if ((l(), !s)) return;
                const p = Nr(u) ? { ...u } : u;
                a.push(...n.flatMap((v) => o.map((m) => i(s, v, m, p))));
            },
            { immediate: !0, flush: 'post' },
        ),
        c = () => {
            d(), l();
        };
    return Ue(c), c;
}
function Kr(e) {
    return typeof e == 'function' ? e : typeof e == 'string' ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Hr(...e) {
    let t,
        n,
        o = {};
    e.length === 3
        ? ((t = e[0]), (n = e[1]), (o = e[2]))
        : e.length === 2
          ? typeof e[1] == 'object'
              ? ((t = !0), (n = e[0]), (o = e[1]))
              : ((t = e[0]), (n = e[1]))
          : ((t = !0), (n = e[0]));
    const { target: r = zt, eventName: a = 'keydown', passive: l = !1, dedupe: i = !1 } = o,
        d = Kr(t);
    return Le(
        r,
        a,
        (c) => {
            (c.repeat && Oe(i)) || (d(c) && n(c));
        },
        l,
    );
}
function Gr() {
    const e = E(!1),
        t = ke();
    return (
        t &&
            ue(() => {
                e.value = !0;
            }, t),
        e
    );
}
function Ur(e) {
    return JSON.parse(JSON.stringify(e));
}
function ze(e, t, n, o = {}) {
    var r, a, l;
    const { clone: i = !1, passive: d = !1, eventName: c, deep: s = !1, defaultValue: u, shouldEmit: p } = o,
        v = ke(),
        m =
            n ||
            (v == null ? void 0 : v.emit) ||
            ((r = v == null ? void 0 : v.$emit) == null ? void 0 : r.bind(v)) ||
            ((l = (a = v == null ? void 0 : v.proxy) == null ? void 0 : a.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
    let y = c;
    t || (t = 'modelValue'), (y = y || `update:${t.toString()}`);
    const g = (x) => (i ? (typeof i == 'function' ? i(x) : Ur(x)) : x),
        h = () => (Lr(e[t]) ? g(e[t]) : u),
        w = (x) => {
            p ? p(x) && m(y, x) : m(y, x);
        };
    if (d) {
        const x = h(),
            _ = E(x);
        let D = !1;
        return (
            H(
                () => e[t],
                (L) => {
                    D || ((D = !0), (_.value = g(L)), oe(() => (D = !1)));
                },
            ),
            H(
                _,
                (L) => {
                    !D && (L !== e[t] || s) && w(L);
                },
                { deep: s },
            ),
            _
        );
    } else
        return T({
            get() {
                return h();
            },
            set(x) {
                w(x);
            },
        });
}
function Vt(e) {
    return e ? e.flatMap((t) => (t.type === On ? Vt(t.children) : [t])) : [];
}
function X() {
    let e = document.activeElement;
    if (e == null) return null;
    for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
    return e;
}
const qr = ['INPUT', 'TEXTAREA'];
function Xr(e, t, n, o = {}) {
    if (!t || (o.enableIgnoredElement && qr.includes(t.nodeName))) return null;
    const {
            arrowKeyOptions: r = 'both',
            attributeName: a = '[data-radix-vue-collection-item]',
            itemsArray: l = [],
            loop: i = !0,
            dir: d = 'ltr',
            preventScroll: c = !0,
            focus: s = !1,
        } = o,
        [u, p, v, m, y, g] = [
            e.key === 'ArrowRight',
            e.key === 'ArrowLeft',
            e.key === 'ArrowUp',
            e.key === 'ArrowDown',
            e.key === 'Home',
            e.key === 'End',
        ],
        h = v || m,
        w = u || p;
    if (!y && !g && ((!h && !w) || (r === 'vertical' && w) || (r === 'horizontal' && h))) return null;
    const x = n ? Array.from(n.querySelectorAll(a)) : l;
    if (!x.length) return null;
    c && e.preventDefault();
    let _ = null;
    return (
        w || h ? (_ = Hn(x, t, { goForward: h ? m : d === 'ltr' ? u : p, loop: i })) : y ? (_ = x.at(0) || null) : g && (_ = x.at(-1) || null),
        s && (_ == null || _.focus()),
        _
    );
}
function Hn(e, t, n, o = e.length) {
    if (--o === 0) return null;
    const r = e.indexOf(t),
        a = n.goForward ? r + 1 : r - 1;
    if (!n.loop && (a < 0 || a >= e.length)) return null;
    const l = (a + e.length) % e.length,
        i = e[l];
    return i ? (i.hasAttribute('disabled') && i.getAttribute('disabled') !== 'false' ? Hn(e, i, n, o) : i) : null;
}
function gt(e) {
    if (e === null || typeof e != 'object') return !1;
    const t = Object.getPrototypeOf(e);
    return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) || Symbol.iterator in e
        ? !1
        : Symbol.toStringTag in e
          ? Object.prototype.toString.call(e) === '[object Module]'
          : !0;
}
function _t(e, t, n = '.', o) {
    if (!gt(t)) return _t(e, {}, n);
    const r = Object.assign({}, t);
    for (const a in e) {
        if (a === '__proto__' || a === 'constructor') continue;
        const l = e[a];
        l != null &&
            (Array.isArray(l) && Array.isArray(r[a])
                ? (r[a] = [...l, ...r[a]])
                : gt(l) && gt(r[a])
                  ? (r[a] = _t(l, r[a], (n ? `${n}.` : '') + a.toString()))
                  : (r[a] = l));
    }
    return r;
}
function Yr(e) {
    return (...t) => t.reduce((n, o) => _t(n, o, ''), {});
}
const Zr = Yr(),
    [Wt, yi] = Y('ConfigProvider');
let Jr = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict',
    Qr = (e = 21) => {
        let t = '',
            n = e;
        for (; n--; ) t += Jr[(Math.random() * 64) | 0];
        return t;
    };
const ea = Wn(() => {
    const e = E(new Map()),
        t = E(),
        n = T(() => {
            for (const l of e.value.values()) if (l) return !0;
            return !1;
        }),
        o = Wt({ scrollBody: E(!0) });
    let r = null;
    const a = () => {
        (document.body.style.paddingRight = ''),
            (document.body.style.marginRight = ''),
            (document.body.style.pointerEvents = ''),
            document.body.style.removeProperty('--scrollbar-width'),
            (document.body.style.overflow = t.value ?? ''),
            un && (r == null || r()),
            (t.value = void 0);
    };
    return (
        H(
            n,
            (l, i) => {
                var d;
                if (!be) return;
                if (!l) {
                    i && a();
                    return;
                }
                t.value === void 0 && (t.value = document.body.style.overflow);
                const c = window.innerWidth - document.documentElement.clientWidth,
                    s = { padding: c, margin: 0 },
                    u =
                        (d = o.scrollBody) != null && d.value
                            ? typeof o.scrollBody.value == 'object'
                                ? Zr(
                                      {
                                          padding: o.scrollBody.value.padding === !0 ? c : o.scrollBody.value.padding,
                                          margin: o.scrollBody.value.margin === !0 ? c : o.scrollBody.value.margin,
                                      },
                                      s,
                                  )
                                : s
                            : { padding: 0, margin: 0 };
                c > 0 &&
                    ((document.body.style.paddingRight = typeof u.padding == 'number' ? `${u.padding}px` : String(u.padding)),
                    (document.body.style.marginRight = typeof u.margin == 'number' ? `${u.margin}px` : String(u.margin)),
                    document.body.style.setProperty('--scrollbar-width', `${c}px`),
                    (document.body.style.overflow = 'hidden')),
                    un && (r = Le(document, 'touchmove', (p) => ta(p), { passive: !1 })),
                    oe(() => {
                        (document.body.style.pointerEvents = 'none'), (document.body.style.overflow = 'hidden');
                    });
            },
            { immediate: !0, flush: 'sync' },
        ),
        e
    );
});
function Gn(e) {
    const t = Qr(6),
        n = ea();
    n.value.set(t, e ?? !1);
    const o = T({ get: () => n.value.get(t) ?? !1, set: (r) => n.value.set(t, r) });
    return (
        jr(() => {
            n.value.delete(t);
        }),
        o
    );
}
function Un(e) {
    const t = window.getComputedStyle(e);
    if (
        t.overflowX === 'scroll' ||
        t.overflowY === 'scroll' ||
        (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
        (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
    )
        return !0;
    {
        const n = e.parentNode;
        return !(n instanceof Element) || n.tagName === 'BODY' ? !1 : Un(n);
    }
}
function ta(e) {
    const t = e || window.event,
        n = t.target;
    return n instanceof Element && Un(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const na = 'data-radix-vue-collection-item';
function oa(e, t = na) {
    const n = Symbol();
    return {
        createCollection: (o) => {
            const r = E([]);
            function a() {
                const l = Pe(o);
                return l ? (r.value = Array.from(l.querySelectorAll(`[${t}]:not([data-disabled])`))) : (r.value = []);
            }
            return (
                Fo(() => {
                    r.value = [];
                }),
                ue(a),
                No(a),
                H(() => (o == null ? void 0 : o.value), a, { immediate: !0 }),
                xn(n, r),
                r
            );
        },
        injectCollection: () => wn(n, E([])),
    };
}
function jt(e) {
    const t = Wt({ dir: E('ltr') });
    return T(() => {
        var n;
        return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || 'ltr';
    });
}
function qe(e) {
    const t = ke(),
        n = t == null ? void 0 : t.type.emits,
        o = {};
    return (
        (n != null && n.length) || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`),
        n == null ||
            n.forEach((r) => {
                o[ko(bn(r))] = (...a) => e(r, ...a);
            }),
        o
    );
}
let ht = 0;
function ra() {
    te((e) => {
        if (!be) return;
        const t = document.querySelectorAll('[data-radix-focus-guard]');
        document.body.insertAdjacentElement('afterbegin', t[0] ?? dn()),
            document.body.insertAdjacentElement('beforeend', t[1] ?? dn()),
            ht++,
            e(() => {
                ht === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach((n) => n.remove()), ht--;
            });
    });
}
function dn() {
    const e = document.createElement('span');
    return (
        e.setAttribute('data-radix-focus-guard', ''),
        (e.tabIndex = 0),
        (e.style.outline = 'none'),
        (e.style.opacity = '0'),
        (e.style.position = 'fixed'),
        (e.style.pointerEvents = 'none'),
        e
    );
}
function aa(e) {
    return T(() => {
        var t;
        return Oe(e) ? !!((t = Pe(e)) != null && t.closest('form')) : !0;
    });
}
function qn(e) {
    const t = ke(),
        n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
            const l = (t == null ? void 0 : t.type.props[a]).default;
            return l !== void 0 && (r[a] = l), r;
        }, {}),
        o = Co(e);
    return T(() => {
        const r = {},
            a = (t == null ? void 0 : t.vnode.props) ?? {};
        return (
            Object.keys(a).forEach((l) => {
                r[bn(l)] = a[l];
            }),
            Object.keys({ ...n, ...r }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {})
        );
    });
}
function Xe(e, t) {
    const n = qn(e),
        o = t ? qe(t) : {};
    return T(() => ({ ...n.value, ...o }));
}
function $() {
    const e = ke(),
        t = E(),
        n = T(() => {
            var l, i;
            return ['#text', '#comment'].includes((l = t.value) == null ? void 0 : l.$el.nodeName)
                ? (i = t.value) == null
                    ? void 0
                    : i.$el.nextElementSibling
                : Pe(t);
        }),
        o = Object.assign({}, e.exposed),
        r = {};
    for (const l in e.props) Object.defineProperty(r, l, { enumerable: !0, configurable: !0, get: () => e.props[l] });
    if (Object.keys(o).length > 0) for (const l in o) Object.defineProperty(r, l, { enumerable: !0, configurable: !0, get: () => o[l] });
    Object.defineProperty(r, '$el', { enumerable: !0, configurable: !0, get: () => e.vnode.el }), (e.exposed = r);
    function a(l) {
        (t.value = l),
            l &&
                (Object.defineProperty(r, '$el', { enumerable: !0, configurable: !0, get: () => (l instanceof Element ? l : l.$el) }),
                (e.exposed = r));
    }
    return { forwardRef: a, currentRef: t, currentElement: n };
}
function la(e, t) {
    const n = jn(!1, 300),
        o = E(null),
        r = $r();
    function a() {
        (o.value = null), (n.value = !1);
    }
    function l(i, d) {
        const c = i.currentTarget,
            s = { x: i.clientX, y: i.clientY },
            u = ia(s, c.getBoundingClientRect()),
            p = sa(s, u),
            v = ua(d.getBoundingClientRect()),
            m = ca([...p, ...v]);
        (o.value = m), (n.value = !0);
    }
    return (
        te((i) => {
            if (e.value && t.value) {
                const d = (s) => l(s, t.value),
                    c = (s) => l(s, e.value);
                e.value.addEventListener('pointerleave', d),
                    t.value.addEventListener('pointerleave', c),
                    i(() => {
                        var s, u;
                        (s = e.value) == null || s.removeEventListener('pointerleave', d),
                            (u = t.value) == null || u.removeEventListener('pointerleave', c);
                    });
            }
        }),
        te((i) => {
            var d;
            if (o.value) {
                const c = (s) => {
                    var u, p;
                    if (!o.value) return;
                    const v = s.target,
                        m = { x: s.clientX, y: s.clientY },
                        y = ((u = e.value) == null ? void 0 : u.contains(v)) || ((p = t.value) == null ? void 0 : p.contains(v)),
                        g = !da(m, o.value),
                        h = !!v.closest('[data-grace-area-trigger]');
                    y ? a() : (g || h) && (a(), r.trigger());
                };
                (d = e.value) == null || d.ownerDocument.addEventListener('pointermove', c),
                    i(() => {
                        var s;
                        return (s = e.value) == null ? void 0 : s.ownerDocument.removeEventListener('pointermove', c);
                    });
            }
        }),
        { isPointerInTransit: n, onPointerExit: r.on }
    );
}
function ia(e, t) {
    const n = Math.abs(t.top - e.y),
        o = Math.abs(t.bottom - e.y),
        r = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, o, r, a)) {
        case a:
            return 'left';
        case r:
            return 'right';
        case n:
            return 'top';
        case o:
            return 'bottom';
        default:
            throw new Error('unreachable');
    }
}
function sa(e, t, n = 5) {
    const o = [];
    switch (t) {
        case 'top':
            o.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case 'bottom':
            o.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case 'left':
            o.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case 'right':
            o.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return o;
}
function ua(e) {
    const { top: t, right: n, bottom: o, left: r } = e;
    return [
        { x: r, y: t },
        { x: n, y: t },
        { x: n, y: o },
        { x: r, y: o },
    ];
}
function da(e, t) {
    const { x: n, y: o } = e;
    let r = !1;
    for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
        const i = t[a].x,
            d = t[a].y,
            c = t[l].x,
            s = t[l].y;
        d > o != s > o && n < ((c - i) * (o - d)) / (s - d) + i && (r = !r);
    }
    return r;
}
function ca(e) {
    const t = e.slice();
    return t.sort((n, o) => (n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0)), fa(t);
}
function fa(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let o = 0; o < e.length; o++) {
        const r = e[o];
        for (; t.length >= 2; ) {
            const a = t[t.length - 1],
                l = t[t.length - 2];
            if ((a.x - l.x) * (r.y - l.y) >= (a.y - l.y) * (r.x - l.x)) t.pop();
            else break;
        }
        t.push(r);
    }
    t.pop();
    const n = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const r = e[o];
        for (; n.length >= 2; ) {
            const a = n[n.length - 1],
                l = n[n.length - 2];
            if ((a.x - l.x) * (r.y - l.y) >= (a.y - l.y) * (r.x - l.x)) n.pop();
            else break;
        }
        n.push(r);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var pa = function (e) {
        if (typeof document > 'u') return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body;
    },
    Te = new WeakMap(),
    Qe = new WeakMap(),
    et = {},
    yt = 0,
    Xn = function (e) {
        return e && (e.host || Xn(e.parentNode));
    },
    va = function (e, t) {
        return t
            .map(function (n) {
                if (e.contains(n)) return n;
                var o = Xn(n);
                return o && e.contains(o) ? o : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null);
            })
            .filter(function (n) {
                return !!n;
            });
    },
    ma = function (e, t, n, o) {
        var r = va(t, Array.isArray(e) ? e : [e]);
        et[n] || (et[n] = new WeakMap());
        var a = et[n],
            l = [],
            i = new Set(),
            d = new Set(r),
            c = function (u) {
                !u || i.has(u) || (i.add(u), c(u.parentNode));
            };
        r.forEach(c);
        var s = function (u) {
            !u ||
                d.has(u) ||
                Array.prototype.forEach.call(u.children, function (p) {
                    if (i.has(p)) s(p);
                    else
                        try {
                            var v = p.getAttribute(o),
                                m = v !== null && v !== 'false',
                                y = (Te.get(p) || 0) + 1,
                                g = (a.get(p) || 0) + 1;
                            Te.set(p, y),
                                a.set(p, g),
                                l.push(p),
                                y === 1 && m && Qe.set(p, !0),
                                g === 1 && p.setAttribute(n, 'true'),
                                m || p.setAttribute(o, 'true');
                        } catch (h) {
                            console.error('aria-hidden: cannot operate on ', p, h);
                        }
                });
        };
        return (
            s(t),
            i.clear(),
            yt++,
            function () {
                l.forEach(function (u) {
                    var p = Te.get(u) - 1,
                        v = a.get(u) - 1;
                    Te.set(u, p), a.set(u, v), p || (Qe.has(u) || u.removeAttribute(o), Qe.delete(u)), v || u.removeAttribute(n);
                }),
                    yt--,
                    yt || ((Te = new WeakMap()), (Te = new WeakMap()), (Qe = new WeakMap()), (et = {}));
            }
        );
    },
    ga = function (e, t, n) {
        n === void 0 && (n = 'data-aria-hidden');
        var o = Array.from(Array.isArray(e) ? e : [e]),
            r = pa(e);
        return r
            ? (o.push.apply(o, Array.from(r.querySelectorAll('[aria-live]'))), ma(o, r, n, 'aria-hidden'))
            : function () {
                  return null;
              };
    };
function Yn(e) {
    let t;
    H(
        () => Pe(e),
        (n) => {
            n ? (t = ga(n)) : t && t();
        },
    ),
        ut(() => {
            t && t();
        });
}
let ha = 0;
function Fe(e, t = 'radix') {
    const n = Wt({ useId: void 0 });
    return Zt ? `${t}-${Zt()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++ha}`;
}
function ya(e) {
    const t = E(),
        n = T(() => {
            var r;
            return ((r = t.value) == null ? void 0 : r.width) ?? 0;
        }),
        o = T(() => {
            var r;
            return ((r = t.value) == null ? void 0 : r.height) ?? 0;
        });
    return (
        ue(() => {
            const r = Pe(e);
            if (r) {
                t.value = { width: r.offsetWidth, height: r.offsetHeight };
                const a = new ResizeObserver((l) => {
                    if (!Array.isArray(l) || !l.length) return;
                    const i = l[0];
                    let d, c;
                    if ('borderBoxSize' in i) {
                        const s = i.borderBoxSize,
                            u = Array.isArray(s) ? s[0] : s;
                        (d = u.inlineSize), (c = u.blockSize);
                    } else (d = r.offsetWidth), (c = r.offsetHeight);
                    t.value = { width: d, height: c };
                });
                return a.observe(r, { box: 'border-box' }), () => a.unobserve(r);
            } else t.value = void 0;
        }),
        { width: n, height: o }
    );
}
function ba(e, t) {
    const n = E(e);
    function o(r) {
        return t[n.value][r] ?? n.value;
    }
    return {
        state: n,
        dispatch: (r) => {
            n.value = o(r);
        },
    };
}
const wa = 'data-item-text';
function xa(e) {
    const t = jn('', 1e3);
    return {
        search: t,
        handleTypeaheadSearch: (n, o) => {
            if (!(e != null && e.value) && !o) return;
            t.value = t.value + n;
            const r = (e == null ? void 0 : e.value) ?? o,
                a = X(),
                l = r.map((u) => {
                    var p;
                    return { ref: u, textValue: ((p = (u.querySelector(`[${wa}]`) ?? u).textContent) == null ? void 0 : p.trim()) ?? '' };
                }),
                i = l.find((u) => u.ref === a),
                d = l.map((u) => u.textValue),
                c = Oa(d, t.value, i == null ? void 0 : i.textValue),
                s = l.find((u) => u.textValue === c);
            return s && s.ref.focus(), s == null ? void 0 : s.ref;
        },
        resetTypeahead: () => {
            t.value = '';
        },
    };
}
function Ca(e, t) {
    return e.map((n, o) => e[(t + o) % e.length]);
}
function Oa(e, t, n) {
    const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t,
        r = n ? e.indexOf(n) : -1;
    let a = Ca(e, Math.max(r, 0));
    o.length === 1 && (a = a.filter((i) => i !== n));
    const l = a.find((i) => i.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0;
}
const Kt = A({
        name: 'PrimitiveSlot',
        inheritAttrs: !1,
        setup(e, { attrs: t, slots: n }) {
            return () => {
                var o, r;
                if (!n.default) return null;
                const a = Vt(n.default()),
                    l = a.findIndex((s) => s.type !== En);
                if (l === -1) return a;
                const i = a[l];
                (o = i.props) == null || delete o.ref;
                const d = i.props ? F(t, i.props) : t;
                t.class && (r = i.props) != null && r.class && delete i.props.class;
                const c = Bo(i, d);
                for (const s in d) s.startsWith('on') && (c.props || (c.props = {}), (c.props[s] = d[s]));
                return a.length === 1 ? c : ((a[l] = c), a);
            };
        },
    }),
    V = A({
        name: 'Primitive',
        inheritAttrs: !1,
        props: { asChild: { type: Boolean, default: !1 }, as: { type: [String, Object], default: 'div' } },
        setup(e, { attrs: t, slots: n }) {
            const o = e.asChild ? 'template' : e.as;
            return typeof o == 'string' && ['area', 'img', 'input'].includes(o)
                ? () => me(o, t)
                : o !== 'template'
                  ? () => me(e.as, t, { default: n.default })
                  : () => me(Kt, t, { default: n.default });
        },
    });
function Zn() {
    const e = E(),
        t = T(() => {
            var n, o;
            return ['#text', '#comment'].includes((n = e.value) == null ? void 0 : n.$el.nodeName)
                ? (o = e.value) == null
                    ? void 0
                    : o.$el.nextElementSibling
                : Pe(e);
        });
    return { primitiveElement: e, currentElement: t };
}
function Ea(e, t) {
    var n;
    const o = E({}),
        r = E('none'),
        a = E(e),
        l = e.value ? 'mounted' : 'unmounted';
    let i;
    const d = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? zt,
        { state: c, dispatch: s } = ba(l, {
            mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
            unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
            unmounted: { MOUNT: 'mounted' },
        }),
        u = (g) => {
            var h;
            if (be) {
                const w = new CustomEvent(g, { bubbles: !1, cancelable: !1 });
                (h = t.value) == null || h.dispatchEvent(w);
            }
        };
    H(
        e,
        async (g, h) => {
            var w;
            const x = h !== g;
            if ((await oe(), x)) {
                const _ = r.value,
                    D = tt(t.value);
                g
                    ? (s('MOUNT'), u('enter'), D === 'none' && u('after-enter'))
                    : D === 'none' || ((w = o.value) == null ? void 0 : w.display) === 'none'
                      ? (s('UNMOUNT'), u('leave'), u('after-leave'))
                      : h && _ !== D
                        ? (s('ANIMATION_OUT'), u('leave'))
                        : (s('UNMOUNT'), u('after-leave'));
            }
        },
        { immediate: !0 },
    );
    const p = (g) => {
            const h = tt(t.value),
                w = h.includes(g.animationName),
                x = c.value === 'mounted' ? 'enter' : 'leave';
            if (g.target === t.value && w && (u(`after-${x}`), s('ANIMATION_END'), !a.value)) {
                const _ = t.value.style.animationFillMode;
                (t.value.style.animationFillMode = 'forwards'),
                    (i =
                        d == null
                            ? void 0
                            : d.setTimeout(() => {
                                  var D;
                                  ((D = t.value) == null ? void 0 : D.style.animationFillMode) === 'forwards' &&
                                      (t.value.style.animationFillMode = _);
                              }));
            }
            g.target === t.value && h === 'none' && s('ANIMATION_END');
        },
        v = (g) => {
            g.target === t.value && (r.value = tt(t.value));
        },
        m = H(
            t,
            (g, h) => {
                g
                    ? ((o.value = getComputedStyle(g)),
                      g.addEventListener('animationstart', v),
                      g.addEventListener('animationcancel', p),
                      g.addEventListener('animationend', p))
                    : (s('ANIMATION_END'),
                      i !== void 0 && (d == null || d.clearTimeout(i)),
                      h == null || h.removeEventListener('animationstart', v),
                      h == null || h.removeEventListener('animationcancel', p),
                      h == null || h.removeEventListener('animationend', p));
            },
            { immediate: !0 },
        ),
        y = H(c, () => {
            const g = tt(t.value);
            r.value = c.value === 'mounted' ? g : 'none';
        });
    return (
        ut(() => {
            m(), y();
        }),
        { isPresent: T(() => ['mounted', 'unmountSuspended'].includes(c.value)) }
    );
}
function tt(e) {
    return (e && getComputedStyle(e).animationName) || 'none';
}
const Ye = A({
        name: 'Presence',
        props: { present: { type: Boolean, required: !0 }, forceMount: { type: Boolean } },
        slots: {},
        setup(e, { slots: t, expose: n }) {
            var o;
            const { present: r, forceMount: a } = ye(e),
                l = E(),
                { isPresent: i } = Ea(r, l);
            n({ present: i });
            let d = t.default({ present: i });
            d = Vt(d || []);
            const c = ke();
            if (d && (d == null ? void 0 : d.length) > 1) {
                const s = (o = c == null ? void 0 : c.parent) != null && o.type.name ? `<${c.parent.type.name} />` : 'component';
                throw new Error(
                    [
                        `Detected an invalid children for \`${s}\` for  \`Presence\` component.`,
                        '',
                        'Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.',
                        'You can apply a few solutions:',
                        [
                            'Provide a single child element so that `presence` directive attach correctly.',
                            'Ensure the first child is an actual element instead of a raw text node or comment node.',
                        ].map((u) => `  - ${u}`).join(`
`),
                    ].join(`
`),
                );
            }
            return () =>
                a.value || r.value || i.value
                    ? me(t.default({ present: i })[0], {
                          ref: (s) => {
                              const u = Pe(s);
                              return (
                                  typeof (u == null ? void 0 : u.hasAttribute) > 'u' ||
                                      (u != null && u.hasAttribute('data-radix-popper-content-wrapper')
                                          ? (l.value = u.firstElementChild)
                                          : (l.value = u)),
                                  u
                              );
                          },
                      })
                    : null;
        },
    }),
    [ce, Aa] = Y('DialogRoot'),
    bi = A({
        inheritAttrs: !1,
        __name: 'DialogRoot',
        props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean, default: !1 }, modal: { type: Boolean, default: !0 } },
        emits: ['update:open'],
        setup(e, { emit: t }) {
            const n = e,
                o = ze(n, 'open', t, { defaultValue: n.defaultOpen, passive: n.open === void 0 }),
                r = E(),
                a = E(),
                { modal: l } = ye(n);
            return (
                Aa({
                    open: o,
                    modal: l,
                    openModal: () => {
                        o.value = !0;
                    },
                    onOpenChange: (i) => {
                        o.value = i;
                    },
                    onOpenToggle: () => {
                        o.value = !o.value;
                    },
                    contentId: '',
                    titleId: '',
                    descriptionId: '',
                    triggerElement: r,
                    contentElement: a,
                }),
                (i, d) => B(i.$slots, 'default', { open: f(o) })
            );
        },
    }),
    wi = A({
        __name: 'DialogTrigger',
        props: { asChild: { type: Boolean }, as: { default: 'button' } },
        setup(e) {
            const t = e,
                n = ce(),
                { forwardRef: o, currentElement: r } = $();
            return (
                n.contentId || (n.contentId = Fe(void 0, 'radix-vue-dialog-content')),
                ue(() => {
                    n.triggerElement.value = r.value;
                }),
                (a, l) => (
                    P(),
                    k(
                        f(V),
                        F(t, {
                            ref: f(o),
                            type: a.as === 'button' ? 'button' : void 0,
                            'aria-haspopup': 'dialog',
                            'aria-expanded': f(n).open.value || !1,
                            'aria-controls': f(n).open.value ? f(n).contentId : void 0,
                            'data-state': f(n).open.value ? 'open' : 'closed',
                            onClick: f(n).onOpenToggle,
                        }),
                        { default: C(() => [B(a.$slots, 'default')]), _: 3 },
                        16,
                        ['type', 'aria-expanded', 'aria-controls', 'data-state', 'onClick'],
                    )
                )
            );
        },
    }),
    Ht = A({
        __name: 'Teleport',
        props: { to: { default: 'body' }, disabled: { type: Boolean }, forceMount: { type: Boolean } },
        setup(e) {
            const t = Gr();
            return (n, o) =>
                f(t) || n.forceMount
                    ? (P(), k(Do, { key: 0, to: n.to, disabled: n.disabled }, [B(n.$slots, 'default')], 8, ['to', 'disabled']))
                    : st('', !0);
        },
    }),
    xi = A({
        __name: 'DialogPortal',
        props: { to: {}, disabled: { type: Boolean }, forceMount: { type: Boolean } },
        setup(e) {
            const t = e;
            return (n, o) => (P(), k(f(Ht), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    _a = 'dismissableLayer.pointerDownOutside',
    Pa = 'dismissableLayer.focusOutside';
function Jn(e, t) {
    const n = t.closest('[data-dismissable-layer]'),
        o = e.dataset.dismissableLayer === '' ? e : e.querySelector('[data-dismissable-layer]'),
        r = Array.from(e.ownerDocument.querySelectorAll('[data-dismissable-layer]'));
    return !!((n && o === n) || r.indexOf(o) < r.indexOf(n));
}
function Ba(e, t) {
    var n;
    const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
        r = E(!1),
        a = E(() => {});
    return (
        te((l) => {
            if (!be) return;
            const i = async (c) => {
                    const s = c.target;
                    if (t != null && t.value) {
                        if (Jn(t.value, s)) {
                            r.value = !1;
                            return;
                        }
                        if (c.target && !r.value) {
                            let u = function () {
                                Vn(_a, e, p);
                            };
                            const p = { originalEvent: c };
                            c.pointerType === 'touch'
                                ? (o.removeEventListener('click', a.value), (a.value = u), o.addEventListener('click', a.value, { once: !0 }))
                                : u();
                        } else o.removeEventListener('click', a.value);
                        r.value = !1;
                    }
                },
                d = window.setTimeout(() => {
                    o.addEventListener('pointerdown', i);
                }, 0);
            l(() => {
                window.clearTimeout(d), o.removeEventListener('pointerdown', i), o.removeEventListener('click', a.value);
            });
        }),
        { onPointerDownCapture: () => (r.value = !0) }
    );
}
function ka(e, t) {
    var n;
    const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
        r = E(!1);
    return (
        te((a) => {
            if (!be) return;
            const l = async (i) => {
                t != null && t.value && (await oe(), !(!t.value || Jn(t.value, i.target)) && i.target && !r.value && Vn(Pa, e, { originalEvent: i }));
            };
            o.addEventListener('focusin', l), a(() => o.removeEventListener('focusin', l));
        }),
        { onFocusCapture: () => (r.value = !0), onBlurCapture: () => (r.value = !1) }
    );
}
const pe = Bn({ layersRoot: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    Gt = A({
        __name: 'DismissableLayer',
        props: { disableOutsidePointerEvents: { type: Boolean, default: !1 }, asChild: { type: Boolean }, as: {} },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'dismiss'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                { forwardRef: r, currentElement: a } = $(),
                l = T(() => {
                    var m;
                    return ((m = a.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
                }),
                i = T(() => pe.layersRoot),
                d = T(() => (a.value ? Array.from(i.value).indexOf(a.value) : -1)),
                c = T(() => pe.layersWithOutsidePointerEventsDisabled.size > 0),
                s = T(() => {
                    const m = Array.from(i.value),
                        [y] = [...pe.layersWithOutsidePointerEventsDisabled].slice(-1),
                        g = m.indexOf(y);
                    return d.value >= g;
                }),
                u = Ba(async (m) => {
                    const y = [...pe.branches].some((g) => (g == null ? void 0 : g.contains(m.target)));
                    !s.value || y || (o('pointerDownOutside', m), o('interactOutside', m), await oe(), m.defaultPrevented || o('dismiss'));
                }, a),
                p = ka((m) => {
                    [...pe.branches].some((y) => (y == null ? void 0 : y.contains(m.target))) ||
                        (o('focusOutside', m), o('interactOutside', m), m.defaultPrevented || o('dismiss'));
                }, a);
            Hr('Escape', (m) => {
                d.value === i.value.size - 1 && (o('escapeKeyDown', m), m.defaultPrevented || o('dismiss'));
            });
            let v;
            return (
                te((m) => {
                    a.value &&
                        (n.disableOutsidePointerEvents &&
                            (pe.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((v = l.value.body.style.pointerEvents), (l.value.body.style.pointerEvents = 'none')),
                            pe.layersWithOutsidePointerEventsDisabled.add(a.value)),
                        i.value.add(a.value),
                        m(() => {
                            n.disableOutsidePointerEvents &&
                                pe.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (l.value.body.style.pointerEvents = v);
                        }));
                }),
                te((m) => {
                    m(() => {
                        a.value && (i.value.delete(a.value), pe.layersWithOutsidePointerEventsDisabled.delete(a.value));
                    });
                }),
                (m, y) => (
                    P(),
                    k(
                        f(V),
                        {
                            ref: f(r),
                            'as-child': m.asChild,
                            as: m.as,
                            'data-dismissable-layer': '',
                            style: Pn({ pointerEvents: c.value ? (s.value ? 'auto' : 'none') : void 0 }),
                            onFocusCapture: f(p).onFocusCapture,
                            onBlurCapture: f(p).onBlurCapture,
                            onPointerdownCapture: f(u).onPointerDownCapture,
                        },
                        { default: C(() => [B(m.$slots, 'default')]), _: 3 },
                        8,
                        ['as-child', 'as', 'style', 'onFocusCapture', 'onBlurCapture', 'onPointerdownCapture'],
                    )
                )
            );
        },
    }),
    bt = 'focusScope.autoFocusOnMount',
    wt = 'focusScope.autoFocusOnUnmount',
    cn = { bubbles: !1, cancelable: !0 };
function Da(e, { select: t = !1 } = {}) {
    const n = X();
    for (const o of e) if ((Ce(o, { select: t }), X() !== n)) return !0;
}
function Sa(e) {
    const t = Qn(e),
        n = fn(t, e),
        o = fn(t.reverse(), e);
    return [n, o];
}
function Qn(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (o) => {
                const r = o.tagName === 'INPUT' && o.type === 'hidden';
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function fn(e, t) {
    for (const n of e) if (!Ta(n, { upTo: t })) return n;
}
function Ta(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    for (; e; ) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === 'none') return !0;
        e = e.parentElement;
    }
    return !1;
}
function Ma(e) {
    return e instanceof HTMLInputElement && 'select' in e;
}
function Ce(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
        const n = X();
        e.focus({ preventScroll: !0 }), e !== n && Ma(e) && t && e.select();
    }
}
const Ra = Ir(() => E([]));
function $a() {
    const e = Ra();
    return {
        add(t) {
            const n = e.value[0];
            t !== n && (n == null || n.pause()), (e.value = pn(e.value, t)), e.value.unshift(t);
        },
        remove(t) {
            var n;
            (e.value = pn(e.value, t)), (n = e.value[0]) == null || n.resume();
        },
    };
}
function pn(e, t) {
    const n = [...e],
        o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n;
}
function Ia(e) {
    return e.filter((t) => t.tagName !== 'A');
}
const eo = A({
        __name: 'FocusScope',
        props: { loop: { type: Boolean, default: !1 }, trapped: { type: Boolean, default: !1 }, asChild: { type: Boolean }, as: {} },
        emits: ['mountAutoFocus', 'unmountAutoFocus'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                { currentRef: r, currentElement: a } = $(),
                l = E(null),
                i = $a(),
                d = Bn({
                    paused: !1,
                    pause() {
                        this.paused = !0;
                    },
                    resume() {
                        this.paused = !1;
                    },
                });
            te((s) => {
                if (!be) return;
                const u = a.value;
                if (!n.trapped) return;
                function p(g) {
                    if (d.paused || !u) return;
                    const h = g.target;
                    u.contains(h) ? (l.value = h) : Ce(l.value, { select: !0 });
                }
                function v(g) {
                    if (d.paused || !u) return;
                    const h = g.relatedTarget;
                    h !== null && (u.contains(h) || Ce(l.value, { select: !0 }));
                }
                function m(g) {
                    u.contains(l.value) || Ce(u);
                }
                document.addEventListener('focusin', p), document.addEventListener('focusout', v);
                const y = new MutationObserver(m);
                u && y.observe(u, { childList: !0, subtree: !0 }),
                    s(() => {
                        document.removeEventListener('focusin', p), document.removeEventListener('focusout', v), y.disconnect();
                    });
            }),
                te(async (s) => {
                    const u = a.value;
                    if ((await oe(), !u)) return;
                    i.add(d);
                    const p = X();
                    if (!u.contains(p)) {
                        const v = new CustomEvent(bt, cn);
                        u.addEventListener(bt, (m) => o('mountAutoFocus', m)),
                            u.dispatchEvent(v),
                            v.defaultPrevented || (Da(Ia(Qn(u)), { select: !0 }), X() === p && Ce(u));
                    }
                    s(() => {
                        u.removeEventListener(bt, (y) => o('mountAutoFocus', y));
                        const v = new CustomEvent(wt, cn),
                            m = (y) => {
                                o('unmountAutoFocus', y);
                            };
                        u.addEventListener(wt, m),
                            u.dispatchEvent(v),
                            setTimeout(() => {
                                v.defaultPrevented || Ce(p ?? document.body, { select: !0 }), u.removeEventListener(wt, m), i.remove(d);
                            }, 0);
                    });
                });
            function c(s) {
                if ((!n.loop && !n.trapped) || d.paused) return;
                const u = s.key === 'Tab' && !s.altKey && !s.ctrlKey && !s.metaKey,
                    p = X();
                if (u && p) {
                    const v = s.currentTarget,
                        [m, y] = Sa(v);
                    m && y
                        ? !s.shiftKey && p === y
                            ? (s.preventDefault(), n.loop && Ce(m, { select: !0 }))
                            : s.shiftKey && p === m && (s.preventDefault(), n.loop && Ce(y, { select: !0 }))
                        : p === v && s.preventDefault();
                }
            }
            return (s, u) => (
                P(),
                k(
                    f(V),
                    { ref_key: 'currentRef', ref: r, tabindex: '-1', 'as-child': s.asChild, as: s.as, onKeydown: c },
                    { default: C(() => [B(s.$slots, 'default')]), _: 3 },
                    8,
                    ['as-child', 'as'],
                )
            );
        },
    }),
    La = 'menu.itemSelect',
    Pt = ['Enter', ' '],
    Fa = ['ArrowDown', 'PageUp', 'Home'],
    to = ['ArrowUp', 'PageDown', 'End'],
    Na = [...Fa, ...to];
[...Pt], [...Pt];
function no(e) {
    return e ? 'open' : 'closed';
}
function za(e) {
    const t = X();
    for (const n of e) if (n === t || (n.focus(), X() !== t)) return;
}
function Va(e, t) {
    const { x: n, y: o } = e;
    let r = !1;
    for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
        const i = t[a].x,
            d = t[a].y,
            c = t[l].x,
            s = t[l].y;
        d > o != s > o && n < ((c - i) * (o - d)) / (s - d) + i && (r = !r);
    }
    return r;
}
function Wa(e, t) {
    if (!t) return !1;
    const n = { x: e.clientX, y: e.clientY };
    return Va(n, t);
}
function Bt(e) {
    return e.pointerType === 'mouse';
}
const oo = A({
        __name: 'DialogContentImpl',
        props: {
            forceMount: { type: Boolean },
            trapFocus: { type: Boolean },
            disableOutsidePointerEvents: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'openAutoFocus', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = ce(),
                { forwardRef: a, currentElement: l } = $();
            return (
                r.titleId || (r.titleId = Fe(void 0, 'radix-vue-dialog-title')),
                r.descriptionId || (r.descriptionId = Fe(void 0, 'radix-vue-dialog-description')),
                ue(() => {
                    (r.contentElement = l), X() !== document.body && (r.triggerElement.value = X());
                }),
                (i, d) => (
                    P(),
                    k(
                        f(eo),
                        {
                            'as-child': '',
                            loop: '',
                            trapped: n.trapFocus,
                            onMountAutoFocus: d[5] || (d[5] = (c) => o('openAutoFocus', c)),
                            onUnmountAutoFocus: d[6] || (d[6] = (c) => o('closeAutoFocus', c)),
                        },
                        {
                            default: C(() => [
                                q(
                                    f(Gt),
                                    F(
                                        {
                                            id: f(r).contentId,
                                            ref: f(a),
                                            as: i.as,
                                            'as-child': i.asChild,
                                            'disable-outside-pointer-events': i.disableOutsidePointerEvents,
                                            role: 'dialog',
                                            'aria-describedby': f(r).descriptionId,
                                            'aria-labelledby': f(r).titleId,
                                            'data-state': f(no)(f(r).open.value),
                                        },
                                        i.$attrs,
                                        {
                                            onDismiss: d[0] || (d[0] = (c) => f(r).onOpenChange(!1)),
                                            onEscapeKeyDown: d[1] || (d[1] = (c) => o('escapeKeyDown', c)),
                                            onFocusOutside: d[2] || (d[2] = (c) => o('focusOutside', c)),
                                            onInteractOutside: d[3] || (d[3] = (c) => o('interactOutside', c)),
                                            onPointerDownOutside: d[4] || (d[4] = (c) => o('pointerDownOutside', c)),
                                        },
                                    ),
                                    { default: C(() => [B(i.$slots, 'default')]), _: 3 },
                                    16,
                                    ['id', 'as', 'as-child', 'disable-outside-pointer-events', 'aria-describedby', 'aria-labelledby', 'data-state'],
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        ['trapped'],
                    )
                )
            );
        },
    }),
    ja = A({
        __name: 'DialogContentModal',
        props: {
            forceMount: { type: Boolean },
            trapFocus: { type: Boolean },
            disableOutsidePointerEvents: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'openAutoFocus', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = ce(),
                a = qe(o),
                { forwardRef: l, currentElement: i } = $();
            return (
                Yn(i),
                (d, c) => (
                    P(),
                    k(
                        oo,
                        F(
                            { ...n, ...f(a) },
                            {
                                ref: f(l),
                                'trap-focus': f(r).open.value,
                                'disable-outside-pointer-events': !0,
                                onCloseAutoFocus:
                                    c[0] ||
                                    (c[0] = (s) => {
                                        var u;
                                        s.defaultPrevented || (s.preventDefault(), (u = f(r).triggerElement.value) == null || u.focus());
                                    }),
                                onPointerDownOutside:
                                    c[1] ||
                                    (c[1] = (s) => {
                                        const u = s.detail.originalEvent,
                                            p = u.button === 0 && u.ctrlKey === !0;
                                        (u.button === 2 || p) && s.preventDefault();
                                    }),
                                onFocusOutside:
                                    c[2] ||
                                    (c[2] = (s) => {
                                        s.preventDefault();
                                    }),
                            },
                        ),
                        { default: C(() => [B(d.$slots, 'default')]), _: 3 },
                        16,
                        ['trap-focus'],
                    )
                )
            );
        },
    }),
    Ka = A({
        __name: 'DialogContentNonModal',
        props: {
            forceMount: { type: Boolean },
            trapFocus: { type: Boolean },
            disableOutsidePointerEvents: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'openAutoFocus', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = e,
                o = qe(t);
            $();
            const r = ce(),
                a = E(!1),
                l = E(!1);
            return (i, d) => (
                P(),
                k(
                    oo,
                    F(
                        { ...n, ...f(o) },
                        {
                            'trap-focus': !1,
                            'disable-outside-pointer-events': !1,
                            onCloseAutoFocus:
                                d[0] ||
                                (d[0] = (c) => {
                                    var s;
                                    c.defaultPrevented || (a.value || (s = f(r).triggerElement.value) == null || s.focus(), c.preventDefault()),
                                        (a.value = !1),
                                        (l.value = !1);
                                }),
                            onInteractOutside:
                                d[1] ||
                                (d[1] = (c) => {
                                    var s;
                                    c.defaultPrevented || ((a.value = !0), c.detail.originalEvent.type === 'pointerdown' && (l.value = !0));
                                    const u = c.target;
                                    (s = f(r).triggerElement.value) != null && s.contains(u) && c.preventDefault(),
                                        c.detail.originalEvent.type === 'focusin' && l.value && c.preventDefault();
                                }),
                        },
                    ),
                    { default: C(() => [B(i.$slots, 'default')]), _: 3 },
                    16,
                )
            );
        },
    }),
    Ci = A({
        __name: 'DialogContent',
        props: {
            forceMount: { type: Boolean },
            trapFocus: { type: Boolean },
            disableOutsidePointerEvents: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'openAutoFocus', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = ce(),
                a = qe(o),
                { forwardRef: l } = $();
            return (i, d) => (
                P(),
                k(
                    f(Ye),
                    { present: i.forceMount || f(r).open.value },
                    {
                        default: C(() => [
                            f(r).modal.value
                                ? (P(),
                                  k(
                                      ja,
                                      F({ key: 0, ref: f(l) }, { ...n, ...f(a), ...i.$attrs }),
                                      { default: C(() => [B(i.$slots, 'default')]), _: 3 },
                                      16,
                                  ))
                                : (P(),
                                  k(
                                      Ka,
                                      F({ key: 1, ref: f(l) }, { ...n, ...f(a), ...i.$attrs }),
                                      { default: C(() => [B(i.$slots, 'default')]), _: 3 },
                                      16,
                                  )),
                        ]),
                        _: 3,
                    },
                    8,
                    ['present'],
                )
            );
        },
    }),
    Ha = A({
        __name: 'DialogOverlayImpl',
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = ce();
            return (
                Gn(!0),
                $(),
                (n, o) => (
                    P(),
                    k(
                        f(V),
                        { as: n.as, 'as-child': n.asChild, 'data-state': f(t).open.value ? 'open' : 'closed', style: { 'pointer-events': 'auto' } },
                        { default: C(() => [B(n.$slots, 'default')]), _: 3 },
                        8,
                        ['as', 'as-child', 'data-state'],
                    )
                )
            );
        },
    }),
    Oi = A({
        __name: 'DialogOverlay',
        props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = ce(),
                { forwardRef: n } = $();
            return (o, r) => {
                var a;
                return (a = f(t)) != null && a.modal.value
                    ? (P(),
                      k(
                          f(Ye),
                          { key: 0, present: o.forceMount || f(t).open.value },
                          {
                              default: C(() => [
                                  q(
                                      Ha,
                                      F(o.$attrs, { ref: f(n), as: o.as, 'as-child': o.asChild }),
                                      { default: C(() => [B(o.$slots, 'default')]), _: 3 },
                                      16,
                                      ['as', 'as-child'],
                                  ),
                              ]),
                              _: 3,
                          },
                          8,
                          ['present'],
                      ))
                    : st('', !0);
            };
        },
    }),
    Ei = A({
        __name: 'DialogClose',
        props: { asChild: { type: Boolean }, as: { default: 'button' } },
        setup(e) {
            const t = e;
            $();
            const n = ce();
            return (o, r) => (
                P(),
                k(
                    f(V),
                    F(t, { type: o.as === 'button' ? 'button' : void 0, onClick: r[0] || (r[0] = (a) => f(n).onOpenChange(!1)) }),
                    { default: C(() => [B(o.$slots, 'default')]), _: 3 },
                    16,
                    ['type'],
                )
            );
        },
    }),
    Ai = A({
        __name: 'DialogTitle',
        props: { asChild: { type: Boolean }, as: { default: 'h2' } },
        setup(e) {
            const t = e,
                n = ce();
            return $(), (o, r) => (P(), k(f(V), F(t, { id: f(n).titleId }), { default: C(() => [B(o.$slots, 'default')]), _: 3 }, 16, ['id']));
        },
    }),
    _i = A({
        __name: 'DialogDescription',
        props: { asChild: { type: Boolean }, as: { default: 'p' } },
        setup(e) {
            const t = e;
            $();
            const n = ce();
            return (o, r) => (P(), k(f(V), F(t, { id: f(n).descriptionId }), { default: C(() => [B(o.$slots, 'default')]), _: 3 }, 16, ['id']));
        },
    }),
    [ro, Ga] = Y('AvatarRoot'),
    Pi = A({
        __name: 'AvatarRoot',
        props: { asChild: { type: Boolean }, as: { default: 'span' } },
        setup(e) {
            return (
                $(),
                Ga({ imageLoadingStatus: E('loading') }),
                (t, n) => (
                    P(), k(f(V), { 'as-child': t.asChild, as: t.as }, { default: C(() => [B(t.$slots, 'default')]), _: 3 }, 8, ['as-child', 'as'])
                )
            );
        },
    });
function Ua(e, t) {
    const n = E('idle'),
        o = E(!1),
        r = (a) => () => {
            o.value && (n.value = a);
        };
    return (
        ue(() => {
            (o.value = !0),
                H(
                    [() => e.value, () => (t == null ? void 0 : t.value)],
                    ([a, l]) => {
                        if (!a) n.value = 'error';
                        else {
                            const i = new window.Image();
                            (n.value = 'loading'), (i.onload = r('loaded')), (i.onerror = r('error')), (i.src = a), l && (i.referrerPolicy = l);
                        }
                    },
                    { immediate: !0 },
                );
        }),
        ut(() => {
            o.value = !1;
        }),
        n
    );
}
const Bi = A({
        __name: 'AvatarImage',
        props: { src: {}, referrerPolicy: {}, asChild: { type: Boolean }, as: { default: 'img' } },
        emits: ['loadingStatusChange'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                { src: r, referrerPolicy: a } = ye(n);
            $();
            const l = ro(),
                i = Ua(r, a);
            return (
                H(
                    i,
                    (d) => {
                        o('loadingStatusChange', d), d !== 'idle' && (l.imageLoadingStatus.value = d);
                    },
                    { immediate: !0 },
                ),
                (d, c) =>
                    _o(
                        (P(),
                        k(
                            f(V),
                            { role: 'img', 'as-child': d.asChild, as: d.as, src: f(r), 'referrer-policy': f(a) },
                            { default: C(() => [B(d.$slots, 'default')]), _: 3 },
                            8,
                            ['as-child', 'as', 'src', 'referrer-policy'],
                        )),
                        [[Po, f(i) === 'loaded']],
                    )
            );
        },
    }),
    ki = A({
        __name: 'AvatarFallback',
        props: { delayMs: { default: 0 }, asChild: { type: Boolean }, as: { default: 'span' } },
        setup(e) {
            const t = e,
                n = ro();
            $();
            const o = E(!1);
            let r;
            return (
                H(
                    n.imageLoadingStatus,
                    (a) => {
                        a === 'loading' &&
                            ((o.value = !1),
                            t.delayMs
                                ? (r = setTimeout(() => {
                                      (o.value = !0), clearTimeout(r);
                                  }, t.delayMs))
                                : (o.value = !0));
                    },
                    { immediate: !0 },
                ),
                (a, l) =>
                    o.value && f(n).imageLoadingStatus.value !== 'loaded'
                        ? (P(),
                          k(f(V), { key: 0, 'as-child': a.asChild, as: a.as }, { default: C(() => [B(a.$slots, 'default')]), _: 3 }, 8, [
                              'as-child',
                              'as',
                          ]))
                        : st('', !0)
            );
        },
    });
function it(e) {
    return e === 'indeterminate';
}
function ao(e) {
    return it(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
const qa = ['value', 'checked', 'name', 'disabled', 'required'],
    [Xa, Ya] = Y('CheckboxRoot'),
    Di = A({
        inheritAttrs: !1,
        __name: 'CheckboxRoot',
        props: {
            defaultChecked: { type: Boolean },
            checked: { type: [Boolean, String], default: void 0 },
            disabled: { type: Boolean },
            required: { type: Boolean },
            name: {},
            value: { default: 'on' },
            id: {},
            asChild: { type: Boolean },
            as: { default: 'button' },
        },
        emits: ['update:checked'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                { disabled: r } = ye(n),
                a = ze(n, 'checked', o, { defaultValue: n.defaultChecked, passive: n.checked === void 0 }),
                { forwardRef: l, currentElement: i } = $(),
                d = aa(i),
                c = T(() => {
                    var s;
                    return n.id && i.value ? ((s = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : s.innerText) : void 0;
                });
            return (
                Ya({ disabled: r, state: a }),
                (s, u) => (
                    P(),
                    ot(
                        On,
                        null,
                        [
                            q(
                                f(V),
                                F(s.$attrs, {
                                    id: s.id,
                                    ref: f(l),
                                    role: 'checkbox',
                                    'as-child': n.asChild,
                                    as: s.as,
                                    type: s.as === 'button' ? 'button' : void 0,
                                    'aria-checked': f(it)(f(a)) ? 'mixed' : f(a),
                                    'aria-required': n.required,
                                    'aria-label': s.$attrs['aria-label'] || c.value,
                                    'data-state': f(ao)(f(a)),
                                    'data-disabled': f(r) ? '' : void 0,
                                    disabled: f(r),
                                    onKeydown: Cn(
                                        St(() => {}, ['prevent']),
                                        ['enter'],
                                    ),
                                    onClick: u[0] || (u[0] = (p) => (a.value = f(it)(f(a)) ? !0 : !f(a))),
                                }),
                                { default: C(() => [B(s.$slots, 'default', { checked: f(a) })]), _: 3 },
                                16,
                                [
                                    'id',
                                    'as-child',
                                    'as',
                                    'type',
                                    'aria-checked',
                                    'aria-required',
                                    'aria-label',
                                    'data-state',
                                    'data-disabled',
                                    'disabled',
                                    'onKeydown',
                                ],
                            ),
                            f(d)
                                ? (P(),
                                  ot(
                                      'input',
                                      {
                                          key: 0,
                                          type: 'checkbox',
                                          tabindex: '-1',
                                          'aria-hidden': 'true',
                                          value: s.value,
                                          checked: !!f(a),
                                          name: n.name,
                                          disabled: n.disabled,
                                          required: n.required,
                                          style: {
                                              transform: 'translateX(-100%)',
                                              position: 'absolute',
                                              pointerEvents: 'none',
                                              opacity: 0,
                                              margin: 0,
                                          },
                                      },
                                      null,
                                      8,
                                      qa,
                                  ))
                                : st('', !0),
                        ],
                        64,
                    )
                )
            );
        },
    }),
    Si = A({
        __name: 'CheckboxIndicator',
        props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: { default: 'span' } },
        setup(e) {
            const { forwardRef: t } = $(),
                n = Xa();
            return (o, r) => (
                P(),
                k(
                    f(Ye),
                    { present: o.forceMount || f(it)(f(n).state.value) || f(n).state.value === !0 },
                    {
                        default: C(() => [
                            q(
                                f(V),
                                F(
                                    {
                                        ref: f(t),
                                        'data-state': f(ao)(f(n).state.value),
                                        'data-disabled': f(n).disabled.value ? '' : void 0,
                                        style: { pointerEvents: 'none' },
                                        'as-child': o.asChild,
                                        as: o.as,
                                    },
                                    o.$attrs,
                                ),
                                { default: C(() => [B(o.$slots, 'default')]), _: 3 },
                                16,
                                ['data-state', 'data-disabled', 'as-child', 'as'],
                            ),
                        ]),
                        _: 3,
                    },
                    8,
                    ['present'],
                )
            );
        },
    }),
    [lo, Za] = Y('PopperRoot'),
    io = A({
        inheritAttrs: !1,
        __name: 'PopperRoot',
        setup(e) {
            const t = E();
            return Za({ anchor: t, onAnchorChange: (n) => (t.value = n) }), (n, o) => B(n.$slots, 'default');
        },
    }),
    so = A({
        __name: 'PopperAnchor',
        props: { element: {}, asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e,
                { forwardRef: n, currentElement: o } = $(),
                r = lo();
            return (
                te(() => {
                    r.onAnchorChange(t.element ?? o.value);
                }),
                (a, l) => (
                    P(),
                    k(f(V), { ref: f(n), as: a.as, 'as-child': a.asChild }, { default: C(() => [B(a.$slots, 'default')]), _: 3 }, 8, [
                        'as',
                        'as-child',
                    ])
                )
            );
        },
    });
function Ja(e) {
    return e !== null;
}
function Qa(e) {
    return {
        name: 'transformOrigin',
        options: e,
        fn(t) {
            var n, o, r;
            const { placement: a, rects: l, middlewareData: i } = t,
                d = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0,
                c = d ? 0 : e.arrowWidth,
                s = d ? 0 : e.arrowHeight,
                [u, p] = kt(a),
                v = { start: '0%', center: '50%', end: '100%' }[p],
                m = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + c / 2,
                y = (((r = i.arrow) == null ? void 0 : r.y) ?? 0) + s / 2;
            let g = '',
                h = '';
            return (
                u === 'bottom'
                    ? ((g = d ? v : `${m}px`), (h = `${-s}px`))
                    : u === 'top'
                      ? ((g = d ? v : `${m}px`), (h = `${l.floating.height + s}px`))
                      : u === 'right'
                        ? ((g = `${-s}px`), (h = d ? v : `${y}px`))
                        : u === 'left' && ((g = `${l.floating.width + s}px`), (h = d ? v : `${y}px`)),
                { data: { x: g, y: h } }
            );
        },
    };
}
function kt(e) {
    const [t, n = 'center'] = e.split('-');
    return [t, n];
}
const uo = {
        side: 'bottom',
        sideOffset: 0,
        align: 'center',
        alignOffset: 0,
        arrowPadding: 0,
        avoidCollisions: !0,
        collisionBoundary: () => [],
        collisionPadding: 0,
        sticky: 'partial',
        hideWhenDetached: !1,
        updatePositionStrategy: 'optimized',
        prioritizePosition: !1,
    },
    [Ti, el] = Y('PopperContent'),
    co = A({
        inheritAttrs: !1,
        __name: 'PopperContent',
        props: _n(
            {
                side: {},
                sideOffset: {},
                align: {},
                alignOffset: {},
                avoidCollisions: { type: Boolean },
                collisionBoundary: {},
                collisionPadding: {},
                arrowPadding: {},
                sticky: {},
                hideWhenDetached: { type: Boolean },
                updatePositionStrategy: {},
                prioritizePosition: { type: Boolean },
                asChild: { type: Boolean },
                as: {},
            },
            { ...uo },
        ),
        emits: ['placed'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = lo(),
                { forwardRef: a, currentElement: l } = $(),
                i = E(),
                d = E(),
                { width: c, height: s } = ya(d),
                u = T(() => n.side + (n.align !== 'center' ? `-${n.align}` : '')),
                p = T(() =>
                    typeof n.collisionPadding == 'number' ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding },
                ),
                v = T(() => (Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary])),
                m = T(() => ({ padding: p.value, boundary: v.value.filter(Ja), altBoundary: v.value.length > 0 })),
                y = Rr(() => [
                    Er({ mainAxis: n.sideOffset + s.value, alignmentAxis: n.alignOffset }),
                    n.prioritizePosition && n.avoidCollisions && ln({ ...m.value }),
                    n.avoidCollisions &&
                        Ar({ mainAxis: !0, crossAxis: !!n.prioritizePosition, limiter: n.sticky === 'partial' ? kr() : void 0, ...m.value }),
                    !n.prioritizePosition && n.avoidCollisions && ln({ ...m.value }),
                    _r({
                        ...m.value,
                        apply: ({ elements: b, rects: S, availableWidth: O, availableHeight: j }) => {
                            const { width: I, height: G } = S.reference,
                                K = b.floating.style;
                            K.setProperty('--radix-popper-available-width', `${O}px`),
                                K.setProperty('--radix-popper-available-height', `${j}px`),
                                K.setProperty('--radix-popper-anchor-width', `${I}px`),
                                K.setProperty('--radix-popper-anchor-height', `${G}px`);
                        },
                    }),
                    d.value && Tr({ element: d.value, padding: n.arrowPadding }),
                    Qa({ arrowWidth: c.value, arrowHeight: s.value }),
                    n.hideWhenDetached && Pr({ strategy: 'referenceHidden', ...m.value }),
                ]),
                {
                    floatingStyles: g,
                    placement: h,
                    isPositioned: w,
                    middlewareData: x,
                } = Mr(r.anchor, i, {
                    strategy: 'fixed',
                    placement: u,
                    whileElementsMounted: (...b) => Or(...b, { animationFrame: n.updatePositionStrategy === 'always' }),
                    middleware: y,
                }),
                _ = T(() => kt(h.value)[0]),
                D = T(() => kt(h.value)[1]);
            Ro(() => {
                w.value && o('placed');
            });
            const L = T(() => {
                    var b;
                    return ((b = x.value.arrow) == null ? void 0 : b.centerOffset) !== 0;
                }),
                M = E('');
            te(() => {
                l.value && (M.value = window.getComputedStyle(l.value).zIndex);
            });
            const N = T(() => {
                    var b;
                    return ((b = x.value.arrow) == null ? void 0 : b.x) ?? 0;
                }),
                W = T(() => {
                    var b;
                    return ((b = x.value.arrow) == null ? void 0 : b.y) ?? 0;
                });
            return (
                el({ placedSide: _, onArrowChange: (b) => (d.value = b), arrowX: N, arrowY: W, shouldHideArrow: L }),
                (b, S) => {
                    var O, j, I;
                    return (
                        P(),
                        ot(
                            'div',
                            {
                                ref_key: 'floatingRef',
                                ref: i,
                                'data-radix-popper-content-wrapper': '',
                                style: Pn({
                                    ...f(g),
                                    transform: f(w) ? f(g).transform : 'translate(0, -200%)',
                                    minWidth: 'max-content',
                                    zIndex: M.value,
                                    '--radix-popper-transform-origin': [
                                        (O = f(x).transformOrigin) == null ? void 0 : O.x,
                                        (j = f(x).transformOrigin) == null ? void 0 : j.y,
                                    ].join(' '),
                                    ...(((I = f(x).hide) == null ? void 0 : I.referenceHidden) && { visibility: 'hidden', pointerEvents: 'none' }),
                                }),
                            },
                            [
                                q(
                                    f(V),
                                    F({ ref: f(a) }, b.$attrs, {
                                        'as-child': n.asChild,
                                        as: b.as,
                                        'data-side': _.value,
                                        'data-align': D.value,
                                        style: { animation: f(w) ? void 0 : 'none' },
                                    }),
                                    { default: C(() => [B(b.$slots, 'default')]), _: 3 },
                                    16,
                                    ['as-child', 'as', 'data-side', 'data-align', 'style'],
                                ),
                            ],
                            4,
                        )
                    );
                }
            );
        },
    }),
    tl = A({
        __name: 'VisuallyHidden',
        props: { asChild: { type: Boolean }, as: { default: 'span' } },
        setup(e) {
            return (
                $(),
                (t, n) => (
                    P(),
                    k(
                        f(V),
                        {
                            as: t.as,
                            'as-child': t.asChild,
                            style: {
                                position: 'absolute',
                                border: 0,
                                width: '1px',
                                display: 'inline-block',
                                height: '1px',
                                padding: 0,
                                margin: '-1px',
                                overflow: 'hidden',
                                clip: 'rect(0, 0, 0, 0)',
                                whiteSpace: 'nowrap',
                                wordWrap: 'normal',
                            },
                        },
                        { default: C(() => [B(t.$slots, 'default')]), _: 3 },
                        8,
                        ['as', 'as-child'],
                    )
                )
            );
        },
    }),
    nl = 'data-radix-vue-collection-item',
    [Ut, ol] = Y('CollectionProvider');
function rl(e = nl) {
    const t = E(new Map()),
        n = E(),
        o = ol({ collectionRef: n, itemMap: t, attrName: e }),
        { getItems: r } = il(o),
        a = T(() => Array.from(o.itemMap.value.values())),
        l = T(() => o.itemMap.value.size);
    return { getItems: r, reactiveItems: a, itemMapSize: l };
}
const al = A({
        name: 'CollectionSlot',
        setup(e, { slots: t }) {
            const n = Ut(),
                { primitiveElement: o, currentElement: r } = Zn();
            return (
                H(r, () => {
                    n.collectionRef.value = r.value;
                }),
                () => me(Kt, { ref: o }, t)
            );
        },
    }),
    ll = A({
        name: 'CollectionItem',
        inheritAttrs: !1,
        props: { value: { validator: () => !0 } },
        setup(e, { slots: t, attrs: n }) {
            const o = Ut(),
                { primitiveElement: r, currentElement: a } = Zn();
            return (
                te((l) => {
                    if (a.value) {
                        const i = Lo(a.value);
                        o.itemMap.value.set(i, { ref: a.value, value: e.value }), l(() => o.itemMap.value.delete(i));
                    }
                }),
                () => me(Kt, { ...n, [o.attrName]: '', ref: r }, t)
            );
        },
    });
function il(e) {
    const t = e ?? Ut();
    return {
        getItems: () => {
            const n = t.collectionRef.value;
            if (!n) return [];
            const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
            return Array.from(t.itemMap.value.values()).sort((r, a) => o.indexOf(r.ref) - o.indexOf(a.ref));
        },
    };
}
const sl = A({
    __name: 'MenuAnchor',
    props: { element: {}, asChild: { type: Boolean }, as: {} },
    setup(e) {
        const t = e;
        return (n, o) => (P(), k(f(so), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
    },
});
function ul() {
    const e = E(!1);
    return (
        ue(() => {
            Le(
                'keydown',
                () => {
                    e.value = !0;
                },
                { capture: !0, passive: !0 },
            ),
                Le(
                    ['pointerdown', 'pointermove'],
                    () => {
                        e.value = !1;
                    },
                    { capture: !0, passive: !0 },
                );
        }),
        e
    );
}
const dl = Wn(ul),
    [pt, cl] = Y(['MenuRoot', 'MenuSub'], 'MenuContext'),
    [qt, fl] = Y('MenuRoot'),
    pl = A({
        __name: 'MenuRoot',
        props: { open: { type: Boolean, default: !1 }, dir: {}, modal: { type: Boolean, default: !0 } },
        emits: ['update:open'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                { modal: r, dir: a } = ye(n),
                l = jt(a),
                i = ze(n, 'open', o),
                d = E(),
                c = dl();
            return (
                cl({
                    open: i,
                    onOpenChange: (s) => {
                        i.value = s;
                    },
                    content: d,
                    onContentChange: (s) => {
                        d.value = s;
                    },
                }),
                fl({
                    onClose: () => {
                        i.value = !1;
                    },
                    isUsingKeyboardRef: c,
                    dir: l,
                    modal: r,
                }),
                (s, u) => (P(), k(f(io), null, { default: C(() => [B(s.$slots, 'default')]), _: 3 }))
            );
        },
    }),
    vl = 'rovingFocusGroup.onEntryFocus',
    ml = { bubbles: !1, cancelable: !0 };
function gl(e, t = !1) {
    const n = X();
    for (const o of e) if (o === n || (o.focus({ preventScroll: t }), X() !== n)) return;
}
const [Mi, hl] = Y('RovingFocusGroup'),
    yl = A({
        __name: 'RovingFocusGroup',
        props: {
            orientation: { default: void 0 },
            dir: {},
            loop: { type: Boolean, default: !1 },
            currentTabStopId: {},
            defaultCurrentTabStopId: {},
            preventScrollOnEntryFocus: { type: Boolean, default: !1 },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['entryFocus', 'update:currentTabStopId'],
        setup(e, { expose: t, emit: n }) {
            const o = e,
                r = n,
                { loop: a, orientation: l, dir: i } = ye(o),
                d = jt(i),
                c = ze(o, 'currentTabStopId', r, { defaultValue: o.defaultCurrentTabStopId, passive: o.currentTabStopId === void 0 }),
                s = E(!1),
                u = E(!1),
                p = E(0),
                { getItems: v } = rl();
            function m(g) {
                const h = !u.value;
                if (g.currentTarget && g.target === g.currentTarget && h && !s.value) {
                    const w = new CustomEvent(vl, ml);
                    if ((g.currentTarget.dispatchEvent(w), r('entryFocus', w), !w.defaultPrevented)) {
                        const x = v()
                                .map((M) => M.ref)
                                .filter((M) => M.dataset.disabled !== ''),
                            _ = x.find((M) => M.getAttribute('data-active') === 'true'),
                            D = x.find((M) => M.id === c.value),
                            L = [_, D, ...x].filter(Boolean);
                        gl(L, o.preventScrollOnEntryFocus);
                    }
                }
                u.value = !1;
            }
            function y() {
                setTimeout(() => {
                    u.value = !1;
                }, 1);
            }
            return (
                t({ getItems: v }),
                hl({
                    loop: a,
                    dir: d,
                    orientation: l,
                    currentTabStopId: c,
                    onItemFocus: (g) => {
                        c.value = g;
                    },
                    onItemShiftTab: () => {
                        s.value = !0;
                    },
                    onFocusableItemAdd: () => {
                        p.value++;
                    },
                    onFocusableItemRemove: () => {
                        p.value--;
                    },
                }),
                (g, h) => (
                    P(),
                    k(f(al), null, {
                        default: C(() => [
                            q(
                                f(V),
                                {
                                    tabindex: s.value || p.value === 0 ? -1 : 0,
                                    'data-orientation': f(l),
                                    as: g.as,
                                    'as-child': g.asChild,
                                    dir: f(d),
                                    style: { outline: 'none' },
                                    onMousedown: h[0] || (h[0] = (w) => (u.value = !0)),
                                    onMouseup: y,
                                    onFocus: m,
                                    onBlur: h[1] || (h[1] = (w) => (s.value = !1)),
                                },
                                { default: C(() => [B(g.$slots, 'default')]), _: 3 },
                                8,
                                ['tabindex', 'data-orientation', 'as', 'as-child', 'dir'],
                            ),
                        ]),
                        _: 3,
                    })
                )
            );
        },
    }),
    [fo, bl] = Y('MenuContent'),
    po = A({
        __name: 'MenuContentImpl',
        props: _n(
            {
                loop: { type: Boolean },
                disableOutsidePointerEvents: { type: Boolean },
                disableOutsideScroll: { type: Boolean },
                trapFocus: { type: Boolean },
                side: {},
                sideOffset: {},
                align: {},
                alignOffset: {},
                avoidCollisions: { type: Boolean },
                collisionBoundary: {},
                collisionPadding: {},
                arrowPadding: {},
                sticky: {},
                hideWhenDetached: { type: Boolean },
                updatePositionStrategy: {},
                prioritizePosition: { type: Boolean },
                asChild: { type: Boolean },
                as: {},
            },
            { ...uo },
        ),
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'entryFocus', 'openAutoFocus', 'closeAutoFocus', 'dismiss'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = pt(),
                a = qt(),
                { trapFocus: l, disableOutsidePointerEvents: i, loop: d } = ye(n);
            ra(), Gn(i.value);
            const c = E(''),
                s = E(0),
                u = E(0),
                p = E(null),
                v = E('right'),
                m = E(0),
                y = E(null),
                { createCollection: g } = oa(),
                { forwardRef: h, currentElement: w } = $(),
                x = g(w);
            H(w, (b) => {
                r.onContentChange(b);
            });
            const { handleTypeaheadSearch: _ } = xa(x);
            ut(() => {
                window.clearTimeout(s.value);
            });
            function D(b) {
                var S, O;
                return v.value === ((S = p.value) == null ? void 0 : S.side) && Wa(b, (O = p.value) == null ? void 0 : O.area);
            }
            async function L(b) {
                var S;
                o('openAutoFocus', b), !b.defaultPrevented && (b.preventDefault(), (S = w.value) == null || S.focus({ preventScroll: !0 }));
            }
            function M(b) {
                if (b.defaultPrevented) return;
                const S = b.target.closest('[data-radix-menu-content]') === b.currentTarget,
                    O = b.ctrlKey || b.altKey || b.metaKey,
                    j = b.key.length === 1,
                    I = Xr(b, X(), w.value, {
                        loop: d.value,
                        arrowKeyOptions: 'vertical',
                        dir: a == null ? void 0 : a.dir.value,
                        focus: !0,
                        attributeName: '[data-radix-vue-collection-item]:not([data-disabled])',
                    });
                if (I) return I == null ? void 0 : I.focus();
                if (
                    b.code === 'Space' ||
                    (S && (b.key === 'Tab' && b.preventDefault(), !O && j && _(b.key)), b.target !== w.value) ||
                    !Na.includes(b.key)
                )
                    return;
                b.preventDefault();
                const G = x.value;
                to.includes(b.key) && G.reverse(), za(G);
            }
            function N(b) {
                var S, O;
                ((O = (S = b == null ? void 0 : b.currentTarget) == null ? void 0 : S.contains) != null && O.call(S, b.target)) ||
                    (window.clearTimeout(s.value), (c.value = ''));
            }
            function W(b) {
                var S;
                if (!Bt(b)) return;
                const O = b.target,
                    j = m.value !== b.clientX;
                if ((S = b == null ? void 0 : b.currentTarget) != null && S.contains(O) && j) {
                    const I = b.clientX > m.value ? 'right' : 'left';
                    (v.value = I), (m.value = b.clientX);
                }
            }
            return (
                bl({
                    onItemEnter: (b) => !!D(b),
                    onItemLeave: (b) => {
                        var S;
                        D(b) || ((S = w.value) == null || S.focus(), (y.value = null));
                    },
                    onTriggerLeave: (b) => !!D(b),
                    searchRef: c,
                    pointerGraceTimerRef: u,
                    onPointerGraceIntentChange: (b) => {
                        p.value = b;
                    },
                }),
                (b, S) => (
                    P(),
                    k(
                        f(eo),
                        { 'as-child': '', trapped: f(l), onMountAutoFocus: L, onUnmountAutoFocus: S[7] || (S[7] = (O) => o('closeAutoFocus', O)) },
                        {
                            default: C(() => [
                                q(
                                    f(Gt),
                                    {
                                        'as-child': '',
                                        'disable-outside-pointer-events': f(i),
                                        onEscapeKeyDown: S[2] || (S[2] = (O) => o('escapeKeyDown', O)),
                                        onPointerDownOutside: S[3] || (S[3] = (O) => o('pointerDownOutside', O)),
                                        onFocusOutside: S[4] || (S[4] = (O) => o('focusOutside', O)),
                                        onInteractOutside: S[5] || (S[5] = (O) => o('interactOutside', O)),
                                        onDismiss: S[6] || (S[6] = (O) => o('dismiss')),
                                    },
                                    {
                                        default: C(() => [
                                            q(
                                                f(yl),
                                                {
                                                    'current-tab-stop-id': y.value,
                                                    'onUpdate:currentTabStopId': S[0] || (S[0] = (O) => (y.value = O)),
                                                    'as-child': '',
                                                    orientation: 'vertical',
                                                    dir: f(a).dir.value,
                                                    loop: f(d),
                                                    onEntryFocus:
                                                        S[1] ||
                                                        (S[1] = (O) => {
                                                            o('entryFocus', O), f(a).isUsingKeyboardRef.value || O.preventDefault();
                                                        }),
                                                },
                                                {
                                                    default: C(() => [
                                                        q(
                                                            f(co),
                                                            {
                                                                ref: f(h),
                                                                role: 'menu',
                                                                as: b.as,
                                                                'as-child': b.asChild,
                                                                'aria-orientation': 'vertical',
                                                                'data-radix-menu-content': '',
                                                                'data-state': f(no)(f(r).open.value),
                                                                dir: f(a).dir.value,
                                                                side: b.side,
                                                                'side-offset': b.sideOffset,
                                                                align: b.align,
                                                                'align-offset': b.alignOffset,
                                                                'avoid-collisions': b.avoidCollisions,
                                                                'collision-boundary': b.collisionBoundary,
                                                                'collision-padding': b.collisionPadding,
                                                                'arrow-padding': b.arrowPadding,
                                                                'prioritize-position': b.prioritizePosition,
                                                                sticky: b.sticky,
                                                                'hide-when-detached': b.hideWhenDetached,
                                                                onKeydown: M,
                                                                onBlur: N,
                                                                onPointermove: W,
                                                            },
                                                            { default: C(() => [B(b.$slots, 'default')]), _: 3 },
                                                            8,
                                                            [
                                                                'as',
                                                                'as-child',
                                                                'data-state',
                                                                'dir',
                                                                'side',
                                                                'side-offset',
                                                                'align',
                                                                'align-offset',
                                                                'avoid-collisions',
                                                                'collision-boundary',
                                                                'collision-padding',
                                                                'arrow-padding',
                                                                'prioritize-position',
                                                                'sticky',
                                                                'hide-when-detached',
                                                            ],
                                                        ),
                                                    ]),
                                                    _: 3,
                                                },
                                                8,
                                                ['current-tab-stop-id', 'dir', 'loop'],
                                            ),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    ['disable-outside-pointer-events'],
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        ['trapped'],
                    )
                )
            );
        },
    }),
    wl = A({
        inheritAttrs: !1,
        __name: 'MenuItemImpl',
        props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e,
                n = fo(),
                { forwardRef: o } = $(),
                r = E(!1);
            async function a(i) {
                if (!i.defaultPrevented && Bt(i)) {
                    if (t.disabled) n.onItemLeave(i);
                    else if (!n.onItemEnter(i)) {
                        const d = i.currentTarget;
                        d == null || d.focus({ preventScroll: !0 });
                    }
                }
            }
            async function l(i) {
                await oe(), !i.defaultPrevented && Bt(i) && n.onItemLeave(i);
            }
            return (i, d) => (
                P(),
                k(
                    f(ll),
                    { value: { textValue: i.textValue } },
                    {
                        default: C(() => [
                            q(
                                f(V),
                                F({ ref: f(o), role: 'menuitem', tabindex: '-1' }, i.$attrs, {
                                    as: i.as,
                                    'as-child': i.asChild,
                                    'data-radix-vue-collection-item': '',
                                    'aria-disabled': i.disabled || void 0,
                                    'data-disabled': i.disabled ? '' : void 0,
                                    'data-highlighted': r.value ? '' : void 0,
                                    onPointermove: a,
                                    onPointerleave: l,
                                    onFocus:
                                        d[0] ||
                                        (d[0] = async (c) => {
                                            await oe(), !(c.defaultPrevented || i.disabled) && (r.value = !0);
                                        }),
                                    onBlur:
                                        d[1] ||
                                        (d[1] = async (c) => {
                                            await oe(), !c.defaultPrevented && (r.value = !1);
                                        }),
                                }),
                                { default: C(() => [B(i.$slots, 'default')]), _: 3 },
                                16,
                                ['as', 'as-child', 'aria-disabled', 'data-disabled', 'data-highlighted'],
                            ),
                        ]),
                        _: 3,
                    },
                    8,
                    ['value'],
                )
            );
        },
    }),
    xl = A({
        __name: 'MenuItem',
        props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
        emits: ['select'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                { forwardRef: r, currentElement: a } = $(),
                l = qt(),
                i = fo(),
                d = E(!1);
            async function c() {
                const s = a.value;
                if (!n.disabled && s) {
                    const u = new CustomEvent(La, { bubbles: !0, cancelable: !0 });
                    o('select', u), await oe(), u.defaultPrevented ? (d.value = !1) : l.onClose();
                }
            }
            return (s, u) => (
                P(),
                k(
                    wl,
                    F(n, {
                        ref: f(r),
                        onClick: c,
                        onPointerdown:
                            u[0] ||
                            (u[0] = () => {
                                d.value = !0;
                            }),
                        onPointerup:
                            u[1] ||
                            (u[1] = async (p) => {
                                var v;
                                await oe(), !p.defaultPrevented && (d.value || (v = p.currentTarget) == null || v.click());
                            }),
                        onKeydown:
                            u[2] ||
                            (u[2] = async (p) => {
                                const v = f(i).searchRef.value !== '';
                                s.disabled || (v && p.key === ' ') || (f(Pt).includes(p.key) && (p.currentTarget.click(), p.preventDefault()));
                            }),
                    }),
                    { default: C(() => [B(s.$slots, 'default')]), _: 3 },
                    16,
                )
            );
        },
    }),
    Cl = A({
        __name: 'MenuRootContentModal',
        props: {
            loop: { type: Boolean },
            side: {},
            sideOffset: {},
            align: {},
            alignOffset: {},
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: { type: Boolean },
            updatePositionStrategy: {},
            prioritizePosition: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'entryFocus', 'openAutoFocus', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = Xe(n, o),
                a = pt(),
                { forwardRef: l, currentElement: i } = $();
            return (
                Yn(i),
                (d, c) => (
                    P(),
                    k(
                        po,
                        F(f(r), {
                            ref: f(l),
                            'trap-focus': f(a).open.value,
                            'disable-outside-pointer-events': f(a).open.value,
                            'disable-outside-scroll': !0,
                            onDismiss: c[0] || (c[0] = (s) => f(a).onOpenChange(!1)),
                            onFocusOutside: c[1] || (c[1] = St((s) => o('focusOutside', s), ['prevent'])),
                        }),
                        { default: C(() => [B(d.$slots, 'default')]), _: 3 },
                        16,
                        ['trap-focus', 'disable-outside-pointer-events'],
                    )
                )
            );
        },
    }),
    Ol = A({
        __name: 'MenuRootContentNonModal',
        props: {
            loop: { type: Boolean },
            side: {},
            sideOffset: {},
            align: {},
            alignOffset: {},
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: { type: Boolean },
            updatePositionStrategy: {},
            prioritizePosition: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'entryFocus', 'openAutoFocus', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = Xe(e, t),
                o = pt();
            return (r, a) => (
                P(),
                k(
                    po,
                    F(f(n), {
                        'trap-focus': !1,
                        'disable-outside-pointer-events': !1,
                        'disable-outside-scroll': !1,
                        onDismiss: a[0] || (a[0] = (l) => f(o).onOpenChange(!1)),
                    }),
                    { default: C(() => [B(r.$slots, 'default')]), _: 3 },
                    16,
                )
            );
        },
    }),
    El = A({
        __name: 'MenuContent',
        props: {
            forceMount: { type: Boolean },
            loop: { type: Boolean },
            side: {},
            sideOffset: {},
            align: {},
            alignOffset: {},
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: { type: Boolean },
            updatePositionStrategy: {},
            prioritizePosition: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'entryFocus', 'openAutoFocus', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = Xe(e, t),
                o = pt(),
                r = qt();
            return (a, l) => (
                P(),
                k(
                    f(Ye),
                    { present: a.forceMount || f(o).open.value },
                    {
                        default: C(() => [
                            f(r).modal.value
                                ? (P(), k(Cl, ee(F({ key: 0 }, { ...a.$attrs, ...f(n) })), { default: C(() => [B(a.$slots, 'default')]), _: 3 }, 16))
                                : (P(), k(Ol, ee(F({ key: 1 }, { ...a.$attrs, ...f(n) })), { default: C(() => [B(a.$slots, 'default')]), _: 3 }, 16)),
                        ]),
                        _: 3,
                    },
                    8,
                    ['present'],
                )
            );
        },
    }),
    Al = A({
        __name: 'MenuGroup',
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e;
            return (n, o) => (P(), k(f(V), F({ role: 'group' }, t), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    _l = A({
        __name: 'MenuLabel',
        props: { asChild: { type: Boolean }, as: { default: 'div' } },
        setup(e) {
            const t = e;
            return (n, o) => (P(), k(f(V), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Pl = A({
        __name: 'MenuPortal',
        props: { to: {}, disabled: { type: Boolean }, forceMount: { type: Boolean } },
        setup(e) {
            const t = e;
            return (n, o) => (P(), k(f(Ht), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Bl = A({
        __name: 'MenuSeparator',
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e;
            return (n, o) => (
                P(), k(f(V), F(t, { role: 'separator', 'aria-orientation': 'horizontal' }), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16)
            );
        },
    }),
    [vo, kl] = Y('DropdownMenuRoot'),
    Ri = A({
        __name: 'DropdownMenuRoot',
        props: { defaultOpen: { type: Boolean }, open: { type: Boolean, default: void 0 }, dir: {}, modal: { type: Boolean, default: !0 } },
        emits: ['update:open'],
        setup(e, { emit: t }) {
            const n = e,
                o = t;
            $();
            const r = ze(n, 'open', o, { defaultValue: n.defaultOpen, passive: n.open === void 0 }),
                a = E(),
                { modal: l, dir: i } = ye(n),
                d = jt(i);
            return (
                kl({
                    open: r,
                    onOpenChange: (c) => {
                        r.value = c;
                    },
                    onOpenToggle: () => {
                        r.value = !r.value;
                    },
                    triggerId: '',
                    triggerElement: a,
                    contentId: '',
                    modal: l,
                    dir: d,
                }),
                (c, s) => (
                    P(),
                    k(
                        f(pl),
                        { open: f(r), 'onUpdate:open': s[0] || (s[0] = (u) => (Ao(r) ? (r.value = u) : null)), dir: f(d), modal: f(l) },
                        { default: C(() => [B(c.$slots, 'default', { open: f(r) })]), _: 3 },
                        8,
                        ['open', 'dir', 'modal'],
                    )
                )
            );
        },
    }),
    $i = A({
        __name: 'DropdownMenuTrigger',
        props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: 'button' } },
        setup(e) {
            const t = e,
                n = vo(),
                { forwardRef: o, currentElement: r } = $();
            return (
                ue(() => {
                    n.triggerElement = r;
                }),
                n.triggerId || (n.triggerId = Fe(void 0, 'radix-vue-dropdown-menu-trigger')),
                (a, l) => (
                    P(),
                    k(
                        f(sl),
                        { 'as-child': '' },
                        {
                            default: C(() => [
                                q(
                                    f(V),
                                    {
                                        id: f(n).triggerId,
                                        ref: f(o),
                                        type: a.as === 'button' ? 'button' : void 0,
                                        'as-child': t.asChild,
                                        as: a.as,
                                        'aria-haspopup': 'menu',
                                        'aria-expanded': f(n).open.value,
                                        'aria-controls': f(n).open.value ? f(n).contentId : void 0,
                                        'data-disabled': a.disabled ? '' : void 0,
                                        disabled: a.disabled,
                                        'data-state': f(n).open.value ? 'open' : 'closed',
                                        onClick:
                                            l[0] ||
                                            (l[0] = async (i) => {
                                                var d;
                                                !a.disabled &&
                                                    i.button === 0 &&
                                                    i.ctrlKey === !1 &&
                                                    ((d = f(n)) == null || d.onOpenToggle(), await oe(), f(n).open.value && i.preventDefault());
                                            }),
                                        onKeydown:
                                            l[1] ||
                                            (l[1] = Cn(
                                                (i) => {
                                                    a.disabled ||
                                                        (['Enter', ' '].includes(i.key) && f(n).onOpenToggle(),
                                                        i.key === 'ArrowDown' && f(n).onOpenChange(!0),
                                                        ['Enter', ' ', 'ArrowDown'].includes(i.key) && i.preventDefault());
                                                },
                                                ['enter', 'space', 'arrow-down'],
                                            )),
                                    },
                                    { default: C(() => [B(a.$slots, 'default')]), _: 3 },
                                    8,
                                    ['id', 'type', 'as-child', 'as', 'aria-expanded', 'aria-controls', 'data-disabled', 'disabled', 'data-state'],
                                ),
                            ]),
                            _: 3,
                        },
                    )
                )
            );
        },
    }),
    Ii = A({
        __name: 'DropdownMenuPortal',
        props: { to: {}, disabled: { type: Boolean }, forceMount: { type: Boolean } },
        setup(e) {
            const t = e;
            return (n, o) => (P(), k(f(Pl), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Li = A({
        __name: 'DropdownMenuContent',
        props: {
            forceMount: { type: Boolean },
            loop: { type: Boolean },
            side: {},
            sideOffset: {},
            align: {},
            alignOffset: {},
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: { type: Boolean },
            updatePositionStrategy: {},
            prioritizePosition: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: ['escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'closeAutoFocus'],
        setup(e, { emit: t }) {
            const n = Xe(e, t);
            $();
            const o = vo(),
                r = E(!1);
            function a(l) {
                l.defaultPrevented ||
                    (r.value ||
                        setTimeout(() => {
                            var i;
                            (i = o.triggerElement.value) == null || i.focus();
                        }, 0),
                    (r.value = !1),
                    l.preventDefault());
            }
            return (
                o.contentId || (o.contentId = Fe(void 0, 'radix-vue-dropdown-menu-content')),
                (l, i) => {
                    var d;
                    return (
                        P(),
                        k(
                            f(El),
                            F(f(n), {
                                id: f(o).contentId,
                                'aria-labelledby': (d = f(o)) == null ? void 0 : d.triggerId,
                                style: {
                                    '--radix-dropdown-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
                                    '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
                                    '--radix-dropdown-menu-content-available-height': 'var(--radix-popper-available-height)',
                                    '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
                                    '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)',
                                },
                                onCloseAutoFocus: a,
                                onInteractOutside:
                                    i[0] ||
                                    (i[0] = (c) => {
                                        var s;
                                        if (c.defaultPrevented) return;
                                        const u = c.detail.originalEvent,
                                            p = u.button === 0 && u.ctrlKey === !0,
                                            v = u.button === 2 || p;
                                        (!f(o).modal.value || v) && (r.value = !0),
                                            (s = f(o).triggerElement.value) != null && s.contains(c.target) && c.preventDefault();
                                    }),
                            }),
                            { default: C(() => [B(l.$slots, 'default')]), _: 3 },
                            16,
                            ['id', 'aria-labelledby'],
                        )
                    );
                }
            );
        },
    }),
    Fi = A({
        __name: 'DropdownMenuItem',
        props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} },
        emits: ['select'],
        setup(e, { emit: t }) {
            const n = e,
                o = qe(t);
            return $(), (r, a) => (P(), k(f(xl), ee(le({ ...n, ...f(o) })), { default: C(() => [B(r.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Ni = A({
        __name: 'DropdownMenuGroup',
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e;
            return $(), (n, o) => (P(), k(f(Al), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    zi = A({
        __name: 'DropdownMenuSeparator',
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e;
            return $(), (n, o) => (P(), k(f(Bl), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Vi = A({
        __name: 'DropdownMenuLabel',
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e;
            return $(), (n, o) => (P(), k(f(_l), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Wi = A({
        __name: 'Label',
        props: { for: {}, asChild: { type: Boolean }, as: { default: 'label' } },
        setup(e) {
            const t = e;
            return (
                $(),
                (n, o) => (
                    P(),
                    k(
                        f(V),
                        F(t, {
                            onMousedown:
                                o[0] ||
                                (o[0] = (r) => {
                                    !r.defaultPrevented && r.detail > 1 && r.preventDefault();
                                }),
                        }),
                        { default: C(() => [B(n.$slots, 'default')]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    Dl = A({
        __name: 'BaseSeparator',
        props: { orientation: { default: 'horizontal' }, decorative: { type: Boolean }, asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e,
                n = ['horizontal', 'vertical'];
            function o(i) {
                return n.includes(i);
            }
            const r = T(() => (o(t.orientation) ? t.orientation : 'horizontal')),
                a = T(() => (r.value === 'vertical' ? t.orientation : void 0)),
                l = T(() => (t.decorative ? { role: 'none' } : { 'aria-orientation': a.value, role: 'separator' }));
            return (i, d) => (
                P(),
                k(
                    f(V),
                    F({ as: i.as, 'as-child': i.asChild, 'data-orientation': r.value }, l.value),
                    { default: C(() => [B(i.$slots, 'default')]), _: 3 },
                    16,
                    ['as', 'as-child', 'data-orientation'],
                )
            );
        },
    }),
    ji = A({
        __name: 'Separator',
        props: { orientation: { default: 'horizontal' }, decorative: { type: Boolean }, asChild: { type: Boolean }, as: {} },
        setup(e) {
            const t = e;
            return (n, o) => (P(), k(Dl, ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    });
function Sl() {
    if (typeof matchMedia == 'function') return matchMedia('(pointer:coarse)').matches ? 'coarse' : 'fine';
}
Sl();
const mo = 'tooltip.open',
    [Xt, Tl] = Y('TooltipProvider'),
    Ki = A({
        inheritAttrs: !1,
        __name: 'TooltipProvider',
        props: {
            delayDuration: { default: 700 },
            skipDelayDuration: { default: 300 },
            disableHoverableContent: { type: Boolean, default: !1 },
            disableClosingTrigger: { type: Boolean },
            disabled: { type: Boolean },
            ignoreNonKeyboardFocus: { type: Boolean, default: !1 },
        },
        setup(e) {
            const t = e,
                {
                    delayDuration: n,
                    skipDelayDuration: o,
                    disableHoverableContent: r,
                    disableClosingTrigger: a,
                    ignoreNonKeyboardFocus: l,
                    disabled: i,
                } = ye(t);
            $();
            const d = E(!0),
                c = E(!1),
                { start: s, stop: u } = Kn(
                    () => {
                        d.value = !0;
                    },
                    o,
                    { immediate: !1 },
                );
            return (
                Tl({
                    isOpenDelayed: d,
                    delayDuration: n,
                    onOpen() {
                        u(), (d.value = !1);
                    },
                    onClose() {
                        s();
                    },
                    isPointerInTransitRef: c,
                    disableHoverableContent: r,
                    disableClosingTrigger: a,
                    disabled: i,
                    ignoreNonKeyboardFocus: l,
                }),
                (p, v) => B(p.$slots, 'default')
            );
        },
    }),
    [vt, Ml] = Y('TooltipRoot'),
    Hi = A({
        __name: 'TooltipRoot',
        props: {
            defaultOpen: { type: Boolean, default: !1 },
            open: { type: Boolean, default: void 0 },
            delayDuration: { default: void 0 },
            disableHoverableContent: { type: Boolean, default: void 0 },
            disableClosingTrigger: { type: Boolean, default: void 0 },
            disabled: { type: Boolean, default: void 0 },
            ignoreNonKeyboardFocus: { type: Boolean, default: void 0 },
        },
        emits: ['update:open'],
        setup(e, { emit: t }) {
            const n = e,
                o = t;
            $();
            const r = Xt(),
                a = T(() => n.disableHoverableContent ?? r.disableHoverableContent.value),
                l = T(() => n.disableClosingTrigger ?? r.disableClosingTrigger.value),
                i = T(() => n.disabled ?? r.disabled.value),
                d = T(() => n.delayDuration ?? r.delayDuration.value),
                c = T(() => n.ignoreNonKeyboardFocus ?? r.ignoreNonKeyboardFocus.value),
                s = ze(n, 'open', o, { defaultValue: n.defaultOpen, passive: n.open === void 0 });
            H(s, (x) => {
                r.onClose && (x ? (r.onOpen(), document.dispatchEvent(new CustomEvent(mo))) : r.onClose());
            });
            const u = E(!1),
                p = E(),
                v = T(() => (s.value ? (u.value ? 'delayed-open' : 'instant-open') : 'closed')),
                { start: m, stop: y } = Kn(
                    () => {
                        (u.value = !0), (s.value = !0);
                    },
                    d,
                    { immediate: !1 },
                );
            function g() {
                y(), (u.value = !1), (s.value = !0);
            }
            function h() {
                y(), (s.value = !1);
            }
            function w() {
                m();
            }
            return (
                Ml({
                    contentId: '',
                    open: s,
                    stateAttribute: v,
                    trigger: p,
                    onTriggerChange(x) {
                        p.value = x;
                    },
                    onTriggerEnter() {
                        r.isOpenDelayed.value ? w() : g();
                    },
                    onTriggerLeave() {
                        a.value ? h() : y();
                    },
                    onOpen: g,
                    onClose: h,
                    disableHoverableContent: a,
                    disableClosingTrigger: l,
                    disabled: i,
                    ignoreNonKeyboardFocus: c,
                }),
                (x, _) => (P(), k(f(io), null, { default: C(() => [B(x.$slots, 'default', { open: f(s) })]), _: 3 }))
            );
        },
    }),
    Gi = A({
        __name: 'TooltipTrigger',
        props: { asChild: { type: Boolean }, as: { default: 'button' } },
        setup(e) {
            const t = e,
                n = vt(),
                o = Xt();
            n.contentId || (n.contentId = Fe(void 0, 'radix-vue-tooltip-content'));
            const { forwardRef: r, currentElement: a } = $(),
                l = E(!1),
                i = E(!1),
                d = T(() => (n.disabled.value ? {} : { click: y, focus: v, pointermove: u, pointerleave: p, pointerdown: s, blur: m }));
            ue(() => {
                n.onTriggerChange(a.value);
            });
            function c() {
                setTimeout(() => {
                    l.value = !1;
                }, 1);
            }
            function s() {
                (l.value = !0), document.addEventListener('pointerup', c, { once: !0 });
            }
            function u(g) {
                g.pointerType !== 'touch' && !i.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), (i.value = !0));
            }
            function p() {
                n.onTriggerLeave(), (i.value = !1);
            }
            function v(g) {
                var h, w;
                l.value || (n.ignoreNonKeyboardFocus.value && !((w = (h = g.target).matches) != null && w.call(h, ':focus-visible'))) || n.onOpen();
            }
            function m() {
                n.onClose();
            }
            function y() {
                n.disableClosingTrigger.value || n.onClose();
            }
            return (g, h) => (
                P(),
                k(
                    f(so),
                    { 'as-child': '' },
                    {
                        default: C(() => [
                            q(
                                f(V),
                                F(
                                    {
                                        ref: f(r),
                                        'aria-describedby': f(n).open.value ? f(n).contentId : void 0,
                                        'data-state': f(n).stateAttribute.value,
                                        as: g.as,
                                        'as-child': t.asChild,
                                        'data-grace-area-trigger': '',
                                    },
                                    Oo(d.value),
                                ),
                                { default: C(() => [B(g.$slots, 'default')]), _: 3 },
                                16,
                                ['aria-describedby', 'data-state', 'as', 'as-child'],
                            ),
                        ]),
                        _: 3,
                    },
                )
            );
        },
    }),
    go = A({
        __name: 'TooltipContentImpl',
        props: {
            ariaLabel: {},
            asChild: { type: Boolean },
            as: {},
            side: { default: 'top' },
            sideOffset: { default: 0 },
            align: { default: 'center' },
            alignOffset: {},
            avoidCollisions: { type: Boolean, default: !0 },
            collisionBoundary: { default: () => [] },
            collisionPadding: { default: 0 },
            arrowPadding: { default: 0 },
            sticky: { default: 'partial' },
            hideWhenDetached: { type: Boolean, default: !1 },
        },
        emits: ['escapeKeyDown', 'pointerDownOutside'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = vt(),
                { forwardRef: a } = $(),
                l = So(),
                i = T(() => {
                    var s;
                    return (s = l.default) == null ? void 0 : s.call(l);
                }),
                d = T(() => {
                    var s;
                    if (n.ariaLabel) return n.ariaLabel;
                    let u = '';
                    function p(v) {
                        typeof v.children == 'string' && v.type !== En
                            ? (u += v.children)
                            : Array.isArray(v.children) && v.children.forEach((m) => p(m));
                    }
                    return (s = i.value) == null || s.forEach((v) => p(v)), u;
                }),
                c = T(() => {
                    const { ariaLabel: s, ...u } = n;
                    return u;
                });
            return (
                ue(() => {
                    Le(window, 'scroll', (s) => {
                        const u = s.target;
                        u != null && u.contains(r.trigger.value) && r.onClose();
                    }),
                        Le(window, mo, r.onClose);
                }),
                (s, u) => (
                    P(),
                    k(
                        f(Gt),
                        {
                            'as-child': '',
                            'disable-outside-pointer-events': !1,
                            onEscapeKeyDown: u[0] || (u[0] = (p) => o('escapeKeyDown', p)),
                            onPointerDownOutside:
                                u[1] ||
                                (u[1] = (p) => {
                                    var v;
                                    f(r).disableClosingTrigger.value &&
                                        (v = f(r).trigger.value) != null &&
                                        v.contains(p.target) &&
                                        p.preventDefault(),
                                        o('pointerDownOutside', p);
                                }),
                            onFocusOutside: u[2] || (u[2] = St(() => {}, ['prevent'])),
                            onDismiss: u[3] || (u[3] = (p) => f(r).onClose()),
                        },
                        {
                            default: C(() => [
                                q(
                                    f(co),
                                    F(
                                        { ref: f(a), 'data-state': f(r).stateAttribute.value },
                                        { ...s.$attrs, ...c.value },
                                        {
                                            style: {
                                                '--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
                                                '--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
                                                '--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
                                                '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
                                                '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
                                            },
                                        },
                                    ),
                                    {
                                        default: C(() => [
                                            B(s.$slots, 'default'),
                                            q(f(tl), { id: f(r).contentId, role: 'tooltip' }, { default: C(() => [To(Mo(d.value), 1)]), _: 1 }, 8, [
                                                'id',
                                            ]),
                                        ]),
                                        _: 3,
                                    },
                                    16,
                                    ['data-state'],
                                ),
                            ]),
                            _: 3,
                        },
                    )
                )
            );
        },
    }),
    Rl = A({
        __name: 'TooltipContentHoverable',
        props: {
            ariaLabel: {},
            asChild: { type: Boolean },
            as: {},
            side: {},
            sideOffset: {},
            align: {},
            alignOffset: {},
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: { type: Boolean },
        },
        setup(e) {
            const t = qn(e),
                { forwardRef: n, currentElement: o } = $(),
                { trigger: r, onClose: a } = vt(),
                l = Xt(),
                { isPointerInTransit: i, onPointerExit: d } = la(r, o);
            return (
                (l.isPointerInTransitRef = i),
                d(() => {
                    a();
                }),
                (c, s) => (P(), k(go, F({ ref: f(n) }, f(t)), { default: C(() => [B(c.$slots, 'default')]), _: 3 }, 16))
            );
        },
    }),
    Ui = A({
        __name: 'TooltipContent',
        props: {
            forceMount: { type: Boolean },
            ariaLabel: {},
            asChild: { type: Boolean },
            as: {},
            side: { default: 'top' },
            sideOffset: {},
            align: {},
            alignOffset: {},
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: { type: Boolean },
        },
        emits: ['escapeKeyDown', 'pointerDownOutside'],
        setup(e, { emit: t }) {
            const n = e,
                o = t,
                r = vt(),
                a = Xe(n, o),
                { forwardRef: l } = $();
            return (i, d) => (
                P(),
                k(
                    f(Ye),
                    { present: i.forceMount || f(r).open.value },
                    {
                        default: C(() => [
                            (P(),
                            k(
                                Eo(f(r).disableHoverableContent.value ? go : Rl),
                                F({ ref: f(l) }, f(a)),
                                { default: C(() => [B(i.$slots, 'default')]), _: 3 },
                                16,
                            )),
                        ]),
                        _: 3,
                    },
                    8,
                    ['present'],
                )
            );
        },
    }),
    qi = A({
        __name: 'TooltipPortal',
        props: { to: {}, disabled: { type: Boolean }, forceMount: { type: Boolean } },
        setup(e) {
            const t = e;
            return (n, o) => (P(), k(f(Ht), ee(le(t)), { default: C(() => [B(n.$slots, 'default')]), _: 3 }, 16));
        },
    }),
    Yt = '-',
    $l = (e) => {
        const t = Ll(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: o } = e;
        return {
            getClassGroupId: (l) => {
                const i = l.split(Yt);
                return i[0] === '' && i.length !== 1 && i.shift(), ho(i, t) || Il(l);
            },
            getConflictingClassGroupIds: (l, i) => {
                const d = n[l] || [];
                return i && o[l] ? [...d, ...o[l]] : d;
            },
        };
    },
    ho = (e, t) => {
        var l;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            o = t.nextPart.get(n),
            r = o ? ho(e.slice(1), o) : void 0;
        if (r) return r;
        if (t.validators.length === 0) return;
        const a = e.join(Yt);
        return (l = t.validators.find(({ validator: i }) => i(a))) == null ? void 0 : l.classGroupId;
    },
    vn = /^\[(.+)\]$/,
    Il = (e) => {
        if (vn.test(e)) {
            const t = vn.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
            if (n) return 'arbitrary..' + n;
        }
    },
    Ll = (e) => {
        const { theme: t, prefix: n } = e,
            o = { nextPart: new Map(), validators: [] };
        return (
            Nl(Object.entries(e.classGroups), n).forEach(([a, l]) => {
                Dt(l, o, a, t);
            }),
            o
        );
    },
    Dt = (e, t, n, o) => {
        e.forEach((r) => {
            if (typeof r == 'string') {
                const a = r === '' ? t : mn(t, r);
                a.classGroupId = n;
                return;
            }
            if (typeof r == 'function') {
                if (Fl(r)) {
                    Dt(r(o), t, n, o);
                    return;
                }
                t.validators.push({ validator: r, classGroupId: n });
                return;
            }
            Object.entries(r).forEach(([a, l]) => {
                Dt(l, mn(t, a), n, o);
            });
        });
    },
    mn = (e, t) => {
        let n = e;
        return (
            t.split(Yt).forEach((o) => {
                n.nextPart.has(o) || n.nextPart.set(o, { nextPart: new Map(), validators: [] }), (n = n.nextPart.get(o));
            }),
            n
        );
    },
    Fl = (e) => e.isThemeGetter,
    Nl = (e, t) =>
        t
            ? e.map(([n, o]) => {
                  const r = o.map((a) =>
                      typeof a == 'string' ? t + a : typeof a == 'object' ? Object.fromEntries(Object.entries(a).map(([l, i]) => [t + l, i])) : a,
                  );
                  return [n, r];
              })
            : e,
    zl = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            o = new Map();
        const r = (a, l) => {
            n.set(a, l), t++, t > e && ((t = 0), (o = n), (n = new Map()));
        };
        return {
            get(a) {
                let l = n.get(a);
                if (l !== void 0) return l;
                if ((l = o.get(a)) !== void 0) return r(a, l), l;
            },
            set(a, l) {
                n.has(a) ? n.set(a, l) : r(a, l);
            },
        };
    },
    yo = '!',
    Vl = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            o = t.length === 1,
            r = t[0],
            a = t.length,
            l = (i) => {
                const d = [];
                let c = 0,
                    s = 0,
                    u;
                for (let g = 0; g < i.length; g++) {
                    let h = i[g];
                    if (c === 0) {
                        if (h === r && (o || i.slice(g, g + a) === t)) {
                            d.push(i.slice(s, g)), (s = g + a);
                            continue;
                        }
                        if (h === '/') {
                            u = g;
                            continue;
                        }
                    }
                    h === '[' ? c++ : h === ']' && c--;
                }
                const p = d.length === 0 ? i : i.substring(s),
                    v = p.startsWith(yo),
                    m = v ? p.substring(1) : p,
                    y = u && u > s ? u - s : void 0;
                return { modifiers: d, hasImportantModifier: v, baseClassName: m, maybePostfixModifierPosition: y };
            };
        return n ? (i) => n({ className: i, parseClassName: l }) : l;
    },
    Wl = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((o) => {
                o[0] === '[' ? (t.push(...n.sort(), o), (n = [])) : n.push(o);
            }),
            t.push(...n.sort()),
            t
        );
    },
    jl = (e) => ({ cache: zl(e.cacheSize), parseClassName: Vl(e), ...$l(e) }),
    Kl = /\s+/,
    Hl = (e, t) => {
        const { parseClassName: n, getClassGroupId: o, getConflictingClassGroupIds: r } = t,
            a = [],
            l = e.trim().split(Kl);
        let i = '';
        for (let d = l.length - 1; d >= 0; d -= 1) {
            const c = l[d],
                { modifiers: s, hasImportantModifier: u, baseClassName: p, maybePostfixModifierPosition: v } = n(c);
            let m = !!v,
                y = o(m ? p.substring(0, v) : p);
            if (!y) {
                if (!m) {
                    i = c + (i.length > 0 ? ' ' + i : i);
                    continue;
                }
                if (((y = o(p)), !y)) {
                    i = c + (i.length > 0 ? ' ' + i : i);
                    continue;
                }
                m = !1;
            }
            const g = Wl(s).join(':'),
                h = u ? g + yo : g,
                w = h + y;
            if (a.includes(w)) continue;
            a.push(w);
            const x = r(y, m);
            for (let _ = 0; _ < x.length; ++_) {
                const D = x[_];
                a.push(h + D);
            }
            i = c + (i.length > 0 ? ' ' + i : i);
        }
        return i;
    };
function Gl() {
    let e = 0,
        t,
        n,
        o = '';
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = bo(t)) && (o && (o += ' '), (o += n));
    return o;
}
const bo = (e) => {
    if (typeof e == 'string') return e;
    let t,
        n = '';
    for (let o = 0; o < e.length; o++) e[o] && (t = bo(e[o])) && (n && (n += ' '), (n += t));
    return n;
};
function Ul(e, ...t) {
    let n,
        o,
        r,
        a = l;
    function l(d) {
        const c = t.reduce((s, u) => u(s), e());
        return (n = jl(c)), (o = n.cache.get), (r = n.cache.set), (a = i), i(d);
    }
    function i(d) {
        const c = o(d);
        if (c) return c;
        const s = Hl(d, n);
        return r(d, s), s;
    }
    return function () {
        return a(Gl.apply(null, arguments));
    };
}
const z = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    wo = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    ql = /^\d+\/\d+$/,
    Xl = new Set(['px', 'full', 'screen']),
    Yl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Zl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Jl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Ql = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    ei = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ve = (e) => $e(e) || Xl.has(e) || ql.test(e),
    we = (e) => Ve(e, 'length', si),
    $e = (e) => !!e && !Number.isNaN(Number(e)),
    xt = (e) => Ve(e, 'number', $e),
    We = (e) => !!e && Number.isInteger(Number(e)),
    ti = (e) => e.endsWith('%') && $e(e.slice(0, -1)),
    R = (e) => wo.test(e),
    xe = (e) => Yl.test(e),
    ni = new Set(['length', 'size', 'percentage']),
    oi = (e) => Ve(e, ni, xo),
    ri = (e) => Ve(e, 'position', xo),
    ai = new Set(['image', 'url']),
    li = (e) => Ve(e, ai, di),
    ii = (e) => Ve(e, '', ui),
    je = () => !0,
    Ve = (e, t, n) => {
        const o = wo.exec(e);
        return o ? (o[1] ? (typeof t == 'string' ? o[1] === t : t.has(o[1])) : n(o[2])) : !1;
    },
    si = (e) => Zl.test(e) && !Jl.test(e),
    xo = () => !1,
    ui = (e) => Ql.test(e),
    di = (e) => ei.test(e),
    ci = () => {
        const e = z('colors'),
            t = z('spacing'),
            n = z('blur'),
            o = z('brightness'),
            r = z('borderColor'),
            a = z('borderRadius'),
            l = z('borderSpacing'),
            i = z('borderWidth'),
            d = z('contrast'),
            c = z('grayscale'),
            s = z('hueRotate'),
            u = z('invert'),
            p = z('gap'),
            v = z('gradientColorStops'),
            m = z('gradientColorStopPositions'),
            y = z('inset'),
            g = z('margin'),
            h = z('opacity'),
            w = z('padding'),
            x = z('saturate'),
            _ = z('scale'),
            D = z('sepia'),
            L = z('skew'),
            M = z('space'),
            N = z('translate'),
            W = () => ['auto', 'contain', 'none'],
            b = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
            S = () => ['auto', R, t],
            O = () => [R, t],
            j = () => ['', ve, we],
            I = () => ['auto', $e, R],
            G = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'],
            K = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
            Z = () => [
                'normal',
                'multiply',
                'screen',
                'overlay',
                'darken',
                'lighten',
                'color-dodge',
                'color-burn',
                'hard-light',
                'soft-light',
                'difference',
                'exclusion',
                'hue',
                'saturation',
                'color',
                'luminosity',
            ],
            ne = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
            U = () => ['', '0', R],
            Ze = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
            fe = () => [$e, R];
        return {
            cacheSize: 500,
            separator: ':',
            theme: {
                colors: [je],
                spacing: [ve, we],
                blur: ['none', '', xe, R],
                brightness: fe(),
                borderColor: [e],
                borderRadius: ['none', '', 'full', xe, R],
                borderSpacing: O(),
                borderWidth: j(),
                contrast: fe(),
                grayscale: U(),
                hueRotate: fe(),
                invert: U(),
                gap: O(),
                gradientColorStops: [e],
                gradientColorStopPositions: [ti, we],
                inset: S(),
                margin: S(),
                opacity: fe(),
                padding: O(),
                saturate: fe(),
                scale: fe(),
                sepia: U(),
                skew: fe(),
                space: O(),
                translate: O(),
            },
            classGroups: {
                aspect: [{ aspect: ['auto', 'square', 'video', R] }],
                container: ['container'],
                columns: [{ columns: [xe] }],
                'break-after': [{ 'break-after': Ze() }],
                'break-before': [{ 'break-before': Ze() }],
                'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
                'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
                box: [{ box: ['border', 'content'] }],
                display: [
                    'block',
                    'inline-block',
                    'inline',
                    'flex',
                    'inline-flex',
                    'table',
                    'inline-table',
                    'table-caption',
                    'table-cell',
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row-group',
                    'table-row',
                    'flow-root',
                    'grid',
                    'inline-grid',
                    'contents',
                    'list-item',
                    'hidden',
                ],
                float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
                clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
                isolation: ['isolate', 'isolation-auto'],
                'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
                'object-position': [{ object: [...G(), R] }],
                overflow: [{ overflow: b() }],
                'overflow-x': [{ 'overflow-x': b() }],
                'overflow-y': [{ 'overflow-y': b() }],
                overscroll: [{ overscroll: W() }],
                'overscroll-x': [{ 'overscroll-x': W() }],
                'overscroll-y': [{ 'overscroll-y': W() }],
                position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
                inset: [{ inset: [y] }],
                'inset-x': [{ 'inset-x': [y] }],
                'inset-y': [{ 'inset-y': [y] }],
                start: [{ start: [y] }],
                end: [{ end: [y] }],
                top: [{ top: [y] }],
                right: [{ right: [y] }],
                bottom: [{ bottom: [y] }],
                left: [{ left: [y] }],
                visibility: ['visible', 'invisible', 'collapse'],
                z: [{ z: ['auto', We, R] }],
                basis: [{ basis: S() }],
                'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
                'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
                flex: [{ flex: ['1', 'auto', 'initial', 'none', R] }],
                grow: [{ grow: U() }],
                shrink: [{ shrink: U() }],
                order: [{ order: ['first', 'last', 'none', We, R] }],
                'grid-cols': [{ 'grid-cols': [je] }],
                'col-start-end': [{ col: ['auto', { span: ['full', We, R] }, R] }],
                'col-start': [{ 'col-start': I() }],
                'col-end': [{ 'col-end': I() }],
                'grid-rows': [{ 'grid-rows': [je] }],
                'row-start-end': [{ row: ['auto', { span: [We, R] }, R] }],
                'row-start': [{ 'row-start': I() }],
                'row-end': [{ 'row-end': I() }],
                'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
                'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', R] }],
                'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', R] }],
                gap: [{ gap: [p] }],
                'gap-x': [{ 'gap-x': [p] }],
                'gap-y': [{ 'gap-y': [p] }],
                'justify-content': [{ justify: ['normal', ...ne()] }],
                'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
                'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
                'align-content': [{ content: ['normal', ...ne(), 'baseline'] }],
                'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
                'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
                'place-content': [{ 'place-content': [...ne(), 'baseline'] }],
                'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
                'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
                p: [{ p: [w] }],
                px: [{ px: [w] }],
                py: [{ py: [w] }],
                ps: [{ ps: [w] }],
                pe: [{ pe: [w] }],
                pt: [{ pt: [w] }],
                pr: [{ pr: [w] }],
                pb: [{ pb: [w] }],
                pl: [{ pl: [w] }],
                m: [{ m: [g] }],
                mx: [{ mx: [g] }],
                my: [{ my: [g] }],
                ms: [{ ms: [g] }],
                me: [{ me: [g] }],
                mt: [{ mt: [g] }],
                mr: [{ mr: [g] }],
                mb: [{ mb: [g] }],
                ml: [{ ml: [g] }],
                'space-x': [{ 'space-x': [M] }],
                'space-x-reverse': ['space-x-reverse'],
                'space-y': [{ 'space-y': [M] }],
                'space-y-reverse': ['space-y-reverse'],
                w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', R, t] }],
                'min-w': [{ 'min-w': [R, t, 'min', 'max', 'fit'] }],
                'max-w': [{ 'max-w': [R, t, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [xe] }, xe] }],
                h: [{ h: [R, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
                'min-h': [{ 'min-h': [R, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
                'max-h': [{ 'max-h': [R, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
                size: [{ size: [R, t, 'auto', 'min', 'max', 'fit'] }],
                'font-size': [{ text: ['base', xe, we] }],
                'font-smoothing': ['antialiased', 'subpixel-antialiased'],
                'font-style': ['italic', 'not-italic'],
                'font-weight': [{ font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', xt] }],
                'font-family': [{ font: [je] }],
                'fvn-normal': ['normal-nums'],
                'fvn-ordinal': ['ordinal'],
                'fvn-slashed-zero': ['slashed-zero'],
                'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
                tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', R] }],
                'line-clamp': [{ 'line-clamp': ['none', $e, xt] }],
                leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', ve, R] }],
                'list-image': [{ 'list-image': ['none', R] }],
                'list-style-type': [{ list: ['none', 'disc', 'decimal', R] }],
                'list-style-position': [{ list: ['inside', 'outside'] }],
                'placeholder-color': [{ placeholder: [e] }],
                'placeholder-opacity': [{ 'placeholder-opacity': [h] }],
                'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
                'text-color': [{ text: [e] }],
                'text-opacity': [{ 'text-opacity': [h] }],
                'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
                'text-decoration-style': [{ decoration: [...K(), 'wavy'] }],
                'text-decoration-thickness': [{ decoration: ['auto', 'from-font', ve, we] }],
                'underline-offset': [{ 'underline-offset': ['auto', ve, R] }],
                'text-decoration-color': [{ decoration: [e] }],
                'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
                'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
                'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
                indent: [{ indent: O() }],
                'vertical-align': [{ align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', R] }],
                whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
                break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                content: [{ content: ['none', R] }],
                'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
                'bg-opacity': [{ 'bg-opacity': [h] }],
                'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
                'bg-position': [{ bg: [...G(), ri] }],
                'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
                'bg-size': [{ bg: ['auto', 'cover', 'contain', oi] }],
                'bg-image': [{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, li] }],
                'bg-color': [{ bg: [e] }],
                'gradient-from-pos': [{ from: [m] }],
                'gradient-via-pos': [{ via: [m] }],
                'gradient-to-pos': [{ to: [m] }],
                'gradient-from': [{ from: [v] }],
                'gradient-via': [{ via: [v] }],
                'gradient-to': [{ to: [v] }],
                rounded: [{ rounded: [a] }],
                'rounded-s': [{ 'rounded-s': [a] }],
                'rounded-e': [{ 'rounded-e': [a] }],
                'rounded-t': [{ 'rounded-t': [a] }],
                'rounded-r': [{ 'rounded-r': [a] }],
                'rounded-b': [{ 'rounded-b': [a] }],
                'rounded-l': [{ 'rounded-l': [a] }],
                'rounded-ss': [{ 'rounded-ss': [a] }],
                'rounded-se': [{ 'rounded-se': [a] }],
                'rounded-ee': [{ 'rounded-ee': [a] }],
                'rounded-es': [{ 'rounded-es': [a] }],
                'rounded-tl': [{ 'rounded-tl': [a] }],
                'rounded-tr': [{ 'rounded-tr': [a] }],
                'rounded-br': [{ 'rounded-br': [a] }],
                'rounded-bl': [{ 'rounded-bl': [a] }],
                'border-w': [{ border: [i] }],
                'border-w-x': [{ 'border-x': [i] }],
                'border-w-y': [{ 'border-y': [i] }],
                'border-w-s': [{ 'border-s': [i] }],
                'border-w-e': [{ 'border-e': [i] }],
                'border-w-t': [{ 'border-t': [i] }],
                'border-w-r': [{ 'border-r': [i] }],
                'border-w-b': [{ 'border-b': [i] }],
                'border-w-l': [{ 'border-l': [i] }],
                'border-opacity': [{ 'border-opacity': [h] }],
                'border-style': [{ border: [...K(), 'hidden'] }],
                'divide-x': [{ 'divide-x': [i] }],
                'divide-x-reverse': ['divide-x-reverse'],
                'divide-y': [{ 'divide-y': [i] }],
                'divide-y-reverse': ['divide-y-reverse'],
                'divide-opacity': [{ 'divide-opacity': [h] }],
                'divide-style': [{ divide: K() }],
                'border-color': [{ border: [r] }],
                'border-color-x': [{ 'border-x': [r] }],
                'border-color-y': [{ 'border-y': [r] }],
                'border-color-s': [{ 'border-s': [r] }],
                'border-color-e': [{ 'border-e': [r] }],
                'border-color-t': [{ 'border-t': [r] }],
                'border-color-r': [{ 'border-r': [r] }],
                'border-color-b': [{ 'border-b': [r] }],
                'border-color-l': [{ 'border-l': [r] }],
                'divide-color': [{ divide: [r] }],
                'outline-style': [{ outline: ['', ...K()] }],
                'outline-offset': [{ 'outline-offset': [ve, R] }],
                'outline-w': [{ outline: [ve, we] }],
                'outline-color': [{ outline: [e] }],
                'ring-w': [{ ring: j() }],
                'ring-w-inset': ['ring-inset'],
                'ring-color': [{ ring: [e] }],
                'ring-opacity': [{ 'ring-opacity': [h] }],
                'ring-offset-w': [{ 'ring-offset': [ve, we] }],
                'ring-offset-color': [{ 'ring-offset': [e] }],
                shadow: [{ shadow: ['', 'inner', 'none', xe, ii] }],
                'shadow-color': [{ shadow: [je] }],
                opacity: [{ opacity: [h] }],
                'mix-blend': [{ 'mix-blend': [...Z(), 'plus-lighter', 'plus-darker'] }],
                'bg-blend': [{ 'bg-blend': Z() }],
                filter: [{ filter: ['', 'none'] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [o] }],
                contrast: [{ contrast: [d] }],
                'drop-shadow': [{ 'drop-shadow': ['', 'none', xe, R] }],
                grayscale: [{ grayscale: [c] }],
                'hue-rotate': [{ 'hue-rotate': [s] }],
                invert: [{ invert: [u] }],
                saturate: [{ saturate: [x] }],
                sepia: [{ sepia: [D] }],
                'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
                'backdrop-blur': [{ 'backdrop-blur': [n] }],
                'backdrop-brightness': [{ 'backdrop-brightness': [o] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [d] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': [c] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [s] }],
                'backdrop-invert': [{ 'backdrop-invert': [u] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [h] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [x] }],
                'backdrop-sepia': [{ 'backdrop-sepia': [D] }],
                'border-collapse': [{ border: ['collapse', 'separate'] }],
                'border-spacing': [{ 'border-spacing': [l] }],
                'border-spacing-x': [{ 'border-spacing-x': [l] }],
                'border-spacing-y': [{ 'border-spacing-y': [l] }],
                'table-layout': [{ table: ['auto', 'fixed'] }],
                caption: [{ caption: ['top', 'bottom'] }],
                transition: [{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', R] }],
                duration: [{ duration: fe() }],
                ease: [{ ease: ['linear', 'in', 'out', 'in-out', R] }],
                delay: [{ delay: fe() }],
                animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', R] }],
                transform: [{ transform: ['', 'gpu', 'none'] }],
                scale: [{ scale: [_] }],
                'scale-x': [{ 'scale-x': [_] }],
                'scale-y': [{ 'scale-y': [_] }],
                rotate: [{ rotate: [We, R] }],
                'translate-x': [{ 'translate-x': [N] }],
                'translate-y': [{ 'translate-y': [N] }],
                'skew-x': [{ 'skew-x': [L] }],
                'skew-y': [{ 'skew-y': [L] }],
                'transform-origin': [
                    { origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', R] },
                ],
                accent: [{ accent: ['auto', e] }],
                appearance: [{ appearance: ['none', 'auto'] }],
                cursor: [
                    {
                        cursor: [
                            'auto',
                            'default',
                            'pointer',
                            'wait',
                            'text',
                            'move',
                            'help',
                            'not-allowed',
                            'none',
                            'context-menu',
                            'progress',
                            'cell',
                            'crosshair',
                            'vertical-text',
                            'alias',
                            'copy',
                            'no-drop',
                            'grab',
                            'grabbing',
                            'all-scroll',
                            'col-resize',
                            'row-resize',
                            'n-resize',
                            'e-resize',
                            's-resize',
                            'w-resize',
                            'ne-resize',
                            'nw-resize',
                            'se-resize',
                            'sw-resize',
                            'ew-resize',
                            'ns-resize',
                            'nesw-resize',
                            'nwse-resize',
                            'zoom-in',
                            'zoom-out',
                            R,
                        ],
                    },
                ],
                'caret-color': [{ caret: [e] }],
                'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
                resize: [{ resize: ['none', 'y', 'x', ''] }],
                'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                'scroll-m': [{ 'scroll-m': O() }],
                'scroll-mx': [{ 'scroll-mx': O() }],
                'scroll-my': [{ 'scroll-my': O() }],
                'scroll-ms': [{ 'scroll-ms': O() }],
                'scroll-me': [{ 'scroll-me': O() }],
                'scroll-mt': [{ 'scroll-mt': O() }],
                'scroll-mr': [{ 'scroll-mr': O() }],
                'scroll-mb': [{ 'scroll-mb': O() }],
                'scroll-ml': [{ 'scroll-ml': O() }],
                'scroll-p': [{ 'scroll-p': O() }],
                'scroll-px': [{ 'scroll-px': O() }],
                'scroll-py': [{ 'scroll-py': O() }],
                'scroll-ps': [{ 'scroll-ps': O() }],
                'scroll-pe': [{ 'scroll-pe': O() }],
                'scroll-pt': [{ 'scroll-pt': O() }],
                'scroll-pr': [{ 'scroll-pr': O() }],
                'scroll-pb': [{ 'scroll-pb': O() }],
                'scroll-pl': [{ 'scroll-pl': O() }],
                'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
                'snap-stop': [{ snap: ['normal', 'always'] }],
                'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
                touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                'touch-pz': ['touch-pinch-zoom'],
                select: [{ select: ['none', 'text', 'all', 'auto'] }],
                'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', R] }],
                fill: [{ fill: [e, 'none'] }],
                'stroke-w': [{ stroke: [ve, we, xt] }],
                stroke: [{ stroke: [e, 'none'] }],
                sr: ['sr-only', 'not-sr-only'],
                'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
            },
            conflictingClassGroups: {
                overflow: ['overflow-x', 'overflow-y'],
                overscroll: ['overscroll-x', 'overscroll-y'],
                inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
                'inset-x': ['right', 'left'],
                'inset-y': ['top', 'bottom'],
                flex: ['basis', 'grow', 'shrink'],
                gap: ['gap-x', 'gap-y'],
                p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
                px: ['pr', 'pl'],
                py: ['pt', 'pb'],
                m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
                mx: ['mr', 'ml'],
                my: ['mt', 'mb'],
                size: ['w', 'h'],
                'font-size': ['leading'],
                'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
                'fvn-ordinal': ['fvn-normal'],
                'fvn-slashed-zero': ['fvn-normal'],
                'fvn-figure': ['fvn-normal'],
                'fvn-spacing': ['fvn-normal'],
                'fvn-fraction': ['fvn-normal'],
                'line-clamp': ['display', 'overflow'],
                rounded: [
                    'rounded-s',
                    'rounded-e',
                    'rounded-t',
                    'rounded-r',
                    'rounded-b',
                    'rounded-l',
                    'rounded-ss',
                    'rounded-se',
                    'rounded-ee',
                    'rounded-es',
                    'rounded-tl',
                    'rounded-tr',
                    'rounded-br',
                    'rounded-bl',
                ],
                'rounded-s': ['rounded-ss', 'rounded-es'],
                'rounded-e': ['rounded-se', 'rounded-ee'],
                'rounded-t': ['rounded-tl', 'rounded-tr'],
                'rounded-r': ['rounded-tr', 'rounded-br'],
                'rounded-b': ['rounded-br', 'rounded-bl'],
                'rounded-l': ['rounded-tl', 'rounded-bl'],
                'border-spacing': ['border-spacing-x', 'border-spacing-y'],
                'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
                'border-w-x': ['border-w-r', 'border-w-l'],
                'border-w-y': ['border-w-t', 'border-w-b'],
                'border-color': ['border-color-s', 'border-color-e', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
                'border-color-x': ['border-color-r', 'border-color-l'],
                'border-color-y': ['border-color-t', 'border-color-b'],
                'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
                'scroll-mx': ['scroll-mr', 'scroll-ml'],
                'scroll-my': ['scroll-mt', 'scroll-mb'],
                'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
                'scroll-px': ['scroll-pr', 'scroll-pl'],
                'scroll-py': ['scroll-pt', 'scroll-pb'],
                touch: ['touch-x', 'touch-y', 'touch-pz'],
                'touch-x': ['touch'],
                'touch-y': ['touch'],
                'touch-pz': ['touch'],
            },
            conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        };
    },
    fi = Ul(ci);
function pi(...e) {
    return fi(Sn(e));
}
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vi = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var nt = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
};
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mi = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: r, name: a, class: l, ...i }, { slots: d }) =>
    me(
        'svg',
        {
            ...nt,
            width: e || nt.width,
            height: e || nt.height,
            stroke: o || nt.stroke,
            'stroke-width': n ? (Number(t) * 24) / Number(e) : t,
            class: ['lucide', `lucide-${vi(a ?? 'icon')}`],
            ...i,
        },
        [...r.map((c) => me(...c)), ...(d.default ? [d.default()] : [])],
    );
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xi =
        (e, t) =>
        (n, { slots: o }) =>
            me(mi, { ...n, iconNode: t, name: e }, o),
    gi = Wo(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        {
            variants: {
                variant: {
                    default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                    outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                    ghost: 'hover:bg-accent hover:text-accent-foreground',
                    link: 'text-primary underline-offset-4 hover:underline',
                },
                size: { default: 'h-9 px-4 py-2', sm: 'h-8 rounded-md px-3 text-xs', lg: 'h-10 rounded-md px-8', icon: 'h-9 w-9' },
            },
            defaultVariants: { variant: 'default', size: 'default' },
        },
    ),
    Yi = A({
        __name: 'Button',
        props: { variant: {}, size: {}, class: {}, asChild: { type: Boolean }, as: { default: 'button' } },
        setup(e) {
            const t = e;
            return (n, o) => (
                P(),
                k(
                    f(V),
                    { as: n.as, 'as-child': n.asChild, class: zo(f(pi)(f(gi)({ variant: n.variant, size: n.size }), t.class)) },
                    { default: C(() => [B(n.$slots, 'default')]), _: 3 },
                    8,
                    ['as', 'as-child', 'class'],
                )
            );
        },
    }),
    Zi = A({
        inheritAttrs: !1,
        __name: 'AppLogoIcon',
        props: { className: {} },
        setup(e) {
            return (t, n) => (
                P(),
                ot(
                    'svg',
                    F({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 42', class: t.className }, t.$attrs),
                    n[0] ||
                        (n[0] = [
                            Vo(
                                'path',
                                {
                                    fill: 'currentColor',
                                    'fill-rule': 'evenodd',
                                    'clip-rule': 'evenodd',
                                    d: 'M17.2 5.633 8.6.855 0 5.633v26.51l16.2 9 16.2-9v-8.442l7.6-4.223V9.856l-8.6-4.777-8.6 4.777V18.3l-5.6 3.111V5.633ZM38 18.301l-5.6 3.11v-6.157l5.6-3.11V18.3Zm-1.06-7.856-5.54 3.078-5.54-3.079 5.54-3.078 5.54 3.079ZM24.8 18.3v-6.157l5.6 3.111v6.158L24.8 18.3Zm-1 1.732 5.54 3.078-13.14 7.302-5.54-3.078 13.14-7.3v-.002Zm-16.2 7.89 7.6 4.222V38.3L2 30.966V7.92l5.6 3.111v16.892ZM8.6 9.3 3.06 6.222 8.6 3.143l5.54 3.08L8.6 9.3Zm21.8 15.51-13.2 7.334V38.3l13.2-7.334v-6.156ZM9.6 11.034l5.6-3.11v14.6l-5.6 3.11v-14.6Z',
                                },
                                null,
                                -1,
                            ),
                        ]),
                    16,
                )
            );
        },
    });
export {
    Oi as $,
    Yi as _,
    pi as a,
    Ai as B,
    Zi as b,
    Xi as c,
    _i as d,
    ji as e,
    Wo as f,
    V as g,
    Ki as H,
    Hi as h,
    xi as I,
    Gi as i,
    Si as j,
    Bi as K,
    ki as k,
    Ii as l,
    Li as m,
    bi as n,
    qn as O,
    wi as o,
    Ci as P,
    Ni as p,
    qi as q,
    Vi as r,
    Xe as S,
    zi as s,
    Y as t,
    Ui as U,
    Ri as u,
    Wi as V,
    Fi as v,
    Di as W,
    $i as w,
    Ei as X,
    Pi as z,
};
