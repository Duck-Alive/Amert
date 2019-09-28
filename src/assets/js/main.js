/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * @license jquery.panzoom.js v2.0.5
 * Updated: Thu Jul 03 2014
 * Add pan and zoom functionality to any element
 * Copyright (c) 2014 timmy willison
 * Released under the MIT license
 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
 */

/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function() {
    var requirejs, require, define;
    (function(e) {
        function c(e, t) {
            return f.call(e, t)
        }



        function y(e) {
            return function() {
                return u && u.config && u.config[e] || {}
            }
        }
        var t, n, r, i, s = {},
            o = {},
            u = {},
            a = {},
            f = Object.prototype.hasOwnProperty,
            l = [].slice;
        r = function(e, t) {
            var n, r = g(e),
                i = r[0];
            return e = r[1], i && (i = h(i, t), n = m(i)), i ? n && n.normalize ? e = n.normalize(e, d(t)) : e = h(e, t) : (e = h(e, t), r = g(e), i = r[0], e = r[1], i && (n = m(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, i = {
            require: function(e) {
                return p(e)
            },
            exports: function(e) {
                var t = s[e];
                return typeof t != "undefined" ? t : s[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: s[e],
                    config: y(e)
                }
            }
        }, t = function(t, n, u, f) {
            var l, h, d, g, y, b = [],
                w;
            f = f || t;
            if (typeof u == "function") {
                n = !n.length && u.length ? ["require", "exports", "module"] : n;
                for (y = 0; y < n.length; y += 1) {
                    g = r(n[y], f), h = g.f;
                    if (h === "require") b[y] = i.require(t);
                    else if (h === "exports") b[y] = i.exports(t), w = !0;
                    else if (h === "module") l = b[y] = i.module(t);
                    else if (c(s, h) || c(o, h) || c(a, h)) b[y] = m(h);
                    else {
                        if (!g.p) throw new Error(t + " missing " + h);
                        g.p.load(g.n, p(f, !0), v(h), {}), b[y] = s[h]
                    }
                }
                d = u.apply(s[t], b);
                if (t)
                    if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                    else if (d !== e || !w) s[t] = d
            } else t && (s[t] = u)
        }, requirejs = require = n = function(s, o, a, f, l) {
            return typeof s == "string" ? i[s] ? i[s](o) : m(r(s, o).f) : (s.splice || (u = s, o.splice ? (s = o, o = a, a = null) : s = e), o = o || function() {}, typeof a == "function" && (a = f, f = l), f ? t(e, s, o, a) : setTimeout(function() {
                t(e, s, o, a)
            }, 4), n)
        }, n.config = function(e) {
            return u = e, u.deps && n(u.deps, u.callback), n
        }, define = function(e, t, n) {
            t.splice || (n = t, t = []), !c(s, e) && !c(o, e) && (o[e] = [e, t, n])
        }, define.amd = {
            jQuery: !0
        }
    })(), define("../lib/almond", function() {}),
        function() {
            function x(e) {
                function t(t, n, r, i, s, o) {
                    for (; s >= 0 && s < o; s += e) {
                        var u = i ? i[s] : s;
                        r = n(r, t[u], u, t)
                    }
                    return r
                }
                return function(n, r, i, s) {
                    r = v(r, s, 4);
                    var o = !S(n) && d.keys(n),
                        u = (o || n).length,
                        a = e > 0 ? 0 : u - 1;
                    return arguments.length < 3 && (i = n[o ? o[a] : a], a += e), t(n, r, i, o, a, u)
                }
            }

            function C(e) {
                return function(t, n, r) {
                    n = m(n, r);
                    var i = E(t),
                        s = e > 0 ? 0 : i - 1;
                    for (; s >= 0 && s < i; s += e)
                        if (n(t[s], s, t)) return s;
                    return -1
                }
            }

            function k(e, t, n) {
                return function(r, i, s) {
                    var u = 0,
                        a = E(r);
                    if (typeof s == "number") e > 0 ? u = s >= 0 ? s : Math.max(s + a, u) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                    else if (n && s && a) return s = n(r, i), r[s] === i ? s : -1;
                    if (i !== i) return s = t(o.call(r, u, a), d.isNaN), s >= 0 ? s + u : -1;
                    for (s = e > 0 ? u : a - 1; s >= 0 && s < a; s += e)
                        if (r[s] === i) return s;
                    return -1
                }
            }

            function M(e, t) {
                var n = O.length,
                    i = e.constructor,
                    s = d.isFunction(i) && i.prototype || r,
                    o = "constructor";
                d.has(e, o) && !d.contains(t, o) && t.push(o);
                while (n--) o = O[n], o in e && e[o] !== s[o] && !d.contains(t, o) && t.push(o)
            }
            var e = this,
                t = e._,
                n = Array.prototype,
                r = Object.prototype,
                i = Function.prototype,
                s = n.push,
                o = n.slice,
                u = r.toString,
                a = r.hasOwnProperty,
                f = Array.isArray,
                l = Object.keys,
                c = i.bind,
                h = Object.create,
                p = function() {},
                d = function(e) {
                    if (e instanceof d) return e;
                    if (!(this instanceof d)) return new d(e);
                    this._wrapped = e
                };
            typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = d), exports._ = d) : e._ = d, d.VERSION = "1.8.3";
            var v = function(e, t, n) {
                    if (t === void 0) return e;
                    switch (n == null ? 3 : n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return e.call(t, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, s) {
                                return e.call(t, n, r, i, s)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                },
                m = function(e, t, n) {
                    return e == null ? d.identity : d.isFunction(e) ? v(e, t, n) : d.isObject(e) ? d.matcher(e) : d.property(e)
                };
            d.iteratee = function(e, t) {
                return m(e, t, Infinity)
            };
            var g = function(e, t) {
                    return function(n) {
                        var r = arguments.length;
                        if (r < 2 || n == null) return n;
                        for (var i = 1; i < r; i++) {
                            var s = arguments[i],
                                o = e(s),
                                u = o.length;
                            for (var a = 0; a < u; a++) {
                                var f = o[a];
                                if (!t || n[f] === void 0) n[f] = s[f]
                            }
                        }
                        return n
                    }
                },
                y = function(e) {
                    if (!d.isObject(e)) return {};
                    if (h) return h(e);
                    p.prototype = e;
                    var t = new p;
                    return p.prototype = null, t
                },
                b = function(e) {
                    return function(t) {
                        return t == null ? void 0 : t[e]
                    }
                },
                w = Math.pow(2, 53) - 1,
                E = b("length"),
                S = function(e) {
                    var t = E(e);
                    return typeof t == "number" && t >= 0 && t <= w
                };
            d.each = d.forEach = function(e, t, n) {
                t = v(t, n);
                var r, i;
                if (S(e))
                    for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                else {
                    var s = d.keys(e);
                    for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e)
                }
                return e
            }, d.map = d.collect = function(e, t, n) {
                t = m(t, n);
                var r = !S(e) && d.keys(e),
                    i = (r || e).length,
                    s = Array(i);
                for (var o = 0; o < i; o++) {
                    var u = r ? r[o] : o;
                    s[o] = t(e[u], u, e)
                }
                return s
            }, d.reduce = d.foldl = d.inject = x(1), d.reduceRight = d.foldr = x(-1), d.find = d.detect = function(e, t, n) {
                var r;
                S(e) ? r = d.findIndex(e, t, n) : r = d.findKey(e, t, n);
                if (r !== void 0 && r !== -1) return e[r]
            }, d.filter = d.select = function(e, t, n) {
                var r = [];
                return t = m(t, n), d.each(e, function(e, n, i) {
                    t(e, n, i) && r.push(e)
                }), r
            }, d.reject = function(e, t, n) {
                return d.filter(e, d.negate(m(t)), n)
            }, d.every = d.all = function(e, t, n) {
                t = m(t, n);
                var r = !S(e) && d.keys(e),
                    i = (r || e).length;
                for (var s = 0; s < i; s++) {
                    var o = r ? r[s] : s;
                    if (!t(e[o], o, e)) return !1
                }
                return !0
            }, d.some = d.any = function(e, t, n) {
                t = m(t, n);
                var r = !S(e) && d.keys(e),
                    i = (r || e).length;
                for (var s = 0; s < i; s++) {
                    var o = r ? r[s] : s;
                    if (t(e[o], o, e)) return !0
                }
                return !1
            }, d.contains = d.includes = d.include = function(e, t, n, r) {
                S(e) || (e = d.values(e));
                if (typeof n != "number" || r) n = 0;
                return d.indexOf(e, t, n) >= 0
            }, d.invoke = function(e, t) {
                var n = o.call(arguments, 2),
                    r = d.isFunction(t);
                return d.map(e, function(e) {
                    var i = r ? t : e[t];
                    return i == null ? i : i.apply(e, n)
                })
            }, d.pluck = function(e, t) {
                return d.map(e, d.property(t))
            }, d.where = function(e, t) {
                return d.filter(e, d.matcher(t))
            }, d.findWhere = function(e, t) {
                return d.find(e, d.matcher(t))
            }, d.max = function(e, t, n) {
                var r = -Infinity,
                    i = -Infinity,
                    s, o;
                if (t == null && e != null) {
                    e = S(e) ? e : d.values(e);
                    for (var u = 0, a = e.length; u < a; u++) s = e[u], s > r && (r = s)
                } else t = m(t, n), d.each(e, function(e, n, s) {
                    o = t(e, n, s);
                    if (o > i || o === -Infinity && r === -Infinity) r = e, i = o
                });
                return r
            }, d.min = function(e, t, n) {
                var r = Infinity,
                    i = Infinity,
                    s, o;
                if (t == null && e != null) {
                    e = S(e) ? e : d.values(e);
                    for (var u = 0, a = e.length; u < a; u++) s = e[u], s < r && (r = s)
                } else t = m(t, n), d.each(e, function(e, n, s) {
                    o = t(e, n, s);
                    if (o < i || o === Infinity && r === Infinity) r = e, i = o
                });
                return r
            }, d.shuffle = function(e) {
                var t = S(e) ? e : d.values(e),
                    n = t.length,
                    r = Array(n);
                for (var i = 0, s; i < n; i++) s = d.random(0, i), s !== i && (r[i] = r[s]), r[s] = t[i];
                return r
            }, d.sample = function(e, t, n) {
                return t == null || n ? (S(e) || (e = d.values(e)), e[d.random(e.length - 1)]) : d.shuffle(e).slice(0, Math.max(0, t))
            }, d.sortBy = function(e, t, n) {
                return t = m(t, n), d.pluck(d.map(e, function(e, n, r) {
                    return {
                        value: e,
                        index: n,
                        criteria: t(e, n, r)
                    }
                }).sort(function(e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    if (n !== r) {
                        if (n > r || n === void 0) return 1;
                        if (n < r || r === void 0) return -1
                    }
                    return e.index - t.index
                }), "value")
            };
            var T = function(e) {
                return function(t, n, r) {
                    var i = {};
                    return n = m(n, r), d.each(t, function(r, s) {
                        var o = n(r, s, t);
                        e(i, r, o)
                    }), i
                }
            };
            d.groupBy = T(function(e, t, n) {
                d.has(e, n) ? e[n].push(t) : e[n] = [t]
            }), d.indexBy = T(function(e, t, n) {
                e[n] = t
            }), d.countBy = T(function(e, t, n) {
                d.has(e, n) ? e[n]++ : e[n] = 1
            }), d.toArray = function(e) {
                return e ? d.isArray(e) ? o.call(e) : S(e) ? d.map(e, d.identity) : d.values(e) : []
            }, d.size = function(e) {
                return e == null ? 0 : S(e) ? e.length : d.keys(e).length
            }, d.partition = function(e, t, n) {
                t = m(t, n);
                var r = [],
                    i = [];
                return d.each(e, function(e, n, s) {
                    (t(e, n, s) ? r : i).push(e)
                }), [r, i]
            }, d.first = d.head = d.take = function(e, t, n) {
                return e == null ? void 0 : t == null || n ? e[0] : d.initial(e, e.length - t)
            }, d.initial = function(e, t, n) {
                return o.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)))
            }, d.last = function(e, t, n) {
                return e == null ? void 0 : t == null || n ? e[e.length - 1] : d.rest(e, Math.max(0, e.length - t))
            }, d.rest = d.tail = d.drop = function(e, t, n) {
                return o.call(e, t == null || n ? 1 : t)
            }, d.compact = function(e) {
                return d.filter(e, d.identity)
            };
            var N = function(e, t, n, r) {
                var i = [],
                    s = 0;
                for (var o = r || 0, u = E(e); o < u; o++) {
                    var a = e[o];
                    if (S(a) && (d.isArray(a) || d.isArguments(a))) {
                        t || (a = N(a, t, n));
                        var f = 0,
                            l = a.length;
                        i.length += l;
                        while (f < l) i[s++] = a[f++]
                    } else n || (i[s++] = a)
                }
                return i
            };
            d.flatten = function(e, t) {
                return N(e, t, !1)
            }, d.without = function(e) {
                return d.difference(e, o.call(arguments, 1))
            }, d.uniq = d.unique = function(e, t, n, r) {
                d.isBoolean(t) || (r = n, n = t, t = !1), n != null && (n = m(n, r));
                var i = [],
                    s = [];
                for (var o = 0, u = E(e); o < u; o++) {
                    var a = e[o],
                        f = n ? n(a, o, e) : a;
                    t ? ((!o || s !== f) && i.push(a), s = f) : n ? d.contains(s, f) || (s.push(f), i.push(a)) : d.contains(i, a) || i.push(a)
                }
                return i
            }, d.union = function() {
                return d.uniq(N(arguments, !0, !0))
            }, d.intersection = function(e) {
                var t = [],
                    n = arguments.length;
                for (var r = 0, i = E(e); r < i; r++) {
                    var s = e[r];
                    if (d.contains(t, s)) continue;
                    for (var o = 1; o < n; o++)
                        if (!d.contains(arguments[o], s)) break;
                    o === n && t.push(s)
                }
                return t
            }, d.difference = function(e) {
                var t = N(arguments, !0, !0, 1);
                return d.filter(e, function(e) {
                    return !d.contains(t, e)
                })
            }, d.zip = function() {
                return d.unzip(arguments)
            }, d.unzip = function(e) {
                var t = e && d.max(e, E).length || 0,
                    n = Array(t);
                for (var r = 0; r < t; r++) n[r] = d.pluck(e, r);
                return n
            }, d.object = function(e, t) {
                var n = {};
                for (var r = 0, i = E(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            }, d.findIndex = C(1), d.findLastIndex = C(-1), d.sortedIndex = function(e, t, n, r) {
                n = m(n, r, 1);
                var i = n(t),
                    s = 0,
                    o = E(e);
                while (s < o) {
                    var u = Math.floor((s + o) / 2);
                    n(e[u]) < i ? s = u + 1 : o = u
                }
                return s
            }, d.indexOf = k(1, d.findIndex, d.sortedIndex), d.lastIndexOf = k(-1, d.findLastIndex), d.range = function(e, t, n) {
                t == null && (t = e || 0, e = 0), n = n || 1;
                var r = Math.max(Math.ceil((t - e) / n), 0),
                    i = Array(r);
                for (var s = 0; s < r; s++, e += n) i[s] = e;
                return i
            };
            var L = function(e, t, n, r, i) {
                if (r instanceof t) {
                    var s = y(e.prototype),
                        o = e.apply(s, i);
                    return d.isObject(o) ? o : s
                }
                return e.apply(n, i)
            };
            d.bind = function(e, t) {
                if (c && e.bind === c) return c.apply(e, o.call(arguments, 1));
                if (!d.isFunction(e)) throw new TypeError("Bind must be called on a function");
                var n = o.call(arguments, 2),
                    r = function() {
                        return L(e, r, t, this, n.concat(o.call(arguments)))
                    };
                return r
            }, d.partial = function(e) {
                var t = o.call(arguments, 1),
                    n = function() {
                        var r = 0,
                            i = t.length,
                            s = Array(i);
                        for (var o = 0; o < i; o++) s[o] = t[o] === d ? arguments[r++] : t[o];
                        while (r < arguments.length) s.push(arguments[r++]);
                        return L(e, n, this, this, s)
                    };
                return n
            }, d.bindAll = function(e) {
                var t, n = arguments.length,
                    r;
                if (n <= 1) throw new Error("bindAll must be passed function names");
                for (t = 1; t < n; t++) r = arguments[t], e[r] = d.bind(e[r], e);
                return e
            }, d.memoize = function(e, t) {
                var n = function(r) {
                    var i = n.cache,
                        s = "" + (t ? t.apply(this, arguments) : r);
                    return d.has(i, s) || (i[s] = e.apply(this, arguments)), i[s]
                };
                return n.cache = {}, n
            }, d.delay = function(e, t) {
                var n = o.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, d.defer = d.partial(d.delay, d, 1), d.throttle = function(e, t, n) {
                var r, i, s, o = null,
                    u = 0;
                n || (n = {});
                var a = function() {
                    u = n.leading === !1 ? 0 : d.now(), o = null, s = e.apply(r, i), o || (r = i = null)
                };
                return function() {
                    var f = d.now();
                    !u && n.leading === !1 && (u = f);
                    var l = t - (f - u);
                    return r = this, i = arguments, l <= 0 || l > t ? (o && (clearTimeout(o), o = null), u = f, s = e.apply(r, i), o || (r = i = null)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
                }
            }, d.debounce = function(e, t, n) {
                var r, i, s, o, u, a = function() {
                    var f = d.now() - o;
                    f < t && f >= 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
                };
                return function() {
                    s = this, i = arguments, o = d.now();
                    var f = n && !r;
                    return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
                }
            }, d.wrap = function(e, t) {
                return d.partial(t, e)
            }, d.negate = function(e) {
                return function() {
                    return !e.apply(this, arguments)
                }
            }, d.compose = function() {
                var e = arguments,
                    t = e.length - 1;
                return function() {
                    var n = t,
                        r = e[t].apply(this, arguments);
                    while (n--) r = e[n].call(this, r);
                    return r
                }
            }, d.after = function(e, t) {
                return function() {
                    if (--e < 1) return t.apply(this, arguments)
                }
            }, d.before = function(e, t) {
                var n;
                return function() {
                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
                }
            }, d.once = d.partial(d.before, 2);
            var A = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            d.keys = function(e) {
                if (!d.isObject(e)) return [];
                if (l) return l(e);
                var t = [];
                for (var n in e) d.has(e, n) && t.push(n);
                return A && M(e, t), t
            }, d.allKeys = function(e) {
                if (!d.isObject(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return A && M(e, t), t
            }, d.values = function(e) {
                var t = d.keys(e),
                    n = t.length,
                    r = Array(n);
                for (var i = 0; i < n; i++) r[i] = e[t[i]];
                return r
            }, d.mapObject = function(e, t, n) {
                t = m(t, n);
                var r = d.keys(e),
                    i = r.length,
                    s = {},
                    o;
                for (var u = 0; u < i; u++) o = r[u], s[o] = t(e[o], o, e);
                return s
            }, d.pairs = function(e) {
                var t = d.keys(e),
                    n = t.length,
                    r = Array(n);
                for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                return r
            }, d.invert = function(e) {
                var t = {},
                    n = d.keys(e);
                for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                return t
            }, d.functions = d.methods = function(e) {
                var t = [];
                for (var n in e) d.isFunction(e[n]) && t.push(n);
                return t.sort()
            }, d.extend = g(d.allKeys), d.extendOwn = d.assign = g(d.keys), d.findKey = function(e, t, n) {
                t = m(t, n);
                var r = d.keys(e),
                    i;
                for (var s = 0, o = r.length; s < o; s++) {
                    i = r[s];
                    if (t(e[i], i, e)) return i
                }
            }, d.pick = function(e, t, n) {
                var r = {},
                    i = e,
                    s, o;
                if (i == null) return r;
                d.isFunction(t) ? (o = d.allKeys(i), s = v(t, n)) : (o = N(arguments, !1, !1, 1), s = function(e, t, n) {
                    return t in n
                }, i = Object(i));
                for (var u = 0, a = o.length; u < a; u++) {
                    var f = o[u],
                        l = i[f];
                    s(l, f, i) && (r[f] = l)
                }
                return r
            }, d.omit = function(e, t, n) {
                if (d.isFunction(t)) t = d.negate(t);
                else {
                    var r = d.map(N(arguments, !1, !1, 1), String);
                    t = function(e, t) {
                        return !d.contains(r, t)
                    }
                }
                return d.pick(e, t, n)
            }, d.defaults = g(d.allKeys, !0), d.create = function(e, t) {
                var n = y(e);
                return t && d.extendOwn(n, t), n
            }, d.clone = function(e) {
                return d.isObject(e) ? d.isArray(e) ? e.slice() : d.extend({}, e) : e
            }, d.tap = function(e, t) {
                return t(e), e
            }, d.isMatch = function(e, t) {
                var n = d.keys(t),
                    r = n.length;
                if (e == null) return !r;
                var i = Object(e);
                for (var s = 0; s < r; s++) {
                    var o = n[s];
                    if (t[o] !== i[o] || !(o in i)) return !1
                }
                return !0
            };
            var _ = function(e, t, n, r) {
                if (e === t) return e !== 0 || 1 / e === 1 / t;
                if (e == null || t == null) return e === t;
                e instanceof d && (e = e._wrapped), t instanceof d && (t = t._wrapped);
                var i = u.call(e);
                if (i !== u.call(t)) return !1;
                switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        if (+e !== +e) return +t !== +t;
                        return +e === 0 ? 1 / +e === 1 / t : +e === +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e === +t
                }
                var s = i === "[object Array]";
                if (!s) {
                    if (typeof e != "object" || typeof t != "object") return !1;
                    var o = e.constructor,
                        a = t.constructor;
                    if (o !== a && !(d.isFunction(o) && o instanceof o && d.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
                }
                n = n || [], r = r || [];
                var f = n.length;
                while (f--)
                    if (n[f] === e) return r[f] === t;
                n.push(e), r.push(t);
                if (s) {
                    f = e.length;
                    if (f !== t.length) return !1;
                    while (f--)
                        if (!_(e[f], t[f], n, r)) return !1
                } else {
                    var l = d.keys(e),
                        c;
                    f = l.length;
                    if (d.keys(t).length !== f) return !1;
                    while (f--) {
                        c = l[f];
                        if (!d.has(t, c) || !_(e[c], t[c], n, r)) return !1
                    }
                }
                return n.pop(), r.pop(), !0
            };
            d.isEqual = function(e, t) {
                return _(e, t)
            }, d.isEmpty = function(e) {
                return e == null ? !0 : S(e) && (d.isArray(e) || d.isString(e) || d.isArguments(e)) ? e.length === 0 : d.keys(e).length === 0
            }, d.isElement = function(e) {
                return !!e && e.nodeType === 1
            }, d.isArray = f || function(e) {
                return u.call(e) === "[object Array]"
            }, d.isObject = function(e) {
                var t = typeof e;
                return t === "function" || t === "object" && !!e
            }, d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
                d["is" + e] = function(t) {
                    return u.call(t) === "[object " + e + "]"
                }
            }), d.isArguments(arguments) || (d.isArguments = function(e) {
                return d.has(e, "callee")
            }), typeof /./ != "function" && typeof Int8Array != "object" && (d.isFunction = function(e) {
                return typeof e == "function" || !1
            }), d.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, d.isNaN = function(e) {
                return d.isNumber(e) && e !== +e
            }, d.isBoolean = function(e) {
                return e === !0 || e === !1 || u.call(e) === "[object Boolean]"
            }, d.isNull = function(e) {
                return e === null
            }, d.isUndefined = function(e) {
                return e === void 0
            }, d.has = function(e, t) {
                return e != null && a.call(e, t)
            }, d.noConflict = function() {
                return e._ = t, this
            }, d.identity = function(e) {
                return e
            }, d.constant = function(e) {
                return function() {
                    return e
                }
            }, d.noop = function() {}, d.property = b, d.propertyOf = function(e) {
                return e == null ? function() {} : function(t) {
                    return e[t]
                }
            }, d.matcher = d.matches = function(e) {
                return e = d.extendOwn({}, e),
                    function(t) {
                        return d.isMatch(t, e)
                    }
            }, d.times = function(e, t, n) {
                var r = Array(Math.max(0, e));
                t = v(t, n, 1);
                for (var i = 0; i < e; i++) r[i] = t(i);
                return r
            }, d.random = function(e, t) {
                return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
            }, d.now = Date.now || function() {
                return (new Date).getTime()
            };
            var D = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                P = d.invert(D),
                H = function(e) {
                    var t = function(t) {
                            return e[t]
                        },
                        n = "(?:" + d.keys(e).join("|") + ")",
                        r = RegExp(n),
                        i = RegExp(n, "g");
                    return function(e) {
                        return e = e == null ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                    }
                };
            d.escape = H(D), d.unescape = H(P), d.result = function(e, t, n) {
                var r = e == null ? void 0 : e[t];
                return r === void 0 && (r = n), d.isFunction(r) ? r.call(e) : r
            };
            var B = 0;
            d.uniqueId = function(e) {
                var t = ++B + "";
                return e ? e + t : t
            }, d.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                F = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                I = /\\|'|\r|\n|\u2028|\u2029/g,
                q = function(e) {
                    return "\\" + F[e]
                };
            d.template = function(e, t, n) {
                !t && n && (t = n), t = d.defaults({}, t, d.templateSettings);
                var r = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
                    i = 0,
                    s = "__p+='";
                e.replace(r, function(t, n, r, o, u) {
                    return s += e.slice(i, u).replace(I, q), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
                }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                try {
                    var o = new Function(t.variable || "obj", "_", s)
                } catch (u) {
                    throw u.source = s, u
                }
                var a = function(e) {
                        return o.call(this, e, d)
                    },
                    f = t.variable || "obj";
                return a.source = "function(" + f + "){\n" + s + "}", a
            }, d.chain = function(e) {
                var t = d(e);
                return t._chain = !0, t
            };
            var R = function(e, t) {
                return e._chain ? d(t).chain() : t
            };
            d.mixin = function(e) {
                d.each(d.functions(e), function(t) {
                    var n = d[t] = e[t];
                    d.prototype[t] = function() {
                        var e = [this._wrapped];
                        return s.apply(e, arguments), R(this, n.apply(d, e))
                    }
                })
            }, d.mixin(d), d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                var t = n[e];
                d.prototype[e] = function() {
                    var n = this._wrapped;
                    return t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0], R(this, n)
                }
            }), d.each(["concat", "join", "slice"], function(e) {
                var t = n[e];
                d.prototype[e] = function() {
                    return R(this, t.apply(this._wrapped, arguments))
                }
            }), d.prototype.value = function() {
                return this._wrapped
            }, d.prototype.valueOf = d.prototype.toJSON = d.prototype.value, d.prototype.toString = function() {
                return "" + this._wrapped
            }, typeof define == "function" && define.amd && define("underscore", [], function() {
                return d
            })
        }.call(this), define("jquery", [], function() {
            return window.jQuery
        }),
        function() {
            var e = this,
                t = e.Backbone,
                n = [],
                r = n.push,
                i = n.slice,
                s = n.splice,
                o;
            typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "0.9.10";
            var u = e._;
            !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender, o.noConflict = function() {
                return e.Backbone = t, this
            }, o.emulateHTTP = !1, o.emulateJSON = !1;
            var a = /\s+/,
                f = function(e, t, n, r) {
                    if (!n) return !0;
                    if (typeof n == "object")
                        for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                    else {
                        if (!a.test(n)) return !0;
                        var s = n.split(a);
                        for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r))
                    }
                },
                l = function(e, t) {
                    var n, r = -1,
                        i = e.length;
                    switch (t.length) {
                        case 0:
                            while (++r < i)(n = e[r]).callback.call(n.ctx);
                            return;
                        case 1:
                            while (++r < i)(n = e[r]).callback.call(n.ctx, t[0]);
                            return;
                        case 2:
                            while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1]);
                            return;
                        case 3:
                            while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1], t[2]);
                            return;
                        default:
                            while (++r < i)(n = e[r]).callback.apply(n.ctx, t)
                    }
                },
                c = o.Events = {
                    on: function(e, t, n) {
                        if (!f(this, "on", e, [t, n]) || !t) return this;
                        this._events || (this._events = {});
                        var r = this._events[e] || (this._events[e] = []);
                        return r.push({
                            callback: t,
                            context: n,
                            ctx: n || this
                        }), this
                    },
                    once: function(e, t, n) {
                        if (!f(this, "once", e, [t, n]) || !t) return this;
                        var r = this,
                            i = u.once(function() {
                                r.off(e, i), t.apply(this, arguments)
                            });
                        return i._callback = t, this.on(e, i, n), this
                    },
                    off: function(e, t, n) {
                        var r, i, s, o, a, l, c, h;
                        if (!this._events || !f(this, "off", e, [t, n])) return this;
                        if (!e && !t && !n) return this._events = {}, this;
                        o = e ? [e] : u.keys(this._events);
                        for (a = 0, l = o.length; a < l; a++) {
                            e = o[a];
                            if (r = this._events[e]) {
                                s = [];
                                if (t || n)
                                    for (c = 0, h = r.length; c < h; c++) i = r[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && s.push(i);
                                this._events[e] = s
                            }
                        }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var t = i.call(arguments, 1);
                        if (!f(this, "trigger", e, t)) return this;
                        var n = this._events[e],
                            r = this._events.all;
                        return n && l(n, t), r && l(r, arguments), this
                    },
                    listenTo: function(e, t, n) {
                        var r = this._listeners || (this._listeners = {}),
                            i = e._listenerId || (e._listenerId = u.uniqueId("l"));
                        return r[i] = e, e.on(t, typeof t == "object" ? this : n, this), this
                    },
                    stopListening: function(e, t, n) {
                        var r = this._listeners;
                        if (!r) return;
                        if (e) e.off(t, typeof t == "object" ? this : n, this), !t && !n && delete r[e._listenerId];
                        else {
                            typeof t == "object" && (n = this);
                            for (var i in r) r[i].off(t, n, this);
                            this._listeners = {}
                        }
                        return this
                    }
                };
            c.bind = c.on, c.unbind = c.off, u.extend(o, c);
            var h = o.Model = function(e, t) {
                var n, r = e || {};
                this.cid = u.uniqueId("c"), this.attributes = {}, t && t.collection && (this.collection = t.collection), t && t.parse && (r = this.parse(r, t) || {});
                if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
                this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
            };
            u.extend(h.prototype, c, {
                changed: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(e) {
                    return u.clone(this.attributes)
                },
                sync: function() {
                    return o.sync.apply(this, arguments)
                },
                get: function(e) {
                    return this.attributes[e]
                },
                escape: function(e) {
                    return u.escape(this.get(e))
                },
                has: function(e) {
                    return this.get(e) != null
                },
                set: function(e, t, n) {
                    var r, i, s, o, a, f, l, c;
                    if (e == null) return this;
                    typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
                    if (!this._validate(i, n)) return !1;
                    s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
                    for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
                    if (!a) {
                        o.length && (this._pending = !0);
                        for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n)
                    }
                    if (f) return this;
                    if (!a)
                        while (this._pending) this._pending = !1, this.trigger("change", this, n);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(e, t) {
                    return this.set(e, void 0, u.extend({}, t, {
                        unset: !0
                    }))
                },
                clear: function(e) {
                    var t = {};
                    for (var n in this.attributes) t[n] = void 0;
                    return this.set(t, u.extend({}, e, {
                        unset: !0
                    }))
                },
                hasChanged: function(e) {
                    return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e)
                },
                changedAttributes: function(e) {
                    if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
                    var t, n = !1,
                        r = this._changing ? this._previousAttributes : this.attributes;
                    for (var i in e) {
                        if (u.isEqual(r[i], t = e[i])) continue;
                        (n || (n = {}))[i] = t
                    }
                    return n
                },
                previous: function(e) {
                    return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
                },
                previousAttributes: function() {
                    return u.clone(this._previousAttributes)
                },
                fetch: function(e) {
                    e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                    var t = e.success;
                    return e.success = function(e, n, r) {
                        if (!e.set(e.parse(n, r), r)) return !1;
                        t && t(e, n, r)
                    }, this.sync("read", this, e)
                },
                save: function(e, t, n) {
                    var r, i, s, o, a = this.attributes;
                    return e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t, r && (!n || !n.wait) && !this.set(r, n) ? !1 : (n = u.extend({
                        validate: !0
                    }, n), this._validate(r, n) ? (r && n.wait && (this.attributes = u.extend({}, a, r)), n.parse === void 0 && (n.parse = !0), i = n.success, n.success = function(e, t, n) {
                        e.attributes = a;
                        var s = e.parse(t, n);
                        n.wait && (s = u.extend(r || {}, s));
                        if (u.isObject(s) && !e.set(s, n)) return !1;
                        i && i(e, t, n)
                    }, s = this.isNew() ? "create" : n.patch ? "patch" : "update", s === "patch" && (n.attrs = r), o = this.sync(s, this, n), r && n.wait && (this.attributes = a), o) : !1)
                },
                destroy: function(e) {
                    e = e ? u.clone(e) : {};
                    var t = this,
                        n = e.success,
                        r = function() {
                            t.trigger("destroy", t, t.collection, e)
                        };
                    e.success = function(e, t, i) {
                        (i.wait || e.isNew()) && r(), n && n(e, t, i)
                    };
                    if (this.isNew()) return e.success(this, null, e), !1;
                    var i = this.sync("delete", this, e);
                    return e.wait || r(), i
                },
                url: function() {
                    var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || M();
                    return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return this.id == null
                },
                isValid: function(e) {
                    return !this.validate || !this.validate(this.attributes, e)
                },
                _validate: function(e, t) {
                    if (!t.validate || !this.validate) return !0;
                    e = u.extend({}, this.attributes, e);
                    var n = this.validationError = this.validate(e, t) || null;
                    return n ? (this.trigger("invalid", this, n, t || {}), !1) : !0
                }
            });
            var p = o.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
                    silent: !0
                }, t))
            };
            u.extend(p.prototype, c, {
                model: h,
                initialize: function() {},
                toJSON: function(e) {
                    return this.map(function(t) {
                        return t.toJSON(e)
                    })
                },
                sync: function() {
                    return o.sync.apply(this, arguments)
                },
                add: function(e, t) {
                    e = u.isArray(e) ? e.slice() : [e], t || (t = {});
                    var n, i, o, a, f, l, c, h, p, d;
                    c = [], h = t.at, p = this.comparator && h == null && t.sort != 0, d = u.isString(this.comparator) ? this.comparator : null;
                    for (n = 0, i = e.length; n < i; n++) {
                        if (!(o = this._prepareModel(a = e[n], t))) {
                            this.trigger("invalid", this, a, t);
                            continue
                        }
                        if (f = this.get(o)) {
                            t.merge && (f.set(a === o ? o.attributes : a, t), p && !l && f.hasChanged(d) && (l = !0));
                            continue
                        }
                        c.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o)
                    }
                    c.length && (p && (l = !0), this.length += c.length, h != null ? s.apply(this.models, [h, 0].concat(c)) : r.apply(this.models, c)), l && this.sort({
                        silent: !0
                    });
                    if (t.silent) return this;
                    for (n = 0, i = c.length; n < i; n++)(o = c[n]).trigger("add", o, this, t);
                    return l && this.trigger("sort", this, t), this
                },
                remove: function(e, t) {
                    e = u.isArray(e) ? e.slice() : [e], t || (t = {});
                    var n, r, i, s;
                    for (n = 0, r = e.length; n < r; n++) {
                        s = this.get(e[n]);
                        if (!s) continue;
                        delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s)
                    }
                    return this
                },
                push: function(e, t) {
                    return e = this._prepareModel(e, t), this.add(e, u.extend({
                        at: this.length
                    }, t)), e
                },
                pop: function(e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e), t
                },
                unshift: function(e, t) {
                    return e = this._prepareModel(e, t), this.add(e, u.extend({
                        at: 0
                    }, t)), e
                },
                shift: function(e) {
                    var t = this.at(0);
                    return this.remove(t, e), t
                },
                slice: function(e, t) {
                    return this.models.slice(e, t)
                },
                get: function(e) {
                    return e == null ? void 0 : (this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[e.id || e.cid || e[this._idAttr] || e])
                },
                at: function(e) {
                    return this.models[e]
                },
                where: function(e) {
                    return u.isEmpty(e) ? [] : this.filter(function(t) {
                        for (var n in e)
                            if (e[n] !== t.get(n)) return !1;
                        return !0
                    })
                },
                sort: function(e) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
                },
                pluck: function(e) {
                    return u.invoke(this.models, "get", e)
                },
                update: function(e, t) {
                    t = u.extend({
                        add: !0,
                        merge: !0,
                        remove: !0
                    }, t), t.parse && (e = this.parse(e, t));
                    var n, r, i, s, o = [],
                        a = [],
                        f = {};
                    u.isArray(e) || (e = e ? [e] : []);
                    if (t.add && !t.remove) return this.add(e, t);
                    for (r = 0, i = e.length; r < i; r++) n = e[r], s = this.get(n), t.remove && s && (f[s.cid] = !0), (t.add && !s || t.merge && s) && o.push(n);
                    if (t.remove)
                        for (r = 0, i = this.models.length; r < i; r++) n = this.models[r], f[n.cid] || a.push(n);
                    return a.length && this.remove(a, t), o.length && this.add(o, t), this
                },
                reset: function(e, t) {
                    t || (t = {}), t.parse && (e = this.parse(e, t));
                    for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                    return t.previousModels = this.models.slice(), this._reset(), e && this.add(e, u.extend({
                        silent: !0
                    }, t)), t.silent || this.trigger("reset", this, t), this
                },
                fetch: function(e) {
                    e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                    var t = e.success;
                    return e.success = function(e, n, r) {
                        var i = r.update ? "update" : "reset";
                        e[i](n, r), t && t(e, n, r)
                    }, this.sync("read", this, e)
                },
                create: function(e, t) {
                    t = t ? u.clone(t) : {};
                    if (!(e = this._prepareModel(e, t))) return !1;
                    t.wait || this.add(e, t);
                    var n = this,
                        r = t.success;
                    return t.success = function(e, t, i) {
                        i.wait && n.add(e, i), r && r(e, t, i)
                    }, e.save(null, t), e
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models.length = 0, this._byId = {}
                },
                _prepareModel: function(e, t) {
                    if (e instanceof h) return e.collection || (e.collection = this), e;
                    t || (t = {}), t.collection = this;
                    var n = new this.model(e, t);
                    return n._validate(e, t) ? n : !1
                },
                _removeReference: function(e) {
                    this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(e, t, n, r) {
                    if ((e === "add" || e === "remove") && n !== this) return;
                    e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
                },
                sortedIndex: function(e, t, n) {
                    t || (t = this.comparator);
                    var r = u.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    };
                    return u.sortedIndex(this.models, e, r, n)
                }
            });
            var d = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
            u.each(d, function(e) {
                p.prototype[e] = function() {
                    var t = i.call(arguments);
                    return t.unshift(this.models), u[e].apply(u, t)
                }
            });
            var v = ["groupBy", "countBy", "sortBy"];
            u.each(v, function(e) {
                p.prototype[e] = function(t, n) {
                    var r = u.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    };
                    return u[e](this.models, r, n)
                }
            });
            var m = o.Router = function(e) {
                    e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                g = /\((.*?)\)/g,
                y = /(\(\?)?:\w+/g,
                b = /\*\w+/g,
                w = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            u.extend(m.prototype, c, {
                initialize: function() {},
                route: function(e, t, n) {
                    return u.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), o.history.route(e, u.bind(function(r) {
                        var i = this._extractParameters(e, r);
                        n && n.apply(this, i), this.trigger.apply(this, ["route:" + t].concat(i)), this.trigger("route", t, i), o.history.trigger("route", this, t, i)
                    }, this)), this
                },
                navigate: function(e, t) {
                    return o.history.navigate(e, t), this
                },
                _bindRoutes: function() {
                    if (!this.routes) return;
                    var e, t = u.keys(this.routes);
                    while ((e = t.pop()) != null) this.route(e, this.routes[e])
                },
                _routeToRegExp: function(e) {
                    return e = e.replace(w, "\\$&").replace(g, "(?:$1)?").replace(y, function(e, t) {
                        return t ? e : "([^/]+)"
                    }).replace(b, "(.*?)"), new RegExp("^" + e + "$")
                },
                _extractParameters: function(e, t) {
                    return e.exec(t).slice(1)
                }
            });
            var E = o.History = function() {
                    this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
                },
                S = /^[#\/]|\s+$/g,
                x = /^\/+|\/+$/g,
                T = /msie [\w.]+/,
                N = /\/$/;
            E.started = !1, u.extend(E.prototype, c, {
                interval: 50,
                getHash: function(e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                },
                getFragment: function(e, t) {
                    if (e == null)
                        if (this._hasPushState || !this._wantsHashChange || t) {
                            e = this.location.pathname;
                            var n = this.root.replace(N, "");
                            e.indexOf(n) || (e = e.substr(n.length))
                        } else e = this.getHash();
                    return e.replace(S, "")
                },
                start: function(e) {
                    if (E.started) throw new Error("Backbone.history has already been started");
                    E.started = !0, this.options = u.extend({}, {
                        root: "/"
                    }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var t = this.getFragment(),
                        n = document.documentMode,
                        r = T.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                    this.root = ("/" + this.root + "/").replace(x, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
                    var i = this.location,
                        s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(S, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
                    if (!this.options.silent) return this.loadUrl()
                },
                stop: function() {
                    o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), E.started = !1
                },
                route: function(e, t) {
                    this.handlers.unshift({
                        route: e,
                        callback: t
                    })
                },
                checkUrl: function(e) {
                    var t = this.getFragment();
                    t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                    if (t === this.fragment) return !1;
                    this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
                },
                loadUrl: function(e) {
                    var t = this.fragment = this.getFragment(e),
                        n = u.any(this.handlers, function(e) {
                            if (e.route.test(t)) return e.callback(t), !0
                        });
                    return n
                },
                navigate: function(e, t) {
                    if (!E.started) return !1;
                    if (!t || t === !0) t = {
                        trigger: t
                    };
                    e = this.getFragment(e || "");
                    if (this.fragment === e) return;
                    this.fragment = e;
                    var n = this.root + e;
                    if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    t.trigger && this.loadUrl(e)
                },
                _updateHash: function(e, t, n) {
                    if (n) {
                        var r = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(r + "#" + t)
                    } else e.hash = "#" + t
                }
            }), o.history = new E;
            var C = o.View = function(e) {
                    this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                },
                k = /^(\S+)\s*(.*)$/,
                L = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            u.extend(C.prototype, c, {
                tagName: "div",
                $: function(e) {
                    return this.$el.find(e)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(e, t) {
                    return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
                },
                delegateEvents: function(e) {
                    if (!e && !(e = u.result(this, "events"))) return;
                    this.undelegateEvents();
                    for (var t in e) {
                        var n = e[t];
                        u.isFunction(n) || (n = this[e[t]]);
                        if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                        var r = t.match(k),
                            i = r[1],
                            s = r[2];
                        n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
                    }
                },
                undelegateEvents: function() {
                    this.$el.off(".delegateEvents" + this.cid)
                },
                _configure: function(e) {
                    this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, L)), this.options = e
                },
                _ensureElement: function() {
                    if (!this.el) {
                        var e = u.extend({}, u.result(this, "attributes"));
                        this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                        var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                        this.setElement(t, !1)
                    } else this.setElement(u.result(this, "el"), !1)
                }
            });
            var A = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
            o.sync = function(e, t, n) {
                var r = A[e];
                u.defaults(n || (n = {}), {
                    emulateHTTP: o.emulateHTTP,
                    emulateJSON: o.emulateJSON
                });
                var i = {
                    type: r,
                    dataType: "json"
                };
                n.url || (i.url = u.result(t, "url") || M()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
                    model: i.data
                } : {});
                if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
                    i.type = "POST", n.emulateJSON && (i.data._method = r);
                    var s = n.beforeSend;
                    n.beforeSend = function(e) {
                        e.setRequestHeader("X-HTTP-Method-Override", r);
                        if (s) return s.apply(this, arguments)
                    }
                }
                i.type !== "GET" && !n.emulateJSON && (i.processData = !1);
                var a = n.success;
                n.success = function(e) {
                    a && a(t, e, n), t.trigger("sync", t, e, n)
                };
                var f = n.error;
                n.error = function(e) {
                    f && f(t, e, n), t.trigger("error", t, e, n)
                };
                var l = n.xhr = o.ajax(u.extend(i, n));
                return t.trigger("request", t, l, n), l
            }, o.ajax = function() {
                return o.$.ajax.apply(o.$, arguments)
            };
            var O = function(e, t) {
                var n = this,
                    r;
                e && u.has(e, "constructor") ? r = e.constructor : r = function() {
                    return n.apply(this, arguments)
                }, u.extend(r, n, t);
                var i = function() {
                    this.constructor = r
                };
                return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
            };
            h.extend = p.extend = m.extend = C.extend = E.extend = O;
            var M = function() {
                throw new Error('A "url" property or function must be specified')
            }
        }.call(this), define("backbone", ["jquery", "underscore"], function(e) {
            return function() {
                var t, n;
                return t || e.Backbone
            }
        }(this)),
        function(e) {
            "use strict";
            typeof define == "function" && define.amd ? define("slick", ["jquery"], e) : typeof exports != "undefined" ? module.exports = e(require("jquery")) : e(jQuery)
        }(function(e) {
            "use strict";
            var t = window.Slick || {};
            t = function() {
                function n(n, r) {
                    var i = this,
                        s;
                    i.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(n),
                        appendDots: e(n),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !1,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, i.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, e.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.hidden = "hidden", i.paused = !1, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = e(n), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, s = e(n).data("slick") || {}, i.options = e.extend({}, i.defaults, s, r), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, typeof document.mozHidden != "undefined" ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden != "undefined" && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = e.proxy(i.autoPlay, i), i.autoPlayClear = e.proxy(i.autoPlayClear, i), i.changeSlide = e.proxy(i.changeSlide, i), i.clickHandler = e.proxy(i.clickHandler, i), i.selectHandler = e.proxy(i.selectHandler, i), i.setPosition = e.proxy(i.setPosition, i), i.swipeHandler = e.proxy(i.swipeHandler, i), i.dragHandler = e.proxy(i.dragHandler, i), i.keyHandler = e.proxy(i.keyHandler, i), i.autoPlayIterator = e.proxy(i.autoPlayIterator, i), i.instanceUid = t++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0), i.checkResponsive(!0)
                }
                var t = 0;
                return n
            }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, n, r) {
                var i = this;
                if (typeof n == "boolean") r = n, n = null;
                else if (n < 0 || n >= i.slideCount) return !1;
                i.unload(), typeof n == "number" ? n === 0 && i.$slides.length === 0 ? e(t).appendTo(i.$slideTrack) : r ? e(t).insertBefore(i.$slides.eq(n)) : e(t).insertAfter(i.$slides.eq(n)) : r === !0 ? e(t).prependTo(i.$slideTrack) : e(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(t, n) {
                    e(n).attr("data-slick-index", t)
                }), i.$slidesCache = i.$slides, i.reinit()
            }, t.prototype.animateHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({
                        height: t
                    }, e.options.speed)
                }
            }, t.prototype.animateSlide = function(t, n) {
                var r = {},
                    i = this;
                i.animateHeight(), i.options.rtl === !0 && i.options.vertical === !1 && (t = -t), i.transformsEnabled === !1 ? i.options.vertical === !1 ? i.$slideTrack.animate({
                    left: t
                }, i.options.speed, i.options.easing, n) : i.$slideTrack.animate({
                    top: t
                }, i.options.speed, i.options.easing, n) : i.cssTransitions === !1 ? (i.options.rtl === !0 && (i.currentLeft = -i.currentLeft), e({
                    animStart: i.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: i.options.speed,
                    easing: i.options.easing,
                    step: function(e) {
                        e = Math.ceil(e), i.options.vertical === !1 ? (r[i.animType] = "translate(" + e + "px, 0px)", i.$slideTrack.css(r)) : (r[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(r))
                    },
                    complete: function() {
                        n && n.call()
                    }
                })) : (i.applyTransition(), t = Math.ceil(t), i.options.vertical === !1 ? r[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : r[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(r), n && setTimeout(function() {
                    i.disableTransition(), n.call()
                }, i.options.speed))
            }, t.prototype.asNavFor = function(t) {
                var n = this,
                    r = n.options.asNavFor;
                r && r !== null && (r = e(r).not(n.$slider)), r !== null && typeof r == "object" && r.each(function() {
                    var n = e(this).slick("getSlick");
                    n.unslicked || n.slideHandler(t, !0)
                })
            }, t.prototype.applyTransition = function(e) {
                var t = this,
                    n = {};
                t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
            }, t.prototype.autoPlayClear = function() {
                var e = this;
                e.autoPlayTimer && clearInterval(e.autoPlayTimer)
            }, t.prototype.autoPlayIterator = function() {
                var e = this;
                e.options.infinite === !1 ? e.direction === 1 ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
            }, t.prototype.buildArrows = function() {
                var t = this;
                t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, t.prototype.buildDots = function() {
                var t = this,
                    n, r;
                if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
                    r = '<ul class="' + t.options.dotsClass + '">';
                    for (n = 0; n <= t.getDotCount(); n += 1) r += "<li>" + t.options.customPaging.call(this, t, n) + "</li>";
                    r += "</ul>", t.$dots = e(r).appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                }
            }, t.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                    e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
                }), t.$slider.addClass("slick-slider"), t.$slideTrack = t.slideCount === 0 ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0);
                if (t.options.centerMode === !0 || t.options.swipeToSlide === !0) t.options.slidesToScroll = 1;
                e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses(typeof t.currentSlide == "number" ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
            }, t.prototype.buildRows = function() {
                var e = this,
                    t, n, r, i, s, o, u;
                i = document.createDocumentFragment(), o = e.$slider.children();
                if (e.options.rows > 1) {
                    u = e.options.slidesPerRow * e.options.rows, s = Math.ceil(o.length / u);
                    for (t = 0; t < s; t++) {
                        var a = document.createElement("div");
                        for (n = 0; n < e.options.rows; n++) {
                            var f = document.createElement("div");
                            for (r = 0; r < e.options.slidesPerRow; r++) {
                                var l = t * u + (n * e.options.slidesPerRow + r);
                                o.get(l) && f.appendChild(o.get(l))
                            }
                            a.appendChild(f)
                        }
                        i.appendChild(a)
                    }
                    e.$slider.html(i), e.$slider.children().children().children().css({
                        width: 100 / e.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, t.prototype.checkResponsive = function(t, n) {
                var r = this,
                    i, s, o, u = !1,
                    a = r.$slider.width(),
                    f = window.innerWidth || e(window).width();
                r.respondTo === "window" ? o = f : r.respondTo === "slider" ? o = a : r.respondTo === "min" && (o = Math.min(f, a));
                if (r.options.responsive && r.options.responsive.length && r.options.responsive !== null) {
                    s = null;
                    for (i in r.breakpoints) r.breakpoints.hasOwnProperty(i) && (r.originalSettings.mobileFirst === !1 ? o < r.breakpoints[i] && (s = r.breakpoints[i]) : o > r.breakpoints[i] && (s = r.breakpoints[i]));
                    if (s !== null)
                        if (r.activeBreakpoint !== null) {
                            if (s !== r.activeBreakpoint || n) r.activeBreakpoint = s, r.breakpointSettings[s] === "unslick" ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), u = s
                        } else r.activeBreakpoint = s, r.breakpointSettings[s] === "unslick" ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), u = s;
                    else r.activeBreakpoint !== null && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), u = s);
                    !t && u !== !1 && r.$slider.trigger("breakpoint", [r, u])
                }
            }, t.prototype.changeSlide = function(t, n) {
                var r = this,
                    i = e(t.target),
                    s, o, u;
                i.is("a") && t.preventDefault(), i.is("li") || (i = i.closest("li")), u = r.slideCount % r.options.slidesToScroll !== 0, s = u ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll;
                switch (t.data.message) {
                    case "previous":
                        o = s === 0 ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                        break;
                    case "next":
                        o = s === 0 ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                        break;
                    case "index":
                        var a = t.data.index === 0 ? 0 : t.data.index || i.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(a), !1, n), i.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, t.prototype.checkNavigable = function(e) {
                var t = this,
                    n, r;
                n = t.getNavigableIndexes(), r = 0;
                if (e > n[n.length - 1]) e = n[n.length - 1];
                else
                    for (var i in n) {
                        if (e < n[i]) {
                            e = r;
                            break
                        }
                        r = n[i]
                    }
                return e
            }, t.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && t.$dots !== null && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.cleanUpRows = function() {
                var e = this,
                    t;
                e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
            }, t.prototype.clickHandler = function(e) {
                var t = this;
                t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
            }, t.prototype.destroy = function(t) {
                var n = this;
                n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    e(this).attr("style", e(this).data("originalStyling"))
                }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
            }, t.prototype.disableTransition = function(e) {
                var t = this,
                    n = {};
                n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.fadeSlide = function(e, t) {
                var n = this;
                n.cssTransitions === !1 ? (n.$slides.eq(e).css({
                    zIndex: n.options.zIndex
                }), n.$slides.eq(e).animate({
                    opacity: 1
                }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                    opacity: 1,
                    zIndex: n.options.zIndex
                }), t && setTimeout(function() {
                    n.disableTransition(e), t.call()
                }, n.options.speed))
            }, t.prototype.fadeSlideOut = function(e) {
                var t = this;
                t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }))
            }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                var t = this;
                e !== null && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
            }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                var e = this;
                return e.currentSlide
            }, t.prototype.getDotCount = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    r = 0;
                if (e.options.infinite === !0)
                    while (t < e.slideCount) ++r, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else if (e.options.centerMode === !0) r = e.slideCount;
                else
                    while (t < e.slideCount) ++r, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return r - 1
            }, t.prototype.getLeft = function(e) {
                var t = this,
                    n, r, i = 0,
                    s;
                return t.slideOffset = 0, r = t.$slides.first().outerHeight(!0), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, i = r * t.options.slidesToShow * -1), t.slideCount % t.options.slidesToScroll !== 0 && e + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (e > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (e - t.slideCount)) * t.slideWidth * -1, i = (t.options.slidesToShow - (e - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, i = t.slideCount % t.options.slidesToScroll * r * -1))) : e + t.options.slidesToShow > t.slideCount && (t.slideOffset = (e + t.options.slidesToShow - t.slideCount) * t.slideWidth, i = (e + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, i = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), t.options.vertical === !1 ? n = e * t.slideWidth * -1 + t.slideOffset : n = e * r * -1 + i, t.options.variableWidth === !0 && (t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? s = t.$slideTrack.children(".slick-slide").eq(e) : s = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow), t.options.rtl === !0 ? s[0] ? n = (t.$slideTrack.width() - s[0].offsetLeft - s.width()) * -1 : n = 0 : n = s[0] ? s[0].offsetLeft * -1 : 0, t.options.centerMode === !0 && (t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? s = t.$slideTrack.children(".slick-slide").eq(e) : s = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow + 1), t.options.rtl === !0 ? s[0] ? n = (t.$slideTrack.width() - s[0].offsetLeft - s.width()) * -1 : n = 0 : n = s[0] ? s[0].offsetLeft * -1 : 0, n += (t.$list.width() - s.outerWidth()) / 2)), n
            }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                var t = this;
                return t.options[e]
            }, t.prototype.getNavigableIndexes = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    r = [],
                    i;
                e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, i = e.slideCount * 2);
                while (t < i) r.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return r
            }, t.prototype.getSlick = function() {
                return this
            }, t.prototype.getSlideCount = function() {
                var t = this,
                    n, r, i;
                return i = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(n, s) {
                    if (s.offsetLeft - i + e(s).outerWidth() / 2 > t.swipeLeft * -1) return r = s, !1
                }), n = Math.abs(e(r).attr("data-slick-index") - t.currentSlide) || 1, n) : t.options.slidesToScroll
            }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                var n = this;
                n.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            }, t.prototype.init = function(t) {
                var n = this;
                e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA()
            }, t.prototype.initArrowEvents = function() {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                    message: "previous"
                }, e.changeSlide), e.$nextArrow.on("click.slick", {
                    message: "next"
                }, e.changeSlide))
            }, t.prototype.initDotEvents = function() {
                var t = this;
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
            }, t.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.initUI = function() {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
            }, t.prototype.keyHandler = function(e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (e.keyCode === 37 && t.options.accessibility === !0 ? t.changeSlide({
                    data: {
                        message: "previous"
                    }
                }) : e.keyCode === 39 && t.options.accessibility === !0 && t.changeSlide({
                    data: {
                        message: "next"
                    }
                }))
            }, t.prototype.lazyLoad = function() {
                function o(t) {
                    e("img[data-lazy]", t).each(function() {
                        var t = e(this),
                            n = e(this).attr("data-lazy"),
                            r = document.createElement("img");
                        r.onload = function() {
                            t.animate({
                                opacity: 0
                            }, 100, function() {
                                t.attr("src", n).animate({
                                    opacity: 1
                                }, 200, function() {
                                    t.removeAttr("data-lazy").removeClass("slick-loading")
                                })
                            })
                        }, r.src = n
                    })
                }
                var t = this,
                    n, r, i, s;
                t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), s = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), s = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, s = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, s <= t.slideCount && s++)), n = t.$slider.find(".slick-slide").slice(i, s), o(n), t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), o(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), o(r)) : t.currentSlide === 0 && (r = t.$slider.find(".slick-cloned").slice(t.options.slidesToShow * -1), o(r))
            }, t.prototype.loadSlider = function() {
                var e = this;
                e.setPosition(), e.$slideTrack.css({
                    opacity: 1
                }), e.$slider.removeClass("slick-loading"), e.initUI(), e.options.lazyLoad === "progressive" && e.progressiveLazyLoad()
            }, t.prototype.next = t.prototype.slickNext = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, t.prototype.orientationChange = function() {
                var e = this;
                e.checkResponsive(), e.setPosition()
            }, t.prototype.pause = t.prototype.slickPause = function() {
                var e = this;
                e.autoPlayClear(), e.paused = !0
            }, t.prototype.play = t.prototype.slickPlay = function() {
                var e = this;
                e.paused = !1, e.autoPlay()
            }, t.prototype.postSlide = function(e) {
                var t = this;
                t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
            }, t.prototype.prev = t.prototype.slickPrev = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, t.prototype.preventDefault = function(e) {
                e.preventDefault()
            }, t.prototype.progressiveLazyLoad = function() {
                var t = this,
                    n, r;
                n = e("img[data-lazy]", t.$slider).length, n > 0 && (r = e("img[data-lazy]", t.$slider).first(), r.attr("src", null), r.attr("src", r.attr("data-lazy")).removeClass("slick-loading").load(function() {
                    r.removeAttr("data-lazy"), t.progressiveLazyLoad(), t.options.adaptiveHeight === !0 && t.setPosition()
                }).error(function() {
                    r.removeAttr("data-lazy"), t.progressiveLazyLoad()
                }))
            }, t.prototype.refresh = function(t) {
                var n = this,
                    r, i;
                i = n.slideCount - n.options.slidesToShow, n.options.infinite || (n.slideCount <= n.options.slidesToShow ? n.currentSlide = 0 : n.currentSlide > i && (n.currentSlide = i)), r = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
                    currentSlide: r
                }), n.init(), t || n.changeSlide({
                    data: {
                        message: "index",
                        index: r
                    }
                }, !1)
            }, t.prototype.registerBreakpoints = function() {
                var t = this,
                    n, r, i, s = t.options.responsive || null;
                if (e.type(s) === "array" && s.length) {
                    t.respondTo = t.options.respondTo || "window";
                    for (n in s) {
                        i = t.breakpoints.length - 1, r = s[n].breakpoint;
                        if (s.hasOwnProperty(n)) {
                            while (i >= 0) t.breakpoints[i] && t.breakpoints[i] === r && t.breakpoints.splice(i, 1), i--;
                            t.breakpoints.push(r), t.breakpointSettings[r] = s[n].settings
                        }
                    }
                    t.breakpoints.sort(function(e, n) {
                        return t.options.mobileFirst ? e - n : n - e
                    })
                }
            }, t.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && t.currentSlide !== 0 && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
            }, t.prototype.resize = function() {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                }, 50))
            }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
                var r = this;
                typeof e == "boolean" ? (t = e, e = t === !0 ? 0 : r.slideCount - 1) : e = t === !0 ? --e : e;
                if (r.slideCount < 1 || e < 0 || e > r.slideCount - 1) return !1;
                r.unload(), n === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit()
            }, t.prototype.setCSS = function(e) {
                var t = this,
                    n = {},
                    r, i;
                t.options.rtl === !0 && (e = -e), r = t.positionProp == "left" ? Math.ceil(e) + "px" : "0px", i = t.positionProp == "top" ? Math.ceil(e) + "px" : "0px", n[t.positionProp] = e, t.transformsEnabled === !1 ? t.$slideTrack.css(n) : (n = {}, t.cssTransitions === !1 ? (n[t.animType] = "translate(" + r + ", " + i + ")", t.$slideTrack.css(n)) : (n[t.animType] = "translate3d(" + r + ", " + i + ", 0px)", t.$slideTrack.css(n)))
            }, t.prototype.setDimensions = function() {
                var e = this;
                e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }, t.prototype.setFade = function() {
                var t = this,
                    n;
                t.$slides.each(function(r, i) {
                    n = t.slideWidth * r * -1, t.options.rtl === !0 ? e(i).css({
                        position: "relative",
                        right: n,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    }) : e(i).css({
                        position: "relative",
                        left: n,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    })
                }), t.$slides.eq(t.currentSlide).css({
                    zIndex: t.options.zIndex - 1,
                    opacity: 1
                })
            }, t.prototype.setHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t)
                }
            }, t.prototype.setOption = t.prototype.slickSetOption = function(t, n, r) {
                var i = this,
                    s, o;
                if (t === "responsive" && e.type(n) === "array")
                    for (o in n)
                        if (e.type(i.options.responsive) !== "array") i.options.responsive = [n[o]];
                        else {
                            s = i.options.responsive.length - 1;
                            while (s >= 0) i.options.responsive[s].breakpoint === n[o].breakpoint && i.options.responsive.splice(s, 1), s--;
                            i.options.responsive.push(n[o])
                        } else i.options[t] = n;
                r === !0 && (i.unload(), i.reinit())
            }, t.prototype.setPosition = function() {
                var e = this;
                e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
            }, t.prototype.setProps = function() {
                var e = this,
                    t = document.body.style;
                e.positionProp = e.options.vertical === !0 ? "top" : "left", e.positionProp === "top" ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (t.WebkitTransition !== undefined || t.MozTransition !== undefined || t.msTransition !== undefined) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && (typeof e.options.zIndex == "number" ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), t.OTransform !== undefined && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.MozTransform !== undefined && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", t.perspectiveProperty === undefined && t.MozPerspective === undefined && (e.animType = !1)), t.webkitTransform !== undefined && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.msTransform !== undefined && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", t.msTransform === undefined && (e.animType = !1)), t.transform !== undefined && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && e.animType !== null && e.animType !== !1
            }, t.prototype.setSlideClasses = function(e) {
                var t = this,
                    n, r, i, s;
                r = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), t.$slides.eq(e).addClass("slick-current"), t.options.centerMode === !0 ? (n = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (e >= n && e <= t.slideCount - 1 - n ? t.$slides.slice(e - n, e + n + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = t.options.slidesToShow + e, r.slice(i - n + 1, i + n + 2).addClass("slick-active").attr("aria-hidden", "false")), e === 0 ? r.eq(r.length - 1 - t.options.slidesToShow).addClass("slick-center") : e === t.slideCount - 1 && r.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(e, e + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= t.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (s = t.slideCount % t.options.slidesToShow, i = t.options.infinite === !0 ? t.options.slidesToShow + e : e, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - e < t.options.slidesToShow ? r.slice(i - (t.options.slidesToShow - s), i + s).addClass("slick-active").attr("aria-hidden", "false") : r.slice(i, i + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), t.options.lazyLoad === "ondemand" && t.lazyLoad()
            }, t.prototype.setupInfinite = function() {
                var t = this,
                    n, r, i;
                t.options.fade === !0 && (t.options.centerMode = !1);
                if (t.options.infinite === !0 && t.options.fade === !1) {
                    r = null;
                    if (t.slideCount > t.options.slidesToShow) {
                        t.options.centerMode === !0 ? i = t.options.slidesToShow + 1 : i = t.options.slidesToShow;
                        for (n = t.slideCount; n > t.slideCount - i; n -= 1) r = n - 1, e(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
                        for (n = 0; n < i; n += 1) r = n, e(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
                        t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                            e(this).attr("id", "")
                        })
                    }
                }
            }, t.prototype.setPaused = function(e) {
                var t = this;
                t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
            }, t.prototype.selectHandler = function(t) {
                var n = this,
                    r = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    i = parseInt(r.attr("data-slick-index"));
                i || (i = 0);
                if (n.slideCount <= n.options.slidesToShow) {
                    n.setSlideClasses(i), n.asNavFor(i);
                    return
                }
                n.slideHandler(i)
            }, t.prototype.slideHandler = function(e, t, n) {
                var r, i, s, o, u = null,
                    a = this;
                t = t || !1;
                if (a.animating === !0 && a.options.waitForAnimate === !0) return;
                if (a.options.fade === !0 && a.currentSlide === e) return;
                if (a.slideCount <= a.options.slidesToShow) return;
                t === !1 && a.asNavFor(e), r = e, u = a.getLeft(r), o = a.getLeft(a.currentSlide), a.currentLeft = a.swipeLeft === null ? o : a.swipeLeft;
                if (a.options.infinite === !1 && a.options.centerMode === !1 && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) {
                    a.options.fade === !1 && (r = a.currentSlide, n !== !0 ? a.animateSlide(o, function() {
                        a.postSlide(r)
                    }) : a.postSlide(r));
                    return
                }
                if (a.options.infinite === !1 && a.options.centerMode === !0 && (e < 0 || e > a.slideCount - a.options.slidesToScroll)) {
                    a.options.fade === !1 && (r = a.currentSlide, n !== !0 ? a.animateSlide(o, function() {
                        a.postSlide(r)
                    }) : a.postSlide(r));
                    return
                }
                a.options.autoplay === !0 && clearInterval(a.autoPlayTimer), r < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? i = a.slideCount - a.slideCount % a.options.slidesToScroll : i = a.slideCount + r : r >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? i = 0 : i = r - a.slideCount : i = r, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, i]), s = a.currentSlide, a.currentSlide = i, a.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows();
                if (a.options.fade === !0) {
                    n !== !0 ? (a.fadeSlideOut(s), a.fadeSlide(i, function() {
                        a.postSlide(i)
                    })) : a.postSlide(i), a.animateHeight();
                    return
                }
                n !== !0 ? a.animateSlide(u, function() {
                    a.postSlide(i)
                }) : a.postSlide(i)
            }, t.prototype.startLoad = function() {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
            }, t.prototype.swipeDirection = function() {
                var e, t, n, r, i = this;
                return e = i.touchObject.startX - i.touchObject.curX, t = i.touchObject.startY - i.touchObject.curY, n = Math.atan2(t, e), r = Math.round(n * 180 / Math.PI), r < 0 && (r = 360 - Math.abs(r)), r <= 45 && r >= 0 ? i.options.rtl === !1 ? "left" : "right" : r <= 360 && r >= 315 ? i.options.rtl === !1 ? "left" : "right" : r >= 135 && r <= 225 ? i.options.rtl === !1 ? "right" : "left" : i.options.verticalSwiping === !0 ? r >= 35 && r <= 135 ? "left" : "right" : "vertical"
            }, t.prototype.swipeEnd = function(e) {
                var t = this,
                    n;
                t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0;
                if (t.touchObject.curX === undefined) return !1;
                t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]);
                if (t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
                    case "left":
                        n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(n), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                        break;
                    case "right":
                        n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(n), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
                } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
            }, t.prototype.swipeHandler = function(e) {
                var t = this;
                if (t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1) return;
                if (t.options.draggable === !1 && e.type.indexOf("mouse") !== -1) return;
                t.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold);
                switch (e.data.action) {
                    case "start":
                        t.swipeStart(e);
                        break;
                    case "move":
                        t.swipeMove(e);
                        break;
                    case "end":
                        t.swipeEnd(e)
                }
            }, t.prototype.swipeMove = function(e) {
                var t = this,
                    n = !1,
                    r, i, s, o, u;
                u = e.originalEvent !== undefined ? e.originalEvent.touches : null;
                if (!t.dragging || u && u.length !== 1) return !1;
                r = t.getLeft(t.currentSlide), t.touchObject.curX = u !== undefined ? u[0].pageX : e.clientX, t.touchObject.curY = u !== undefined ? u[0].pageY : e.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))), i = t.swipeDirection();
                if (i === "vertical") return;
                e.originalEvent !== undefined && t.touchObject.swipeLength > 4 && e.preventDefault(), o = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (o = t.touchObject.curY > t.touchObject.startY ? 1 : -1), s = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (t.currentSlide === 0 && i === "right" || t.currentSlide >= t.getDotCount() && i === "left") && (s = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.options.vertical === !1 ? t.swipeLeft = r + s * o : t.swipeLeft = r + s * (t.$list.height() / t.listWidth) * o, t.options.verticalSwiping === !0 && (t.swipeLeft = r + s * o);
                if (t.options.fade === !0 || t.options.touchMove === !1) return !1;
                if (t.animating === !0) return t.swipeLeft = null, !1;
                t.setCSS(t.swipeLeft)
            }, t.prototype.swipeStart = function(e) {
                var t = this,
                    n;
                if (t.touchObject.fingerCount !== 1 || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
                e.originalEvent !== undefined && e.originalEvent.touches !== undefined && (n = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = n !== undefined ? n.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = n !== undefined ? n.pageY : e.clientY, t.dragging = !0
            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                var e = this;
                e.$slidesCache !== null && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
            }, t.prototype.unload = function() {
                var t = this;
                e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, t.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy()
            }, t.prototype.updateArrows = function() {
                var e = this,
                    t;
                t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.currentSlide === 0 ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, t.prototype.updateDots = function() {
                var e = this;
                e.$dots !== null && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
            }, t.prototype.visibility = function() {
                var e = this;
                document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
            }, t.prototype.initADA = function() {
                var t = this;
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
                    e(this).attr({
                        role: "option",
                        "aria-describedby": "slick-slide" + t.instanceUid + n + ""
                    })
                }), t.$dots !== null && t.$dots.attr("role", "tablist").find("li").each(function(n) {
                    e(this).attr({
                        role: "presentation",
                        "aria-selected": "false",
                        "aria-controls": "navigation" + t.instanceUid + n + "",
                        id: "slick-slide" + t.instanceUid + n + ""
                    })
                }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
            }, t.prototype.activateADA = function() {
                var e = this;
                e.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, t.prototype.focusHandler = function() {
                var t = this;
                t.$slider.on("focus.slick blur.slick", "*", function(n) {
                    n.stopImmediatePropagation();
                    var r = e(this);
                    setTimeout(function() {
                        t.isPlay && (r.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
                    }, 0)
                })
            }, e.fn.slick = function() {
                var e = this,
                    n = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    i = e.length,
                    s, o;
                for (s = 0; s < i; s++) {
                    typeof n == "object" || typeof n == "undefined" ? e[s].slick = new t(e[s], n) : o = e[s].slick[n].apply(e[s].slick, r);
                    if (typeof o != "undefined") return o
                }
                return e
            }
        }),
        function() {
            function e() {}

            function t(e, t) {
                for (var n = e.length; n--;)
                    if (e[n].listener === t) return n;
                return -1
            }

            function n(e) {
                return function() {
                    return this[e].apply(this, arguments)
                }
            }
            var r = e.prototype,
                i = this,
                s = i.EventEmitter;
            r.getListeners = function(e) {
                var t, n, r = this._getEvents();
                if ("object" == typeof e) {
                    t = {};
                    for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
                } else t = r[e] || (r[e] = []);
                return t
            }, r.flattenListeners = function(e) {
                var t, n = [];
                for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
                return n
            }, r.getListenersAsObject = function(e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && (t = {}, t[e] = n), t || n
            }, r.addListener = function(e, n) {
                var r, i = this.getListenersAsObject(e),
                    s = "object" == typeof n;
                for (r in i) i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(s ? n : {
                    listener: n,
                    once: !1
                });
                return this
            }, r.on = n("addListener"), r.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                })
            }, r.once = n("addOnceListener"), r.defineEvent = function(e) {
                return this.getListeners(e), this
            }, r.defineEvents = function(e) {
                for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
                return this
            }, r.removeListener = function(e, n) {
                var r, i, s = this.getListenersAsObject(e);
                for (i in s) s.hasOwnProperty(i) && (r = t(s[i], n), -1 !== r && s[i].splice(r, 1));
                return this
            }, r.off = n("removeListener"), r.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t)
            }, r.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t)
            }, r.manipulateListeners = function(e, t, n) {
                var r, i, s = e ? this.removeListener : this.addListener,
                    o = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (r = n.length; r--;) s.call(this, t, n[r]);
                else
                    for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
                return this
            }, r.removeEvent = function(e) {
                var t, n = typeof e,
                    r = this._getEvents();
                if ("string" === n) delete r[e];
                else if ("object" === n)
                    for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
                else delete this._events;
                return this
            }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function(e, t) {
                var n, r, i, s, o = this.getListenersAsObject(e);
                for (i in o)
                    if (o.hasOwnProperty(i))
                        for (r = o[i].length; r--;) n = o[i][r], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
                return this
            }, r.trigger = n("emitEvent"), r.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }, r.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e, this
            }, r._getOnceReturnValue = function() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
            }, r._getEvents = function() {
                return this._events || (this._events = {})
            }, e.noConflict = function() {
                return i.EventEmitter = s, e
            }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
                return e
            }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
        }.call(this),
        function(e) {
            function t(t) {
                var n = e.event;
                return n.target = n.target || n.srcElement || t, n
            }
            var n = document.documentElement,
                r = function() {};
            n.addEventListener ? r = function(e, t, n) {
                e.addEventListener(t, n, !1)
            } : n.attachEvent && (r = function(e, n, r) {
                e[n + r] = r.handleEvent ? function() {
                    var n = t(e);
                    r.handleEvent.call(r, n)
                } : function() {
                    var n = t(e);
                    r.call(e, n)
                }, e.attachEvent("on" + n, e[n + r])
            });
            var i = function() {};
            n.removeEventListener ? i = function(e, t, n) {
                e.removeEventListener(t, n, !1)
            } : n.detachEvent && (i = function(e, t, n) {
                e.detachEvent("on" + t, e[t + n]);
                try {
                    delete e[t + n]
                } catch (r) {
                    e[t + n] = void 0
                }
            });
            var s = {
                bind: r,
                unbind: i
            };
            "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
        }(this),
        function(e, t) {
            "function" == typeof define && define.amd ? define("jquery.imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(n, r) {
                return t(e, n, r)
            }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
        }(window, function(e, t, n) {
            function r(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function i(e) {
                return "[object Array]" === h.call(e)
            }

            function s(e) {
                var t = [];
                if (i(e)) t = e;
                else if ("number" == typeof e.length)
                    for (var n = 0, r = e.length; r > n; n++) t.push(e[n]);
                else t.push(e);
                return t
            }

            function o(e, t, n) {
                if (!(this instanceof o)) return new o(e, t);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = r({}, this.options), "function" == typeof t ? n = t : r(this.options, t), n && this.on("always", n), this.getImages(), f && (this.jqDeferred = new f.Deferred);
                var i = this;
                setTimeout(function() {
                    i.check()
                })
            }

            function u(e) {
                this.img = e
            }

            function a(e) {
                this.src = e, p[e] = this
            }
            var f = e.jQuery,
                l = e.console,
                c = l !== void 0,
                h = Object.prototype.toString;
            o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    var r = n.nodeType;
                    if (r && (1 === r || 9 === r || 11 === r))
                        for (var i = n.querySelectorAll("img"), s = 0, o = i.length; o > s; s++) {
                            var u = i[s];
                            this.addImage(u)
                        }
                }
            }, o.prototype.addImage = function(e) {
                var t = new u(e);
                this.images.push(t)
            }, o.prototype.check = function() {
                function e(e, i) {
                    return t.options.debug && c && l.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
                }
                var t = this,
                    n = 0,
                    r = this.images.length;
                if (this.hasAnyBroken = !1, !r) return this.complete(), void 0;
                for (var i = 0; r > i; i++) {
                    var s = this.images[i];
                    s.on("confirm", e), s.check()
                }
            }, o.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function() {
                    t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
                })
            }, o.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function() {
                    if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }, f && (f.fn.imagesLoaded = function(e, t) {
                var n = new o(this, e, t);
                return n.jqDeferred.promise(f(this))
            }), u.prototype = new t, u.prototype.check = function() {
                var e = p[this.img.src] || new a(this.img.src);
                if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
                if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
                var t = this;
                e.on("confirm", function(e, n) {
                    return t.confirm(e.isLoaded, n), !0
                }), e.check()
            }, u.prototype.confirm = function(e, t) {
                this.isLoaded = e, this.emit("confirm", this, t)
            };
            var p = {};
            return a.prototype = new t, a.prototype.check = function() {
                if (!this.isChecked) {
                    var e = new Image;
                    n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
                }
            }, a.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, a.prototype.onload = function(e) {
                this.confirm(!0, "onload"), this.unbindProxyEvents(e)
            }, a.prototype.onerror = function(e) {
                this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
            }, a.prototype.confirm = function(e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
            }, a.prototype.unbindProxyEvents = function(e) {
                n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
            }, o
        }),
        function(e) {
            e.fn.touchwipe = function(t) {
                var n = {
                    min_move_x: 20,
                    min_move_y: 20,
                    wipeLeft: function() {},
                    wipeRight: function() {},
                    wipeUp: function() {},
                    wipeDown: function() {},
                    preventDefaultEvents: !0
                };
                return t && e.extend(n, t), this.each(function() {
                    function i() {
                        this.removeEventListener("touchmove", s), e = null, r = !1
                    }

                    function s(s) {
                        n.preventDefaultEvents && s.preventDefault();
                        if (r) {
                            var o = s.touches[0].pageX,
                                u = s.touches[0].pageY,
                                a = e - o,
                                f = t - u;
                            Math.abs(a) >= n.min_move_x ? (i(), a > 0 ? n.wipeLeft() : n.wipeRight()) : Math.abs(f) >= n.min_move_y && (i(), f > 0 ? n.wipeDown() : n.wipeUp())
                        }
                    }

                    function o(n) {
                        n.touches.length == 1 && (e = n.touches[0].pageX, t = n.touches[0].pageY, r = !0, this.addEventListener("touchmove", s, !1))
                    }
                    var e, t, r = !1;
                    "ontouchstart" in document.documentElement && this.addEventListener("touchstart", o, !1)
                }), this
            }
        }(jQuery), define("jquery.touchwipe", ["jquery"], function() {}),
        function(e, t) {
            typeof define == "function" && define.amd ? define("jquery.panzoom", ["jquery"], function(n) {
                return t(e, n)
            }) : typeof exports == "object" ? t(e, require("jquery")) : t(e, e.jQuery)
        }(typeof window != "undefined" ? window : this, function(e, t) {
            "use strict";

            function g(e, t) {
                var n = e.length;
                while (--n)
                    if (+e[n] !== +t[n]) return !1;
                return !0
            }

            function y(e) {
                var n = {
                    range: !0,
                    animate: !0
                };
                return typeof e == "boolean" ? n.animate = e : t.extend(n, e), n
            }

            function b(e, n, r, i, s, o, u, a, f) {
                t.type(e) === "array" ? this.elements = [+e[0], +e[2], +e[4], +e[1], +e[3], +e[5], 0, 0, 1] : this.elements = [e, n, r, i, s, o, u || 0, a || 0, f || 1]
            }

            function w(e, t, n) {
                this.elements = [e, t, n]
            }

            function E(e, n) {
                if (!(this instanceof E)) return new E(e, n);
                e.nodeType !== 1 && t.error("Panzoom called on non-Element node"), t.contains(o, e) || t.error("Panzoom element must be attached to the document");
                var r = t.data(e, u);
                if (r) return r;
                this.options = n = t.extend({}, E.defaults, n), this.elem = e;
                var i = this.$elem = t(e);
                this.$set = n.$set && n.$set.length ? n.$set : i, this.$doc = t(e.ownerDocument || o), this.$parent = i.parent(), this.isSVG = h.test(e.namespaceURI) && e.nodeName.toLowerCase() !== "svg", this.panning = !1, this._buildTransform(), this._transform = !this.isSVG && t.cssProps.transform.replace(c, "-$1").toLowerCase(), this._buildTransition(), this.resetDimensions();
                var s = t(),
                    a = this;
                t.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function(e, t) {
                    a[t] = n[t] || s
                }), this.enable(), t.data(e, u, this)
            }
            var n = "over out down up move enter leave cancel".split(" "),
                r = t.extend({}, t.event.mouseHooks),
                i = {};
            if (e.PointerEvent) t.each(n, function(e, n) {
                t.event.fixHooks[i[n] = "pointer" + n] = r
            });
            else {
                var s = r.props;
                r.props = s.concat(["touches", "changedTouches", "targetTouches", "altKey", "ctrlKey", "metaKey", "shiftKey"]), r.filter = function(e, t) {
                    var n, r = s.length;
                    if (!t.pageX && t.touches && (n = t.touches[0]))
                        while (r--) e[s[r]] = n[s[r]];
                    return e
                }, t.each(n, function(e, n) {
                    if (e < 2) i[n] = "mouse" + n;
                    else {
                        var s = "touch" + (n === "down" ? "start" : n === "up" ? "end" : n);
                        t.event.fixHooks[s] = r, i[n] = s + " mouse" + n
                    }
                })
            }
            t.pointertouch = i;
            var o = e.document,
                u = "__pz__",
                a = Array.prototype.slice,
                f = !!e.PointerEvent,
                l = function() {
                    var e = o.createElement("input");
                    return e.setAttribute("oninput", "return"), typeof e.oninput == "function"
                }(),
                c = /([A-Z])/g,
                h = /^http:[\w\.\/]+svg$/,
                p = /^inline/,
                d = "(\\-?[\\d\\.e]+)",
                v = "\\,?\\s*",
                m = new RegExp("^matrix\\(" + d + v + d + v + d + v + d + v + d + v + d + "\\)$");
            return b.prototype = {
                x: function(e) {
                    var t = e instanceof w,
                        n = this.elements,
                        r = e.elements;
                    return t && r.length === 3 ? new w(n[0] * r[0] + n[1] * r[1] + n[2] * r[2], n[3] * r[0] + n[4] * r[1] + n[5] * r[2], n[6] * r[0] + n[7] * r[1] + n[8] * r[2]) : r.length === n.length ? new b(n[0] * r[0] + n[1] * r[3] + n[2] * r[6], n[0] * r[1] + n[1] * r[4] + n[2] * r[7], n[0] * r[2] + n[1] * r[5] + n[2] * r[8], n[3] * r[0] + n[4] * r[3] + n[5] * r[6], n[3] * r[1] + n[4] * r[4] + n[5] * r[7], n[3] * r[2] + n[4] * r[5] + n[5] * r[8], n[6] * r[0] + n[7] * r[3] + n[8] * r[6], n[6] * r[1] + n[7] * r[4] + n[8] * r[7], n[6] * r[2] + n[7] * r[5] + n[8] * r[8]) : !1
                },
                inverse: function() {
                    var e = 1 / this.determinant(),
                        t = this.elements;
                    return new b(e * (t[8] * t[4] - t[7] * t[5]), e * -(t[8] * t[1] - t[7] * t[2]), e * (t[5] * t[1] - t[4] * t[2]), e * -(t[8] * t[3] - t[6] * t[5]), e * (t[8] * t[0] - t[6] * t[2]), e * -(t[5] * t[0] - t[3] * t[2]), e * (t[7] * t[3] - t[6] * t[4]), e * -(t[7] * t[0] - t[6] * t[1]), e * (t[4] * t[0] - t[3] * t[1]))
                },
                determinant: function() {
                    var e = this.elements;
                    return e[0] * (e[8] * e[4] - e[7] * e[5]) - e[3] * (e[8] * e[1] - e[7] * e[2]) + e[6] * (e[5] * e[1] - e[4] * e[2])
                }
            }, w.prototype.e = b.prototype.e = function(e) {
                return this.elements[e]
            }, E.rmatrix = m, E.events = t.pointertouch, E.defaults = {
                eventNamespace: ".panzoom",
                transition: !0,
                cursor: "move",
                disablePan: !1,
                disableZoom: !1,
                increment: .3,
                minScale: .4,
                maxScale: 5,
                rangeStep: .05,
                duration: 200,
                easing: "ease-in-out",
                contain: !1
            }, E.prototype = {
                constructor: E,
                instance: function() {
                    return this
                },
                enable: function() {
                    this._initStyle(), this._bind(), this.disabled = !1
                },
                disable: function() {
                    this.disabled = !0, this._resetStyle(), this._unbind()
                },
                isDisabled: function() {
                    return this.disabled
                },
                destroy: function() {
                    this.disable(), t.removeData(this.elem, u)
                },
                resetDimensions: function() {
                    var e = this.$parent;
                    this.container = {
                        width: e.innerWidth(),
                        height: e.innerHeight()
                    };
                    var n = e.offset(),
                        r = this.elem,
                        i = this.$elem,
                        s;
                    this.isSVG ? (s = r.getBoundingClientRect(), s = {
                        left: s.left - n.left,
                        top: s.top - n.top,
                        width: s.width,
                        height: s.height,
                        margin: {
                            left: 0,
                            top: 0
                        }
                    }) : s = {
                        left: t.css(r, "left", !0) || 0,
                        top: t.css(r, "top", !0) || 0,
                        width: i.innerWidth(),
                        height: i.innerHeight(),
                        margin: {
                            top: t.css(r, "marginTop", !0) || 0,
                            left: t.css(r, "marginLeft", !0) || 0
                        }
                    }, s.widthBorder = t.css(r, "borderLeftWidth", !0) + t.css(r, "borderRightWidth", !0) || 0, s.heightBorder = t.css(r, "borderTopWidth", !0) + t.css(r, "borderBottomWidth", !0) || 0, this.dimensions = s
                },
                reset: function(e) {
                    e = y(e);
                    var t = this.setMatrix(this._origTransform, e);
                    e.silent || this._trigger("reset", t)
                },
                resetZoom: function(e) {
                    e = y(e);
                    var t = this.getMatrix(this._origTransform);
                    e.dValue = t[3], this.zoom(t[0], e)
                },
                resetPan: function(e) {
                    var t = this.getMatrix(this._origTransform);
                    this.pan(t[4], t[5], y(e))
                },
                setTransform: function(e) {
                    var n = this.isSVG ? "attr" : "style",
                        r = this.$set,
                        i = r.length;
                    while (i--) t[n](r[i], "transform", e)
                },
                getTransform: function(e) {
                    var n = this.$set,
                        r = n[0];
                    return e ? this.setTransform(e) : e = t[this.isSVG ? "attr" : "style"](r, "transform"), e !== "none" && !m.test(e) && this.setTransform(e = t.css(r, "transform")), e || "none"
                },
                getMatrix: function(e) {
                    var t = m.exec(e || this.getTransform());
                    return t && t.shift(), t || [1, 0, 0, 1, 0, 0]
                },
                setMatrix: function(e, n) {
                    if (this.disabled) return;
                    n || (n = {}), typeof e == "string" && (e = this.getMatrix(e));
                    var r, i, s, o, u, a, f, l, c, h, d = +e[0],
                        v = this.$parent,
                        m = typeof n.contain != "undefined" ? n.contain : this.options.contain;
                    return m && (r = this._checkDims(), i = this.container, c = r.width + r.widthBorder, h = r.height + r.heightBorder, s = (c * Math.abs(d) - i.width) / 2, o = (h * Math.abs(d) - i.height) / 2, f = r.left + r.margin.left, l = r.top + r.margin.top, m === "invert" ? (u = c > i.width ? c - i.width : 0, a = h > i.height ? h - i.height : 0, s += (i.width - c) / 2, o += (i.height - h) / 2, e[4] = Math.max(Math.min(e[4], s - f), -s - f - u), e[5] = Math.max(Math.min(e[5], o - l), -o - l - a + r.heightBorder)) : (o += r.heightBorder / 2, u = i.width > c ? i.width - c : 0, a = i.height > h ? i.height - h : 0, v.css("textAlign") !== "center" || !p.test(t.css(this.elem, "display")) ? s = o = 0 : u = 0, e[4] = Math.min(Math.max(e[4], s - f), -s - f + u), e[5] = Math.min(Math.max(e[5], o - l), -o - l + a))), n.animate !== "skip" && this.transition(!n.animate), n.range && this.$zoomRange.val(d), this.setTransform("matrix(" + e.join(",") + ")"), n.silent || this._trigger("change", e), e
                },
                isPanning: function() {
                    return this.panning
                },
                transition: function(e) {
                    if (!this._transition) return;
                    var n = e || !this.options.transition ? "none" : this._transition,
                        r = this.$set,
                        i = r.length;
                    while (i--) t.style(r[i], "transition") !== n && t.style(r[i], "transition", n)
                },
                pan: function(e, t, n) {
                    if (this.options.disablePan) return;
                    n || (n = {});
                    var r = n.matrix;
                    r || (r = this.getMatrix()), n.relative && (e += +r[4], t += +r[5]), r[4] = e, r[5] = t, this.setMatrix(r, n), n.silent || this._trigger("pan", r[4], r[5])
                },
                zoom: function(e, n) {
                    typeof e == "object" ? (n = e, e = null) : n || (n = {});
                    var r = t.extend({}, this.options, n);
                    if (r.disableZoom) return;
                    var i = !1,
                        s = r.matrix || this.getMatrix();
                    typeof e != "number" && (e = +s[0] + r.increment * (e ? -1 : 1), i = !0), e > r.maxScale ? e = r.maxScale : e < r.minScale && (e = r.minScale);
                    var o = r.focal;
                    if (o && !r.disablePan) {
                        var u = this._checkDims(),
                            a = o.clientX,
                            f = o.clientY;
                        this.isSVG || (a -= (u.width + u.widthBorder) / 2, f -= (u.height + u.heightBorder) / 2);
                        var l = new w(a, f, 1),
                            c = new b(s),
                            h = this.parentOffset || this.$parent.offset(),
                            p = new b(1, 0, h.left - this.$doc.scrollLeft(), 0, 1, h.top - this.$doc.scrollTop()),
                            d = c.inverse().x(p.inverse().x(l)),
                            v = e / s[0];
                        c = c.x(new b([v, 0, 0, v, 0, 0])), l = p.x(c.x(d)), s[4] = +s[4] + (a - l.e(0)), s[5] = +s[5] + (f - l.e(1))
                    }
                    s[0] = e, s[3] = typeof r.dValue == "number" ? r.dValue : e, this.setMatrix(s, {
                        animate: typeof r.animate == "boolean" ? r.animate : i,
                        range: !r.noSetRange
                    }), r.silent || this._trigger("zoom", s[0], r)
                },
                option: function(e, n) {
                    var r;
                    if (!e) return t.extend({}, this.options);
                    if (typeof e == "string") {
                        if (arguments.length === 1) return this.options[e] !== undefined ? this.options[e] : null;
                        r = {}, r[e] = n
                    } else r = e;
                    this._setOptions(r)
                },
                _setOptions: function(e) {
                    t.each(e, t.proxy(function(e, n) {
                        switch (e) {
                            case "disablePan":
                                this._resetStyle();
                            case "$zoomIn":
                            case "$zoomOut":
                            case "$zoomRange":
                            case "$reset":
                            case "disableZoom":
                            case "onStart":
                            case "onChange":
                            case "onZoom":
                            case "onPan":
                            case "onEnd":
                            case "onReset":
                            case "eventNamespace":
                                this._unbind()
                        }
                        this.options[e] = n;
                        switch (e) {
                            case "disablePan":
                                this._initStyle();
                            case "$zoomIn":
                            case "$zoomOut":
                            case "$zoomRange":
                            case "$reset":
                                this[e] = n;
                            case "disableZoom":
                            case "onStart":
                            case "onChange":
                            case "onZoom":
                            case "onPan":
                            case "onEnd":
                            case "onReset":
                            case "eventNamespace":
                                this._bind();
                                break;
                            case "cursor":
                                t.style(this.elem, "cursor", n);
                                break;
                            case "minScale":
                                this.$zoomRange.attr("min", n);
                                break;
                            case "maxScale":
                                this.$zoomRange.attr("max", n);
                                break;
                            case "rangeStep":
                                this.$zoomRange.attr("step", n);
                                break;
                            case "startTransform":
                                this._buildTransform();
                                break;
                            case "duration":
                            case "easing":
                                this._buildTransition();
                            case "transition":
                                this.transition();
                                break;
                            case "$set":
                                n instanceof t && n.length && (this.$set = n, this._initStyle(), this._buildTransform())
                        }
                    }, this))
                },
                _initStyle: function() {
                    var e = {
                        "backface-visibility": "hidden",
                        "transform-origin": this.isSVG ? "0 0" : "50% 50%"
                    };
                    this.options.disablePan || (e.cursor = this.options.cursor), this.$set.css(e);
                    var n = this.$parent;
                    n.length && !t.nodeName(n[0], "body") && (e = {
                        overflow: "hidden"
                    }, n.css("position") === "static" && (e.position = "relative"), n.css(e))
                },
                _resetStyle: function() {
                    this.$elem.css({
                        cursor: "",
                        transition: ""
                    }), this.$parent.css({
                        overflow: "",
                        position: ""
                    })
                },
                _bind: function() {
                    var e = this,
                        n = this.options,
                        r = n.eventNamespace,
                        i = f ? "pointerdown" + r : "touchstart" + r + " mousedown" + r,
                        s = f ? "pointerup" + r : "touchend" + r + " click" + r,
                        o = {},
                        u = this.$reset,
                        a = this.$zoomRange;
                    t.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"], function() {
                        var e = n["on" + this];
                        t.isFunction(e) && (o["panzoom" + this.toLowerCase() + r] = e)
                    });
                    if (!n.disablePan || !n.disableZoom) o[i] = function(t) {
                        var r;
                        if (t.type === "touchstart" ? (r = t.touches) && (r.length === 1 && !n.disablePan || r.length === 2) : !n.disablePan && t.which === 1) t.preventDefault(), t.stopPropagation(), e._startMove(t, r)
                    };
                    this.$elem.on(o), u.length && u.on(s, function(t) {
                        t.preventDefault(), e.reset()
                    }), a.length && a.attr({
                        step: n.rangeStep === E.defaults.rangeStep && a.attr("step") || n.rangeStep,
                        min: n.minScale,
                        max: n.maxScale
                    }).prop({
                        value: this.getMatrix()[0]
                    });
                    if (n.disableZoom) return;
                    var c = this.$zoomIn,
                        h = this.$zoomOut;
                    c.length && h.length && (c.on(s, function(t) {
                        t.preventDefault(), e.zoom()
                    }), h.on(s, function(t) {
                        t.preventDefault(), e.zoom(!0)
                    })), a.length && (o = {}, o[(f ? "pointerdown" : "mousedown") + r] = function() {
                        e.transition(!0)
                    }, o[(l ? "input" : "change") + r] = function() {
                        e.zoom(+this.value, {
                            noSetRange: !0
                        })
                    }, a.on(o))
                },
                _unbind: function() {
                    this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
                },
                _buildTransform: function() {
                    return this._origTransform = this.getTransform(this.options.startTransform)
                },
                _buildTransition: function() {
                    if (this._transform) {
                        var e = this.options;
                        this._transition = this._transform + " " + e.duration + "ms " + e.easing
                    }
                },
                _checkDims: function() {
                    var e = this.dimensions;
                    return (!e.width || !e.height) && this.resetDimensions(), this.dimensions
                },
                _getDistance: function(e) {
                    var t = e[0],
                        n = e[1];
                    return Math.sqrt(Math.pow(Math.abs(n.clientX - t.clientX), 2) + Math.pow(Math.abs(n.clientY - t.clientY), 2))
                },
                _getMiddle: function(e) {
                    var t = e[0],
                        n = e[1];
                    return {
                        clientX: (n.clientX - t.clientX) / 2 + t.clientX,
                        clientY: (n.clientY - t.clientY) / 2 + t.clientY
                    }
                },
                _trigger: function(e) {
                    typeof e == "string" && (e = "panzoom" + e), this.$elem.triggerHandler(e, [this].concat(a.call(arguments, 1)))
                },
                _startMove: function(e, n) {
                    var r, i, s, u, a, l, c, h, p = this,
                        d = this.options,
                        v = d.eventNamespace,
                        m = this.getMatrix(),
                        y = m.slice(0),
                        b = +y[4],
                        w = +y[5],
                        E = {
                            matrix: m,
                            animate: "skip"
                        };
                    f ? (i = "pointermove", s = "pointerup") : e.type === "touchstart" ? (i = "touchmove", s = "touchend") : (i = "mousemove", s = "mouseup"), i += v, s += v, this.transition(!0), this.panning = !0, this._trigger("start", e, n), n && n.length === 2 ? (u = this._getDistance(n), a = +m[0], l = this._getMiddle(n), r = function(e) {
                        e.preventDefault();
                        var t = p._getMiddle(n = e.touches),
                            r = p._getDistance(n) - u;
                        p.zoom(r * (d.increment / 100) + a, {
                            focal: t,
                            matrix: m,
                            animate: !1
                        }), p.pan(+m[4] + t.clientX - l.clientX, +m[5] + t.clientY - l.clientY, E), l = t
                    }) : (c = e.pageX, h = e.pageY, r = function(e) {
                        e.preventDefault(), p.pan(b + e.pageX - c, w + e.pageY - h, E)
                    }), t(o).off(v).on(i, r).on(s, function(e) {
                        e.preventDefault(), t(this).off(v), p.panning = !1, e.type = "panzoomend", p._trigger(e, m, !g(m, y))
                    })
                }
            }, t.Panzoom = E, t.fn.panzoom = function(e) {
                var n, r, i, s;
                return typeof e == "string" ? (s = [], r = a.call(arguments, 1), this.each(function() {
                    n = t.data(this, u), n ? e.charAt(0) !== "_" && typeof(i = n[e]) == "function" && (i = i.apply(n, r)) !== undefined && s.push(i) : s.push(undefined)
                }), s.length ? s.length === 1 ? s[0] : s : this) : this.each(function() {
                    new E(this, e)
                })
            }, E
        }),
        function() {
            var e = !1;
            window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function t(n) {
                function o() {
                    !e && this._init && this._init.apply(this, arguments)
                }
                var r = this.prototype;
                e = !0;
                var i = new this;
                e = !1;
                for (var s in n) i[s] = typeof n[s] == "function" && typeof r[s] == "function" ? function(e, t) {
                    return function() {
                        var n = this._super;
                        this._super = function(t) {
                            return r[e].apply(this, t || [])
                        };
                        var i = t.apply(this, arguments);
                        return this._super = n, i
                    }
                }(s, n[s]) : n[s];
                return o.prototype = i, o.prototype.constructor = o, o.extend = t, o
            }
        }(),
        function($) {
            function camelCase(e) {
                return e.replace(/-([a-z])/g, function(e, t) {
                    return t.toUpperCase()
                })
            }
            JQClass.classes.JQPlugin = JQClass.extend({
                name: "plugin",
                defaultOptions: {},
                regionalOptions: {},
                _getters: [],
                _getMarker: function() {
                    return "is-" + this.name
                },
                _init: function() {
                    $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
                    var e = camelCase(this.name);
                    $[e] = this, $.fn[e] = function(t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return $[e]._isNotChained(t, n) ? $[e][t].apply($[e], [this[0]].concat(n)) : this.each(function() {
                            if (typeof t == "string") {
                                if (t[0] === "_" || !$[e][t]) throw "Unknown method: " + t;
                                $[e][t].apply($[e], [this].concat(n))
                            } else $[e]._attach(this, t)
                        })
                    }
                },
                setDefaults: function(e) {
                    $.extend(this.defaultOptions, e || {})
                },
                _isNotChained: function(e, t) {
                    return e === "option" && (t.length === 0 || t.length === 1 && typeof t[0] == "string") ? !0 : $.inArray(e, this._getters) > -1
                },
                _attach: function(e, t) {
                    e = $(e);
                    if (e.hasClass(this._getMarker())) return;
                    e.addClass(this._getMarker()), t = $.extend({}, this.defaultOptions, this._getMetadata(e), t || {});
                    var n = $.extend({
                        name: this.name,
                        elem: e,
                        options: t
                    }, this._instSettings(e, t));
                    e.data(this.name, n), this._postAttach(e, n), this.option(e, t)
                },
                _instSettings: function(e, t) {
                    return {}
                },
                _postAttach: function(e, t) {},
                _getMetadata: function(d) {
                    try {
                        var f = d.data(this.name.toLowerCase()) || "";
                        f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(e, t, n) {
                            var r = f.substring(0, n).match(/"/g);
                            return !r || r.length % 2 === 0 ? '"' + t + '":' : t + ":"
                        }), f = $.parseJSON("{" + f + "}");
                        for (var g in f) {
                            var h = f[g];
                            typeof h == "string" && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                        }
                        return f
                    } catch (e) {
                        return {}
                    }
                },
                _getInst: function(e) {
                    return $(e).data(this.name) || {}
                },
                option: function(e, t, n) {
                    e = $(e);
                    var r = e.data(this.name);
                    if (!t || typeof t == "string" && n == null) {
                        var i = (r || {}).options;
                        return i && t ? i[t] : i
                    }
                    if (!e.hasClass(this._getMarker())) return;
                    var i = t || {};
                    typeof t == "string" && (i = {}, i[t] = n), this._optionsChanged(e, r, i), $.extend(r.options, i)
                },
                _optionsChanged: function(e, t, n) {},
                destroy: function(e) {
                    e = $(e);
                    if (!e.hasClass(this._getMarker())) return;
                    this._preDestroy(e, this._getInst(e)), e.removeData(this.name).removeClass(this._getMarker())
                },
                _preDestroy: function(e, t) {}
            }), $.JQPlugin = {
                createPlugin: function(e, t) {
                    typeof e == "object" && (t = e, e = "JQPlugin"), e = camelCase(e);
                    var n = camelCase(t.name);
                    JQClass.classes[n] = JQClass.classes[e].extend(t), new JQClass.classes[n]
                }
            }
        }(jQuery), define("jquery.plugin", ["jquery"], function() {}),
        function(e) {
            var t = "datepick";
            e.JQPlugin.createPlugin({
                name: t,
                defaultRenderer: {
                    picker: '<div class="datepick"><div class="datepick-nav">{link:prev}{link:today}{link:next}</div>{months}{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}<div class="datepick-clear-fix"></div></div>',
                    monthRow: '<div class="datepick-month-row">{months}</div>',
                    month: '<div class="datepick-month"><div class="datepick-month-header">{monthHeader}</div><table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
                    weekHeader: "<tr>{days}</tr>",
                    dayHeader: "<th>{day}</th>",
                    week: "<tr>{days}</tr>",
                    day: "<td>{day}</td>",
                    monthSelector: ".datepick-month",
                    daySelector: "td",
                    rtlClass: "datepick-rtl",
                    multiClass: "datepick-multi",
                    defaultClass: "",
                    selectedClass: "datepick-selected",
                    highlightedClass: "datepick-highlight",
                    todayClass: "datepick-today",
                    otherMonthClass: "datepick-other-month",
                    weekendClass: "datepick-weekend",
                    commandClass: "datepick-cmd",
                    commandButtonClass: "",
                    commandLinkClass: "",
                    disabledClass: "datepick-disabled"
                },
                commands: {
                    prev: {
                        text: "prevText",
                        status: "prevStatus",
                        keystroke: {
                            keyCode: 33
                        },
                        enabled: function(e) {
                            var t = e.curMinDate();
                            return !t || n.add(n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), 1 - e.options.monthsToStep, "m"), e), 1), -1, "d").getTime() >= t.getTime()
                        },
                        date: function(e) {
                            return n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), -e.options.monthsToStep, "m"), e), 1)
                        },
                        action: function(e) {
                            n.changeMonth(this, -e.options.monthsToStep)
                        }
                    },
                    prevJump: {
                        text: "prevJumpText",
                        status: "prevJumpStatus",
                        keystroke: {
                            keyCode: 33,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.curMinDate();
                            return !t || n.add(n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), 1 - e.options.monthsToJump, "m"), e), 1), -1, "d").getTime() >= t.getTime()
                        },
                        date: function(e) {
                            return n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), -e.options.monthsToJump, "m"), e), 1)
                        },
                        action: function(e) {
                            n.changeMonth(this, -e.options.monthsToJump)
                        }
                    },
                    next: {
                        text: "nextText",
                        status: "nextStatus",
                        keystroke: {
                            keyCode: 34
                        },
                        enabled: function(e) {
                            var t = e.get("maxDate");
                            return !t || n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), e.options.monthsToStep, "m"), e), 1).getTime() <= t.getTime()
                        },
                        date: function(e) {
                            return n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), e.options.monthsToStep, "m"), e), 1)
                        },
                        action: function(e) {
                            n.changeMonth(this, e.options.monthsToStep)
                        }
                    },
                    nextJump: {
                        text: "nextJumpText",
                        status: "nextJumpStatus",
                        keystroke: {
                            keyCode: 34,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.get("maxDate");
                            return !t || n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), e.options.monthsToJump, "m"), e), 1).getTime() <= t.getTime()
                        },
                        date: function(e) {
                            return n.day(n._applyMonthsOffset(n.add(n.newDate(e.drawDate), e.options.monthsToJump, "m"), e), 1)
                        },
                        action: function(e) {
                            n.changeMonth(this, e.options.monthsToJump)
                        }
                    },
                    current: {
                        text: "currentText",
                        status: "currentStatus",
                        keystroke: {
                            keyCode: 36,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.curMinDate(),
                                r = e.get("maxDate"),
                                i = e.selectedDates[0] || n.today();
                            return (!t || i.getTime() >= t.getTime()) && (!r || i.getTime() <= r.getTime())
                        },
                        date: function(e) {
                            return e.selectedDates[0] || n.today()
                        },
                        action: function(e) {
                            var t = e.selectedDates[0] || n.today();
                            n.showMonth(this, t.getFullYear(), t.getMonth() + 1)
                        }
                    },
                    today: {
                        text: "todayText",
                        status: "todayStatus",
                        keystroke: {
                            keyCode: 36,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.curMinDate(),
                                r = e.get("maxDate");
                            return (!t || n.today().getTime() >= t.getTime()) && (!r || n.today().getTime() <= r.getTime())
                        },
                        date: function(e) {
                            return n.today()
                        },
                        action: function(e) {
                            n.showMonth(this)
                        }
                    },
                    clear: {
                        text: "clearText",
                        status: "clearStatus",
                        keystroke: {
                            keyCode: 35,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            return !0
                        },
                        date: function(e) {
                            return null
                        },
                        action: function(e) {
                            n.clear(this)
                        }
                    },
                    close: {
                        text: "closeText",
                        status: "closeStatus",
                        keystroke: {
                            keyCode: 27
                        },
                        enabled: function(e) {
                            return !0
                        },
                        date: function(e) {
                            return null
                        },
                        action: function(e) {
                            n.hide(this)
                        }
                    },
                    prevWeek: {
                        text: "prevWeekText",
                        status: "prevWeekStatus",
                        keystroke: {
                            keyCode: 38,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.curMinDate();
                            return !t || n.add(n.newDate(e.drawDate), -7, "d").getTime() >= t.getTime()
                        },
                        date: function(e) {
                            return n.add(n.newDate(e.drawDate), -7, "d")
                        },
                        action: function(e) {
                            n.changeDay(this, -7)
                        }
                    },
                    prevDay: {
                        text: "prevDayText",
                        status: "prevDayStatus",
                        keystroke: {
                            keyCode: 37,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.curMinDate();
                            return !t || n.add(n.newDate(e.drawDate), -1, "d").getTime() >= t.getTime()
                        },
                        date: function(e) {
                            return n.add(n.newDate(e.drawDate), -1, "d")
                        },
                        action: function(e) {
                            n.changeDay(this, -1)
                        }
                    },
                    nextDay: {
                        text: "nextDayText",
                        status: "nextDayStatus",
                        keystroke: {
                            keyCode: 39,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.get("maxDate");
                            return !t || n.add(n.newDate(e.drawDate), 1, "d").getTime() <= t.getTime()
                        },
                        date: function(e) {
                            return n.add(n.newDate(e.drawDate), 1, "d")
                        },
                        action: function(e) {
                            n.changeDay(this, 1)
                        }
                    },
                    nextWeek: {
                        text: "nextWeekText",
                        status: "nextWeekStatus",
                        keystroke: {
                            keyCode: 40,
                            ctrlKey: !0
                        },
                        enabled: function(e) {
                            var t = e.get("maxDate");
                            return !t || n.add(n.newDate(e.drawDate), 7, "d").getTime() <= t.getTime()
                        },
                        date: function(e) {
                            return n.add(n.newDate(e.drawDate), 7, "d")
                        },
                        action: function(e) {
                            n.changeDay(this, 7)
                        }
                    }
                },
                defaultOptions: {
                    pickerClass: "",
                    showOnFocus: !0,
                    showTrigger: null,
                    showAnim: "show",
                    showOptions: {},
                    showSpeed: "normal",
                    popupContainer: null,
                    alignment: "bottom",
                    fixedWeeks: !1,
                    firstDay: 0,
                    calculateWeek: null,
                    monthsToShow: 1,
                    monthsOffset: 0,
                    monthsToStep: 1,
                    monthsToJump: 12,
                    useMouseWheel: !0,
                    changeMonth: !0,
                    yearRange: "c-10:c+10",
                    shortYearCutoff: "+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    defaultDate: null,
                    selectDefaultDate: !1,
                    minDate: null,
                    maxDate: null,
                    dateFormat: "mm/dd/yyyy",
                    autoSize: !1,
                    rangeSelect: !1,
                    rangeSeparator: " - ",
                    multiSelect: 0,
                    multiSeparator: ",",
                    onDate: null,
                    onShow: null,
                    onChangeMonthYear: null,
                    onSelect: null,
                    onClose: null,
                    altField: null,
                    altFormat: null,
                    constrainInput: !0,
                    commandsAsDateFormat: !1,
                    commands: {}
                },
                regionalOptions: {
                    "": {
                        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        dateFormat: "mm/dd/yyyy",
                        firstDay: 0,
                        renderer: {},
                        prevText: "&lt;Prev",
                        prevStatus: "Show the previous month",
                        prevJumpText: "&lt;&lt;",
                        prevJumpStatus: "Show the previous year",
                        nextText: "Next&gt;",
                        nextStatus: "Show the next month",
                        nextJumpText: "&gt;&gt;",
                        nextJumpStatus: "Show the next year",
                        currentText: "Current",
                        currentStatus: "Show the current month",
                        todayText: "Today",
                        todayStatus: "Show today's month",
                        clearText: "Clear",
                        clearStatus: "Clear all the dates",
                        closeText: "Close",
                        closeStatus: "Close the datepicker",
                        yearStatus: "Change the year",
                        earlierText: "&#160;&#160;▲",
                        laterText: "&#160;&#160;▼",
                        monthStatus: "Change the month",
                        weekText: "Wk",
                        weekStatus: "Week of the year",
                        dayStatus: "Select DD, M d, yyyy",
                        defaultStatus: "Select a date",
                        isRTL: !1
                    }
                },
                _getters: ["getDate", "isDisabled", "isSelectable", "retrieveDate"],
                _disabled: [],
                _popupClass: t + "-popup",
                _triggerClass: t + "-trigger",
                _disableClass: t + "-disable",
                _monthYearClass: t + "-month-year",
                _curMonthClass: t + "-month-",
                _anyYearClass: t + "-any-year",
                _curDoWClass: t + "-dow-",
                _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
                _msPerDay: 864e5,
                ATOM: "yyyy-mm-dd",
                COOKIE: "D, dd M yyyy",
                FULL: "DD, MM d, yyyy",
                ISO_8601: "yyyy-mm-dd",
                JULIAN: "J",
                RFC_822: "D, d M yy",
                RFC_850: "DD, dd-M-yy",
                RFC_1036: "D, d M yy",
                RFC_1123: "D, d M yyyy",
                RFC_2822: "D, d M yyyy",
                RSS: "D, d M yy",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yyyy-mm-dd",
                formatDate: function(e, t, n) {
                    typeof e != "string" && (n = t, t = e, e = "");
                    if (!t) return "";
                    e = e || this.defaultOptions.dateFormat, n = n || {};
                    var r = n.dayNamesShort || this.defaultOptions.dayNamesShort,
                        i = n.dayNames || this.defaultOptions.dayNames,
                        s = n.monthNamesShort || this.defaultOptions.monthNamesShort,
                        o = n.monthNames || this.defaultOptions.monthNames,
                        u = n.calculateWeek || this.defaultOptions.calculateWeek,
                        a = function(t, n) {
                            var r = 1;
                            while (p + r < e.length && e.charAt(p + r) === t) r++;
                            return p += r - 1, Math.floor(r / (n || 1)) > 1
                        },
                        f = function(e, t, n, r) {
                            var i = "" + t;
                            if (a(e, r))
                                while (i.length < n) i = "0" + i;
                            return i
                        },
                        l = function(e, t, n, r) {
                            return a(e) ? r[t] : n[t]
                        },
                        c = "",
                        h = !1;
                    for (var p = 0; p < e.length; p++)
                        if (h) e.charAt(p) === "'" && !a("'") ? h = !1 : c += e.charAt(p);
                        else switch (e.charAt(p)) {
                            case "d":
                                c += f("d", t.getDate(), 2);
                                break;
                            case "D":
                                c += l("D", t.getDay(), r, i);
                                break;
                            case "o":
                                c += f("o", this.dayOfYear(t), 3);
                                break;
                            case "w":
                                c += f("w", u(t), 2);
                                break;
                            case "m":
                                c += f("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += l("M", t.getMonth(), s, o);
                                break;
                            case "y":
                                c += a("y", 2) ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                                break;
                            case "@":
                                c += Math.floor(t.getTime() / 1e3);
                                break;
                            case "!":
                                c += t.getTime() * 1e4 + this._ticksTo1970;
                                break;
                            case "'":
                                a("'") ? c += "'" : h = !0;
                                break;
                            default:
                                c += e.charAt(p)
                        }
                        return c
                },
                parseDate: function(e, t, n) {
                    if (t == null) throw "Invalid arguments";
                    t = typeof t == "object" ? t.toString() : t + "";
                    if (t === "") return null;
                    e = e || this.defaultOptions.dateFormat, n = n || {};
                    var r = n.shortYearCutoff || this.defaultOptions.shortYearCutoff;
                    r = typeof r != "string" ? r : this.today().getFullYear() % 100 + parseInt(r, 10);
                    var i = n.dayNamesShort || this.defaultOptions.dayNamesShort,
                        s = n.dayNames || this.defaultOptions.dayNames,
                        o = n.monthNamesShort || this.defaultOptions.monthNamesShort,
                        u = n.monthNames || this.defaultOptions.monthNames,
                        a = -1,
                        f = -1,
                        l = -1,
                        c = -1,
                        h = !1,
                        p = !1,
                        d = function(t, n) {
                            var r = 1;
                            while (b + r < e.length && e.charAt(b + r) === t) r++;
                            return b += r - 1, Math.floor(r / (n || 1)) > 1
                        },
                        v = function(e, n) {
                            var r = d(e, n),
                                i = [2, 3, r ? 4 : 2, 11, 20]["oy@!".indexOf(e) + 1],
                                s = new RegExp("^-?\\d{1," + i + "}"),
                                o = t.substring(y).match(s);
                            if (!o) throw "Missing number at position {0}".replace(/\{0\}/, y);
                            return y += o[0].length, parseInt(o[0], 10)
                        },
                        m = function(e, n, r, i) {
                            var s = d(e, i) ? r : n;
                            for (var o = 0; o < s.length; o++)
                                if (t.substr(y, s[o].length).toLowerCase() === s[o].toLowerCase()) return y += s[o].length, o + 1;
                            throw "Unknown name at position {0}".replace(/\{0\}/, y)
                        },
                        g = function() {
                            if (t.charAt(y) !== e.charAt(b)) throw "Unexpected literal at position {0}".replace(/\{0\}/, y);
                            y++
                        },
                        y = 0;
                    for (var b = 0; b < e.length; b++)
                        if (p) e.charAt(b) === "'" && !d("'") ? p = !1 : g();
                        else switch (e.charAt(b)) {
                            case "d":
                                l = v("d");
                                break;
                            case "D":
                                m("D", i, s);
                                break;
                            case "o":
                                c = v("o");
                                break;
                            case "w":
                                v("w");
                                break;
                            case "m":
                                f = v("m");
                                break;
                            case "M":
                                f = m("M", o, u);
                                break;
                            case "y":
                                var w = b;
                                h = !d("y", 2), b = w, a = v("y", 2);
                                break;
                            case "@":
                                var E = this._normaliseDate(new Date(v("@") * 1e3));
                                a = E.getFullYear(), f = E.getMonth() + 1, l = E.getDate();
                                break;
                            case "!":
                                var E = this._normaliseDate(new Date((v("!") - this._ticksTo1970) / 1e4));
                                a = E.getFullYear(), f = E.getMonth() + 1, l = E.getDate();
                                break;
                            case "*":
                                y = t.length;
                                break;
                            case "'":
                                d("'") ? g() : p = !0;
                                break;
                            default:
                                g()
                        }
                        if (y < t.length) throw "Additional text found at end";
                    a === -1 ? a = this.today().getFullYear() : a < 100 && h && (a += r === -1 ? 1900 : this.today().getFullYear() - this.today().getFullYear() % 100 - (a <= r ? 0 : 100));
                    if (c > -1) {
                        f = 1, l = c;
                        for (var S = this.daysInMonth(a, f); l > S; S = this.daysInMonth(a, f)) f++, l -= S
                    }
                    var E = this.newDate(a, f, l);
                    if (E.getFullYear() !== a || E.getMonth() + 1 !== f || E.getDate() !== l) throw "Invalid date";
                    return E
                },
                determineDate: function(e, t, r, i, s) {
                    r && typeof r != "object" && (s = i, i = r, r = null), typeof i != "string" && (s = i, i = "");
                    var o = function(e) {
                        try {
                            return n.parseDate(i, e, s)
                        } catch (t) {}
                        e = e.toLowerCase();
                        var o = (e.match(/^c/) && r ? n.newDate(r) : null) || n.today(),
                            u = /([+-]?[0-9]+)\s*(d|w|m|y)?/g,
                            a = null;
                        while (a = u.exec(e)) o = n.add(o, parseInt(a[1], 10), a[2] || "d");
                        return o
                    };
                    return t = t ? n.newDate(t) : null, e = e == null ? t : typeof e == "string" ? o(e) : typeof e == "number" ? isNaN(e) || e === Infinity || e === -Infinity ? t : n.add(n.today(), e, "d") : n.newDate(e), e
                },
                daysInMonth: function(e, t) {
                    return t = e.getFullYear ? e.getMonth() + 1 : t, e = e.getFullYear ? e.getFullYear() : e, this.newDate(e, t + 1, 0).getDate()
                },
                dayOfYear: function(e, t, r) {
                    var i = e.getFullYear ? e : n.newDate(e, t, r),
                        s = n.newDate(i.getFullYear(), 1, 1);
                    return Math.floor((i.getTime() - s.getTime()) / n._msPerDay) + 1
                },
                iso8601Week: function(e, t, r) {
                    var i = e.getFullYear ? new Date(e.getTime()) : n.newDate(e, t, r);
                    i.setDate(i.getDate() + 4 - (i.getDay() || 7));
                    var s = i.getTime();
                    return i.setMonth(0, 1), Math.floor(Math.round((s - i) / n._msPerDay) / 7) + 1
                },
                today: function() {
                    return this._normaliseDate(new Date)
                },
                newDate: function(e, t, n) {
                    return e ? e.getFullYear ? this._normaliseDate(new Date(e.getTime())) : new Date(e, t - 1, n, 12) : null
                },
                _normaliseDate: function(e) {
                    return e && e.setHours(12, 0, 0, 0), e
                },
                year: function(e, t) {
                    return e.setFullYear(t), this._normaliseDate(e)
                },
                month: function(e, t) {
                    return e.setMonth(t - 1), this._normaliseDate(e)
                },
                day: function(e, t) {
                    return e.setDate(t), this._normaliseDate(e)
                },
                add: function(e, t, r) {
                    if (r === "d" || r === "w") this._normaliseDate(e), e.setDate(e.getDate() + t * (r === "w" ? 7 : 1));
                    else {
                        var i = e.getFullYear() + (r === "y" ? t : 0),
                            s = e.getMonth() + (r === "m" ? t : 0);
                        e.setTime(n.newDate(i, s + 1, Math.min(e.getDate(), this.daysInMonth(i, s + 1))).getTime())
                    }
                    return e
                },
                _applyMonthsOffset: function(t, r) {
                    var i = r.options.monthsOffset;
                    return e.isFunction(i) && (i = i.apply(r.elem[0], [t])), n.add(t, -i, "m")
                },
                _init: function() {
                    this.defaultOptions.commands = this.commands, this.defaultOptions.calculateWeek = this.iso8601Week, this.regionalOptions[""].renderer = this.defaultRenderer, this._super()
                },
                _instSettings: function(t, r) {
                    return {
                        selectedDates: [],
                        drawDate: null,
                        pickingRange: !1,
                        inline: e.inArray(t[0].nodeName.toLowerCase(), ["div", "span"]) > -1,
                        get: function(t) {
                            return e.inArray(t, ["defaultDate", "minDate", "maxDate"]) > -1 ? n.determineDate(this.options[t], null, this.selectedDates[0], this.options.dateFormat, this.getConfig()) : this.options[t]
                        },
                        curMinDate: function() {
                            return this.pickingRange ? this.selectedDates[0] : this.get("minDate")
                        },
                        getConfig: function() {
                            return {
                                dayNamesShort: this.options.dayNamesShort,
                                dayNames: this.options.dayNames,
                                monthNamesShort: this.options.monthNamesShort,
                                monthNames: this.options.monthNames,
                                calculateWeek: this.options.calculateWeek,
                                shortYearCutoff: this.options.shortYearCutoff
                            }
                        }
                    }
                },
                _postAttach: function(t, r) {
                    r.inline ? (r.drawDate = n._checkMinMax(n.newDate(r.selectedDates[0] || r.get("defaultDate") || n.today()), r), r.prevDate = n.newDate(r.drawDate), this._update(t[0]), e.fn.mousewheel && t.mousewheel(this._doMouseWheel)) : (this._attachments(t, r), t.on("keydown." + r.name, this._keyDown).on("keypress." + r.name, this._keyPress).on("keyup." + r.name, this._keyUp), t.attr("disabled") && this.disable(t[0]))
                },
                _optionsChanged: function(t, r, i) {
                    if (i.calendar && i.calendar !== r.options.calendar) {
                        var s = function(e) {
                            return typeof r.options[e] == "object" ? null : r.options[e]
                        };
                        i = e.extend({
                            defaultDate: s("defaultDate"),
                            minDate: s("minDate"),
                            maxDate: s("maxDate")
                        }, i), r.selectedDates = [], r.drawDate = null
                    }
                    var o = r.selectedDates;
                    e.extend(r.options, i), this.setDate(t[0], o, null, !1, !0), r.pickingRange = !1, r.drawDate = n.newDate(this._checkMinMax((r.options.defaultDate ? r.get("defaultDate") : r.drawDate) || r.get("defaultDate") || n.today(), r)), r.inline || this._attachments(t, r), (r.inline || r.div) && this._update(t[0])
                },
                _attachments: function(t, r) {
                    t.off("focus." + r.name), r.options.showOnFocus && t.on("focus." + r.name, this.show), r.trigger && r.trigger.remove();
                    var i = r.options.showTrigger;
                    r.trigger = i ? e(i).clone().removeAttr("id").addClass(this._triggerClass)[r.options.isRTL ? "insertBefore" : "insertAfter"](t).click(function() {
                        n.isDisabled(t[0]) || n[n.curInst === r ? "hide" : "show"](t[0])
                    }) : e([]), this._autoSize(t, r);
                    var s = this._extractDates(r, t.val());
                    s && this.setDate(t[0], s, null, !0);
                    var o = r.get("defaultDate");
                    r.options.selectDefaultDate && o && r.selectedDates.length === 0 && this.setDate(t[0], n.newDate(o || n.today()))
                },
                _autoSize: function(e, t) {
                    if (t.options.autoSize && !t.inline) {
                        var r = n.newDate(2009, 10, 20),
                            i = t.options.dateFormat;
                        if (i.match(/[DM]/)) {
                            var s = function(e) {
                                var t = 0,
                                    n = 0;
                                for (var r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                                return n
                            };
                            r.setMonth(s(t.options[i.match(/MM/) ? "monthNames" : "monthNamesShort"])), r.setDate(s(t.options[i.match(/DD/) ? "dayNames" : "dayNamesShort"]) + 20 - r.getDay())
                        }
                        t.elem.attr("size", n.formatDate(i, r, t.getConfig()).length)
                    }
                },
                _preDestroy: function(t, n) {
                    n.trigger && n.trigger.remove(), t.empty().off("." + n.name), n.inline && e.fn.mousewheel && t.unmousewheel(), !n.inline && n.options.autoSize && t.removeAttr("size")
                },
                multipleEvents: function(e) {
                    var t = arguments;
                    return function(e) {
                        for (var n = 0; n < t.length; n++) t[n].apply(this, arguments)
                    }
                },
                enable: function(t) {
                    t = e(t);
                    if (!t.hasClass(this._getMarker())) return;
                    var n = this._getInst(t);
                    n.inline ? t.children("." + this._disableClass).remove().end().find("button,select").prop("disabled", !1).end().find("a").attr("href", "javascript:void(0)") : (t.prop("disabled", !1), n.trigger.filter("button." + this._triggerClass).prop("disabled", !1).end().filter("img." + this._triggerClass).css({
                        opacity: "1.0",
                        cursor: ""
                    })), this._disabled = e.map(this._disabled, function(e) {
                        return e === t[0] ? null : e
                    })
                },
                disable: function(t) {
                    t = e(t);
                    if (!t.hasClass(this._getMarker())) return;
                    var n = this._getInst(t);
                    if (n.inline) {
                        var r = t.children(":last"),
                            i = r.offset(),
                            s = {
                                left: 0,
                                top: 0
                            };
                        r.parents().each(function() {
                            if (e(this).css("position") === "relative") return s = e(this).offset(), !1
                        });
                        var o = t.css("zIndex");
                        o = (o === "auto" ? 0 : parseInt(o, 10)) + 1, t.prepend('<div class="' + this._disableClass + '" style="' + "width: " + r.outerWidth() + "px; height: " + r.outerHeight() + "px; left: " + (i.left - s.left) + "px; top: " + (i.top - s.top) + "px; z-index: " + o + '"></div>').find("button,select").prop("disabled", !0).end().find("a").removeAttr("href")
                    } else t.prop("disabled", !0), n.trigger.filter("button." + this._triggerClass).prop("disabled", !0).end().filter("img." + this._triggerClass).css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    this._disabled = e.map(this._disabled, function(e) {
                        return e === t[0] ? null : e
                    }), this._disabled.push(t[0])
                },
                isDisabled: function(t) {
                    return t && e.inArray(t, this._disabled) > -1
                },
                show: function(t) {
                    t = e(t.target || t);
                    var r = n._getInst(t);
                    if (n.curInst === r) return;
                    n.curInst && n.hide(n.curInst, !0);
                    if (!e.isEmptyObject(r)) {
                        r.lastVal = null, r.selectedDates = n._extractDates(r, t.val()), r.pickingRange = !1, r.drawDate = n._checkMinMax(n.newDate(r.selectedDates[0] || r.get("defaultDate") || n.today()), r), r.prevDate = n.newDate(r.drawDate), n.curInst = r, n._update(t[0], !0);
                        var i = n._checkOffset(r);
                        r.div.css({
                            left: i.left,
                            top: i.top
                        });
                        var s = r.options.showAnim,
                            o = r.options.showSpeed;
                        o = o === "normal" && e.ui && parseInt(e.ui.version.substring(2)) >= 8 ? "_default" : o;
                        if (e.effects && (e.effects[s] || e.effects.effect && e.effects.effect[s])) {
                            var u = r.div.data();
                            for (var a in u) a.match(/^ec\.storage\./) && (u[a] = r._mainDiv.css(a.replace(/ec\.storage\./, "")));
                            r.div.data(u).show(s, r.options.showOptions, o)
                        } else r.div[s || "show"](s ? o : 0)
                    }
                },
                _extractDates: function(e, t) {
                    if (t === e.lastVal) return;
                    e.lastVal = t, t = t.split(e.options.multiSelect ? e.options.multiSeparator : e.options.rangeSelect ? e.options.rangeSeparator : "\0");
                    var r = [];
                    for (var i = 0; i < t.length; i++) try {
                        var s = n.parseDate(e.options.dateFormat, t[i], e.getConfig());
                        if (s) {
                            var o = !1;
                            for (var u = 0; u < r.length; u++)
                                if (r[u].getTime() === s.getTime()) {
                                    o = !0;
                                    break
                                }
                            o || r.push(s)
                        }
                    } catch (a) {}
                    return r.splice(e.options.multiSelect || (e.options.rangeSelect ? 2 : 1), r.length), e.options.rangeSelect && r.length === 1 && (r[1] = r[0]), r
                },
                _update: function(t, r) {
                    t = e(t.target || t);
                    var i = n._getInst(t);
                    if (!e.isEmptyObject(i)) {
                        (i.inline || n.curInst === i) && e.isFunction(i.options.onChangeMonthYear) && (!i.prevDate || i.prevDate.getFullYear() !== i.drawDate.getFullYear() || i.prevDate.getMonth() !== i.drawDate.getMonth()) && i.options.onChangeMonthYear.apply(t[0], [i.drawDate.getFullYear(), i.drawDate.getMonth() + 1]);
                        if (i.inline) {
                            var s = e("a, :input", t).index(e(":focus", t));
                            t.html(this._generateContent(t[0], i));
                            var o = t.find("a, :input");
                            o.eq(Math.max(Math.min(s, o.length - 1), 0)).focus()
                        } else n.curInst === i && (i.div || (i.div = e("<div></div>").addClass(this._popupClass).css({
                            display: r ? "none" : "static",
                            position: "absolute",
                            left: t.offset().left,
                            top: t.offset().top + t.outerHeight()
                        }).appendTo(e(i.options.popupContainer || "body")), e.fn.mousewheel && i.div.mousewheel(this._doMouseWheel)), i.div.html(this._generateContent(t[0], i)), t.focus())
                    }
                },
                _updateInput: function(t, r) {
                    var i = this._getInst(t);
                    if (!e.isEmptyObject(i)) {
                        var s = "",
                            o = "",
                            u = i.options.multiSelect ? i.options.multiSeparator : i.options.rangeSeparator,
                            a = i.options.altFormat || i.options.dateFormat;
                        for (var f = 0; f < i.selectedDates.length; f++) s += r ? "" : (f > 0 ? u : "") + n.formatDate(i.options.dateFormat, i.selectedDates[f], i.getConfig()), o += (f > 0 ? u : "") + n.formatDate(a, i.selectedDates[f], i.getConfig());
                        !i.inline && !r && e(t).val(s), e(i.options.altField).val(o), e.isFunction(i.options.onSelect) && !r && !i.inSelect && (i.inSelect = !0, i.options.onSelect.apply(t, [i.selectedDates]), i.inSelect = !1)
                    }
                },
                _getBorders: function(e) {
                    var t = function(e) {
                        return {
                            thin: 1,
                            medium: 3,
                            thick: 5
                        }[e] || e
                    };
                    return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
                },
                _checkOffset: function(t) {
                    var n = t.elem.is(":hidden") && t.trigger ? t.trigger : t.elem,
                        r = n.offset(),
                        i = e(window).width(),
                        s = e(window).height();
                    if (i === 0) return r;
                    var o = !1;
                    e(t.elem).parents().each(function() {
                        return o |= e(this).css("position") === "fixed", !o
                    });
                    var u = document.documentElement.scrollLeft || document.body.scrollLeft,
                        a = document.documentElement.scrollTop || document.body.scrollTop,
                        f = r.top - (o ? a : 0) - t.div.outerHeight(),
                        l = r.top - (o ? a : 0) + n.outerHeight(),
                        c = r.left - (o ? u : 0),
                        h = r.left - (o ? u : 0) + n.outerWidth() - t.div.outerWidth(),
                        p = r.left - u + t.div.outerWidth() > i,
                        d = r.top - a + t.elem.outerHeight() + t.div.outerHeight() > s;
                    t.div.css("position", o ? "fixed" : "absolute");
                    var v = t.options.alignment;
                    return v === "topLeft" ? r = {
                        left: c,
                        top: f
                    } : v === "topRight" ? r = {
                        left: h,
                        top: f
                    } : v === "bottomLeft" ? r = {
                        left: c,
                        top: l
                    } : v === "bottomRight" ? r = {
                        left: h,
                        top: l
                    } : v === "top" ? r = {
                        left: t.options.isRTL || p ? h : c,
                        top: f
                    } : r = {
                        left: t.options.isRTL || p ? h : c,
                        top: d ? f : l
                    }, r.left = Math.max(o ? 0 : u, r.left), r.top = Math.max(o ? 0 : a, r.top), r
                },
                _checkExternalClick: function(t) {
                    if (!n.curInst) return;
                    var r = e(t.target);
                    r.closest("." + n._popupClass + ",." + n._triggerClass).length === 0 && !r.hasClass(n._getMarker()) && n.hide(n.curInst)
                },
                hide: function(t, r) {
                    if (!t) return;
                    var i = this._getInst(t);
                    e.isEmptyObject(i) && (i = t);
                    if (i && i === n.curInst) {
                        var s = r ? "" : i.options.showAnim,
                            o = i.options.showSpeed;
                        o = o === "normal" && e.ui && parseInt(e.ui.version.substring(2)) >= 8 ? "_default" : o;
                        var u = function() {
                            if (!i.div) return;
                            i.div.remove(), i.div = null, n.curInst = null, e.isFunction(i.options.onClose) && i.options.onClose.apply(t, [i.selectedDates])
                        };
                        i.div.stop();
                        if (e.effects && (e.effects[s] || e.effects.effect && e.effects.effect[s])) i.div.hide(s, i.options.showOptions, o, u);
                        else {
                            var a = s === "slideDown" ? "slideUp" : s === "fadeIn" ? "fadeOut" : "hide";
                            i.div[a](s ? o : "", u)
                        }
                        s || u()
                    }
                },
                _keyDown: function(t) {
                    var r = t.data && t.data.elem || t.target,
                        i = n._getInst(r),
                        s = !1;
                    if (i.inline || i.div)
                        if (t.keyCode === 9) n.hide(r);
                        else if (t.keyCode === 13) n.selectDate(r, e("a." + i.options.renderer.highlightedClass, i.div)[0]), s = !0;
                    else {
                        var o = i.options.commands;
                        for (var u in o) {
                            var a = o[u];
                            if (a.keystroke.keyCode === t.keyCode && !!a.keystroke.ctrlKey == (!!t.ctrlKey || !!t.metaKey) && !!a.keystroke.altKey === t.altKey && !!a.keystroke.shiftKey === t.shiftKey) {
                                n.performAction(r, u), s = !0;
                                break
                            }
                        }
                    } else {
                        var a = i.options.commands.current;
                        a.keystroke.keyCode === t.keyCode && !!a.keystroke.ctrlKey == (!!t.ctrlKey || !!t.metaKey) && !!a.keystroke.altKey === t.altKey && !!a.keystroke.shiftKey === t.shiftKey && (n.show(r), s = !0)
                    }
                    return i.ctrlKey = t.keyCode < 48 && t.keyCode !== 32 || t.ctrlKey || t.metaKey, s && (t.preventDefault(), t.stopPropagation()), !s
                },
                _keyPress: function(t) {
                    var r = n._getInst(t.data && t.data.elem || t.target);
                    if (!e.isEmptyObject(r) && r.options.constrainInput) {
                        var i = String.fromCharCode(t.keyCode || t.charCode),
                            s = n._allowedChars(r);
                        return t.metaKey || r.ctrlKey || i < " " || !s || s.indexOf(i) > -1
                    }
                    return !0
                },
                _allowedChars: function(e) {
                    var t = e.options.multiSelect ? e.options.multiSeparator : e.options.rangeSelect ? e.options.rangeSeparator : "",
                        n = !1,
                        r = !1,
                        i = e.options.dateFormat;
                    for (var s = 0; s < i.length; s++) {
                        var o = i.charAt(s);
                        if (n) o === "'" && i.charAt(s + 1) !== "'" ? n = !1 : t += o;
                        else switch (o) {
                            case "d":
                            case "m":
                            case "o":
                            case "w":
                                t += r ? "" : "0123456789", r = !0;
                                break;
                            case "y":
                            case "@":
                            case "!":
                                t += (r ? "" : "0123456789") + "-", r = !0;
                                break;
                            case "J":
                                t += (r ? "" : "0123456789") + "-.", r = !0;
                                break;
                            case "D":
                            case "M":
                            case "Y":
                                return null;
                            case "'":
                                i.charAt(s + 1) === "'" ? t += "'" : n = !0;
                                break;
                            default:
                                t += o
                        }
                    }
                    return t
                },
                _keyUp: function(t) {
                    var r = t.data && t.data.elem || t.target,
                        i = n._getInst(r);
                    if (!e.isEmptyObject(i) && !i.ctrlKey && i.lastVal !== i.elem.val()) try {
                        var s = n._extractDates(i, i.elem.val());
                        s.length > 0 && n.setDate(r, s, null, !0)
                    } catch (t) {}
                    return !0
                },
                _doMouseWheel: function(t, r) {
                    var i = n.curInst && n.curInst.elem[0] || e(t.target).closest("." + n._getMarker())[0];
                    if (n.isDisabled(i)) return;
                    var s = n._getInst(i);
                    s.options.useMouseWheel && (r = r < 0 ? -1 : 1, n.changeMonth(i, -s.options[t.ctrlKey ? "monthsToJump" : "monthsToStep"] * r)), t.preventDefault()
                },
                clear: function(t) {
                    var r = this._getInst(t);
                    if (!e.isEmptyObject(r)) {
                        r.selectedDates = [], this.hide(t);
                        var i = r.get("defaultDate");
                        r.options.selectDefaultDate && i ? this.setDate(t, n.newDate(i || n.today())) : this._updateInput(t)
                    }
                },
                getDate: function(t) {
                    var n = this._getInst(t);
                    return e.isEmptyObject(n) ? [] : n.selectedDates
                },
                setDate: function(t, r, i, s, o) {
                    var u = this._getInst(t);
                    if (!e.isEmptyObject(u)) {
                        e.isArray(r) || (r = [r], i && r.push(i));
                        var a = u.get("minDate"),
                            f = u.get("maxDate"),
                            l = u.selectedDates[0];
                        u.selectedDates = [];
                        for (var c = 0; c < r.length; c++) {
                            var h = n.determineDate(r[c], null, l, u.options.dateFormat, u.getConfig());
                            if (h && (!a || h.getTime() >= a.getTime()) && (!f || h.getTime() <= f.getTime())) {
                                var p = !1;
                                for (var d = 0; d < u.selectedDates.length; d++)
                                    if (u.selectedDates[d].getTime() === h.getTime()) {
                                        p = !0;
                                        break
                                    }
                                p || u.selectedDates.push(h)
                            }
                        }
                        u.selectedDates.splice(u.options.multiSelect || (u.options.rangeSelect ? 2 : 1), u.selectedDates.length);
                        if (u.options.rangeSelect) {
                            switch (u.selectedDates.length) {
                                case 1:
                                    u.selectedDates[1] = u.selectedDates[0];
                                    break;
                                case 2:
                                    u.selectedDates[1] = u.selectedDates[0].getTime() > u.selectedDates[1].getTime() ? u.selectedDates[0] : u.selectedDates[1]
                            }
                            u.pickingRange = !1
                        }
                        u.prevDate = u.drawDate ? n.newDate(u.drawDate) : null, u.drawDate = this._checkMinMax(n.newDate(u.selectedDates[0] || u.get("defaultDate") || n.today()), u), o || (this._update(t), this._updateInput(t, s))
                    }
                },
                isSelectable: function(t, r) {
                    var i = this._getInst(t);
                    return e.isEmptyObject(i) ? !1 : (r = n.determineDate(r, i.selectedDates[0] || this.today(), null, i.options.dateFormat, i.getConfig()), this._isSelectable(t, r, i.options.onDate, i.get("minDate"), i.get("maxDate")))
                },
                _isSelectable: function(t, n, r, i, s) {
                    var o = typeof r == "boolean" ? {
                        selectable: r
                    } : e.isFunction(r) ? r.apply(t, [n, !0]) : {};
                    return o.selectable !== !1 && (!i || n.getTime() >= i.getTime()) && (!s || n.getTime() <= s.getTime())
                },
                performAction: function(t, n) {
                    var r = this._getInst(t);
                    if (!e.isEmptyObject(r) && !this.isDisabled(t)) {
                        var i = r.options.commands;
                        i[n] && i[n].enabled.apply(t, [r]) && i[n].action.apply(t, [r])
                    }
                },
                showMonth: function(t, r, i, s) {
                    var o = this._getInst(t);
                    if (!e.isEmptyObject(o) && (s != null || o.drawDate.getFullYear() !== r || o.drawDate.getMonth() + 1 !== i)) {
                        o.prevDate = n.newDate(o.drawDate);
                        var u = this._checkMinMax(r != null ? n.newDate(r, i, 1) : n.today(), o);
                        o.drawDate = n.newDate(u.getFullYear(), u.getMonth() + 1, s != null ? s : Math.min(o.drawDate.getDate(), n.daysInMonth(u.getFullYear(), u.getMonth() + 1))), this._update(t)
                    }
                },
                changeMonth: function(t, r) {
                    var i = this._getInst(t);
                    if (!e.isEmptyObject(i)) {
                        var s = n.add(n.newDate(i.drawDate), r, "m");
                        this.showMonth(t, s.getFullYear(), s.getMonth() + 1)
                    }
                },
                changeDay: function(t, r) {
                    var i = this._getInst(t);
                    if (!e.isEmptyObject(i)) {
                        var s = n.add(n.newDate(i.drawDate), r, "d");
                        this.showMonth(t, s.getFullYear(), s.getMonth() + 1, s.getDate())
                    }
                },
                _checkMinMax: function(e, t) {
                    var r = t.get("minDate"),
                        i = t.get("maxDate");
                    return e = r && e.getTime() < r.getTime() ? n.newDate(r) : e, e = i && e.getTime() > i.getTime() ? n.newDate(i) : e, e
                },
                retrieveDate: function(t, n) {
                    var r = this._getInst(t);
                    return e.isEmptyObject(r) ? null : this._normaliseDate(new Date(parseInt(n.className.replace(/^.*dp(-?\d+).*$/, "$1"), 10)))
                },
                selectDate: function(t, r) {
                    var i = this._getInst(t);
                    if (!e.isEmptyObject(i) && !this.isDisabled(t)) {
                        var s = this.retrieveDate(t, r);
                        if (i.options.multiSelect) {
                            var o = !1;
                            for (var u = 0; u < i.selectedDates.length; u++)
                                if (s.getTime() === i.selectedDates[u].getTime()) {
                                    i.selectedDates.splice(u, 1), o = !0;
                                    break
                                }!o && i.selectedDates.length < i.options.multiSelect && i.selectedDates.push(s)
                        } else i.options.rangeSelect ? (i.pickingRange ? i.selectedDates[1] = s : i.selectedDates = [s, s], i.pickingRange = !i.pickingRange) : i.selectedDates = [s];
                        i.prevDate = i.drawDate = n.newDate(s), this._updateInput(t), i.inline || i.pickingRange || i.selectedDates.length < (i.options.multiSelect || (i.options.rangeSelect ? 2 : 1)) ? this._update(t) : this.hide(t)
                    }
                },
                _generateContent: function(t, r) {
                    function v() {
                        (r.inline ? e(this).closest("." + d._getMarker()) : r.div).find(r.options.renderer.daySelector + " a").removeClass(r.options.renderer.highlightedClass)
                    }
                    var i = r.options.monthsToShow;
                    i = e.isArray(i) ? i : [1, i], r.drawDate = this._checkMinMax(r.drawDate || r.get("defaultDate") || n.today(), r);
                    var s = n._applyMonthsOffset(n.newDate(r.drawDate), r),
                        o = "";
                    for (var u = 0; u < i[0]; u++) {
                        var a = "";
                        for (var f = 0; f < i[1]; f++) a += this._generateMonth(t, r, s.getFullYear(), s.getMonth() + 1, r.options.renderer, u === 0 && f === 0), n.add(s, 1, "m");
                        o += this._prepare(r.options.renderer.monthRow, r).replace(/\{months\}/, a)
                    }
                    var l = this._prepare(r.options.renderer.picker, r).replace(/\{months\}/, o).replace(/\{weekHeader\}/g, this._generateDayHeaders(r, r.options.renderer)),
                        c = function(e, i, s, o, u) {
                            if (l.indexOf("{" + e + ":" + o + "}") === -1) return;
                            var a = r.options.commands[o],
                                f = r.options.commandsAsDateFormat ? a.date.apply(t, [r]) : null;
                            l = l.replace(new RegExp("\\{" + e + ":" + o + "\\}", "g"), "<" + i + (a.status ? ' title="' + r.options[a.status] + '"' : "") + ' class="' + r.options.renderer.commandClass + " " + r.options.renderer.commandClass + "-" + o + " " + u + (a.enabled(r) ? "" : " " + r.options.renderer.disabledClass) + '">' + (f ? n.formatDate(r.options[a.text], f, r.getConfig()) : r.options[a.text]) + "</" + s + ">")
                        };
                    for (var h in r.options.commands) c("button", 'button type="button"', "button", h, r.options.renderer.commandButtonClass), c("link", 'a href="javascript:void(0)"', "a", h, r.options.renderer.commandLinkClass);
                    l = e(l);
                    if (i[1] > 1) {
                        var p = 0;
                        e(r.options.renderer.monthSelector, l).each(function() {
                            var t = ++p % i[1];
                            e(this).addClass(t === 1 ? "first" : t === 0 ? "last" : "")
                        })
                    }
                    var d = this;
                    l.find(r.options.renderer.daySelector + " a").hover(function() {
                        v.apply(this), e(this).addClass(r.options.renderer.highlightedClass)
                    }, v).click(function() {
                        d.selectDate(t, this)
                    }).end().find("select." + this._monthYearClass + ":not(." + this._anyYearClass + ")").change(function() {
                        var n = e(this).val().split("/");
                        d.showMonth(t, parseInt(n[1], 10), parseInt(n[0], 10))
                    }).end().find("select." + this._anyYearClass).click(function() {
                        e(this).css("visibility", "hidden").next("input").css({
                            left: this.offsetLeft,
                            top: this.offsetTop,
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        }).show().focus()
                    }).end().find("input." + d._monthYearClass).change(function() {
                        try {
                            var n = parseInt(e(this).val(), 10);
                            n = isNaN(n) ? r.drawDate.getFullYear() : n, d.showMonth(t, n, r.drawDate.getMonth() + 1, r.drawDate.getDate())
                        } catch (i) {
                            alert(i)
                        }
                    }).keydown(function(t) {
                        t.keyCode === 13 ? e(t.elem).change() : t.keyCode === 27 && (e(t.elem).hide().prev("select").css("visibility", "visible"), r.elem.focus())
                    });
                    var m = {
                        elem: r.elem[0]
                    };
                    l.keydown(m, this._keyDown).keypress(m, this._keyPress).keyup(m, this._keyUp), l.find("." + r.options.renderer.commandClass).click(function() {
                        if (!e(this).hasClass(r.options.renderer.disabledClass)) {
                            var i = this.className.replace(new RegExp("^.*" + r.options.renderer.commandClass + "-([^ ]+).*$"), "$1");
                            n.performAction(t, i)
                        }
                    }), r.options.isRTL && l.addClass(r.options.renderer.rtlClass), i[0] * i[1] > 1 && l.addClass(r.options.renderer.multiClass), r.options.pickerClass && l.addClass(r.options.pickerClass), e("body").append(l);
                    var g = 0;
                    return l.find(r.options.renderer.monthSelector).each(function() {
                        g += e(this).outerWidth()
                    }), l.width(g / i[0]), e.isFunction(r.options.onShow) && r.options.onShow.apply(t, [l, r]), l
                },
                _generateMonth: function(t, r, i, s, o, u) {
                    var a = n.daysInMonth(i, s),
                        f = r.options.monthsToShow;
                    f = e.isArray(f) ? f : [1, f];
                    var l = r.options.fixedWeeks || f[0] * f[1] > 1,
                        c = r.options.firstDay,
                        h = (n.newDate(i, s, 1).getDay() - c + 7) % 7,
                        p = l ? 6 : Math.ceil((h + a) / 7),
                        d = r.options.selectOtherMonths && r.options.showOtherMonths,
                        v = r.pickingRange ? r.selectedDates[0] : r.get("minDate"),
                        m = r.get("maxDate"),
                        g = o.week.indexOf("{weekOfYear}") > -1,
                        y = n.today(),
                        b = n.newDate(i, s, 1);
                    n.add(b, -h - (l && b.getDay() === c ? 7 : 0), "d");
                    var w = b.getTime(),
                        E = "";
                    for (var S = 0; S < p; S++) {
                        var x = g ? '<span class="dp' + w + '">' + (e.isFunction(r.options.calculateWeek) ? r.options.calculateWeek(b) : 0) + "</span>" : "",
                            T = "";
                        for (var N = 0; N < 7; N++) {
                            var C = !1;
                            if (r.options.rangeSelect && r.selectedDates.length > 0) C = b.getTime() >= r.selectedDates[0] && b.getTime() <= r.selectedDates[1];
                            else
                                for (var k = 0; k < r.selectedDates.length; k++)
                                    if (r.selectedDates[k].getTime() === b.getTime()) {
                                        C = !0;
                                        break
                                    } var L = e.isFunction(r.options.onDate) ? r.options.onDate.apply(t, [b, b.getMonth() + 1 === s]) : {},
                                A = (d || b.getMonth() + 1 === s) && this._isSelectable(t, b, L.selectable, v, m);
                            T += this._prepare(o.day, r).replace(/\{day\}/g, (A ? '<a href="javascript:void(0)"' : "<span") + ' class="dp' + w + " " + (L.dateClass || "") + (C && (d || b.getMonth() + 1 === s) ? " " + o.selectedClass : "") + (A ? " " + o.defaultClass : "") + ((b.getDay() || 7) < 6 ? "" : " " + o.weekendClass) + (b.getMonth() + 1 === s ? "" : " " + o.otherMonthClass) + (b.getTime() === y.getTime() && b.getMonth() + 1 === s ? " " + o.todayClass : "") + (b.getTime() === r.drawDate.getTime() && b.getMonth() + 1 === s ? " " + o.highlightedClass : "") + '"' + (L.title || r.options.dayStatus && A ? ' title="' + (L.title || n.formatDate(r.options.dayStatus, b, r.getConfig())) + '"' : "") + ">" + (r.options.showOtherMonths || b.getMonth() + 1 === s ? L.content || b.getDate() : "&#160;") + (A ? "</a>" : "</span>")), n.add(b, 1, "d"), w = b.getTime()
                        }
                        E += this._prepare(o.week, r).replace(/\{days\}/g, T).replace(/\{weekOfYear\}/g, x)
                    }
                    var O = this._prepare(o.month, r).match(/\{monthHeader(:[^\}]+)?\}/);
                    O = O[0].length <= 13 ? "MM yyyy" : O[0].substring(13, O[0].length - 1), O = u ? this._generateMonthSelection(r, i, s, v, m, O, o) : n.formatDate(O, n.newDate(i, s, 1), r.getConfig());
                    var M = this._prepare(o.weekHeader, r).replace(/\{days\}/g, this._generateDayHeaders(r, o));
                    return this._prepare(o.month, r).replace(/\{monthHeader(:[^\}]+)?\}/g, O).replace(/\{weekHeader\}/g, M).replace(/\{weeks\}/g, E)
                },
                _generateDayHeaders: function(e, t) {
                    var n = "";
                    for (var r = 0; r < 7; r++) {
                        var i = (r + e.options.firstDay) % 7;
                        n += this._prepare(t.dayHeader, e).replace(/\{day\}/g, '<span class="' + this._curDoWClass + i + '" title="' + e.options.dayNames[i] + '">' + e.options.dayNamesMin[i] + "</span>")
                    }
                    return n
                },
                _generateMonthSelection: function(e, t, r, i, s, o) {
                    if (!e.options.changeMonth) return n.formatDate(o, n.newDate(t, r, 1), e.getConfig());
                    var u = e.options["monthNames" + (o.match(/mm/i) ? "" : "Short")],
                        a = o.replace(/m+/i, "\\x2E").replace(/y+/i, "\\x2F"),
                        f = '<select class="' + this._monthYearClass + '" title="' + e.options.monthStatus + '">';
                    for (var l = 1; l <= 12; l++)(!i || n.newDate(t, l, n.daysInMonth(t, l)).getTime() >= i.getTime()) && (!s || n.newDate(t, l, 1).getTime() <= s.getTime()) && (f += '<option value="' + l + "/" + t + '"' + (r === l ? ' selected="selected"' : "") + ">" + u[l - 1] + "</option>");
                    f += "</select>", a = a.replace(/\\x2E/, f);
                    var c = e.options.yearRange;
                    if (c === "any") f = '<select class="' + this._monthYearClass + " " + this._anyYearClass + '" title="' + e.options.yearStatus + '">' + "<option>" + t + "</option></select>" + '<input class="' + this._monthYearClass + " " + this._curMonthClass + r + '" value="' + t + '">';
                    else {
                        c = c.split(":");
                        var h = n.today().getFullYear(),
                            p = c[0].match("c[+-].*") ? t + parseInt(c[0].substring(1), 10) : (c[0].match("[+-].*") ? h : 0) + parseInt(c[0], 10),
                            d = c[1].match("c[+-].*") ? t + parseInt(c[1].substring(1), 10) : (c[1].match("[+-].*") ? h : 0) + parseInt(c[1], 10);
                        f = '<select class="' + this._monthYearClass + '" title="' + e.options.yearStatus + '">', p = n.add(n.newDate(p + 1, 1, 1), -1, "d"), d = n.newDate(d, 1, 1);
                        var v = function(e, n) {
                            e !== 0 && (f += '<option value="' + r + "/" + e + '"' + (t === e ? ' selected="selected"' : "") + ">" + (n || e) + "</option>")
                        };
                        if (p.getTime() < d.getTime()) {
                            p = (i && i.getTime() > p.getTime() ? i : p).getFullYear(), d = (s && s.getTime() < d.getTime() ? s : d).getFullYear();
                            var m = Math.floor((d - p) / 2);
                            (!i || i.getFullYear() < p) && v(p - m, e.options.earlierText);
                            for (var g = p; g <= d; g++) v(g);
                            (!s || s.getFullYear() > d) && v(d + m, e.options.laterText)
                        } else {
                            p = (s && s.getTime() < p.getTime() ? s : p).getFullYear(), d = (i && i.getTime() > d.getTime() ? i : d).getFullYear();
                            var m = Math.floor((p - d) / 2);
                            (!s || s.getFullYear() > p) && v(p + m, e.options.earlierText);
                            for (var g = p; g >= d; g--) v(g);
                            (!i || i.getFullYear() < d) && v(d - m, e.options.laterText)
                        }
                        f += "</select>"
                    }
                    return a = a.replace(/\\x2F/, f), a
                },
                _prepare: function(e, t) {
                    var n = function(t, n) {
                        for (;;) {
                            var r = e.indexOf("{" + t + ":start}");
                            if (r === -1) return;
                            var i = e.substring(r).indexOf("{" + t + ":end}");
                            i > -1 && (e = e.substring(0, r) + (n ? e.substr(r + t.length + 8, i - t.length - 8) : "") + e.substring(r + i + t.length + 6))
                        }
                    };
                    n("inline", t.inline), n("popup", !t.inline);
                    var r = /\{l10n:([^\}]+)\}/,
                        i = null;
                    while (i = r.exec(e)) e = e.replace(i[0], t.options[i[1]]);
                    return e
                }
            });
            var n = e.datepick;
            e(function() {
                e(document).on("mousedown." + t, n._checkExternalClick).on("resize." + t, function() {
                    n.hide(n.curInst)
                })
            })
        }(jQuery), define("jquery.datepick", ["jquery", "jquery.plugin"], function() {}), require.config({
            waitSeconds: 0,
            baseUrl: "/js/app/",
            paths: {
                underscore: "../lib/underscore",
                backbone: "../lib/backbone",
                jquery: "../lib/jquery",
                text: "../lib/text",
                slick: "../lib/slick",
                "jquery.imagesloaded": "../lib/imagesloaded.min",
                "jquery.touchwipe": "../lib/jquery.touchwipe",
                "jquery.panzoom": "../lib/jquery.panzoom",
                "jquery.plugin": "../lib/jquery.plugin.min",
                "jquery.datepick": "../lib/jquery.datepick.min"
            },
            shim: {
                underscore: {
                    exports: "_"
                },
                backbone: {
                    deps: ["jquery", "underscore"],
                    exports: "Backbone"
                },
                slick: {
                    deps: ["jquery"]
                },
                "jquery.touchwipe": {
                    deps: ["jquery"]
                },
                "jquery.panzoom": {
                    deps: ["jquery"]
                },
                "jquery.plugin": {
                    deps: ["jquery"]
                },
                "jquery.datepick": {
                    deps: ["jquery", "jquery.plugin"]
                }
            },
            urlArgs: "bust=" + (new Date).getTime()
        });
    var Born = function(e) {
        return e
    }(Born || {});
    window.Born = Born, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (Born.mobile = !0, $("body").addClass("mobile"));
    var ff;
    window.WURFL && window.WURFL.form_factor ? ff = window.WURFL.form_factor : Born.mobile ? ff = "Smartphone" : ff = "Desktop", ff === "Smartphone" || ff === "Feature Phone" || ff === "Other Mobile" ? Born.Device = "phone" : ff === "Tablet" ? Born.Device = "tablet" : Born.Device = "desktop", Born.guid = function() {
        function e() {
            return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
        }
        return function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(), Born.Breakpoints = {}, Born.Breakpoints.mobile = 767, Born.Breakpoints.tablet = 1024, Born.Breakpoints.desktop = 1150, require(["underscore", "backbone", "jquery", "slick", "jquery.imagesloaded", "jquery.touchwipe", "jquery.panzoom", "jquery.plugin", "jquery.datepick"], function() {
        require(["router"])
    }), define("../main", function() {}), define("router", ["jquery"], function(e) {
        var t;
        t = e("#page-name"), e(document).ready(function() {
            require(["pages/global"]), e(".pt_product-search-result")[0] ? require(["pages/listing"]) : e(".pt_product-details")[0] ? (require(["pages/detail"]), require(["pages/store"])) : e(".pt_store-locator")[0] ? require(["pages/store"]) : e("#oc")[0] ? (require(["pages/homepage"]), require(["pages/store"])) : e(".about-us-wrapper")[0] ? require(["pages/aboutus"]) : e(".pt_product-search-noresult")[0] ? require(["pages/no-results"]) : e(".pt_customer-service")[0] ? require(["pages/customer-service"]) : e(".pt_cart")[0] ? require(["pages/wish-list"]) : e(".pt_account")[0] ? require(["pages/account"]) : e(".pt_wish-list")[0] ? require(["pages/wish-list"]) : e(".pt_checkout")[0] && require(["pages/checkout"])
        })
    }), define("text", ["module"], function(e) {
        "use strict";
        var t, n, r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            i = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            s = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            o = typeof location != "undefined" && location.href,
            u = o && location.protocol && location.protocol.replace(/\:/, ""),
            a = o && location.hostname,
            f = o && (location.port || undefined),
            l = [],
            c = e.config && e.config() || {};
        t = {
            version: "2.0.3",
            strip: function(e) {
                if (e) {
                    e = e.replace(i, "");
                    var t = e.match(s);
                    t && (e = t[1])
                } else e = "";
                return e
            },
            jsEscape: function(e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: c.createXhr || function() {
                var e, t, n;
                if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
                if (typeof ActiveXObject != "undefined")
                    for (t = 0; t < 3; t += 1) {
                        n = r[t];
                        try {
                            e = new ActiveXObject(n)
                        } catch (i) {}
                        if (e) {
                            r = [n];
                            break
                        }
                    }
                return e
            },
            parseName: function(e) {
                var t = !1,
                    n = e.indexOf("."),
                    r = e.substring(0, n),
                    i = e.substring(n + 1, e.length);
                return n = i.indexOf("!"), n !== -1 && (t = i.substring(n + 1, i.length), t = t === "strip", i = i.substring(0, n)), {
                    moduleName: r,
                    ext: i,
                    strip: t
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function(e, n, r, i) {
                var s, o, u, a = t.xdRegExp.exec(e);
                return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || u === i)) : !0
            },
            finishLoad: function(e, n, r, i) {
                r = n ? t.strip(r) : r, c.isBuild && (l[e] = r), i(r)
            },
            load: function(e, n, r, i) {
                if (i.isBuild && !i.inlineText) {
                    r();
                    return
                }
                c.isBuild = i.isBuild;
                var s = t.parseName(e),
                    l = s.moduleName + "." + s.ext,
                    h = n.toUrl(l),
                    p = c.useXhr || t.useXhr;
                !o || p(h, u, a, f) ? t.get(h, function(n) {
                    t.finishLoad(e, s.strip, n, r)
                }, function(e) {
                    r.error && r.error(e)
                }) : n([l], function(e) {
                    t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
                })
            },
            write: function(e, n, r, i) {
                if (l.hasOwnProperty(n)) {
                    var s = t.jsEscape(l[n]);
                    r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
                }
            },
            writeFile: function(e, n, r, i, s) {
                var o = t.parseName(n),
                    u = o.moduleName + "." + o.ext,
                    a = r.toUrl(o.moduleName + "." + o.ext) + ".js";
                t.load(u, r, function(n) {
                    var r = function(e) {
                        return i(a, e)
                    };
                    r.asModule = function(e, t) {
                        return i.asModule(e, a, t)
                    }, t.write(e, u, r, s)
                }, s)
            }
        };
        if (c.env === "node" || !c.env && typeof process != "undefined" && process.versions && !!process.versions.node) n = require.nodeRequire("fs"), t.get = function(e, t) {
            var r = n.readFileSync(e, "utf8");
            r.indexOf("﻿") === 0 && (r = r.substring(1)), t(r)
        };
        else if (c.env === "xhr" || !c.env && t.createXhr()) t.get = function(e, n, r) {
            var i = t.createXhr();
            i.open("GET", e, !0), c.onXhr && c.onXhr(i, e), i.onreadystatechange = function(t) {
                var s, o;
                i.readyState === 4 && (s = i.status, s > 399 && s < 600 ? (o = new Error(e + " HTTP status: " + s), o.xhr = i, r(o)) : n(i.responseText))
            }, i.send(null)
        };
        else if (c.env === "rhino" || !c.env && typeof Packages != "undefined" && typeof java != "undefined") t.get = function(e, t) {
            var n, r, i = "utf-8",
                s = new java.io.File(e),
                o = java.lang.System.getProperty("line.separator"),
                u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)),
                a = "";
            try {
                n = new java.lang.StringBuffer, r = u.readLine(), r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)), n.append(r);
                while ((r = u.readLine()) !== null) n.append(o), n.append(r);
                a = String(n.toString())
            } finally {
                u.close()
            }
            t(a)
        };
        return t
    }), define("text!templates/modal/modal.html", [], function() {
        return '<div class="content">\n  <!-- Dynamically Insert Content Here -->\n  <%= data.content %>\n  <button class=\'close\'></button>\n  <ul class="zoom-buttons">\n	<li class="plus"></li>\n	<li class="minus"></li>\n  </ul>\n</div>\n<div class="overlay"></div>'
    }), define("views/image-zoom", ["jquery", "underscore", "backbone"], function(e, t, n) {
        var r = function(e, t) {
                var n = 0,
                    r = 0;
                return n = t.x - e.x, n *= n, r = t.y - e.y, r *= r, {
                    x: Math.sqrt(n),
                    y: Math.sqrt(r)
                }
            },
            i = n.View.extend({
                initialize: function(e) {
                    this.parent = e.parent, this.$image = this.$el.find(".primary-image").css("max-width", "none").hide();
                    var n = this.$image.data("highres").url;
                    this.$image.attr("src", n), console.log(this.$image), this.$container = this.$image.parent(), this.pos = {}, this.$el.imagesLoaded(t.bind(this.imagesLoaded, this))
                },
                imagesLoaded: function() {
                    this.resize(), this.count = 0, this.$image.fadeIn(), this.$image.panzoom(), this.$image.panzoom("option", {
                        increment: 1,
                        contain: "invert",
                        cursor: "move",
                        disablePan: !1,
                        minScale: 1,
                        maxScale: 3,
                        duration: 1e3,
                        startTransform: "0 0"
                    }), this.$image.panzoom("reset"), this.$image.css({
                        transform: "",
                        "transform-origin": ""
                    })
                },
                resize: function() {
                    this.width = this.$image.data("initwidth"), this.height = this.$image.data("initheight"), this.minWidth = this.$container.width(), this.$container.height(this.$el.height()), e(window).width() < Born.Breakpoints.mobile && this.centerImage(), this.animate(0)
                },
                update: function() {
                    this.zoomed = !0;
                    if (this.width < this.minWidth || this.height < this.minHeight) {
                        this.reset();
                        return
                    }
                    if (this.width > this.maxWidth || this.height > this.maxHeight) {
                        this.reset(1);
                        return
                    }
                    this.animate()
                },
                zoomIn: function() {
                    this.$image.panzoom("zoom"), this.$image.panzoom("option", {
                        cursor: "move",
                        disablePan: !1
                    }), this.count += 1
                },
                centerImage: function() {
                    this.pos.y = -(this.height / 2) + this.$container.height() / 2, this.pos.x = -(this.width / 2) + this.$container.width() / 2
                },
                preservePosition: function() {
                    console.log("here")
                },
                zoomOut: function() {
                    if (this.count <= 0) {
                        this.$image.panzoom("reset"), this.$image.panzoom("option", {
                            cursor: "initial"
                        });
                        return
                    }
                    this.count -= 1, this.$image.panzoom("zoom", !0), this.count === 0 && (console.log("back to the start"), this.$image.css("transform", "matrix(1, 0, 0, 1, 0, 0"))
                },
                animate: function(t) {
                    var n;
                    e(window).width() > Born.Breakpoints.mobile ? n = {
                        width: this.width,
                        height: this.height,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: "auto"
                    } : n = {
                        width: this.width,
                        height: this.height,
                        top: this.pos.y,
                        left: this.pos.x
                    }, t === 0 ? this.$image.css(n) : this.$image.animate(n, {
                        duration: t || 300
                    })
                },
                checkBounds: function(e) {
                    return e.x - this.$container.width() < -this.$image.width() ? e.x = -this.$image.width() + this.$container.width() : e.x > 0 && (e.x = 0), e.y - this.$container.height() < -this.$image.height() ? e.y = this.$container.height() - this.$image.height() : e.y > 0 && (e.y = 0), e
                },
                destroy: function() {
                    this.undelegateEvents()
                },
                events: {
                    "click .plus": "zoomIn",
                    "click .minus": "zoomOut",
                    "touchstart .product-primary-image": function(e) {}
                }
            });
        return i
    }), define("views/image-zoom-alt", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r, i = n.View.extend({
            initialize: function(e) {
                this.parent = e.parent, this.tappedCounter = 0, this.tappedAction = "zoomIn", this.currentScale = 1, this.zoomScale = 1, this.zoomMinScale = 1, this.zoomMaxScale = 3, this.loadImages()
            },
            loadImages: function() {
                var e = this;
                this.zoom = this.$el.find(".list-items .item a").panzoom({
                    $zoomIn: e.$el.find(".zoom-buttons .plus"),
                    $zoomOut: e.$el.find(".zoom-buttons .minus"),
                    contain: !0,
                    startTransform: "scale(1)",
                    onStart: function(t, n, r) {
                        e.zoom.panzoom("resetDimensions")
                    },
                    onEnd: function(e, t, n, r) {},
                    onChange: function(t, n, r) {
                        e.currentScale = Math.ceil(r[0]), e.currentScale >= 2 ? e.tappedAction = "zoomOut" : e.tappedAction = "zoomIn"
                    },
                    onZoom: function(e, t, n) {}
                }).panzoom("zoom", !0).panzoom("option", {
                    minScale: e.zoomMinScale,
                    maxScale: e.zoomMaxScale,
                    increment: Born.mobile ? 2 : 1,
                    cursor: "move",
                    contain: "invert",
                    duration: 200,
                    silent: !0,
                    startTransform: "scale(1)"
                })
            },
            zoomIn: function() {},
            zoomOut: function() {},
            zoomReset: function() {
                this.zoom.panzoom("reset", {
                    animate: !1
                })
            },
            destroy: function() {
                this.undelegateEvents(), this.zoom.panzoom("destroy")
            },
            events: {
                "click .list-items .item a": function(e) {
                    e.preventDefault()
                },
                "click .slick-arrow": function(e) {
                    this.zoomReset(), this.currentScale = this.zoomScale, this.tappedCounter = 0, this.tappedAction = "zoomIn"
                },
                "click .plus": "zoomIn",
                "click .minus": "zoomOut",
                "click .close": "destroy",
                "touchmove .list-items .item a": function(e) {
                    e.originalEvent.touches.length === 2
                },
                "touchend .list-items .item a": function(t) {
                    t.touches.length === 0 && (r ? (clearTimeout(r), r = null, e(window).width() < Born.Breakpoints.tablet - 1 && (this.tappedAction == "zoomIn" ? (this.zoom.panzoom("zoom"), this.tappedAction = "zoomOut") : (this.zoom.panzoom("zoom", !0), this.tappedAction = "zoomIn"))) : r = setTimeout(function() {
                        r = null
                    }, 300))
                }
            }
        });
        return i
    }), define("views/youtube-video", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = n.View.extend({
            initialize: function() {
                console.log("initialize youtube view"), this.loadYoutubeApi()
            },
            loadYoutubeApi: function() {
                var t = this,
                    n = window.Born.guid(),
                    r = this.$el.find("iframe"),
                    i = r.attr("src").split("/").pop(),
                    s = e("<div>");
                s.attr("id", n), s.insertBefore(r).attr("id", n), r.remove(), this.player = new YT.Player(n, {
                    height: "100%",
                    width: "100%",
                    videoId: i,
                    playerVars: {
                        autoplay: 0,
                        autohide: 2,
                        controls: 1
                    },
                    events: {
                        onStateChange: function(e) {
                            switch (e.data) {
                                case 0:
                                    t.videoOver();
                                    break;
                                case 2:
                                    t.toggleVideo()
                            }
                        }
                    }
                })
            },
            pauseVideo: function() {
                this.player && this.player.pauseVideo && this.player.pauseVideo()
            },
            playVideo: function() {
                this.player && this.player.playVideo && this.player.playVideo()
            }
        });
        return r
    }), define("views/pdp-media", ["jquery", "underscore", "backbone", "views/image-zoom", "views/image-zoom-alt", "views/youtube-video"], function(e, t, n, r, i, s) {
        var o = function(t) {
                var n = e.Deferred(),
                    r;
                return r = e("<img/>"), r.load(n.resolve), r.error(n.reject), r[0].src = t, n.promise()
            },
            u = n.View.extend({
                initialize: function(t) {
                    t = t || {}, this.parent = t.parent, this.arrows = t.arrows, this.loadImages(this.$el.find(".thumb")), this.render();
                    var n = this;
                    this.$ul = this.$el.find(".product-thumbnails ul"), this.$ul.find(".productthumbnail").off("updateMainImg").on("updateMainImg", function() {
                        var t = e(this).closest(".thumb").index();
                        n.goto(t)
                    }), console.log("initialize product media gallery"), !this.$ul.hasClass("slick-initialized") && e(window).width() > Born.Breakpoints.mobile && !this.$el.parent().hasClass("zoom") && this.$ul.slick({
                        infinite: !1,
                        speed: 300,
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        vertical: !0,
                        verticalSwiping: !0
                    }), this.$el.parent().hasClass("zoom") && (this.izv = new r({
                        el: this.$el,
                        parent: this
                    }), setTimeout(function() {
                        n.goto(n.idx)
                    }, 500)), this.$el.parent().hasClass("zoom-alt") && (this.izav = new i({
                        el: this.$el,
                        parent: this
                    }));
                    if (e(window).width() < Born.Breakpoints.mobile && !this.$el.parent().hasClass("zoom")) {
                        var n = this;
                        this.$el.touchwipe({
                            wipeLeft: function() {
                                n.next(), n.izav.zoomReset()
                            },
                            wipeRight: function() {
                                n.prev(), n.izav.zoomReset()
                            },
                            preventDefaultEvents: !1
                        })
                    }
                    e(document).on("pdpVideo", function() {
                        var t = e(".videothumb").data("video"),
                            n = t.url;
                        console.log(n), n.match(/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/) ? (this.$wrapper = e('<div class="youtube-video thumb-video">'), this.$video = e('<iframe width="100%" height="100%" src="' + n + '" frameborder="0">'), this.$wrapper.append(this.$video), this.$wrapper.css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }), e("#pdpMain .primary-image").addClass("hide"), e("#pdpMain .primary-image").parent().append(this.$wrapper)) : n.match(/player\.vimeo\.com\/video\/([0-9]*)/) && (this.$wrapper = e('<div class="vimeo-video thumb-video">'), this.$video = e('<iframe width="100%" height="100%" src="' + n + '?api=1&player_id=player1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>'), this.$wrapper.append(this.$video), this.$wrapper.css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }), e("#pdpMain .primary-image").addClass("hide"), e("#pdpMain .primary-image").parent().append(this.$wrapper));
                        var r = [];
                        e(".youtube-video") ? window.onYouTubeIframeAPIReady = function() {
                            e(".youtube-video.thumb-video").each(function() {
                                var t = new s({
                                    el: e(this)
                                });
                                r.push(t)
                            })
                        } : e(".vimeo-video")
                    })
                },
                loadImages: function(t) {
                    var n = [];
                    t.each(function() {
                        var t;
                        e(this).find("img").data("lgimg") ? t = e(this).find("img").data("lgimg").url : e(this).find("img").data("video") ? t = e(this).find("img").data("video").src : t = e(this).find("img").attr("src");
                        var r = new Image;
                        r.src = t, n.push(r)
                    })
                },
                render: function() {
                    this.$el.addClass("loaded"), this.$thumbnails = this.$el.find("#thumbnails"), this.total = this.$thumbnails.find("ul").data("mobile-thumb"), this.idx = this.$thumbnails.find(".selected").index(), this.$mainImage = this.$el.find(".primary-image"), this.$wrapper = this.$mainImage.parent();
                    var t = [];
                    this.$el.find("#thumbnails img").each(function() {
                        e(this).data("video") ? t.push(e(this).data("video")) : t.push(e(this).data("lgimg"))
                    }), this.imageData = t, this.$pagination = e('<div class="image-pagination">'), this.$current = e('<span class="curr">').html(this.idx + 1), this.$total = e('<span class="total">').html(" of " + this.total), this.$el.find(".zoom-pagination .numerator").html(this.idx + 1), this.$el.find(".zoom-pagination .denominator").html(this.total), this.$pagination.append(this.$current).append(this.$total), this.$wrapper.append(this.$pagination), this.$thumbnails.find("img").length > 1 && this.buildArrows()
                },
                update: function() {
                    this.$thumbnails.find(".selected").removeClass("selected"), e(this.$thumbnails.find(".thumb")[this.idx]).addClass("selected"), this.$el.find(".image-pagination .curr").html(this.idx + 1), this.$el.find(".zoom-pagination .numerator").html(this.idx + 1), this.arrows && (this.$arrows.children().removeClass("disabled"), this.idx === 0 && this.$arrows.find(".prev").addClass("disabled"), this.idx === this.imageData.length - 1 && this.$arrows.find(".next").addClass("disabled"))
                },
                next: function() {
                    this.idx < this.imageData.length - 1 && this.goto(this.idx + 1, "right")
                },
                prev: function() {
                    this.idx > 0 && this.goto(this.idx - 1, "left")
                },
                "goto": function(n) {
                    this.idx = n;
                    var r = this,
                        i = this.$mainImage.position().left,
                        o = this.$mainImage.position().top,
                        u = this.imageData[this.idx];
                    if (!!u) {
                        this.$ul.hasClass("slick-initialized") && setTimeout(function() {
                            this.$ul.slick("slickGoTo", this.idx)
                        }.bind(this), 0);
                        if (u.video) {
                            u.url.match(/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/) ? (this.$wrapper = e('<div class="youtube-video thumb-video">'), this.$video = e('<iframe width="100%" height="100%" src="' + u.url + '" frameborder="0">'), this.$wrapper.append(this.$video), this.$wrapper.css({
                                position: "absolute",
                                top: o,
                                left: i,
                                width: "100%",
                                height: "100%"
                            }), this.$mainImage.addClass("hide"), this.$mainImage.parent().append(this.$wrapper)) : u.url.match(/player\.vimeo\.com\/video\/([0-9]*)/) && (this.$wrapper = e('<div class="vimeo-video thumb-video">'), this.$video = e('<iframe width="100%" height="100%" src="' + u.url + '?api=1&player_id=player1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>'), this.$wrapper.append(this.$video), this.$el.parent().hasClass("zoom") ? this.$wrapper.css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }) : this.$wrapper.css({
                                position: "absolute",
                                top: o,
                                left: i,
                                width: "100%",
                                height: "100%"
                            }), this.$mainImage.addClass("hide"), this.$mainImage.parent().append(this.$wrapper)), this.$el.parent().hasClass("zoom") && e(".zoom-buttons").addClass("hide");
                            var a = [];
                            e(".youtube-video") ? window.onYouTubeIframeAPIReady = function() {
                                e(".youtube-video.thumb-video").each(function() {
                                    var t = new s({
                                        el: e(this)
                                    });
                                    a.push(t)
                                })
                            } : e(".vimeo-video")
                        } else {
                            this.$mainImage.find(".thumb-video") && (e(".thumb-video").remove(), this.$el.parent().hasClass("zoom") && e(".zoom-buttons").removeClass("hide"), this.$mainImage.removeClass("hide"));
                            var f = this.$mainImage.clone().addClass("clone");
                            f.css({
                                top: o,
                                left: i
                            }), this.$mainImage.parent().append(f), this.$mainImage.addClass("hide"), this.$mainImage.attr({
                                title: u.title,
                                alt: u.alt,
                                src: u.url
                            }), e(window).width() > Born.Breakpoints.mobile ? (f.addClass("fadeOut"), setTimeout(function() {
                                f.remove()
                            }, 500), setTimeout(t.bind(function() {
                                this.$mainImage.addClass("fadeIn"), r.$el.imagesLoaded(function() {
                                    r.$mainImage.removeClass("hide").removeClass("fadeIn")
                                })
                            }, this), 0)) : (setTimeout(function() {
                                f.remove()
                            }, 500), r.$mainImage.removeClass("hide"))
                        }
                        this.update()
                    }
                },
                buildArrows: function() {
                    var t = e('<div class="arrows">');
                    t.append(e("<div class='prev'>")), t.append(e("<div class='next'>")), this.$el.append(t), this.$arrows = t, this.idx === 0 && this.$arrows.find(".prev").addClass("disabled"), this.idx === this.imageData.length - 1 && this.$arrows.find(".next").addClass("disabled")
                },
                events: {
                    "click .next": "next",
                    "click .prev": "prev"
                }
            });
        return u
    }), define("views/appointment-map", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = n.View.extend({
            initialize: function(e) {
                console.log("new appointment map"), e = e || {}, this.lat = e.lat, this.lng = e.lng, this.markers = [], this.render()
            },
            render: function() {
                var e = this,
                    t = [{
                        featureType: "all",
                        elementType: "all",
                        stylers: [{
                            saturation: -100
                        }]
                    }];
                this.map = new google.maps.Map(this.$el.get(0), {
                    center: {
                        lat: e.lat,
                        lng: e.lng
                    },
                    zoom: 15,
                    scrollwheel: !1,
                    panControl: !1,
                    zoomControl: !1,
                    streetViewControl: !1,
                    draggable: !1,
                    mapTypeControlOptions: {
                        mapTypeIds: ["grayscale"]
                    }
                });
                var n = new google.maps.StyledMapType(t, {
                    name: "Design Within Reach"
                });
                this.map.mapTypes.set("grayscale", n), this.map.setMapTypeId("grayscale"), this.addMarker(this.map, e.lat, e.lng), google.maps.event.addDomListener(window, "resize", function() {
                    var t = e.map.getCenter();
                    google.maps.event.trigger(e.map, "resize"), e.map.setCenter(t)
                })
            },
            addMarker: function(e, t, n) {
                var r = this,
                    i = new google.maps.Marker({
                        position: new google.maps.LatLng(t, n),
                        title: "Design Within Reach",
                        map: e,
                        icon: {
                            url: Urls.googleMapMarkerIcon,
                            scaledSize: new google.maps.Size(40, 40)
                        }
                    });
                this.markers.push(i)
            },
            changeMarker: function(e, t) {
                var n = new google.maps.LatLng(e, t);
                this.markers[0].setPosition(n), this.map.panTo(n)
            }
        });
        return r
    }), define("views/appointment", ["jquery", "underscore", "backbone", "views/appointment-map"], function(e, t, n, r) {
        "use strict";
        var i = n.View.extend({
            initialize: function(t) {
                console.log("initialize appointment map view");
                var n = this;
                this.loader = null, this.userLat = 0, this.userLng = 0, this.stepsNav = e(".steps-nav"), this.dwrStores = e(".dwr-stores"), this.stepsContainer = e(".steps-container"), this.selectedStore = null, this.selectedTimeSlot = null, this.selectedStoreID = t.storeId || !1, this.currentDate = null, this.formActionURL = null, this.getLocation(), this.scrollableStores(), this.setCurrentDate(new Date), this.buildMap(), this.setCurrentStore(), e(window).on("resize", function(e) {
                    n.scrollableStores()
                })
            },
            getLocation: function() {
                var e = this;
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(t) {
                    e.userLat = t.coords.latitude, e.userLng = t.coords.longitude, e.distanceStores()
                }, function(e) {
                    switch (e.code) {
                        case e.PERMISSION_DENIED:
                            console.log("User denied the request for Geolocation.");
                            break;
                        case e.POSITION_UNAVAILABLE:
                            console.log("Location information is unavailable.");
                            break;
                        case e.TIMEOUT:
                            console.log("The request to get user location timed out.");
                            break;
                        case e.UNKNOWN_ERROR:
                            console.log("An unknown error occurred.")
                    }
                }) : alert("Geolocation is not supported by this browser.")
            },
            distanceStores: function() {
                var t = this;
                this.dwrStores.find(".store-info").each(function() {
                    var n = e(this),
                        r = t.distance(t.userLat, t.userLng, n.data("lat"), n.data("lng"), "M");
                    n.find(".digit").html(r.toFixed(1))
                })
            },
            scrollableStores: function() {
                e(".dwr-stores-wrapper").height(e(".appointment-form .content").height() - (Born.mobile ? 375 : 175)), Born.mobile || e("#store-map").height(e(".appointment-form .content").height() - 175)
            },
            buildMap: function() {
                this.selectedStore = this.dwrStores.find(".store-info.active"), this.appointmentMap = new r({
                    el: e("#store-map"),
                    lat: this.selectedStore.data("lat"),
                    lng: this.selectedStore.data("lng")
                })
            },
            setCurrentStore: function() {
                var t = this;
                if (this.selectedStoreID) {
                    var n = e("#store-info-" + this.selectedStoreID),
                        r = jQuery.Event("click");
                    r.currentTarget = n.get(0), this.changeMap(r), e(".dwr-stores-wrapper").animate({
                        scrollTop: n.position().top
                    }, 2e3)
                }
            },
            changeMap: function(t) {
                this.selectedStore = e(t.currentTarget), this.dwrStores.find(".store-info.active").removeClass("active"), this.selectedStore.addClass("active"), this.appointmentMap.changeMarker(this.selectedStore.data("lat"), this.selectedStore.data("lng"))
            },
            setCurrentDate: function(t) {
                this.currentDate = t, e(".current-date-today").text(e.datepick.formatDate("DD, MM d", t) + this.daySuffix(e.datepick.formatDate("d", t)))
            },
            newAppointmentTime: function(t) {
                this.selectedStore = e(t.currentTarget).parent(), e("#appointment-datepicker").datepick("destroy"), this.stepsNav.find(".step-nav-2").removeClass("disabled").click(), this.buildCalendar()
            },
            changeStep: function(t) {
                var n = e(t.currentTarget),
                    r = n.index();
                if (!n.hasClass("disabled")) {
                    this.stepsNav.find(".step-nav.active").removeClass("active"), this.stepsContainer.find(".step-block.active").removeClass("active"), n.addClass("active"), this.stepsContainer.find(".step-block:eq(" + r + ")").addClass("active"), n.trigger("stepactivated", n);
                    switch (r) {
                        case 0:
                            this.stepsNav.find(".step-nav:eq(1)").addClass("disabled"), this.stepsNav.find(".step-nav:eq(2)").addClass("disabled");
                            break;
                        case 1:
                            this.stepsNav.find(".step-nav:eq(2)").addClass("disabled")
                    }
                }
            },
            buildCalendar: function() {
                var t = this,
                    n = 0,
                    r = e("#appointment-datepicker").datepick({
                        renderer: e.extend({}, e.datepick.defaultRenderer, {}),
                        defaultDate: new Date,
                        selectDefaultDate: !0,
                        changeMonth: !1,
                        minDate: new Date,
                        prevText: '<i class="fa fa-angle-left"></i>',
                        todayText: "",
                        nextText: '<i class="fa fa-angle-right"></i>',
                        onSelect: function(e) {
                            t.setCurrentDate(e[0]), t.listTimeSlots(e[0])
                        },
                        onDate: function(t, n) {
                            return n ? {
                                content: "<sub>" + e.datepick.formatDate("DD, ", t).substr(0, 2) + "</sub>" + t.getDate(),
                                dateClass: "showDoY"
                            } : {}
                        },
                        onShow: e.datepick.multipleEvents(function(t, n) {
                            t.css("width", ""), t.find("td").each(function() {
                                var t = e(this);
                                t.children("a").length > 0 && t.addClass("datepick-selectable")
                            })
                        }, function(e, n) {
                            t.buildCalendarMobile(e)
                        })
                    });
                r.datepick("setDate", new Date)
            },
            getCalendarWidth: function(t, n) {
                e(n).hasClass("step-nav-2") && (this.datepickerMobileWidth = e("#appointment-datepicker-mobile").data("marginLeft", "0").width())
            },
            prevNextDay: function(t) {
                var n = e(t.currentTarget),
                    r = e("#appointment-datepicker"),
                    i = new Date(r.datepick("getDate"));
                if (n.hasClass("current-date-cmd-yesterday")) return i.setDate(i.getDate() - 1), r.datepick("setDate", i), !1;
                if (n.hasClass("current-date-cmd-tomorrow")) return i.setDate(i.getDate() + 1), r.datepick("setDate", i), !1
            },
            buildCalendarMobile: function(t) {
                var n = this,
                    r = e("<div />"),
                    i = e("<div />"),
                    s = t.find(".datepick-cmd-prev").clone(),
                    o = t.find(".datepick-cmd-next").clone(),
                    u = e("<span />"),
                    a = e("<div />"),
                    f = e("<ul />"),
                    l = e("<div />"),
                    c = s.clone().removeClass("datepick-cmd-prev"),
                    h = o.clone().removeClass("datepick-cmd-next");
                s.click(function() {
                    t.find(".datepick-cmd-prev").click()
                }), o.click(function() {
                    t.find(".datepick-cmd-next").click()
                }), u.html(t.find(".datepick-month-header").text()).addClass("datepick-month-header").click(function() {
                    t.find(".datepick-cmd-today").click()
                }), i.addClass("datepick-nav-mobile"), i.append(s).append(u).append(o), r.addClass("datepick-mobile").append(i), f.addClass("table"), f.css("marginLeft", e("#appointment-datepicker-mobile").data("marginLeft")), t.find("table tr td").each(function(t, n) {
                    var r = e(this);
                    if (!r.children().hasClass("datepick-other-month")) {
                        var i = e("<li />"),
                            s = r.children().clone();
                        s.click(function() {
                            r.children().click(), e("#appointment-datepicker-mobile").data("marginLeft", f.css("marginLeft"))
                        }), i.html(s), f.append(i)
                    }
                }), a.addClass("datepick-month").append(f), r.append(a), l.addClass("datepick-slider-nav"), c.addClass("datepick-slide-left"), h.addClass("datepick-slide-right"), l.append(c).append(h), r.append(l), e("#appointment-datepicker-mobile").html(r), this.datepickerMobileSilder()
            },
            datepickerMobileSilder: function() {
                var t = this,
                    n = e(".datepick-mobile"),
                    r = n.find(".datepick-cmd-prev"),
                    i = n.find(".datepick-cmd-next"),
                    s = n.find(".table"),
                    o = s.find("li"),
                    u = n.find(".datepick-slide-left"),
                    a = n.find(".datepick-slide-right"),
                    f = o.length,
                    l = o.outerWidth(),
                    c = Math.ceil(this.datepickerMobileWidth / l),
                    h = f * l;
                console.log("how many can fit: " + c), u.click(function(n) {
                    n.preventDefault();
                    if (s.is(":animated")) return !1;
                    parseInt(s.css("marginLeft")) < 0 ? s.animate({
                        marginLeft: "+=" + t.datepickerMobileWidth + "px"
                    }, "fast", function() {
                        e("#appointment-datepicker-mobile").data("marginLeft", s.css("marginLeft"))
                    }) : s.animate({
                        foo: 1
                    }, "fast", function() {
                        e("#appointment-datepicker-mobile").data("marginLeft", "0"), r.click()
                    })
                }), a.click(function(n) {
                    n.preventDefault();
                    if (s.is(":animated")) return !1;
                    Math.abs(parseInt(s.css("marginLeft"))) < h - t.datepickerMobileWidth ? s.animate({
                        marginLeft: "-=" + t.datepickerMobileWidth + "px"
                    }, "fast", function() {
                        e("#appointment-datepicker-mobile").data("marginLeft", s.css("marginLeft"))
                    }) : s.animate({
                        foo: 1
                    }, "fast", function() {
                        e("#appointment-datepicker-mobile").data("marginLeft", "0"), i.click()
                    })
                })
            },
            listTimeSlots: function(t) {
                var n = this;
                this.timeSlotContainer = e(".available-timeslot"), this.timeSlotsAM = this.timeSlotContainer.find(".avbl-timeslot-am"), this.timeSlotsPM = this.timeSlotContainer.find(".avbl-timeslot-pm"), this.selectedStoreID = this.selectedStore.data("store-id");
                var t = t ? new Date(t) : new Date,
                    r = this.toJSONLocal(t),
                    i = Urls.getApptAvailablity + "?date=" + r + "&storeId=" + this.selectedStoreID + "&range=daily",
                    s = this.timeSlotContainer.find(".timeslot-message"),
                    o = e("<span />").addClass("error");
                s.empty(), n.timeSlotsAM.empty(), n.timeSlotsPM.empty(), this.progress.show(e(".make-appointment .steps-container")), e.getJSON(i, function(i) {
                    n.progress.hide();
                    var u = !1;
                    i ? i[r] || (o.html("No timeslots available for today, please choose another day"), u = !0) : (o.html("Not able to load timeslots"), u = !0);
                    if (u) {
                        s.html(o);
                        return
                    }
                    i[r].length > 0 && e.each(i[r], function(r, i) {
                        var s = n.timeConvert(i) + " - " + n.timeConvert(n.timeAddHours(i, 1)),
                            o = e("<div />").addClass("timeslot").attr({
                                "data-time24": i,
                                "data-date-basic": e.datepick.formatDate("yyyy-m-d", t),
                                "data-time": s,
                                "data-date": e.datepick.formatDate("DD, MM d, yyyy", t)
                            });
                        o.html(s), s.indexOf("AM") !== -1 ? n.timeSlotsAM.append(o) : n.timeSlotsPM.append(o)
                    })
                })
            },
            selectTimeSlot: function(t) {
                this.selectedTimeSlot = e(t.currentTarget), this.timeSlotContainer.find(".timeslot.selected").removeClass("selected"), this.selectedTimeSlot.addClass("selected");
                var n = e(".chosen-date-and-time");
                n.find(".date-shown").html(this.selectedTimeSlot.data("date")), n.find(".time-shown").html(this.selectedTimeSlot.data("time") + " " + this.selectedStore.data("store-timezone")), this.stepsNav.find(".step-nav-3").removeClass("disabled").click(), this.loadForm()
            },
            loadForm: function() {
                var t = this,
                    n = e(".schedule-form-wrapper"),
                    r = n.find("form");
                this.formActionURL = r.attr("action"), e.get(this.formActionURL, function(e) {
                    n.html(e), n.find("#setster_store_id").val(t.selectedStoreID), n.find("#setster_date").val(t.selectedTimeSlot.data("date-basic")), n.find("#setster_time").val(t.selectedTimeSlot.data("time24"))
                })
            },
            scheduleAppointment: function(t) {
                t.preventDefault();
                var n = this,
                    r = e(t.currentTarget),
                    i, s, o, u;
                return i = r.attr("action"), s = r.serializeArray(), u = r.find("button"), s.push({
                    name: u.attr("name"),
                    value: u.val()
                }), o = e.param(s), e.post(i, o, function(t) {
                    var r = e(".schedule-form-wrapper");
                    r.html(t), console.log(r.find(".success-message")), r.find(".success-message").length > 0 && (n.stepsNav.find(".step-nav").addClass("disabled").removeClass("active"), r.find(".button-close").click(function() {
                        e(".close").click()
                    }))
                }), !1
            },
            distance: function(e, t, n, r, i) {
                var s = Math.PI * e / 180,
                    o = Math.PI * n / 180,
                    u = t - r,
                    a = Math.PI * u / 180,
                    f = Math.sin(s) * Math.sin(o) + Math.cos(s) * Math.cos(o) * Math.cos(a);
                return f = Math.acos(f), f = f * 180 / Math.PI, f = f * 60 * 1.1515, i == "K" && (f *= 1.609344), i == "N" && (f *= .8684), f
            },
            toJSONLocal: function(e) {
                var t = new Date(e);
                return t.setMinutes(e.getMinutes() - e.getTimezoneOffset()), t.toJSON().slice(0, 10)
            },
            timeConvert: function(e) {
                var t = e.indexOf(":"),
                    n = +e.substr(0, t),
                    r = n % 12 || 12,
                    i = n < 12 ? "AM" : "PM";
                return e = r + e.substr(t, 3) + " " + i, e
            },
            timeAddHours: function(e, t) {
                var n = e.split(":");
                return e = parseInt(n[0]) + t + ":" + n[1] + ":" + n[2], e
            },
            daySuffix: function(e) {
                var t = e % 10,
                    n = e % 100;
                return t == 1 && n != 11 ? "st" : t == 2 && n != 12 ? "nd" : t == 3 && n != 13 ? "rd" : "th"
            },
            progress: {
                show: function(t) {
                    var n = !t || e(t).length === 0 ? e("body") : e(t);
                    return this.loader = this.loader || e(".loader"), this.loader.length === 0 && (this.loader = e("<div/>").addClass("loader").append(e("<div/>").addClass("loader-indicator"), e("<div/>").addClass("loader-bg"))), this.loader.appendTo(n).show()
                },
                hide: function() {
                    this.loader && this.loader.hide()
                }
            },
            events: {
                "click .store-info": "changeMap",
                "click .store-info .store-select": "newAppointmentTime",
                "click .step-nav": "changeStep",
                "click .current-date-cmd": "prevNextDay",
                "click .available-timeslot .timeslot": "selectTimeSlot",
                stepactivated: "getCalendarWidth",
                "submit .fill-information form": "scheduleAppointment"
            }
        });
        return i
    }), define("views/ajax-form", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = n.View.extend({
            initialize: function(e) {
                e = e || {}, console.log("initialize ajax form"), this.ajaxify()
            },
            ajaxify: function() {
                var t = this.$el.find(".content"),
                    n = this.$el.find("form"),
                    r = this.$el.find(".close");
                e(document).on("submit", n.selector, function(n) {
                    n.preventDefault();
                    var i, s, o, u;
                    return i = e(this).attr("action"), s = e(this).serializeArray(), u = e(this).find("button"), s.push({
                        name: u.attr("name"),
                        value: u.val()
                    }), o = e.param(s), console.log(i), e.post(i, o, function(n) {
                        e(".error-message", n).length > 0 ? t.html(n) : (r.click(), window.location.reload())
                    }), !1
                })
            }
        });
        return r
    }), define("views/modal", ["jquery", "underscore", "backbone", "text!templates/modal/modal.html", "views/pdp-media", "views/appointment", "views/ajax-form"], function(e, t, n, r, i, s, o) {
        var u = function(e) {
                if (e.keyCode === 27) {
                    var t = window.Born.Modals.length;
                    return window.Born.Modals[t - 1].hide(), !1
                }
            },
            a = n.View.extend({
                className: "modal",
                initialize: function(t) {
                    t = t || {}, this.content = t.content, this.slickSlider = t.slickSlider || !1, this.storeId = t.storeId || !1, this.guid = window.Born.guid(), this.$body = e("body"), this.$html = e("html")
                },
                render: function() {
                    if (!this.isActive()) {
                        var e = t.template(r)({
                            data: {
                                content: this.content
                            }
                        });
                        this.$el.append(e), this.$body.append(this.$el)
                    }
                    return this
                },
                show: function(n) {
                    return t.defer(t.bind(function() {
                        if (this.busy) return;
                        var n = this;
                        this.$el.imagesLoaded().always(function() {
                            n.$el.show().addClass("active");
                            var t = e("div.overflow.modal-only"),
                                r = n.$el.find(".zoom-pagination");
                            t.on("init reInit afterChange", function(e, t, n, i) {
                                var s = (n ? n : 0) + 1;
                                r.children(".numerator").html(s), r.children(".denominator").html(t.slideCount)
                            }), t.slick({
                                infinite: !0,
                                speed: 300,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                responsive: [{
                                    breakpoint: Born.Breakpoints.mobile,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }]
                            }), !Born.mobile && n.$el.hasClass("zoom-alt") && t.slick("slickSetOption", "swipe", !1, !0);
                            var i = n.$el.find(".item.selected");
                            i.length > 0 && (t.slick("slickGoTo", i.index() - 1), i.removeClass("selected"))
                        }), window.Born.Modals = window.Born.Modals || [], window.Born.Modals.push(this), this.$body.addClass("active-modal"), this.$html.addClass("active-modal");
                        if (window.Born.Modals.length === 1) {
                            var r = window.Born.Modals.length;
                            this.$body.on("keydown.modal", u)
                        }
                        this.$el.hasClass("appointment-form") && new s({
                            el: e(".make-appointment"),
                            storeId: this.storeId
                        }), (this.$el.hasClass("zoom") || this.$el.hasClass("zoom-alt")) && new i({
                            el: e(".content"),
                            parent: this,
                            arrows: !0
                        }), this.$el.hasClass("ajax-form") && new o({
                            el: e(".modal.ajax-form")
                        }), (this.$el.find(".alert-message.success")[0] || this.$el.find(".alert-message.error")[0]) && setTimeout(t.bind(this.hide, this), 6e3)
                    }, this)), this
                },
                isActive: function() {
                    return this.$body.find(".modal").length
                },
                hide: function(e, n) {
                    e && e.preventDefault();
                    var r = this,
                        i = function() {
                            if (!n) return r.destroy(), console.log("destroying"), undefined
                        };
                    return this.$el.removeClass("active"), t.delay(t.bind(i, this), 500), window.Born.Modals.pop(), this.$body.removeClass("active-modal"), this.$html.removeClass("active-modal"), window.Born.Modals.length === 0 && this.$body.off("keydown.modal"), this
                },
                destroy: function() {
                    this.undelegateEvents(), this.$el.removeData().unbind().remove(), this.remove(), n.View.prototype.remove.call(this)
                },
                events: {
                    "click .overlay": "hide",
                    "click .close": "hide"
                }
            });
        return a
    }), define("views/store-map", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = n.View.extend({
            initialize: function() {
                console.log("new nearest store map");
                var e = this;
                this.markers = []
            },
            mapInit: function() {
                var t = this,
                    n, r;
                this.$el.hasClass("map-wrapper") ? (n = e("#modal-map").data("lat"), r = e("#modal-map").data("lng")) : (n = e("#map").data("lat"), r = e("#map").data("lng"));
                var i = !0,
                    s = [{
                        featureType: "all",
                        elementType: "all",
                        stylers: [{
                            saturation: -100
                        }]
                    }],
                    o = "map",
                    u = {
                        center: {
                            lat: n,
                            lng: r
                        },
                        zoom: 15,
                        scrollwheel: !1,
                        panControl: !1,
                        zoomControl: !1,
                        streetViewControl: !1,
                        draggable: !1,
                        mapTypeControlOptions: {
                            mapTypeIds: ["grayscale"]
                        }
                    };
                if (this.$el.hasClass("map-wrapper")) var o = "modal-map";
                this.$el.parent().hasClass("store-locator-details") && (u.scrollWheel = !0, u.panControl = !0, u.zoomControl = !0, u.draggable = !0), this.map = new google.maps.Map(document.getElementById(o), u);
                var a = new google.maps.StyledMapType(s, {
                    name: "Design Within Reach"
                });
                this.map.mapTypes.set("grayscale", a), this.map.setMapTypeId("grayscale"), this.addMarker(this.map, n, r), google.maps.event.addDomListener(window, "resize", function() {
                    var e = t.map.getCenter();
                    google.maps.event.trigger(t.map, "resize"), t.map.setCenter(e)
                })
            },
            addMarker: function(e, t, n) {
                var r = {
                        url: Urls.googleMapMarkerIcon,
                        scaledSize: new google.maps.Size(40, 40)
                    },
                    i = new google.maps.Marker({
                        position: new google.maps.LatLng(t, n),
                        title: "Design Within Reach",
                        map: e,
                        icon: r
                    });
                this.markers.push(i)
            }
        });
        return r
    }), define("views/generic-select", ["jquery", "underscore", "backbone"], function(e, t, n) {
        var r = n.View.extend({
            className: "select-widget",
            tagName: "div",
            initialize: function(e) {
                e = e || {}, this.$anchor = e.$anchor;
                if (Born.mobile) {
                    this.$anchor.before('<span class="fa fa-angle-down select-arrow"></span>');
                    return
                }
                this.hideAnchor(), this.guid = window.Born.guid();
                var t = this;
                this.$anchor.on("change.generic-select", function() {
                    t.render()
                }), this.parent = e.parent, this.render()
            },
            hideAnchor: function() {
                this.$anchor.parent().css({
                    position: "relative"
                });
                var e = this.$anchor.position();
                console.log(e), this.$anchor.css({
                    position: "absolute",
                    height: 0,
                    opacity: 0,
                    "z-index": -1,
                    margin: 0,
                    padding: 0,
                    border: 0,
                    top: e.top,
                    left: e.left
                })
            },
            render: function() {
                var n = this,
                    r;
                n.$el.empty(), this.$arrow = e('<span class="fa fa-angle-down select-arrow"></span>').appendTo(this.$el), this.$label = e('<div class="label">').appendTo(this.$el), this.$ul = e("<ul>").appendTo(this.$el);
                var i = this.$anchor.find("option:selected").index();
                this.$anchor.find("option").each(function(t) {
                    var s = e(this);
                    if (i === -1 && t === 0 || t === i) n.$label.html("<span>" + s.html() + "</span>");
                    else {
                        var o = s.attr("value");
                        r = e("<li>").html(s.html()).data("value", o), n.$ul.append(r), r.on("click", function(t) {
                            var r = e(this).data("value");
                            r ? n.$anchor.val(r) : n.$anchor.find("option").first().attr("selected", !0), n.$anchor.trigger("change")
                        })
                    }
                }), this.classnames && this.$el.removeClass(this.classnames), t.defer(t.bind(function() {
                    this.classnames = this.$anchor.attr("class"), this.$el.addClass(this.classnames)
                }, this)), this.$el.insertBefore(this.$anchor)
            },
            destroy: function() {
                console.log("destroying mana select view"), this.$el.remove()
            },
            stopListening: function() {
                console.log("stopping"), e(document).off("keydown.select-" + this.guid), this.$anchor.off("blur.select" + this.guid)
            },
            listen: function() {
                this.$anchor.focus(), this.$anchor.on("blur.select" + this.guid, t.bind(this.stopListening, this)), e(document).one("keydown.select-" + this.guid, t.bind(this.render, this))
            },
            events: {
                click: function(e) {
                    this.$el.toggleClass("active"), t.defer(t.bind(this.listen, this))
                },
                mouseleave: function(t) {
                    console.log("leaving"), e(t.currentTarget).removeClass("active")
                }
            }
        });
        return r
    }), define("pages/account", ["jquery", "underscore", "backbone", "views/modal", "views/store-map", "views/generic-select"], function(e, t, n, r, i, s) {
        "use strict";
        e(document).ready(function() {
            if (e("#map")[0]) {
                var t = new i({
                    el: e(".store-locator-details"),
                    parent: this
                });
                t.mapInit()
            }
            var n = window.location.href,
                o = e(".navgroup ul li a").filter(function() {
                    return n.includes(e(this).attr("href"))
                });
            o.parent().addClass("active");
            var u;
            e(window).width() > Born.Breakpoints.mobile && e(".content.half").each(function(t, n) {
                u && e(this).height() > u ? e(".content.half").first().height(e(this).height()) : u && e(this).height() > u && e(this).first().height(e(this).height()), u = e(this).height()
            }), e(".section-header-note.add-card").on("click", function(t) {
                t.preventDefault(), e("#CreditCardForm").addClass("active")
            }), e(".edit-personal-info").on("click", function(t) {
                e(t.currentTarget).hasClass("show-form") ? (e(t.currentTarget).removeClass("show-form"), e(t.currentTarget).addClass("bottom"), e(t.currentTarget).text("cancel"), e(".personal-information").addClass("active")) : (e(t.currentTarget).addClass("show-form"), e(t.currentTarget).removeClass("bottom"), e(".personal-information").removeClass("active"), e(t.currentTarget).text("edit personal information"))
            }), e("#dwfrm_profile_confirm").attr("flag") == "false" && e(".edit-personal-info").trigger("click"), e(".action").on("click", function(t) {
                e("#CreditCardForm").addClass("active"), e(t.currentTarget).hide()
            }), e("form#CreditCardForm").attr("flag") == "false" && e("#CreditCardForm").addClass("active"), e("form#CreditCardForm").length && e(".input-select").each(function(t, n) {
                new s({
                    $anchor: e(this)
                })
            }), e("form#edit-address-form").attr("flag") == "false" && e(".form-horizontal").addClass("active"), e("button.new-address").on("click", function(t) {
                e("form.form-horizontal").addClass("active");
                var n = e(t.currentTarget).offset().top - 150;
                e("html, body").animate({
                    scrollTop: n
                }), e(t.currentTarget).hide()
            }), e(".address-edit").click(function(t) {
                t.preventDefault();
                var n = window.location.protocol + "//" + window.location.host + e(t.currentTarget).attr("href"),
                    i = e.get(n);
                i.error(function(e) {
                    console.log("error")
                }), i.done(function(e) {
                    (new r({
                        className: "modal edit-address ajax-form",
                        content: e
                    })).render().show()
                })
            }), e(".address-delete").click(function(t) {
                t.preventDefault(), window.confirm(String.format(Resources.CONFIRM_DELETE, Resources.TITLE_ADDRESS)) && (window.location.href = e(this).attr("href"))
            })
        })
    }), define("views/left-nav-view", [], function() {
        "use strict";
        var e = Backbone.View.extend({
            initialize: function(e) {
                this.opts = e, this.$elH = this.$el.height(), this.scrollPaneH = e.scrollPaneRefEl.height() || e.left, this.maxH = e.maxHeightRefEl.height() || e.maxHeight, this.topOffset = e.topOffsetRefEl.height() || e.topOffset || 0, this.$win = $(window), this.contentHeight = this.maxH - this.scrollPaneH || this.$elH - this.scrollPaneH, this.$fixedEl = e.fixedEl, e.pushFromTop ? this.$win.off("scroll.leftNav" + this.guid).on("scroll.leftNav" + this.guid, _.bind(this.pushFromTop, this)) : this.$win.off("scroll.leftNav" + this.guid).on("scroll.leftNav" + this.guid, _.bind(this.fixedScroll, this)), this.$win.trigger("scroll")
            },
            pushFromTop: function() {
                this.maxH = this.opts.maxHeightRefEl.height(), this.scrollPaneH = this.opts.scrollPaneRefEl.height();
                var e = this.$win.width() > Born.Breakpoints.mobile && (this.opts.ignoreViewportHeight || this.scrollPaneH + this.topOffset < this.$win.height()) && this.maxH > this.scrollPaneH + 150;
                if (e) {
                    var t = this.$fixedEl.height(),
                        n = this.$win.scrollTop() + this.topOffset,
                        r = n + t,
                        i = this.$el.offset().top,
                        s = i + this.maxH;
                    n >= i && r <= s ? (this.$fixedEl.css({
                        position: "fixed",
                        top: this.topOffset
                    }), this.$fixedEl.removeClass("inactive")) : (this.$fixedEl.css({
                        position: "",
                        top: ""
                    }), r > s && this.$fixedEl.addClass("inactive"))
                }
            },
            leftNavResetVariables: function() {
                this.maxH = this.opts.maxHeightRefEl.height(), this.contentHeight = this.maxH - this.scrollPaneH
            },
            fixedScroll: function() {
                this.$win.scrollTop() >= this.contentHeight ? this.$fixedEl.addClass("inactive") : this.$fixedEl.removeClass("inactive")
            }
        });
        return e
    }), define("pages/customer-service", ["jquery", "underscore", "backbone", "views/left-nav-view"], function(e, t, n, r) {
        e(document).ready(function() {
            var t = e(".content-asset").data("assetid"),
                n = e(".cs-left-nav li a").filter(function() {
                    return e(this).data("assetid") === t
                });
            n.parent().addClass("active"), new r({
                el: e("#cust-serv-wrapper"),
                scrollPaneRefEl: e(".cs-left-nav-full"),
                maxHeightRefEl: e("#cust-serv-wrapper"),
                fixedEl: e(".cs-left-nav-full"),
                pushFromTop: !0,
                topOffsetRefEl: e(".header .top-banner")
            }), e(".search-result-items").slick({
                slidesToShow: 4,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }), define("views/sticky", [], function() {
        var e = Backbone.View.extend({
            initialize: function(e) {
                this.offset = e.offset || 0, this.clone = e.clone, this.pushFromTop = e.pushFromTop, this.refContainer = e.refContainer, this.render(), this.scroll(), $(window).on("scroll", _.throttle(_.bind(this.scroll, this), 1))
            },
            render: function() {
                if (!this.clone) return;
                this.$clone = this.$el.clone(), this.$clone.addClass("clone"), this.$el.after(this.$clone), this.scroll()
            },
            scroll: function() {
                this.st = $(window).scrollTop(), !this.pushFromTop && this.st > this.offset || this.pushFromTop && this.st + this.offset >= this.refContainer.offset().top ? (this.fixed = !0, this.$el.addClass("fixed")) : (this.fixed = !1, this.$el.removeClass("fixed"))
            }
        });
        return e
    }), define("views/pdp-tabs", [], function() {
        var e = Backbone.View.extend({
            initialize: function(e) {
                console.log("initialize pdp tabs"), this.active = !1, this.fixedNavHeight = e.fixedNavHeight || 0, this.scrollStopOffset = e.scrollStopOffset || 144, this.activeOffset = e.activeOffset || 0, this.$chapters = e.chapters, e.createNav && this.setupNav(), $(window).on("scroll." + this.guid, _.bind(this.scroll, this)), this.scroll()
            },
            setupNav: function() {
                var e = this.$el.find(".tabs-menu-list");
                this.$chapters.each(function(t) {
                    var n = document.createElement("li"),
                        r = this.parentNode;
                    n.insertAdjacentHTML("afterbegin", '<a href="#' + r.id + '">' + this.textContent + "</a>"), e.append(n)
                }), this.scroll()
            },
            scroll: function() {
                var e = this,
                    t = $(window).scrollTop() + 84 + this.activeOffset,
                    n, r, i;
                this.$chapters.each(function() {
                    i = $(this).parent().offset(), n = i.top - 84 - e.activeOffset, r = i.top + $(this).parent().outerHeight() + e.activeOffset, n < t && t < r && ($(this).parent().hasClass("active") || ($("div#tab1, div#tab2, div#tab3, div#tab4, div#tab5").removeClass("deli"), $(this).parent().addClass("deli"), e.updateChapter()))
                })
            },
            updateChapter: function() {
                var e = $("div.deli").attr("id"),
                    t;
                $(".sticky-tabs-menu:not(.clone) .sticky-wrapper li a").each(function() {
                    $(this).parent().removeClass("active");
                    var n = "#" + e;
                    $(this).attr("href") === n && (t = $(this))
                }), t && (t.parent().parent().find("li.active").removeClass("active"), t.parent().addClass("active"))
            },
            "goto": function(e) {
                console.log("go to"), e.preventDefault();
                var t = $(e.currentTarget),
                    n = t.attr("href").replace(/^.*#/g, ""),
                    r = this.$chapters.filter(function() {
                        return $(this).parent().attr("id") === n
                    }),
                    i = r.parent().offset().top - this.scrollStopOffset;
                $("html, body").animate({
                    scrollTop: i
                })
            },
            events: {
                "click .sticky-wrapper li a": "goto",
                "click .sticky-wrapper form button": function(e) {
                    e.preventDefault(), $("html, body").animate({
                        scrollTop: $("#pdpMain").offset().top - 104
                    }, 800)
                }
            }
        });
        return e
    }), define("controllers/modal", ["jquery", "underscore", "backbone", "views/modal"], function(e, t, n, r) {
        var i = {
            showLoading: function(e) {
                var t = (new r({
                    className: "modal " + e,
                    content: '<span class="loading"><div></div></span>',
                    preloader: !0
                })).render();
                return t.$el.addClass("preloader").find(".close").css("opacity", 0), t.show(), t
            },
            showLifestyle: function(t) {
                var n = e(t).clone().find(".overflow").addClass("modal-only"),
                    i = n.parent().html();
                i += '<div class="zoom-pagination"><span class="numerator"></span> of <span class="denominator"></span></div>', (new r({
                    className: "modal lifestyle",
                    content: i,
                    slickSlider: !0
                })).render().show()
            },
            showZoom: function(t) {
                var n = e(t).clone().html();
                n += '<div class="zoom-pagination"><span class="numerator"></span> of <span class="denominator"></span></div>', (new r({
                    className: "modal zoom",
                    content: n
                })).render().show()
            },
            showZoomAlt: function(t) {
                var n, i, s, o = t.find(".primary-image"),
                    u = t.find(".productthumbnail"),
                    a = t.find(".thumb.selected").index(),
                    f = e("<div />").addClass("list-items").addClass("overflow").addClass("modal-only"),
                    l = !1;
                if (o.attr("src").indexOf("MAIN?$main$") == -1 && o.attr("src").indexOf("ALT") == -1) {
                    l = !0;
                    var c = o.attr("src").replace("$main$", "wid=2000&hei=2000");
                    n = e("<img />").attr({
                        src: c,
                        alt: o.attr("alt")
                    }).addClass("product-image"), i = e("<a />").attr({
                        href: "javascript:;",
                        title: o.attr("alt")
                    }).addClass("image-link").append(n), s = e("<div />").addClass("item").addClass("selected").append(i), f.append(s)
                }
                u.each(function(t, r) {
                    var o = e(this);
                    n = e("<img />").attr({
                        src: o.data("higher-res").url,
                        alt: o.attr("alt")
                    }).addClass("product-image"), i = e("<a />").attr({
                        href: "javascript:;",
                        title: o.attr("alt")
                    }).addClass("image-link").append(n), s = e("<div />").addClass("item").append(i), t == a && !l && s.addClass("selected"), f.append(s)
                });
                var h = e("<div />").addClass("product-image-zoom").append(f),
                    p = e("<div />").append(h).html();
                p += '<div class="zoom-pagination"><span class="numerator"></span> of <span class="denominator"></span></div>', (new r({
                    className: "modal zoom-alt",
                    content: p
                })).render().show()
            },
            showSwatchForm: function(e) {
                var t = e;
                (new r({
                    className: "modal request-swatches",
                    content: t
                })).render().show()
            },
            showAppointment: function(e, t) {
                var n = e;
                (new r({
                    className: "modal appointment-form",
                    content: n,
                    storeId: t
                })).render().show()
            },
            showShippingOptions: function(e) {
                var e = '<div class="shipping-option">' + e + "</div>";
                (new r({
                    className: "modal shipping-options",
                    content: e
                })).render().show()
            },
            showBadgingDesc: function(e) {
                var e = '<div class="badging-desc">' + e + "</div>";
                (new r({
                    className: "modal badging-modal",
                    content: e
                })).render().show()
            },
            showSwatchInfo: function(e) {
                var e = '<div class="swatch-info">' + e + "</div>";
                (new r({
                    className: "modal swatch-info-modal",
                    content: e
                })).render().show()
            }
        };
        return i
    }), define("views/lifestyle", ["jquery", "underscore", "backbone", "controllers/modal"], function(e, t, n, r) {
        var i = n.View.extend({
            initialize: function(e) {
                console.log("initialize lifestyle images view")
            },
            buildLightbox: function(t) {
                t.preventDefault();
                if (!document.querySelector(".lifestyle-slider")) {
                    var n = e(t.currentTarget),
                        r = e("ul.lifestyle-images").data("images-value").split(",");
                    this.$ul = e('<div class="overflow">'), this.$wrapper = e('<div class="slide-wrapper lifestyle-slider">');
                    for (var i = 0; i < r.length; i++) $el = e("<div>"), $el.append('<img src="' + r[i] + '">'), this.$ul.append($el), this.$wrapper.append(this.$ul);
                    this.$el.append(this.$wrapper)
                }
                this.showModal()
            },
            showModal: function() {
                var t = e(".lifestyle-slider");
                r.showLifestyle(t)
            },
            events: {
                "click a": "buildLightbox"
            }
        });
        return i
    }), define("views/grid", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = function(t) {
                var n = 0,
                    r, i = t.length;
                for (r = 0; r < i; r++) e(t[r]).css("height", ""), e(t[r]).height() > n && (n = e(t[r]).height());
                for (r = 0; r < i; r++) e(t[r]).height(n + 25)
            },
            i = n.View.extend({
                initialize: function() {
                    console.log("initalize dimensions grid"), this.$items = this.$el.find("div.dimensions");
                    var n = [];
                    this.$el.find("#tab5").each(function() {
                        n.push(e(this).find("div.dimensions"))
                    }), this.$items = n, this.$items[0].length > 1 && (this.resize(), e(window).on("resize", t.bind(this.resize, this)), this.$el.imagesLoaded(t.bind(this.resize, this)))
                },
                resize: function() {
                    var e = this,
                        t = this.$el.find("#tab5").find("div.dimensions").length;
                    for (var n = 0; n < t; n++) r(this.$items)
                }
            });
        return i
    }), define("views/product-details", ["jquery", "underscore", "backbone", "views/pdp-tabs", "views/lifestyle", "views/sticky", "views/grid", "controllers/modal"], function(e, t, n, r, i, s, o, u) {
        var a, f = n.View.extend({
            initialize: function(n) {
                e("#carousel-upsell .overflow").slick({
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    adaptiveHeight: !0,
                    responsive: [{
                        breakpoint: Born.Breakpoints.mobile,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                }), e("#carousel-crosssell .overflow").slick({
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    adaptiveHeight: !0,
                    responsive: [{
                        breakpoint: Born.Breakpoints.mobile,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }]
                }), e(window).width() > Born.Breakpoints.mobile && (e("div.dimensions").length % 2 == 0 ? e("div.dimensions").length === 0 ? e("#tab5").addClass("nosections") : e("#tab5").addClass("evensections") : e("#tab5").addClass("oddsections"), new o({
                    el: e(".product-tabs")
                })), e(window).width() > Born.Breakpoints.tablet ? (new s({
                    clone: !0,
                    el: e(".tabs-menu"),
                    offset: e(".header .top-banner").height(),
                    refContainer: e(".product-tabs"),
                    pushFromTop: !0
                }), new r({
                    el: e(".tabs-menu"),
                    chapters: e("h2.chapter"),
                    fixedNavHeight: 84,
                    createNav: !0
                })) : e(".accordion .title").on("click", function(t) {
                    var n = e(t.currentTarget);
                    n.parent().toggleClass("active")
                }), new i({
                    el: e("div.lifestyle-images")
                }), e(document).off("updateSecondaryNav").on("updateSecondaryNav", t.bind(this.updateSecondaryNav, this))
            },
            updateSecondaryNav: function() {
                var t = e(".sticky-add-to-cart button");
                e(".pdpForm button").hasClass("add-to-cart-disabled") ? t.addClass("disabled") : t.removeClass("disabled");
                var n = e(".pdpForm input").attr("value");
                t.attr("value", n)
            },
            showModal: function() {
                var t = e(".product-image-container");
                u.showZoomAlt(t)
            },
            events: {
                "click .product-image.main-image > span": "showModal",
                "touchstart .top-view .product-primary-image .product-image.main-image": function(t) {
                    a ? (clearTimeout(a), a = null, e(window).width() < Born.Breakpoints.tablet - 1 && this.showModal()) : a = setTimeout(function() {
                        a = null
                    }, 300)
                },
                "click .badging a": function(t) {
                    t.preventDefault();
                    var n = e(t.currentTarget),
                        r = n.parent().find(".badging-desc").html();
                    u.showBadgingDesc(r)
                },
                "click .badging .close": function(t) {
                    var n = e(t.currentTarget);
                    n.parent().removeClass("popup")
                },
                "click .care-and-assembly .cta": function(t) {
                    t.preventDefault();
                    var n = e(t.currentTarget);
                    n.parent().toggleClass("details-open")
                },
                "click .shipping-info .cta": function(t) {
                    t.preventDefault();
                    var n = e(t.currentTarget),
                        r = n.attr("href");
                    e.get(r).done(function(e) {
                        u.showShippingOptions(e)
                    })
                },
                "click .sticky-add-to-cart button": function(t) {
                    var n = e(".pdp-main .product-detail").offset().top - e(".header .top-banner").height();
                    e("html, body").animate({
                        scrollTop: n
                    }), e(t.currentTarget).hasClass("disabled") || e(".add-to-cart").trigger("click")
                },
                "keyup input.sticky-input": function(t) {
                    var n = e(t.currentTarget).val();
                    e(".product-add-to-cart input#Quantity").attr("value", n), e(".product-add-to-cart input#Quantity").val(n)
                },
                "keyup .product-add-to-cart input#Quantity": function() {
                    var t = e(".pdpForm input").val();
                    e(".sticky-add-to-cart input").attr("value", t), e(".sticky-add-to-cart input").val(t)
                }
            }
        });
        return f
    }), define("views/video", ["jquery", "underscore", "backbone", "views/youtube-video", "controllers/modal"], function(e, t, n, r) {
        var i = n.View.extend({
            initialize: function(t) {
                var n = e('<script id="ytplayer">');
                n.attr("src", "https://www.youtube.com/iframe_api");
                var i = e("script").first();
                n.insertBefore(i);
                var s = this.$el.attr("src");
                if (s && s.match(/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/)) {
                    var o = [];
                    window.onYouTubeIframeAPIReady = function() {
                        e(".youtube-video").each(function() {
                            var t = new r({
                                el: e(this)
                            });
                            o.push(t)
                        })
                    }
                }
            }
        });
        return i
    }), define("views/product-settings", ["jquery", "underscore", "backbone", "views/pdp-media", "views/video"], function(e, t, n, r, i) {
        var s = n.View.extend({
            initialize: function(n) {
                console.log("new product core view"), e(".swatchanchor").length == 1 && !e(".swatchanchor").parent().hasClass("selected") && e("a.swatchanchor").click(), this.selectedStep = "undefined", e(document).off("pdpImageUpdate").on("pdpImageUpdate", t.bind(this.switchImage, this)), e(document).off("unselectedPreviousSteps").on("unselectedPreviousSteps", t.bind(this.unselectedPreviousSteps, this)), new i({
                    el: e(".lifestyle-video iframe")
                }), new r({
                    el: this.$el.find(".product-image-container"),
                    parent: this,
                    arrows: !0
                })
            },
            switchImage: function() {
                console.log("switchImage");
                var t = this.$el.find(".variable-image").data("newimg"),
                    n = this.$el.find(".primary-image");
                t && (n.attr("src", t).css("opacity", "0"), n.on("load", function() {
                    e(this).css("opacity", "1")
                })), new r({
                    el: this.$el.find(".product-image-container"),
                    parent: this,
                    arrows: !0
                })
            },
            unselectedPreviousSteps: function() {
                if (this.selectedStep == "undefined") return;
                this.selectedStep == "inventory" ? (e(".swatches.material").find(".selected").removeClass("selected"), e(".swatches.upholstery").find(".selected").removeClass("selected"), e(".swatches.color").find(".selected").removeClass("selected"), e(".swatches.leg").find(".selected").removeClass("selected"), e(".variation-materials.short-description, .variation-materials.full-description").hide()) : this.selectedStep == "material" || this.selectedStep == "size" ? (e(".swatches.upholstery").find(".selected").removeClass("selected"), e(".swatches.color").find(".selected").removeClass("selected"), e(".swatches.leg").find(".selected").removeClass("selected"), e(".variation-materials.short-description, .variation-materials.full-description").hide()) : this.selectedStep == "upholstery" ? (e(".swatches.color").find(".selected").removeClass("selected"), e(".swatches.leg").find(".selected").removeClass("selected")) : this.selectedStep == "color" && e(".swatches.leg").find(".selected").removeClass("selected")
            },
            stepErrorMessage: function() {
                var t = [];
                e(".product-variations > ul > li").each(function() {
                    if (!e(this).find("ul li.selected")[0]) {
                        var n = '<div class="missing-step">Please ' + e(this).find(".label").html() + "</div>";
                        t.push(n)
                    }
                }), e(".add-to-cart-error-msg").html(t)
            },
            events: {
                "click .attribute a.swatchanchor": function(t) {
                    if (e(t.currentTarget).parent().hasClass("unselectable") || e(t.currentTarget).parent().hasClass("selected")) {
                        this.selectedStep = "undefined";
                        return
                    }
                    var n = e(t.currentTarget).parent().parent();
                    n.hasClass("inventoryoption") || n.hasClass("inventoryOption") ? this.selectedStep = "inventory" : n.hasClass("material") ? (this.selectedStep = "material", console.log("material")) : n.hasClass("upholstery") ? (this.selectedStep = "upholstery", console.log("upholstery")) : n.hasClass("color") ? (this.selectedStep = "color", console.log("color")) : n.hasClass("leg") && (this.selectedStep = "leg", console.log("leg"))
                },
                "click .add-to-cart-disabled": "stepErrorMessage"
            }
        });
        return s
    }), define("views/upholstery", ["jquery", "underscore", "backbone", "controllers/modal"], function(e, t, n, r) {
        var i = n.View.extend({
            initialize: function(n) {
                e(document).on("updateDescription", t.bind(this.updateDescription, this))
            },
            updateDescription: function(t) {
                var n = e("ul.swatches.color").find(".selected a"),
                    i = n.parent().parent().children(".label").html();
                $targetColor = n.data("color-value"), $targetMaterialValue = n.data("material-value"), $targetImg = n.data("material-img"), pdpFormShipping = document.querySelector(".pdpForm .shipping-method"), targetShipInfo = document.querySelector(".detail-section .shipping-method"), n.parent().parent().children(".label").append("<span> - " + $targetColor + "</span>"), !pdpFormShipping || (targetShipInfo.textContent = pdpFormShipping.textContent);
                if ($targetMaterialValue) {
                    var s = Urls.productGetMeterialDetails + "?catID=" + $targetMaterialValue,
                        o = e.get(s);
                    o.error(function(e) {
                        console.log("error")
                    }), o.done(function(t) {
                        if (t.trim().length == 0) {
                            t = e("<div />"), t.addClass("short-description");
                            var s = e("<p />");
                            s.append(i + " in ");
                            var o = e("<span />").addClass("color");
                            o.html(""), s.append(o), t.append(s)
                        }
                        var u = e(t).filter(".short-description"),
                            a = e(t).filter(".full-description");
                        e(".variation-materials.short-description").html(u), e(".variation-materials.full-description").html(a), e(".variation-materials.full-description").show(), $targetColor && e(".variation-materials span.color").html($targetColor);
                        if ($targetImg) {
                            var f = document.createElement("img"),
                                l = e(".variation-materials .img"),
                                c;
                            f.src = $targetImg, f.className = "visually-hidden", l.html(f), c = l.find("img"), l.imagesLoaded().done(function() {
                                c.removeClass("visually-hidden", "")
                            })
                        }
                        var h = e("<a />").attr("href", "javascript:;").html("Swatch Info").addClass("swatch-info");
                        h.click(function(t) {
                            t.preventDefault();
                            var n = e(".materials"),
                                i = n.html();
                            r.showSwatchInfo(i)
                        }), n.parent().parent().parent().append(h)
                    })
                }
            },
            events: {}
        });
        return i
    }), define("views/generic-ajax-form", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = n.View.extend({
            initialize: function(e) {
                e = e || {}, this.isModal = e.isModal || !1, console.log("initialize generic ajax form")
            },
            ajaxify: function(t) {
                var n = this,
                    r = this.$el,
                    i, s, o, u;
                t.preventDefault();
                if (r.valid()) {
                    i = r.attr("action"), s = r.serializeArray(), u = r.find(":submit");
                    var a = u.text();
                    u.attr("disabled", "disabled").text("Submitting"), s.push({
                        name: u.attr("name"),
                        value: u.val()
                    }), o = e.param(s), e.post(i, o, function(t) {
                        u.text(a).removeAttr("disabled");
                        var i = r.find(".message").length ? r.find(".message") : e("<div />").addClass("message");
                        i.addClass("form-row");
                        var s = e("<span />"),
                            o = !1;
                        t ? t.success ? t.success && s.html(t.message).removeClass("error").addClass("success") : (o = !0, s.html(t.message).addClass("success").addClass("error")) : (o = !0, s.html(Resources.BAD_RESPONSE).addClass("success").addClass("error")), i.html(s), u.after(i);
                        if (t.success) {
                            r[0].reset();
                            if (n.isModal) {
                                var f = e(".modal.request-swatches");
                                f.css("visibility", "hidden");
                                var l = f.find(".content");
                                l.find(".swatches-wrapper").remove(), l.find(".request-form-wrapper").remove(), i.css("line-height", "26px");
                                var c = e("<button />").addClass("btn-red").html("Close").click(function(t) {
                                    e(".close").click()
                                });
                                Born.mobile ? (l.find(".request-swatch").append(i).append(c), f.css("visibility", "visible")) : l.animate({
                                    width: 500,
                                    height: 260
                                }, "slow", function() {
                                    l.find(".request-swatch").append(i).append(c), f.css("visibility", "visible")
                                })
                            } else setTimeout(function() {
                                i.remove()
                            }, 5e3)
                        }
                    }, "json")
                }
                return !1
            },
            events: {
                submit: "ajaxify"
            }
        });
        return r
    }), define("views/swatch-request", ["jquery", "underscore", "backbone", "views/generic-ajax-form", "controllers/modal"], function(e, t, n, r, i) {
        var s = n.View.extend({
            initialize: function(e) {
                console.log("new swatch request view"), this.swatches = new Array
            },
            getForm: function(n) {
                n.preventDefault();
                var r = e(".product-number span").data("masterid");
                if (r) {
                    var i = window.location.origin + "/on/demandware.store/Sites-dwr-Site/en_US/Product-RequestSwatches?pid=" + r;
                    e.get(i).done(t.bind(this.addModal, this))
                }
                n.preventDefault()
            },
            addModal: function(t) {
                var n = t.trim().length;
                n !== 0 && !!t.length && (i.showSwatchForm(t), new r({
                    el: e(".request-form .generic-ajax-form"),
                    isModal: !0
                }))
            },
            addSwatch: function(t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    r = n.data("value"),
                    i = e(".form-row.swatch-color input");
                if (n.parent().hasClass("selected")) {
                    n.parent().removeClass("selected");
                    for (var s = this.swatches.length - 1; s >= 0; s--) this.swatches[s] === r && this.swatches.splice(s, 1);
                    i.val(this.swatches.join())
                } else n.parent().addClass("selected"), this.swatches.push(r), i.val(this.swatches.join())
            },
            submitForm: function(e) {},
            events: {
                "click .request-swatches .cta": "getForm",
                "click .content .swatchanchor": "addSwatch",
                "submit .request-form form": "submitForm"
            }
        });
        return s
    }), define("views/set-increment", [], function() {
        "use strict";
        var e = Backbone.View.extend({
            initialize: function() {
                this.inputField = this.$el.find(".quantity input")
            },
            decreaseTotal: function() {
                var e = Number(this.inputField.val()) - 1;
                if (e < 0) return !1;
                this.inputField.val(e)
            },
            increaseTotal: function() {
                var e = Number(this.inputField.val()) + 1;
                this.inputField.val(e)
            },
            events: {
                "click .increase": "increaseTotal",
                "click .decrease": "decreaseTotal"
            }
        });
        return e
    }), define("pages/detail", ["jquery", "underscore", "backbone", "views/sticky", "views/product-details", "views/product-settings", "views/upholstery", "views/swatch-request", "views/store-map", "views/set-increment", "views/left-nav-view"], function(e, t, n, r, i, s, o, u, a, f, l) {
        "use strict";
        e(document).ready(function() {
            new s({
                el: e(".pdp-main")[0]
            }), new i({
                el: e(".pdp-main")[0]
            }), new o({
                el: e("body")
            }), new u({
                el: e("body")
            }), e(window).on("resize", function() {
                if (e(window).width() < Born.Breakpoints.mobile) e(".product-image-container").width("100%");
                else {
                    var t = e(".top-view").width() * .75;
                    e(".product-image-container").width(t)
                }
            }), e(window).trigger("resize"), new l({
                el: e(".top-view"),
                scrollPaneRefEl: e(".product-image-container"),
                maxHeightRefEl: e(".top-view .product-detail"),
                fixedEl: e(".product-image-container"),
                pushFromTop: !0,
                topOffsetRefEl: e(".header .top-banner")
            }), e(".product-set-item").each(function() {
                new f({
                    el: this
                })
            }), e(".select-items a").on("click", function() {
                var t = e("#product-set-list").offset().top;
                e("html, body").animate({
                    scrollTop: t
                })
            });
            var t = e("#product-content .details").html();
            e(".shipping-info.detail-section .details").html(t), e(document).on("mouseover", ".swatchanchor", function() {
                var t = e(this);
                t.find(".tooltip").length > 0 && t.attr("title", "")
            })
        })
    }), define("text!templates/search-results.html", [], function() {
        return '<ul id="header-search-results">\n  <div class="wrapper">\n    <li class="related">\n      <div class="content">\n        <h2>related products:</h2>\n        <% data.relatedProducts.each(function() { %>\n          <p><a href="<%= $(this)[0]%>"><%= $(this).text()%></a></p>\n        <% }) %>\n        <h2 class="second">related categories:</h2>\n        <% data.relatedCat.each(function() { %>\n          <p><a href="<%= $(this)[0]%>"><%= $(this).text()%></a></p>\n        <% }) %>\n        <a class="all-link" href="<%= data.formUrl%>">see all results</a>\n      </div>\n    </li>\n    <% data.searchResults.each(function() { %>\n      <li class="grid-tile">\n        <%= $(this)[0].outerHTML %>\n      </li>\n    <% }) %>\n  <div>\n</ul>'
    }), define("views/search", ["jquery", "underscore", "backbone", "text!templates/search-results.html"], function(e, t, n, r) {
        var i = n.View.extend({
            initialize: function(e) {
                this.parent = e.parent
            },
            openSearch: function(e) {
                if (!this.$el.hasClass("active")) {
                    e.preventDefault();
                    var t = window.navigator.userAgent,
                        n = t.indexOf("MSIE ");
                    navigator.userAgent.indexOf("MSIE") == -1 && !!document.documentMode != 1 && this.$el.find('input[type="text"]').focus(), this.$el.addClass("active"), this.parent.$navigation.addClass("hide")
                }
            },
            closeSearch: function() {
                e("#header-search-results").remove(), e(".overlay").removeClass("active"), this.$el.removeClass("active"), this.parent.$navigation.removeClass("hide")
            },
            noResults: function() {
                console.log("no results recieved from search"), e(".overlay").removeClass("active"), e("#header-search-results").remove()
            },
            showResults: function(n, i) {
                var s = window.location.href.indexOf("?") != -1 ? "&q=" + e("#q").val() : "?q=" + e("#q").val(),
                    o = e(".header-search form").eq(1).attr("action") + s,
                    u = this.$products.length > 3 ? this.$products.slice(0, 3) : this.$products,
                    a = t.template(r, {
                        variable: "data"
                    });
                a = a({
                    formUrl: o,
                    searchResults: u,
                    relatedProducts: n,
                    relatedCat: i
                }), e(".overlay").addClass("active"), e("#header-search-results").remove(), e(".top-banner").append(a), e("#header-search-results .swatch-list li a").click(function(t) {
                    var n = e(t.currentTarget).attr("href");
                    if (n == "") return !1;
                    e(t.currentTarget).hasClass("product-swatches-all") || (t.preventDefault(), e(t.currentTarget).closest(".product-tile").find(".thumb-link img").attr("src", n))
                })
            },
            filterResults: function(t) {
                this.$products = e(t).find(".product-suggestion");
                if (this.$products[0]) {
                    var n = e(t).find(".related-products a"),
                        r = e(t).find(".hitgroup").last().find("a");
                    this.showResults(n, r)
                } else this.noResults(this.$products)
            },
            submitSearch: function(t) {
                if (t.keyCode == 13) return;
                var n = this,
                    r = e(t.currentTarget),
                    i = e("#q").val().toLowerCase(),
                    s = window.location.origin + Urls.searchsuggest + "?q=" + i,
                    o = e.get(s);
                o.error(function(e) {
                    console.log("error")
                }), o.done(function(e) {
                    n.filterResults(e)
                })
            },
            events: {
                "click .close": "closeSearch",
                'keyup input[type="text"]': "submitSearch",
                'click form button[type="submit"]': "openSearch"
            }
        });
        return i
    }), define("views/mobile-header", ["text!templates/search-results.html"], function(e) {
        var t = Backbone.View.extend({
            initialize: function() {
                this.$secondLvl = this.$el.find(".level-2"), this.$search = this.$el.find(".search-wrapper"), this.$menu = this.$el.find(".header-menu"), this.$back = this.$el.find(".back");
                var e = $(".minicart-quantity").text();
                e !== "0" ? $(".minicart-quantity").html(e) : $(".minicart-quantity").html(""), this.generateHeader()
            },
            generateHeader: function() {
                this.$el.find(".level-1 > li > a").each(function() {
                    var e = $(this).clone(),
                        t = $(this).parent(),
                        n = t.find(".level-2");
                    if (!n[0]) return;
                    n.find(">ul").prepend(e)
                }), this.$secondLvl.each(function() {
                    var e = $(this).parent();
                    e.after($(this))
                })
            },
            toggleCategory: function(e) {
                var t = $(e.currentTarget),
                    n = !t.find("+.level-2")[0];
                if (n) return !0;
                e.preventDefault(), this.$back.addClass("active"), this.$secondLvl.removeClass("active"), t.find("+.level-2").addClass("active")
            },
            toggleSearch: function() {
                this.$search.hasClass("active") && $("#header-search-results")[0] && $("#header-search-results").remove(), this.$search.toggleClass("active"), this.$el.find('input[type="text"]').focus()
            },
            openMenu: function() {
                this.$menu.addClass("active"), this.$back.removeClass("active"), this.$secondLvl.removeClass("active"), this.$el.find(".level-2.active")[0] && this.$el.find(".level-2.active").removeClass("active")
            },
            closeMenu: function() {
                this.$menu.removeClass("active"), this.$secondLvl.removeClass("active"), this.$el.find(".level-2.active")[0] && this.$el.find(".level-2.active").removeClass("active")
            },
            noResults: function() {
                console.log("no results recieved from search"), $(".overlay").removeClass("active"), $("#header-search-results").remove()
            },
            showResults: function(t, n) {
                if (this.$products.find(".pt_error")) {
                    var r = this.$products.find(".pt_error").parent().index();
                    this.$products.splice(r, 1)
                }
                var i = this.$products.slice(0, 3),
                    s = _.template(e, {
                        variable: "data"
                    });
                s = s({
                    searchResults: i,
                    relatedProducts: t,
                    relatedCat: n
                }), $(".overlay").addClass("active"), $("#header-search-results").remove(), $(".mobile.header").append(s)
            },
            filterResults: function(e) {
                this.$products = $(e).find(".product-suggestion");
                if (this.$products[0]) {
                    var t = $(e).find(".related-products a"),
                        n = $(e).find(".hitgroup").last().find("a");
                    this.showResults(t, n)
                } else this.noResults(this.$products)
            },
            submitSearch: function(e) {
                if (e.keyCode == 13) return;
                var t = this,
                    n = $(e.currentTarget),
                    r = $(".mobile input#q").val(),
                    i = window.location.origin + Urls.searchsuggest + "?q=" + r,
                    s = $.get(i);
                s.error(function(e) {
                    console.log("error")
                }), s.done(function(e) {
                    t.filterResults(e)
                })
            },
            events: {
                "click .header-search": "toggleSearch",
                "click .open-menu": "openMenu",
                "click .close": "closeMenu",
                "click .back": "openMenu",
                "click .mobile-menu-bottom li.explore": "toggleCategory",
                'keyup input[type="text"]': "submitSearch",
                "click .current-country": function() {
                    $(".continent").toggleClass("active")
                }
            }
        });
        return t
    }), define("views/header", ["views/sticky", "views/search", "views/mobile-header"], function(e, t, n) {
        var r = Backbone.View.extend({
            initialize: function() {
                console.log("header view"), this.$overlay = this.$el.find("+.overlay"), this.$topBanner = this.$el.find(".top-banner"), this.$navigation = this.$el.find("#navigation"), this.$backgroundImages = this.$el.find(".menu-item-background"), this.exploreImagesVisited = !1, this.checkPromoCookie(), this.render(), this.initSubViews(), $(window).on("resize", _.throttle(_.bind(this.resize, this), 200))
            },
            checkPromoCookie: function() {
                document.cookie.indexOf("promo-banner-cookie") == -1 && ($(".header-banner").removeClass("hidden"), this.initStickyView())
            },
            initSubViews: function() {
                var e = this,
                    r = this.$el.find(".top-banner.clone");
                r.length == 0 && this.initStickyView(), $("div.header-search").each(function() {
                    new t({
                        el: $(this),
                        parent: e
                    })
                }), new n({
                    el: $(".mobile.header")
                })
            },
            initStickyView: function() {
                var t = this,
                    n = document.querySelector(".about-us-wrapper");
                n || new e({
                    clone: !0,
                    el: t.$topBanner,
                    offset: t.$topBanner.offset().top
                })
            },
            render: function() {
                this.$el.imagesLoaded(_.bind(function() {
                    this.cloneTaxingElements(), this.resize(), this.activate()
                }, this))
            },
            cloneTaxingElements: function() {
                var e = document.querySelector(".desktop .explore-section-contents").innerHTML,
                    t = document.querySelector(".desktop .country-selector-item").innerHTML,
                    n = document.querySelector(".desktop .minicart-quantity").textContent;
                document.querySelector(".mobile.header .explore-section-contents").insertAdjacentHTML("afterbegin", e), document.querySelector(".mobile.header .country-selector-item").insertAdjacentHTML("afterbegin", t), document.querySelector(".mobile.header .minicart-quantity").textContent = n
            },
            resize: function() {
                var e = $(window).width();
                this.$backgroundImages.each(function() {
                    if ($("body").hasClass("built-mobile-nav")) return !1;
                    if (e <= Born.Breakpoints.tablet) {
                        var t = $("#navigation .menu-category.level-1").first().clone();
                        $(".pseudo-nav").replaceWith(t), $("body").addClass("built-mobile-nav"), $(".level-1 > li").click(function(e) {
                            var t = $(".mobile.header .level-2"),
                                n = $(".header-menu .back"),
                                r = $(e.currentTarget),
                                i = !r.find(".level-2")[0];
                            if (i) return !0;
                            if (n.hasClass("active")) return !0;
                            e.preventDefault(), n.addClass("active"), t.removeClass("active"), r.find(".level-2").addClass("active")
                        })
                    }
                })
            },
            activate: function() {
                this.$el.addClass("active")
            },
            activateOverlay: function() {
                this.$overlay.addClass("active"), $(".filters.fixed")[0] && $(".filters.fixed").hide()
            },
            deactivateOverlay: function() {
                this.$overlay.removeClass("active"), $(".filters.fixed")[0] && $(".filters.fixed").show()
            },
            exploreHover: function() {
                this.exploreImagesVisited || (this.exploreImagesVisited = !0, this.activateOverlay())
            },
            events: {
                "mouseenter #navigation > ul > li": "activateOverlay",
                "mouseleave #navigation > ul > li": "deactivateOverlay",
                "mouseenter .left li.explore": "exploreHover",
                "mouseleave #navigation": "deactivateOverlay",
                "mouseleave .left li.explore": "deactivateOverlay",
                "click .html-slot-container .close": function(e) {
                    var t = this;
                    $(".header-banner").addClass("hidden"), $(".top-banner.clone").remove(), setTimeout(function() {
                        t.initStickyView()
                    }, 400);
                    var n = new Date;
                    n.setTime(n.getTime() + 864e5);
                    var r = "; expires=" + n.toGMTString();
                    document.cookie = "name=promo-banner-cookie;" + r + "; path=/"
                }
            }
        });
        return r
    }), define("pages/partials/footer", ["jquery", "underscore", "backbone"], function(e, t, n) {
        var r = function(e) {
                var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return t.test(e)
            },
            i = n.View.extend({
                initialize: function() {
                    console.log("initialize footer")
                },
                events: {
                    "click .drop li.parent": function(t) {
                        var n = e(t.currentTarget).parent();
                        n.hasClass("direct");
                        if (n.hasClass("active")) {
                            n.removeClass("active");
                            return
                        }
                        e(".right .content-asset .drop").each(function() {
                            e(this).hasClass("active") && e(this).removeClass("active")
                        }), e(".catalog-sign-up").removeClass("active"), n.addClass("active")
                    },
                    "click .catalog-sign-up > p": function(t) {
                        var n = e(t.currentTarget).parent();
                        n.hasClass("direct");
                        if (n.hasClass("active")) {
                            n.removeClass("active");
                            return
                        }
                        e(".right .content-asset .drop").each(function() {
                            e(this).hasClass("active") && e(this).removeClass("active")
                        }), window.location.href = n.find("a").first().attr("href")
                    }
                }
            });
        e(document).ready(function() {
            new i({
                el: e("#footer")
            })
        })
    }), define("pages/global", ["jquery", "underscore", "backbone", "views/header", "views/modal", "views/generic-ajax-form", "pages/partials/footer"], function(e, t, n, r, i, s, o) {
        e(document).ready(function() {
            e(".product-listing-1x8 .swatch-list li a").click(function() {
                return !1
            }), new r({
                el: e(".header")
            });
            if (e(".newsletter-pop")[0] && !Born.mobile) {
                (new i({
                    className: "modal newsletter-popup",
                    content: e(".newsletter-pop").html()
                })).render().show(), e(".newsletter-pop").remove();
                var t = e(".newsletter-signup");
                t.removeAttr("novalidate"), t.submit(function(t) {
                    t.preventDefault();
                    var n = e(this),
                        r = n.attr("action"),
                        i = n.serialize();
                    return e.post(r, i, function(t) {
                        if (t.success) {
                            var r = n.find("fieldset"),
                                i = e("<button />");
                            i.html("close").click(function() {
                                e(".close").click()
                            }), r.after(i), r.replaceWith('<div style="margin-bottom: 15px;">' + t.message + "</div>")
                        } else {
                            var s = e("<div />");
                            s.addClass("error").html(t.message), n.find(".error-message").html(s)
                        }
                    }, "json"), !1
                })
            }
            e(document).on("click", ".dwr-live-chat", function() {
                    e(".salesforceliveagent img").each(function(t, n) {
                        var r = e(this);
                        r.is(":visible") && r.click()
                    })
                }), e(".generic-ajax-form").each(function(t, n) {
                    new s({
                        el: e(this)
                    })
                }),
                function() {
                    var t = e("#liveagent_button_online_573F0000000CaZr");
                    if (t.length > 0) {
                        var n = function() {
                                e(".dwr-live-chat").hide(), e(".or-chat").hide()
                            },
                            r = function() {
                                e(".dwr-live-chat").show(), e(".or-chat").show()
                            };
                        t.is(":visible") || n(), e(document).ajaxComplete(function(t, r, i) {
                            e("#liveagent_button_online_573F0000000CaZr").is(":visible") || n()
                        });
                        var i = new MutationObserver(function(t) {
                            t.forEach(function(t) {
                                e("#liveagent_button_online_573F0000000CaZr").is(":visible") ? (console.log("liveagent online!"), r()) : (console.log("liveagent offline!"), n())
                            })
                        });
                        i.observe(t[0], {
                            attributes: !0,
                            attributeFilter: ["style"]
                        })
                    }
                }(),
                function() {
                    var t = e(".brMoreResults");
                    t.find(".br-sf-widget").wrapAll('<div class="brMoreResultsWidgets" />'), e(".brMoreResultsWidgets").slick({
                        slidesToShow: 3,
                        speed: 500,
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), t.find(".br-rp-qv-hide .br-sf-widget-merchant-popup-desc").each(function(t, n) {
                        var r = e(this),
                            i = e.trim(r.html()).substring(0, 240).split(" ").slice(0, -1).join(" ") + "...";
                        r.html(i)
                    })
                }()
        })
    }), define("pages/homepage", ["jquery", "underscore", "backbone", "views/store-map", "views/sticky"], function(e, t, n, r, i) {
        "use strict";
        e(document).ready(function() {
            e(".home-product-module .products").slick({
                slidesToShow: 4,
                speed: 500,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }), e(".home-product-module .products").slick("slickSetOption", "speed", 300, !0)
        })
    }), define("pages/aboutus", ["jquery", "underscore", "backbone", "views/sticky", "views/pdp-tabs", "views/video"], function(e, t, n, r, i, s) {
        "use strict";
        e(document).ready(function() {
            var t = document.querySelector(".about-us-wrapper .iframe-responsive-wrapper iframe");
            t && new s({
                    el: e(t)
                }), new r({
                    clone: !0,
                    el: e(".sticky-tabs-menu"),
                    offset: e(".sticky-tabs-menu").offset().top
                }),
                function() {
                    var t = e(".about-us-section-wrapper"),
                        n = e(".sticky-tabs-menu-aboutus"),
                        r = n.outerHeight();
                    e(window).on("scroll", function() {
                        var i = e(this).scrollTop();
                        t.each(function() {
                            var t = e(this).offset().top - r,
                                s = t + e(this).outerHeight();
                            if (i > t && i < s) {
                                var o = e(this).attr("id");
                                n.find("li").removeClass("active"), n.find('a[href="#' + o + '"]').parent().addClass("active")
                            }
                        })
                    })
                }(), e(".product-listing .search-result-items").slick({
                    slidesToShow: 4,
                    responsive: [{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                })
        })
    }), define("views/quick-view", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = n.View.extend({
            initialize: function() {
                console.log("qv init"), this.$currentDialog = e("#QuickViewDialog"), this.$currentDialog.on("dialogclose", this.removeEvents.bind(this))
            },
            removeEvents: function() {
                this.$el.removeClass("qv-active-body"), this.$currentDialog.find(".product-thumbnails ul").slick("unslick")
            },
            closeQuickView: function() {
                this.$currentDialog.dialog("close")
            },
            events: {
                "click .ui-widget-overlay": "closeQuickView",
                "click .ui-dialog-titlebar button": "closeQuickView"
            }
        });
        return r
    }), define("views/refinement", [], function() {
        "use strict";
        var e = Backbone.View.extend({
            initialize: function() {
                console.log("init refinement view"), $(document).on("showMobileFilters", _.bind(this.showMobileFilters, this)), $(document).on("mobileCloseButton", _.bind(this.mobileCloseButton, this)), $(document).on("showFilters", _.bind(this.showFilters, this)), $(document).on("mobileFilterCounter", _.bind(this.mobileFilterCounter, this)), $(document).on("nextPrevScrollTop", _.bind(this.nextPrevScrollTop, this)), $(document).trigger("mobileFilterCounter")
            },
            mobileFilterCounter: function() {
                if (!$(".active-filters .filters span")[0]) $(".active-filters").removeClass("active");
                else if ($(window).width() <= Born.Breakpoints.tablet) {
                    var e = $(".active-filters .filters .breadcrumb-refinement-value").length,
                        t;
                    if (e == 1) var t = "Filter";
                    else var t = "Filters";
                    e > 0 && ($(".active-filters span").hide(), $(".active-filters .filters").append("<div class='mobile-filters'>" + e + " " + t + " Showing</div>"))
                }
            },
            showMobileFilters: function() {
                $(window).width() <= Born.Breakpoints.tablet && $(".all-refinements").toggleClass("active")
            },
            mobileCloseButton: function(e) {
                e.preventDefault(), $(e.currentTarget).parent().removeClass("active"), $(".refinement ul").hide(), $(".refinement h3, .refinement-header").removeClass("active"), $(".category-refinement").find("ul").removeClass("active")
            },
            showFilters: function(e) {
                console.log("show filters is being called");
                if ($(e.currentTarget).hasClass("refinement-header")) var t = $(".category-refinement").find("ul");
                else var t = $(e.currentTarget).parent().find("ul");
                $(window).width() < Born.Breakpoints.mobile && ($(e.currentTarget).parent().hasClass("show-only") || $(e.currentTarget).parent().hasClass("inStockRefinement") || $(e.currentTarget).parent().hasClass("dwrExclusiveRefinement") || (t.toggleClass("active"), $(e.currentTarget).toggleClass("active")));
                if (t.css("display") == "block") return t.hide(), !1;
                $(".refinements ul").each(function() {
                    $(this).css("display") == "block" && ($(this).parent().find("h3").removeClass("active"), $(this).parent().parent().find(".refinement-header").removeClass("active"), $(this).hide())
                }), $(e.currentTarget).hasClass("refinement-header") && t.show()
            },
            toggleGrid: function(e) {
                var t;
                $(".toggle-grid i").removeClass("active"), $(e.currentTarget).addClass("active"), $(".search-result-content").removeClass("five"), $(".search-result-content").removeClass("two"), $(window).width() < Born.Breakpoints.mobile ? $(e.currentTarget).data("option") === "column" ? t = "three" : t = "two" : $(e.currentTarget).data("option") === "column" ? t = "three" : t = "five";
                if (t == "three") {
                    if (document.cookie.indexOf("toggle-cookie") !== -1) {
                        console.log("delete cookies");
                        var n = "; expires=Thu, 18 Dec 2013 12:00:00 UTC;";
                        document.cookie = "name=toggle-cookie;" + n + "; path=/"
                    }
                } else if (document.cookie.indexOf("toggle-cookie") == -1) {
                    console.log("store cookies");
                    var r = new Date;
                    r.setTime(r.getTime() + 36e5);
                    var n = "; expires=" + r.toGMTString();
                    document.cookie = "name=toggle-cookie;" + n + "; path=/"
                }
                $(".search-result-content").toggleClass(t)
            },
            nextPrevScrollTop: function() {
                var e = $(".product-listing-wrapper").offset().top - 136;
                $("html, body").animate({
                    scrollTop: e
                })
            },
            events: {
                "click .toggle-mobile-filters": "showMobileFilters",
                "click .mobile-close-btn": "mobileCloseButton",
                "click .refinement h3": "showFilters",
                "click .toggle-grid i": "toggleGrid",
                "mouseenter #category-level-1 li.expandable": function(e) {
                    if ($(e.currentTarget).index() != 2) return;
                    $("#category-level-2").addClass("active")
                },
                "mouseleave #category-level-1 li.expandable": function(e) {
                    if ($(e.currentTarget).index() != 2) return;
                    if ($("#category-level-2").is(":hover")) return;
                    $("#category-level-2").removeClass("active")
                },
                "mouseleave #category-level-2": function(e) {
                    $(e.currentTarget).removeClass("active")
                },
                "click .page-previous, .page-next": "nextPrevScrollTop"
            }
        });
        return e
    }), define("views/sortby", ["jquery"], function(e) {
        "use strict";
        var t = Backbone.View.extend({
            initialize: function(t) {
                console.log("init sort by view");
                var n = this;
                this.render(), e(document).on("click", "#grid-sort-header-label", _.bind(this.showOptions, this)), e(document).on("click", ".sort-by-close", _.bind(this.closeOptions, this)), e(document).on("click", ".refinement h3", _.bind(this.showFilters, this)), e(document).on("click", ".toggle-mobile-filters", _.bind(this.showMobileFilters, this)), e(document).ajaxComplete(function(t, r, i) {
                    n.$el = e(".sort-by"), n.$el.length > 0 && n.render()
                })
            },
            render: function() {
                var t = this,
                    n = this.$el.first().find("select").first(),
                    r = e("<a />").attr("href", "javascript:;").addClass("sort-by-close").html("Close"),
                    i = e("<ul />"),
                    s = null;
                n.children().each(function(t, n) {
                    var r = e(this),
                        o = e("<a />").attr({
                            href: r.val(),
                            "data-index": t
                        }).html(r.text());
                    s = e("<li />").html(o), r.is(":selected") && s.addClass("selected"), i.append(s)
                }), this.$divSelect = e("<div />").addClass("sort-by-select").hide(), this.$divSelect.append(r.clone().addClass("mobile")), this.$divSelect.append(i), this.$divSelect.append(r.addClass("desktop")), n.after(this.$divSelect)
            },
            showOptions: function(e) {
                this.$divSelect.toggle(), this.closeFilterBy()
            },
            closeOptions: function(e) {
                this.$divSelect.hide()
            },
            showFilters: function() {
                this.showMobileFilters()
            },
            showMobileFilters: function() {
                this.$divSelect.hide()
            },
            closeFilterBy: function() {
                e(".mobile-close-btn").click()
            },
            events: {}
        });
        return t
    }), define("views/collection-grid", ["jquery", "underscore", "backbone"], function(e, t, n) {
        "use strict";
        var r = n.View.extend({
            initialize: function() {
                console.log("initalize collections grid"), this.$details = this.$el.find(".blockcontent"), this.count(), this.resize()
            },
            count: function() {
                this.$details.length === 2 ? this.$el.addClass("two-grid") : this.$details.length === 3 ? this.$el.addClass("three-grid") : this.$details.length === 4 && this.$el.addClass("four-grid"), e(window).on("resize", t.bind(this.resize, this))
            },
            resize: function() {
                this.$el.hasClass("four-grid") && e(window).width() <= Born.Breakpoints.tablet && this.$el.find(".overflow").slick({
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1
                })
            }
        });
        return r
    }), define("pages/listing", ["jquery", "underscore", "backbone", "views/quick-view", "views/refinement", "views/sortby", "views/sticky", "views/collection-grid", "views/left-nav-view", "views/generic-select", "views/product-settings"], function(e, t, n, r, i, s, o, u, a, f, l) {
        "use strict";

        function c() {
            function n() {
                var n = document.querySelector(".search-result-options.top");
                !!n && !e(".collection-detail")[0] ? new o({
                    clone: !0,
                    el: e(n),
                    offset: t - 125
                }) : new u({
                    el: e(".collection-detail-grid")
                })
            }
            e(document).on("stickyFiltersInit", function() {
                n()
            });
            var t = e(".search-result-options.top").length > 0 ? e(".search-result-options.top").parent().offset().top : 0;
            n()
        }
        e(document).ready(function() {
            e("body").on("showQuickview", function() {
                e(this).hasClass("qv-active-body") || (new r({
                    el: e(this)
                }), e(".ui-button").html("&times;"), new l({
                    el: e(this)
                }), e(this).addClass("qv-active-body"))
            }), c(), e(".breadcrumb-refinement")[0] && (e(".active-filters").addClass("active"), e(".active-filters div").html(e(".breadcrumb-refinement"))), e("#category-level-1").append('<p class="close-btn">close</p>'), new i({
                el: e(".search-result-options")
            }), e(document).on("click", ".search-result-options .close-btn", function(t) {
                e(this).parent().hide()
            }), new s({
                el: e(".sort-by")
            }), e(".product-listing.last-visited .search-result-items").slick({
                slidesToShow: 4,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }), !!document.querySelector(".top-content-designer") && !!document.querySelector(".overflow .blockcontent") && (new a({
                el: e(".top-content-designer"),
                scrollPaneRefEl: e(".designer-info"),
                maxHeightRefEl: e(".top-content-designer .overflow"),
                fixedEl: e(".designer-info"),
                pushFromTop: !0,
                topOffsetRefEl: e(".header .top-banner"),
                ignoreViewportHeight: !0
            }), e(window).on("resize", function() {
                if (e(window).width() < Born.Breakpoints.mobile) e(".designer-info").css({
                    width: ""
                });
                else {
                    var t = e(".top-content-designer").width() / 2;
                    e(".designer-info").width(t - 40)
                }
            }), e(window).trigger("resize"));
            if (e(".pt_product-thematic-result").length > 0) {
                var t = e(".tiles-container .product-tile");
                t.attr("style", ""), t.syncHeight().each(function(t) {
                    e(this).data("idx", t)
                })
            }
        }), e(window).load(function() {
            c()
        })
    }), define("pages/no-results", ["jquery", "underscore", "backbone"], function(e, t, n) {
        e(document).ready(function() {
            e(".search-result-items").slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }), define("views/country-filter", [], function() {
        "use strict";
        var e = Backbone.View.extend({
            initialize: function() {
                console.log("init country filter view"), this.storeSelect = this.$el.find("#storeId"), this.USOpts = [], this.intOpts = [], this.setCountryArrays()
            },
            setCountryArrays: function() {
                var e = this.USOpts,
                    t = this.intOpts,
                    n = this.storeSelect.find("option").filter(function() {
                        if ($(this).data("country-value") === undefined) return;
                        $(this).data("country-value") === "US" ? e.push($(this)) : t.push($(this))
                    });
                this.storeSelect.find("option").remove(), this.storeSelect.append(this.USOpts)
            },
            filterLocations: function(e) {
                var t = $(e.currentTarget).find("option:selected"),
                    n = t.attr("value");
                n == "US" ? (this.storeSelect.find("option").remove(), this.storeSelect.append(this.USOpts)) : n == "INT" && (this.storeSelect.find("option").remove(), this.storeSelect.append(this.intOpts))
            },
            events: {
                "change #dwfrm_storelocator_country": "filterLocations"
            }
        });
        return e
    }), define("pages/store", ["jquery", "underscore", "backbone", "views/store-map", "controllers/modal", "views/country-filter"], function(e, t, n, r, i, s) {
        var o = n.View.extend({
            initialize: function(e) {
                console.log("new appointment form view")
            },
            getForm: function(n) {
                n.preventDefault();
                var r = e(n.currentTarget),
                    i = r.attr("href");
                this.storeId = r.data("store-id"), e.get(i).done(t.bind(this.addModal, this)), n.preventDefault()
            },
            addModal: function(e) {
                var t = e.trim().length;
                t !== 0 && !!e.length && i.showAppointment(e, this.storeId)
            },
            events: {
                "click .appointment.cta": "getForm"
            }
        });
        e(document).ready(function() {
            var t = document.querySelectorAll(".top-banner-container");
            !t || (e(".top-banner-container").find("span")[0] && e(".top-banner-container").find("> span").eq(0).remove(), e(".youtube-video.video-above").eq(0) && !e(".top-banner-container img")[0] && e(".youtube-video.video-above").height(550), e(t).slick({
                slidesToShow: 1
            }));
            if (e("#map").length > 0) {
                var n = new r({
                    el: e("#map"),
                    parent: this
                });
                n.mapInit()
            }
            e(".login-box").length > 0 && new s({
                el: e(".login-box")
            }), e.each([".map-search-results", ".store-locator-details", ".store-links"], function(t, n) {
                e(n).length > 0 && new o({
                    el: e(n)
                })
            }), e(".show-more").click(function(t) {
                t.preventDefault(), e(t.currentTarget).hasClass("less") ? (e(t.currentTarget).parent().find(".hidden").hide(), e(t.currentTarget).parent().find(".ellipsis").show(), e(t.currentTarget).removeClass("less"), e(t.currentTarget).html("Read More")) : (e(t.currentTarget).parent().find(".hidden").show(), e(t.currentTarget).parent().find(".ellipsis").hide(), e(t.currentTarget).addClass("less"), e(t.currentTarget).html("Read Less"))
            })
        })
    }), define("views/tabs", ["jquery", "backbone", "underscore"], function(e, t, n) {
        var r = t.View.extend({
            initialize: function() {
                this.infoTabsHeading = this.$el.find(".cart-information-tabs"), this.tabInformation = this.$el.find(".tab-info")
            },
            updateActiveTab: function(t) {
                t.preventDefault();
                var n = e(t.currentTarget).parent(),
                    r = n.index(),
                    i = e(this.tabInformation.find("> div")[r]);
                n.hasClass("active") || (this.infoTabsHeading.find("li").removeClass("active"), this.tabInformation.find("> div").removeClass("active"), n.addClass("active"), i.addClass("active"))
            },
            events: {
                "click .cart-information-tabs a": "updateActiveTab"
            }
        });
        return r
    })
})();