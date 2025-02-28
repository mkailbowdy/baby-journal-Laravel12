function r(r, t) {
    for (var n = 0; n < t.length; n++) {
        var e = t[n];
        (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            'value' in e && (e.writable = !0),
            Object.defineProperty(r, u(e.key), e);
    }
}
function t(t, n, e) {
    return (
        n && r(t.prototype, n),
        e && r(t, e),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        t
    );
}
function n() {
    return (
        (n = Object.assign
            ? Object.assign.bind()
            : function (r) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var e in n) ({}).hasOwnProperty.call(n, e) && (r[e] = n[e]);
                  }
                  return r;
              }),
        n.apply(null, arguments)
    );
}
function e(r) {
    return (
        (e = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        e(r)
    );
}
function o() {
    try {
        var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (r) {}
    return (o = function () {
        return !!r;
    })();
}
function i(r, t) {
    return (
        (i = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (r, t) {
                  return (r.__proto__ = t), r;
              }),
        i(r, t)
    );
}
function u(r) {
    var t = (function (r) {
        if ('object' != typeof r || !r) return r;
        var t = r[Symbol.toPrimitive];
        if (void 0 !== t) {
            var n = t.call(r, 'string');
            if ('object' != typeof n) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return String(r);
    })(r);
    return 'symbol' == typeof t ? t : t + '';
}
function f(r) {
    var t = 'function' == typeof Map ? new Map() : void 0;
    return (
        (f = function (r) {
            if (
                null === r ||
                !(function (r) {
                    try {
                        return -1 !== Function.toString.call(r).indexOf('[native code]');
                    } catch (t) {
                        return 'function' == typeof r;
                    }
                })(r)
            )
                return r;
            if ('function' != typeof r)
                throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== t) {
                if (t.has(r)) return t.get(r);
                t.set(r, n);
            }
            function n() {
                return (function (r, t, n) {
                    if (o()) return Reflect.construct.apply(null, arguments);
                    var e = [null];
                    e.push.apply(e, t);
                    var u = new (r.bind.apply(r, e))();
                    return n && i(u, n.prototype), u;
                })(r, arguments, e(this).constructor);
            }
            return (
                (n.prototype = Object.create(r.prototype, {
                    constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
                })),
                i(n, r)
            );
        }),
        f(r)
    );
}
var a = String.prototype.replace,
    c = /%20/g,
    l = 'RFC3986',
    s = {
        default: l,
        formatters: {
            RFC1738: function (r) {
                return a.call(r, c, '+');
            },
            RFC3986: function (r) {
                return String(r);
            },
        },
        RFC1738: 'RFC1738',
        RFC3986: l,
    },
    v = Object.prototype.hasOwnProperty,
    p = Array.isArray,
    y = (function () {
        for (var r = [], t = 0; t < 256; ++t)
            r.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
        return r;
    })(),
    d = function (r, t) {
        for (var n = t && t.plainObjects ? Object.create(null) : {}, e = 0; e < r.length; ++e)
            void 0 !== r[e] && (n[e] = r[e]);
        return n;
    },
    b = {
        arrayToObject: d,
        assign: function (r, t) {
            return Object.keys(t).reduce(function (r, n) {
                return (r[n] = t[n]), r;
            }, r);
        },
        combine: function (r, t) {
            return [].concat(r, t);
        },
        compact: function (r) {
            for (var t = [{ obj: { o: r }, prop: 'o' }], n = [], e = 0; e < t.length; ++e)
                for (
                    var o = t[e], i = o.obj[o.prop], u = Object.keys(i), f = 0;
                    f < u.length;
                    ++f
                ) {
                    var a = u[f],
                        c = i[a];
                    'object' == typeof c &&
                        null !== c &&
                        -1 === n.indexOf(c) &&
                        (t.push({ obj: i, prop: a }), n.push(c));
                }
            return (
                (function (r) {
                    for (; r.length > 1; ) {
                        var t = r.pop(),
                            n = t.obj[t.prop];
                        if (p(n)) {
                            for (var e = [], o = 0; o < n.length; ++o)
                                void 0 !== n[o] && e.push(n[o]);
                            t.obj[t.prop] = e;
                        }
                    }
                })(t),
                r
            );
        },
        decode: function (r, t, n) {
            var e = r.replace(/\+/g, ' ');
            if ('iso-8859-1' === n) return e.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(e);
            } catch (r) {
                return e;
            }
        },
        encode: function (r, t, n, e, o) {
            if (0 === r.length) return r;
            var i = r;
            if (
                ('symbol' == typeof r
                    ? (i = Symbol.prototype.toString.call(r))
                    : 'string' != typeof r && (i = String(r)),
                'iso-8859-1' === n)
            )
                return escape(i).replace(/%u[0-9a-f]{4}/gi, function (r) {
                    return '%26%23' + parseInt(r.slice(2), 16) + '%3B';
                });
            for (var u = '', f = 0; f < i.length; ++f) {
                var a = i.charCodeAt(f);
                45 === a ||
                46 === a ||
                95 === a ||
                126 === a ||
                (a >= 48 && a <= 57) ||
                (a >= 65 && a <= 90) ||
                (a >= 97 && a <= 122) ||
                (o === s.RFC1738 && (40 === a || 41 === a))
                    ? (u += i.charAt(f))
                    : a < 128
                      ? (u += y[a])
                      : a < 2048
                        ? (u += y[192 | (a >> 6)] + y[128 | (63 & a)])
                        : a < 55296 || a >= 57344
                          ? (u += y[224 | (a >> 12)] + y[128 | ((a >> 6) & 63)] + y[128 | (63 & a)])
                          : ((a = 65536 + (((1023 & a) << 10) | (1023 & i.charCodeAt((f += 1))))),
                            (u +=
                                y[240 | (a >> 18)] +
                                y[128 | ((a >> 12) & 63)] +
                                y[128 | ((a >> 6) & 63)] +
                                y[128 | (63 & a)]));
            }
            return u;
        },
        isBuffer: function (r) {
            return !(
                !r ||
                'object' != typeof r ||
                !(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(r))
            );
        },
        isRegExp: function (r) {
            return '[object RegExp]' === Object.prototype.toString.call(r);
        },
        maybeMap: function (r, t) {
            if (p(r)) {
                for (var n = [], e = 0; e < r.length; e += 1) n.push(t(r[e]));
                return n;
            }
            return t(r);
        },
        merge: function r(t, n, e) {
            if (!n) return t;
            if ('object' != typeof n) {
                if (p(t)) t.push(n);
                else {
                    if (!t || 'object' != typeof t) return [t, n];
                    ((e && (e.plainObjects || e.allowPrototypes)) ||
                        !v.call(Object.prototype, n)) &&
                        (t[n] = !0);
                }
                return t;
            }
            if (!t || 'object' != typeof t) return [t].concat(n);
            var o = t;
            return (
                p(t) && !p(n) && (o = d(t, e)),
                p(t) && p(n)
                    ? (n.forEach(function (n, o) {
                          if (v.call(t, o)) {
                              var i = t[o];
                              i && 'object' == typeof i && n && 'object' == typeof n
                                  ? (t[o] = r(i, n, e))
                                  : t.push(n);
                          } else t[o] = n;
                      }),
                      t)
                    : Object.keys(n).reduce(function (t, o) {
                          var i = n[o];
                          return (t[o] = v.call(t, o) ? r(t[o], i, e) : i), t;
                      }, o)
            );
        },
    },
    h = Object.prototype.hasOwnProperty,
    g = {
        brackets: function (r) {
            return r + '[]';
        },
        comma: 'comma',
        indices: function (r, t) {
            return r + '[' + t + ']';
        },
        repeat: function (r) {
            return r;
        },
    },
    m = Array.isArray,
    j = String.prototype.split,
    w = Array.prototype.push,
    O = function (r, t) {
        w.apply(r, m(t) ? t : [t]);
    },
    E = Date.prototype.toISOString,
    R = s.default,
    S = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: b.encode,
        encodeValuesOnly: !1,
        format: R,
        formatter: s.formatters[R],
        indices: !1,
        serializeDate: function (r) {
            return E.call(r);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    k = function r(t, n, e, o, i, u, f, a, c, l, s, v, p, y) {
        var d,
            h = t;
        if (
            ('function' == typeof f
                ? (h = f(n, h))
                : h instanceof Date
                  ? (h = l(h))
                  : 'comma' === e &&
                    m(h) &&
                    (h = b.maybeMap(h, function (r) {
                        return r instanceof Date ? l(r) : r;
                    })),
            null === h)
        ) {
            if (o) return u && !p ? u(n, S.encoder, y, 'key', s) : n;
            h = '';
        }
        if (
            'string' == typeof (d = h) ||
            'number' == typeof d ||
            'boolean' == typeof d ||
            'symbol' == typeof d ||
            'bigint' == typeof d ||
            b.isBuffer(h)
        ) {
            if (u) {
                var g = p ? n : u(n, S.encoder, y, 'key', s);
                if ('comma' === e && p) {
                    for (var w = j.call(String(h), ','), E = '', R = 0; R < w.length; ++R)
                        E += (0 === R ? '' : ',') + v(u(w[R], S.encoder, y, 'value', s));
                    return [v(g) + '=' + E];
                }
                return [v(g) + '=' + v(u(h, S.encoder, y, 'value', s))];
            }
            return [v(n) + '=' + v(String(h))];
        }
        var k,
            T = [];
        if (void 0 === h) return T;
        if ('comma' === e && m(h)) k = [{ value: h.length > 0 ? h.join(',') || null : void 0 }];
        else if (m(f)) k = f;
        else {
            var $ = Object.keys(h);
            k = a ? $.sort(a) : $;
        }
        for (var x = 0; x < k.length; ++x) {
            var N = k[x],
                C = 'object' == typeof N && void 0 !== N.value ? N.value : h[N];
            if (!i || null !== C) {
                var A = m(h)
                    ? 'function' == typeof e
                        ? e(n, N)
                        : n
                    : n + (c ? '.' + N : '[' + N + ']');
                O(T, r(C, A, e, o, i, u, f, a, c, l, s, v, p, y));
            }
        }
        return T;
    },
    T = Object.prototype.hasOwnProperty,
    $ = Array.isArray,
    x = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: b.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
    },
    N = function (r) {
        return r.replace(/&#(\d+);/g, function (r, t) {
            return String.fromCharCode(parseInt(t, 10));
        });
    },
    C = function (r, t) {
        return r && 'string' == typeof r && t.comma && r.indexOf(',') > -1 ? r.split(',') : r;
    },
    A = function (r, t, n, e) {
        if (r) {
            var o = n.allowDots ? r.replace(/\.([^.[]+)/g, '[$1]') : r,
                i = /(\[[^[\]]*])/g,
                u = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
                f = u ? o.slice(0, u.index) : o,
                a = [];
            if (f) {
                if (!n.plainObjects && T.call(Object.prototype, f) && !n.allowPrototypes) return;
                a.push(f);
            }
            for (var c = 0; n.depth > 0 && null !== (u = i.exec(o)) && c < n.depth; ) {
                if (
                    ((c += 1),
                    !n.plainObjects &&
                        T.call(Object.prototype, u[1].slice(1, -1)) &&
                        !n.allowPrototypes)
                )
                    return;
                a.push(u[1]);
            }
            return (
                u && a.push('[' + o.slice(u.index) + ']'),
                (function (r, t, n, e) {
                    for (var o = e ? t : C(t, n), i = r.length - 1; i >= 0; --i) {
                        var u,
                            f = r[i];
                        if ('[]' === f && n.parseArrays) u = [].concat(o);
                        else {
                            u = n.plainObjects ? Object.create(null) : {};
                            var a =
                                    '[' === f.charAt(0) && ']' === f.charAt(f.length - 1)
                                        ? f.slice(1, -1)
                                        : f,
                                c = parseInt(a, 10);
                            n.parseArrays || '' !== a
                                ? !isNaN(c) &&
                                  f !== a &&
                                  String(c) === a &&
                                  c >= 0 &&
                                  n.parseArrays &&
                                  c <= n.arrayLimit
                                    ? ((u = [])[c] = o)
                                    : '__proto__' !== a && (u[a] = o)
                                : (u = { 0: o });
                        }
                        o = u;
                    }
                    return o;
                })(a, t, n, e)
            );
        }
    },
    D = function (r, t) {
        var n = (function (r) {
            if (!r) return x;
            if (null != r.decoder && 'function' != typeof r.decoder)
                throw new TypeError('Decoder has to be a function.');
            if (void 0 !== r.charset && 'utf-8' !== r.charset && 'iso-8859-1' !== r.charset)
                throw new TypeError(
                    'The charset option must be either utf-8, iso-8859-1, or undefined',
                );
            return {
                allowDots: void 0 === r.allowDots ? x.allowDots : !!r.allowDots,
                allowPrototypes:
                    'boolean' == typeof r.allowPrototypes ? r.allowPrototypes : x.allowPrototypes,
                arrayLimit: 'number' == typeof r.arrayLimit ? r.arrayLimit : x.arrayLimit,
                charset: void 0 === r.charset ? x.charset : r.charset,
                charsetSentinel:
                    'boolean' == typeof r.charsetSentinel ? r.charsetSentinel : x.charsetSentinel,
                comma: 'boolean' == typeof r.comma ? r.comma : x.comma,
                decoder: 'function' == typeof r.decoder ? r.decoder : x.decoder,
                delimiter:
                    'string' == typeof r.delimiter || b.isRegExp(r.delimiter)
                        ? r.delimiter
                        : x.delimiter,
                depth: 'number' == typeof r.depth || !1 === r.depth ? +r.depth : x.depth,
                ignoreQueryPrefix: !0 === r.ignoreQueryPrefix,
                interpretNumericEntities:
                    'boolean' == typeof r.interpretNumericEntities
                        ? r.interpretNumericEntities
                        : x.interpretNumericEntities,
                parameterLimit:
                    'number' == typeof r.parameterLimit ? r.parameterLimit : x.parameterLimit,
                parseArrays: !1 !== r.parseArrays,
                plainObjects: 'boolean' == typeof r.plainObjects ? r.plainObjects : x.plainObjects,
                strictNullHandling:
                    'boolean' == typeof r.strictNullHandling
                        ? r.strictNullHandling
                        : x.strictNullHandling,
            };
        })(t);
        if ('' === r || null == r) return n.plainObjects ? Object.create(null) : {};
        for (
            var e =
                    'string' == typeof r
                        ? (function (r, t) {
                              var n,
                                  e = {},
                                  o = (t.ignoreQueryPrefix ? r.replace(/^\?/, '') : r).split(
                                      t.delimiter,
                                      Infinity === t.parameterLimit ? void 0 : t.parameterLimit,
                                  ),
                                  i = -1,
                                  u = t.charset;
                              if (t.charsetSentinel)
                                  for (n = 0; n < o.length; ++n)
                                      0 === o[n].indexOf('utf8=') &&
                                          ('utf8=%E2%9C%93' === o[n]
                                              ? (u = 'utf-8')
                                              : 'utf8=%26%2310003%3B' === o[n] &&
                                                (u = 'iso-8859-1'),
                                          (i = n),
                                          (n = o.length));
                              for (n = 0; n < o.length; ++n)
                                  if (n !== i) {
                                      var f,
                                          a,
                                          c = o[n],
                                          l = c.indexOf(']='),
                                          s = -1 === l ? c.indexOf('=') : l + 1;
                                      -1 === s
                                          ? ((f = t.decoder(c, x.decoder, u, 'key')),
                                            (a = t.strictNullHandling ? null : ''))
                                          : ((f = t.decoder(c.slice(0, s), x.decoder, u, 'key')),
                                            (a = b.maybeMap(C(c.slice(s + 1), t), function (r) {
                                                return t.decoder(r, x.decoder, u, 'value');
                                            }))),
                                          a &&
                                              t.interpretNumericEntities &&
                                              'iso-8859-1' === u &&
                                              (a = N(a)),
                                          c.indexOf('[]=') > -1 && (a = $(a) ? [a] : a),
                                          (e[f] = T.call(e, f) ? b.combine(e[f], a) : a);
                                  }
                              return e;
                          })(r, n)
                        : r,
                o = n.plainObjects ? Object.create(null) : {},
                i = Object.keys(e),
                u = 0;
            u < i.length;
            ++u
        ) {
            var f = i[u],
                a = A(f, e[f], n, 'string' == typeof r);
            o = b.merge(o, a, n);
        }
        return b.compact(o);
    },
    P = /*#__PURE__*/ (function () {
        function r(r, t, n) {
            var e, o;
            (this.name = r),
                (this.definition = t),
                (this.bindings = null != (e = t.bindings) ? e : {}),
                (this.wheres = null != (o = t.wheres) ? o : {}),
                (this.config = n);
        }
        var n = r.prototype;
        return (
            (n.matchesUrl = function (r) {
                var t,
                    n = this;
                if (!this.definition.methods.includes('GET')) return !1;
                var e = this.template
                        .replace(/[.*+$()[\]]/g, '\\$&')
                        .replace(/(\/?){([^}?]*)(\??)}/g, function (r, t, e, o) {
                            var i,
                                u =
                                    '(?<' +
                                    e +
                                    '>' +
                                    ((null == (i = n.wheres[e])
                                        ? void 0
                                        : i.replace(/(^\^)|(\$$)/g, '')) || '[^/?]+') +
                                    ')';
                            return o ? '(' + t + u + ')?' : '' + t + u;
                        })
                        .replace(/^\w+:\/\//, ''),
                    o = r.replace(/^\w+:\/\//, '').split('?'),
                    i = o[0],
                    u = o[1],
                    f =
                        null != (t = new RegExp('^' + e + '/?$').exec(i))
                            ? t
                            : new RegExp('^' + e + '/?$').exec(decodeURI(i));
                if (f) {
                    for (var a in f.groups)
                        f.groups[a] =
                            'string' == typeof f.groups[a]
                                ? decodeURIComponent(f.groups[a])
                                : f.groups[a];
                    return { params: f.groups, query: D(u) };
                }
                return !1;
            }),
            (n.compile = function (r) {
                var t = this;
                return this.parameterSegments.length
                    ? this.template
                          .replace(/{([^}?]+)(\??)}/g, function (n, e, o) {
                              var i, u;
                              if (!o && [null, void 0].includes(r[e]))
                                  throw new Error(
                                      "Ziggy error: '" +
                                          e +
                                          "' parameter is required for route '" +
                                          t.name +
                                          "'.",
                                  );
                              if (
                                  t.wheres[e] &&
                                  !new RegExp(
                                      '^' + (o ? '(' + t.wheres[e] + ')?' : t.wheres[e]) + '$',
                                  ).test(null != (u = r[e]) ? u : '')
                              )
                                  throw new Error(
                                      "Ziggy error: '" +
                                          e +
                                          "' parameter '" +
                                          r[e] +
                                          "' does not match required format '" +
                                          t.wheres[e] +
                                          "' for route '" +
                                          t.name +
                                          "'.",
                                  );
                              return encodeURI(null != (i = r[e]) ? i : '')
                                  .replace(/%7C/g, '|')
                                  .replace(/%25/g, '%')
                                  .replace(/\$/g, '%24');
                          })
                          .replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, '$1/')
                          .replace(/\/+$/, '')
                    : this.template;
            }),
            t(r, [
                {
                    key: 'template',
                    get: function () {
                        var r = (this.origin + '/' + this.definition.uri).replace(/\/+$/, '');
                        return '' === r ? '/' : r;
                    },
                },
                {
                    key: 'origin',
                    get: function () {
                        return this.config.absolute
                            ? this.definition.domain
                                ? '' +
                                  this.config.url.match(/^\w+:\/\//)[0] +
                                  this.definition.domain +
                                  (this.config.port ? ':' + this.config.port : '')
                                : this.config.url
                            : '';
                    },
                },
                {
                    key: 'parameterSegments',
                    get: function () {
                        var r, t;
                        return null !=
                            (r =
                                null == (t = this.template.match(/{[^}?]+\??}/g))
                                    ? void 0
                                    : t.map(function (r) {
                                          return {
                                              name: r.replace(/{|\??}/g, ''),
                                              required: !/\?}$/.test(r),
                                          };
                                      }))
                            ? r
                            : [];
                    },
                },
            ])
        );
    })(),
    I = /*#__PURE__*/ (function (r) {
        function e(t, e, o, i) {
            var u;
            if (
                (void 0 === o && (o = !0),
                ((u = r.call(this) || this).t =
                    null != i
                        ? i
                        : 'undefined' != typeof Ziggy
                          ? Ziggy
                          : null == globalThis
                            ? void 0
                            : globalThis.Ziggy),
                (u.t = n({}, u.t, { absolute: o })),
                t)
            ) {
                if (!u.t.routes[t])
                    throw new Error("Ziggy error: route '" + t + "' is not in the route list.");
                (u.i = new P(t, u.t.routes[t], u.t)), (u.u = u.l(e));
            }
            return u;
        }
        var o, u;
        (u = r),
            ((o = e).prototype = Object.create(u.prototype)),
            (o.prototype.constructor = o),
            i(o, u);
        var f = e.prototype;
        return (
            (f.toString = function () {
                var r = this,
                    t = Object.keys(this.u)
                        .filter(function (t) {
                            return !r.i.parameterSegments.some(function (r) {
                                return r.name === t;
                            });
                        })
                        .filter(function (r) {
                            return '_query' !== r;
                        })
                        .reduce(function (t, e) {
                            var o;
                            return n({}, t, (((o = {})[e] = r.u[e]), o));
                        }, {});
                return (
                    this.i.compile(this.u) +
                    (function (r, t) {
                        var n,
                            e = r,
                            o = (function (r) {
                                if (!r) return S;
                                if (null != r.encoder && 'function' != typeof r.encoder)
                                    throw new TypeError('Encoder has to be a function.');
                                var t = r.charset || S.charset;
                                if (
                                    void 0 !== r.charset &&
                                    'utf-8' !== r.charset &&
                                    'iso-8859-1' !== r.charset
                                )
                                    throw new TypeError(
                                        'The charset option must be either utf-8, iso-8859-1, or undefined',
                                    );
                                var n = s.default;
                                if (void 0 !== r.format) {
                                    if (!h.call(s.formatters, r.format))
                                        throw new TypeError('Unknown format option provided.');
                                    n = r.format;
                                }
                                var e = s.formatters[n],
                                    o = S.filter;
                                return (
                                    ('function' == typeof r.filter || m(r.filter)) &&
                                        (o = r.filter),
                                    {
                                        addQueryPrefix:
                                            'boolean' == typeof r.addQueryPrefix
                                                ? r.addQueryPrefix
                                                : S.addQueryPrefix,
                                        allowDots:
                                            void 0 === r.allowDots ? S.allowDots : !!r.allowDots,
                                        charset: t,
                                        charsetSentinel:
                                            'boolean' == typeof r.charsetSentinel
                                                ? r.charsetSentinel
                                                : S.charsetSentinel,
                                        delimiter:
                                            void 0 === r.delimiter ? S.delimiter : r.delimiter,
                                        encode: 'boolean' == typeof r.encode ? r.encode : S.encode,
                                        encoder:
                                            'function' == typeof r.encoder ? r.encoder : S.encoder,
                                        encodeValuesOnly:
                                            'boolean' == typeof r.encodeValuesOnly
                                                ? r.encodeValuesOnly
                                                : S.encodeValuesOnly,
                                        filter: o,
                                        format: n,
                                        formatter: e,
                                        serializeDate:
                                            'function' == typeof r.serializeDate
                                                ? r.serializeDate
                                                : S.serializeDate,
                                        skipNulls:
                                            'boolean' == typeof r.skipNulls
                                                ? r.skipNulls
                                                : S.skipNulls,
                                        sort: 'function' == typeof r.sort ? r.sort : null,
                                        strictNullHandling:
                                            'boolean' == typeof r.strictNullHandling
                                                ? r.strictNullHandling
                                                : S.strictNullHandling,
                                    }
                                );
                            })(t);
                        'function' == typeof o.filter
                            ? (e = (0, o.filter)('', e))
                            : m(o.filter) && (n = o.filter);
                        var i = [];
                        if ('object' != typeof e || null === e) return '';
                        var u =
                            g[
                                t && t.arrayFormat in g
                                    ? t.arrayFormat
                                    : t && 'indices' in t
                                      ? t.indices
                                          ? 'indices'
                                          : 'repeat'
                                      : 'indices'
                            ];
                        n || (n = Object.keys(e)), o.sort && n.sort(o.sort);
                        for (var f = 0; f < n.length; ++f) {
                            var a = n[f];
                            (o.skipNulls && null === e[a]) ||
                                O(
                                    i,
                                    k(
                                        e[a],
                                        a,
                                        u,
                                        o.strictNullHandling,
                                        o.skipNulls,
                                        o.encode ? o.encoder : null,
                                        o.filter,
                                        o.sort,
                                        o.allowDots,
                                        o.serializeDate,
                                        o.format,
                                        o.formatter,
                                        o.encodeValuesOnly,
                                        o.charset,
                                    ),
                                );
                        }
                        var c = i.join(o.delimiter),
                            l = !0 === o.addQueryPrefix ? '?' : '';
                        return (
                            o.charsetSentinel &&
                                (l +=
                                    'iso-8859-1' === o.charset
                                        ? 'utf8=%26%2310003%3B&'
                                        : 'utf8=%E2%9C%93&'),
                            c.length > 0 ? l + c : ''
                        );
                    })(n({}, t, this.u._query), {
                        addQueryPrefix: !0,
                        arrayFormat: 'indices',
                        encodeValuesOnly: !0,
                        skipNulls: !0,
                        encoder: function (r, t) {
                            return 'boolean' == typeof r ? Number(r) : t(r);
                        },
                    })
                );
            }),
            (f.v = function (r) {
                var t = this;
                r
                    ? this.t.absolute && r.startsWith('/') && (r = this.p().host + r)
                    : (r = this.h());
                var e = {},
                    o = Object.entries(this.t.routes).find(function (n) {
                        return (e = new P(n[0], n[1], t.t).matchesUrl(r));
                    }) || [void 0, void 0];
                return n({ name: o[0] }, e, { route: o[1] });
            }),
            (f.h = function () {
                var r = this.p(),
                    t = r.pathname,
                    n = r.search;
                return (
                    (this.t.absolute
                        ? r.host + t
                        : t
                              .replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ''), '')
                              .replace(/^\/+/, '/')) + n
                );
            }),
            (f.current = function (r, t) {
                var e = this.v(),
                    o = e.name,
                    i = e.params,
                    u = e.query,
                    f = e.route;
                if (!r) return o;
                var a = new RegExp('^' + r.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$').test(
                    o,
                );
                if ([null, void 0].includes(t) || !a) return a;
                var c = new P(o, f, this.t);
                t = this.l(t, c);
                var l = n({}, i, u);
                if (
                    Object.values(t).every(function (r) {
                        return !r;
                    }) &&
                    !Object.values(l).some(function (r) {
                        return void 0 !== r;
                    })
                )
                    return !0;
                var s = function (r, t) {
                    return Object.entries(r).every(function (r) {
                        var n = r[0],
                            e = r[1];
                        return Array.isArray(e) && Array.isArray(t[n])
                            ? e.every(function (r) {
                                  return t[n].includes(r);
                              })
                            : 'object' == typeof e &&
                                'object' == typeof t[n] &&
                                null !== e &&
                                null !== t[n]
                              ? s(e, t[n])
                              : t[n] == e;
                    });
                };
                return s(t, l);
            }),
            (f.p = function () {
                var r,
                    t,
                    n,
                    e,
                    o,
                    i,
                    u = 'undefined' != typeof window ? window.location : {},
                    f = u.host,
                    a = u.pathname,
                    c = u.search;
                return {
                    host:
                        null != (r = null == (t = this.t.location) ? void 0 : t.host)
                            ? r
                            : void 0 === f
                              ? ''
                              : f,
                    pathname:
                        null != (n = null == (e = this.t.location) ? void 0 : e.pathname)
                            ? n
                            : void 0 === a
                              ? ''
                              : a,
                    search:
                        null != (o = null == (i = this.t.location) ? void 0 : i.search)
                            ? o
                            : void 0 === c
                              ? ''
                              : c,
                };
            }),
            (f.has = function (r) {
                return this.t.routes.hasOwnProperty(r);
            }),
            (f.l = function (r, t) {
                var e = this;
                void 0 === r && (r = {}),
                    void 0 === t && (t = this.i),
                    null != r || (r = {}),
                    (r = ['string', 'number'].includes(typeof r) ? [r] : r);
                var o = t.parameterSegments.filter(function (r) {
                    return !e.t.defaults[r.name];
                });
                if (Array.isArray(r))
                    r = r.reduce(function (r, t, e) {
                        var i, u;
                        return n(
                            {},
                            r,
                            o[e]
                                ? (((i = {})[o[e].name] = t), i)
                                : 'object' == typeof t
                                  ? t
                                  : (((u = {})[t] = ''), u),
                        );
                    }, {});
                else if (
                    1 === o.length &&
                    !r[o[0].name] &&
                    (r.hasOwnProperty(Object.values(t.bindings)[0]) || r.hasOwnProperty('id'))
                ) {
                    var i;
                    ((i = {})[o[0].name] = r), (r = i);
                }
                return n({}, this.m(t), this.j(r, t));
            }),
            (f.m = function (r) {
                var t = this;
                return r.parameterSegments
                    .filter(function (r) {
                        return t.t.defaults[r.name];
                    })
                    .reduce(function (r, e, o) {
                        var i,
                            u = e.name;
                        return n({}, r, (((i = {})[u] = t.t.defaults[u]), i));
                    }, {});
            }),
            (f.j = function (r, t) {
                var e = t.bindings,
                    o = t.parameterSegments;
                return Object.entries(r).reduce(function (r, t) {
                    var i,
                        u,
                        f = t[0],
                        a = t[1];
                    if (
                        !a ||
                        'object' != typeof a ||
                        Array.isArray(a) ||
                        !o.some(function (r) {
                            return r.name === f;
                        })
                    )
                        return n({}, r, (((u = {})[f] = a), u));
                    if (!a.hasOwnProperty(e[f])) {
                        if (!a.hasOwnProperty('id'))
                            throw new Error(
                                "Ziggy error: object passed as '" +
                                    f +
                                    "' parameter is missing route model binding key '" +
                                    e[f] +
                                    "'.",
                            );
                        e[f] = 'id';
                    }
                    return n({}, r, (((i = {})[f] = a[e[f]]), i));
                }, {});
            }),
            (f.valueOf = function () {
                return this.toString();
            }),
            t(e, [
                {
                    key: 'params',
                    get: function () {
                        var r = this.v();
                        return n({}, r.params, r.query);
                    },
                },
                {
                    key: 'routeParams',
                    get: function () {
                        return this.v().params;
                    },
                },
                {
                    key: 'queryParams',
                    get: function () {
                        return this.v().query;
                    },
                },
            ])
        );
    })(/*#__PURE__*/ f(String));
function Z(r, t, n, e) {
    var o = new I(r, t, n, e);
    return r ? o.toString() : o;
}
var F = {
    install: function (r, t) {
        var n = function (r, n, e, o) {
            return void 0 === o && (o = t), Z(r, n, e, o);
        };
        parseInt(r.version) > 2
            ? ((r.config.globalProperties.route = n), r.provide('route', n))
            : r.mixin({ methods: { route: n } });
    },
};
function q(r) {
    if (!r && !globalThis.Ziggy && 'undefined' == typeof Ziggy)
        throw new Error(
            'Ziggy error: missing configuration. Ensure that a `Ziggy` variable is defined globally or pass a config object into the useRoute hook.',
        );
    return function (t, n, e, o) {
        return void 0 === o && (o = r), Z(t, n, e, o);
    };
}
export { F as ZiggyVue, Z as route, q as useRoute };
