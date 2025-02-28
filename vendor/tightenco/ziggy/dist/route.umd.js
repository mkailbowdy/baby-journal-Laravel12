!(function (t, r) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = r())
        : 'function' == typeof define && define.amd
          ? define(r)
          : ((t || self).route = r());
})(this, function () {
    function t(t, r) {
        for (var n = 0; n < r.length; n++) {
            var e = r[n];
            (e.enumerable = e.enumerable || !1),
                (e.configurable = !0),
                'value' in e && (e.writable = !0),
                Object.defineProperty(t, u(e.key), e);
        }
    }
    function r(r, n, e) {
        return (
            n && t(r.prototype, n),
            e && t(r, e),
            Object.defineProperty(r, 'prototype', { writable: !1 }),
            r
        );
    }
    function n() {
        return (
            (n = Object.assign
                ? Object.assign.bind()
                : function (t) {
                      for (var r = 1; r < arguments.length; r++) {
                          var n = arguments[r];
                          for (var e in n) ({}).hasOwnProperty.call(n, e) && (t[e] = n[e]);
                      }
                      return t;
                  }),
            n.apply(null, arguments)
        );
    }
    function e(t) {
        return (
            (e = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            e(t)
        );
    }
    function o() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (o = function () {
            return !!t;
        })();
    }
    function i(t, r) {
        return (
            (i = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, r) {
                      return (t.__proto__ = r), t;
                  }),
            i(t, r)
        );
    }
    function u(t) {
        var r = (function (t) {
            if ('object' != typeof t || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(t, 'string');
                if ('object' != typeof n) return n;
                throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(t);
        })(t);
        return 'symbol' == typeof r ? r : r + '';
    }
    function f(t) {
        var r = 'function' == typeof Map ? new Map() : void 0;
        return (
            (f = function (t) {
                if (
                    null === t ||
                    !(function (t) {
                        try {
                            return -1 !== Function.toString.call(t).indexOf('[native code]');
                        } catch (r) {
                            return 'function' == typeof t;
                        }
                    })(t)
                )
                    return t;
                if ('function' != typeof t)
                    throw new TypeError('Super expression must either be null or a function');
                if (void 0 !== r) {
                    if (r.has(t)) return r.get(t);
                    r.set(t, n);
                }
                function n() {
                    return (function (t, r, n) {
                        if (o()) return Reflect.construct.apply(null, arguments);
                        var e = [null];
                        e.push.apply(e, r);
                        var u = new (t.bind.apply(t, e))();
                        return n && i(u, n.prototype), u;
                    })(t, arguments, e(this).constructor);
                }
                return (
                    (n.prototype = Object.create(t.prototype, {
                        constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                    i(n, t)
                );
            }),
            f(t)
        );
    }
    var a = String.prototype.replace,
        c = /%20/g,
        l = 'RFC3986',
        s = {
            default: l,
            formatters: {
                RFC1738: function (t) {
                    return a.call(t, c, '+');
                },
                RFC3986: function (t) {
                    return String(t);
                },
            },
            RFC1738: 'RFC1738',
            RFC3986: l,
        },
        v = Object.prototype.hasOwnProperty,
        p = Array.isArray,
        y = (function () {
            for (var t = [], r = 0; r < 256; ++r)
                t.push('%' + ((r < 16 ? '0' : '') + r.toString(16)).toUpperCase());
            return t;
        })(),
        d = function (t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, e = 0; e < t.length; ++e)
                void 0 !== t[e] && (n[e] = t[e]);
            return n;
        },
        b = {
            arrayToObject: d,
            assign: function (t, r) {
                return Object.keys(r).reduce(function (t, n) {
                    return (t[n] = r[n]), t;
                }, t);
            },
            combine: function (t, r) {
                return [].concat(t, r);
            },
            compact: function (t) {
                for (var r = [{ obj: { o: t }, prop: 'o' }], n = [], e = 0; e < r.length; ++e)
                    for (
                        var o = r[e], i = o.obj[o.prop], u = Object.keys(i), f = 0;
                        f < u.length;
                        ++f
                    ) {
                        var a = u[f],
                            c = i[a];
                        'object' == typeof c &&
                            null !== c &&
                            -1 === n.indexOf(c) &&
                            (r.push({ obj: i, prop: a }), n.push(c));
                    }
                return (
                    (function (t) {
                        for (; t.length > 1; ) {
                            var r = t.pop(),
                                n = r.obj[r.prop];
                            if (p(n)) {
                                for (var e = [], o = 0; o < n.length; ++o)
                                    void 0 !== n[o] && e.push(n[o]);
                                r.obj[r.prop] = e;
                            }
                        }
                    })(r),
                    t
                );
            },
            decode: function (t, r, n) {
                var e = t.replace(/\+/g, ' ');
                if ('iso-8859-1' === n) return e.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return e;
                }
            },
            encode: function (t, r, n, e, o) {
                if (0 === t.length) return t;
                var i = t;
                if (
                    ('symbol' == typeof t
                        ? (i = Symbol.prototype.toString.call(t))
                        : 'string' != typeof t && (i = String(t)),
                    'iso-8859-1' === n)
                )
                    return escape(i).replace(/%u[0-9a-f]{4}/gi, function (t) {
                        return '%26%23' + parseInt(t.slice(2), 16) + '%3B';
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
                              ? (u +=
                                    y[224 | (a >> 12)] +
                                    y[128 | ((a >> 6) & 63)] +
                                    y[128 | (63 & a)])
                              : ((a =
                                    65536 + (((1023 & a) << 10) | (1023 & i.charCodeAt((f += 1))))),
                                (u +=
                                    y[240 | (a >> 18)] +
                                    y[128 | ((a >> 12) & 63)] +
                                    y[128 | ((a >> 6) & 63)] +
                                    y[128 | (63 & a)]));
                }
                return u;
            },
            isBuffer: function (t) {
                return !(
                    !t ||
                    'object' != typeof t ||
                    !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
                );
            },
            isRegExp: function (t) {
                return '[object RegExp]' === Object.prototype.toString.call(t);
            },
            maybeMap: function (t, r) {
                if (p(t)) {
                    for (var n = [], e = 0; e < t.length; e += 1) n.push(r(t[e]));
                    return n;
                }
                return r(t);
            },
            merge: function t(r, n, e) {
                if (!n) return r;
                if ('object' != typeof n) {
                    if (p(r)) r.push(n);
                    else {
                        if (!r || 'object' != typeof r) return [r, n];
                        ((e && (e.plainObjects || e.allowPrototypes)) ||
                            !v.call(Object.prototype, n)) &&
                            (r[n] = !0);
                    }
                    return r;
                }
                if (!r || 'object' != typeof r) return [r].concat(n);
                var o = r;
                return (
                    p(r) && !p(n) && (o = d(r, e)),
                    p(r) && p(n)
                        ? (n.forEach(function (n, o) {
                              if (v.call(r, o)) {
                                  var i = r[o];
                                  i && 'object' == typeof i && n && 'object' == typeof n
                                      ? (r[o] = t(i, n, e))
                                      : r.push(n);
                              } else r[o] = n;
                          }),
                          r)
                        : Object.keys(n).reduce(function (r, o) {
                              var i = n[o];
                              return (r[o] = v.call(r, o) ? t(r[o], i, e) : i), r;
                          }, o)
                );
            },
        },
        h = Object.prototype.hasOwnProperty,
        g = {
            brackets: function (t) {
                return t + '[]';
            },
            comma: 'comma',
            indices: function (t, r) {
                return t + '[' + r + ']';
            },
            repeat: function (t) {
                return t;
            },
        },
        m = Array.isArray,
        j = String.prototype.split,
        w = Array.prototype.push,
        O = function (t, r) {
            w.apply(t, m(r) ? r : [r]);
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
            serializeDate: function (t) {
                return E.call(t);
            },
            skipNulls: !1,
            strictNullHandling: !1,
        },
        k = function t(r, n, e, o, i, u, f, a, c, l, s, v, p, y) {
            var d,
                h = r;
            if (
                ('function' == typeof f
                    ? (h = f(n, h))
                    : h instanceof Date
                      ? (h = l(h))
                      : 'comma' === e &&
                        m(h) &&
                        (h = b.maybeMap(h, function (t) {
                            return t instanceof Date ? l(t) : t;
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
                    O(T, t(C, A, e, o, i, u, f, a, c, l, s, v, p, y));
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
        N = function (t) {
            return t.replace(/&#(\d+);/g, function (t, r) {
                return String.fromCharCode(parseInt(r, 10));
            });
        },
        C = function (t, r) {
            return t && 'string' == typeof t && r.comma && t.indexOf(',') > -1 ? t.split(',') : t;
        },
        A = function (t, r, n, e) {
            if (t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
                    i = /(\[[^[\]]*])/g,
                    u = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
                    f = u ? o.slice(0, u.index) : o,
                    a = [];
                if (f) {
                    if (!n.plainObjects && T.call(Object.prototype, f) && !n.allowPrototypes)
                        return;
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
                    (function (t, r, n, e) {
                        for (var o = e ? r : C(r, n), i = t.length - 1; i >= 0; --i) {
                            var u,
                                f = t[i];
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
                    })(a, r, n, e)
                );
            }
        },
        D = function (t, r) {
            var n = (function (t) {
                if (!t) return x;
                if (null != t.decoder && 'function' != typeof t.decoder)
                    throw new TypeError('Decoder has to be a function.');
                if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                    throw new TypeError(
                        'The charset option must be either utf-8, iso-8859-1, or undefined',
                    );
                return {
                    allowDots: void 0 === t.allowDots ? x.allowDots : !!t.allowDots,
                    allowPrototypes:
                        'boolean' == typeof t.allowPrototypes
                            ? t.allowPrototypes
                            : x.allowPrototypes,
                    arrayLimit: 'number' == typeof t.arrayLimit ? t.arrayLimit : x.arrayLimit,
                    charset: void 0 === t.charset ? x.charset : t.charset,
                    charsetSentinel:
                        'boolean' == typeof t.charsetSentinel
                            ? t.charsetSentinel
                            : x.charsetSentinel,
                    comma: 'boolean' == typeof t.comma ? t.comma : x.comma,
                    decoder: 'function' == typeof t.decoder ? t.decoder : x.decoder,
                    delimiter:
                        'string' == typeof t.delimiter || b.isRegExp(t.delimiter)
                            ? t.delimiter
                            : x.delimiter,
                    depth: 'number' == typeof t.depth || !1 === t.depth ? +t.depth : x.depth,
                    ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                    interpretNumericEntities:
                        'boolean' == typeof t.interpretNumericEntities
                            ? t.interpretNumericEntities
                            : x.interpretNumericEntities,
                    parameterLimit:
                        'number' == typeof t.parameterLimit ? t.parameterLimit : x.parameterLimit,
                    parseArrays: !1 !== t.parseArrays,
                    plainObjects:
                        'boolean' == typeof t.plainObjects ? t.plainObjects : x.plainObjects,
                    strictNullHandling:
                        'boolean' == typeof t.strictNullHandling
                            ? t.strictNullHandling
                            : x.strictNullHandling,
                };
            })(r);
            if ('' === t || null == t) return n.plainObjects ? Object.create(null) : {};
            for (
                var e =
                        'string' == typeof t
                            ? (function (t, r) {
                                  var n,
                                      e = {},
                                      o = (r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t).split(
                                          r.delimiter,
                                          Infinity === r.parameterLimit ? void 0 : r.parameterLimit,
                                      ),
                                      i = -1,
                                      u = r.charset;
                                  if (r.charsetSentinel)
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
                                              ? ((f = r.decoder(c, x.decoder, u, 'key')),
                                                (a = r.strictNullHandling ? null : ''))
                                              : ((f = r.decoder(
                                                    c.slice(0, s),
                                                    x.decoder,
                                                    u,
                                                    'key',
                                                )),
                                                (a = b.maybeMap(C(c.slice(s + 1), r), function (t) {
                                                    return r.decoder(t, x.decoder, u, 'value');
                                                }))),
                                              a &&
                                                  r.interpretNumericEntities &&
                                                  'iso-8859-1' === u &&
                                                  (a = N(a)),
                                              c.indexOf('[]=') > -1 && (a = $(a) ? [a] : a),
                                              (e[f] = T.call(e, f) ? b.combine(e[f], a) : a);
                                      }
                                  return e;
                              })(t, n)
                            : t,
                    o = n.plainObjects ? Object.create(null) : {},
                    i = Object.keys(e),
                    u = 0;
                u < i.length;
                ++u
            ) {
                var f = i[u],
                    a = A(f, e[f], n, 'string' == typeof t);
                o = b.merge(o, a, n);
            }
            return b.compact(o);
        },
        P = /*#__PURE__*/ (function () {
            function t(t, r, n) {
                var e, o;
                (this.name = t),
                    (this.definition = r),
                    (this.bindings = null != (e = r.bindings) ? e : {}),
                    (this.wheres = null != (o = r.wheres) ? o : {}),
                    (this.config = n);
            }
            var n = t.prototype;
            return (
                (n.matchesUrl = function (t) {
                    var r,
                        n = this;
                    if (!this.definition.methods.includes('GET')) return !1;
                    var e = this.template
                            .replace(/[.*+$()[\]]/g, '\\$&')
                            .replace(/(\/?){([^}?]*)(\??)}/g, function (t, r, e, o) {
                                var i,
                                    u =
                                        '(?<' +
                                        e +
                                        '>' +
                                        ((null == (i = n.wheres[e])
                                            ? void 0
                                            : i.replace(/(^\^)|(\$$)/g, '')) || '[^/?]+') +
                                        ')';
                                return o ? '(' + r + u + ')?' : '' + r + u;
                            })
                            .replace(/^\w+:\/\//, ''),
                        o = t.replace(/^\w+:\/\//, '').split('?'),
                        i = o[0],
                        u = o[1],
                        f =
                            null != (r = new RegExp('^' + e + '/?$').exec(i))
                                ? r
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
                (n.compile = function (t) {
                    var r = this;
                    return this.parameterSegments.length
                        ? this.template
                              .replace(/{([^}?]+)(\??)}/g, function (n, e, o) {
                                  var i, u;
                                  if (!o && [null, void 0].includes(t[e]))
                                      throw new Error(
                                          "Ziggy error: '" +
                                              e +
                                              "' parameter is required for route '" +
                                              r.name +
                                              "'.",
                                      );
                                  if (
                                      r.wheres[e] &&
                                      !new RegExp(
                                          '^' + (o ? '(' + r.wheres[e] + ')?' : r.wheres[e]) + '$',
                                      ).test(null != (u = t[e]) ? u : '')
                                  )
                                      throw new Error(
                                          "Ziggy error: '" +
                                              e +
                                              "' parameter '" +
                                              t[e] +
                                              "' does not match required format '" +
                                              r.wheres[e] +
                                              "' for route '" +
                                              r.name +
                                              "'.",
                                      );
                                  return encodeURI(null != (i = t[e]) ? i : '')
                                      .replace(/%7C/g, '|')
                                      .replace(/%25/g, '%')
                                      .replace(/\$/g, '%24');
                              })
                              .replace(
                                  this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/,
                                  '$1/',
                              )
                              .replace(/\/+$/, '')
                        : this.template;
                }),
                r(t, [
                    {
                        key: 'template',
                        get: function () {
                            var t = (this.origin + '/' + this.definition.uri).replace(/\/+$/, '');
                            return '' === t ? '/' : t;
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
                            var t, r;
                            return null !=
                                (t =
                                    null == (r = this.template.match(/{[^}?]+\??}/g))
                                        ? void 0
                                        : r.map(function (t) {
                                              return {
                                                  name: t.replace(/{|\??}/g, ''),
                                                  required: !/\?}$/.test(t),
                                              };
                                          }))
                                ? t
                                : [];
                        },
                    },
                ])
            );
        })(),
        F = /*#__PURE__*/ (function (t) {
            function e(r, e, o, i) {
                var u;
                if (
                    (void 0 === o && (o = !0),
                    ((u = t.call(this) || this).t =
                        null != i
                            ? i
                            : 'undefined' != typeof Ziggy
                              ? Ziggy
                              : null == globalThis
                                ? void 0
                                : globalThis.Ziggy),
                    (u.t = n({}, u.t, { absolute: o })),
                    r)
                ) {
                    if (!u.t.routes[r])
                        throw new Error("Ziggy error: route '" + r + "' is not in the route list.");
                    (u.i = new P(r, u.t.routes[r], u.t)), (u.u = u.l(e));
                }
                return u;
            }
            var o, u;
            (u = t),
                ((o = e).prototype = Object.create(u.prototype)),
                (o.prototype.constructor = o),
                i(o, u);
            var f = e.prototype;
            return (
                (f.toString = function () {
                    var t = this,
                        r = Object.keys(this.u)
                            .filter(function (r) {
                                return !t.i.parameterSegments.some(function (t) {
                                    return t.name === r;
                                });
                            })
                            .filter(function (t) {
                                return '_query' !== t;
                            })
                            .reduce(function (r, e) {
                                var o;
                                return n({}, r, (((o = {})[e] = t.u[e]), o));
                            }, {});
                    return (
                        this.i.compile(this.u) +
                        (function (t, r) {
                            var n,
                                e = t,
                                o = (function (t) {
                                    if (!t) return S;
                                    if (null != t.encoder && 'function' != typeof t.encoder)
                                        throw new TypeError('Encoder has to be a function.');
                                    var r = t.charset || S.charset;
                                    if (
                                        void 0 !== t.charset &&
                                        'utf-8' !== t.charset &&
                                        'iso-8859-1' !== t.charset
                                    )
                                        throw new TypeError(
                                            'The charset option must be either utf-8, iso-8859-1, or undefined',
                                        );
                                    var n = s.default;
                                    if (void 0 !== t.format) {
                                        if (!h.call(s.formatters, t.format))
                                            throw new TypeError('Unknown format option provided.');
                                        n = t.format;
                                    }
                                    var e = s.formatters[n],
                                        o = S.filter;
                                    return (
                                        ('function' == typeof t.filter || m(t.filter)) &&
                                            (o = t.filter),
                                        {
                                            addQueryPrefix:
                                                'boolean' == typeof t.addQueryPrefix
                                                    ? t.addQueryPrefix
                                                    : S.addQueryPrefix,
                                            allowDots:
                                                void 0 === t.allowDots
                                                    ? S.allowDots
                                                    : !!t.allowDots,
                                            charset: r,
                                            charsetSentinel:
                                                'boolean' == typeof t.charsetSentinel
                                                    ? t.charsetSentinel
                                                    : S.charsetSentinel,
                                            delimiter:
                                                void 0 === t.delimiter ? S.delimiter : t.delimiter,
                                            encode:
                                                'boolean' == typeof t.encode ? t.encode : S.encode,
                                            encoder:
                                                'function' == typeof t.encoder
                                                    ? t.encoder
                                                    : S.encoder,
                                            encodeValuesOnly:
                                                'boolean' == typeof t.encodeValuesOnly
                                                    ? t.encodeValuesOnly
                                                    : S.encodeValuesOnly,
                                            filter: o,
                                            format: n,
                                            formatter: e,
                                            serializeDate:
                                                'function' == typeof t.serializeDate
                                                    ? t.serializeDate
                                                    : S.serializeDate,
                                            skipNulls:
                                                'boolean' == typeof t.skipNulls
                                                    ? t.skipNulls
                                                    : S.skipNulls,
                                            sort: 'function' == typeof t.sort ? t.sort : null,
                                            strictNullHandling:
                                                'boolean' == typeof t.strictNullHandling
                                                    ? t.strictNullHandling
                                                    : S.strictNullHandling,
                                        }
                                    );
                                })(r);
                            'function' == typeof o.filter
                                ? (e = (0, o.filter)('', e))
                                : m(o.filter) && (n = o.filter);
                            var i = [];
                            if ('object' != typeof e || null === e) return '';
                            var u =
                                g[
                                    r && r.arrayFormat in g
                                        ? r.arrayFormat
                                        : r && 'indices' in r
                                          ? r.indices
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
                        })(n({}, r, this.u._query), {
                            addQueryPrefix: !0,
                            arrayFormat: 'indices',
                            encodeValuesOnly: !0,
                            skipNulls: !0,
                            encoder: function (t, r) {
                                return 'boolean' == typeof t ? Number(t) : r(t);
                            },
                        })
                    );
                }),
                (f.v = function (t) {
                    var r = this;
                    t
                        ? this.t.absolute && t.startsWith('/') && (t = this.p().host + t)
                        : (t = this.h());
                    var e = {},
                        o = Object.entries(this.t.routes).find(function (n) {
                            return (e = new P(n[0], n[1], r.t).matchesUrl(t));
                        }) || [void 0, void 0];
                    return n({ name: o[0] }, e, { route: o[1] });
                }),
                (f.h = function () {
                    var t = this.p(),
                        r = t.pathname,
                        n = t.search;
                    return (
                        (this.t.absolute
                            ? t.host + r
                            : r
                                  .replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ''), '')
                                  .replace(/^\/+/, '/')) + n
                    );
                }),
                (f.current = function (t, r) {
                    var e = this.v(),
                        o = e.name,
                        i = e.params,
                        u = e.query,
                        f = e.route;
                    if (!t) return o;
                    var a = new RegExp(
                        '^' + t.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$',
                    ).test(o);
                    if ([null, void 0].includes(r) || !a) return a;
                    var c = new P(o, f, this.t);
                    r = this.l(r, c);
                    var l = n({}, i, u);
                    if (
                        Object.values(r).every(function (t) {
                            return !t;
                        }) &&
                        !Object.values(l).some(function (t) {
                            return void 0 !== t;
                        })
                    )
                        return !0;
                    var s = function (t, r) {
                        return Object.entries(t).every(function (t) {
                            var n = t[0],
                                e = t[1];
                            return Array.isArray(e) && Array.isArray(r[n])
                                ? e.every(function (t) {
                                      return r[n].includes(t);
                                  })
                                : 'object' == typeof e &&
                                    'object' == typeof r[n] &&
                                    null !== e &&
                                    null !== r[n]
                                  ? s(e, r[n])
                                  : r[n] == e;
                        });
                    };
                    return s(r, l);
                }),
                (f.p = function () {
                    var t,
                        r,
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
                            null != (t = null == (r = this.t.location) ? void 0 : r.host)
                                ? t
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
                (f.has = function (t) {
                    return this.t.routes.hasOwnProperty(t);
                }),
                (f.l = function (t, r) {
                    var e = this;
                    void 0 === t && (t = {}),
                        void 0 === r && (r = this.i),
                        null != t || (t = {}),
                        (t = ['string', 'number'].includes(typeof t) ? [t] : t);
                    var o = r.parameterSegments.filter(function (t) {
                        return !e.t.defaults[t.name];
                    });
                    if (Array.isArray(t))
                        t = t.reduce(function (t, r, e) {
                            var i, u;
                            return n(
                                {},
                                t,
                                o[e]
                                    ? (((i = {})[o[e].name] = r), i)
                                    : 'object' == typeof r
                                      ? r
                                      : (((u = {})[r] = ''), u),
                            );
                        }, {});
                    else if (
                        1 === o.length &&
                        !t[o[0].name] &&
                        (t.hasOwnProperty(Object.values(r.bindings)[0]) || t.hasOwnProperty('id'))
                    ) {
                        var i;
                        ((i = {})[o[0].name] = t), (t = i);
                    }
                    return n({}, this.m(r), this.j(t, r));
                }),
                (f.m = function (t) {
                    var r = this;
                    return t.parameterSegments
                        .filter(function (t) {
                            return r.t.defaults[t.name];
                        })
                        .reduce(function (t, e, o) {
                            var i,
                                u = e.name;
                            return n({}, t, (((i = {})[u] = r.t.defaults[u]), i));
                        }, {});
                }),
                (f.j = function (t, r) {
                    var e = r.bindings,
                        o = r.parameterSegments;
                    return Object.entries(t).reduce(function (t, r) {
                        var i,
                            u,
                            f = r[0],
                            a = r[1];
                        if (
                            !a ||
                            'object' != typeof a ||
                            Array.isArray(a) ||
                            !o.some(function (t) {
                                return t.name === f;
                            })
                        )
                            return n({}, t, (((u = {})[f] = a), u));
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
                        return n({}, t, (((i = {})[f] = a[e[f]]), i));
                    }, {});
                }),
                (f.valueOf = function () {
                    return this.toString();
                }),
                r(e, [
                    {
                        key: 'params',
                        get: function () {
                            var t = this.v();
                            return n({}, t.params, t.query);
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
    return function (t, r, n, e) {
        var o = new F(t, r, n, e);
        return t ? o.toString() : o;
    };
});
