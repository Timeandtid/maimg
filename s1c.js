! function(e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var t;
		t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.AFRAME = e()
	}
}(function() {
	var t;
	return function r(e, t, i) {
		function n(a, s) {
			if (!t[a]) {
				if (!e[a]) {
					var h = "function" == typeof require && require;
					if (!s && h) return h(a, !0);
					if (o) return o(a, !0);
					var c = new Error("Cannot find module '" + a + "'");
					throw c.code = "MODULE_NOT_FOUND", c
				}
				var l = t[a] = {
					exports: {}
				};
				e[a][0].call(l.exports, function(t) {
					var r = e[a][1][t];
					return n(r ? r : t)
				}, l, l.exports, r, e, t, i)
			}
			return t[a].exports
		}
		for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) n(i[a]);
		return n
	}({
		1: [function(e, t) {
			"use strict";
			t.exports = {
				createLink: function(e, t) {
					var r = document.head || document.getElementsByTagName("head")[0],
						i = document.createElement("link");
					i.href = e, i.rel = "stylesheet";
					for (var n in t)
						if (t.hasOwnProperty(n)) {
							var o = t[n];
							i.setAttribute("data-" + n, o)
						}
					r.appendChild(i)
				},
				createStyle: function(e, t) {
					var r = document.head || document.getElementsByTagName("head")[0],
						i = document.createElement("style");
					i.type = "text/css";
					for (var n in t)
						if (t.hasOwnProperty(n)) {
							var o = t[n];
							i.setAttribute("data-" + n, o)
						}
					i.sheet ? (i.innerHTML = e, i.sheet.cssText = e, r.appendChild(i)) : i.styleSheet ? (r.appendChild(i), i.styleSheet.cssText = e) : (i.appendChild(document.createTextNode(e)), r.appendChild(i))
				}
			}
		}, {}],
		2: [function(e, t) {
			function r() {
				c = !1, a.length ? h = a.concat(h) : l = -1, h.length && i()
			}

			function i() {
				if (!c) {
					var e = setTimeout(r);
					c = !0;
					for (var t = h.length; t;) {
						for (a = h, h = []; ++l < t;) a && a[l].run();
						l = -1, t = h.length
					}
					a = null, c = !1, clearTimeout(e)
				}
			}

			function n(e, t) {
				this.fun = e, this.array = t
			}

			function o() {}
			var a, s = t.exports = {},
				h = [],
				c = !1,
				l = -1;
			s.nextTick = function(e) {
				var t = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
				h.push(new n(e, t)), 1 !== h.length || c || setTimeout(i, 0)
			}, n.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = o, s.addListener = o, s.once = o, s.off = o, s.removeListener = o, s.removeAllListeners = o, s.emit = o, s.binding = function() {
				throw new Error("process.binding is not supported")
			}, s.cwd = function() {
				return "/"
			}, s.chdir = function() {
				throw new Error("process.chdir is not supported")
			}, s.umask = function() {
				return 0
			}
		}, {}],
		3: [function(e, t, r) {
			function i() {
				return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
			}

			function n() {
				var e = arguments,
					t = this.useColors;
				if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + r.humanize(this.diff), !t) return e;
				var i = "color: " + this.color;
				e = [e[0], i, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
				var n = 0,
					o = 0;
				return e[0].replace(/%[a-z%]/g, function(e) {
					"%%" !== e && (n++, "%c" === e && (o = n))
				}), e.splice(o, 0, i), e
			}

			function o() {
				return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
			}

			function a(e) {
				try {
					null == e ? r.storage.removeItem("debug") : r.storage.debug = e
				} catch (t) {}
			}

			function s() {
				var e;
				try {
					e = r.storage.debug
				} catch (t) {}
				return e
			}

			function h() {
				try {
					return window.localStorage
				} catch (e) {}
			}
			r = t.exports = e("./debug"), r.log = o, r.formatArgs = n, r.save = a, r.load = s, r.useColors = i, r.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : h(), r.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], r.formatters.j = function(e) {
				return JSON.stringify(e)
			}, r.enable(s())
		}, {
			"./debug": 4
		}],
		4: [function(e, t, r) {
			function i() {
				return r.colors[l++ % r.colors.length]
			}

			function n(e) {
				function t() {}

				function n() {
					var e = n,
						t = +new Date,
						o = t - (c || t);
					e.diff = o, e.prev = c, e.curr = t, c = t, null == e.useColors && (e.useColors = r.useColors()), null == e.color && e.useColors && (e.color = i());
					var a = Array.prototype.slice.call(arguments);
					a[0] = r.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));
					var s = 0;
					a[0] = a[0].replace(/%([a-z%])/g, function(t, i) {
						if ("%%" === t) return t;
						s++;
						var n = r.formatters[i];
						if ("function" == typeof n) {
							var o = a[s];
							t = n.call(e, o), a.splice(s, 1), s--
						}
						return t
					}), "function" == typeof r.formatArgs && (a = r.formatArgs.apply(e, a));
					var h = n.log || r.log || console.log.bind(console);
					h.apply(e, a)
				}
				t.enabled = !1, n.enabled = !0;
				var o = r.enabled(e) ? n : t;
				return o.namespace = e, o
			}

			function o(e) {
				r.save(e);
				for (var t = (e || "").split(/[\s,]+/), i = t.length, n = 0; i > n; n++) t[n] && (e = t[n].replace(/\*/g, ".*?"), "-" === e[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
			}

			function a() {
				r.enable("")
			}

			function s(e) {
				var t, i;
				for (t = 0, i = r.skips.length; i > t; t++)
					if (r.skips[t].test(e)) return !1;
				for (t = 0, i = r.names.length; i > t; t++)
					if (r.names[t].test(e)) return !0;
				return !1
			}

			function h(e) {
				return e instanceof Error ? e.stack || e.message : e
			}
			r = t.exports = n, r.coerce = h, r.disable = a, r.enable = o, r.enabled = s, r.humanize = e("ms"), r.names = [], r.skips = [], r.formatters = {};
			var c, l = 0
		}, {
			ms: 5
		}],
		5: [function(e, t) {
			function r(e) {
				if (e = "" + e, !(e.length > 1e4)) {
					var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
					if (t) {
						var r = parseFloat(t[1]),
							i = (t[2] || "ms").toLowerCase();
						switch (i) {
							case "years":
							case "year":
							case "yrs":
							case "yr":
							case "y":
								return r * l;
							case "days":
							case "day":
							case "d":
								return r * c;
							case "hours":
							case "hour":
							case "hrs":
							case "hr":
							case "h":
								return r * h;
							case "minutes":
							case "minute":
							case "mins":
							case "min":
							case "m":
								return r * s;
							case "seconds":
							case "second":
							case "secs":
							case "sec":
							case "s":
								return r * a;
							case "milliseconds":
							case "millisecond":
							case "msecs":
							case "msec":
							case "ms":
								return r
						}
					}
				}
			}

			function i(e) {
				return e >= c ? Math.round(e / c) + "d" : e >= h ? Math.round(e / h) + "h" : e >= s ? Math.round(e / s) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
			}

			function n(e) {
				return o(e, c, "day") || o(e, h, "hour") || o(e, s, "minute") || o(e, a, "second") || e + " ms"
			}

			function o(e, t, r) {
				return t > e ? void 0 : 1.5 * t > e ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
			}
			var a = 1e3,
				s = 60 * a,
				h = 60 * s,
				c = 24 * h,
				l = 365.25 * c;
			t.exports = function(e, t) {
				return t = t || {}, "string" == typeof e ? r(e) : t["long"] ? n(e) : i(e)
			}
		}, {}],
		6: [function(e, t) {
			"use strict";

			function r(e) {
				if (null === e || void 0 === e) throw new TypeError("Sources cannot be null or undefined");
				return Object(e)
			}

			function i(e, t, r) {
				var i = t[r];
				if (void 0 !== i && null !== i) {
					if (a.call(e, r) && (void 0 === e[r] || null === e[r])) throw new TypeError("Cannot convert undefined or null to object (" + r + ")");
					e[r] = a.call(e, r) && o(i) ? n(Object(e[r]), t[r]) : i
				}
			}

			function n(e, t) {
				if (e === t) return e;
				t = Object(t);
				for (var r in t) a.call(t, r) && i(e, t, r);
				if (Object.getOwnPropertySymbols)
					for (var n = Object.getOwnPropertySymbols(t), o = 0; o < n.length; o++) s.call(t, n[o]) && i(e, t, n[o]);
				return e
			}
			var o = e("is-obj"),
				a = Object.prototype.hasOwnProperty,
				s = Object.prototype.propertyIsEnumerable;
			t.exports = function(e) {
				e = r(e);
				for (var t = 1; t < arguments.length; t++) n(e, arguments[t]);
				return e
			}
		}, {
			"is-obj": 7
		}],
		7: [function(e, t) {
			"use strict";
			t.exports = function(e) {
				var t = typeof e;
				return null !== e && ("object" === t || "function" === t)
			}
		}, {}],
		8: [function() {
			! function(t, r, i, n) {
				"use strict";

				function o(e, t) {
					for (var r = 0, i = e.length; i > r; r++) g(e[r], t)
				}

				function a(e) {
					for (var t, r = 0, i = e.length; i > r; r++) t = e[r], E(t, U[h(t)])
				}

				function s(e) {
					return function(t) {
						ne(t) && (g(t, e), o(t.querySelectorAll(z), e))
					}
				}

				function h(e) {
					var t = se.call(e, "is"),
						r = e.nodeName.toUpperCase(),
						i = G.call(B, t ? N + t.toUpperCase() : I + r);
					return t && i > -1 && !c(r, t) ? -1 : i
				}

				function c(e, t) {
					return -1 < z.indexOf(e + '[is="' + t + '"]')
				}

				function l(e) {
					var t = e.currentTarget,
						r = e.attrChange,
						i = e.attrName,
						n = e.target;
					ge && (!n || n === t) && t.attributeChangedCallback && "style" !== i && e.prevValue !== e.newValue && t.attributeChangedCallback(i, r === e[L] ? null : e.prevValue, r === e[k] ? null : e.newValue)
				}

				function u(e) {
					var t = s(e);
					return function(e) {
						y.push(t, e.target)
					}
				}

				function d(e) {
					ve && (ve = !1, e.currentTarget.removeEventListener(D, d)), o((e.target || r).querySelectorAll(z), e.detail === C ? C : S), ie && m()
				}

				function p(e, t) {
					var r = this;
					he.call(r, e, t), x.call(r, {
						target: r
					})
				}

				function f(e, t) {
					ee(e, t), M ? M.observe(e, ue) : (me && (e.setAttribute = p, e[A] = w(e), e.addEventListener(O, x)), e.addEventListener(P, l)), e.createdCallback && ge && (e.created = !0, e.createdCallback(), e.created = !1)
				}

				function m() {
					for (var e, t = 0, r = oe.length; r > t; t++) e = oe[t], j.contains(e) || (r--, oe.splice(t--, 1), g(e, C))
				}

				function v(e) {
					throw new Error("A " + e + " type is already registered")
				}

				function g(e, t) {
					var r, i = h(e);
					i > -1 && (_(e, U[i]), i = 0, t !== S || e[S] ? t === C && !e[C] && (e[S] = !1, e[C] = !0, i = 1) : (e[C] = !1, e[S] = !0, i = 1, ie && G.call(oe, e) < 0 && oe.push(e)), i && (r = e[t + "Callback"]) && r.call(e))
				}
				if (!(n in r)) {
					var y, x, b, w, M, _, E, A = "__" + n + (1e5 * Math.random() >> 0),
						S = "attached",
						C = "detached",
						T = "extends",
						L = "ADDITION",
						R = "MODIFICATION",
						k = "REMOVAL",
						P = "DOMAttrModified",
						D = "DOMContentLoaded",
						O = "DOMSubtreeModified",
						I = "<",
						N = "=",
						V = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
						F = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
						B = [],
						U = [],
						z = "",
						j = r.documentElement,
						G = B.indexOf || function(e) {
							for (var t = this.length; t-- && this[t] !== e;);
							return t
						},
						H = i.prototype,
						W = H.hasOwnProperty,
						q = H.isPrototypeOf,
						X = i.defineProperty,
						Y = i.getOwnPropertyDescriptor,
						Q = i.getOwnPropertyNames,
						K = i.getPrototypeOf,
						Z = i.setPrototypeOf,
						J = !!i.__proto__,
						$ = i.create || function ye(e) {
							return e ? (ye.prototype = e, new ye) : this
						},
						ee = Z || (J ? function(e, t) {
							return e.__proto__ = t, e
						} : Q && Y ? function() {
							function e(e, t) {
								for (var r, i = Q(t), n = 0, o = i.length; o > n; n++) r = i[n], W.call(e, r) || X(e, r, Y(t, r))
							}
							return function(t, r) {
								do e(t, r); while ((r = K(r)) && !q.call(r, t));
								return t
							}
						}() : function(e, t) {
							for (var r in t) e[r] = t[r];
							return e
						}),
						te = t.MutationObserver || t.WebKitMutationObserver,
						re = (t.HTMLElement || t.Element || t.Node).prototype,
						ie = !q.call(re, j),
						ne = ie ? function(e) {
							return 1 === e.nodeType
						} : function(e) {
							return q.call(re, e)
						},
						oe = ie && [],
						ae = re.cloneNode,
						se = re.getAttribute,
						he = re.setAttribute,
						ce = re.removeAttribute,
						le = r.createElement,
						ue = te && {
							attributes: !0,
							characterData: !0,
							attributeOldValue: !0
						},
						de = te || function() {
							me = !1, j.removeEventListener(P, de)
						},
						pe = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
							setTimeout(e, 10)
						},
						fe = !1,
						me = !0,
						ve = !0,
						ge = !0;
					Z || J ? (_ = function(e, t) {
						q.call(t, e) || f(e, t)
					}, E = f) : (_ = function(e, t) {
						e[A] || (e[A] = i(!0), f(e, t))
					}, E = _), ie ? (me = !1, function() {
						var t = Y(re, "addEventListener"),
							r = t.value,
							i = function(e) {
								var t = new CustomEvent(P, {
									bubbles: !0
								});
								t.attrName = e, t.prevValue = se.call(this, e), t.newValue = null, t[k] = t.attrChange = 2, ce.call(this, e), this.dispatchEvent(t)
							},
							n = function(t, r) {
								var i = this.hasAttribute(t),
									n = i && se.call(this, t);
								e = new CustomEvent(P, {
									bubbles: !0
								}), he.call(this, t, r), e.attrName = t, e.prevValue = i ? n : null, e.newValue = r, i ? e[R] = e.attrChange = 1 : e[L] = e.attrChange = 0, this.dispatchEvent(e)
							},
							o = function(e) {
								var t, r = e.currentTarget,
									i = r[A],
									n = e.propertyName;
								i.hasOwnProperty(n) && (i = i[n], t = new CustomEvent(P, {
									bubbles: !0
								}), t.attrName = i.name, t.prevValue = i.value || null, t.newValue = i.value = r[n] || null, null == t.prevValue ? t[L] = t.attrChange = 0 : t[R] = t.attrChange = 1, r.dispatchEvent(t))
							};
						t.value = function(e, t, a) {
							e === P && this.attributeChangedCallback && this.setAttribute !== n && (this[A] = {
								className: {
									name: "class",
									value: this.className
								}
							}, this.setAttribute = n, this.removeAttribute = i, r.call(this, "propertychange", o)), r.call(this, e, t, a)
						}, X(re, "addEventListener", t)
					}()) : te || (j.addEventListener(P, de), j.setAttribute(A, 1), j.removeAttribute(A), me && (x = function(e) {
						var t, r, i, n = this;
						if (n === e.target) {
							t = n[A], n[A] = r = w(n);
							for (i in r) {
								if (!(i in t)) return b(0, n, i, t[i], r[i], L);
								if (r[i] !== t[i]) return b(1, n, i, t[i], r[i], R)
							}
							for (i in t)
								if (!(i in r)) return b(2, n, i, t[i], r[i], k)
						}
					}, b = function(e, t, r, i, n, o) {
						var a = {
							attrChange: e,
							currentTarget: t,
							attrName: r,
							prevValue: i,
							newValue: n
						};
						a[o] = e, l(a)
					}, w = function(e) {
						for (var t, r, i = {}, n = e.attributes, o = 0, a = n.length; a > o; o++) t = n[o], r = t.name, "setAttribute" !== r && (i[r] = t.value);
						return i
					})), r[n] = function(e, t) {
						if (i = e.toUpperCase(), fe || (fe = !0, te ? (M = function(e, t) {
								function r(e, t) {
									for (var r = 0, i = e.length; i > r; t(e[r++]));
								}
								return new te(function(i) {
									for (var n, o, a, s = 0, h = i.length; h > s; s++) n = i[s], "childList" === n.type ? (r(n.addedNodes, e), r(n.removedNodes, t)) : (o = n.target, ge && o.attributeChangedCallback && "style" !== n.attributeName && (a = se.call(o, n.attributeName), a !== n.oldValue && o.attributeChangedCallback(n.attributeName, n.oldValue, a)))
								})
							}(s(S), s(C)), M.observe(r, {
								childList: !0,
								subtree: !0
							})) : (y = [], pe(function g() {
								for (; y.length;) y.shift().call(null, y.shift());
								pe(g)
							}), r.addEventListener("DOMNodeInserted", u(S)), r.addEventListener("DOMNodeRemoved", u(C))), r.addEventListener(D, d), r.addEventListener("readystatechange", d), r.createElement = function(e, t) {
								var i = le.apply(r, arguments),
									n = "" + e,
									o = G.call(B, (t ? N : I) + (t || n).toUpperCase()),
									a = o > -1;
								return t && (i.setAttribute("is", t = t.toLowerCase()), a && (a = c(n.toUpperCase(), t))), ge = !r.createElement.innerHTMLHelper, a && E(i, U[o]), i
							}, re.cloneNode = function(e) {
								var t = ae.call(this, !!e),
									r = h(t);
								return r > -1 && E(t, U[r]), e && a(t.querySelectorAll(z)), t
							}), -2 < G.call(B, N + i) + G.call(B, I + i) && v(e), !V.test(i) || -1 < G.call(F, i)) throw new Error("The type " + e + " is invalid");
						var i, n, l = function() {
								return f ? r.createElement(m, i) : r.createElement(m)
							},
							p = t || H,
							f = W.call(p, T),
							m = f ? t[T].toUpperCase() : i;
						return f && -1 < G.call(B, I + m) && v(m), n = B.push((f ? N : I) + i) - 1, z = z.concat(z.length ? "," : "", f ? m + '[is="' + e.toLowerCase() + '"]' : m), l.prototype = U[n] = W.call(p, "prototype") ? p.prototype : $(re), o(r.querySelectorAll(z), S), l
					}
				}
			}(window, document, Object, "registerElement")
		}, {}],
		9: [function(e, t) {
			"use strict";

			function r(e) {
				if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
				return Object(e)
			}
			var i = Object.prototype.hasOwnProperty,
				n = Object.prototype.propertyIsEnumerable;
			t.exports = Object.assign || function(e) {
				for (var t, o, a = r(e), s = 1; s < arguments.length; s++) {
					t = Object(arguments[s]);
					for (var h in t) i.call(t, h) && (a[h] = t[h]);
					if (Object.getOwnPropertySymbols) {
						o = Object.getOwnPropertySymbols(t);
						for (var c = 0; c < o.length; c++) n.call(t, o[c]) && (a[o[c]] = t[o[c]])
					}
				}
				return a
			}
		}, {}],
		10: [function(e, t) {
			(function(e) {
				var r = e.performance || {},
					i = function() {
						for (var e = ["now", "webkitNow", "msNow", "mozNow", "oNow"]; e.length;) {
							var t = e.shift();
							if (t in r) return r[t].bind(r)
						}
						var i = Date.now || function() {
								return (new Date).getTime()
							},
							n = (r.timing || {}).navigationStart || i();
						return function() {
							return i() - n
						}
					}();
				i.performanceNow = r.now, i.noConflict = function() {
					r.now = i.performanceNow
				}, i.conflict = function() {
					r.now = i
				}, i.conflict(), t.exports = i
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		11: [function(e, t) {
			! function(e) {
				function r(e, t) {
					return function() {
						e.apply(t, arguments)
					}
				}

				function i(e) {
					if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
					if ("function" != typeof e) throw new TypeError("not a function");
					this._state = null, this._value = null, this._deferreds = [], c(e, r(o, this), r(a, this))
				}

				function n(e) {
					var t = this;
					return null === this._state ? void this._deferreds.push(e) : void u(function() {
						var r = t._state ? e.onFulfilled : e.onRejected;
						if (null === r) return void(t._state ? e.resolve : e.reject)(t._value);
						var i;
						try {
							i = r(t._value)
						} catch (n) {
							return void e.reject(n)
						}
						e.resolve(i)
					})
				}

				function o(e) {
					try {
						if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
						if (e && ("object" == typeof e || "function" == typeof e)) {
							var t = e.then;
							if ("function" == typeof t) return void c(r(t, e), r(o, this), r(a, this))
						}
						this._state = !0, this._value = e, s.call(this)
					} catch (i) {
						a.call(this, i)
					}
				}

				function a(e) {
					this._state = !1, this._value = e, s.call(this)
				}

				function s() {
					for (var e = 0, t = this._deferreds.length; t > e; e++) n.call(this, this._deferreds[e]);
					this._deferreds = null
				}

				function h(e, t, r, i) {
					this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = r, this.reject = i
				}

				function c(e, t, r) {
					var i = !1;
					try {
						e(function(e) {
							i || (i = !0, t(e))
						}, function(e) {
							i || (i = !0, r(e))
						})
					} catch (n) {
						if (i) return;
						i = !0, r(n)
					}
				}
				var l = setTimeout,
					u = "function" == typeof setImmediate && setImmediate || function(e) {
						l(e, 1)
					},
					d = Array.isArray || function(e) {
						return "[object Array]" === Object.prototype.toString.call(e)
					};
				i.prototype["catch"] = function(e) {
					return this.then(null, e)
				}, i.prototype.then = function(e, t) {
					var r = this;
					return new i(function(i, o) {
						n.call(r, new h(e, t, i, o))
					})
				}, i.all = function() {
					var e = Array.prototype.slice.call(1 === arguments.length && d(arguments[0]) ? arguments[0] : arguments);
					return new i(function(t, r) {
						function i(o, a) {
							try {
								if (a && ("object" == typeof a || "function" == typeof a)) {
									var s = a.then;
									if ("function" == typeof s) return void s.call(a, function(e) {
										i(o, e)
									}, r)
								}
								e[o] = a, 0 === --n && t(e)
							} catch (h) {
								r(h)
							}
						}
						if (0 === e.length) return t([]);
						for (var n = e.length, o = 0; o < e.length; o++) i(o, e[o])
					})
				}, i.resolve = function(e) {
					return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
						t(e)
					})
				}, i.reject = function(e) {
					return new i(function(t, r) {
						r(e)
					})
				}, i.race = function(e) {
					return new i(function(t, r) {
						for (var i = 0, n = e.length; n > i; i++) e[i].then(t, r)
					})
				}, i._setImmediateFn = function(e) {
					u = e
				}, "undefined" != typeof t && t.exports ? t.exports = i : e.Promise || (e.Promise = i)
			}(this)
		}, {}],
		12: [function(e, t, r) {
			"use strict";

			function i(e, t, r) {
				function i() {
					s.id = o(i), a() - n >= e && (t.call(r), n = a())
				}
				var n = a(),
					s = Object.create(null);
				return s.id = o(i), s
			}

			function n(e) {
				o.cancel(e.id)
			}
			var o = e("raf"),
				a = e("time-now");
			r = t.exports = i, r.clear = n
		}, {
			raf: 13,
			"time-now": 14
		}],
		13: [function(e, t, r) {
			function i(e) {
				var t = (new Date).getTime(),
					r = Math.max(0, 16 - (t - n)),
					i = setTimeout(e, r);
				return n = t, i
			}
			r = t.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || i;
			var n = (new Date).getTime(),
				o = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;
			r.cancel = function(e) {
				o.call(window, e)
			}
		}, {}],
		14: [function(e, t) {
			"use strict";
			t.exports = function() {
				var e = window && window.performance;
				return e && e.now ? e.now.bind(e) : function() {
					return (new Date).getTime()
				}
			}()
		}, {}],
		15: [function(e, t) {
			function r(e) {
				var t = function(e) {
						return e.trim()
					},
					r = {};
				return i(e).map(t).filter(Boolean).forEach(function(e) {
					var t = e.indexOf(":"),
						i = e.substr(0, t).trim(),
						n = e.substr(t + 1).trim();
					r[i] = n
				}), r
			}

			function i(e) {
				for (var t, r = [], i = 0, n = ";", o = /url\([^\)]+$/, a = ""; i < e.length;) t = e.indexOf(n, i), -1 === t && (t = e.length), a += e.substring(i, t), o.test(a) ? (a += ";", i = t + 1) : (r.push(a), a = "", i = t + 1);
				return r
			}

			function n(e) {
				return Object.keys(e).map(function(t) {
					return t + ":" + e[t]
				}).join(";")
			}

			function o(e) {
				return n(r(e))
			}
			t.exports.parse = r, t.exports.stringify = n, t.exports.normalize = o
		}, {}],
		16: [function() {
			THREE.VRControls = function(e, t) {
				function r(e) {
					for (var r = 0; r < e.length; r++) e[r] instanceof PositionSensorVRDevice && n.push(e[r]);
					0 === n.length && t && t("PositionSensorVRDevice not available")
				}
				var i = this,
					n = [];
				navigator.getVRDevices && navigator.getVRDevices().then(r), this.scale = 1, this.update = function() {
					for (var t = 0; t < n.length; t++) {
						var r = n[t],
							o = r.getState();
						null !== o.orientation && e.quaternion.copy(o.orientation), null !== o.position && e.position.copy(o.position).multiplyScalar(i.scale)
					}
				}, this.resetSensor = function() {
					for (var e = 0; e < n.length; e++) {
						var t = n[e];
						void 0 !== t.resetSensor ? t.resetSensor() : void 0 !== t.zeroSensor && t.zeroSensor()
					}
				}, this.zeroSensor = function() {
					console.warn("THREE.VRControls: .zeroSensor() is now .resetSensor()."), this.resetSensor()
				}, this.dispose = function() {
					n = []
				}
			}
		}, {}],
		17: [function() {
			THREE.VREffect = function(e, t) {
				function r(e) {
					for (var r = 0; r < e.length; r++)
						if (e[r] instanceof HMDVRDevice) {
							a = e[r];
							break
						}
					void 0 === a && t && t("HMD not available")
				}

				function i(e) {
					var t = 2 / (e.leftTan + e.rightTan),
						r = (e.leftTan - e.rightTan) * t * .5,
						i = 2 / (e.upTan + e.downTan),
						n = (e.upTan - e.downTan) * i * .5;
					return {
						scale: [t, i],
						offset: [r, n]
					}
				}

				function n(e, t, r, n) {
					t = void 0 === t ? !0 : t, r = void 0 === r ? .01 : r, n = void 0 === n ? 1e4 : n;
					var o = t ? -1 : 1,
						a = new THREE.Matrix4,
						s = a.elements,
						h = i(e);
					return s[0] = h.scale[0], s[1] = 0, s[2] = h.offset[0] * o, s[3] = 0, s[4] = 0, s[5] = h.scale[1], s[6] = -h.offset[1] * o, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = n / (r - n) * -o, s[11] = n * r / (r - n), s[12] = 0, s[13] = 0, s[14] = o, s[15] = 0, a.transpose(), a
				}

				function o(e, t, r, i) {
					var o = Math.PI / 180,
						a = {
							upTan: Math.tan(e.upDegrees * o),
							downTan: Math.tan(e.downDegrees * o),
							leftTan: Math.tan(e.leftDegrees * o),
							rightTan: Math.tan(e.rightDegrees * o)
						};
					return n(a, t, r, i)
				}
				var a, s, h, c, l;
				navigator.getVRDevices && navigator.getVRDevices().then(r), this.scale = 1, this.setSize = function(t, r) {
					e.setSize(t, r)
				};
				var u = !1,
					d = e.domElement,
					p = d.mozRequestFullScreen ? "mozfullscreenchange" : "webkitfullscreenchange";
				document.addEventListener(p, function() {
					u = document.mozFullScreenElement || document.webkitFullscreenElement
				}, !1), this.setFullScreen = function(e) {
					void 0 !== a && u !== e && (d.mozRequestFullScreen ? d.mozRequestFullScreen({
						vrDisplay: a
					}) : d.webkitRequestFullscreen && d.webkitRequestFullscreen({
						vrDisplay: a
					}))
				};
				var f = new THREE.PerspectiveCamera;
				f.layers.enable(1);
				var m = new THREE.PerspectiveCamera;
				m.layers.enable(2), this.render = function(t, r) {
					if (a) {
						var i = a.getEyeParameters("left"),
							n = a.getEyeParameters("right");
						s = i.eyeTranslation, c = n.eyeTranslation, h = i.recommendedFieldOfView, l = n.recommendedFieldOfView, Array.isArray(t) && (console.warn("THREE.VREffect.render() no longer supports arrays. Use object.layers instead."), t = t[0]);
						var u = e.getSize();
						return e.setScissorTest(!0), e.clear(), null === r.parent && r.updateMatrixWorld(), f.projectionMatrix = o(h, !0, r.near, r.far), m.projectionMatrix = o(l, !0, r.near, r.far), r.matrixWorld.decompose(f.position, f.quaternion, f.scale), r.matrixWorld.decompose(m.position, m.quaternion, m.scale), f.translateX(s.x * this.scale), m.translateX(c.x * this.scale), e.setViewport(0, 0, u.width / 2, u.height), e.setScissor(0, 0, u.width / 2, u.height), e.render(t, f), e.setViewport(u.width / 2, 0, u.width / 2, u.height), e.setScissor(u.width / 2, 0, u.width / 2, u.height), e.render(t, m), void e.setScissorTest(!1)
					}
					e.render(t, r)
				}
			}
		}, {}],
		18: [function() {
			THREE.ColladaLoader = function() {
				function e(e, r, i, n) {
					var o = 0;
					if (document.implementation && document.implementation.createDocument) {
						var a = new XMLHttpRequest;
						a.onreadystatechange = function() {
							4 === a.readyState ? (0 === a.status || 200 === a.status) && (a.response ? (Fe = r, t(a.response, void 0, e)) : n ? n() : console.error("ColladaLoader: Empty or non-existing file (" + e + ")")) : 3 === a.readyState && i && (0 === o && (o = a.getResponseHeader("Content-Length")), i({
								total: o,
								loaded: a.responseText.length
							}))
						}, a.open("GET", e, !0), a.send(null)
					} else alert("Don't know how to parse XML!")
				}

				function t(e, t, r) {
					if (Ne = (new DOMParser).parseFromString(e, "text/xml"), t = t || Fe, void 0 !== r) {
						var h = r.split("/");
						h.pop(), De = (h.length < 1 ? "." : h.join("/")) + "/"
					}
					i(), be(), Ue = n("library_images image", S, "image"), He = n("library_materials material", q, "material"), We = n("library_effects effect", Z, "effect"), Ge = n("library_geometries geometry", N, "geometry"), qe = n("library_cameras camera", ie, "camera"), Xe = n("library_lights light", oe, "light"), je = n("library_controllers controller", C, "controller"), ze = n("library_animations animation", $, "animation"), ke = n("library_visual_scenes visual_scene", R, "visual_scene"), Pe = n("library_kinematics_models kinematics_model", se, "kinematics_model"), Oe = [], Ie = [], Ce = o(), Ve = new THREE.Group;
					for (var c = 0; c < Ce.nodes.length; c++) Ve.add(g(Ce.nodes[c]));
					Ve.scale.multiplyScalar(Ke), s(), Te = a(), v();
					var l = {
						scene: Ve,
						morphs: Oe,
						skins: Ie,
						animations: Le,
						kinematics: Re,
						dae: {
							images: Ue,
							materials: He,
							cameras: qe,
							lights: Xe,
							effects: We,
							geometries: Ge,
							controllers: je,
							animations: ze,
							visualScenes: ke,
							visualScene: Ce,
							scene: Ce,
							kinematicsModels: Pe,
							kinematicsModel: Te
						}
					};
					return t && t(l), l
				}

				function r(e) {
					Ye = e
				}

				function i() {
					var e = Ne.querySelectorAll("asset"),
						t = e[0];
					if (t && t.childNodes)
						for (var r = 0; r < t.childNodes.length; r++) {
							var i = t.childNodes[r];
							switch (i.nodeName) {
								case "unit":
									var n = i.getAttribute("meter");
									n && (Ke = parseFloat(n));
									break;
								case "up_axis":
									Ze = i.textContent.charAt(0)
							}
						}
				}

				function n(e, t, r) {
					for (var i = Ne.querySelectorAll(e), n = {}, o = 0, a = i.length, s = 0; a > s; s++) {
						var h = i[s],
							c = (new t).parse(h);
						c.id && 0 !== c.id.length || (c.id = r + o++), n[c.id] = c
					}
					return n
				}

				function o() {
					var e = Ne.querySelectorAll("scene instance_visual_scene")[0];
					if (e) {
						var t = e.getAttribute("url").replace(/^#/, "");
						return ke[t.length > 0 ? t : "visual_scene0"]
					}
					return null
				}

				function a() {
					var e = Ne.querySelectorAll("instance_kinematics_model")[0];
					if (e) {
						var t = e.getAttribute("url").replace(/^#/, "");
						return Pe[t.length > 0 ? t : "kinematics_model0"]
					}
					return null
				}

				function s() {
					Le = [], h(Ve)
				}

				function h(e) {
					var t = Ce.getChildById(e.colladaId, !0),
						r = null;
					if (t && t.keys) {
						r = {
							fps: 60,
							hierarchy: [{
								node: t,
								keys: t.keys,
								sids: t.sids
							}],
							node: e,
							name: "animation_" + e.name,
							length: 0
						}, Le.push(r);
						for (var i = 0, n = t.keys.length; n > i; i++) r.length = Math.max(r.length, t.keys[i].time)
					} else r = {
						hierarchy: [{
							keys: [],
							sids: []
						}]
					};
					for (var i = 0, n = e.children.length; n > i; i++)
						for (var o = h(e.children[i]), a = 0, s = o.hierarchy.length; s > a; a++) r.hierarchy.push({
							keys: [],
							sids: []
						});
					return r
				}

				function c() {
					var e, t = 1e6,
						r = -t,
						i = 0;
					for (var n in ze) {
						var o = ze[n];
						e = e || o.id;
						for (var a = 0; a < o.sampler.length; a++) {
							var s = o.sampler[a];
							s.create(), t = Math.min(t, s.startTime), r = Math.max(r, s.endTime), i = Math.max(i, s.input.length)
						}
					}
					return {
						start: t,
						end: r,
						frames: i,
						ID: e
					}
				}

				function l(e, t) {
					var r = t instanceof D ? je[t.url] : t;
					if (!r || !r.morph) return void console.log("could not find morph controller!");
					for (var i = r.morph, n = 0; n < i.targets.length; n++) {
						var o = i.targets[n],
							a = Ge[o];
						if (a.mesh && a.mesh.primitives && a.mesh.primitives.length) {
							var s = a.mesh.primitives[0].geometry;
							s.vertices.length === e.vertices.length && e.morphTargets.push({
								name: "target_1",
								vertices: s.vertices
							})
						}
					}
					e.morphTargets.push({
						name: "target_Z",
						vertices: e.vertices
					})
				}

				function u(e, t, r, i) {
					if (e.world = e.world || new THREE.Matrix4, e.localworld = e.localworld || new THREE.Matrix4, e.world.copy(e.matrix), e.localworld.copy(e.matrix), e.channels && e.channels.length) {
						var n = e.channels[0],
							o = n.sampler.output[r];
						o instanceof THREE.Matrix4 && (e.world.copy(o), e.localworld.copy(o), 0 === r && e.matrix.copy(o))
					}
					i && e.world.multiplyMatrices(i, e.world), t.push(e);
					for (var a = 0; a < e.nodes.length; a++) u(e.nodes[a], t, r, e.world)
				}

				function d(e, t) {
					for (var r = 0; r < e.length; r++) {
						var i = e[r],
							n = -1;
						if ("JOINT" == i.type) {
							for (var o = 0; o < t.joints.length; o++)
								if (i.sid === t.joints[o]) {
									n = o;
									break
								}
							if (n >= 0) {
								var a = t.invBindMatrices[n];
								i.invBindMatrix = a, i.skinningMatrix = new THREE.Matrix4, i.skinningMatrix.multiplyMatrices(i.world, a), i.animatrix = new THREE.Matrix4, i.animatrix.copy(i.localworld), i.weights = [];
								for (var o = 0; o < t.weights.length; o++)
									for (var s = 0; s < t.weights[o].length; s++) {
										var h = t.weights[o][s];
										h.joint === n && i.weights.push(h)
									}
							} else console.warn("ColladaLoader: Could not find joint '" + i.sid + "'."), i.skinningMatrix = new THREE.Matrix4, i.weights = []
						}
					}
				}

				function p(e) {
					var t = [],
						r = function(e, t, i) {
							var n = {};
							n.name = t.sid, n.parent = e, n.matrix = t.matrix;
							var o = [new THREE.Vector3, new THREE.Quaternion, new THREE.Vector3];
							n.matrix.decompose(o[0], o[1], o[2]), n.pos = [o[0].x, o[0].y, o[0].z], n.scl = [o[2].x, o[2].y, o[2].z], n.rotq = [o[1].x, o[1].y, o[1].z, o[1].w], i.push(n);
							for (var a in t.nodes) r(t.sid, t.nodes[a], i)
						};
					return r(-1, e, t), t
				}

				function f(e, t, r) {
					var i = [];
					u(t, i, -1), d(i, r.skin);
					for (var n = new THREE.Vector3, o = [], a = 0; a < e.vertices.length; a++) o.push(new THREE.Vector3);
					for (a = 0; a < i.length; a++)
						if ("JOINT" == i[a].type)
							for (var s = 0; s < i[a].weights.length; s++) {
								var h = i[a].weights[s],
									c = h.index,
									l = h.weight,
									p = e.vertices[c],
									f = o[c];
								n.x = p.x, n.y = p.y, n.z = p.z, n.applyMatrix4(i[a].skinningMatrix), f.x += n.x * l, f.y += n.y * l, f.z += n.z * l
							}
					for (var a = 0; a < e.vertices.length; a++) e.vertices[a] = o[a]
				}

				function m(e, t, r) {
					var i = je[t.url];
					if (r = void 0 !== r ? r : 40, !i || !i.skin) return void console.log("ColladaLoader: Could not find skin controller.");
					if (!t.skeleton || !t.skeleton.length) return void console.log("ColladaLoader: Could not find the skeleton for the skin. ");
					for (var n = c(), o = Ce.getChildById(t.skeleton[0], !0) || Ce.getChildBySid(t.skeleton[0], !0), a = p(o), s = i.skin.joints, h = [], l = 0; l < s.length; l++)
						for (var m = 0; m < a.length; m++) a[m].name === s[l] && (h[l] = a[m]);
					for (var l = 0; l < h.length; l++)
						for (var m = 0; m < h.length; m++) h[l].parent === h[m].name && (h[l].parent = m); {
						var l, m, v;
						new THREE.Vector3
					}
					for (l = 0; l < e.vertices.length; l++) e.vertices[l].applyMatrix4(i.skin.bindShapeMatrix);
					for (var g = [], y = [], x = i.skin.weights, l = 0; l < x.length; l++) {
						var b = new THREE.Vector4(x[l][0] ? x[l][0].joint : 0, x[l][1] ? x[l][1].joint : 0, x[l][2] ? x[l][2].joint : 0, x[l][3] ? x[l][3].joint : 0),
							v = new THREE.Vector4(x[l][0] ? x[l][0].weight : 0, x[l][1] ? x[l][1].weight : 0, x[l][2] ? x[l][2].weight : 0, x[l][3] ? x[l][3].weight : 0);
						g.push(b), y.push(v)
					}
					e.skinIndices = g, e.skinWeights = y, e.bones = h;
					for (var w = {
							name: n.ID,
							fps: 30,
							length: n.frames / 30,
							hierarchy: []
						}, m = 0; m < h.length; m++) w.hierarchy.push({
						parent: h[m].parent,
						name: h[m].name,
						keys: []
					});
					for (console.log("ColladaLoader:", n.ID + " has " + h.length + " bones."), f(e, o, i), r = 0; r < n.frames; r++) {
						var M = [];
						u(o, M, r), d(M, i.skin);
						for (var l = 0; l < M.length; l++)
							for (var m = 0; m < w.hierarchy.length; m++)
								if (w.hierarchy[m].name === M[l].sid) {
									var _ = {};
									_.time = r / 30, _.matrix = M[l].animatrix, 0 === r && (M[l].matrix = _.matrix);
									var E = [new THREE.Vector3, new THREE.Quaternion, new THREE.Vector3];
									_.matrix.decompose(E[0], E[1], E[2]), _.pos = [E[0].x, E[0].y, E[0].z], _.scl = [E[2].x, E[2].y, E[2].z], _.rot = E[1], w.hierarchy[m].keys.push(_)
								}
						e.animation = w
					}
				}

				function v() {
					if (Te && 0 === Te.joints.length) return void(Re = void 0);
					var e = {},
						t = function(t, r) {
							var i = r.getAttribute("id"),
								n = Ce.getChildById(i, !0),
								o = Te.joints[t];
							Ve.traverse(function(r) {
								r.colladaId == i && (e[t] = {
									node: r,
									transforms: n.transforms,
									joint: o,
									position: o.zeroPosition
								})
							})
						};
					Re = {
						joints: Te && Te.joints,
						getJointValue: function(t) {
							var r = e[t];
							return r ? r.position : void console.log("getJointValue: joint " + t + " doesn't exist")
						},
						setJointValue: function(t, r) {
							var n = e[t];
							if (n) {
								var o = n.joint;
								if (r > o.limits.max || r < o.limits.min) console.log("setJointValue: joint " + t + " value " + r + " outside of limits (min: " + o.limits.min + ", max: " + o.limits.max + ")");
								else if (o["static"]) console.log("setJointValue: joint " + t + " is static");
								else {
									var a = n.node,
										s = o.axis,
										h = n.transforms,
										c = new THREE.Matrix4;
									for (i = 0; i < h.length; i++) {
										var l = h[i];
										if (l.sid && -1 !== l.sid.indexOf("joint" + t)) switch (o.type) {
											case "revolute":
												c.multiply(u.makeRotationAxis(s, THREE.Math.degToRad(r)));
												break;
											case "prismatic":
												c.multiply(u.makeTranslation(s.x * r, s.y * r, s.z * r));
												break;
											default:
												console.warn("setJointValue: unknown joint type: " + o.type)
										} else {
											var u = new THREE.Matrix4;
											switch (l.type) {
												case "matrix":
													c.multiply(l.obj);
													break;
												case "translate":
													c.multiply(u.makeTranslation(l.obj.x, l.obj.y, l.obj.z));
													break;
												case "rotate":
													c.multiply(u.makeRotationAxis(l.obj, l.angle))
											}
										}
									}
									var d = c.elements,
										p = Array.prototype.slice.call(d),
										f = [p[0], p[4], p[8], p[12], p[1], p[5], p[9], p[13], p[2], p[6], p[10], p[14], p[3], p[7], p[11], p[15]];
									a.matrix.set.apply(a.matrix, f), a.matrix.decompose(a.position, a.quaternion, a.scale)
								}
							} else console.log("setJointValue: joint " + t + " doesn't exist")
						}
					};
					var r = Ne.querySelector("scene instance_kinematics_scene");
					if (r)
						for (var i = 0; i < r.childNodes.length; i++) {
							var n = r.childNodes[i];
							if (1 == n.nodeType) switch (n.nodeName) {
								case "bind_joint_axis":
									var o = n.getAttribute("target").split("/").pop(),
										a = n.querySelector("axis param").textContent,
										s = parseInt(a.split("joint").pop().split(".")[0]),
										h = Ne.querySelector('[sid="' + o + '"]');
									if (h) {
										var c = h.parentElement;
										t(s, c)
									}
							}
						}
				}

				function g(e) {
					var t, r, i, n, o = new THREE.Object3D,
						a = !1;
					for (i = 0; i < e.controllers.length; i++) {
						var s = je[e.controllers[i].url];
						switch (s.type) {
							case "skin":
								if (Ge[s.skin.source]) {
									var h = new I;
									h.url = s.skin.source, h.instance_material = e.controllers[i].instance_material, e.geometries.push(h), a = !0, t = e.controllers[i]
								} else if (je[s.skin.source]) {
									var c = je[s.skin.source];
									if (r = c, c.morph && Ge[c.morph.source]) {
										var h = new I;
										h.url = c.morph.source, h.instance_material = e.controllers[i].instance_material, e.geometries.push(h)
									}
								}
								break;
							case "morph":
								if (Ge[s.morph.source]) {
									var h = new I;
									h.url = s.morph.source, h.instance_material = e.controllers[i].instance_material, e.geometries.push(h), r = e.controllers[i]
								}
								console.log("ColladaLoader: Morph-controller partially supported.")
						}
					}
					var u = {};
					for (i = 0; i < e.geometries.length; i++) {
						var d, p = e.geometries[i],
							f = p.instance_material,
							v = Ge[p.url],
							y = {},
							x = [],
							b = 0;
						if (v) {
							if (!v.mesh || !v.mesh.primitives) continue;
							if (0 === o.name.length && (o.name = v.id), f)
								for (n = 0; n < f.length; n++) {
									var w = f[n],
										M = He[w.target],
										_ = M.instance_effect.url,
										E = We[_].shader,
										A = E.material;
									if (v.doubleSided) {
										if (!(w.symbol in u)) {
											var S = A.clone();
											S.side = THREE.DoubleSide, u[w.symbol] = S
										}
										A = u[w.symbol]
									}
									A.opacity = A.opacity ? A.opacity : 1, y[w.symbol] = b, x.push(A), d = A, d.name = null === M.name || "" === M.name ? M.id : M.name, b++
								}
							var C, T = d || new THREE.MeshLambertMaterial({
									color: 14540253,
									side: v.doubleSided ? THREE.DoubleSide : THREE.FrontSide
								}),
								L = v.mesh.geometry3js;
							b > 1 && (T = new THREE.MultiMaterial(x)), void 0 !== t ? (m(L, t), L.morphTargets.length > 0 ? (T.morphTargets = !0, T.skinning = !1) : (T.morphTargets = !1, T.skinning = !0), C = new THREE.SkinnedMesh(L, T, !1), C.name = "skin_" + Ie.length, Ie.push(C)) : void 0 !== r ? (l(L, r), T.morphTargets = !0, C = new THREE.Mesh(L, T), C.name = "morph_" + Oe.length, Oe.push(C)) : C = L.isLineStrip === !0 ? new THREE.Line(L) : new THREE.Mesh(L, T), o.add(C)
						}
					}
					for (i = 0; i < e.cameras.length; i++) {
						var R = e.cameras[i],
							k = qe[R.url],
							P = new THREE.PerspectiveCamera(k.yfov, parseFloat(k.aspect_ratio), parseFloat(k.znear), parseFloat(k.zfar));
						o.add(P)
					}
					for (i = 0; i < e.lights.length; i++) {
						var D = null,
							O = e.lights[i],
							N = Xe[O.url];
						if (N && N.technique) {
							var V, F = N.color.getHex(),
								B = N.intensity,
								U = N.distance,
								z = N.falloff_angle;
							switch (N.technique) {
								case "directional":
									D = new THREE.DirectionalLight(F, B, U), D.position.set(0, 0, 1);
									break;
								case "point":
									D = new THREE.PointLight(F, B, U);
									break;
								case "spot":
									D = new THREE.SpotLight(F, B, U, z, V), D.position.set(0, 0, 1);
									break;
								case "ambient":
									D = new THREE.AmbientLight(F)
							}
						}
						D && o.add(D)
					}
					if (o.name = e.name || e.id || "", o.colladaId = e.id || "", o.layer = e.layer || "", o.matrix = e.matrix, o.matrix.decompose(o.position, o.quaternion, o.scale), Qe.centerGeometry && o.geometry) {
						var j = o.geometry.center();
						j.multiply(o.scale), j.applyQuaternion(o.quaternion), o.position.sub(j)
					}
					for (i = 0; i < e.nodes.length; i++) o.add(g(e.nodes[i], e));
					return o
				}

				function y(e) {
					for (var t = Ne.querySelectorAll("library_nodes node"), r = 0; r < t.length; r++) {
						var i = t[r].attributes.getNamedItem("id");
						if (i && i.value === e) return t[r]
					}
					return void 0
				}

				function x(e) {
					var t = [],
						r = 1e6,
						i = -1e6;
					for (var n in ze)
						for (var o = ze[n], a = 0; a < o.channel.length; a++) {
							var s = o.channel[a],
								h = o.sampler[a],
								n = s.target.split("/")[0];
							n == e.id && (h.create(), s.sampler = h, r = Math.min(r, h.startTime), i = Math.max(i, h.endTime), t.push(s))
						}
					return t.length && (e.startTime = r, e.endTime = i), t
				}

				function b(e) {
					if (e.channels && e.channels.length) {
						for (var t = [], r = [], i = 0, n = e.channels.length; n > i; i++) {
							var o, a = e.channels[i],
								s = a.fullSid,
								h = a.sampler,
								c = h.input,
								l = e.getTransformBySid(a.sid);
							if (a.arrIndices) {
								o = [];
								for (var u = 0, d = a.arrIndices.length; d > u; u++) o[u] = Ae(a.arrIndices[u])
							} else o = Se(a.member);
							if (l) {
								-1 === r.indexOf(s) && r.push(s);
								for (var u = 0, d = c.length; d > u; u++) {
									var p = c[u],
										f = h.getData(l.type, u, o),
										m = w(t, p);
									if (!m) {
										m = new re(p);
										var v = M(t, p);
										t.splice(-1 === v ? t.length : v, 0, m)
									}
									m.addTarget(s, l, o, f)
								}
							} else console.log('Could not find transform "' + a.sid + '" in node ' + e.id)
						}
						for (var i = 0; i < r.length; i++)
							for (var g = r[i], u = 0; u < t.length; u++) {
								var m = t[u];
								m.hasTarget(g) || _(t, m, u, g)
							}
						e.keys = t, e.sids = r
					}
				}

				function w(e, t) {
					for (var r = null, i = 0, n = e.length; n > i && null === r; i++) {
						var o = e[i];
						if (o.time === t) r = o;
						else if (o.time > t) break
					}
					return r
				}

				function M(e, t) {
					for (var r = -1, i = 0, n = e.length; n > i && -1 === r; i++) {
						var o = e[i];
						o.time >= t && (r = i)
					}
					return r
				}

				function _(e, t, r, i) {
					var n = A(e, i, r ? r - 1 : 0),
						o = E(e, i, r + 1);
					if (n && o) {
						var a, s = (t.time - n.time) / (o.time - n.time),
							h = n.getTarget(i),
							c = o.getTarget(i).data,
							l = h.data;
						if ("matrix" === h.type) a = l;
						else if (l.length) {
							a = [];
							for (var u = 0; u < l.length; ++u) a[u] = l[u] + (c[u] - l[u]) * s
						} else a = l + (c - l) * s;
						t.addTarget(i, h.transform, h.member, a)
					}
				}

				function E(e, t, r) {
					for (; r < e.length; r++) {
						var i = e[r];
						if (i.hasTarget(t)) return i
					}
					return null
				}

				function A(e, t, r) {
					for (r = r >= 0 ? r : r + e.length; r >= 0; r--) {
						var i = e[r];
						if (i.hasTarget(t)) return i
					}
					return null
				}

				function S() {
					this.id = "", this.init_from = ""
				}

				function C() {
					this.id = "", this.name = "", this.type = "", this.skin = null, this.morph = null
				}

				function T() {
					this.method = null, this.source = null, this.targets = null, this.weights = null
				}

				function L() {
					this.source = "", this.bindShapeMatrix = null, this.invBindMatrices = [], this.joints = [], this.weights = []
				}

				function R() {
					this.id = "", this.name = "", this.nodes = [], this.scene = new THREE.Group
				}

				function k() {
					this.id = "", this.name = "", this.sid = "", this.nodes = [], this.controllers = [], this.transforms = [], this.geometries = [], this.channels = [], this.matrix = new THREE.Matrix4
				}

				function P() {
					this.sid = "", this.type = "", this.data = [], this.obj = null
				}

				function D() {
					this.url = "", this.skeleton = [], this.instance_material = []
				}

				function O() {
					this.symbol = "", this.target = ""
				}

				function I() {
					this.url = "", this.instance_material = []
				}

				function N() {
					this.id = "", this.mesh = null
				}

				function V(e) {
					this.geometry = e.id, this.primitives = [], this.vertices = null, this.geometry3js = null
				}

				function F() {
					this.material = "", this.count = 0, this.inputs = [], this.vcount = null, this.p = [], this.geometry = new THREE.Geometry
				}

				function B() {
					F.call(this), this.vcount = []
				}

				function U() {
					F.call(this), this.vcount = 1
				}

				function z() {
					F.call(this), this.vcount = 3
				}

				function j() {
					this.source = "", this.count = 0, this.stride = 0, this.params = []
				}

				function G() {
					this.input = {}
				}

				function H() {
					this.semantic = "", this.offset = 0, this.source = "", this.set = 0
				}

				function W(e) {
					this.id = e, this.type = null
				}

				function q() {
					this.id = "", this.name = "", this.instance_effect = null
				}

				function X() {
					this.color = new THREE.Color, this.color.setRGB(Math.random(), Math.random(), Math.random()), this.color.a = 1, this.texture = null, this.texcoord = null, this.texOpts = null
				}

				function Y(e, t) {
					this.type = e, this.effect = t, this.material = null
				}

				function Q(e) {
					this.effect = e, this.init_from = null, this.format = null
				}

				function K(e) {
					this.effect = e, this.source = null, this.wrap_s = null, this.wrap_t = null, this.minfilter = null, this.magfilter = null, this.mipfilter = null
				}

				function Z() {
					this.id = "", this.name = "", this.shader = null, this.surface = {}, this.sampler = {}
				}

				function J() {
					this.url = ""
				}

				function $() {
					this.id = "", this.name = "", this.source = {}, this.sampler = [], this.channel = []
				}

				function ee(e) {
					this.animation = e, this.source = "", this.target = "", this.fullSid = null, this.sid = null, this.dotSyntax = null, this.arrSyntax = null, this.arrIndices = null, this.member = null
				}

				function te(e) {
					this.id = "", this.animation = e, this.inputs = [], this.input = null, this.output = null, this.strideOut = null, this.interpolation = null, this.startTime = null, this.endTime = null, this.duration = 0
				}

				function re(e) {
					this.targets = [], this.time = e
				}

				function ie() {
					this.id = "", this.name = "", this.technique = ""
				}

				function ne() {
					this.url = ""
				}

				function oe() {
					this.id = "", this.name = "", this.technique = ""
				}

				function ae() {
					this.url = ""
				}

				function se() {
					this.id = "", this.name = "", this.joints = [], this.links = []
				}

				function he() {
					this.sid = "", this.name = "", this.axis = new THREE.Vector3, this.limits = {
						min: 0,
						max: 0
					}, this.type = "", this["static"] = !1, this.zeroPosition = 0, this.middlePosition = 0
				}

				function ce() {
					this.sid = "", this.name = "", this.transforms = [], this.attachments = []
				}

				function le() {
					this.joint = "", this.transforms = [], this.links = []
				}

				function ue(e) {
					var t = e.getAttribute("id");
					return void 0 != Be[t] ? Be[t] : (Be[t] = new W(t).parse(e), Be[t])
				}

				function de(e) {
					for (var t = me(e), r = [], i = 0, n = t.length; n > i; i++) r.push("true" === t[i] || "1" === t[i] ? !0 : !1);
					return r
				}

				function pe(e) {
					for (var t = me(e), r = [], i = 0, n = t.length; n > i; i++) r.push(parseFloat(t[i]));
					return r
				}

				function fe(e) {
					for (var t = me(e), r = [], i = 0, n = t.length; n > i; i++) r.push(parseInt(t[i], 10));
					return r
				}

				function me(e) {
					return e.length > 0 ? ve(e).split(/\s+/) : []
				}

				function ve(e) {
					return e.replace(/^\s+/, "").replace(/\s+$/, "")
				}

				function ge(e, t, r) {
					return e.hasAttribute(t) ? parseInt(e.getAttribute(t), 10) : r
				}

				function ye(e, t) {
					var r = new THREE.ImageLoader;
					r.load(t, function(t) {
						e.image = t, e.needsUpdate = !0
					})
				}

				function xe(e, t) {
					e.doubleSided = !1;
					var r = t.querySelectorAll("extra double_sided")[0];
					r && r && 1 === parseInt(r.textContent, 10) && (e.doubleSided = !0)
				}

				function be() {
					if (Qe.convertUpAxis !== !0 || Ze === Qe.upAxis) Je = null;
					else switch (Ze) {
						case "X":
							Je = "Y" === Qe.upAxis ? "XtoY" : "XtoZ";
							break;
						case "Y":
							Je = "X" === Qe.upAxis ? "YtoX" : "YtoZ";
							break;
						case "Z":
							Je = "X" === Qe.upAxis ? "ZtoX" : "ZtoY"
					}
				}

				function we(e, t) {
					if (Qe.convertUpAxis === !0 && Ze !== Qe.upAxis) switch (Je) {
						case "XtoY":
							var r = e[0];
							e[0] = t * e[1], e[1] = r;
							break;
						case "XtoZ":
							var r = e[2];
							e[2] = e[1], e[1] = e[0], e[0] = r;
							break;
						case "YtoX":
							var r = e[0];
							e[0] = e[1], e[1] = t * r;
							break;
						case "YtoZ":
							var r = e[1];
							e[1] = t * e[2], e[2] = r;
							break;
						case "ZtoX":
							var r = e[0];
							e[0] = e[1], e[1] = e[2], e[2] = r;
							break;
						case "ZtoY":
							var r = e[1];
							e[1] = e[2], e[2] = t * r
					}
				}

				function Me(e, t) {
					if (Qe.convertUpAxis !== !0 || Ze === Qe.upAxis) return t;
					switch (e) {
						case "X":
							t = "XtoY" === Je ? -1 * t : t;
							break;
						case "Y":
							t = "YtoZ" === Je || "YtoX" === Je ? -1 * t : t;
							break;
						case "Z":
							t = "ZtoY" === Je ? -1 * t : t
					}
					return t
				}

				function _e(e, t) {
					var r = [e[t], e[t + 1], e[t + 2]];
					return we(r, -1), new THREE.Vector3(r[0], r[1], r[2])
				}

				function Ee(e) {
					if (Qe.convertUpAxis) {
						var t = [e[0], e[4], e[8]];
						we(t, -1), e[0] = t[0], e[4] = t[1], e[8] = t[2], t = [e[1], e[5], e[9]], we(t, -1), e[1] = t[0], e[5] = t[1], e[9] = t[2], t = [e[2], e[6], e[10]], we(t, -1), e[2] = t[0], e[6] = t[1], e[10] = t[2], t = [e[0], e[1], e[2]], we(t, -1), e[0] = t[0], e[1] = t[1], e[2] = t[2], t = [e[4], e[5], e[6]], we(t, -1), e[4] = t[0], e[5] = t[1], e[6] = t[2], t = [e[8], e[9], e[10]], we(t, -1), e[8] = t[0], e[9] = t[1], e[10] = t[2], t = [e[3], e[7], e[11]], we(t, -1), e[3] = t[0], e[7] = t[1], e[11] = t[2]
					}
					return (new THREE.Matrix4).set(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
				}

				function Ae(e) {
					if (e > -1 && 3 > e) {
						var t = ["X", "Y", "Z"],
							r = {
								X: 0,
								Y: 1,
								Z: 2
							};
						e = Se(t[e]), e = r[e]
					}
					return e
				}

				function Se(e) {
					if (Qe.convertUpAxis) switch (e) {
						case "X":
							switch (Je) {
								case "XtoY":
								case "XtoZ":
								case "YtoX":
									e = "Y";
									break;
								case "ZtoX":
									e = "Z"
							}
							break;
						case "Y":
							switch (Je) {
								case "XtoY":
								case "YtoX":
								case "ZtoX":
									e = "X";
									break;
								case "XtoZ":
								case "YtoZ":
								case "ZtoY":
									e = "Z"
							}
							break;
						case "Z":
							switch (Je) {
								case "XtoZ":
									e = "X";
									break;
								case "YtoZ":
								case "ZtoX":
								case "ZtoY":
									e = "Y"
							}
					}
					return e
				}
				var Ce, Te, Le, Re, ke, Pe, De, Oe, Ie, Ne = null,
					Ve = null,
					Fe = null,
					Be = {},
					Ue = {},
					ze = {},
					je = {},
					Ge = {},
					He = {},
					We = {},
					qe = {},
					Xe = {},
					Ye = THREE.SmoothShading,
					Qe = {
						centerGeometry: !1,
						convertUpAxis: !1,
						subdivideFaces: !0,
						upAxis: "Y",
						defaultEnvMap: null
					},
					Ke = 1,
					Ze = "Y",
					Je = null;
				return S.prototype.parse = function(e) {
					this.id = e.getAttribute("id");
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						"init_from" === r.nodeName && (this.init_from = r.textContent)
					}
					return this
				}, C.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name"), this.type = "none";
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						switch (r.nodeName) {
							case "skin":
								this.skin = (new L).parse(r), this.type = r.nodeName;
								break;
							case "morph":
								this.morph = (new T).parse(r), this.type = r.nodeName
						}
					}
					return this
				}, T.prototype.parse = function(e) {
					var t, r = {},
						i = [];
					for (this.method = e.getAttribute("method"), this.source = e.getAttribute("source").replace(/^#/, ""), t = 0; t < e.childNodes.length; t++) {
						var n = e.childNodes[t];
						if (1 == n.nodeType) switch (n.nodeName) {
							case "source":
								var o = (new W).parse(n);
								r[o.id] = o;
								break;
							case "targets":
								i = this.parseInputs(n);
								break;
							default:
								console.log(n.nodeName)
						}
					}
					for (t = 0; t < i.length; t++) {
						var a = i[t],
							o = r[a.source];
						switch (a.semantic) {
							case "MORPH_TARGET":
								this.targets = o.read();
								break;
							case "MORPH_WEIGHT":
								this.weights = o.read()
						}
					}
					return this
				}, T.prototype.parseInputs = function(e) {
					for (var t = [], r = 0; r < e.childNodes.length; r++) {
						var i = e.childNodes[r];
						if (1 == i.nodeType) switch (i.nodeName) {
							case "input":
								t.push((new H).parse(i))
						}
					}
					return t
				}, L.prototype.parse = function(e) {
					var t, r, i = {};
					this.source = e.getAttribute("source").replace(/^#/, ""), this.invBindMatrices = [], this.joints = [], this.weights = [];
					for (var n = 0; n < e.childNodes.length; n++) {
						var o = e.childNodes[n];
						if (1 == o.nodeType) switch (o.nodeName) {
							case "bind_shape_matrix":
								var a = pe(o.textContent);
								this.bindShapeMatrix = Ee(a);
								break;
							case "source":
								var s = (new W).parse(o);
								i[s.id] = s;
								break;
							case "joints":
								t = o;
								break;
							case "vertex_weights":
								r = o;
								break;
							default:
								console.log(o.nodeName)
						}
					}
					return this.parseJoints(t, i), this.parseWeights(r, i), this
				}, L.prototype.parseJoints = function(e, t) {
					for (var r = 0; r < e.childNodes.length; r++) {
						var i = e.childNodes[r];
						if (1 == i.nodeType) switch (i.nodeName) {
							case "input":
								var n = (new H).parse(i),
									o = t[n.source];
								"JOINT" === n.semantic ? this.joints = o.read() : "INV_BIND_MATRIX" === n.semantic && (this.invBindMatrices = o.read())
						}
					}
				}, L.prototype.parseWeights = function(e, t) {
					for (var r, i, n = [], o = 0; o < e.childNodes.length; o++) {
						var a = e.childNodes[o];
						if (1 == a.nodeType) switch (a.nodeName) {
							case "input":
								n.push((new H).parse(a));
								break;
							case "v":
								r = fe(a.textContent);
								break;
							case "vcount":
								i = fe(a.textContent)
						}
					}
					for (var s = 0, o = 0; o < i.length; o++) {
						for (var h = i[o], c = [], l = 0; h > l; l++) {
							for (var u = {}, d = 0; d < n.length; d++) {
								var p = n[d],
									f = r[s + p.offset];
								switch (p.semantic) {
									case "JOINT":
										u.joint = f;
										break;
									case "WEIGHT":
										u.weight = t[p.source].data[f]
								}
							}
							c.push(u), s += n.length
						}
						for (var l = 0; l < c.length; l++) c[l].index = o;
						this.weights.push(c)
					}
				}, R.prototype.getChildById = function(e, t) {
					for (var r = 0; r < this.nodes.length; r++) {
						var i = this.nodes[r].getChildById(e, t);
						if (i) return i
					}
					return null
				}, R.prototype.getChildBySid = function(e, t) {
					for (var r = 0; r < this.nodes.length; r++) {
						var i = this.nodes[r].getChildBySid(e, t);
						if (i) return i
					}
					return null
				}, R.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name"), this.nodes = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "node":
								this.nodes.push((new k).parse(r))
						}
					}
					return this
				}, k.prototype.getChannelForTransform = function(e) {
					for (var t = 0; t < this.channels.length; t++) {
						var r, i, n = this.channels[t],
							o = n.target.split("/"),
							a = (o.shift(), o.shift()),
							s = a.indexOf(".") >= 0,
							h = a.indexOf("(") >= 0;
						if (s) o = a.split("."), a = o.shift(), i = o.shift();
						else if (h) {
							r = a.split("("), a = r.shift();
							for (var c = 0; c < r.length; c++) r[c] = parseInt(r[c].replace(/\)/, ""))
						}
						if (a === e) return n.info = {
							sid: a,
							dotSyntax: s,
							arrSyntax: h,
							arrIndices: r
						}, n
					}
					return null
				}, k.prototype.getChildById = function(e, t) {
					if (this.id === e) return this;
					if (t)
						for (var r = 0; r < this.nodes.length; r++) {
							var i = this.nodes[r].getChildById(e, t);
							if (i) return i
						}
					return null
				}, k.prototype.getChildBySid = function(e, t) {
					if (this.sid === e) return this;
					if (t)
						for (var r = 0; r < this.nodes.length; r++) {
							var i = this.nodes[r].getChildBySid(e, t);
							if (i) return i
						}
					return null
				}, k.prototype.getTransformBySid = function(e) {
					for (var t = 0; t < this.transforms.length; t++)
						if (this.transforms[t].sid === e) return this.transforms[t];
					return null
				}, k.prototype.parse = function(e) {
					var t;
					this.id = e.getAttribute("id"), this.sid = e.getAttribute("sid"), this.name = e.getAttribute("name"), this.type = e.getAttribute("type"), this.layer = e.getAttribute("layer"), this.type = "JOINT" === this.type ? this.type : "NODE", this.nodes = [], this.transforms = [], this.geometries = [], this.cameras = [], this.lights = [], this.controllers = [], this.matrix = new THREE.Matrix4;
					for (var r = 0; r < e.childNodes.length; r++) {
						var i = e.childNodes[r];
						if (1 == i.nodeType) switch (i.nodeName) {
							case "node":
								this.nodes.push((new k).parse(i));
								break;
							case "instance_camera":
								this.cameras.push((new ne).parse(i));
								break;
							case "instance_controller":
								this.controllers.push((new D).parse(i));
								break;
							case "instance_geometry":
								this.geometries.push((new I).parse(i));
								break;
							case "instance_light":
								this.lights.push((new ae).parse(i));
								break;
							case "instance_node":
								t = i.getAttribute("url").replace(/^#/, "");
								var n = y(t);
								n && this.nodes.push((new k).parse(n));
								break;
							case "rotate":
							case "translate":
							case "scale":
							case "matrix":
							case "lookat":
							case "skew":
								this.transforms.push((new P).parse(i));
								break;
							case "extra":
								break;
							default:
								console.log(i.nodeName)
						}
					}
					return this.channels = x(this), b(this), this.updateMatrix(), this
				}, k.prototype.updateMatrix = function() {
					this.matrix.identity();
					for (var e = 0; e < this.transforms.length; e++) this.transforms[e].apply(this.matrix)
				}, P.prototype.parse = function(e) {
					return this.sid = e.getAttribute("sid"), this.type = e.nodeName, this.data = pe(e.textContent), this.convert(), this
				}, P.prototype.convert = function() {
					switch (this.type) {
						case "matrix":
							this.obj = Ee(this.data);
							break;
						case "rotate":
							this.angle = THREE.Math.degToRad(this.data[3]);
						case "translate":
							we(this.data, -1), this.obj = new THREE.Vector3(this.data[0], this.data[1], this.data[2]);
							break;
						case "scale":
							we(this.data, 1), this.obj = new THREE.Vector3(this.data[0], this.data[1], this.data[2]);
							break;
						default:
							console.log("Can not convert Transform of type " + this.type)
					}
				}, P.prototype.apply = function() {
					var e = new THREE.Matrix4;
					return function(t) {
						switch (this.type) {
							case "matrix":
								t.multiply(this.obj);
								break;
							case "translate":
								t.multiply(e.makeTranslation(this.obj.x, this.obj.y, this.obj.z));
								break;
							case "rotate":
								t.multiply(e.makeRotationAxis(this.obj, this.angle));
								break;
							case "scale":
								t.scale(this.obj)
						}
					}
				}(), P.prototype.update = function(e, t) {
					var r = ["X", "Y", "Z", "ANGLE"];
					switch (this.type) {
						case "matrix":
							if (t)
								if (1 === t.length) switch (t[0]) {
									case 0:
										this.obj.n11 = e[0], this.obj.n21 = e[1], this.obj.n31 = e[2], this.obj.n41 = e[3];
										break;
									case 1:
										this.obj.n12 = e[0], this.obj.n22 = e[1], this.obj.n32 = e[2], this.obj.n42 = e[3];
										break;
									case 2:
										this.obj.n13 = e[0], this.obj.n23 = e[1], this.obj.n33 = e[2], this.obj.n43 = e[3];
										break;
									case 3:
										this.obj.n14 = e[0], this.obj.n24 = e[1], this.obj.n34 = e[2], this.obj.n44 = e[3]
								} else if (2 === t.length) {
									var i = "n" + (t[0] + 1) + (t[1] + 1);
									this.obj[i] = e
								} else console.log("Incorrect addressing of matrix in transform.");
							else this.obj.copy(e);
							break;
						case "translate":
						case "scale":
							switch ("[object Array]" === Object.prototype.toString.call(t) && (t = r[t[0]]), t) {
								case "X":
									this.obj.x = e;
									break;
								case "Y":
									this.obj.y = e;
									break;
								case "Z":
									this.obj.z = e;
									break;
								default:
									this.obj.x = e[0], this.obj.y = e[1], this.obj.z = e[2]
							}
							break;
						case "rotate":
							switch ("[object Array]" === Object.prototype.toString.call(t) && (t = r[t[0]]), t) {
								case "X":
									this.obj.x = e;
									break;
								case "Y":
									this.obj.y = e;
									break;
								case "Z":
									this.obj.z = e;
									break;
								case "ANGLE":
									this.angle = THREE.Math.degToRad(e);
									break;
								default:
									this.obj.x = e[0], this.obj.y = e[1], this.obj.z = e[2], this.angle = THREE.Math.degToRad(e[3])
							}
					}
				}, D.prototype.parse = function(e) {
					this.url = e.getAttribute("url").replace(/^#/, ""), this.skeleton = [], this.instance_material = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 === r.nodeType) switch (r.nodeName) {
							case "skeleton":
								this.skeleton.push(r.textContent.replace(/^#/, ""));
								break;
							case "bind_material":
								for (var i = r.querySelectorAll("instance_material"), n = 0; n < i.length; n++) {
									var o = i[n];
									this.instance_material.push((new O).parse(o))
								}
								break;
							case "extra":
						}
					}
					return this
				}, O.prototype.parse = function(e) {
					return this.symbol = e.getAttribute("symbol"), this.target = e.getAttribute("target").replace(/^#/, ""), this
				}, I.prototype.parse = function(e) {
					this.url = e.getAttribute("url").replace(/^#/, ""), this.instance_material = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType && "bind_material" === r.nodeName) {
							for (var i = r.querySelectorAll("instance_material"), n = 0; n < i.length; n++) {
								var o = i[n];
								this.instance_material.push((new O).parse(o))
							}
							break
						}
					}
					return this
				}, N.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), xe(this, e);
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						switch (r.nodeName) {
							case "mesh":
								this.mesh = new V(this).parse(r);
								break;
							case "extra":
						}
					}
					return this
				}, V.prototype.parse = function(e) {
					this.primitives = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						switch (r.nodeName) {
							case "source":
								ue(r);
								break;
							case "vertices":
								this.vertices = (new G).parse(r);
								break;
							case "linestrips":
								this.primitives.push((new U).parse(r));
								break;
							case "triangles":
								this.primitives.push((new z).parse(r));
								break;
							case "polygons":
								this.primitives.push((new F).parse(r));
								break;
							case "polylist":
								this.primitives.push((new B).parse(r))
						}
					}
					if (this.geometry3js = new THREE.Geometry, null === this.vertices) return this;
					for (var i = Be[this.vertices.input.POSITION.source].data, t = 0; t < i.length; t += 3) this.geometry3js.vertices.push(_e(i, t).clone());
					for (var t = 0; t < this.primitives.length; t++) {
						var n = this.primitives[t];
						n.setVertices(this.vertices), this.handlePrimitive(n, this.geometry3js)
					}
					return this.geometry3js.calcNormals && (this.geometry3js.computeVertexNormals(), delete this.geometry3js.calcNormals), this
				}, V.prototype.handlePrimitive = function(e, t) {
					if (e instanceof U) return void(t.isLineStrip = !0);
					var r, i, n, o, a, s, h, c = e.p,
						l = e.inputs,
						u = 0,
						d = 3,
						p = 0,
						f = [];
					for (r = 0; r < l.length; r++) {
						n = l[r];
						var m = n.offset + 1;
						switch (p = m > p ? m : p, n.semantic) {
							case "TEXCOORD":
								f.push(n.set)
						}
					}
					for (var v = 0; v < c.length; ++v)
						for (var g = c[v], y = 0; y < g.length;) {
							var x = [],
								b = [],
								w = null,
								M = [];
							for (d = e.vcount ? e.vcount.length ? e.vcount[u++] : e.vcount : g.length / p, r = 0; d > r; r++)
								for (i = 0; i < l.length; i++) switch (n = l[i], s = Be[n.source], o = g[y + r * p + n.offset], h = s.accessor.params.length, a = o * h, n.semantic) {
									case "VERTEX":
										x.push(o);
										break;
									case "NORMAL":
										b.push(_e(s.data, a));
										break;
									case "TEXCOORD":
										w = w || {}, void 0 === w[n.set] && (w[n.set] = []), w[n.set].push(new THREE.Vector2(s.data[a], s.data[a + 1]));
										break;
									case "COLOR":
										M.push((new THREE.Color).setRGB(s.data[a], s.data[a + 1], s.data[a + 2]))
								}
							if (0 === b.length)
								if (n = this.vertices.input.NORMAL) {
									s = Be[n.source], h = s.accessor.params.length;
									for (var _ = 0, E = x.length; E > _; _++) b.push(_e(s.data, x[_] * h))
								} else t.calcNormals = !0;
							if (!w && (w = {}, n = this.vertices.input.TEXCOORD)) {
								f.push(n.set), s = Be[n.source], h = s.accessor.params.length;
								for (var _ = 0, E = x.length; E > _; _++) a = x[_] * h, void 0 === w[n.set] && (w[n.set] = []), w[n.set].push(new THREE.Vector2(s.data[a], 1 - s.data[a + 1]))
							}
							if (0 === M.length && (n = this.vertices.input.COLOR)) {
								s = Be[n.source], h = s.accessor.params.length;
								for (var _ = 0, E = x.length; E > _; _++) a = x[_] * h, M.push((new THREE.Color).setRGB(s.data[a], s.data[a + 1], s.data[a + 2]))
							}
							var A, S, C = null,
								T = [];
							if (3 === d) T.push(new THREE.Face3(x[0], x[1], x[2], b, M.length ? M : new THREE.Color));
							else if (4 === d) T.push(new THREE.Face3(x[0], x[1], x[3], b.length ? [b[0].clone(), b[1].clone(), b[3].clone()] : [], M.length ? [M[0], M[1], M[3]] : new THREE.Color)), T.push(new THREE.Face3(x[1], x[2], x[3], b.length ? [b[1].clone(), b[2].clone(), b[3].clone()] : [], M.length ? [M[1], M[2], M[3]] : new THREE.Color));
							else if (d > 4 && Qe.subdivideFaces) {
								var L = M.length ? M : new THREE.Color;
								for (i = 1; d - 1 > i;) T.push(new THREE.Face3(x[0], x[i], x[i + 1], b.length ? [b[0].clone(), b[i++].clone(), b[i].clone()] : [], L))
							}
							if (T.length)
								for (var _ = 0, E = T.length; E > _; _++)
									for (C = T[_], C.daeMaterial = e.material, t.faces.push(C), i = 0; i < f.length; i++) A = w[f[i]], S = d > 4 ? [A[0], A[_ + 1], A[_ + 2]] : 4 === d ? 0 === _ ? [A[0], A[1], A[3]] : [A[1].clone(), A[2], A[3].clone()] : [A[0], A[1], A[2]], void 0 === t.faceVertexUvs[i] && (t.faceVertexUvs[i] = []), t.faceVertexUvs[i].push(S);
							else console.log("dropped face with vcount " + d + " for geometry with id: " + t.id);
							y += p * d
						}
				}, F.prototype.setVertices = function(e) {
					for (var t = 0; t < this.inputs.length; t++) this.inputs[t].source === e.id && (this.inputs[t].source = e.input.POSITION.source)
				}, F.prototype.parse = function(e) {
					this.material = e.getAttribute("material"), this.count = ge(e, "count", 0);
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						switch (r.nodeName) {
							case "input":
								this.inputs.push((new H).parse(e.childNodes[t]));
								break;
							case "vcount":
								this.vcount = fe(r.textContent);
								break;
							case "p":
								this.p.push(fe(r.textContent));
								break;
							case "ph":
								console.warn("polygon holes not yet supported!")
						}
					}
					return this
				}, B.prototype = Object.create(F.prototype), B.prototype.constructor = B, U.prototype = Object.create(F.prototype), U.prototype.constructor = U, z.prototype = Object.create(F.prototype), z.prototype.constructor = z, j.prototype.parse = function(e) {
					this.params = [], this.source = e.getAttribute("source"), this.count = ge(e, "count", 0), this.stride = ge(e, "stride", 0);
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if ("param" === r.nodeName) {
							var i = {};
							i.name = r.getAttribute("name"), i.type = r.getAttribute("type"), this.params.push(i)
						}
					}
					return this
				}, G.prototype.parse = function(e) {
					this.id = e.getAttribute("id");
					for (var t = 0; t < e.childNodes.length; t++)
						if ("input" === e.childNodes[t].nodeName) {
							var r = (new H).parse(e.childNodes[t]);
							this.input[r.semantic] = r
						}
					return this
				}, H.prototype.parse = function(e) {
					return this.semantic = e.getAttribute("semantic"), this.source = e.getAttribute("source").replace(/^#/, ""), this.set = ge(e, "set", -1), this.offset = ge(e, "offset", 0), "TEXCOORD" === this.semantic && this.set < 0 && (this.set = 0), this
				}, W.prototype.parse = function(e) {
					this.id = e.getAttribute("id");
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						switch (r.nodeName) {
							case "bool_array":
								this.data = de(r.textContent), this.type = r.nodeName;
								break;
							case "float_array":
								this.data = pe(r.textContent), this.type = r.nodeName;
								break;
							case "int_array":
								this.data = fe(r.textContent), this.type = r.nodeName;
								break;
							case "IDREF_array":
							case "Name_array":
								this.data = me(r.textContent), this.type = r.nodeName;
								break;
							case "technique_common":
								for (var i = 0; i < r.childNodes.length; i++)
									if ("accessor" === r.childNodes[i].nodeName) {
										this.accessor = (new j).parse(r.childNodes[i]);
										break
									}
						}
					}
					return this
				}, W.prototype.read = function() {
					var e = [],
						t = this.accessor.params[0];
					switch (t.type) {
						case "IDREF":
						case "Name":
						case "name":
						case "float":
							return this.data;
						case "float4x4":
							for (var r = 0; r < this.data.length; r += 16) {
								var i = this.data.slice(r, r + 16),
									n = Ee(i);
								e.push(n)
							}
							break;
						default:
							console.log("ColladaLoader: Source: Read dont know how to read " + t.type + ".")
					}
					return e
				}, q.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name");
					for (var t = 0; t < e.childNodes.length; t++)
						if ("instance_effect" === e.childNodes[t].nodeName) {
							this.instance_effect = (new J).parse(e.childNodes[t]);
							break
						}
					return this
				}, X.prototype.isColor = function() {
					return null === this.texture
				}, X.prototype.isTexture = function() {
					return null != this.texture
				}, X.prototype.parse = function(e) {
					"transparent" === e.nodeName && (this.opaque = e.getAttribute("opaque"));
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "color":
								var i = pe(r.textContent);
								this.color = new THREE.Color, this.color.setRGB(i[0], i[1], i[2]), this.color.a = i[3];
								break;
							case "texture":
								this.texture = r.getAttribute("texture"), this.texcoord = r.getAttribute("texcoord"), this.texOpts = {
									offsetU: 0,
									offsetV: 0,
									repeatU: 1,
									repeatV: 1,
									wrapU: 1,
									wrapV: 1
								}, this.parseTexture(r)
						}
					}
					return this
				}, X.prototype.parseTexture = function(e) {
					if (!e.childNodes) return this;
					e.childNodes[1] && "extra" === e.childNodes[1].nodeName && (e = e.childNodes[1], e.childNodes[1] && "technique" === e.childNodes[1].nodeName && (e = e.childNodes[1]));
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						switch (r.nodeName) {
							case "offsetU":
							case "offsetV":
							case "repeatU":
							case "repeatV":
								this.texOpts[r.nodeName] = parseFloat(r.textContent);
								break;
							case "wrapU":
							case "wrapV":
								this.texOpts[r.nodeName] = "TRUE" === r.textContent.toUpperCase() ? 1 : parseInt(r.textContent);
								break;
							default:
								this.texOpts[r.nodeName] = r.textContent
						}
					}
					return this
				}, Y.prototype.parse = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "emission":
							case "diffuse":
							case "specular":
							case "transparent":
								this[r.nodeName] = (new X).parse(r);
								break;
							case "bump":
								var i = r.getAttribute("bumptype");
								i ? "heightfield" === i.toLowerCase() ? this.bump = (new X).parse(r) : "normalmap" === i.toLowerCase() ? this.normal = (new X).parse(r) : (console.error("Shader.prototype.parse: Invalid value for attribute 'bumptype' (" + i + ") - valid bumptypes are 'HEIGHTFIELD' and 'NORMALMAP' - defaulting to 'HEIGHTFIELD'"), this.bump = (new X).parse(r)) : (console.warn("Shader.prototype.parse: Attribute 'bumptype' missing from bump node - defaulting to 'HEIGHTFIELD'"), this.bump = (new X).parse(r));
								break;
							case "shininess":
							case "reflectivity":
							case "index_of_refraction":
							case "transparency":
								var n = r.querySelectorAll("float");
								n.length > 0 && (this[r.nodeName] = parseFloat(n[0].textContent))
						}
					}
					return this.create(), this
				}, Y.prototype.create = function() {
					var e = {},
						t = !1;
					if (void 0 !== this.transparency && void 0 !== this.transparent) {
						var r = (this.transparent, (this.transparent.color.r + this.transparent.color.g + this.transparent.color.b) / 3 * this.transparency);
						r > 0 && (t = !0, e.transparent = !0, e.opacity = 1 - r)
					}
					var i = {
						diffuse: "map",
						ambient: "lightMap",
						specular: "specularMap",
						emission: "emissionMap",
						bump: "bumpMap",
						normal: "normalMap"
					};
					for (var n in this) switch (n) {
						case "ambient":
						case "emission":
						case "diffuse":
						case "specular":
						case "bump":
						case "normal":
							var o = this[n];
							if (o instanceof X)
								if (o.isTexture()) {
									var a = o.texture,
										s = this.effect.sampler[a];
									if (void 0 !== s && void 0 !== s.source) {
										var h = this.effect.surface[s.source];
										if (void 0 !== h) {
											var c = Ue[h.init_from];
											if (c) {
												var l, u = De + c.init_from,
													d = THREE.Loader.Handlers.get(u);
												null !== d ? l = d.load(u) : (l = new THREE.Texture, ye(l, u)), l.wrapS = o.texOpts.wrapU ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping, l.wrapT = o.texOpts.wrapV ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping, l.offset.x = o.texOpts.offsetU, l.offset.y = o.texOpts.offsetV, l.repeat.x = o.texOpts.repeatU, l.repeat.y = o.texOpts.repeatV, e[i[n]] = l, "emission" === n && (e.emissive = 16777215)
											}
										}
									}
								} else "diffuse" !== n && t || ("emission" === n ? e.emissive = o.color.getHex() : e[n] = o.color.getHex());
							break;
						case "shininess":
							e[n] = this[n];
							break;
						case "reflectivity":
							e[n] = this[n], e[n] > 0 && (e.envMap = Qe.defaultEnvMap), e.combine = THREE.MixOperation;
							break;
						case "index_of_refraction":
							e.refractionRatio = this[n], 1 !== this[n] && (e.envMap = Qe.defaultEnvMap);
							break;
						case "transparency":
					}
					switch (e.shading = Ye, e.side = this.effect.doubleSided ? THREE.DoubleSide : THREE.FrontSide, void 0 !== e.diffuse && (e.color = e.diffuse, delete e.diffuse), this.type) {
						case "constant":
							void 0 != e.emissive && (e.color = e.emissive), this.material = new THREE.MeshBasicMaterial(e);
							break;
						case "phong":
						case "blinn":
							this.material = new THREE.MeshPhongMaterial(e);
							break;
						case "lambert":
						default:
							this.material = new THREE.MeshLambertMaterial(e)
					}
					return this.material
				}, Q.prototype.parse = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "init_from":
								this.init_from = r.textContent;
								break;
							case "format":
								this.format = r.textContent;
								break;
							default:
								console.log("unhandled Surface prop: " + r.nodeName)
						}
					}
					return this
				}, K.prototype.parse = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "source":
								this.source = r.textContent;
								break;
							case "minfilter":
								this.minfilter = r.textContent;
								break;
							case "magfilter":
								this.magfilter = r.textContent;
								break;
							case "mipfilter":
								this.mipfilter = r.textContent;
								break;
							case "wrap_s":
								this.wrap_s = r.textContent;
								break;
							case "wrap_t":
								this.wrap_t = r.textContent;
								break;
							default:
								console.log("unhandled Sampler2D prop: " + r.nodeName)
						}
					}
					return this
				}, Z.prototype.create = function() {
					return null === this.shader ? null : void 0
				}, Z.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name"), xe(this, e), this.shader = null;
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "profile_COMMON":
								this.parseTechnique(this.parseProfileCOMMON(r))
						}
					}
					return this
				}, Z.prototype.parseNewparam = function(e) {
					for (var t = e.getAttribute("sid"), r = 0; r < e.childNodes.length; r++) {
						var i = e.childNodes[r];
						if (1 == i.nodeType) switch (i.nodeName) {
							case "surface":
								this.surface[t] = new Q(this).parse(i);
								break;
							case "sampler2D":
								this.sampler[t] = new K(this).parse(i);
								break;
							case "extra":
								break;
							default:
								console.log(i.nodeName)
						}
					}
				}, Z.prototype.parseProfileCOMMON = function(e) {
					for (var t, r = 0; r < e.childNodes.length; r++) {
						var i = e.childNodes[r];
						if (1 == i.nodeType) switch (i.nodeName) {
							case "profile_COMMON":
								this.parseProfileCOMMON(i);
								break;
							case "technique":
								t = i;
								break;
							case "newparam":
								this.parseNewparam(i);
								break;
							case "image":
								var n = (new S).parse(i);
								Ue[n.id] = n;
								break;
							case "extra":
								break;
							default:
								console.log(i.nodeName)
						}
					}
					return t
				}, Z.prototype.parseTechnique = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "constant":
							case "lambert":
							case "blinn":
							case "phong":
								this.shader = new Y(r.nodeName, this).parse(r);
								break;
							case "extra":
								this.parseExtra(r)
						}
					}
				}, Z.prototype.parseExtra = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "technique":
								this.parseExtraTechnique(r)
						}
					}
				}, Z.prototype.parseExtraTechnique = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "bump":
								this.shader.parse(e)
						}
					}
				}, J.prototype.parse = function(e) {
					return this.url = e.getAttribute("url").replace(/^#/, ""), this
				}, $.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name"), this.source = {};
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "animation":
								var i = (new $).parse(r);
								for (var n in i.source) this.source[n] = i.source[n];
								for (var o = 0; o < i.channel.length; o++) this.channel.push(i.channel[o]), this.sampler.push(i.sampler[o]);
								break;
							case "source":
								var n = (new W).parse(r);
								this.source[n.id] = n;
								break;
							case "sampler":
								this.sampler.push(new te(this).parse(r));
								break;
							case "channel":
								this.channel.push(new ee(this).parse(r))
						}
					}
					return this
				}, ee.prototype.parse = function(e) {
					this.source = e.getAttribute("source").replace(/^#/, ""), this.target = e.getAttribute("target");
					var t = this.target.split("/"),
						r = (t.shift(), t.shift()),
						i = r.indexOf(".") >= 0,
						n = r.indexOf("(") >= 0;
					if (i) t = r.split("."), this.sid = t.shift(), this.member = t.shift();
					else if (n) {
						var o = r.split("(");
						this.sid = o.shift();
						for (var a = 0; a < o.length; a++) o[a] = parseInt(o[a].replace(/\)/, ""));
						this.arrIndices = o
					} else this.sid = r;
					return this.fullSid = r, this.dotSyntax = i, this.arrSyntax = n, this
				}, te.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.inputs = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "input":
								this.inputs.push((new H).parse(r))
						}
					}
					return this
				}, te.prototype.create = function() {
					for (var e = 0; e < this.inputs.length; e++) {
						var t = this.inputs[e],
							r = this.animation.source[t.source];
						switch (t.semantic) {
							case "INPUT":
								this.input = r.read();
								break;
							case "OUTPUT":
								this.output = r.read(), this.strideOut = r.accessor.stride;
								break;
							case "INTERPOLATION":
								this.interpolation = r.read();
								break;
							case "IN_TANGENT":
								break;
							case "OUT_TANGENT":
								break;
							default:
								console.log(t.semantic)
						}
					}
					if (this.startTime = 0, this.endTime = 0, this.duration = 0, this.input.length) {
						this.startTime = 1e8, this.endTime = -1e8;
						for (var e = 0; e < this.input.length; e++) this.startTime = Math.min(this.startTime, this.input[e]), this.endTime = Math.max(this.endTime, this.input[e]);
						this.duration = this.endTime - this.startTime
					}
				}, te.prototype.getData = function(e, t, r) {
					var i;
					if ("matrix" === e && 16 === this.strideOut) i = this.output[t];
					else if (this.strideOut > 1) {
						i = [], t *= this.strideOut;
						for (var n = 0; n < this.strideOut; ++n) i[n] = this.output[t + n];
						if (3 === this.strideOut) switch (e) {
							case "rotate":
							case "translate":
								we(i, -1);
								break;
							case "scale":
								we(i, 1)
						} else 4 === this.strideOut && "matrix" === e && we(i, -1)
					} else i = this.output[t], r && "translate" === e && (i = Me(r, i));
					return i
				}, re.prototype.addTarget = function(e, t, r, i) {
					this.targets.push({
						sid: e,
						member: r,
						transform: t,
						data: i
					})
				}, re.prototype.apply = function(e) {
					for (var t = 0; t < this.targets.length; ++t) {
						var r = this.targets[t];
						e && r.sid !== e || r.transform.update(r.data, r.member)
					}
				}, re.prototype.getTarget = function(e) {
					for (var t = 0; t < this.targets.length; ++t)
						if (this.targets[t].sid === e) return this.targets[t];
					return null
				}, re.prototype.hasTarget = function(e) {
					for (var t = 0; t < this.targets.length; ++t)
						if (this.targets[t].sid === e) return !0;
					return !1
				}, re.prototype.interpolate = function(e, t) {
					for (var r = 0, i = this.targets.length; i > r; r++) {
						var n, o = this.targets[r],
							a = e.getTarget(o.sid);
						if ("matrix" !== o.transform.type && a) {
							var s = (t - this.time) / (e.time - this.time),
								h = a.data,
								c = o.data;
							if (0 > s && (s = 0), s > 1 && (s = 1), c.length) {
								n = [];
								for (var l = 0; l < c.length; ++l) n[l] = c[l] + (h[l] - c[l]) * s
							} else n = c + (h - c) * s
						} else n = o.data;
						o.transform.update(n, o.member)
					}
				}, ie.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name");
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "optics":
								this.parseOptics(r)
						}
					}
					return this
				}, ie.prototype.parseOptics = function(e) {
					for (var t = 0; t < e.childNodes.length; t++)
						if ("technique_common" === e.childNodes[t].nodeName)
							for (var r = e.childNodes[t], i = 0; i < r.childNodes.length; i++)
								if (this.technique = r.childNodes[i].nodeName, "perspective" === this.technique)
									for (var n = r.childNodes[i], o = 0; o < n.childNodes.length; o++) {
										var a = n.childNodes[o];
										switch (a.nodeName) {
											case "yfov":
												this.yfov = a.textContent;
												break;
											case "xfov":
												this.xfov = a.textContent;
												break;
											case "znear":
												this.znear = a.textContent;
												break;
											case "zfar":
												this.zfar = a.textContent;
												break;
											case "aspect_ratio":
												this.aspect_ratio = a.textContent
										}
									} else if ("orthographic" === this.technique)
										for (var s = r.childNodes[i], o = 0; o < s.childNodes.length; o++) {
											var a = s.childNodes[o];
											switch (a.nodeName) {
												case "xmag":
													this.xmag = a.textContent;
													break;
												case "ymag":
													this.ymag = a.textContent;
													break;
												case "znear":
													this.znear = a.textContent;
													break;
												case "zfar":
													this.zfar = a.textContent;
													break;
												case "aspect_ratio":
													this.aspect_ratio = a.textContent
											}
										}
					return this
				}, ne.prototype.parse = function(e) {
					return this.url = e.getAttribute("url").replace(/^#/, ""), this
				}, oe.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name");
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "technique_common":
								this.parseCommon(r);
								break;
							case "technique":
								this.parseTechnique(r)
						}
					}
					return this
				}, oe.prototype.parseCommon = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) switch (e.childNodes[t].nodeName) {
						case "directional":
						case "point":
						case "spot":
						case "ambient":
							this.technique = e.childNodes[t].nodeName;
							for (var r = e.childNodes[t], i = 0; i < r.childNodes.length; i++) {
								var n = r.childNodes[i];
								switch (n.nodeName) {
									case "color":
										var o = pe(n.textContent);
										this.color = new THREE.Color(0), this.color.setRGB(o[0], o[1], o[2]), this.color.a = o[3];
										break;
									case "falloff_angle":
										this.falloff_angle = parseFloat(n.textContent);
										break;
									case "quadratic_attenuation":
										var a = parseFloat(n.textContent);
										this.distance = a ? Math.sqrt(1 / a) : 0
								}
							}
					}
					return this
				}, oe.prototype.parseTechnique = function(e) {
					this.profile = e.getAttribute("profile");
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						switch (r.nodeName) {
							case "intensity":
								this.intensity = parseFloat(r.textContent)
						}
					}
					return this
				}, ae.prototype.parse = function(e) {
					return this.url = e.getAttribute("url").replace(/^#/, ""), this
				}, se.prototype.parse = function(e) {
					this.id = e.getAttribute("id"), this.name = e.getAttribute("name"), this.joints = [], this.links = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "technique_common":
								this.parseCommon(r)
						}
					}
					return this
				}, se.prototype.parseCommon = function(e) {
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (e.childNodes[t].nodeName) {
							case "joint":
								this.joints.push((new he).parse(r));
								break;
							case "link":
								this.links.push((new ce).parse(r))
						}
					}
					return this
				}, he.prototype.parse = function(e) {
					this.sid = e.getAttribute("sid"), this.name = e.getAttribute("name"), this.axis = new THREE.Vector3, this.limits = {
						min: 0,
						max: 0
					}, this.type = "", this["static"] = !1, this.zeroPosition = 0, this.middlePosition = 0;
					var t = e.querySelector("axis"),
						r = pe(t.textContent);
					this.axis = _e(r, 0);
					var i = e.querySelector("limits min") ? parseFloat(e.querySelector("limits min").textContent) : -360,
						n = e.querySelector("limits max") ? parseFloat(e.querySelector("limits max").textContent) : 360;
					this.limits = {
						min: i,
						max: n
					};
					for (var o = ["prismatic", "revolute"], a = 0; a < o.length; a++) {
						var s = o[a],
							h = e.querySelector(s);
						h && (this.type = s)
					}
					return this.limits.min >= this.limits.max && (this["static"] = !0), this.middlePosition = (this.limits.min + this.limits.max) / 2, this
				}, ce.prototype.parse = function(e) {
					this.sid = e.getAttribute("sid"), this.name = e.getAttribute("name"), this.transforms = [], this.attachments = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "attachment_full":
								this.attachments.push((new le).parse(r));
								break;
							case "rotate":
							case "translate":
							case "matrix":
								this.transforms.push((new P).parse(r))
						}
					}
					return this
				}, le.prototype.parse = function(e) {
					this.joint = e.getAttribute("joint").split("/").pop(), this.links = [];
					for (var t = 0; t < e.childNodes.length; t++) {
						var r = e.childNodes[t];
						if (1 == r.nodeType) switch (r.nodeName) {
							case "link":
								this.links.push((new ce).parse(r));
								break;
							case "rotate":
							case "translate":
							case "matrix":
								this.transforms.push((new P).parse(r))
						}
					}
					return this
				}, {
					load: e,
					parse: t,
					setPreferredShading: r,
					applySkin: m,
					geometries: Ge,
					options: Qe
				}
			}
		}, {}],
		19: [function() {
			THREE.MTLLoader = function(e) {
				this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
			}, THREE.MTLLoader.prototype = {
				constructor: THREE.MTLLoader,
				load: function(e, t, r, i) {
					var n = this,
						o = new THREE.XHRLoader(this.manager);
					o.setPath(this.path), o.load(e, function(e) {
						t(n.parse(e))
					}, r, i)
				},
				setPath: function(e) {
					this.path = e
				},
				setBaseUrl: function(e) {
					this.baseUrl = e
				},
				setCrossOrigin: function(e) {
					this.crossOrigin = e
				},
				setMaterialOptions: function(e) {
					this.materialOptions = e
				},
				parse: function(e) {
					for (var t = e.split("\n"), r = {}, i = /\s+/, n = {}, o = 0; o < t.length; o++) {
						var a = t[o];
						if (a = a.trim(), 0 !== a.length && "#" !== a.charAt(0)) {
							var s = a.indexOf(" "),
								h = s >= 0 ? a.substring(0, s) : a;
							h = h.toLowerCase();
							var c = s >= 0 ? a.substring(s + 1) : "";
							if (c = c.trim(), "newmtl" === h) r = {
								name: c
							}, n[c] = r;
							else if (r)
								if ("ka" === h || "kd" === h || "ks" === h) {
									var l = c.split(i, 3);
									r[h] = [parseFloat(l[0]), parseFloat(l[1]), parseFloat(l[2])]
								} else r[h] = c
						}
					}
					var u = new THREE.MTLLoader.MaterialCreator(this.baseUrl, this.materialOptions);
					return u.setCrossOrigin(this.crossOrigin), u.setManager(this.manager), u.setMaterials(n), u
				}
			}, THREE.MTLLoader.MaterialCreator = function(e, t) {
				this.baseUrl = e, this.options = t, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide, this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping
			}, THREE.MTLLoader.MaterialCreator.prototype = {
				constructor: THREE.MTLLoader.MaterialCreator,
				setCrossOrigin: function(e) {
					this.crossOrigin = e
				},
				setManager: function(e) {
					this.manager = e
				},
				setMaterials: function(e) {
					this.materialsInfo = this.convert(e), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
				},
				convert: function(e) {
					if (!this.options) return e;
					var t = {};
					for (var r in e) {
						var i = e[r],
							n = {};
						t[r] = n;
						for (var o in i) {
							var a = !0,
								s = i[o],
								h = o.toLowerCase();
							switch (h) {
								case "kd":
								case "ka":
								case "ks":
									this.options && this.options.normalizeRGB && (s = [s[0] / 255, s[1] / 255, s[2] / 255]), this.options && this.options.ignoreZeroRGBs && 0 === s[0] && 0 === s[1] && 0 === s[1] && (a = !1)
							}
							a && (n[h] = s)
						}
					}
					return t
				},
				preload: function() {
					for (var e in this.materialsInfo) this.create(e)
				},
				getIndex: function(e) {
					return this.nameLookup[e]
				},
				getAsArray: function() {
					var e = 0;
					for (var t in this.materialsInfo) this.materialsArray[e] = this.create(t), this.nameLookup[t] = e, e++;
					return this.materialsArray
				},
				create: function(e) {
					return void 0 === this.materials[e] && this.createMaterial_(e), this.materials[e]
				},
				createMaterial_: function(e) {
					var t = this.materialsInfo[e],
						r = {
							name: e,
							side: this.side
						};
					for (var i in t) {
						var n = t[i];
						if ("" !== n) switch (i.toLowerCase()) {
							case "kd":
								r.color = (new THREE.Color).fromArray(n);
								break;
							case "ks":
								r.specular = (new THREE.Color).fromArray(n);
								break;
							case "map_kd":
								r.map = this.loadTexture(this.baseUrl + n), r.map.wrapS = this.wrap, r.map.wrapT = this.wrap;
								break;
							case "ns":
								r.shininess = parseFloat(n);
								break;
							case "d":
								1 > n && (r.opacity = n, r.transparent = !0);
								break;
							case "Tr":
								n > 0 && (r.opacity = 1 - n, r.transparent = !0);
								break;
							case "map_bump":
							case "bump":
								if (r.bumpMap) break;
								r.bumpMap = this.loadTexture(this.baseUrl + n), r.bumpMap.wrapS = this.wrap, r.bumpMap.wrapT = this.wrap
						}
					}
					return this.materials[e] = new THREE.MeshPhongMaterial(r), this.materials[e]
				},
				loadTexture: function(e, t, r, i, n) {
					var o, a = THREE.Loader.Handlers.get(e),
						s = void 0 !== this.manager ? this.manager : THREE.DefaultLoadingManager;
					return null === a && (a = new THREE.TextureLoader(s)), a.setCrossOrigin && a.setCrossOrigin(this.crossOrigin), o = a.load(e, r, i, n), void 0 !== t && (o.mapping = t), o
				}
			}, THREE.EventDispatcher.prototype.apply(THREE.MTLLoader.prototype)
		}, {}],
		20: [function() {
			THREE.OBJLoader = function(e) {
				this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.materials = null
			}, THREE.OBJLoader.prototype = {
				constructor: THREE.OBJLoader,
				load: function(e, t, r, i) {
					var n = this,
						o = new THREE.XHRLoader(n.manager);
					o.setPath(this.path), o.load(e, function(e) {
						t(n.parse(e))
					}, r, i)
				},
				setPath: function(e) {
					this.path = e
				},
				setMaterials: function(e) {
					this.materials = e
				},
				parse: function(e) {
					function t(e) {
						var t = {
								vertices: [],
								normals: [],
								uvs: []
							},
							r = {
								name: "",
								smooth: !0
							};
						c = {
							name: e,
							geometry: t,
							material: r
						}, l.push(c)
					}

					function r(e) {
						var t = parseInt(e);
						return 3 * (t >= 0 ? t - 1 : t + d.length / 3)
					}

					function i(e) {
						var t = parseInt(e);
						return 3 * (t >= 0 ? t - 1 : t + p.length / 3)
					}

					function n(e) {
						var t = parseInt(e);
						return 2 * (t >= 0 ? t - 1 : t + f.length / 2)
					}

					function o(e, t, r) {
						c.geometry.vertices.push(d[e], d[e + 1], d[e + 2], d[t], d[t + 1], d[t + 2], d[r], d[r + 1], d[r + 2])
					}

					function a(e, t, r) {
						c.geometry.normals.push(p[e], p[e + 1], p[e + 2], p[t], p[t + 1], p[t + 2], p[r], p[r + 1], p[r + 2])
					}

					function s(e, t, r) {
						c.geometry.uvs.push(f[e], f[e + 1], f[t], f[t + 1], f[r], f[r + 1])
					}

					function h(e, t, h, c, l, u, d, p, f, m, v, g) {
						var y, x = r(e),
							b = r(t),
							w = r(h);
						void 0 === c ? o(x, b, w) : (y = r(c), o(x, b, y), o(b, w, y)), void 0 !== l && (x = n(l), b = n(u), w = n(d), void 0 === c ? s(x, b, w) : (y = n(p), s(x, b, y), s(b, w, y))), void 0 !== f && (x = i(f), b = i(m), w = i(v), void 0 === c ? a(x, b, w) : (y = i(g), a(x, b, y), a(b, w, y)))
					}
					console.time("OBJLoader");
					var c, l = [],
						u = !1,
						d = [],
						p = [],
						f = [];
					t("");
					for (var m = /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, v = /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, g = /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, y = /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/, x = /^f\s+((-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+))(?:\s+((-?\d+)\/(-?\d+)))?/, b = /^f\s+((-?\d+)\/(-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+)\/(-?\d+))(?:\s+((-?\d+)\/(-?\d+)\/(-?\d+)))?/, w = /^f\s+((-?\d+)\/\/(-?\d+))\s+((-?\d+)\/\/(-?\d+))\s+((-?\d+)\/\/(-?\d+))(?:\s+((-?\d+)\/\/(-?\d+)))?/, M = /^[og]\s+(.+)/, _ = /^s\s+([01]|on|off)/, E = e.split("\n"), A = 0; A < E.length; A++) {
						var S = E[A];
						S = S.trim();
						var C;
						if (0 !== S.length && "#" !== S.charAt(0))
							if (null !== (C = m.exec(S))) d.push(parseFloat(C[1]), parseFloat(C[2]), parseFloat(C[3]));
							else if (null !== (C = v.exec(S))) p.push(parseFloat(C[1]), parseFloat(C[2]), parseFloat(C[3]));
						else if (null !== (C = g.exec(S))) f.push(parseFloat(C[1]), parseFloat(C[2]));
						else if (null !== (C = y.exec(S))) h(C[1], C[2], C[3], C[4]);
						else if (null !== (C = x.exec(S))) h(C[2], C[5], C[8], C[11], C[3], C[6], C[9], C[12]);
						else if (null !== (C = b.exec(S))) h(C[2], C[6], C[10], C[14], C[3], C[7], C[11], C[15], C[4], C[8], C[12], C[16]);
						else if (null !== (C = w.exec(S))) h(C[2], C[5], C[8], C[11], void 0, void 0, void 0, void 0, C[3], C[6], C[9], C[12]);
						else if (null !== (C = M.exec(S))) {
							var T = C[1].trim();
							u === !1 ? (u = !0, c.name = T) : t(T)
						} else if (/^usemtl /.test(S)) c.material.name = S.substring(7).trim();
						else if (/^mtllib /.test(S));
						else {
							if (null === (C = _.exec(S))) throw new Error("Unexpected line: " + S);
							c.material.smooth = "1" === C[1] || "on" === C[1]
						}
					}
					for (var L = new THREE.Group, A = 0, R = l.length; R > A; A++) {
						c = l[A];
						var k = c.geometry,
							P = new THREE.BufferGeometry;
						P.addAttribute("position", new THREE.BufferAttribute(new Float32Array(k.vertices), 3)), k.normals.length > 0 ? P.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(k.normals), 3)) : P.computeVertexNormals(), k.uvs.length > 0 && P.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(k.uvs), 2));
						var D;
						null !== this.materials && (D = this.materials.create(c.material.name)), D || (D = new THREE.MeshPhongMaterial, D.name = c.material.name), D.shading = c.material.smooth ? THREE.SmoothShading : THREE.FlatShading;
						var O = new THREE.Mesh(P, D);
						O.name = c.name, L.add(O)
					}
					return console.timeEnd("OBJLoader"), L
				}
			}
		}, {}],
		21: [function(e, r, i) {
			var n = {
				REVISION: "74"
			};
			"function" == typeof t && t.amd ? t("three", n) : "undefined" != typeof i && "undefined" != typeof r && (r.exports = n), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function(e) {
					return 0 > e ? -1 : e > 0 ? 1 : +e
				}), void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
					get: function() {
						return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
					}
				}), void 0 === Object.assign && Object.defineProperty(Object, "assign", {
					writable: !0,
					configurable: !0,
					value: function(e) {
						"use strict";
						if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
						for (var t = Object(e), r = 1, i = arguments.length; r !== i; ++r) {
							var n = arguments[r];
							if (void 0 !== n && null !== n) {
								n = Object(n);
								for (var o = Object.keys(n), a = 0, s = o.length; a !== s; ++a) {
									var h = o[a],
										c = Object.getOwnPropertyDescriptor(n, h);
									void 0 !== c && c.enumerable && (t[h] = n[h])
								}
							}
						}
						return t
					}
				}), n.MOUSE = {
					LEFT: 0,
					MIDDLE: 1,
					RIGHT: 2
				}, n.CullFaceNone = 0, n.CullFaceBack = 1, n.CullFaceFront = 2, n.CullFaceFrontBack = 3, n.FrontFaceDirectionCW = 0, n.FrontFaceDirectionCCW = 1, n.BasicShadowMap = 0, n.PCFShadowMap = 1, n.PCFSoftShadowMap = 2, n.FrontSide = 0, n.BackSide = 1, n.DoubleSide = 2, n.FlatShading = 1, n.SmoothShading = 2, n.NoColors = 0, n.FaceColors = 1, n.VertexColors = 2, n.NoBlending = 0, n.NormalBlending = 1, n.AdditiveBlending = 2, n.SubtractiveBlending = 3, n.MultiplyBlending = 4, n.CustomBlending = 5, n.AddEquation = 100, n.SubtractEquation = 101, n.ReverseSubtractEquation = 102, n.MinEquation = 103, n.MaxEquation = 104, n.ZeroFactor = 200, n.OneFactor = 201, n.SrcColorFactor = 202, n.OneMinusSrcColorFactor = 203, n.SrcAlphaFactor = 204, n.OneMinusSrcAlphaFactor = 205, n.DstAlphaFactor = 206, n.OneMinusDstAlphaFactor = 207, n.DstColorFactor = 208, n.OneMinusDstColorFactor = 209, n.SrcAlphaSaturateFactor = 210, n.NeverDepth = 0, n.AlwaysDepth = 1, n.LessDepth = 2, n.LessEqualDepth = 3, n.EqualDepth = 4, n.GreaterEqualDepth = 5, n.GreaterDepth = 6, n.NotEqualDepth = 7, n.MultiplyOperation = 0, n.MixOperation = 1, n.AddOperation = 2, n.UVMapping = 300, n.CubeReflectionMapping = 301, n.CubeRefractionMapping = 302, n.EquirectangularReflectionMapping = 303, n.EquirectangularRefractionMapping = 304, n.SphericalReflectionMapping = 305, n.RepeatWrapping = 1e3, n.ClampToEdgeWrapping = 1001, n.MirroredRepeatWrapping = 1002, n.NearestFilter = 1003, n.NearestMipMapNearestFilter = 1004, n.NearestMipMapLinearFilter = 1005, n.LinearFilter = 1006, n.LinearMipMapNearestFilter = 1007, n.LinearMipMapLinearFilter = 1008, n.UnsignedByteType = 1009, n.ByteType = 1010, n.ShortType = 1011, n.UnsignedShortType = 1012, n.IntType = 1013, n.UnsignedIntType = 1014, n.FloatType = 1015, n.HalfFloatType = 1025, n.UnsignedShort4444Type = 1016, n.UnsignedShort5551Type = 1017, n.UnsignedShort565Type = 1018, n.AlphaFormat = 1019, n.RGBFormat = 1020, n.RGBAFormat = 1021, n.LuminanceFormat = 1022, n.LuminanceAlphaFormat = 1023, n.RGBEFormat = n.RGBAFormat, n.RGB_S3TC_DXT1_Format = 2001, n.RGBA_S3TC_DXT1_Format = 2002, n.RGBA_S3TC_DXT3_Format = 2003, n.RGBA_S3TC_DXT5_Format = 2004, n.RGB_PVRTC_4BPPV1_Format = 2100, n.RGB_PVRTC_2BPPV1_Format = 2101, n.RGBA_PVRTC_4BPPV1_Format = 2102, n.RGBA_PVRTC_2BPPV1_Format = 2103, n.RGB_ETC1_Format = 2151, n.LoopOnce = 2200, n.LoopRepeat = 2201, n.LoopPingPong = 2202, n.InterpolateDiscrete = 2300, n.InterpolateLinear = 2301, n.InterpolateSmooth = 2302, n.ZeroCurvatureEnding = 2400, n.ZeroSlopeEnding = 2401, n.WrapAroundEnding = 2402, n.TrianglesDrawMode = 0, n.TriangleStripDrawMode = 1, n.TriangleFanDrawMode = 2, n.Color = function(e) {
					return 3 === arguments.length ? this.fromArray(arguments) : this.set(e)
				}, n.Color.prototype = {
					constructor: n.Color,
					r: 1,
					g: 1,
					b: 1,
					set: function(e) {
						return e instanceof n.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
					},
					setScalar: function(e) {
						this.r = e, this.g = e, this.b = e
					},
					setHex: function(e) {
						return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
					},
					setRGB: function(e, t, r) {
						return this.r = e, this.g = t, this.b = r, this
					},
					setHSL: function() {
						function e(e, t, r) {
							return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
						}
						return function(t, r, i) {
							if (t = n.Math.euclideanModulo(t, 1), r = n.Math.clamp(r, 0, 1), i = n.Math.clamp(i, 0, 1), 0 === r) this.r = this.g = this.b = i;
							else {
								var o = .5 >= i ? i * (1 + r) : i + r - i * r,
									a = 2 * i - o;
								this.r = e(a, o, t + 1 / 3), this.g = e(a, o, t), this.b = e(a, o, t - 1 / 3)
							}
							return this
						}
					}(),
					setStyle: function(e) {
						function t(t) {
							void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
						}
						var r;
						if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
							var i, o = r[1],
								a = r[2];
							switch (o) {
								case "rgb":
								case "rgba":
									if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[5]), this;
									if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[5]), this;
									break;
								case "hsl":
								case "hsla":
									if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
										var s = parseFloat(i[1]) / 360,
											h = parseInt(i[2], 10) / 100,
											c = parseInt(i[3], 10) / 100;
										return t(i[5]), this.setHSL(s, h, c)
									}
							}
						} else if (r = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
							var l = r[1],
								u = l.length;
							if (3 === u) return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
							if (6 === u) return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
						}
						if (e && e.length > 0) {
							var l = n.ColorKeywords[e];
							void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + e)
						}
						return this
					},
					clone: function() {
						return new this.constructor(this.r, this.g, this.b)
					},
					copy: function(e) {
						return this.r = e.r, this.g = e.g, this.b = e.b, this
					},
					copyGammaToLinear: function(e, t) {
						return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
					},
					copyLinearToGamma: function(e, t) {
						void 0 === t && (t = 2);
						var r = t > 0 ? 1 / t : 1;
						return this.r = Math.pow(e.r, r), this.g = Math.pow(e.g, r), this.b = Math.pow(e.b, r), this
					},
					convertGammaToLinear: function() {
						var e = this.r,
							t = this.g,
							r = this.b;
						return this.r = e * e, this.g = t * t, this.b = r * r, this
					},
					convertLinearToGamma: function() {
						return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
					},
					getHex: function() {
						return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
					},
					getHexString: function() {
						return ("000000" + this.getHex().toString(16)).slice(-6)
					},
					getHSL: function(e) {
						var t, r, i = e || {
								h: 0,
								s: 0,
								l: 0
							},
							n = this.r,
							o = this.g,
							a = this.b,
							s = Math.max(n, o, a),
							h = Math.min(n, o, a),
							c = (h + s) / 2;
						if (h === s) t = 0, r = 0;
						else {
							var l = s - h;
							switch (r = .5 >= c ? l / (s + h) : l / (2 - s - h), s) {
								case n:
									t = (o - a) / l + (a > o ? 6 : 0);
									break;
								case o:
									t = (a - n) / l + 2;
									break;
								case a:
									t = (n - o) / l + 4
							}
							t /= 6
						}
						return i.h = t, i.s = r, i.l = c, i
					},
					getStyle: function() {
						return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
					},
					offsetHSL: function(e, t, r) {
						var i = this.getHSL();
						return i.h += e, i.s += t, i.l += r, this.setHSL(i.h, i.s, i.l), this
					},
					add: function(e) {
						return this.r += e.r, this.g += e.g, this.b += e.b, this
					},
					addColors: function(e, t) {
						return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
					},
					addScalar: function(e) {
						return this.r += e, this.g += e, this.b += e, this
					},
					multiply: function(e) {
						return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
					},
					multiplyScalar: function(e) {
						return this.r *= e, this.g *= e, this.b *= e, this
					},
					lerp: function(e, t) {
						return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
					},
					equals: function(e) {
						return e.r === this.r && e.g === this.g && e.b === this.b
					},
					fromArray: function(e, t) {
						return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
					},
					toArray: function(e, t) {
						return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
					}
				}, n.ColorKeywords = {
					aliceblue: 15792383,
					antiquewhite: 16444375,
					aqua: 65535,
					aquamarine: 8388564,
					azure: 15794175,
					beige: 16119260,
					bisque: 16770244,
					black: 0,
					blanchedalmond: 16772045,
					blue: 255,
					blueviolet: 9055202,
					brown: 10824234,
					burlywood: 14596231,
					cadetblue: 6266528,
					chartreuse: 8388352,
					chocolate: 13789470,
					coral: 16744272,
					cornflowerblue: 6591981,
					cornsilk: 16775388,
					crimson: 14423100,
					cyan: 65535,
					darkblue: 139,
					darkcyan: 35723,
					darkgoldenrod: 12092939,
					darkgray: 11119017,
					darkgreen: 25600,
					darkgrey: 11119017,
					darkkhaki: 12433259,
					darkmagenta: 9109643,
					darkolivegreen: 5597999,
					darkorange: 16747520,
					darkorchid: 10040012,
					darkred: 9109504,
					darksalmon: 15308410,
					darkseagreen: 9419919,
					darkslateblue: 4734347,
					darkslategray: 3100495,
					darkslategrey: 3100495,
					darkturquoise: 52945,
					darkviolet: 9699539,
					deeppink: 16716947,
					deepskyblue: 49151,
					dimgray: 6908265,
					dimgrey: 6908265,
					dodgerblue: 2003199,
					firebrick: 11674146,
					floralwhite: 16775920,
					forestgreen: 2263842,
					fuchsia: 16711935,
					gainsboro: 14474460,
					ghostwhite: 16316671,
					gold: 16766720,
					goldenrod: 14329120,
					gray: 8421504,
					green: 32768,
					greenyellow: 11403055,
					grey: 8421504,
					honeydew: 15794160,
					hotpink: 16738740,
					indianred: 13458524,
					indigo: 4915330,
					ivory: 16777200,
					khaki: 15787660,
					lavender: 15132410,
					lavenderblush: 16773365,
					lawngreen: 8190976,
					lemonchiffon: 16775885,
					lightblue: 11393254,
					lightcoral: 15761536,
					lightcyan: 14745599,
					lightgoldenrodyellow: 16448210,
					lightgray: 13882323,
					lightgreen: 9498256,
					lightgrey: 13882323,
					lightpink: 16758465,
					lightsalmon: 16752762,
					lightseagreen: 2142890,
					lightskyblue: 8900346,
					lightslategray: 7833753,
					lightslategrey: 7833753,
					lightsteelblue: 11584734,
					lightyellow: 16777184,
					lime: 65280,
					limegreen: 3329330,
					linen: 16445670,
					magenta: 16711935,
					maroon: 8388608,
					mediumaquamarine: 6737322,
					mediumblue: 205,
					mediumorchid: 12211667,
					mediumpurple: 9662683,
					mediumseagreen: 3978097,
					mediumslateblue: 8087790,
					mediumspringgreen: 64154,
					mediumturquoise: 4772300,
					mediumvioletred: 13047173,
					midnightblue: 1644912,
					mintcream: 16121850,
					mistyrose: 16770273,
					moccasin: 16770229,
					navajowhite: 16768685,
					navy: 128,
					oldlace: 16643558,
					olive: 8421376,
					olivedrab: 7048739,
					orange: 16753920,
					orangered: 16729344,
					orchid: 14315734,
					palegoldenrod: 15657130,
					palegreen: 10025880,
					paleturquoise: 11529966,
					palevioletred: 14381203,
					papayawhip: 16773077,
					peachpuff: 16767673,
					peru: 13468991,
					pink: 16761035,
					plum: 14524637,
					powderblue: 11591910,
					purple: 8388736,
					red: 16711680,
					rosybrown: 12357519,
					royalblue: 4286945,
					saddlebrown: 9127187,
					salmon: 16416882,
					sandybrown: 16032864,
					seagreen: 3050327,
					seashell: 16774638,
					sienna: 10506797,
					silver: 12632256,
					skyblue: 8900331,
					slateblue: 6970061,
					slategray: 7372944,
					slategrey: 7372944,
					snow: 16775930,
					springgreen: 65407,
					steelblue: 4620980,
					tan: 13808780,
					teal: 32896,
					thistle: 14204888,
					tomato: 16737095,
					turquoise: 4251856,
					violet: 15631086,
					wheat: 16113331,
					white: 16777215,
					whitesmoke: 16119285,
					yellow: 16776960,
					yellowgreen: 10145074
				}, n.Quaternion = function(e, t, r, i) {
					this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== i ? i : 1
				}, n.Quaternion.prototype = {
					constructor: n.Quaternion,
					get x() {
						return this._x
					},
					set x(e) {
						this._x = e, this.onChangeCallback()
					},
					get y() {
						return this._y
					},
					set y(e) {
						this._y = e, this.onChangeCallback()
					},
					get z() {
						return this._z
					},
					set z(e) {
						this._z = e, this.onChangeCallback()
					},
					get w() {
						return this._w
					},
					set w(e) {
						this._w = e, this.onChangeCallback()
					},
					set: function(e, t, r, i) {
						return this._x = e, this._y = t, this._z = r, this._w = i, this.onChangeCallback(), this
					},
					clone: function() {
						return new this.constructor(this._x, this._y, this._z, this._w)
					},
					copy: function(e) {
						return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
					},
					setFromEuler: function(e, t) {
						if (e instanceof n.Euler == !1) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
						var r = Math.cos(e._x / 2),
							i = Math.cos(e._y / 2),
							o = Math.cos(e._z / 2),
							a = Math.sin(e._x / 2),
							s = Math.sin(e._y / 2),
							h = Math.sin(e._z / 2),
							c = e.order;
						return "XYZ" === c ? (this._x = a * i * o + r * s * h, this._y = r * s * o - a * i * h, this._z = r * i * h + a * s * o, this._w = r * i * o - a * s * h) : "YXZ" === c ? (this._x = a * i * o + r * s * h, this._y = r * s * o - a * i * h, this._z = r * i * h - a * s * o, this._w = r * i * o + a * s * h) : "ZXY" === c ? (this._x = a * i * o - r * s * h, this._y = r * s * o + a * i * h, this._z = r * i * h + a * s * o, this._w = r * i * o - a * s * h) : "ZYX" === c ? (this._x = a * i * o - r * s * h, this._y = r * s * o + a * i * h, this._z = r * i * h - a * s * o, this._w = r * i * o + a * s * h) : "YZX" === c ? (this._x = a * i * o + r * s * h, this._y = r * s * o + a * i * h, this._z = r * i * h - a * s * o, this._w = r * i * o - a * s * h) : "XZY" === c && (this._x = a * i * o - r * s * h, this._y = r * s * o - a * i * h, this._z = r * i * h + a * s * o, this._w = r * i * o + a * s * h), t !== !1 && this.onChangeCallback(), this
					},
					setFromAxisAngle: function(e, t) {
						var r = t / 2,
							i = Math.sin(r);
						return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(r), this.onChangeCallback(), this
					},
					setFromRotationMatrix: function(e) {
						var t, r = e.elements,
							i = r[0],
							n = r[4],
							o = r[8],
							a = r[1],
							s = r[5],
							h = r[9],
							c = r[2],
							l = r[6],
							u = r[10],
							d = i + s + u;
						return d > 0 ? (t = .5 / Math.sqrt(d + 1), this._w = .25 / t, this._x = (l - h) * t, this._y = (o - c) * t, this._z = (a - n) * t) : i > s && i > u ? (t = 2 * Math.sqrt(1 + i - s - u), this._w = (l - h) / t, this._x = .25 * t, this._y = (n + a) / t, this._z = (o + c) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - i - u), this._w = (o - c) / t, this._x = (n + a) / t, this._y = .25 * t, this._z = (h + l) / t) : (t = 2 * Math.sqrt(1 + u - i - s), this._w = (a - n) / t, this._x = (o + c) / t, this._y = (h + l) / t, this._z = .25 * t), this.onChangeCallback(), this
					},
					setFromUnitVectors: function() {
						var e, t, r = 1e-6;
						return function(i, o) {
							return void 0 === e && (e = new n.Vector3), t = i.dot(o) + 1, r > t ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, o), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize(), this
						}
					}(),
					inverse: function() {
						return this.conjugate().normalize(), this
					},
					conjugate: function() {
						return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
					},
					dot: function(e) {
						return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
					},
					lengthSq: function() {
						return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
					},
					length: function() {
						return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
					},
					normalize: function() {
						var e = this.length();
						return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
					},
					multiply: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
					},
					multiplyQuaternions: function(e, t) {
						var r = e._x,
							i = e._y,
							n = e._z,
							o = e._w,
							a = t._x,
							s = t._y,
							h = t._z,
							c = t._w;
						return this._x = r * c + o * a + i * h - n * s, this._y = i * c + o * s + n * a - r * h, this._z = n * c + o * h + r * s - i * a, this._w = o * c - r * a - i * s - n * h, this.onChangeCallback(), this
					},
					slerp: function(e, t) {
						if (0 === t) return this;
						if (1 === t) return this.copy(e);
						var r = this._x,
							i = this._y,
							n = this._z,
							o = this._w,
							a = o * e._w + r * e._x + i * e._y + n * e._z;
						if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = r, this._y = i, this._z = n, this;
						var s = Math.sqrt(1 - a * a);
						if (Math.abs(s) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (i + this._y), this._z = .5 * (n + this._z), this;
						var h = Math.atan2(s, a),
							c = Math.sin((1 - t) * h) / s,
							l = Math.sin(t * h) / s;
						return this._w = o * c + this._w * l, this._x = r * c + this._x * l, this._y = i * c + this._y * l, this._z = n * c + this._z * l, this.onChangeCallback(), this
					},
					equals: function(e) {
						return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
					},
					fromArray: function(e, t) {
						return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
					},
					toArray: function(e, t) {
						return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
					},
					onChange: function(e) {
						return this.onChangeCallback = e, this
					},
					onChangeCallback: function() {}
				}, Object.assign(n.Quaternion, {
					slerp: function(e, t, r, i) {
						return r.copy(e).slerp(t, i)
					},
					slerpFlat: function(e, t, r, i, n, o, a) {
						var s = r[i + 0],
							h = r[i + 1],
							c = r[i + 2],
							l = r[i + 3],
							u = n[o + 0],
							d = n[o + 1],
							p = n[o + 2],
							f = n[o + 3];
						if (l !== f || s !== u || h !== d || c !== p) {
							var m = 1 - a,
								v = s * u + h * d + c * p + l * f,
								g = v >= 0 ? 1 : -1,
								y = 1 - v * v;
							if (y > Number.EPSILON) {
								var x = Math.sqrt(y),
									b = Math.atan2(x, v * g);
								m = Math.sin(m * b) / x, a = Math.sin(a * b) / x
							}
							var w = a * g;
							if (s = s * m + u * w, h = h * m + d * w, c = c * m + p * w, l = l * m + f * w, m === 1 - a) {
								var M = 1 / Math.sqrt(s * s + h * h + c * c + l * l);
								s *= M, h *= M, c *= M, l *= M
							}
						}
						e[t] = s, e[t + 1] = h, e[t + 2] = c, e[t + 3] = l
					}
				}), n.Vector2 = function(e, t) {
					this.x = e || 0, this.y = t || 0
				}, n.Vector2.prototype = {
					constructor: n.Vector2,
					get width() {
						return this.x
					},
					set width(e) {
						this.x = e
					},
					get height() {
						return this.y
					},
					set height(e) {
						this.y = e
					},
					set: function(e, t) {
						return this.x = e, this.y = t, this
					},
					setScalar: function(e) {
						return this.x = e, this.y = e, this
					},
					setX: function(e) {
						return this.x = e, this
					},
					setY: function(e) {
						return this.y = e, this
					},
					setComponent: function(e, t) {
						switch (e) {
							case 0:
								this.x = t;
								break;
							case 1:
								this.y = t;
								break;
							default:
								throw new Error("index is out of range: " + e)
						}
					},
					getComponent: function(e) {
						switch (e) {
							case 0:
								return this.x;
							case 1:
								return this.y;
							default:
								throw new Error("index is out of range: " + e)
						}
					},
					clone: function() {
						return new this.constructor(this.x, this.y)
					},
					copy: function(e) {
						return this.x = e.x, this.y = e.y, this
					},
					add: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
					},
					addScalar: function(e) {
						return this.x += e, this.y += e, this
					},
					addVectors: function(e, t) {
						return this.x = e.x + t.x, this.y = e.y + t.y, this
					},
					addScaledVector: function(e, t) {
						return this.x += e.x * t, this.y += e.y * t, this
					},
					sub: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
					},
					subScalar: function(e) {
						return this.x -= e, this.y -= e, this
					},
					subVectors: function(e, t) {
						return this.x = e.x - t.x, this.y = e.y - t.y, this
					},
					multiply: function(e) {
						return this.x *= e.x, this.y *= e.y, this
					},
					multiplyScalar: function(e) {
						return isFinite(e) ? (this.x *= e, this.y *= e) : (this.x = 0, this.y = 0), this
					},
					divide: function(e) {
						return this.x /= e.x, this.y /= e.y, this
					},
					divideScalar: function(e) {
						return this.multiplyScalar(1 / e)
					},
					min: function(e) {
						return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
					},
					max: function(e) {
						return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
					},
					clamp: function(e, t) {
						return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
					},
					clampScalar: function() {
						var e, t;
						return function(r, i) {
							return void 0 === e && (e = new n.Vector2, t = new n.Vector2), e.set(r, r), t.set(i, i), this.clamp(e, t)
						}
					}(),
					clampLength: function(e, t) {
						var r = this.length();
						return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r), this
					},
					floor: function() {
						return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
					},
					ceil: function() {
						return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
					},
					round: function() {
						return this.x = Math.round(this.x), this.y = Math.round(this.y), this
					},
					roundToZero: function() {
						return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
					},
					negate: function() {
						return this.x = -this.x, this.y = -this.y, this
					},
					dot: function(e) {
						return this.x * e.x + this.y * e.y
					},
					lengthSq: function() {
						return this.x * this.x + this.y * this.y
					},
					length: function() {
						return Math.sqrt(this.x * this.x + this.y * this.y)
					},
					lengthManhattan: function() {
						return Math.abs(this.x) + Math.abs(this.y)
					},
					normalize: function() {
						return this.divideScalar(this.length())
					},
					angle: function() {
						var e = Math.atan2(this.y, this.x);
						return 0 > e && (e += 2 * Math.PI), e
					},
					distanceTo: function(e) {
						return Math.sqrt(this.distanceToSquared(e))
					},
					distanceToSquared: function(e) {
						var t = this.x - e.x,
							r = this.y - e.y;
						return t * t + r * r
					},
					setLength: function(e) {
						return this.multiplyScalar(e / this.length())
					},
					lerp: function(e, t) {
						return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
					},
					lerpVectors: function(e, t, r) {
						return this.subVectors(t, e).multiplyScalar(r).add(e), this
					},
					equals: function(e) {
						return e.x === this.x && e.y === this.y
					},
					fromArray: function(e, t) {
						return void 0 === t && (t = 0),
							this.x = e[t], this.y = e[t + 1], this
					},
					toArray: function(e, t) {
						return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
					},
					fromAttribute: function(e, t, r) {
						return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this
					},
					rotateAround: function(e, t) {
						var r = Math.cos(t),
							i = Math.sin(t),
							n = this.x - e.x,
							o = this.y - e.y;
						return this.x = n * r - o * i + e.x, this.y = n * i + o * r + e.y, this
					}
				}, n.Vector3 = function(e, t, r) {
					this.x = e || 0, this.y = t || 0, this.z = r || 0
				}, n.Vector3.prototype = {
					constructor: n.Vector3,
					set: function(e, t, r) {
						return this.x = e, this.y = t, this.z = r, this
					},
					setScalar: function(e) {
						return this.x = e, this.y = e, this.z = e, this
					},
					setX: function(e) {
						return this.x = e, this
					},
					setY: function(e) {
						return this.y = e, this
					},
					setZ: function(e) {
						return this.z = e, this
					},
					setComponent: function(e, t) {
						switch (e) {
							case 0:
								this.x = t;
								break;
							case 1:
								this.y = t;
								break;
							case 2:
								this.z = t;
								break;
							default:
								throw new Error("index is out of range: " + e)
						}
					},
					getComponent: function(e) {
						switch (e) {
							case 0:
								return this.x;
							case 1:
								return this.y;
							case 2:
								return this.z;
							default:
								throw new Error("index is out of range: " + e)
						}
					},
					clone: function() {
						return new this.constructor(this.x, this.y, this.z)
					},
					copy: function(e) {
						return this.x = e.x, this.y = e.y, this.z = e.z, this
					},
					add: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
					},
					addScalar: function(e) {
						return this.x += e, this.y += e, this.z += e, this
					},
					addVectors: function(e, t) {
						return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
					},
					addScaledVector: function(e, t) {
						return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
					},
					sub: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
					},
					subScalar: function(e) {
						return this.x -= e, this.y -= e, this.z -= e, this
					},
					subVectors: function(e, t) {
						return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
					},
					multiply: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
					},
					multiplyScalar: function(e) {
						return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e) : (this.x = 0, this.y = 0, this.z = 0), this
					},
					multiplyVectors: function(e, t) {
						return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
					},
					applyEuler: function() {
						var e;
						return function(t) {
							return t instanceof n.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new n.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this
						}
					}(),
					applyAxisAngle: function() {
						var e;
						return function(t, r) {
							return void 0 === e && (e = new n.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, r)), this
						}
					}(),
					applyMatrix3: function(e) {
						var t = this.x,
							r = this.y,
							i = this.z,
							n = e.elements;
						return this.x = n[0] * t + n[3] * r + n[6] * i, this.y = n[1] * t + n[4] * r + n[7] * i, this.z = n[2] * t + n[5] * r + n[8] * i, this
					},
					applyMatrix4: function(e) {
						var t = this.x,
							r = this.y,
							i = this.z,
							n = e.elements;
						return this.x = n[0] * t + n[4] * r + n[8] * i + n[12], this.y = n[1] * t + n[5] * r + n[9] * i + n[13], this.z = n[2] * t + n[6] * r + n[10] * i + n[14], this
					},
					applyProjection: function(e) {
						var t = this.x,
							r = this.y,
							i = this.z,
							n = e.elements,
							o = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
						return this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * o, this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * o, this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * o, this
					},
					applyQuaternion: function(e) {
						var t = this.x,
							r = this.y,
							i = this.z,
							n = e.x,
							o = e.y,
							a = e.z,
							s = e.w,
							h = s * t + o * i - a * r,
							c = s * r + a * t - n * i,
							l = s * i + n * r - o * t,
							u = -n * t - o * r - a * i;
						return this.x = h * s + u * -n + c * -a - l * -o, this.y = c * s + u * -o + l * -n - h * -a, this.z = l * s + u * -a + h * -o - c * -n, this
					},
					project: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
						}
					}(),
					unproject: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
						}
					}(),
					transformDirection: function(e) {
						var t = this.x,
							r = this.y,
							i = this.z,
							n = e.elements;
						return this.x = n[0] * t + n[4] * r + n[8] * i, this.y = n[1] * t + n[5] * r + n[9] * i, this.z = n[2] * t + n[6] * r + n[10] * i, this.normalize(), this
					},
					divide: function(e) {
						return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
					},
					divideScalar: function(e) {
						return this.multiplyScalar(1 / e)
					},
					min: function(e) {
						return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
					},
					max: function(e) {
						return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
					},
					clamp: function(e, t) {
						return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
					},
					clampScalar: function() {
						var e, t;
						return function(r, i) {
							return void 0 === e && (e = new n.Vector3, t = new n.Vector3), e.set(r, r, r), t.set(i, i, i), this.clamp(e, t)
						}
					}(),
					clampLength: function(e, t) {
						var r = this.length();
						return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r), this
					},
					floor: function() {
						return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
					},
					ceil: function() {
						return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
					},
					round: function() {
						return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
					},
					roundToZero: function() {
						return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
					},
					negate: function() {
						return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
					},
					dot: function(e) {
						return this.x * e.x + this.y * e.y + this.z * e.z
					},
					lengthSq: function() {
						return this.x * this.x + this.y * this.y + this.z * this.z
					},
					length: function() {
						return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
					},
					lengthManhattan: function() {
						return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
					},
					normalize: function() {
						return this.divideScalar(this.length())
					},
					setLength: function(e) {
						return this.multiplyScalar(e / this.length())
					},
					lerp: function(e, t) {
						return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
					},
					lerpVectors: function(e, t, r) {
						return this.subVectors(t, e).multiplyScalar(r).add(e), this
					},
					cross: function(e, t) {
						if (void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
						var r = this.x,
							i = this.y,
							n = this.z;
						return this.x = i * e.z - n * e.y, this.y = n * e.x - r * e.z, this.z = r * e.y - i * e.x, this
					},
					crossVectors: function(e, t) {
						var r = e.x,
							i = e.y,
							n = e.z,
							o = t.x,
							a = t.y,
							s = t.z;
						return this.x = i * s - n * a, this.y = n * o - r * s, this.z = r * a - i * o, this
					},
					projectOnVector: function() {
						var e, t;
						return function(r) {
							return void 0 === e && (e = new n.Vector3), e.copy(r).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
						}
					}(),
					projectOnPlane: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
						}
					}(),
					reflect: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
						}
					}(),
					angleTo: function(e) {
						var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
						return Math.acos(n.Math.clamp(t, -1, 1))
					},
					distanceTo: function(e) {
						return Math.sqrt(this.distanceToSquared(e))
					},
					distanceToSquared: function(e) {
						var t = this.x - e.x,
							r = this.y - e.y,
							i = this.z - e.z;
						return t * t + r * r + i * i
					},
					setFromMatrixPosition: function(e) {
						return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
					},
					setFromMatrixScale: function(e) {
						var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
							r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
							i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
						return this.x = t, this.y = r, this.z = i, this
					},
					setFromMatrixColumn: function(e, t) {
						var r = 4 * e,
							i = t.elements;
						return this.x = i[r], this.y = i[r + 1], this.z = i[r + 2], this
					},
					equals: function(e) {
						return e.x === this.x && e.y === this.y && e.z === this.z
					},
					fromArray: function(e, t) {
						return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
					},
					toArray: function(e, t) {
						return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
					},
					fromAttribute: function(e, t, r) {
						return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
					}
				}, n.Vector4 = function(e, t, r, i) {
					this.x = e || 0, this.y = t || 0, this.z = r || 0, this.w = void 0 !== i ? i : 1
				}, n.Vector4.prototype = {
					constructor: n.Vector4,
					set: function(e, t, r, i) {
						return this.x = e, this.y = t, this.z = r, this.w = i, this
					},
					setScalar: function(e) {
						return this.x = e, this.y = e, this.z = e, this.w = e, this
					},
					setX: function(e) {
						return this.x = e, this
					},
					setY: function(e) {
						return this.y = e, this
					},
					setZ: function(e) {
						return this.z = e, this
					},
					setW: function(e) {
						return this.w = e, this
					},
					setComponent: function(e, t) {
						switch (e) {
							case 0:
								this.x = t;
								break;
							case 1:
								this.y = t;
								break;
							case 2:
								this.z = t;
								break;
							case 3:
								this.w = t;
								break;
							default:
								throw new Error("index is out of range: " + e)
						}
					},
					getComponent: function(e) {
						switch (e) {
							case 0:
								return this.x;
							case 1:
								return this.y;
							case 2:
								return this.z;
							case 3:
								return this.w;
							default:
								throw new Error("index is out of range: " + e)
						}
					},
					clone: function() {
						return new this.constructor(this.x, this.y, this.z, this.w)
					},
					copy: function(e) {
						return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
					},
					add: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
					},
					addScalar: function(e) {
						return this.x += e, this.y += e, this.z += e, this.w += e, this
					},
					addVectors: function(e, t) {
						return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
					},
					addScaledVector: function(e, t) {
						return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
					},
					sub: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
					},
					subScalar: function(e) {
						return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
					},
					subVectors: function(e, t) {
						return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
					},
					multiplyScalar: function(e) {
						return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e, this.w *= e) : (this.x = 0, this.y = 0, this.z = 0, this.w = 0), this
					},
					applyMatrix4: function(e) {
						var t = this.x,
							r = this.y,
							i = this.z,
							n = this.w,
							o = e.elements;
						return this.x = o[0] * t + o[4] * r + o[8] * i + o[12] * n, this.y = o[1] * t + o[5] * r + o[9] * i + o[13] * n, this.z = o[2] * t + o[6] * r + o[10] * i + o[14] * n, this.w = o[3] * t + o[7] * r + o[11] * i + o[15] * n, this
					},
					divideScalar: function(e) {
						return this.multiplyScalar(1 / e)
					},
					setAxisAngleFromQuaternion: function(e) {
						this.w = 2 * Math.acos(e.w);
						var t = Math.sqrt(1 - e.w * e.w);
						return 1e-4 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
					},
					setAxisAngleFromRotationMatrix: function(e) {
						var t, r, i, n, o = .01,
							a = .1,
							s = e.elements,
							h = s[0],
							c = s[4],
							l = s[8],
							u = s[1],
							d = s[5],
							p = s[9],
							f = s[2],
							m = s[6],
							v = s[10];
						if (Math.abs(c - u) < o && Math.abs(l - f) < o && Math.abs(p - m) < o) {
							if (Math.abs(c + u) < a && Math.abs(l + f) < a && Math.abs(p + m) < a && Math.abs(h + d + v - 3) < a) return this.set(1, 0, 0, 0), this;
							t = Math.PI;
							var g = (h + 1) / 2,
								y = (d + 1) / 2,
								x = (v + 1) / 2,
								b = (c + u) / 4,
								w = (l + f) / 4,
								M = (p + m) / 4;
							return g > y && g > x ? o > g ? (r = 0, i = .707106781, n = .707106781) : (r = Math.sqrt(g), i = b / r, n = w / r) : y > x ? o > y ? (r = .707106781, i = 0, n = .707106781) : (i = Math.sqrt(y), r = b / i, n = M / i) : o > x ? (r = .707106781, i = .707106781, n = 0) : (n = Math.sqrt(x), r = w / n, i = M / n), this.set(r, i, n, t), this
						}
						var _ = Math.sqrt((m - p) * (m - p) + (l - f) * (l - f) + (u - c) * (u - c));
						return Math.abs(_) < .001 && (_ = 1), this.x = (m - p) / _, this.y = (l - f) / _, this.z = (u - c) / _, this.w = Math.acos((h + d + v - 1) / 2), this
					},
					min: function(e) {
						return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
					},
					max: function(e) {
						return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
					},
					clamp: function(e, t) {
						return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
					},
					clampScalar: function() {
						var e, t;
						return function(r, i) {
							return void 0 === e && (e = new n.Vector4, t = new n.Vector4), e.set(r, r, r, r), t.set(i, i, i, i), this.clamp(e, t)
						}
					}(),
					floor: function() {
						return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
					},
					ceil: function() {
						return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
					},
					round: function() {
						return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
					},
					roundToZero: function() {
						return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
					},
					negate: function() {
						return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
					},
					dot: function(e) {
						return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
					},
					lengthSq: function() {
						return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
					},
					length: function() {
						return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
					},
					lengthManhattan: function() {
						return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
					},
					normalize: function() {
						return this.divideScalar(this.length())
					},
					setLength: function(e) {
						return this.multiplyScalar(e / this.length())
					},
					lerp: function(e, t) {
						return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
					},
					lerpVectors: function(e, t, r) {
						return this.subVectors(t, e).multiplyScalar(r).add(e), this
					},
					equals: function(e) {
						return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
					},
					fromArray: function(e, t) {
						return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
					},
					toArray: function(e, t) {
						return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
					},
					fromAttribute: function(e, t, r) {
						return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this
					}
				}, n.Euler = function(e, t, r, i) {
					this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = i || n.Euler.DefaultOrder
				}, n.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], n.Euler.DefaultOrder = "XYZ", n.Euler.prototype = {
					constructor: n.Euler,
					get x() {
						return this._x
					},
					set x(e) {
						this._x = e, this.onChangeCallback()
					},
					get y() {
						return this._y
					},
					set y(e) {
						this._y = e, this.onChangeCallback()
					},
					get z() {
						return this._z
					},
					set z(e) {
						this._z = e, this.onChangeCallback()
					},
					get order() {
						return this._order
					},
					set order(e) {
						this._order = e, this.onChangeCallback()
					},
					set: function(e, t, r, i) {
						return this._x = e, this._y = t, this._z = r, this._order = i || this._order, this.onChangeCallback(), this
					},
					clone: function() {
						return new this.constructor(this._x, this._y, this._z, this._order)
					},
					copy: function(e) {
						return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
					},
					setFromRotationMatrix: function(e, t, r) {
						var i = n.Math.clamp,
							o = e.elements,
							a = o[0],
							s = o[4],
							h = o[8],
							c = o[1],
							l = o[5],
							u = o[9],
							d = o[2],
							p = o[6],
							f = o[10];
						return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(i(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(p, l), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(h, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-i(d, -1, 1)), Math.abs(d) < .99999 ? (this._x = Math.atan2(p, f), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-s, l))) : "YZX" === t ? (this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, a)) : (this._x = 0, this._y = Math.atan2(h, f))) : "XZY" === t ? (this._z = Math.asin(-i(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(h, a)) : (this._x = Math.atan2(-u, f), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, r !== !1 && this.onChangeCallback(), this
					},
					setFromQuaternion: function() {
						var e;
						return function(t, r, i) {
							return void 0 === e && (e = new n.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, r, i), this
						}
					}(),
					setFromVector3: function(e, t) {
						return this.set(e.x, e.y, e.z, t || this._order)
					},
					reorder: function() {
						var e = new n.Quaternion;
						return function(t) {
							e.setFromEuler(this), this.setFromQuaternion(e, t)
						}
					}(),
					equals: function(e) {
						return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
					},
					fromArray: function(e) {
						return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
					},
					toArray: function(e, t) {
						return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
					},
					toVector3: function(e) {
						return e ? e.set(this._x, this._y, this._z) : new n.Vector3(this._x, this._y, this._z)
					},
					onChange: function(e) {
						return this.onChangeCallback = e, this
					},
					onChangeCallback: function() {}
				}, n.Line3 = function(e, t) {
					this.start = void 0 !== e ? e : new n.Vector3, this.end = void 0 !== t ? t : new n.Vector3
				}, n.Line3.prototype = {
					constructor: n.Line3,
					set: function(e, t) {
						return this.start.copy(e), this.end.copy(t), this
					},
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.start.copy(e.start), this.end.copy(e.end), this
					},
					center: function(e) {
						var t = e || new n.Vector3;
						return t.addVectors(this.start, this.end).multiplyScalar(.5)
					},
					delta: function(e) {
						var t = e || new n.Vector3;
						return t.subVectors(this.end, this.start)
					},
					distanceSq: function() {
						return this.start.distanceToSquared(this.end)
					},
					distance: function() {
						return this.start.distanceTo(this.end)
					},
					at: function(e, t) {
						var r = t || new n.Vector3;
						return this.delta(r).multiplyScalar(e).add(this.start)
					},
					closestPointToPointParameter: function() {
						var e = new n.Vector3,
							t = new n.Vector3;
						return function(r, i) {
							e.subVectors(r, this.start), t.subVectors(this.end, this.start);
							var o = t.dot(t),
								a = t.dot(e),
								s = a / o;
							return i && (s = n.Math.clamp(s, 0, 1)), s
						}
					}(),
					closestPointToPoint: function(e, t, r) {
						var i = this.closestPointToPointParameter(e, t),
							o = r || new n.Vector3;
						return this.delta(o).multiplyScalar(i).add(this.start)
					},
					applyMatrix4: function(e) {
						return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
					},
					equals: function(e) {
						return e.start.equals(this.start) && e.end.equals(this.end)
					}
				}, n.Box2 = function(e, t) {
					this.min = void 0 !== e ? e : new n.Vector2(+(1 / 0), +(1 / 0)), this.max = void 0 !== t ? t : new n.Vector2(-(1 / 0), -(1 / 0))
				}, n.Box2.prototype = {
					constructor: n.Box2,
					set: function(e, t) {
						return this.min.copy(e), this.max.copy(t), this
					},
					setFromPoints: function(e) {
						this.makeEmpty();
						for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
						return this
					},
					setFromCenterAndSize: function() {
						var e = new n.Vector2;
						return function(t, r) {
							var i = e.copy(r).multiplyScalar(.5);
							return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
						}
					}(),
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.min.copy(e.min), this.max.copy(e.max), this
					},
					makeEmpty: function() {
						return this.min.x = this.min.y = +(1 / 0), this.max.x = this.max.y = -(1 / 0), this
					},
					isEmpty: function() {
						return this.max.x < this.min.x || this.max.y < this.min.y
					},
					center: function(e) {
						var t = e || new n.Vector2;
						return t.addVectors(this.min, this.max).multiplyScalar(.5)
					},
					size: function(e) {
						var t = e || new n.Vector2;
						return t.subVectors(this.max, this.min)
					},
					expandByPoint: function(e) {
						return this.min.min(e), this.max.max(e), this
					},
					expandByVector: function(e) {
						return this.min.sub(e), this.max.add(e), this
					},
					expandByScalar: function(e) {
						return this.min.addScalar(-e), this.max.addScalar(e), this
					},
					containsPoint: function(e) {
						return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
					},
					containsBox: function(e) {
						return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
					},
					getParameter: function(e, t) {
						var r = t || new n.Vector2;
						return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
					},
					intersectsBox: function(e) {
						return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
					},
					clampPoint: function(e, t) {
						var r = t || new n.Vector2;
						return r.copy(e).clamp(this.min, this.max)
					},
					distanceToPoint: function() {
						var e = new n.Vector2;
						return function(t) {
							var r = e.copy(t).clamp(this.min, this.max);
							return r.sub(t).length()
						}
					}(),
					intersect: function(e) {
						return this.min.max(e.min), this.max.min(e.max), this
					},
					union: function(e) {
						return this.min.min(e.min), this.max.max(e.max), this
					},
					translate: function(e) {
						return this.min.add(e), this.max.add(e), this
					},
					equals: function(e) {
						return e.min.equals(this.min) && e.max.equals(this.max)
					}
				}, n.Box3 = function(e, t) {
					this.min = void 0 !== e ? e : new n.Vector3(+(1 / 0), +(1 / 0), +(1 / 0)), this.max = void 0 !== t ? t : new n.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
				}, n.Box3.prototype = {
					constructor: n.Box3,
					set: function(e, t) {
						return this.min.copy(e), this.max.copy(t), this
					},
					setFromArray: function(e) {
						this.makeEmpty();
						for (var t = +(1 / 0), r = +(1 / 0), i = +(1 / 0), n = -(1 / 0), o = -(1 / 0), a = -(1 / 0), s = 0, h = e.length; h > s; s += 3) {
							var c = e[s],
								l = e[s + 1],
								u = e[s + 2];
							t > c && (t = c), r > l && (r = l), i > u && (i = u), c > n && (n = c), l > o && (o = l), u > a && (a = u)
						}
						this.min.set(t, r, i), this.max.set(n, o, a)
					},
					setFromPoints: function(e) {
						this.makeEmpty();
						for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
						return this
					},
					setFromCenterAndSize: function() {
						var e = new n.Vector3;
						return function(t, r) {
							var i = e.copy(r).multiplyScalar(.5);
							return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
						}
					}(),
					setFromObject: function() {
						var e;
						return function(t) {
							void 0 === e && (e = new n.Box3);
							var r = this;
							return this.makeEmpty(), t.updateMatrixWorld(!0), t.traverse(function(t) {
								var i = t.geometry;
								void 0 !== i && (null === i.boundingBox && i.computeBoundingBox(), e.copy(i.boundingBox), e.applyMatrix4(t.matrixWorld), r.union(e))
							}), this
						}
					}(),
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.min.copy(e.min), this.max.copy(e.max), this
					},
					makeEmpty: function() {
						return this.min.x = this.min.y = this.min.z = +(1 / 0), this.max.x = this.max.y = this.max.z = -(1 / 0), this
					},
					isEmpty: function() {
						return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
					},
					center: function(e) {
						var t = e || new n.Vector3;
						return t.addVectors(this.min, this.max).multiplyScalar(.5)
					},
					size: function(e) {
						var t = e || new n.Vector3;
						return t.subVectors(this.max, this.min)
					},
					expandByPoint: function(e) {
						return this.min.min(e), this.max.max(e), this
					},
					expandByVector: function(e) {
						return this.min.sub(e), this.max.add(e), this
					},
					expandByScalar: function(e) {
						return this.min.addScalar(-e), this.max.addScalar(e), this
					},
					containsPoint: function(e) {
						return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
					},
					containsBox: function(e) {
						return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
					},
					getParameter: function(e, t) {
						var r = t || new n.Vector3;
						return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
					},
					intersectsBox: function(e) {
						return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
					},
					intersectsSphere: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Vector3), this.clampPoint(t.center, e), e.distanceToSquared(t.center) <= t.radius * t.radius
						}
					}(),
					intersectsPlane: function(e) {
						var t, r;
						return e.normal.x > 0 ? (t = e.normal.x * this.min.x, r = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, r = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, r += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, r += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, r += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, r += e.normal.z * this.min.z), t <= e.constant && r >= e.constant
					},
					clampPoint: function(e, t) {
						var r = t || new n.Vector3;
						return r.copy(e).clamp(this.min, this.max)
					},
					distanceToPoint: function() {
						var e = new n.Vector3;
						return function(t) {
							var r = e.copy(t).clamp(this.min, this.max);
							return r.sub(t).length()
						}
					}(),
					getBoundingSphere: function() {
						var e = new n.Vector3;
						return function(t) {
							var r = t || new n.Sphere;
							return r.center = this.center(), r.radius = .5 * this.size(e).length(), r
						}
					}(),
					intersect: function(e) {
						return this.min.max(e.min), this.max.min(e.max), this
					},
					union: function(e) {
						return this.min.min(e.min), this.max.max(e.max), this
					},
					applyMatrix4: function() {
						var e = [new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3];
						return function(t) {
							return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this
						}
					}(),
					translate: function(e) {
						return this.min.add(e), this.max.add(e), this
					},
					equals: function(e) {
						return e.min.equals(this.min) && e.max.equals(this.max)
					}
				}, n.Matrix3 = function() {
					this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
				}, n.Matrix3.prototype = {
					constructor: n.Matrix3,
					set: function(e, t, r, i, n, o, a, s, h) {
						var c = this.elements;
						return c[0] = e, c[3] = t, c[6] = r, c[1] = i, c[4] = n, c[7] = o, c[2] = a, c[5] = s, c[8] = h, this
					},
					identity: function() {
						return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
					},
					clone: function() {
						return (new this.constructor).fromArray(this.elements)
					},
					copy: function(e) {
						var t = e.elements;
						return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
					},
					applyToVector3Array: function() {
						var e;
						return function(t, r, i) {
							void 0 === e && (e = new n.Vector3), void 0 === r && (r = 0), void 0 === i && (i = t.length);
							for (var o = 0, a = r; i > o; o += 3, a += 3) e.fromArray(t, a), e.applyMatrix3(this), e.toArray(t, a);
							return t
						}
					}(),
					applyToBuffer: function() {
						var e;
						return function(t, r, i) {
							void 0 === e && (e = new n.Vector3), void 0 === r && (r = 0), void 0 === i && (i = t.length / t.itemSize);
							for (var o = 0, a = r; i > o; o++, a++) e.x = t.getX(a), e.y = t.getY(a), e.z = t.getZ(a), e.applyMatrix3(this), t.setXYZ(e.x, e.y, e.z);
							return t
						}
					}(),
					multiplyScalar: function(e) {
						var t = this.elements;
						return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
					},
					determinant: function() {
						var e = this.elements,
							t = e[0],
							r = e[1],
							i = e[2],
							n = e[3],
							o = e[4],
							a = e[5],
							s = e[6],
							h = e[7],
							c = e[8];
						return t * o * c - t * a * h - r * n * c + r * a * s + i * n * h - i * o * s
					},
					getInverse: function(e, t) {
						var r = e.elements,
							i = this.elements;
						i[0] = r[10] * r[5] - r[6] * r[9], i[1] = -r[10] * r[1] + r[2] * r[9], i[2] = r[6] * r[1] - r[2] * r[5], i[3] = -r[10] * r[4] + r[6] * r[8], i[4] = r[10] * r[0] - r[2] * r[8], i[5] = -r[6] * r[0] + r[2] * r[4], i[6] = r[9] * r[4] - r[5] * r[8], i[7] = -r[9] * r[0] + r[1] * r[8], i[8] = r[5] * r[0] - r[1] * r[4];
						var n = r[0] * i[0] + r[1] * i[3] + r[2] * i[6];
						if (0 === n) {
							var o = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
							if (t) throw new Error(o);
							return console.warn(o), this.identity(), this
						}
						return this.multiplyScalar(1 / n), this
					},
					transpose: function() {
						var e, t = this.elements;
						return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
					},
					flattenToArrayOffset: function(e, t) {
						var r = this.elements;
						return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e
					},
					getNormalMatrix: function(e) {
						return this.getInverse(e).transpose(), this
					},
					transposeIntoArray: function(e) {
						var t = this.elements;
						return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
					},
					fromArray: function(e) {
						return this.elements.set(e), this
					},
					toArray: function() {
						var e = this.elements;
						return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
					}
				}, n.Matrix4 = function() {
					this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
				}, n.Matrix4.prototype = {
					constructor: n.Matrix4,
					set: function(e, t, r, i, n, o, a, s, h, c, l, u, d, p, f, m) {
						var v = this.elements;
						return v[0] = e, v[4] = t, v[8] = r, v[12] = i, v[1] = n, v[5] = o, v[9] = a, v[13] = s, v[2] = h, v[6] = c, v[10] = l, v[14] = u, v[3] = d, v[7] = p, v[11] = f, v[15] = m, this
					},
					identity: function() {
						return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
					},
					clone: function() {
						return (new n.Matrix4).fromArray(this.elements)
					},
					copy: function(e) {
						return this.elements.set(e.elements), this
					},
					copyPosition: function(e) {
						var t = this.elements,
							r = e.elements;
						return t[12] = r[12], t[13] = r[13], t[14] = r[14], this
					},
					extractBasis: function(e, t, r) {
						var i = this.elements;
						return e.set(i[0], i[1], i[2]), t.set(i[4], i[5], i[6]), r.set(i[8], i[9], i[10]), this
					},
					makeBasis: function(e, t, r) {
						return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1), this
					},
					extractRotation: function() {
						var e;
						return function(t) {
							void 0 === e && (e = new n.Vector3);
							var r = this.elements,
								i = t.elements,
								o = 1 / e.set(i[0], i[1], i[2]).length(),
								a = 1 / e.set(i[4], i[5], i[6]).length(),
								s = 1 / e.set(i[8], i[9], i[10]).length();
							return r[0] = i[0] * o, r[1] = i[1] * o, r[2] = i[2] * o, r[4] = i[4] * a, r[5] = i[5] * a, r[6] = i[6] * a, r[8] = i[8] * s, r[9] = i[9] * s, r[10] = i[10] * s, this
						}
					}(),
					makeRotationFromEuler: function(e) {
						e instanceof n.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
						var t = this.elements,
							r = e.x,
							i = e.y,
							o = e.z,
							a = Math.cos(r),
							s = Math.sin(r),
							h = Math.cos(i),
							c = Math.sin(i),
							l = Math.cos(o),
							u = Math.sin(o);
						if ("XYZ" === e.order) {
							var d = a * l,
								p = a * u,
								f = s * l,
								m = s * u;
							t[0] = h * l, t[4] = -h * u, t[8] = c, t[1] = p + f * c, t[5] = d - m * c, t[9] = -s * h, t[2] = m - d * c, t[6] = f + p * c, t[10] = a * h
						} else if ("YXZ" === e.order) {
							var v = h * l,
								g = h * u,
								y = c * l,
								x = c * u;
							t[0] = v + x * s, t[4] = y * s - g, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -s, t[2] = g * s - y, t[6] = x + v * s, t[10] = a * h
						} else if ("ZXY" === e.order) {
							var v = h * l,
								g = h * u,
								y = c * l,
								x = c * u;
							t[0] = v - x * s, t[4] = -a * u, t[8] = y + g * s, t[1] = g + y * s, t[5] = a * l, t[9] = x - v * s, t[2] = -a * c, t[6] = s, t[10] = a * h
						} else if ("ZYX" === e.order) {
							var d = a * l,
								p = a * u,
								f = s * l,
								m = s * u;
							t[0] = h * l, t[4] = f * c - p, t[8] = d * c + m, t[1] = h * u, t[5] = m * c + d, t[9] = p * c - f, t[2] = -c, t[6] = s * h, t[10] = a * h
						} else if ("YZX" === e.order) {
							var b = a * h,
								w = a * c,
								M = s * h,
								_ = s * c;
							t[0] = h * l, t[4] = _ - b * u, t[8] = M * u + w, t[1] = u, t[5] = a * l, t[9] = -s * l, t[2] = -c * l, t[6] = w * u + M, t[10] = b - _ * u
						} else if ("XZY" === e.order) {
							var b = a * h,
								w = a * c,
								M = s * h,
								_ = s * c;
							t[0] = h * l, t[4] = -u, t[8] = c * l, t[1] = b * u + _, t[5] = a * l, t[9] = w * u - M, t[2] = M * u - w, t[6] = s * l, t[10] = _ * u + b
						}
						return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
					},
					makeRotationFromQuaternion: function(e) {
						var t = this.elements,
							r = e.x,
							i = e.y,
							n = e.z,
							o = e.w,
							a = r + r,
							s = i + i,
							h = n + n,
							c = r * a,
							l = r * s,
							u = r * h,
							d = i * s,
							p = i * h,
							f = n * h,
							m = o * a,
							v = o * s,
							g = o * h;
						return t[0] = 1 - (d + f), t[4] = l - g, t[8] = u + v, t[1] = l + g, t[5] = 1 - (c + f), t[9] = p - m, t[2] = u - v, t[6] = p + m, t[10] = 1 - (c + d), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
					},
					lookAt: function() {
						var e, t, r;
						return function(i, o, a) {
							void 0 === e && (e = new n.Vector3), void 0 === t && (t = new n.Vector3), void 0 === r && (r = new n.Vector3);
							var s = this.elements;
							return r.subVectors(i, o).normalize(), 0 === r.lengthSq() && (r.z = 1), e.crossVectors(a, r).normalize(), 0 === e.lengthSq() && (r.x += 1e-4, e.crossVectors(a, r).normalize()), t.crossVectors(r, e), s[0] = e.x, s[4] = t.x, s[8] = r.x, s[1] = e.y, s[5] = t.y, s[9] = r.y, s[2] = e.z, s[6] = t.z, s[10] = r.z, this
						}
					}(),
					multiply: function(e, t) {
						return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
					},
					multiplyMatrices: function(e, t) {
						var r = e.elements,
							i = t.elements,
							n = this.elements,
							o = r[0],
							a = r[4],
							s = r[8],
							h = r[12],
							c = r[1],
							l = r[5],
							u = r[9],
							d = r[13],
							p = r[2],
							f = r[6],
							m = r[10],
							v = r[14],
							g = r[3],
							y = r[7],
							x = r[11],
							b = r[15],
							w = i[0],
							M = i[4],
							_ = i[8],
							E = i[12],
							A = i[1],
							S = i[5],
							C = i[9],
							T = i[13],
							L = i[2],
							R = i[6],
							k = i[10],
							P = i[14],
							D = i[3],
							O = i[7],
							I = i[11],
							N = i[15];
						return n[0] = o * w + a * A + s * L + h * D, n[4] = o * M + a * S + s * R + h * O, n[8] = o * _ + a * C + s * k + h * I, n[12] = o * E + a * T + s * P + h * N, n[1] = c * w + l * A + u * L + d * D, n[5] = c * M + l * S + u * R + d * O, n[9] = c * _ + l * C + u * k + d * I, n[13] = c * E + l * T + u * P + d * N, n[2] = p * w + f * A + m * L + v * D, n[6] = p * M + f * S + m * R + v * O, n[10] = p * _ + f * C + m * k + v * I, n[14] = p * E + f * T + m * P + v * N, n[3] = g * w + y * A + x * L + b * D, n[7] = g * M + y * S + x * R + b * O, n[11] = g * _ + y * C + x * k + b * I, n[15] = g * E + y * T + x * P + b * N, this
					},
					multiplyToArray: function(e, t, r) {
						var i = this.elements;
						return this.multiplyMatrices(e, t), r[0] = i[0], r[1] = i[1], r[2] = i[2], r[3] = i[3], r[4] = i[4], r[5] = i[5], r[6] = i[6], r[7] = i[7], r[8] = i[8], r[9] = i[9], r[10] = i[10], r[11] = i[11], r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15], this
					},
					multiplyScalar: function(e) {
						var t = this.elements;
						return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
					},
					applyToVector3Array: function() {
						var e;
						return function(t, r, i) {
							void 0 === e && (e = new n.Vector3), void 0 === r && (r = 0), void 0 === i && (i = t.length);
							for (var o = 0, a = r; i > o; o += 3, a += 3) e.fromArray(t, a), e.applyMatrix4(this), e.toArray(t, a);
							return t
						}
					}(),
					applyToBuffer: function() {
						var e;
						return function(t, r, i) {
							void 0 === e && (e = new n.Vector3), void 0 === r && (r = 0), void 0 === i && (i = t.length / t.itemSize);
							for (var o = 0, a = r; i > o; o++, a++) e.x = t.getX(a), e.y = t.getY(a), e.z = t.getZ(a), e.applyMatrix4(this), t.setXYZ(e.x, e.y, e.z);
							return t
						}
					}(),
					determinant: function() {
						var e = this.elements,
							t = e[0],
							r = e[4],
							i = e[8],
							n = e[12],
							o = e[1],
							a = e[5],
							s = e[9],
							h = e[13],
							c = e[2],
							l = e[6],
							u = e[10],
							d = e[14],
							p = e[3],
							f = e[7],
							m = e[11],
							v = e[15];
						return p * (+n * s * l - i * h * l - n * a * u + r * h * u + i * a * d - r * s * d) + f * (+t * s * d - t * h * u + n * o * u - i * o * d + i * h * c - n * s * c) + m * (+t * h * l - t * a * d - n * o * l + r * o * d + n * a * c - r * h * c) + v * (-i * a * c - t * s * l + t * a * u + i * o * l - r * o * u + r * s * c)
					},
					transpose: function() {
						var e, t = this.elements;
						return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
					},
					flattenToArrayOffset: function(e, t) {
						var r = this.elements;
						return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e[t + 9] = r[9], e[t + 10] = r[10], e[t + 11] = r[11], e[t + 12] = r[12], e[t + 13] = r[13], e[t + 14] = r[14], e[t + 15] = r[15], e
					},
					getPosition: function() {
						var e;
						return function() {
							void 0 === e && (e = new n.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
							var t = this.elements;
							return e.set(t[12], t[13], t[14])
						}
					}(),
					setPosition: function(e) {
						var t = this.elements;
						return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
					},
					getInverse: function(e, t) {
						var r = this.elements,
							i = e.elements,
							n = i[0],
							o = i[4],
							a = i[8],
							s = i[12],
							h = i[1],
							c = i[5],
							l = i[9],
							u = i[13],
							d = i[2],
							p = i[6],
							f = i[10],
							m = i[14],
							v = i[3],
							g = i[7],
							y = i[11],
							x = i[15];
						r[0] = l * m * g - u * f * g + u * p * y - c * m * y - l * p * x + c * f * x, r[4] = s * f * g - a * m * g - s * p * y + o * m * y + a * p * x - o * f * x, r[8] = a * u * g - s * l * g + s * c * y - o * u * y - a * c * x + o * l * x, r[12] = s * l * p - a * u * p - s * c * f + o * u * f + a * c * m - o * l * m, r[1] = u * f * v - l * m * v - u * d * y + h * m * y + l * d * x - h * f * x, r[5] = a * m * v - s * f * v + s * d * y - n * m * y - a * d * x + n * f * x, r[9] = s * l * v - a * u * v - s * h * y + n * u * y + a * h * x - n * l * x, r[13] = a * u * d - s * l * d + s * h * f - n * u * f - a * h * m + n * l * m, r[2] = c * m * v - u * p * v + u * d * g - h * m * g - c * d * x + h * p * x, r[6] = s * p * v - o * m * v - s * d * g + n * m * g + o * d * x - n * p * x, r[10] = o * u * v - s * c * v + s * h * g - n * u * g - o * h * x + n * c * x, r[14] = s * c * d - o * u * d - s * h * p + n * u * p + o * h * m - n * c * m, r[3] = l * p * v - c * f * v - l * d * g + h * f * g + c * d * y - h * p * y, r[7] = o * f * v - a * p * v + a * d * g - n * f * g - o * d * y + n * p * y, r[11] = a * c * v - o * l * v - a * h * g + n * l * g + o * h * y - n * c * y, r[15] = o * l * d - a * c * d + a * h * p - n * l * p - o * h * f + n * c * f;
						var b = n * r[0] + h * r[4] + d * r[8] + v * r[12];
						if (0 === b) {
							var w = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
							if (t) throw new Error(w);
							return console.warn(w), this.identity(), this
						}
						return this.multiplyScalar(1 / b), this
					},
					scale: function(e) {
						var t = this.elements,
							r = e.x,
							i = e.y,
							n = e.z;
						return t[0] *= r, t[4] *= i, t[8] *= n, t[1] *= r, t[5] *= i, t[9] *= n, t[2] *= r, t[6] *= i, t[10] *= n, t[3] *= r, t[7] *= i, t[11] *= n, this
					},
					getMaxScaleOnAxis: function() {
						var e = this.elements,
							t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
							r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
							i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
						return Math.sqrt(Math.max(t, r, i))
					},
					makeTranslation: function(e, t, r) {
						return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this
					},
					makeRotationX: function(e) {
						var t = Math.cos(e),
							r = Math.sin(e);
						return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this
					},
					makeRotationY: function(e) {
						var t = Math.cos(e),
							r = Math.sin(e);
						return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this
					},
					makeRotationZ: function(e) {
						var t = Math.cos(e),
							r = Math.sin(e);
						return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
					},
					makeRotationAxis: function(e, t) {
						var r = Math.cos(t),
							i = Math.sin(t),
							n = 1 - r,
							o = e.x,
							a = e.y,
							s = e.z,
							h = n * o,
							c = n * a;
						return this.set(h * o + r, h * a - i * s, h * s + i * a, 0, h * a + i * s, c * a + r, c * s - i * o, 0, h * s - i * a, c * s + i * o, n * s * s + r, 0, 0, 0, 0, 1), this
					},
					makeScale: function(e, t, r) {
						return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
					},
					compose: function(e, t, r) {
						return this.makeRotationFromQuaternion(t), this.scale(r), this.setPosition(e), this
					},
					decompose: function() {
						var e, t;
						return function(r, i, o) {
							void 0 === e && (e = new n.Vector3), void 0 === t && (t = new n.Matrix4);
							var a = this.elements,
								s = e.set(a[0], a[1], a[2]).length(),
								h = e.set(a[4], a[5], a[6]).length(),
								c = e.set(a[8], a[9], a[10]).length(),
								l = this.determinant();
							0 > l && (s = -s), r.x = a[12], r.y = a[13], r.z = a[14], t.elements.set(this.elements);
							var u = 1 / s,
								d = 1 / h,
								p = 1 / c;
							return t.elements[0] *= u, t.elements[1] *= u, t.elements[2] *= u, t.elements[4] *= d, t.elements[5] *= d, t.elements[6] *= d, t.elements[8] *= p, t.elements[9] *= p, t.elements[10] *= p, i.setFromRotationMatrix(t), o.x = s, o.y = h, o.z = c, this
						}
					}(),
					makeFrustum: function(e, t, r, i, n, o) {
						var a = this.elements,
							s = 2 * n / (t - e),
							h = 2 * n / (i - r),
							c = (t + e) / (t - e),
							l = (i + r) / (i - r),
							u = -(o + n) / (o - n),
							d = -2 * o * n / (o - n);
						return a[0] = s, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = h, a[9] = l, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
					},
					makePerspective: function(e, t, r, i) {
						var o = r * Math.tan(n.Math.degToRad(.5 * e)),
							a = -o,
							s = a * t,
							h = o * t;
						return this.makeFrustum(s, h, a, o, r, i)
					},
					makeOrthographic: function(e, t, r, i, n, o) {
						var a = this.elements,
							s = t - e,
							h = r - i,
							c = o - n,
							l = (t + e) / s,
							u = (r + i) / h,
							d = (o + n) / c;
						return a[0] = 2 / s, a[4] = 0, a[8] = 0, a[12] = -l, a[1] = 0, a[5] = 2 / h, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 / c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
					},
					equals: function(e) {
						for (var t = this.elements, r = e.elements, i = 0; 16 > i; i++)
							if (t[i] !== r[i]) return !1;
						return !0
					},
					fromArray: function(e) {
						return this.elements.set(e), this
					},
					toArray: function() {
						var e = this.elements;
						return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
					}
				}, n.Ray = function(e, t) {
					this.origin = void 0 !== e ? e : new n.Vector3, this.direction = void 0 !== t ? t : new n.Vector3
				}, n.Ray.prototype = {
					constructor: n.Ray,
					set: function(e, t) {
						return this.origin.copy(e), this.direction.copy(t), this
					},
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.origin.copy(e.origin), this.direction.copy(e.direction), this
					},
					at: function(e, t) {
						var r = t || new n.Vector3;
						return r.copy(this.direction).multiplyScalar(e).add(this.origin)
					},
					lookAt: function(e) {
						this.direction.copy(e).sub(this.origin).normalize()
					},
					recast: function() {
						var e = new n.Vector3;
						return function(t) {
							return this.origin.copy(this.at(t, e)), this
						}
					}(),
					closestPointToPoint: function(e, t) {
						var r = t || new n.Vector3;
						r.subVectors(e, this.origin);
						var i = r.dot(this.direction);
						return 0 > i ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin)
					},
					distanceToPoint: function(e) {
						return Math.sqrt(this.distanceSqToPoint(e))
					},
					distanceSqToPoint: function() {
						var e = new n.Vector3;
						return function(t) {
							var r = e.subVectors(t, this.origin).dot(this.direction);
							return 0 > r ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceToSquared(t))
						}
					}(),
					distanceSqToSegment: function() {
						var e = new n.Vector3,
							t = new n.Vector3,
							r = new n.Vector3;
						return function(i, n, o, a) {
							e.copy(i).add(n).multiplyScalar(.5), t.copy(n).sub(i).normalize(), r.copy(this.origin).sub(e);
							var s, h, c, l, u = .5 * i.distanceTo(n),
								d = -this.direction.dot(t),
								p = r.dot(this.direction),
								f = -r.dot(t),
								m = r.lengthSq(),
								v = Math.abs(1 - d * d);
							if (v > 0)
								if (s = d * f - p, h = d * p - f, l = u * v, s >= 0)
									if (h >= -l)
										if (l >= h) {
											var g = 1 / v;
											s *= g, h *= g, c = s * (s + d * h + 2 * p) + h * (d * s + h + 2 * f) + m
										} else h = u, s = Math.max(0, -(d * h + p)), c = -s * s + h * (h + 2 * f) + m;
							else h = -u, s = Math.max(0, -(d * h + p)), c = -s * s + h * (h + 2 * f) + m;
							else -l >= h ? (s = Math.max(0, -(-d * u + p)), h = s > 0 ? -u : Math.min(Math.max(-u, -f), u), c = -s * s + h * (h + 2 * f) + m) : l >= h ? (s = 0, h = Math.min(Math.max(-u, -f), u), c = h * (h + 2 * f) + m) : (s = Math.max(0, -(d * u + p)), h = s > 0 ? u : Math.min(Math.max(-u, -f), u), c = -s * s + h * (h + 2 * f) + m);
							else h = d > 0 ? -u : u, s = Math.max(0, -(d * h + p)), c = -s * s + h * (h + 2 * f) + m;
							return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(t).multiplyScalar(h).add(e), c
						}
					}(),
					intersectSphere: function() {
						var e = new n.Vector3;
						return function(t, r) {
							e.subVectors(t.center, this.origin);
							var i = e.dot(this.direction),
								n = e.dot(e) - i * i,
								o = t.radius * t.radius;
							if (n > o) return null;
							var a = Math.sqrt(o - n),
								s = i - a,
								h = i + a;
							return 0 > s && 0 > h ? null : 0 > s ? this.at(h, r) : this.at(s, r)
						}
					}(),
					intersectsSphere: function(e) {
						return this.distanceToPoint(e.center) <= e.radius
					},
					distanceToPlane: function(e) {
						var t = e.normal.dot(this.direction);
						if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
						var r = -(this.origin.dot(e.normal) + e.constant) / t;
						return r >= 0 ? r : null
					},
					intersectPlane: function(e, t) {
						var r = this.distanceToPlane(e);
						return null === r ? null : this.at(r, t)
					},
					intersectsPlane: function(e) {
						var t = e.distanceToPoint(this.origin);
						if (0 === t) return !0;
						var r = e.normal.dot(this.direction);
						return 0 > r * t ? !0 : !1
					},
					intersectBox: function(e, t) {
						var r, i, n, o, a, s, h = 1 / this.direction.x,
							c = 1 / this.direction.y,
							l = 1 / this.direction.z,
							u = this.origin;
						return h >= 0 ? (r = (e.min.x - u.x) * h, i = (e.max.x - u.x) * h) : (r = (e.max.x - u.x) * h, i = (e.min.x - u.x) * h), c >= 0 ? (n = (e.min.y - u.y) * c, o = (e.max.y - u.y) * c) : (n = (e.max.y - u.y) * c, o = (e.min.y - u.y) * c), r > o || n > i ? null : ((n > r || r !== r) && (r = n), (i > o || i !== i) && (i = o), l >= 0 ? (a = (e.min.z - u.z) * l, s = (e.max.z - u.z) * l) : (a = (e.max.z - u.z) * l, s = (e.min.z - u.z) * l), r > s || a > i ? null : ((a > r || r !== r) && (r = a), (i > s || i !== i) && (i = s), 0 > i ? null : this.at(r >= 0 ? r : i, t)))
					},
					intersectsBox: function() {
						var e = new n.Vector3;
						return function(t) {
							return null !== this.intersectBox(t, e)
						}
					}(),
					intersectTriangle: function() {
						var e = new n.Vector3,
							t = new n.Vector3,
							r = new n.Vector3,
							i = new n.Vector3;
						return function(n, o, a, s, h) {
							t.subVectors(o, n), r.subVectors(a, n), i.crossVectors(t, r);
							var c, l = this.direction.dot(i);
							if (l > 0) {
								if (s) return null;
								c = 1
							} else {
								if (!(0 > l)) return null;
								c = -1, l = -l
							}
							e.subVectors(this.origin, n);
							var u = c * this.direction.dot(r.crossVectors(e, r));
							if (0 > u) return null;
							var d = c * this.direction.dot(t.cross(e));
							if (0 > d) return null;
							if (u + d > l) return null;
							var p = -c * e.dot(i);
							return 0 > p ? null : this.at(p / l, h)
						}
					}(),
					applyMatrix4: function(e) {
						return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
					},
					equals: function(e) {
						return e.origin.equals(this.origin) && e.direction.equals(this.direction)
					}
				}, n.Sphere = function(e, t) {
					this.center = void 0 !== e ? e : new n.Vector3, this.radius = void 0 !== t ? t : 0
				}, n.Sphere.prototype = {
					constructor: n.Sphere,
					set: function(e, t) {
						return this.center.copy(e), this.radius = t, this
					},
					setFromPoints: function() {
						var e = new n.Box3;
						return function(t, r) {
							var i = this.center;
							void 0 !== r ? i.copy(r) : e.setFromPoints(t).center(i);
							for (var n = 0, o = 0, a = t.length; a > o; o++) n = Math.max(n, i.distanceToSquared(t[o]));
							return this.radius = Math.sqrt(n), this
						}
					}(),
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.center.copy(e.center), this.radius = e.radius, this
					},
					empty: function() {
						return this.radius <= 0
					},
					containsPoint: function(e) {
						return e.distanceToSquared(this.center) <= this.radius * this.radius
					},
					distanceToPoint: function(e) {
						return e.distanceTo(this.center) - this.radius
					},
					intersectsSphere: function(e) {
						var t = this.radius + e.radius;
						return e.center.distanceToSquared(this.center) <= t * t
					},
					intersectsBox: function(e) {
						return e.intersectsSphere(this)
					},
					intersectsPlane: function(e) {
						return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
					},
					clampPoint: function(e, t) {
						var r = this.center.distanceToSquared(e),
							i = t || new n.Vector3;
						return i.copy(e), r > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i
					},
					getBoundingBox: function(e) {
						var t = e || new n.Box3;
						return t.set(this.center, this.center), t.expandByScalar(this.radius), t
					},
					applyMatrix4: function(e) {
						return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
					},
					translate: function(e) {
						return this.center.add(e), this
					},
					equals: function(e) {
						return e.center.equals(this.center) && e.radius === this.radius
					}
				}, n.Frustum = function(e, t, r, i, o, a) {
					this.planes = [void 0 !== e ? e : new n.Plane, void 0 !== t ? t : new n.Plane, void 0 !== r ? r : new n.Plane, void 0 !== i ? i : new n.Plane, void 0 !== o ? o : new n.Plane, void 0 !== a ? a : new n.Plane]
				}, n.Frustum.prototype = {
					constructor: n.Frustum,
					set: function(e, t, r, i, n, o) {
						var a = this.planes;
						return a[0].copy(e), a[1].copy(t), a[2].copy(r), a[3].copy(i), a[4].copy(n), a[5].copy(o), this
					},
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						for (var t = this.planes, r = 0; 6 > r; r++) t[r].copy(e.planes[r]);
						return this
					},
					setFromMatrix: function(e) {
						var t = this.planes,
							r = e.elements,
							i = r[0],
							n = r[1],
							o = r[2],
							a = r[3],
							s = r[4],
							h = r[5],
							c = r[6],
							l = r[7],
							u = r[8],
							d = r[9],
							p = r[10],
							f = r[11],
							m = r[12],
							v = r[13],
							g = r[14],
							y = r[15];
						return t[0].setComponents(a - i, l - s, f - u, y - m).normalize(), t[1].setComponents(a + i, l + s, f + u, y + m).normalize(), t[2].setComponents(a + n, l + h, f + d, y + v).normalize(), t[3].setComponents(a - n, l - h, f - d, y - v).normalize(), t[4].setComponents(a - o, l - c, f - p, y - g).normalize(), t[5].setComponents(a + o, l + c, f + p, y + g).normalize(), this
					},
					intersectsObject: function() {
						var e = new n.Sphere;
						return function(t) {
							var r = t.geometry;
							return null === r.boundingSphere && r.computeBoundingSphere(), e.copy(r.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
						}
					}(),
					intersectsSphere: function(e) {
						for (var t = this.planes, r = e.center, i = -e.radius, n = 0; 6 > n; n++) {
							var o = t[n].distanceToPoint(r);
							if (i > o) return !1
						}
						return !0
					},
					intersectsBox: function() {
						var e = new n.Vector3,
							t = new n.Vector3;
						return function(r) {
							for (var i = this.planes, n = 0; 6 > n; n++) {
								var o = i[n];
								e.x = o.normal.x > 0 ? r.min.x : r.max.x, t.x = o.normal.x > 0 ? r.max.x : r.min.x, e.y = o.normal.y > 0 ? r.min.y : r.max.y, t.y = o.normal.y > 0 ? r.max.y : r.min.y, e.z = o.normal.z > 0 ? r.min.z : r.max.z, t.z = o.normal.z > 0 ? r.max.z : r.min.z;
								var a = o.distanceToPoint(e),
									s = o.distanceToPoint(t);
								if (0 > a && 0 > s) return !1
							}
							return !0
						}
					}(),
					containsPoint: function(e) {
						for (var t = this.planes, r = 0; 6 > r; r++)
							if (t[r].distanceToPoint(e) < 0) return !1;
						return !0
					}
				}, n.Plane = function(e, t) {
					this.normal = void 0 !== e ? e : new n.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
				}, n.Plane.prototype = {
					constructor: n.Plane,
					set: function(e, t) {
						return this.normal.copy(e), this.constant = t, this
					},
					setComponents: function(e, t, r, i) {
						return this.normal.set(e, t, r), this.constant = i, this
					},
					setFromNormalAndCoplanarPoint: function(e, t) {
						return this.normal.copy(e), this.constant = -t.dot(this.normal), this
					},
					setFromCoplanarPoints: function() {
						var e = new n.Vector3,
							t = new n.Vector3;
						return function(r, i, n) {
							var o = e.subVectors(n, i).cross(t.subVectors(r, i)).normalize();
							return this.setFromNormalAndCoplanarPoint(o, r), this
						}
					}(),
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.normal.copy(e.normal), this.constant = e.constant, this
					},
					normalize: function() {
						var e = 1 / this.normal.length();
						return this.normal.multiplyScalar(e), this.constant *= e, this
					},
					negate: function() {
						return this.constant *= -1, this.normal.negate(), this
					},
					distanceToPoint: function(e) {
						return this.normal.dot(e) + this.constant
					},
					distanceToSphere: function(e) {
						return this.distanceToPoint(e.center) - e.radius
					},
					projectPoint: function(e, t) {
						return this.orthoPoint(e, t).sub(e).negate()
					},
					orthoPoint: function(e, t) {
						var r = this.distanceToPoint(e),
							i = t || new n.Vector3;
						return i.copy(this.normal).multiplyScalar(r)
					},
					intersectLine: function() {
						var e = new n.Vector3;
						return function(t, r) {
							var i = r || new n.Vector3,
								o = t.delta(e),
								a = this.normal.dot(o);
							if (0 === a) return 0 === this.distanceToPoint(t.start) ? i.copy(t.start) : void 0;
							var s = -(t.start.dot(this.normal) + this.constant) / a;
							return 0 > s || s > 1 ? void 0 : i.copy(o).multiplyScalar(s).add(t.start)
						}
					}(),
					intersectsLine: function(e) {
						var t = this.distanceToPoint(e.start),
							r = this.distanceToPoint(e.end);
						return 0 > t && r > 0 || 0 > r && t > 0
					},
					intersectsBox: function(e) {
						return e.intersectsPlane(this)
					},
					intersectsSphere: function(e) {
						return e.intersectsPlane(this)
					},
					coplanarPoint: function(e) {
						var t = e || new n.Vector3;
						return t.copy(this.normal).multiplyScalar(-this.constant)
					},
					applyMatrix4: function() {
						var e = new n.Vector3,
							t = new n.Vector3,
							r = new n.Matrix3;
						return function(i, n) {
							var o = n || r.getNormalMatrix(i),
								a = e.copy(this.normal).applyMatrix3(o),
								s = this.coplanarPoint(t);
							return s.applyMatrix4(i), this.setFromNormalAndCoplanarPoint(a, s), this
						}
					}(),
					translate: function(e) {
						return this.constant = this.constant - e.dot(this.normal), this
					},
					equals: function(e) {
						return e.normal.equals(this.normal) && e.constant === this.constant
					}
				}, n.Math = {
					generateUUID: function() {
						var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
							r = new Array(36),
							i = 0;
						return function() {
							for (var n = 0; 36 > n; n++) 8 === n || 13 === n || 18 === n || 23 === n ? r[n] = "-" : 14 === n ? r[n] = "4" : (2 >= i && (i = 33554432 + 16777216 * Math.random() | 0), e = 15 & i, i >>= 4, r[n] = t[19 === n ? 3 & e | 8 : e]);
							return r.join("")
						}
					}(),
					clamp: function(e, t, r) {
						return Math.max(t, Math.min(r, e))
					},
					euclideanModulo: function(e, t) {
						return (e % t + t) % t
					},
					mapLinear: function(e, t, r, i, n) {
						return i + (e - t) * (n - i) / (r - t)
					},
					smoothstep: function(e, t, r) {
						return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
					},
					smootherstep: function(e, t, r) {
						return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
					},
					random16: function() {
						return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
					},
					randInt: function(e, t) {
						return e + Math.floor(Math.random() * (t - e + 1))
					},
					randFloat: function(e, t) {
						return e + Math.random() * (t - e)
					},
					randFloatSpread: function(e) {
						return e * (.5 - Math.random())
					},
					degToRad: function() {
						var e = Math.PI / 180;
						return function(t) {
							return t * e
						}
					}(),
					radToDeg: function() {
						var e = 180 / Math.PI;
						return function(t) {
							return t * e
						}
					}(),
					isPowerOfTwo: function(e) {
						return 0 === (e & e - 1) && 0 !== e
					},
					nearestPowerOfTwo: function(e) {
						return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
					},
					nextPowerOfTwo: function(e) {
						return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
					}
				}, n.Spline = function(e) {
					function t(e, t, r, i, n, o, a) {
						var s = .5 * (r - e),
							h = .5 * (i - t);
						return (2 * (t - r) + s + h) * a + (-3 * (t - r) - 2 * s - h) * o + s * n + t
					}
					this.points = e;
					var r, i, o, a, s, h, c, l, u, d = [],
						p = {
							x: 0,
							y: 0,
							z: 0
						};
					this.initFromArray = function(e) {
						this.points = [];
						for (var t = 0; t < e.length; t++) this.points[t] = {
							x: e[t][0],
							y: e[t][1],
							z: e[t][2]
						}
					}, this.getPoint = function(e) {
						return r = (this.points.length - 1) * e, i = Math.floor(r), o = r - i, d[0] = 0 === i ? i : i - 1, d[1] = i, d[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1, d[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2, h = this.points[d[0]], c = this.points[d[1]], l = this.points[d[2]], u = this.points[d[3]], a = o * o, s = o * a, p.x = t(h.x, c.x, l.x, u.x, o, a, s), p.y = t(h.y, c.y, l.y, u.y, o, a, s), p.z = t(h.z, c.z, l.z, u.z, o, a, s), p
					}, this.getControlPointsArray = function() {
						var e, t, r = this.points.length,
							i = [];
						for (e = 0; r > e; e++) t = this.points[e], i[e] = [t.x, t.y, t.z];
						return i
					}, this.getLength = function(e) {
						var t, r, i, o, a = 0,
							s = 0,
							h = 0,
							c = new n.Vector3,
							l = new n.Vector3,
							u = [],
							d = 0;
						for (u[0] = 0, e || (e = 100), i = this.points.length * e, c.copy(this.points[0]), t = 1; i > t; t++) r = t / i, o = this.getPoint(r), l.copy(o), d += l.distanceTo(c), c.copy(o), a = (this.points.length - 1) * r, s = Math.floor(a), s !== h && (u[s] = d, h = s);
						return u[u.length] = d, {
							chunks: u,
							total: d
						}
					}, this.reparametrizeByArcLength = function(e) {
						var t, r, i, o, a, s, h, c, l = [],
							u = new n.Vector3,
							d = this.getLength();
						for (l.push(u.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
							for (s = d.chunks[t] - d.chunks[t - 1], h = Math.ceil(e * s / d.total), o = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), r = 1; h - 1 > r; r++) i = o + r * (1 / h) * (a - o), c = this.getPoint(i), l.push(u.copy(c).clone());
							l.push(u.copy(this.points[t]).clone())
						}
						this.points = l
					}
				}, n.Triangle = function(e, t, r) {
					this.a = void 0 !== e ? e : new n.Vector3, this.b = void 0 !== t ? t : new n.Vector3, this.c = void 0 !== r ? r : new n.Vector3
				}, n.Triangle.normal = function() {
					var e = new n.Vector3;
					return function(t, r, i, o) {
						var a = o || new n.Vector3;
						a.subVectors(i, r), e.subVectors(t, r), a.cross(e);
						var s = a.lengthSq();
						return s > 0 ? a.multiplyScalar(1 / Math.sqrt(s)) : a.set(0, 0, 0)
					}
				}(), n.Triangle.barycoordFromPoint = function() {
					var e = new n.Vector3,
						t = new n.Vector3,
						r = new n.Vector3;
					return function(i, o, a, s, h) {
						e.subVectors(s, o), t.subVectors(a, o), r.subVectors(i, o);
						var c = e.dot(e),
							l = e.dot(t),
							u = e.dot(r),
							d = t.dot(t),
							p = t.dot(r),
							f = c * d - l * l,
							m = h || new n.Vector3;
						if (0 === f) return m.set(-2, -1, -1);
						var v = 1 / f,
							g = (d * u - l * p) * v,
							y = (c * p - l * u) * v;
						return m.set(1 - g - y, y, g)
					}
				}(), n.Triangle.containsPoint = function() {
					var e = new n.Vector3;
					return function(t, r, i, o) {
						var a = n.Triangle.barycoordFromPoint(t, r, i, o, e);
						return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
					}
				}(), n.Triangle.prototype = {
					constructor: n.Triangle,
					set: function(e, t, r) {
						return this.a.copy(e), this.b.copy(t), this.c.copy(r), this
					},
					setFromPointsAndIndices: function(e, t, r, i) {
						return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[i]), this
					},
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
					},
					area: function() {
						var e = new n.Vector3,
							t = new n.Vector3;
						return function() {
							return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
						}
					}(),
					midpoint: function(e) {
						var t = e || new n.Vector3;
						return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
					},
					normal: function(e) {
						return n.Triangle.normal(this.a, this.b, this.c, e)
					},
					plane: function(e) {
						var t = e || new n.Plane;
						return t.setFromCoplanarPoints(this.a, this.b, this.c)
					},
					barycoordFromPoint: function(e, t) {
						return n.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
					},
					containsPoint: function(e) {
						return n.Triangle.containsPoint(e, this.a, this.b, this.c)
					},
					equals: function(e) {
						return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
					}
				}, n.Interpolant = function(e, t, r, i) {
					this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new t.constructor(r), this.sampleValues = t, this.valueSize = r
				}, n.Interpolant.prototype = {
					constructor: n.Interpolant,
					evaluate: function(e) {
						var t = this.parameterPositions,
							r = this._cachedIndex,
							i = t[r],
							n = t[r - 1];
						e: {
							t: {
								var o;r: {
									i: if (!(i > e)) {
										for (var a = r + 2;;) {
											if (void 0 === i) {
												if (n > e) break i;
												return r = t.length, this._cachedIndex = r, this.afterEnd_(r - 1, e, n)
											}
											if (r === a) break;
											if (n = i, i = t[++r], i > e) break t
										}
										o = t.length;
										break r
									} {
										if (e >= n) break e;
										var s = t[1];
										s > e && (r = 2, n = s);
										for (var a = r - 2;;) {
											if (void 0 === n) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
											if (r === a) break;
											if (i = n, n = t[--r - 1], e >= n) break t
										}
										o = r, r = 0
									}
								}
								for (; o > r;) {
									var h = r + o >>> 1;
									e < t[h] ? o = h : r = h + 1
								}
								if (i = t[r], n = t[r - 1], void 0 === n) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
								if (void 0 === i) return r = t.length, this._cachedIndex = r, this.afterEnd_(r - 1, n, e)
							}
							this._cachedIndex = r,
							this.intervalChanged_(r, n, i)
						}
						return this.interpolate_(r, n, e, i)
					},
					settings: null,
					DefaultSettings_: {},
					getSettings_: function() {
						return this.settings || this.DefaultSettings_
					},
					copySampleValue_: function(e) {
						for (var t = this.resultBuffer, r = this.sampleValues, i = this.valueSize, n = e * i, o = 0; o !== i; ++o) t[o] = r[n + o];
						return t
					},
					interpolate_: function() {
						throw new Error("call to abstract method")
					},
					intervalChanged_: function() {}
				}, Object.assign(n.Interpolant.prototype, {
					beforeStart_: n.Interpolant.prototype.copySampleValue_,
					afterEnd_: n.Interpolant.prototype.copySampleValue_
				}), n.CubicInterpolant = function(e, t, r, i) {
					n.Interpolant.call(this, e, t, r, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
				}, n.CubicInterpolant.prototype = Object.assign(Object.create(n.Interpolant.prototype), {
					constructor: n.CubicInterpolant,
					DefaultSettings_: {
						endingStart: n.ZeroCurvatureEnding,
						endingEnd: n.ZeroCurvatureEnding
					},
					intervalChanged_: function(e, t, r) {
						var i = this.parameterPositions,
							o = e - 2,
							a = e + 1,
							s = i[o],
							h = i[a];
						if (void 0 === s) switch (this.getSettings_().endingStart) {
							case n.ZeroSlopeEnding:
								o = e, s = 2 * t - r;
								break;
							case n.WrapAroundEnding:
								o = i.length - 2, s = t + i[o] - i[o + 1];
								break;
							default:
								o = e, s = r
						}
						if (void 0 === h) switch (this.getSettings_().endingEnd) {
							case n.ZeroSlopeEnding:
								a = e, h = 2 * r - t;
								break;
							case n.WrapAroundEnding:
								a = 1, h = r + i[1] - i[0];
								break;
							default:
								a = e - 1, h = t
						}
						var c = .5 * (r - t),
							l = this.valueSize;
						this._weightPrev = c / (t - s), this._weightNext = c / (h - r), this._offsetPrev = o * l, this._offsetNext = a * l
					},
					interpolate_: function(e, t, r, i) {
						for (var n = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = e * a, h = s - a, c = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (r - t) / (i - t), f = p * p, m = f * p, v = -u * m + 2 * u * f - u * p, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, b = 0; b !== a; ++b) n[b] = v * o[c + b] + g * o[h + b] + y * o[s + b] + x * o[l + b];
						return n
					}
				}), n.DiscreteInterpolant = function(e, t, r, i) {
					n.Interpolant.call(this, e, t, r, i)
				}, n.DiscreteInterpolant.prototype = Object.assign(Object.create(n.Interpolant.prototype), {
					constructor: n.DiscreteInterpolant,
					interpolate_: function(e) {
						return this.copySampleValue_(e - 1)
					}
				}), n.LinearInterpolant = function(e, t, r, i) {
					n.Interpolant.call(this, e, t, r, i)
				}, n.LinearInterpolant.prototype = Object.assign(Object.create(n.Interpolant.prototype), {
					constructor: n.LinearInterpolant,
					interpolate_: function(e, t, r, i) {
						for (var n = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = e * a, h = s - a, c = (r - t) / (i - t), l = 1 - c, u = 0; u !== a; ++u) n[u] = o[h + u] * l + o[s + u] * c;
						return n
					}
				}), n.QuaternionLinearInterpolant = function(e, t, r, i) {
					n.Interpolant.call(this, e, t, r, i)
				}, n.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(n.Interpolant.prototype), {
					constructor: n.QuaternionLinearInterpolant,
					interpolate_: function(e, t, r, i) {
						for (var o = this.resultBuffer, a = this.sampleValues, s = this.valueSize, h = e * s, c = (r - t) / (i - t), l = h + s; h !== l; h += 4) n.Quaternion.slerpFlat(o, 0, a, h - s, a, h, c);
						return o
					}
				}), n.Clock = function(e) {
					this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
				}, n.Clock.prototype = {
					constructor: n.Clock,
					start: function() {
						this.startTime = performance.now(), this.oldTime = this.startTime, this.running = !0
					},
					stop: function() {
						this.getElapsedTime(), this.running = !1
					},
					getElapsedTime: function() {
						return this.getDelta(), this.elapsedTime
					},
					getDelta: function() {
						var e = 0;
						if (this.autoStart && !this.running && this.start(), this.running) {
							var t = performance.now();
							e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
						}
						return e
					}
				}, n.EventDispatcher = function() {}, n.EventDispatcher.prototype = {
					constructor: n.EventDispatcher,
					apply: function(e) {
						e.addEventListener = n.EventDispatcher.prototype.addEventListener, e.hasEventListener = n.EventDispatcher.prototype.hasEventListener, e.removeEventListener = n.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = n.EventDispatcher.prototype.dispatchEvent
					},
					addEventListener: function(e, t) {
						void 0 === this._listeners && (this._listeners = {});
						var r = this._listeners;
						void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t)
					},
					hasEventListener: function(e, t) {
						if (void 0 === this._listeners) return !1;
						var r = this._listeners;
						return void 0 !== r[e] && -1 !== r[e].indexOf(t) ? !0 : !1
					},
					removeEventListener: function(e, t) {
						if (void 0 !== this._listeners) {
							var r = this._listeners,
								i = r[e];
							if (void 0 !== i) {
								var n = i.indexOf(t); - 1 !== n && i.splice(n, 1)
							}
						}
					},
					dispatchEvent: function(e) {
						if (void 0 !== this._listeners) {
							var t = this._listeners,
								r = t[e.type];
							if (void 0 !== r) {
								e.target = this;
								for (var i = [], n = r.length, o = 0; n > o; o++) i[o] = r[o];
								for (var o = 0; n > o; o++) i[o].call(this, e)
							}
						}
					}
				}, n.Layers = function() {
					this.mask = 1
				}, n.Layers.prototype = {
					constructor: n.Layers,
					set: function(e) {
						this.mask = 1 << e
					},
					enable: function(e) {
						this.mask |= 1 << e
					},
					toggle: function(e) {
						this.mask ^= 1 << e
					},
					disable: function(e) {
						this.mask &= ~(1 << e)
					},
					test: function(e) {
						return 0 !== (this.mask & e.mask)
					}
				},
				function(e) {
					function t(e, t) {
						return e.distance - t.distance
					}

					function r(e, t, i, n) {
						if (e.visible !== !1 && (e.raycast(t, i), n === !0))
							for (var o = e.children, a = 0, s = o.length; s > a; a++) r(o[a], t, i, !0)
					}
					e.Raycaster = function(t, r, i, n) {
						this.ray = new e.Ray(t, r), this.near = i || 0, this.far = n || 1 / 0, this.params = {
							Mesh: {},
							Line: {},
							LOD: {},
							Points: {
								threshold: 1
							},
							Sprite: {}
						}, Object.defineProperties(this.params, {
							PointCloud: {
								get: function() {
									return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
								}
							}
						})
					}, e.Raycaster.prototype = {
						constructor: e.Raycaster,
						linePrecision: 1,
						set: function(e, t) {
							this.ray.set(e, t)
						},
						setFromCamera: function(t, r) {
							r instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(r.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(this.ray.origin).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
						},
						intersectObject: function(e, i) {
							var n = [];
							return r(e, this, n, i), n.sort(t), n
						},
						intersectObjects: function(e, i) {
							var n = [];
							if (Array.isArray(e) === !1) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
							for (var o = 0, a = e.length; a > o; o++) r(e[o], this, n, i);
							return n.sort(t), n
						}
					}
				}(n), n.Object3D = function() {
					function e() {
						o.setFromEuler(i, !1)
					}

					function t() {
						i.setFromQuaternion(o, void 0, !1)
					}
					Object.defineProperty(this, "id", {
						value: n.Object3DIdCount++
					}), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = n.Object3D.DefaultUp.clone();
					var r = new n.Vector3,
						i = new n.Euler,
						o = new n.Quaternion,
						a = new n.Vector3(1, 1, 1);
					i.onChange(e), o.onChange(t), Object.defineProperties(this, {
						position: {
							enumerable: !0,
							value: r
						},
						rotation: {
							enumerable: !0,
							value: i
						},
						quaternion: {
							enumerable: !0,
							value: o
						},
						scale: {
							enumerable: !0,
							value: a
						},
						modelViewMatrix: {
							value: new n.Matrix4
						},
						normalMatrix: {
							value: new n.Matrix3
						}
					}), this.rotationAutoUpdate = !0, this.matrix = new n.Matrix4, this.matrixWorld = new n.Matrix4, this.matrixAutoUpdate = n.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new n.Layers, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
				}, n.Object3D.DefaultUp = new n.Vector3(0, 1, 0), n.Object3D.DefaultMatrixAutoUpdate = !0, n.Object3D.prototype = {
					constructor: n.Object3D,
					applyMatrix: function(e) {
						this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
					},
					setRotationFromAxisAngle: function(e, t) {
						this.quaternion.setFromAxisAngle(e, t)
					},
					setRotationFromEuler: function(e) {
						this.quaternion.setFromEuler(e, !0)
					},
					setRotationFromMatrix: function(e) {
						this.quaternion.setFromRotationMatrix(e)
					},
					setRotationFromQuaternion: function(e) {
						this.quaternion.copy(e)
					},
					rotateOnAxis: function() {
						var e = new n.Quaternion;
						return function(t, r) {
							return e.setFromAxisAngle(t, r), this.quaternion.multiply(e), this
						}
					}(),
					rotateX: function() {
						var e = new n.Vector3(1, 0, 0);
						return function(t) {
							return this.rotateOnAxis(e, t)
						}
					}(),
					rotateY: function() {
						var e = new n.Vector3(0, 1, 0);
						return function(t) {
							return this.rotateOnAxis(e, t)
						}
					}(),
					rotateZ: function() {
						var e = new n.Vector3(0, 0, 1);
						return function(t) {
							return this.rotateOnAxis(e, t)
						}
					}(),
					translateOnAxis: function() {
						var e = new n.Vector3;
						return function(t, r) {
							return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(r)), this
						}
					}(),
					translateX: function() {
						var e = new n.Vector3(1, 0, 0);
						return function(t) {
							return this.translateOnAxis(e, t)
						}
					}(),
					translateY: function() {
						var e = new n.Vector3(0, 1, 0);
						return function(t) {
							return this.translateOnAxis(e, t)
						}
					}(),
					translateZ: function() {
						var e = new n.Vector3(0, 0, 1);
						return function(t) {
							return this.translateOnAxis(e, t)
						}
					}(),
					localToWorld: function(e) {
						return e.applyMatrix4(this.matrixWorld)
					},
					worldToLocal: function() {
						var e = new n.Matrix4;
						return function(t) {
							return t.applyMatrix4(e.getInverse(this.matrixWorld))
						}
					}(),
					lookAt: function() {
						var e = new n.Matrix4;
						return function(t) {
							e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
						}
					}(),
					add: function(e) {
						if (arguments.length > 1) {
							for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
							return this
						}
						return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof n.Object3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
							type: "added"
						}), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
					},
					remove: function(e) {
						if (arguments.length > 1)
							for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
						var r = this.children.indexOf(e); - 1 !== r && (e.parent = null, e.dispatchEvent({
							type: "removed"
						}), this.children.splice(r, 1))
					},
					getObjectById: function(e) {
						return this.getObjectByProperty("id", e)
					},
					getObjectByName: function(e) {
						return this.getObjectByProperty("name", e)
					},
					getObjectByProperty: function(e, t) {
						if (this[e] === t) return this;
						for (var r = 0, i = this.children.length; i > r; r++) {
							var n = this.children[r],
								o = n.getObjectByProperty(e, t);
							if (void 0 !== o) return o
						}
						return void 0
					},
					getWorldPosition: function(e) {
						var t = e || new n.Vector3;
						return this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
					},
					getWorldQuaternion: function() {
						var e = new n.Vector3,
							t = new n.Vector3;
						return function(r) {
							var i = r || new n.Quaternion;
							return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, i, t), i
						}
					}(),
					getWorldRotation: function() {
						var e = new n.Quaternion;
						return function(t) {
							var r = t || new n.Euler;
							return this.getWorldQuaternion(e), r.setFromQuaternion(e, this.rotation.order, !1)
						}
					}(),
					getWorldScale: function() {
						var e = new n.Vector3,
							t = new n.Quaternion;
						return function(r) {
							var i = r || new n.Vector3;
							return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, i), i
						}
					}(),
					getWorldDirection: function() {
						var e = new n.Quaternion;
						return function(t) {
							var r = t || new n.Vector3;
							return this.getWorldQuaternion(e), r.set(0, 0, 1).applyQuaternion(e)
						}
					}(),
					raycast: function() {},
					traverse: function(e) {
						e(this);
						for (var t = this.children, r = 0, i = t.length; i > r; r++) t[r].traverse(e)
					},
					traverseVisible: function(e) {
						if (this.visible !== !1) {
							e(this);
							for (var t = this.children, r = 0, i = t.length; i > r; r++) t[r].traverseVisible(e)
						}
					},
					traverseAncestors: function(e) {
						var t = this.parent;
						null !== t && (e(t), t.traverseAncestors(e))
					},
					updateMatrix: function() {
						this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
					},
					updateMatrixWorld: function(e) {
						this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || e === !0) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
						for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
					},
					toJSON: function(e) {
						function t(e) {
							var t = [];
							for (var r in e) {
								var i = e[r];
								delete i.metadata, t.push(i)
							}
							return t
						}
						var r = void 0 === e,
							i = {};
						r && (e = {
							geometries: {},
							materials: {},
							textures: {},
							images: {}
						}, i.metadata = {
							version: 4.4,
							type: "Object",
							generator: "Object3D.toJSON"
						});
						var n = {};
						if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), n.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), n.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), n.material = this.material.uuid), this.children.length > 0) {
							n.children = [];
							for (var o = 0; o < this.children.length; o++) n.children.push(this.children[o].toJSON(e).object)
						}
						if (r) {
							var a = t(e.geometries),
								s = t(e.materials),
								h = t(e.textures),
								c = t(e.images);
							a.length > 0 && (i.geometries = a), s.length > 0 && (i.materials = s), h.length > 0 && (i.textures = h), c.length > 0 && (i.images = c)
						}
						return i.object = n, i
					},
					clone: function(e) {
						return (new this.constructor).copy(this, e)
					},
					copy: function(e, t) {
						if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.rotationAutoUpdate = e.rotationAutoUpdate, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
							for (var r = 0; r < e.children.length; r++) {
								var i = e.children[r];
								this.add(i.clone())
							}
						return this
					}
				}, n.EventDispatcher.prototype.apply(n.Object3D.prototype), n.Object3DIdCount = 0, n.Face3 = function(e, t, r, i, o, a) {
					this.a = e, this.b = t, this.c = r, this.normal = i instanceof n.Vector3 ? i : new n.Vector3, this.vertexNormals = Array.isArray(i) ? i : [], this.color = o instanceof n.Color ? o : new n.Color, this.vertexColors = Array.isArray(o) ? o : [], this.materialIndex = void 0 !== a ? a : 0
				}, n.Face3.prototype = {
					constructor: n.Face3,
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
						for (var t = 0, r = e.vertexNormals.length; r > t; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
						for (var t = 0, r = e.vertexColors.length; r > t; t++) this.vertexColors[t] = e.vertexColors[t].clone();
						return this
					}
				}, n.BufferAttribute = function(e, t) {
					this.uuid = n.Math.generateUUID(), this.array = e, this.itemSize = t, this.dynamic = !1, this.updateRange = {
						offset: 0,
						count: -1
					}, this.version = 0
				}, n.BufferAttribute.prototype = {
					constructor: n.BufferAttribute,
					get count() {
						return this.array.length / this.itemSize
					},
					set needsUpdate(e) {
						e === !0 && this.version++
					},
					setDynamic: function(e) {
						return this.dynamic = e, this
					},
					copy: function(e) {
						return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.dynamic = e.dynamic, this
					},
					copyAt: function(e, t, r) {
						e *= this.itemSize, r *= t.itemSize;
						for (var i = 0, n = this.itemSize; n > i; i++) this.array[e + i] = t.array[r + i];
						return this
					},
					copyArray: function(e) {
						return this.array.set(e), this
					},
					copyColorsArray: function(e) {
						for (var t = this.array, r = 0, i = 0, o = e.length; o > i; i++) {
							var a = e[i];
							void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new n.Color), t[r++] = a.r, t[r++] = a.g, t[r++] = a.b
						}
						return this
					},
					copyIndicesArray: function(e) {
						for (var t = this.array, r = 0, i = 0, n = e.length; n > i; i++) {
							var o = e[i];
							t[r++] = o.a, t[r++] = o.b, t[r++] = o.c
						}
						return this
					},
					copyVector2sArray: function(e) {
						for (var t = this.array, r = 0, i = 0, o = e.length; o > i; i++) {
							var a = e[i];
							void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new n.Vector2), t[r++] = a.x, t[r++] = a.y
						}
						return this
					},
					copyVector3sArray: function(e) {
						for (var t = this.array, r = 0, i = 0, o = e.length; o > i; i++) {
							var a = e[i];
							void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new n.Vector3), t[r++] = a.x, t[r++] = a.y, t[r++] = a.z
						}
						return this
					},
					copyVector4sArray: function(e) {
						for (var t = this.array, r = 0, i = 0, o = e.length; o > i; i++) {
							var a = e[i];
							void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new n.Vector4), t[r++] = a.x, t[r++] = a.y, t[r++] = a.z, t[r++] = a.w
						}
						return this
					},
					set: function(e, t) {
						return void 0 === t && (t = 0), this.array.set(e, t), this
					},
					getX: function(e) {
						return this.array[e * this.itemSize]
					},
					setX: function(e, t) {
						return this.array[e * this.itemSize] = t, this
					},
					getY: function(e) {
						return this.array[e * this.itemSize + 1]
					},
					setY: function(e, t) {
						return this.array[e * this.itemSize + 1] = t, this
					},
					getZ: function(e) {
						return this.array[e * this.itemSize + 2]
					},
					setZ: function(e, t) {
						return this.array[e * this.itemSize + 2] = t, this
					},
					getW: function(e) {
						return this.array[e * this.itemSize + 3]
					},
					setW: function(e, t) {
						return this.array[e * this.itemSize + 3] = t, this
					},
					setXY: function(e, t, r) {
						return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this
					},
					setXYZ: function(e, t, r, i) {
						return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = i, this
					},
					setXYZW: function(e, t, r, i, n) {
						return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = i, this.array[e + 3] = n, this
					},
					clone: function() {
						return (new this.constructor).copy(this)
					}
				}, n.Int8Attribute = function(e, t) {
					return new n.BufferAttribute(new Int8Array(e), t)
				}, n.Uint8Attribute = function(e, t) {
					return new n.BufferAttribute(new Uint8Array(e), t)
				}, n.Uint8ClampedAttribute = function(e, t) {
					return new n.BufferAttribute(new Uint8ClampedArray(e), t)
				}, n.Int16Attribute = function(e, t) {
					return new n.BufferAttribute(new Int16Array(e), t)
				}, n.Uint16Attribute = function(e, t) {
					return new n.BufferAttribute(new Uint16Array(e), t)
				}, n.Int32Attribute = function(e, t) {
					return new n.BufferAttribute(new Int32Array(e), t)
				}, n.Uint32Attribute = function(e, t) {
					return new n.BufferAttribute(new Uint32Array(e), t)
				}, n.Float32Attribute = function(e, t) {
					return new n.BufferAttribute(new Float32Array(e), t)
				}, n.Float64Attribute = function(e, t) {
					return new n.BufferAttribute(new Float64Array(e), t)
				}, n.DynamicBufferAttribute = function(e, t) {
					return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new n.BufferAttribute(e, t).setDynamic(!0)
				}, n.InstancedBufferAttribute = function(e, t, r) {
					n.BufferAttribute.call(this, e, t), this.meshPerAttribute = r || 1
				}, n.InstancedBufferAttribute.prototype = Object.create(n.BufferAttribute.prototype), n.InstancedBufferAttribute.prototype.constructor = n.InstancedBufferAttribute, n.InstancedBufferAttribute.prototype.copy = function(e) {
					return n.BufferAttribute.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
				}, n.InterleavedBuffer = function(e, t) {
					this.uuid = n.Math.generateUUID(), this.array = e, this.stride = t, this.dynamic = !1, this.updateRange = {
						offset: 0,
						count: -1
					}, this.version = 0
				}, n.InterleavedBuffer.prototype = {
					constructor: n.InterleavedBuffer,
					get length() {
						return this.array.length
					},
					get count() {
						return this.array.length / this.stride
					},
					set needsUpdate(e) {
						e === !0 && this.version++
					},
					setDynamic: function(e) {
						return this.dynamic = e, this
					},
					copy: function(e) {
						return this.array = new e.array.constructor(e.array), this.stride = e.stride, this.dynamic = e.dynamic, this
					},
					copyAt: function(e, t, r) {
						e *= this.stride, r *= t.stride;
						for (var i = 0, n = this.stride; n > i; i++) this.array[e + i] = t.array[r + i];
						return this
					},
					set: function(e, t) {
						return void 0 === t && (t = 0), this.array.set(e, t), this
					},
					clone: function() {
						return (new this.constructor).copy(this)
					}
				}, n.InstancedInterleavedBuffer = function(e, t, r) {
					n.InterleavedBuffer.call(this, e, t), this.meshPerAttribute = r || 1
				}, n.InstancedInterleavedBuffer.prototype = Object.create(n.InterleavedBuffer.prototype), n.InstancedInterleavedBuffer.prototype.constructor = n.InstancedInterleavedBuffer, n.InstancedInterleavedBuffer.prototype.copy = function(e) {
					return n.InterleavedBuffer.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
				}, n.InterleavedBufferAttribute = function(e, t, r) {
					this.uuid = n.Math.generateUUID(), this.data = e, this.itemSize = t, this.offset = r
				}, n.InterleavedBufferAttribute.prototype = {
					constructor: n.InterleavedBufferAttribute,
					get length() {
						return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
					},
					get count() {
						return this.data.count
					},
					setX: function(e, t) {
						return this.data.array[e * this.data.stride + this.offset] = t, this
					},
					setY: function(e, t) {
						return this.data.array[e * this.data.stride + this.offset + 1] = t, this
					},
					setZ: function(e, t) {
						return this.data.array[e * this.data.stride + this.offset + 2] = t, this
					},
					setW: function(e, t) {
						return this.data.array[e * this.data.stride + this.offset + 3] = t, this
					},
					getX: function(e) {
						return this.data.array[e * this.data.stride + this.offset]
					},
					getY: function(e) {
						return this.data.array[e * this.data.stride + this.offset + 1]
					},
					getZ: function(e) {
						return this.data.array[e * this.data.stride + this.offset + 2]
					},
					getW: function(e) {
						return this.data.array[e * this.data.stride + this.offset + 3]
					},
					setXY: function(e, t, r) {
						return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this
					},
					setXYZ: function(e, t, r, i) {
						return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = i, this
					},
					setXYZW: function(e, t, r, i, n) {
						return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = i, this.data.array[e + 3] = n, this
					}
				}, n.Geometry = function() {
					Object.defineProperty(this, "id", {
						value: n.GeometryIdCount++
					}), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
						[]
					], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
				}, n.Geometry.prototype = {
					constructor: n.Geometry,
					applyMatrix: function(e) {
						for (var t = (new n.Matrix3).getNormalMatrix(e), r = 0, i = this.vertices.length; i > r; r++) {
							var o = this.vertices[r];
							o.applyMatrix4(e)
						}
						for (var r = 0, i = this.faces.length; i > r; r++) {
							var a = this.faces[r];
							a.normal.applyMatrix3(t).normalize();
							for (var s = 0, h = a.vertexNormals.length; h > s; s++) a.vertexNormals[s].applyMatrix3(t).normalize()
						}
						null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0
					},
					rotateX: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
						}
					}(),
					rotateY: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
						}
					}(),
					rotateZ: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
						}
					}(),
					translate: function() {
						var e;
						return function(t, r, i) {
							return void 0 === e && (e = new n.Matrix4), e.makeTranslation(t, r, i), this.applyMatrix(e), this
						}
					}(),
					scale: function() {
						var e;
						return function(t, r, i) {
							return void 0 === e && (e = new n.Matrix4), e.makeScale(t, r, i), this.applyMatrix(e), this
						}
					}(),
					lookAt: function() {
						var e;
						return function(t) {
							void 0 === e && (e = new n.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
						}
					}(),
					fromBufferGeometry: function(e) {
						function t(e, t, i) {
							var o = void 0 !== s ? [u[e].clone(), u[t].clone(), u[i].clone()] : [],
								a = void 0 !== h ? [r.colors[e].clone(), r.colors[t].clone(), r.colors[i].clone()] : [],
								f = new n.Face3(e, t, i, o, a);
							r.faces.push(f), void 0 !== c && r.faceVertexUvs[0].push([d[e].clone(), d[t].clone(), d[i].clone()]), void 0 !== l && r.faceVertexUvs[1].push([p[e].clone(), p[t].clone(), p[i].clone()])
						}
						var r = this,
							i = null !== e.index ? e.index.array : void 0,
							o = e.attributes,
							a = o.position.array,
							s = void 0 !== o.normal ? o.normal.array : void 0,
							h = void 0 !== o.color ? o.color.array : void 0,
							c = void 0 !== o.uv ? o.uv.array : void 0,
							l = void 0 !== o.uv2 ? o.uv2.array : void 0;
						void 0 !== l && (this.faceVertexUvs[1] = []);
						for (var u = [], d = [], p = [], f = 0, m = 0; f < a.length; f += 3, m += 2) r.vertices.push(new n.Vector3(a[f], a[f + 1], a[f + 2])), void 0 !== s && u.push(new n.Vector3(s[f], s[f + 1], s[f + 2])), void 0 !== h && r.colors.push(new n.Color(h[f], h[f + 1], h[f + 2])), void 0 !== c && d.push(new n.Vector2(c[m], c[m + 1])), void 0 !== l && p.push(new n.Vector2(l[m], l[m + 1]));
						if (void 0 !== i) {
							var v = e.groups;
							if (v.length > 0)
								for (var f = 0; f < v.length; f++)
									for (var g = v[f], y = g.start, x = g.count, m = y, b = y + x; b > m; m += 3) t(i[m], i[m + 1], i[m + 2]);
							else
								for (var f = 0; f < i.length; f += 3) t(i[f], i[f + 1], i[f + 2])
						} else
							for (var f = 0; f < a.length / 3; f += 3) t(f, f + 1, f + 2);
						return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
					},
					center: function() {
						this.computeBoundingBox();
						var e = this.boundingBox.center().negate();
						return this.translate(e.x, e.y, e.z), e
					},
					normalize: function() {
						this.computeBoundingSphere();
						var e = this.boundingSphere.center,
							t = this.boundingSphere.radius,
							r = 0 === t ? 1 : 1 / t,
							i = new n.Matrix4;
						return i.set(r, 0, 0, -r * e.x, 0, r, 0, -r * e.y, 0, 0, r, -r * e.z, 0, 0, 0, 1), this.applyMatrix(i), this
					},
					computeFaceNormals: function() {
						for (var e = new n.Vector3, t = new n.Vector3, r = 0, i = this.faces.length; i > r; r++) {
							var o = this.faces[r],
								a = this.vertices[o.a],
								s = this.vertices[o.b],
								h = this.vertices[o.c];
							e.subVectors(h, s), t.subVectors(a, s), e.cross(t), e.normalize(), o.normal.copy(e)
						}
					},
					computeVertexNormals: function(e) {
						void 0 === e && (e = !0);
						var t, r, i, o, a, s;
						for (s = new Array(this.vertices.length), t = 0, r = this.vertices.length; r > t; t++) s[t] = new n.Vector3;
						if (e) {
							var h, c, l, u = new n.Vector3,
								d = new n.Vector3;
							for (i = 0, o = this.faces.length; o > i; i++) a = this.faces[i], h = this.vertices[a.a], c = this.vertices[a.b], l = this.vertices[a.c], u.subVectors(l, c), d.subVectors(h, c), u.cross(d), s[a.a].add(u), s[a.b].add(u), s[a.c].add(u)
						} else
							for (i = 0, o = this.faces.length; o > i; i++) a = this.faces[i], s[a.a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
						for (t = 0, r = this.vertices.length; r > t; t++) s[t].normalize();
						for (i = 0, o = this.faces.length; o > i; i++) {
							a = this.faces[i];
							var p = a.vertexNormals;
							3 === p.length ? (p[0].copy(s[a.a]), p[1].copy(s[a.b]), p[2].copy(s[a.c])) : (p[0] = s[a.a].clone(), p[1] = s[a.b].clone(), p[2] = s[a.c].clone())
						}
						this.faces.length > 0 && (this.normalsNeedUpdate = !0)
					},
					computeMorphNormals: function() {
						var e, t, r, i, o;
						for (r = 0, i = this.faces.length; i > r; r++)
							for (o = this.faces[r], o.__originalFaceNormal ? o.__originalFaceNormal.copy(o.normal) : o.__originalFaceNormal = o.normal.clone(), o.__originalVertexNormals || (o.__originalVertexNormals = []), e = 0, t = o.vertexNormals.length; t > e; e++) o.__originalVertexNormals[e] ? o.__originalVertexNormals[e].copy(o.vertexNormals[e]) : o.__originalVertexNormals[e] = o.vertexNormals[e].clone();
						var a = new n.Geometry;
						for (a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
							if (!this.morphNormals[e]) {
								this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
								var s, h, c = this.morphNormals[e].faceNormals,
									l = this.morphNormals[e].vertexNormals;
								for (r = 0, i = this.faces.length; i > r; r++) s = new n.Vector3, h = {
									a: new n.Vector3,
									b: new n.Vector3,
									c: new n.Vector3
								}, c.push(s), l.push(h)
							}
							var u = this.morphNormals[e];
							a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
							var s, h;
							for (r = 0, i = this.faces.length; i > r; r++) o = this.faces[r], s = u.faceNormals[r], h = u.vertexNormals[r], s.copy(o.normal), h.a.copy(o.vertexNormals[0]), h.b.copy(o.vertexNormals[1]), h.c.copy(o.vertexNormals[2])
						}
						for (r = 0, i = this.faces.length; i > r; r++) o = this.faces[r], o.normal = o.__originalFaceNormal, o.vertexNormals = o.__originalVertexNormals
					},
					computeTangents: function() {
						console.warn("THREE.Geometry: .computeTangents() has been removed.")
					},
					computeLineDistances: function() {
						for (var e = 0, t = this.vertices, r = 0, i = t.length; i > r; r++) r > 0 && (e += t[r].distanceTo(t[r - 1])), this.lineDistances[r] = e
					},
					computeBoundingBox: function() {
						null === this.boundingBox && (this.boundingBox = new n.Box3), this.boundingBox.setFromPoints(this.vertices)
					},
					computeBoundingSphere: function() {
						null === this.boundingSphere && (this.boundingSphere = new n.Sphere), this.boundingSphere.setFromPoints(this.vertices)
					},
					merge: function(e, t, r) {
						if (e instanceof n.Geometry == !1) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
						var i, o = this.vertices.length,
							a = this.vertices,
							s = e.vertices,
							h = this.faces,
							c = e.faces,
							l = this.faceVertexUvs[0],
							u = e.faceVertexUvs[0];
						void 0 === r && (r = 0), void 0 !== t && (i = (new n.Matrix3).getNormalMatrix(t));
						for (var d = 0, p = s.length; p > d; d++) {
							var f = s[d],
								m = f.clone();
							void 0 !== t && m.applyMatrix4(t), a.push(m)
						}
						for (d = 0, p = c.length; p > d; d++) {
							var v, g, y, x = c[d],
								b = x.vertexNormals,
								w = x.vertexColors;
							v = new n.Face3(x.a + o, x.b + o, x.c + o), v.normal.copy(x.normal), void 0 !== i && v.normal.applyMatrix3(i).normalize();
							for (var M = 0, _ = b.length; _ > M; M++) g = b[M].clone(), void 0 !== i && g.applyMatrix3(i).normalize(), v.vertexNormals.push(g);
							v.color.copy(x.color);
							for (var M = 0, _ = w.length; _ > M; M++) y = w[M], v.vertexColors.push(y.clone());
							v.materialIndex = x.materialIndex + r, h.push(v)
						}
						for (d = 0, p = u.length; p > d; d++) {
							var E = u[d],
								A = [];
							if (void 0 !== E) {
								for (var M = 0, _ = E.length; _ > M; M++) A.push(E[M].clone());
								l.push(A)
							}
						}
					},
					mergeMesh: function(e) {
						return e instanceof n.Mesh == !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), void this.merge(e.geometry, e.matrix))
					},
					mergeVertices: function() {
						var e, t, r, i, n, o, a, s, h = {},
							c = [],
							l = [],
							u = 4,
							d = Math.pow(10, u);
						for (r = 0, i = this.vertices.length; i > r; r++) e = this.vertices[r], t = Math.round(e.x * d) + "_" + Math.round(e.y * d) + "_" + Math.round(e.z * d), void 0 === h[t] ? (h[t] = r, c.push(this.vertices[r]), l[r] = c.length - 1) : l[r] = l[h[t]];
						var p = [];
						for (r = 0, i = this.faces.length; i > r; r++) {
							n = this.faces[r], n.a = l[n.a], n.b = l[n.b], n.c = l[n.c], o = [n.a, n.b, n.c];
							for (var f = -1, m = 0; 3 > m; m++)
								if (o[m] === o[(m + 1) % 3]) {
									f = m, p.push(r);
									break
								}
						}
						for (r = p.length - 1; r >= 0; r--) {
							var v = p[r];
							for (this.faces.splice(v, 1), a = 0, s = this.faceVertexUvs.length; s > a; a++) this.faceVertexUvs[a].splice(v, 1)
						}
						var g = this.vertices.length - c.length;
						return this.vertices = c, g
					},
					sortFacesByMaterialIndex: function() {
						function e(e, t) {
							return e.materialIndex - t.materialIndex
						}
						for (var t = this.faces, r = t.length, i = 0; r > i; i++) t[i]._id = i;
						t.sort(e);
						var n, o, a = this.faceVertexUvs[0],
							s = this.faceVertexUvs[1];
						a && a.length === r && (n = []), s && s.length === r && (o = []);
						for (var i = 0; r > i; i++) {
							var h = t[i]._id;
							n && n.push(a[h]), o && o.push(s[h])
						}
						n && (this.faceVertexUvs[0] = n), o && (this.faceVertexUvs[1] = o)
					},
					toJSON: function() {
						function e(e, t, r) {
							return r ? e | 1 << t : e & ~(1 << t)
						}

						function t(e) {
							var t = e.x.toString() + e.y.toString() + e.z.toString();
							return void 0 !== d[t] ? d[t] : (d[t] = u.length / 3, u.push(e.x, e.y, e.z), d[t])
						}

						function r(e) {
							var t = e.r.toString() + e.g.toString() + e.b.toString();
							return void 0 !== f[t] ? f[t] : (f[t] = p.length, p.push(e.getHex()), f[t])
						}

						function i(e) {
							var t = e.x.toString() + e.y.toString();
							return void 0 !== v[t] ? v[t] : (v[t] = m.length / 2, m.push(e.x, e.y), v[t])
						}
						var n = {
							metadata: {
								version: 4.4,
								type: "Geometry",
								generator: "Geometry.toJSON"
							}
						};
						if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
							var o = this.parameters;
							for (var a in o) void 0 !== o[a] && (n[a] = o[a]);
							return n
						}
						for (var s = [], h = 0; h < this.vertices.length; h++) {
							var c = this.vertices[h];
							s.push(c.x, c.y, c.z)
						}
						for (var l = [], u = [], d = {}, p = [], f = {}, m = [], v = {}, h = 0; h < this.faces.length; h++) {
							var g = this.faces[h],
								y = !0,
								x = !1,
								b = void 0 !== this.faceVertexUvs[0][h],
								w = g.normal.length() > 0,
								M = g.vertexNormals.length > 0,
								_ = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b,
								E = g.vertexColors.length > 0,
								A = 0;
							if (A = e(A, 0, 0), A = e(A, 1, y), A = e(A, 2, x), A = e(A, 3, b), A = e(A, 4, w), A = e(A, 5, M), A = e(A, 6, _), A = e(A, 7, E), l.push(A), l.push(g.a, g.b, g.c), l.push(g.materialIndex), b) {
								var S = this.faceVertexUvs[0][h];
								l.push(i(S[0]), i(S[1]), i(S[2]))
							}
							if (w && l.push(t(g.normal)), M) {
								var C = g.vertexNormals;
								l.push(t(C[0]), t(C[1]), t(C[2]))
							}
							if (_ && l.push(r(g.color)), E) {
								var T = g.vertexColors;
								l.push(r(T[0]), r(T[1]), r(T[2]))
							}
						}
						return n.data = {}, n.data.vertices = s, n.data.normals = u, p.length > 0 && (n.data.colors = p), m.length > 0 && (n.data.uvs = [m]), n.data.faces = l, n
					},
					clone: function() {
						return (new n.Geometry).copy(this)
					},
					copy: function(e) {
						this.vertices = [], this.faces = [], this.faceVertexUvs = [
							[]
						];
						for (var t = e.vertices, r = 0, i = t.length; i > r; r++) this.vertices.push(t[r].clone());
						for (var n = e.faces, r = 0, i = n.length; i > r; r++) this.faces.push(n[r].clone());
						for (var r = 0, i = e.faceVertexUvs.length; i > r; r++) {
							var o = e.faceVertexUvs[r];
							void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
							for (var a = 0, s = o.length; s > a; a++) {
								for (var h = o[a], c = [], l = 0, u = h.length; u > l; l++) {
									var d = h[l];
									c.push(d.clone())
								}
								this.faceVertexUvs[r].push(c)
							}
						}
						return this
					},
					dispose: function() {
						this.dispatchEvent({
							type: "dispose"
						})
					}
				}, n.EventDispatcher.prototype.apply(n.Geometry.prototype), n.GeometryIdCount = 0, n.DirectGeometry = function() {
					Object.defineProperty(this, "id", {
						value: n.GeometryIdCount++
					}), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
				}, n.DirectGeometry.prototype = {
					constructor: n.DirectGeometry,
					computeBoundingBox: n.Geometry.prototype.computeBoundingBox,
					computeBoundingSphere: n.Geometry.prototype.computeBoundingSphere,
					computeFaceNormals: function() {
						console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
					},
					computeVertexNormals: function() {
						console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
					},
					computeGroups: function(e) {
						for (var t, r, i = [], n = e.faces, o = 0; o < n.length; o++) {
							var a = n[o];
							a.materialIndex !== r && (r = a.materialIndex, void 0 !== t && (t.count = 3 * o - t.start, i.push(t)), t = {
								start: 3 * o,
								materialIndex: r
							})
						}
						void 0 !== t && (t.count = 3 * o - t.start, i.push(t)), this.groups = i
					},
					fromGeometry: function(e) {
						var t, r = e.faces,
							i = e.vertices,
							o = e.faceVertexUvs,
							a = o[0] && o[0].length > 0,
							s = o[1] && o[1].length > 0,
							h = e.morphTargets,
							c = h.length;
						if (c > 0) {
							t = [];
							for (var l = 0; c > l; l++) t[l] = [];
							this.morphTargets.position = t
						}
						var u, d = e.morphNormals,
							p = d.length;
						if (p > 0) {
							u = [];
							for (var l = 0; p > l; l++) u[l] = [];
							this.morphTargets.normal = u
						}
						for (var f = e.skinIndices, m = e.skinWeights, v = f.length === i.length, g = m.length === i.length, l = 0; l < r.length; l++) {
							var y = r[l];
							this.vertices.push(i[y.a], i[y.b], i[y.c]);
							var x = y.vertexNormals;
							if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
							else {
								var b = y.normal;
								this.normals.push(b, b, b)
							}
							var w = y.vertexColors;
							if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
							else {
								var M = y.color;
								this.colors.push(M, M, M)
							}
							if (a === !0) {
								var _ = o[0][l];
								void 0 !== _ ? this.uvs.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new n.Vector2, new n.Vector2, new n.Vector2))
							}
							if (s === !0) {
								var _ = o[1][l];
								void 0 !== _ ? this.uvs2.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new n.Vector2, new n.Vector2, new n.Vector2))
							}
							for (var E = 0; c > E; E++) {
								var A = h[E].vertices;
								t[E].push(A[y.a], A[y.b], A[y.c])
							}
							for (var E = 0; p > E; E++) {
								var S = d[E].vertexNormals[l];
								u[E].push(S.a, S.b, S.c)
							}
							v && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), g && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
						}
						return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
					},
					dispose: function() {
						this.dispatchEvent({
							type: "dispose"
						})
					}
				}, n.EventDispatcher.prototype.apply(n.DirectGeometry.prototype), n.BufferGeometry = function() {
					Object.defineProperty(this, "id", {
						value: n.GeometryIdCount++
					}), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
						start: 0,
						count: 1 / 0
					}
				}, n.BufferGeometry.prototype = {
					constructor: n.BufferGeometry,
					getIndex: function() {
						return this.index
					},
					setIndex: function(e) {
						this.index = e
					},
					addAttribute: function(e, t) {
						return t instanceof n.BufferAttribute == !1 && t instanceof n.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(e, new n.BufferAttribute(arguments[1], arguments[2]))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(t)) : (this.attributes[e] = t, this)
					},
					getAttribute: function(e) {
						return this.attributes[e]
					},
					removeAttribute: function(e) {
						return delete this.attributes[e], this
					},
					addGroup: function(e, t, r) {
						this.groups.push({
							start: e,
							count: t,
							materialIndex: void 0 !== r ? r : 0
						})
					},
					clearGroups: function() {
						this.groups = []
					},
					setDrawRange: function(e, t) {
						this.drawRange.start = e, this.drawRange.count = t
					},
					applyMatrix: function(e) {
						var t = this.attributes.position;
						void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0);
						var r = this.attributes.normal;
						if (void 0 !== r) {
							var i = (new n.Matrix3).getNormalMatrix(e);
							i.applyToVector3Array(r.array), r.needsUpdate = !0
						}
						null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere()
					},
					rotateX: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
						}
					}(),
					rotateY: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
						}
					}(),
					rotateZ: function() {
						var e;
						return function(t) {
							return void 0 === e && (e = new n.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
						}
					}(),
					translate: function() {
						var e;
						return function(t, r, i) {
							return void 0 === e && (e = new n.Matrix4), e.makeTranslation(t, r, i), this.applyMatrix(e), this
						}
					}(),
					scale: function() {
						var e;
						return function(t, r, i) {
							return void 0 === e && (e = new n.Matrix4), e.makeScale(t, r, i), this.applyMatrix(e), this
						}
					}(),
					lookAt: function() {
						var e;
						return function(t) {
							void 0 === e && (e = new n.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
						}
					}(),
					center: function() {
						this.computeBoundingBox();
						var e = this.boundingBox.center().negate();
						return this.translate(e.x, e.y, e.z), e
					},
					setFromObject: function(e) {
						var t = e.geometry;
						if (e instanceof n.Points || e instanceof n.Line) {
							var r = new n.Float32Attribute(3 * t.vertices.length, 3),
								i = new n.Float32Attribute(3 * t.colors.length, 3);
							if (this.addAttribute("position", r.copyVector3sArray(t.vertices)), this.addAttribute("color", i.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
								var o = new n.Float32Attribute(t.lineDistances.length, 1);
								this.addAttribute("lineDistance", o.copyArray(t.lineDistances))
							}
							null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
						} else e instanceof n.Mesh && t instanceof n.Geometry && this.fromGeometry(t);
						return this
					},
					updateFromObject: function(e) {
						var t = e.geometry;
						if (e instanceof n.Mesh) {
							var r = t.__directGeometry;
							if (void 0 === r) return this.fromGeometry(t);
							r.verticesNeedUpdate = t.verticesNeedUpdate, r.normalsNeedUpdate = t.normalsNeedUpdate, r.colorsNeedUpdate = t.colorsNeedUpdate, r.uvsNeedUpdate = t.uvsNeedUpdate, r.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = r
						}
						if (t.verticesNeedUpdate === !0) {
							var i = this.attributes.position;
							void 0 !== i && (i.copyVector3sArray(t.vertices), i.needsUpdate = !0), t.verticesNeedUpdate = !1
						}
						if (t.normalsNeedUpdate === !0) {
							var i = this.attributes.normal;
							void 0 !== i && (i.copyVector3sArray(t.normals), i.needsUpdate = !0), t.normalsNeedUpdate = !1
						}
						if (t.colorsNeedUpdate === !0) {
							var i = this.attributes.color;
							void 0 !== i && (i.copyColorsArray(t.colors), i.needsUpdate = !0), t.colorsNeedUpdate = !1
						}
						if (t.uvsNeedUpdate) {
							var i = this.attributes.uv;
							void 0 !== i && (i.copyVector2sArray(t.uvs), i.needsUpdate = !0), t.uvsNeedUpdate = !1
						}
						if (t.lineDistancesNeedUpdate) {
							var i = this.attributes.lineDistance;
							void 0 !== i && (i.copyArray(t.lineDistances), i.needsUpdate = !0), t.lineDistancesNeedUpdate = !1
						}
						return t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
					},
					fromGeometry: function(e) {
						return e.__directGeometry = (new n.DirectGeometry).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
					},
					fromDirectGeometry: function(e) {
						var t = new Float32Array(3 * e.vertices.length);
						if (this.addAttribute("position", new n.BufferAttribute(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
							var r = new Float32Array(3 * e.normals.length);
							this.addAttribute("normal", new n.BufferAttribute(r, 3).copyVector3sArray(e.normals))
						}
						if (e.colors.length > 0) {
							var i = new Float32Array(3 * e.colors.length);
							this.addAttribute("color", new n.BufferAttribute(i, 3).copyColorsArray(e.colors))
						}
						if (e.uvs.length > 0) {
							var o = new Float32Array(2 * e.uvs.length);
							this.addAttribute("uv", new n.BufferAttribute(o, 2).copyVector2sArray(e.uvs))
						}
						if (e.uvs2.length > 0) {
							var a = new Float32Array(2 * e.uvs2.length);
							this.addAttribute("uv2", new n.BufferAttribute(a, 2).copyVector2sArray(e.uvs2))
						}
						if (e.indices.length > 0) {
							var s = e.vertices.length > 65535 ? Uint32Array : Uint16Array,
								h = new s(3 * e.indices.length);
							this.setIndex(new n.BufferAttribute(h, 1).copyIndicesArray(e.indices))
						}
						this.groups = e.groups;
						for (var c in e.morphTargets) {
							for (var l = [], u = e.morphTargets[c], d = 0, p = u.length; p > d; d++) {
								var f = u[d],
									m = new n.Float32Attribute(3 * f.length, 3);
								l.push(m.copyVector3sArray(f))
							}
							this.morphAttributes[c] = l
						}
						if (e.skinIndices.length > 0) {
							var v = new n.Float32Attribute(4 * e.skinIndices.length, 4);
							this.addAttribute("skinIndex", v.copyVector4sArray(e.skinIndices))
						}
						if (e.skinWeights.length > 0) {
							var g = new n.Float32Attribute(4 * e.skinWeights.length, 4);
							this.addAttribute("skinWeight", g.copyVector4sArray(e.skinWeights))
						}
						return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
					},
					computeBoundingBox: function() {
						new n.Vector3;
						return function() {
							null === this.boundingBox && (this.boundingBox = new n.Box3);
							var e = this.attributes.position.array;
							e && this.boundingBox.setFromArray(e), (void 0 === e || 0 === e.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
						}
					}(),
					computeBoundingSphere: function() {
						var e = new n.Box3,
							t = new n.Vector3;
						return function() {
							null === this.boundingSphere && (this.boundingSphere = new n.Sphere);
							var r = this.attributes.position.array;
							if (r) {
								var i = this.boundingSphere.center;
								e.setFromArray(r), e.center(i);
								for (var o = 0, a = 0, s = r.length; s > a; a += 3) t.fromArray(r, a), o = Math.max(o, i.distanceToSquared(t));
								this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
							}
						}
					}(),
					computeFaceNormals: function() {},
					computeVertexNormals: function() {
						var e = this.index,
							t = this.attributes,
							r = this.groups;
						if (t.position) {
							var i = t.position.array;
							if (void 0 === t.normal) this.addAttribute("normal", new n.BufferAttribute(new Float32Array(i.length), 3));
							else
								for (var o = t.normal.array, a = 0, s = o.length; s > a; a++) o[a] = 0;
							var h, c, l, u = t.normal.array,
								d = new n.Vector3,
								p = new n.Vector3,
								f = new n.Vector3,
								m = new n.Vector3,
								v = new n.Vector3;
							if (e) {
								var g = e.array;
								0 === r.length && this.addGroup(0, g.length);
								for (var y = 0, x = r.length; x > y; ++y)
									for (var b = r[y], w = b.start, M = b.count, a = w, s = w + M; s > a; a += 3) h = 3 * g[a + 0], c = 3 * g[a + 1], l = 3 * g[a + 2], d.fromArray(i, h), p.fromArray(i, c), f.fromArray(i, l), m.subVectors(f, p), v.subVectors(d, p), m.cross(v), u[h] += m.x, u[h + 1] += m.y, u[h + 2] += m.z, u[c] += m.x, u[c + 1] += m.y, u[c + 2] += m.z, u[l] += m.x, u[l + 1] += m.y, u[l + 2] += m.z
							} else
								for (var a = 0, s = i.length; s > a; a += 9) d.fromArray(i, a),
									p.fromArray(i, a + 3), f.fromArray(i, a + 6), m.subVectors(f, p), v.subVectors(d, p), m.cross(v), u[a] = m.x, u[a + 1] = m.y, u[a + 2] = m.z, u[a + 3] = m.x, u[a + 4] = m.y, u[a + 5] = m.z, u[a + 6] = m.x, u[a + 7] = m.y, u[a + 8] = m.z;
							this.normalizeNormals(), t.normal.needsUpdate = !0
						}
					},
					merge: function(e, t) {
						if (e instanceof n.BufferGeometry == !1) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
						void 0 === t && (t = 0);
						var r = this.attributes;
						for (var i in r)
							if (void 0 !== e.attributes[i])
								for (var o = r[i], a = o.array, s = e.attributes[i], h = s.array, c = s.itemSize, l = 0, u = c * t; l < h.length; l++, u++) a[u] = h[l];
						return this
					},
					normalizeNormals: function() {
						for (var e, t, r, i, n = this.attributes.normal.array, o = 0, a = n.length; a > o; o += 3) e = n[o], t = n[o + 1], r = n[o + 2], i = 1 / Math.sqrt(e * e + t * t + r * r), n[o] *= i, n[o + 1] *= i, n[o + 2] *= i
					},
					toNonIndexed: function() {
						if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
						var e = new n.BufferGeometry,
							t = this.index.array,
							r = this.attributes;
						for (var i in r) {
							for (var o = r[i], a = o.array, s = o.itemSize, h = new a.constructor(t.length * s), c = 0, l = 0, u = 0, d = t.length; d > u; u++) {
								c = t[u] * s;
								for (var p = 0; s > p; p++) h[l++] = a[c++]
							}
							e.addAttribute(i, new n.BufferAttribute(h, s))
						}
						return e
					},
					toJSON: function() {
						var e = {
							metadata: {
								version: 4.4,
								type: "BufferGeometry",
								generator: "BufferGeometry.toJSON"
							}
						};
						if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
							var t = this.parameters;
							for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
							return e
						}
						e.data = {
							attributes: {}
						};
						var i = this.index;
						if (null !== i) {
							var n = Array.prototype.slice.call(i.array);
							e.data.index = {
								type: i.array.constructor.name,
								array: n
							}
						}
						var o = this.attributes;
						for (var r in o) {
							var a = o[r],
								n = Array.prototype.slice.call(a.array);
							e.data.attributes[r] = {
								itemSize: a.itemSize,
								type: a.array.constructor.name,
								array: n
							}
						}
						var s = this.groups;
						s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
						var h = this.boundingSphere;
						return null !== h && (e.data.boundingSphere = {
							center: h.center.toArray(),
							radius: h.radius
						}), e
					},
					clone: function() {
						return (new n.BufferGeometry).copy(this)
					},
					copy: function(e) {
						var t = e.index;
						null !== t && this.setIndex(t.clone());
						var r = e.attributes;
						for (var i in r) {
							var n = r[i];
							this.addAttribute(i, n.clone())
						}
						for (var o = e.groups, a = 0, s = o.length; s > a; a++) {
							var h = o[a];
							this.addGroup(h.start, h.count)
						}
						return this
					},
					dispose: function() {
						this.dispatchEvent({
							type: "dispose"
						})
					}
				}, n.EventDispatcher.prototype.apply(n.BufferGeometry.prototype), n.BufferGeometry.MaxIndex = 65535, n.InstancedBufferGeometry = function() {
					n.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
				}, n.InstancedBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.InstancedBufferGeometry.prototype.constructor = n.InstancedBufferGeometry, n.InstancedBufferGeometry.prototype.addGroup = function(e, t, r) {
					this.groups.push({
						start: e,
						count: t,
						instances: r
					})
				}, n.InstancedBufferGeometry.prototype.copy = function(e) {
					var t = e.index;
					null !== t && this.setIndex(t.clone());
					var r = e.attributes;
					for (var i in r) {
						var n = r[i];
						this.addAttribute(i, n.clone())
					}
					for (var o = e.groups, a = 0, s = o.length; s > a; a++) {
						var h = o[a];
						this.addGroup(h.start, h.count, h.instances)
					}
					return this
				}, n.EventDispatcher.prototype.apply(n.InstancedBufferGeometry.prototype), n.Uniform = function(e, t) {
					this.type = e, this.value = t, this.dynamic = !1
				}, n.Uniform.prototype = {
					constructor: n.Uniform,
					onUpdate: function(e) {
						return this.dynamic = !0, this.onUpdateCallback = e, this
					}
				}, n.AnimationClip = function(e, t, r) {
					this.name = e || n.Math.generateUUID(), this.tracks = r, this.duration = void 0 !== t ? t : -1, this.duration < 0 && this.resetDuration(), this.trim(), this.optimize()
				}, n.AnimationClip.prototype = {
					constructor: n.AnimationClip,
					resetDuration: function() {
						for (var e = this.tracks, t = 0, r = 0, i = e.length; r !== i; ++r) {
							var n = this.tracks[r];
							t = Math.max(t, n.times[n.times.length - 1])
						}
						this.duration = t
					},
					trim: function() {
						for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
						return this
					},
					optimize: function() {
						for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
						return this
					}
				}, Object.assign(n.AnimationClip, {
					parse: function(e) {
						for (var t = [], r = e.tracks, i = 1 / (e.fps || 1), o = 0, a = r.length; o !== a; ++o) t.push(n.KeyframeTrack.parse(r[o]).scale(i));
						return new n.AnimationClip(e.name, e.duration, t)
					},
					toJSON: function(e) {
						for (var t = [], r = e.tracks, i = {
								name: e.name,
								duration: e.duration,
								tracks: t
							}, o = 0, a = r.length; o !== a; ++o) t.push(n.KeyframeTrack.toJSON(r[o]));
						return i
					},
					CreateFromMorphTargetSequence: function(e, t, r) {
						for (var i = t.length, o = [], a = 0; i > a; a++) {
							var s = [],
								h = [];
							s.push((a + i - 1) % i, a, (a + 1) % i), h.push(0, 1, 0);
							var c = n.AnimationUtils.getKeyframeOrder(s);
							s = n.AnimationUtils.sortedArray(s, 1, c), h = n.AnimationUtils.sortedArray(h, 1, c), 0 === s[0] && (s.push(i), h.push(h[0])), o.push(new n.NumberKeyframeTrack(".morphTargetInfluences[" + t[a].name + "]", s, h).scale(1 / r))
						}
						return new n.AnimationClip(e, -1, o)
					},
					findByName: function(e, t) {
						for (var r = 0; r < e.length; r++)
							if (e[r].name === t) return e[r];
						return null
					},
					CreateClipsFromMorphTargetSequences: function(e, t) {
						for (var r = {}, i = /^([\w-]*?)([\d]+)$/, o = 0, a = e.length; a > o; o++) {
							var s = e[o],
								h = s.name.match(i);
							if (h && h.length > 1) {
								var c = h[1],
									l = r[c];
								l || (r[c] = l = []), l.push(s)
							}
						}
						var u = [];
						for (var c in r) u.push(n.AnimationClip.CreateFromMorphTargetSequence(c, r[c], t));
						return u
					},
					parseAnimation: function(e, t) {
						if (!e) return console.error("  no animation in JSONLoader data"), null;
						for (var r = function(e, t, r, i, o) {
								if (0 !== r.length) {
									var a = [],
										s = [];
									n.AnimationUtils.flattenJSON(r, a, s, i), 0 !== a.length && o.push(new e(t, a, s))
								}
							}, i = [], o = e.name || "default", a = e.length || -1, s = e.fps || 30, h = e.hierarchy || [], c = 0; c < h.length; c++) {
							var l = h[c].keys;
							if (l && 0 != l.length)
								if (l[0].morphTargets) {
									for (var u = {}, d = 0; d < l.length; d++)
										if (l[d].morphTargets)
											for (var p = 0; p < l[d].morphTargets.length; p++) u[l[d].morphTargets[p]] = -1;
									for (var f in u) {
										for (var m = [], v = [], p = 0; p !== l[d].morphTargets.length; ++p) {
											var g = l[d];
											m.push(g.time), v.push(g.morphTarget === f ? 1 : 0)
										}
										i.push(new n.NumberKeyframeTrack(".morphTargetInfluence[" + f + "]", m, v))
									}
									a = u.length * (s || 1)
								} else {
									var y = ".bones[" + t[c].name + "]";
									r(n.VectorKeyframeTrack, y + ".position", l, "pos", i), r(n.QuaternionKeyframeTrack, y + ".quaternion", l, "rot", i), r(n.VectorKeyframeTrack, y + ".scale", l, "scl", i)
								}
						}
						if (0 === i.length) return null;
						var x = new n.AnimationClip(o, a, i);
						return x
					}
				}), n.AnimationMixer = function(e) {
					this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
				}, n.AnimationMixer.prototype = {
					constructor: n.AnimationMixer,
					clipAction: function(e, t) {
						var r, i = t || this._root,
							o = i.uuid,
							a = "string" == typeof e ? e : e.name,
							s = e !== a ? e : null,
							h = this._actionsByClip[a];
						if (void 0 !== h) {
							var c = h.actionByRoot[o];
							if (void 0 !== c) return c;
							if (r = h.knownActions[0], s = r._clip, e !== a && e !== s) throw new Error("Different clips with the same name detected!")
						}
						if (null === s) return null;
						var l = new n.AnimationMixer._Action(this, s, t);
						return this._bindAction(l, r), this._addInactiveAction(l, a, o), l
					},
					existingAction: function(e, t) {
						var r = t || this._root,
							i = r.uuid,
							n = "string" == typeof e ? e : e.name,
							o = this._actionsByClip[n];
						return void 0 !== o ? o.actionByRoot[i] || null : null
					},
					stopAllAction: function() {
						var e = this._actions,
							t = this._nActiveActions,
							r = this._bindings,
							i = this._nActiveBindings;
						this._nActiveActions = 0, this._nActiveBindings = 0;
						for (var n = 0; n !== t; ++n) e[n].reset();
						for (var n = 0; n !== i; ++n) r[n].useCount = 0;
						return this
					},
					update: function(e) {
						e *= this.timeScale;
						for (var t = this._actions, r = this._nActiveActions, i = this.time += e, n = Math.sign(e), o = this._accuIndex ^= 1, a = 0; a !== r; ++a) {
							var s = t[a];
							s.enabled && s._update(i, e, n, o)
						}
						for (var h = this._bindings, c = this._nActiveBindings, a = 0; a !== c; ++a) h[a].apply(o);
						return this
					},
					getRoot: function() {
						return this._root
					},
					uncacheClip: function(e) {
						var t = this._actions,
							r = e.name,
							i = this._actionsByClip,
							n = i[r];
						if (void 0 !== n) {
							for (var o = n.knownActions, a = 0, s = o.length; a !== s; ++a) {
								var h = o[a];
								this._deactivateAction(h);
								var c = h._cacheIndex,
									l = t[t.length - 1];
								h._cacheIndex = null, h._byClipCacheIndex = null, l._cacheIndex = c, t[c] = l, t.pop(), this._removeInactiveBindingsForAction(h)
							}
							delete i[r]
						}
					},
					uncacheRoot: function(e) {
						var t = e.uuid,
							r = this._actionsByClip;
						for (var i in r) {
							var n = r[i].actionByRoot,
								o = n[t];
							void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
						}
						var a = this._bindingsByRootAndName,
							s = a[t];
						if (void 0 !== s)
							for (var h in s) {
								var c = s[h];
								c.restoreOriginalState(), this._removeInactiveBinding(c)
							}
					},
					uncacheAction: function(e, t) {
						var r = this.existingAction(e, t);
						null !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
					}
				}, n.EventDispatcher.prototype.apply(n.AnimationMixer.prototype), n.AnimationMixer._Action = function(e, t, r) {
					this._mixer = e, this._clip = t, this._localRoot = r || null;
					for (var i = t.tracks, o = i.length, a = new Array(o), s = {
							endingStart: n.ZeroCurvatureEnding,
							endingEnd: n.ZeroCurvatureEnding
						}, h = 0; h !== o; ++h) {
						var c = i[h].createInterpolant(null);
						a[h] = c, c.settings = s
					}
					this._interpolantSettings = s, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = n.LoopRepeat, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
				}, n.AnimationMixer._Action.prototype = {
					constructor: n.AnimationMixer._Action,
					play: function() {
						return this._mixer._activateAction(this), this
					},
					stop: function() {
						return this._mixer._deactivateAction(this), this.reset()
					},
					reset: function() {
						return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
					},
					isRunning: function() {
						this._startTime;
						return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
					},
					isScheduled: function() {
						return this._mixer._isActiveAction(this)
					},
					startAt: function(e) {
						return this._startTime = e, this
					},
					setLoop: function(e, t) {
						return this.loop = e, this.repetitions = t, this
					},
					setEffectiveWeight: function(e) {
						return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
					},
					getEffectiveWeight: function() {
						return this._effectiveWeight
					},
					fadeIn: function(e) {
						return this._scheduleFading(e, 0, 1)
					},
					fadeOut: function(e) {
						return this._scheduleFading(e, 1, 0)
					},
					crossFadeFrom: function(e, t, r) {
						this._mixer;
						if (e.fadeOut(t), this.fadeIn(t), r) {
							var i = this._clip.duration,
								n = e._clip.duration,
								o = n / i,
								a = i / n;
							e.warp(1, o, t), this.warp(a, 1, t)
						}
						return this
					},
					crossFadeTo: function(e, t, r) {
						return e.crossFadeFrom(this, t, r)
					},
					stopFading: function() {
						var e = this._weightInterpolant;
						return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
					},
					setEffectiveTimeScale: function(e) {
						return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
					},
					getEffectiveTimeScale: function() {
						return this._effectiveTimeScale
					},
					setDuration: function(e) {
						return this.timeScale = this._clip.duration / e, this.stopWarping()
					},
					syncWith: function(e) {
						return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
					},
					halt: function(e) {
						return this.warp(this._currentTimeScale, 0, e)
					},
					warp: function(e, t, r) {
						var i = this._mixer,
							n = i.time,
							o = this._timeScaleInterpolant,
							a = this.timeScale;
						null === o && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
						var s = o.parameterPositions,
							h = o.sampleValues;
						return s[0] = n, s[1] = n + r, h[0] = e / a, h[1] = t / a, this
					},
					stopWarping: function() {
						var e = this._timeScaleInterpolant;
						return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
					},
					getMixer: function() {
						return this._mixer
					},
					getClip: function() {
						return this._clip
					},
					getRoot: function() {
						return this._localRoot || this._mixer._root
					},
					_update: function(e, t, r, i) {
						var n = this._startTime;
						if (null !== n) {
							var o = (e - n) * r;
							if (0 > o || 0 === r) return;
							this._startTime = null, t = r * o
						}
						t *= this._updateTimeScale(e);
						var a = this._updateTime(t),
							s = this._updateWeight(e);
						if (s > 0)
							for (var h = this._interpolants, c = this._propertyBindings, l = 0, u = h.length; l !== u; ++l) h[l].evaluate(a), c[l].accumulate(i, s)
					},
					_updateWeight: function(e) {
						var t = 0;
						if (this.enabled) {
							t = this.weight;
							var r = this._weightInterpolant;
							if (null !== r) {
								var i = r.evaluate(e)[0];
								t *= i, e > r.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
							}
						}
						return this._effectiveWeight = t, t
					},
					_updateTimeScale: function(e) {
						var t = 0;
						if (!this.paused) {
							t = this.timeScale;
							var r = this._timeScaleInterpolant;
							if (null !== r) {
								var i = r.evaluate(e)[0];
								t *= i, e > r.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.pause = !0 : this.timeScale = t)
							}
						}
						return this._effectiveTimeScale = t, t
					},
					_updateTime: function(e) {
						var t = this.time + e;
						if (0 === e) return t;
						var r = this._clip.duration,
							i = this.loop,
							o = this._loopCount,
							a = !1;
						switch (i) {
							case n.LoopOnce:
								if (-1 === o && (this.loopCount = 0, this._setEndings(!0, !0, !1)), t >= r) t = r;
								else {
									if (!(0 > t)) break;
									t = 0
								}
								this.clampWhenFinished ? this.pause = !0 : this.enabled = !1, this._mixer.dispatchEvent({
									type: "finished",
									action: this,
									direction: 0 > e ? -1 : 1
								});
								break;
							case n.LoopPingPong:
								a = !0;
							case n.LoopRepeat:
								if (-1 === o && (e > 0 ? (o = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), t >= r || 0 > t) {
									var s = Math.floor(t / r);
									t -= r * s, o += Math.abs(s);
									var h = this.repetitions - o;
									if (0 > h) {
										this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? r : 0, this._mixer.dispatchEvent({
											type: "finished",
											action: this,
											direction: e > 0 ? 1 : -1
										});
										break
									}
									if (0 === h) {
										var c = 0 > e;
										this._setEndings(c, !c, a)
									} else this._setEndings(!1, !1, a);
									this._loopCount = o, this._mixer.dispatchEvent({
										type: "loop",
										action: this,
										loopDelta: s
									})
								}
								if (i === n.LoopPingPong && 1 === (1 & o)) return this.time = t, r - t
						}
						return this.time = t, t
					},
					_setEndings: function(e, t, r) {
						var i = this._interpolantSettings;
						r ? (i.endingStart = n.ZeroSlopeEnding, i.endingEnd = n.ZeroSlopeEnding) : (i.endingStart = e ? this.zeroSlopeAtStart ? n.ZeroSlopeEnding : n.ZeroCurvatureEnding : n.WrapAroundEnding, i.endingEnd = t ? this.zeroSlopeAtEnd ? n.ZeroSlopeEnding : n.ZeroCurvatureEnding : n.WrapAroundEnding)
					},
					_scheduleFading: function(e, t, r) {
						var i = this._mixer,
							n = i.time,
							o = this._weightInterpolant;
						null === o && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
						var a = o.parameterPositions,
							s = o.sampleValues;
						return a[0] = n, s[0] = t, a[1] = n + e, s[1] = r, this
					}
				}, Object.assign(n.AnimationMixer.prototype, {
					_bindAction: function(e, t) {
						var r = e._localRoot || this._root,
							i = e._clip.tracks,
							o = i.length,
							a = e._propertyBindings,
							s = e._interpolants,
							h = r.uuid,
							c = this._bindingsByRootAndName,
							l = c[h];
						void 0 === l && (l = {}, c[h] = l);
						for (var u = 0; u !== o; ++u) {
							var d = i[u],
								p = d.name,
								f = l[p];
							if (void 0 !== f) a[u] = f;
							else {
								if (f = a[u], void 0 !== f) {
									null === f._cacheIndex && (++f.referenceCount, this._addInactiveBinding(f, h, p));
									continue
								}
								var m = t && t._propertyBindings[u].binding.parsedPath;
								f = new n.PropertyMixer(n.PropertyBinding.create(r, p, m), d.ValueTypeName, d.getValueSize()), ++f.referenceCount, this._addInactiveBinding(f, h, p), a[u] = f
							}
							s[u].resultBuffer = f.buffer
						}
					},
					_activateAction: function(e) {
						if (!this._isActiveAction(e)) {
							if (null === e._cacheIndex) {
								var t = (e._localRoot || this._root).uuid,
									r = e._clip.name,
									i = this._actionsByClip[r];
								this._bindAction(e, i && i.knownActions[0]), this._addInactiveAction(e, r, t)
							}
							for (var n = e._propertyBindings, o = 0, a = n.length; o !== a; ++o) {
								var s = n[o];
								0 === s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
							}
							this._lendAction(e)
						}
					},
					_deactivateAction: function(e) {
						if (this._isActiveAction(e)) {
							for (var t = e._propertyBindings, r = 0, i = t.length; r !== i; ++r) {
								var n = t[r];
								0 === --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n))
							}
							this._takeBackAction(e)
						}
					},
					_initMemoryManager: function() {
						this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
						var e = this;
						this.stats = {
							actions: {
								get total() {
									return e._actions.length
								},
								get inUse() {
									return e._nActiveActions
								}
							},
							bindings: {
								get total() {
									return e._bindings.length
								},
								get inUse() {
									return e._nActiveBindings
								}
							},
							controlInterpolants: {
								get total() {
									return e._controlInterpolants.length
								},
								get inUse() {
									return e._nActiveControlInterpolants
								}
							}
						}
					},
					_isActiveAction: function(e) {
						var t = e._cacheIndex;
						return null !== t && t < this._nActiveActions
					},
					_addInactiveAction: function(e, t, r) {
						var i = this._actions,
							n = this._actionsByClip,
							o = n[t];
						if (void 0 === o) o = {
							knownActions: [e],
							actionByRoot: {}
						}, e._byClipCacheIndex = 0, n[t] = o;
						else {
							var a = o.knownActions;
							e._byClipCacheIndex = a.length, a.push(e)
						}
						e._cacheIndex = i.length, i.push(e), o.actionByRoot[r] = e
					},
					_removeInactiveAction: function(e) {
						var t = this._actions,
							r = t[t.length - 1],
							i = e._cacheIndex;
						r._cacheIndex = i, t[i] = r, t.pop(), e._cacheIndex = null;
						var n = e._clip.name,
							o = this._actionsByClip,
							a = o[n],
							s = a.knownActions,
							h = s[s.length - 1],
							c = e._byClipCacheIndex;
						h._byClipCacheIndex = c, s[c] = h, s.pop(), e._byClipCacheIndex = null;
						var l = a.actionByRoot,
							u = (t._localRoot || this._root).uuid;
						delete l[u], 0 === s.length && delete o[n], this._removeInactiveBindingsForAction(e)
					},
					_removeInactiveBindingsForAction: function(e) {
						for (var t = e._propertyBindings, r = 0, i = t.length; r !== i; ++r) {
							var n = t[r];
							0 === --n.referenceCount && this._removeInactiveBinding(n)
						}
					},
					_lendAction: function(e) {
						var t = this._actions,
							r = e._cacheIndex,
							i = this._nActiveActions++,
							n = t[i];
						e._cacheIndex = i, t[i] = e, n._cacheIndex = r, t[r] = n
					},
					_takeBackAction: function(e) {
						var t = this._actions,
							r = e._cacheIndex,
							i = --this._nActiveActions,
							n = t[i];
						e._cacheIndex = i, t[i] = e, n._cacheIndex = r, t[r] = n
					},
					_addInactiveBinding: function(e, t, r) {
						var i = this._bindingsByRootAndName,
							n = i[t],
							o = this._bindings;
						void 0 === n && (n = {}, i[t] = n), n[r] = e, e._cacheIndex = o.length, o.push(e)
					},
					_removeInactiveBinding: function(e) {
						var t = this._bindings,
							r = e.binding,
							i = r.rootNode.uuid,
							n = r.path,
							o = this._bindingsByRootAndName,
							a = o[i],
							s = t[t.length - 1],
							h = e._cacheIndex;
						s._cacheIndex = h, t[h] = s, t.pop(), delete a[n];
						e: {
							for (var c in a) break e;delete o[i]
						}
					},
					_lendBinding: function(e) {
						var t = this._bindings,
							r = e._cacheIndex,
							i = this._nActiveBindings++,
							n = t[i];
						e._cacheIndex = i, t[i] = e, n._cacheIndex = r, t[r] = n
					},
					_takeBackBinding: function(e) {
						var t = this._bindings,
							r = e._cacheIndex,
							i = --this._nActiveBindings,
							n = t[i];
						e._cacheIndex = i, t[i] = e, n._cacheIndex = r, t[r] = n
					},
					_lendControlInterpolant: function() {
						var e = this._controlInterpolants,
							t = this._nActiveControlInterpolants++,
							r = e[t];
						return void 0 === r && (r = new n.LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), r.__cacheIndex = t, e[t] = r), r
					},
					_takeBackControlInterpolant: function(e) {
						var t = this._controlInterpolants,
							r = e.__cacheIndex,
							i = --this._nActiveControlInterpolants,
							n = t[i];
						e.__cacheIndex = i, t[i] = e, n.__cacheIndex = r, t[r] = n
					},
					_controlInterpolantsResultBuffer: new Float32Array(1)
				}), n.AnimationObjectGroup = function() {
					this.uuid = n.Math.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
					var e = {};
					this._indicesByUUID = e;
					for (var t = 0, r = arguments.length; t !== r; ++t) e[arguments[t].uuid] = t;
					this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
					var i = this;
					this.stats = {
						objects: {
							get total() {
								return i._objects.length
							},
							get inUse() {
								return this.total - i.nCachedObjects_
							}
						},
						get bindingsPerObject() {
							return i._bindings.length
						}
					}
				}, n.AnimationObjectGroup.prototype = {
					constructor: n.AnimationObjectGroup,
					add: function() {
						for (var e = this._objects, t = e.length, r = this.nCachedObjects_, i = this._indicesByUUID, o = this._paths, a = this._parsedPaths, s = this._bindings, h = s.length, c = 0, l = arguments.length; c !== l; ++c) {
							var u = arguments[c],
								d = u.uuid,
								p = i[d];
							if (void 0 === p) {
								p = t++, i[d] = p, e.push(u);
								for (var f = 0, m = h; f !== m; ++f) s[f].push(new n.PropertyBinding(u, o[f], a[f]))
							} else if (r > p) {
								var v = e[p],
									g = --r,
									y = e[g];
								i[y.uuid] = p, e[p] = y, i[d] = g, e[g] = u;
								for (var f = 0, m = h; f !== m; ++f) {
									var x = s[f],
										b = x[g],
										w = x[p];
									x[p] = b, void 0 === w && (w = new n.PropertyBinding(u, o[f], a[f])), x[g] = w
								}
							} else e[p] !== v && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
						}
						this.nCachedObjects_ = r
					},
					remove: function() {
						for (var e = this._objects, t = (e.length, this.nCachedObjects_), r = this._indicesByUUID, i = this._bindings, n = i.length, o = 0, a = arguments.length; o !== a; ++o) {
							var s = arguments[o],
								h = s.uuid,
								c = r[h];
							if (void 0 !== c && c >= t) {
								var l = t++,
									u = e[l];
								r[u.uuid] = c, e[c] = u, r[h] = l, e[l] = s;
								for (var d = 0, p = n; d !== p; ++d) {
									var f = i[d],
										m = f[l],
										v = f[c];
									f[c] = m, f[l] = v
								}
							}
						}
						this.nCachedObjects_ = t
					},
					uncache: function() {
						for (var e = this._objects, t = e.length, r = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, o = n.length, a = 0, s = arguments.length; a !== s; ++a) {
							var h = arguments[a],
								c = h.uuid,
								l = i[c];
							if (void 0 !== l)
								if (delete i[c], r > l) {
									var u = --r,
										d = e[u],
										p = --t,
										f = e[p];
									i[d.uuid] = l, e[l] = d, i[f.uuid] = u, e[u] = f, e.pop();
									for (var m = 0, v = o; m !== v; ++m) {
										var g = n[m],
											y = g[u],
											x = g[p];
										g[l] = y, g[u] = x, g.pop()
									}
								} else {
									var p = --t,
										f = e[p];
									i[f.uuid] = l, e[l] = f, e.pop();
									for (var m = 0, v = o; m !== v; ++m) {
										var g = n[m];
										g[l] = g[p], g.pop()
									}
								}
						}
						this.nCachedObjects_ = r
					},
					subscribe_: function(e, t) {
						var r = this._bindingsIndicesByPath,
							i = r[e],
							o = this._bindings;
						if (void 0 !== i) return o[i];
						var a = this._paths,
							s = this._parsedPaths,
							h = this._objects,
							c = h.length,
							l = this.nCachedObjects_,
							u = new Array(c);
						i = o.length, r[e] = i, a.push(e), s.push(t), o.push(u);
						for (var d = l, p = h.length; d !== p; ++d) {
							var f = h[d];
							u[d] = new n.PropertyBinding(f, e, t)
						}
						return u
					},
					unsubscribe_: function(e) {
						var t = this._bindingsIndicesByPath,
							r = t[e];
						if (void 0 !== r) {
							var i = this._paths,
								n = this._parsedPaths,
								o = this._bindings,
								a = o.length - 1,
								s = o[a],
								h = e[a];
							t[h] = r, o[r] = s, o.pop(), n[r] = n[a], n.pop(), i[r] = i[a], i.pop()
						}
					}
				}, n.AnimationUtils = {
					arraySlice: function(e, t, r) {
						return n.AnimationUtils.isTypedArray(e) ? new e.constructor(e.subarray(t, r)) : e.slice(t, r)
					},
					convertArray: function(e, t, r) {
						return !e || !r && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
					},
					isTypedArray: function(e) {
						return ArrayBuffer.isView(e) && !(e instanceof DataView)
					},
					getKeyframeOrder: function(e) {
						function t(t, r) {
							return e[t] - e[r]
						}
						for (var r = e.length, i = new Array(r), n = 0; n !== r; ++n) i[n] = n;
						return i.sort(t), i
					},
					sortedArray: function(e, t, r) {
						for (var i = e.length, n = new e.constructor(i), o = 0, a = 0; a !== i; ++o)
							for (var s = r[o] * t, h = 0; h !== t; ++h) n[a++] = e[s + h];
						return n
					},
					flattenJSON: function(e, t, r, i) {
						for (var n = 1, o = e[0]; void 0 !== o && void 0 === o[i];) o = e[n++];
						if (void 0 !== o) {
							var a = o[i];
							if (void 0 !== a)
								if (Array.isArray(a)) {
									do a = o[i], void 0 !== a && (t.push(o.time), r.push.apply(r, a)), o = e[n++]; while (void 0 !== o)
								} else if (void 0 !== a.toArray) {
								do a = o[i], void 0 !== a && (t.push(o.time), a.toArray(r, r.length)), o = e[n++]; while (void 0 !== o)
							} else
								do a = o[i], void 0 !== a && (t.push(o.time), r.push(a)), o = e[n++]; while (void 0 !== o)
						}
					}
				}, n.KeyframeTrack = function(e, t, r, i) {
					if (void 0 === e) throw new Error("track name is undefined");
					if (void 0 === t || 0 === t.length) throw new Error("no keyframes in track named " + e);
					this.name = e, this.times = n.AnimationUtils.convertArray(t, this.TimeBufferType), this.values = n.AnimationUtils.convertArray(r, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation), this.validate(), this.optimize()
				}, n.KeyframeTrack.prototype = {
					constructor: n.KeyframeTrack,
					TimeBufferType: Float32Array,
					ValueBufferType: Float32Array,
					DefaultInterpolation: n.InterpolateLinear,
					InterpolantFactoryMethodDiscrete: function(e) {
						return new n.DiscreteInterpolant(this.times, this.values, this.getValueSize(), e)
					},
					InterpolantFactoryMethodLinear: function(e) {
						return new n.LinearInterpolant(this.times, this.values, this.getValueSize(), e)
					},
					InterpolantFactoryMethodSmooth: function(e) {
						return new n.CubicInterpolant(this.times, this.values, this.getValueSize(), e)
					},
					setInterpolation: function(e) {
						var t = void 0;
						switch (e) {
							case n.InterpolateDiscrete:
								t = this.InterpolantFactoryMethodDiscrete;
								break;
							case n.InterpolateLinear:
								t = this.InterpolantFactoryMethodLinear;
								break;
							case n.InterpolateSmooth:
								t = this.InterpolantFactoryMethodSmooth
						}
						if (void 0 === t) {
							var r = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
							if (void 0 === this.createInterpolant) {
								if (e === this.DefaultInterpolation) throw new Error(r);
								this.setInterpolation(this.DefaultInterpolation)
							}
							return void console.warn(r)
						}
						this.createInterpolant = t
					},
					getInterpolation: function() {
						switch (this.createInterpolant) {
							case this.InterpolantFactoryMethodDiscrete:
								return n.InterpolateDiscrete;
							case this.InterpolantFactoryMethodLinear:
								return n.InterpolateLinear;
							case this.InterpolantFactoryMethodSmooth:
								return n.InterpolateSmooth
						}
					},
					getValueSize: function() {
						return this.values.length / this.times.length
					},
					shift: function(e) {
						if (0 !== e)
							for (var t = this.times, r = 0, i = t.length; r !== i; ++r) t[r] += e;
						return this
					},
					scale: function(e) {
						if (1 !== e)
							for (var t = this.times, r = 0, i = t.length; r !== i; ++r) t[r] *= e;
						return this
					},
					trim: function(e, t) {
						for (var r = this.times, i = r.length, o = 0, a = i - 1; o !== i && r[o] < e;) ++o;
						for (; - 1 !== a && r[a] > t;) --a;
						if (++a, 0 !== o || a !== i) {
							o >= a && (a = Math.max(a, 1), o = a - 1);
							var s = this.getValueSize();
							this.times = n.AnimationUtils.arraySlice(r, o, a), this.values = n.AnimationUtils.arraySlice(this.values, o * s, a * s)
						}
						return this
					},
					validate: function() {
						var e = !0,
							t = this.getValueSize();
						t - Math.floor(t) !== 0 && (console.error("invalid value size in track", this), e = !1);
						var r = this.times,
							i = this.values,
							o = r.length;
						0 === o && (console.error("track is empty", this), e = !1);
						for (var a = null, s = 0; s !== o; s++) {
							var h = r[s];
							if ("number" == typeof h && isNaN(h)) {
								console.error("time is not a valid number", this, s, h), e = !1;
								break
							}
							if (null !== a && a > h) {
								console.error("out of order keys", this, s, h, a), e = !1;
								break
							}
							a = h
						}
						if (void 0 !== i && n.AnimationUtils.isTypedArray(i))
							for (var s = 0, c = i.length; s !== c; ++s) {
								var l = i[s];
								if (isNaN(l)) {
									console.error("value is not a valid number", this, s, l), e = !1;
									break
								}
							}
						return e
					},
					optimize: function() {
						for (var e = this.times, t = this.values, r = this.getValueSize(), i = 1, o = 1, a = e.length - 1; a >= o; ++o) {
							var s = !1,
								h = e[o],
								c = e[o + 1];
							if (h !== c && (1 !== o || h !== h[0]))
								for (var l = o * r, u = l - r, d = l + r, p = 0; p !== r; ++p) {
									var f = t[l + p];
									if (f !== t[u + p] || f !== t[d + p]) {
										s = !0;
										break
									}
								}
							if (s) {
								if (o !== i) {
									e[i] = e[o];
									for (var m = o * r, v = i * r, p = 0; p !== r; ++p) t[v + p] = t[m + p]
								}++i
							}
						}
						return i !== e.length && (this.times = n.AnimationUtils.arraySlice(e, 0, i), this.values = n.AnimationUtils.arraySlice(t, 0, i * r)), this
					}
				}, Object.assign(n.KeyframeTrack, {
					parse: function(e) {
						if (void 0 === e.type) throw new Error("track type undefined, can not parse");
						var t = n.KeyframeTrack._getTrackTypeForValueTypeName(e.type);
						if (void 0 === e.times) {
							console.warn("legacy JSON format detected, converting");
							var r = [],
								i = [];
							n.AnimationUtils.flattenJSON(e.keys, r, i, "value"), e.times = r, e.values = i
						}
						return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
					},
					toJSON: function(e) {
						var t, r = e.constructor;
						if (void 0 !== r.toJSON) t = r.toJSON(e);
						else {
							t = {
								name: e.name,
								times: n.AnimationUtils.convertArray(e.times, Array),
								values: n.AnimationUtils.convertArray(e.values, Array)
							};
							var i = e.getInterpolation();
							i !== e.DefaultInterpolation && (t.interpolation = i)
						}
						return t.type = e.ValueTypeName, t
					},
					_getTrackTypeForValueTypeName: function(e) {
						switch (e.toLowerCase()) {
							case "scalar":
							case "double":
							case "float":
							case "number":
							case "integer":
								return n.NumberKeyframeTrack;
							case "vector":
							case "vector2":
							case "vector3":
							case "vector4":
								return n.VectorKeyframeTrack;
							case "color":
								return n.ColorKeyframeTrack;
							case "quaternion":
								return n.QuaternionKeyframeTrack;
							case "bool":
							case "boolean":
								return n.BooleanKeyframeTrack;
							case "string":
								return n.StringKeyframeTrack
						}
						throw new Error("Unsupported typeName: " + e)
					}
				}), n.PropertyBinding = function(e, t, r) {
					this.path = t, this.parsedPath = r || n.PropertyBinding.parseTrackName(t), this.node = n.PropertyBinding.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
				}, n.PropertyBinding.prototype = {
					constructor: n.PropertyBinding,
					getValue: function(e, t) {
						this.bind(), this.getValue(e, t)
					},
					setValue: function(e, t) {
						this.bind(), this.setValue(e, t)
					},
					bind: function() {
						var e = this.node,
							t = this.parsedPath,
							r = t.objectName,
							i = t.propertyName,
							o = t.propertyIndex;
						if (e || (e = n.PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
						if (r) {
							var a = t.objectIndex;
							switch (r) {
								case "materials":
									if (!e.material) return void console.error("  can not bind to material as node does not have a material", this);
									if (!e.material.materials) return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
									e = e.material.materials;
									break;
								case "bones":
									if (!e.skeleton) return void console.error("  can not bind to bones as node does not have a skeleton", this);
									e = e.skeleton.bones;
									for (var s = 0; s < e.length; s++)
										if (e[s].name === a) {
											a = s;
											break
										}
									break;
								default:
									if (void 0 === e[r]) return void console.error("  can not bind to objectName of node, undefined", this);
									e = e[r]
							}
							if (void 0 !== a) {
								if (void 0 === e[a]) return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
								e = e[a]
							}
						}
						var h = e[i];
						if (!h) {
							var c = t.nodeName;
							return void console.error("  trying to update property for track: " + c + "." + i + " but it wasn't found.", e)
						}
						var l = this.Versioning.None;
						void 0 !== e.needsUpdate ? (l = this.Versioning.NeedsUpdate, this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (l = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = e);
						var u = this.BindingType.Direct;
						if (void 0 !== o) {
							if ("morphTargetInfluences" === i) {
								if (!e.geometry) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
								if (!e.geometry.morphTargets) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
								for (var s = 0; s < this.node.geometry.morphTargets.length; s++)
									if (e.geometry.morphTargets[s].name === o) {
										o = s;
										break
									}
							}
							u = this.BindingType.ArrayElement, this.resolvedProperty = h, this.propertyIndex = o
						} else void 0 !== h.fromArray && void 0 !== h.toArray ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = h) : void 0 !== h.length ? (u = this.BindingType.EntireArray, this.resolvedProperty = h) : this.propertyName = i;
						this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][l]
					},
					unbind: function() {
						this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
					}
				}, Object.assign(n.PropertyBinding.prototype, {
					_getValue_unavailable: function() {},
					_setValue_unavailable: function() {},
					_getValue_unbound: n.PropertyBinding.prototype.getValue,
					_setValue_unbound: n.PropertyBinding.prototype.setValue,
					BindingType: {
						Direct: 0,
						EntireArray: 1,
						ArrayElement: 2,
						HasFromToArray: 3
					},
					Versioning: {
						None: 0,
						NeedsUpdate: 1,
						MatrixWorldNeedsUpdate: 2
					},
					GetterByBindingType: [function(e, t) {
						e[t] = this.node[this.propertyName]
					}, function(e, t) {
						for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i) e[t++] = r[i]
					}, function(e, t) {
						e[t] = this.resolvedProperty[this.propertyIndex]
					}, function(e, t) {
						this.resolvedProperty.toArray(e, t)
					}],
					SetterByBindingTypeAndVersioning: [
						[function(e, t) {
							this.node[this.propertyName] = e[t]
						}, function(e, t) {
							this.node[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
						}, function(e, t) {
							this.node[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
						}],
						[function(e, t) {
							for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i) r[i] = e[t++]
						}, function(e, t) {
							for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i) r[i] = e[t++];
							this.targetObject.needsUpdate = !0
						}, function(e, t) {
							for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i) r[i] = e[t++];
							this.targetObject.matrixWorldNeedsUpdate = !0
						}],
						[function(e, t) {
							this.resolvedProperty[this.propertyIndex] = e[t]
						}, function(e, t) {
							this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
						}, function(e, t) {
							this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
						}],
						[function(e, t) {
							this.resolvedProperty.fromArray(e, t)
						}, function(e, t) {
							this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
						}, function(e, t) {
							this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
						}]
					]
				}), n.PropertyBinding.Composite = function(e, t, r) {
					var i = r || n.PropertyBinding.parseTrackName(t);
					this._targetGroup = e, this._bindings = e.subscribe_(t, i)
				}, n.PropertyBinding.Composite.prototype = {
					constructor: n.PropertyBinding.Composite,
					getValue: function(e, t) {
						this.bind();
						var r = this._targetGroup.nCachedObjects_,
							i = this._bindings[r];
						void 0 !== i && i.getValue(e, t)
					},
					setValue: function(e, t) {
						for (var r = this._bindings, i = this._targetGroup.nCachedObjects_, n = r.length; i !== n; ++i) r[i].setValue(e, t)
					},
					bind: function() {
						for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t) e[t].bind()
					},
					unbind: function() {
						for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t) e[t].unbind()
					}
				}, n.PropertyBinding.create = function(e, t, r) {
					return e instanceof n.AnimationObjectGroup ? new n.PropertyBinding.Composite(e, t, r) : new n.PropertyBinding(e, t, r)
				}, n.PropertyBinding.parseTrackName = function(e) {
					var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_. ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,
						r = t.exec(e);
					if (!r) throw new Error("cannot parse trackName at all: " + e);
					r.index === t.lastIndex && t.lastIndex++;
					var i = {
						nodeName: r[3],
						objectName: r[5],
						objectIndex: r[7],
						propertyName: r[9],
						propertyIndex: r[11]
					};
					if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("can not parse propertyName from trackName: " + e);
					return i
				}, n.PropertyBinding.findNode = function(e, t) {
					if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
					if (e.skeleton) {
						var r = function(e) {
								for (var r = 0; r < e.bones.length; r++) {
									var i = e.bones[r];
									if (i.name === t) return i
								}
								return null
							},
							i = r(e.skeleton);
						if (i) return i
					}
					if (e.children) {
						var n = function(e) {
								for (var r = 0; r < e.length; r++) {
									var i = e[r];
									if (i.name === t || i.uuid === t) return i;
									var o = n(i.children);
									if (o) return o
								}
								return null
							},
							o = n(e.children);
						if (o) return o
					}
					return null
				}, n.PropertyMixer = function(e, t, r) {
					this.binding = e, this.valueSize = r;
					var i, n = Float64Array;
					switch (t) {
						case "quaternion":
							i = this._slerp;
							break;
						case "string":
						case "bool":
							n = Array, i = this._select;
							break;
						default:
							i = this._lerp
					}
					this.buffer = new n(4 * r), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
				}, n.PropertyMixer.prototype = {
					constructor: n.PropertyMixer,
					accumulate: function(e, t) {
						var r = this.buffer,
							i = this.valueSize,
							n = e * i + i,
							o = this.cumulativeWeight;
						if (0 === o) {
							for (var a = 0; a !== i; ++a) r[n + a] = r[a];
							o = t
						} else {
							o += t;
							var s = t / o;
							this._mixBufferRegion(r, n, 0, s, i)
						}
						this.cumulativeWeight = o
					},
					apply: function(e) {
						var t = this.valueSize,
							r = this.buffer,
							i = e * t + t,
							n = this.cumulativeWeight,
							o = this.binding;
						if (this.cumulativeWeight = 0, 1 > n) {
							var a = 3 * t;
							this._mixBufferRegion(r, i, a, 1 - n, t)
						}
						for (var s = t, h = t + t; s !== h; ++s)
							if (r[s] !== r[s + t]) {
								o.setValue(r, i);
								break
							}
					},
					saveOriginalState: function() {
						var e = this.binding,
							t = this.buffer,
							r = this.valueSize,
							i = 3 * r;
						e.getValue(t, i);
						for (var n = r, o = i; n !== o; ++n) t[n] = t[i + n % r];
						this.cumulativeWeight = 0
					},
					restoreOriginalState: function() {
						var e = 3 * this.valueSize;
						this.binding.setValue(this.buffer, e)
					},
					_select: function(e, t, r, i, n) {
						if (i >= .5)
							for (var o = 0; o !== n; ++o) e[t + o] = e[r + o]
					},
					_slerp: function(e, t, r, i) {
						n.Quaternion.slerpFlat(e, t, e, t, e, r, i)
					},
					_lerp: function(e, t, r, i, n) {
						for (var o = 1 - i, a = 0; a !== n; ++a) {
							var s = t + a;
							e[s] = e[s] * o + e[r + a] * i
						}
					}
				}, n.BooleanKeyframeTrack = function(e, t, r) {
					n.KeyframeTrack.call(this, e, t, r)
				}, n.BooleanKeyframeTrack.prototype = Object.assign(Object.create(n.KeyframeTrack.prototype), {
					constructor: n.BooleanKeyframeTrack,
					ValueTypeName: "bool",
					ValueBufferType: Array,
					DefaultInterpolation: n.IntepolateDiscrete,
					InterpolantFactoryMethodLinear: void 0,
					InterpolantFactoryMethodSmooth: void 0
				}), n.NumberKeyframeTrack = function(e, t, r, i) {
					n.KeyframeTrack.call(this, e, t, r, i)
				}, n.NumberKeyframeTrack.prototype = Object.assign(Object.create(n.KeyframeTrack.prototype), {
					constructor: n.NumberKeyframeTrack,
					ValueTypeName: "number"
				}), n.QuaternionKeyframeTrack = function(e, t, r, i) {
					n.KeyframeTrack.call(this, e, t, r, i)
				}, n.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(n.KeyframeTrack.prototype), {
					constructor: n.QuaternionKeyframeTrack,
					ValueTypeName: "quaternion",
					DefaultInterpolation: n.InterpolateLinear,
					InterpolantFactoryMethodLinear: function(e) {
						return new n.QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), e)
					},
					InterpolantFactoryMethodSmooth: void 0
				}), n.StringKeyframeTrack = function(e, t, r, i) {
					n.KeyframeTrack.call(this, e, t, r, i)
				}, n.StringKeyframeTrack.prototype = Object.assign(Object.create(n.KeyframeTrack.prototype), {
					constructor: n.StringKeyframeTrack,
					ValueTypeName: "string",
					ValueBufferType: Array,
					DefaultInterpolation: n.IntepolateDiscrete,
					InterpolantFactoryMethodLinear: void 0,
					InterpolantFactoryMethodSmooth: void 0
				}), n.VectorKeyframeTrack = function(e, t, r, i) {
					n.KeyframeTrack.call(this, e, t, r, i)
				}, n.VectorKeyframeTrack.prototype = Object.assign(Object.create(n.KeyframeTrack.prototype), {
					constructor: n.VectorKeyframeTrack,
					ValueTypeName: "vector"
				}), n.Audio = function(e) {
					n.Object3D.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filter = null
				}, n.Audio.prototype = Object.create(n.Object3D.prototype), n.Audio.prototype.constructor = n.Audio, n.Audio.prototype.getOutput = function() {
					return this.gain
				}, n.Audio.prototype.load = function(e) {
					var t = new n.AudioBuffer(this.context);
					return t.load(e), this.setBuffer(t), this
				}, n.Audio.prototype.setNodeSource = function(e) {
					return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
				}, n.Audio.prototype.setBuffer = function(e) {
					var t = this;
					return e.onReady(function(e) {
						t.source.buffer = e, t.sourceType = "buffer", t.autoplay && t.play()
					}), this
				}, n.Audio.prototype.play = function() {
					if (this.isPlaying === !0) return void console.warn("THREE.Audio: Audio is already playing.");
					if (this.hasPlaybackControl === !1) return void console.warn("THREE.Audio: this Audio has no playback control.");
					var e = this.context.createBufferSource();
					e.buffer = this.source.buffer, e.loop = this.source.loop, e.onended = this.source.onended, e.start(0, this.startTime), e.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = e, this.connect()
				}, n.Audio.prototype.pause = function() {
					return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), void(this.startTime = this.context.currentTime))
				}, n.Audio.prototype.stop = function() {
					return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), void(this.startTime = 0))
				}, n.Audio.prototype.connect = function() {
					null !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.getOutput())) : this.source.connect(this.getOutput())
				}, n.Audio.prototype.disconnect = function() {
					null !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.getOutput())) : this.source.disconnect(this.getOutput())
				}, n.Audio.prototype.getFilter = function() {
					return this.filter
				}, n.Audio.prototype.setFilter = function(e) {
					void 0 === e && (e = null), this.isPlaying === !0 ? (this.disconnect(), this.filter = e, this.connect()) : this.filter = e
				}, n.Audio.prototype.setPlaybackRate = function(e) {
					return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = e, void(this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate)))
				}, n.Audio.prototype.getPlaybackRate = function() {
					return this.playbackRate
				}, n.Audio.prototype.onEnded = function() {
					this.isPlaying = !1
				}, n.Audio.prototype.setLoop = function(e) {
					return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : void(this.source.loop = e)
				}, n.Audio.prototype.getLoop = function() {
					return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.source.loop
				}, n.Audio.prototype.setVolume = function(e) {
					this.gain.gain.value = e
				}, n.Audio.prototype.getVolume = function() {
					return this.gain.gain.value
				}, n.AudioAnalyser = function(e, t) {
					this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
				}, n.AudioAnalyser.prototype = {
					constructor: n.AudioAnalyser,
					getData: function() {
						return this.analyser.getByteFrequencyData(this.data), this.data
					}
				}, n.AudioBuffer = function(e) {
					this.context = e, this.ready = !1, this.readyCallbacks = []
				}, n.AudioBuffer.prototype.load = function(e) {
					var t = this,
						r = new XMLHttpRequest;
					return r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function() {
						t.context.decodeAudioData(this.response, function(e) {
							t.buffer = e, t.ready = !0;
							for (var r = 0; r < t.readyCallbacks.length; r++) t.readyCallbacks[r](t.buffer);
							t.readyCallbacks = []
						})
					}, r.send(), this
				}, n.AudioBuffer.prototype.onReady = function(e) {
					this.ready ? e(this.buffer) : this.readyCallbacks.push(e)
				}, n.PositionalAudio = function(e) {
					n.Audio.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
				}, n.PositionalAudio.prototype = Object.create(n.Audio.prototype), n.PositionalAudio.prototype.constructor = n.PositionalAudio, n.PositionalAudio.prototype.getOutput = function() {
					return this.panner
				}, n.PositionalAudio.prototype.setRefDistance = function(e) {
					this.panner.refDistance = e
				}, n.PositionalAudio.prototype.getRefDistance = function() {
					return this.panner.refDistance
				}, n.PositionalAudio.prototype.setRolloffFactor = function(e) {
					this.panner.rolloffFactor = e
				}, n.PositionalAudio.prototype.getRolloffFactor = function() {
					return this.panner.rolloffFactor
				}, n.PositionalAudio.prototype.setDistanceModel = function(e) {
					this.panner.distanceModel = e
				}, n.PositionalAudio.prototype.getDistanceModel = function() {
					return this.panner.distanceModel
				}, n.PositionalAudio.prototype.setMaxDistance = function(e) {
					this.panner.maxDistance = e
				}, n.PositionalAudio.prototype.getMaxDistance = function() {
					return this.panner.maxDistance
				}, n.PositionalAudio.prototype.updateMatrixWorld = function() {
					var e = new n.Vector3;
					return function(t) {
						n.Object3D.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
					}
				}(), n.AudioListener = function() {
					n.Object3D.call(this), this.type = "AudioListener", this.context = new(window.AudioContext || window.webkitAudioContext), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
				}, n.AudioListener.prototype = Object.create(n.Object3D.prototype), n.AudioListener.prototype.constructor = n.AudioListener, n.AudioListener.prototype.getInput = function() {
					return this.gain
				}, n.AudioListener.prototype.removeFilter = function() {
					null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
				}, n.AudioListener.prototype.setFilter = function(e) {
					null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
				}, n.AudioListener.prototype.getFilter = function() {
					return this.filter
				}, n.AudioListener.prototype.setMasterVolume = function(e) {
					this.gain.gain.value = e
				}, n.AudioListener.prototype.getMasterVolume = function() {
					return this.gain.gain.value
				}, n.AudioListener.prototype.updateMatrixWorld = function() {
					var e = new n.Vector3,
						t = new n.Quaternion,
						r = new n.Vector3,
						i = new n.Vector3;
					return function(o) {
						n.Object3D.prototype.updateMatrixWorld.call(this, o);
						var a = this.context.listener,
							s = this.up;
						this.matrixWorld.decompose(e, t, r), i.set(0, 0, -1).applyQuaternion(t), a.setPosition(e.x, e.y, e.z), a.setOrientation(i.x, i.y, i.z, s.x, s.y, s.z)
					}
				}(), n.Camera = function() {
					n.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new n.Matrix4, this.projectionMatrix = new n.Matrix4
				}, n.Camera.prototype = Object.create(n.Object3D.prototype), n.Camera.prototype.constructor = n.Camera, n.Camera.prototype.getWorldDirection = function() {
					var e = new n.Quaternion;
					return function(t) {
						var r = t || new n.Vector3;
						return this.getWorldQuaternion(e), r.set(0, 0, -1).applyQuaternion(e)
					}
				}(), n.Camera.prototype.lookAt = function() {
					var e = new n.Matrix4;
					return function(t) {
						e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
					}
				}(), n.Camera.prototype.clone = function() {
					return (new this.constructor).copy(this)
				}, n.Camera.prototype.copy = function(e) {
					return n.Object3D.prototype.copy.call(this, e), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
				}, n.CubeCamera = function(e, t, r) {
					n.Object3D.call(this), this.type = "CubeCamera";
					var i = 90,
						o = 1,
						a = new n.PerspectiveCamera(i, o, e, t);
					a.up.set(0, -1, 0), a.lookAt(new n.Vector3(1, 0, 0)), this.add(a);
					var s = new n.PerspectiveCamera(i, o, e, t);
					s.up.set(0, -1, 0), s.lookAt(new n.Vector3(-1, 0, 0)), this.add(s);
					var h = new n.PerspectiveCamera(i, o, e, t);
					h.up.set(0, 0, 1), h.lookAt(new n.Vector3(0, 1, 0)), this.add(h);
					var c = new n.PerspectiveCamera(i, o, e, t);
					c.up.set(0, 0, -1), c.lookAt(new n.Vector3(0, -1, 0)), this.add(c);
					var l = new n.PerspectiveCamera(i, o, e, t);
					l.up.set(0, -1, 0), l.lookAt(new n.Vector3(0, 0, 1)), this.add(l);
					var u = new n.PerspectiveCamera(i, o, e, t);
					u.up.set(0, -1, 0), u.lookAt(new n.Vector3(0, 0, -1)), this.add(u);
					var d = {
						format: n.RGBFormat,
						magFilter: n.LinearFilter,
						minFilter: n.LinearFilter
					};
					this.renderTarget = new n.WebGLRenderTargetCube(r, r, d), this.updateCubeMap = function(e, t) {
						null === this.parent && this.updateMatrixWorld();
						var r = this.renderTarget,
							i = r.texture.generateMipmaps;
						r.texture.generateMipmaps = !1, r.activeCubeFace = 0, e.render(t, a, r), r.activeCubeFace = 1, e.render(t, s, r), r.activeCubeFace = 2, e.render(t, h, r), r.activeCubeFace = 3, e.render(t, c, r), r.activeCubeFace = 4, e.render(t, l, r), r.texture.generateMipmaps = i, r.activeCubeFace = 5, e.render(t, u, r), e.setRenderTarget(null)
					}
				}, n.CubeCamera.prototype = Object.create(n.Object3D.prototype), n.CubeCamera.prototype.constructor = n.CubeCamera, n.OrthographicCamera = function(e, t, r, i, o, a) {
					n.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = e, this.right = t, this.top = r, this.bottom = i, this.near = void 0 !== o ? o : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
				}, n.OrthographicCamera.prototype = Object.create(n.Camera.prototype), n.OrthographicCamera.prototype.constructor = n.OrthographicCamera, n.OrthographicCamera.prototype.updateProjectionMatrix = function() {
					var e = (this.right - this.left) / (2 * this.zoom),
						t = (this.top - this.bottom) / (2 * this.zoom),
						r = (this.right + this.left) / 2,
						i = (this.top + this.bottom) / 2;
					this.projectionMatrix.makeOrthographic(r - e, r + e, i + t, i - t, this.near, this.far)
				}, n.OrthographicCamera.prototype.copy = function(e) {
					return n.Camera.prototype.copy.call(this, e), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this
				}, n.OrthographicCamera.prototype.toJSON = function(e) {
					var t = n.Object3D.prototype.toJSON.call(this, e);
					return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, t
				}, n.PerspectiveCamera = function(e, t, r, i) {
					n.Camera.call(this), this.type = "PerspectiveCamera", this.focalLength = 10, this.zoom = 1, this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== i ? i : 2e3, this.updateProjectionMatrix()
				}, n.PerspectiveCamera.prototype = Object.create(n.Camera.prototype), n.PerspectiveCamera.prototype.constructor = n.PerspectiveCamera, n.PerspectiveCamera.prototype.setLens = function(e, t) {
					void 0 === t && (t = 24), this.fov = 2 * n.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
				}, n.PerspectiveCamera.prototype.setViewOffset = function(e, t, r, i, n, o) {
					this.fullWidth = e, this.fullHeight = t, this.x = r, this.y = i, this.width = n, this.height = o, this.updateProjectionMatrix()
				}, n.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
					var e = n.Math.radToDeg(2 * Math.atan(Math.tan(.5 * n.Math.degToRad(this.fov)) / this.zoom));
					if (this.fullWidth) {
						var t = this.fullWidth / this.fullHeight,
							r = Math.tan(n.Math.degToRad(.5 * e)) * this.near,
							i = -r,
							o = t * i,
							a = t * r,
							s = Math.abs(a - o),
							h = Math.abs(r - i);
						this.projectionMatrix.makeFrustum(o + this.x * s / this.fullWidth, o + (this.x + this.width) * s / this.fullWidth, r - (this.y + this.height) * h / this.fullHeight, r - this.y * h / this.fullHeight, this.near, this.far)
					} else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far)
				}, n.PerspectiveCamera.prototype.copy = function(e) {
					return n.Camera.prototype.copy.call(this, e), this.focalLength = e.focalLength, this.zoom = e.zoom, this.fov = e.fov, this.aspect = e.aspect, this.near = e.near, this.far = e.far, this
				}, n.PerspectiveCamera.prototype.toJSON = function(e) {
					var t = n.Object3D.prototype.toJSON.call(this, e);
					return t.object.focalLength = this.focalLength, t.object.zoom = this.zoom, t.object.fov = this.fov, t.object.aspect = this.aspect, t.object.near = this.near, t.object.far = this.far, t
				}, n.StereoCamera = function() {
					this.type = "StereoCamera", this.aspect = 1, this.cameraL = new n.PerspectiveCamera, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new n.PerspectiveCamera, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
				}, n.StereoCamera.prototype = {
					constructor: n.StereoCamera,
					update: function() {
						var e, t, r, i, o, a = new n.Matrix4,
							s = new n.Matrix4;
						return function(h) {
							var c = e !== h.focalLength || t !== h.fov || r !== h.aspect * this.aspect || i !== h.near || o !== h.far;
							if (c) {
								e = h.focalLength, t = h.fov, r = h.aspect * this.aspect, i = h.near, o = h.far;
								var l, u, d = h.projectionMatrix.clone(),
									p = .032,
									f = p * i / e,
									m = i * Math.tan(n.Math.degToRad(.5 * t));
								s.elements[12] = -p, a.elements[12] = p, l = -m * r + f, u = m * r + f, d.elements[0] = 2 * i / (u - l), d.elements[8] = (u + l) / (u - l), this.cameraL.projectionMatrix.copy(d), l = -m * r - f, u = m * r - f, d.elements[0] = 2 * i / (u - l), d.elements[8] = (u + l) / (u - l), this.cameraR.projectionMatrix.copy(d)
							}
							this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(s), this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(a)
						}
					}()
				}, n.Light = function(e, t) {
					n.Object3D.call(this), this.type = "Light", this.color = new n.Color(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
				}, n.Light.prototype = Object.create(n.Object3D.prototype), n.Light.prototype.constructor = n.Light, n.Light.prototype.copy = function(e) {
					return n.Object3D.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
				}, n.Light.prototype.toJSON = function(e) {
					var t = n.Object3D.prototype.toJSON.call(this, e);
					return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.exponent && (t.object.exponent = this.exponent), t
				}, n.LightShadow = function(e) {
					this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new n.Vector2(512, 512), this.map = null, this.matrix = new n.Matrix4
				}, n.LightShadow.prototype = {
					constructor: n.LightShadow,
					copy: function(e) {
						return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
					},
					clone: function() {
						return (new this.constructor).copy(this)
					}
				}, n.AmbientLight = function(e, t) {
					n.Light.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
				}, n.AmbientLight.prototype = Object.create(n.Light.prototype), n.AmbientLight.prototype.constructor = n.AmbientLight, n.DirectionalLight = function(e, t) {
					n.Light.call(this, e, t), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new n.Object3D, this.shadow = new n.LightShadow(new n.OrthographicCamera(-5, 5, 5, -5, .5, 500))
				}, n.DirectionalLight.prototype = Object.create(n.Light.prototype), n.DirectionalLight.prototype.constructor = n.DirectionalLight, n.DirectionalLight.prototype.copy = function(e) {
					return n.Light.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
				}, n.HemisphereLight = function(e, t, r) {
					n.Light.call(this, e, r), this.type = "HemisphereLight", this.castShadow = void 0, this.position.set(0, 1, 0), this.updateMatrix(), this.groundColor = new n.Color(t)
				}, n.HemisphereLight.prototype = Object.create(n.Light.prototype), n.HemisphereLight.prototype.constructor = n.HemisphereLight, n.HemisphereLight.prototype.copy = function(e) {
					return n.Light.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
				}, n.PointLight = function(e, t, r, i) {
					n.Light.call(this, e, t), this.type = "PointLight", this.distance = void 0 !== r ? r : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new n.LightShadow(new n.PerspectiveCamera(90, 1, .5, 500))
				}, n.PointLight.prototype = Object.create(n.Light.prototype), n.PointLight.prototype.constructor = n.PointLight, n.PointLight.prototype.copy = function(e) {
					return n.Light.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
				}, n.SpotLight = function(e, t, r, i, o, a) {
					n.Light.call(this, e, t), this.type = "SpotLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new n.Object3D, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.exponent = void 0 !== o ? o : 10, this.decay = void 0 !== a ? a : 1, this.shadow = new n.LightShadow(new n.PerspectiveCamera(50, 1, .5, 500))
				}, n.SpotLight.prototype = Object.create(n.Light.prototype), n.SpotLight.prototype.constructor = n.SpotLight, n.SpotLight.prototype.copy = function(e) {
					return n.Light.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.exponent = e.exponent, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
				}, n.Cache = {
					enabled: !1,
					files: {},
					add: function(e, t) {
						this.enabled !== !1 && (this.files[e] = t)
					},
					get: function(e) {
						return this.enabled !== !1 ? this.files[e] : void 0
					},
					remove: function(e) {
						delete this.files[e]
					},
					clear: function() {
						this.files = {}
					}
				}, n.Loader = function() {
					this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
				}, n.Loader.prototype = {
					constructor: n.Loader,
					crossOrigin: void 0,
					extractUrlBase: function(e) {
						var t = e.split("/");
						return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
					},
					initMaterials: function(e, t, r) {
						for (var i = [], n = 0; n < e.length; ++n) i[n] = this.createMaterial(e[n], t, r);
						return i
					},
					createMaterial: function() {
						var e, t, r;
						return function(i, o, a) {
							function s(e, r, i, s, c) {
								var l, u = o + e,
									d = n.Loader.Handlers.get(u);
								null !== d ? l = d.load(u) : (t.setCrossOrigin(a), l = t.load(u)), void 0 !== r && (l.repeat.fromArray(r), 1 !== r[0] && (l.wrapS = n.RepeatWrapping), 1 !== r[1] && (l.wrapT = n.RepeatWrapping)), void 0 !== i && l.offset.fromArray(i), void 0 !== s && ("repeat" === s[0] && (l.wrapS = n.RepeatWrapping), "mirror" === s[0] && (l.wrapS = n.MirroredRepeatWrapping), "repeat" === s[1] && (l.wrapT = n.RepeatWrapping), "mirror" === s[1] && (l.wrapT = n.MirroredRepeatWrapping)), void 0 !== c && (l.anisotropy = c);
								var p = n.Math.generateUUID();
								return h[p] = l, p
							}
							void 0 === e && (e = new n.Color), void 0 === t && (t = new n.TextureLoader), void 0 === r && (r = new n.MaterialLoader);
							var h = {},
								c = {
									uuid: n.Math.generateUUID(),
									type: "MeshLambertMaterial"
								};
							for (var l in i) {
								var u = i[l];
								switch (l) {
									case "DbgColor":
									case "DbgIndex":
									case "opticalDensity":
									case "illumination":
										break;
									case "DbgName":
										c.name = u;
										break;
									case "blending":
										c.blending = n[u];
										break;
									case "colorAmbient":
										console.warn("THREE.Loader.createMaterial: colorAmbient is no longer supported");
										break;
									case "colorDiffuse":
										c.color = e.fromArray(u).getHex();
										break;
									case "colorSpecular":
										c.specular = e.fromArray(u).getHex();
										break;
									case "colorEmissive":
										c.emissive = e.fromArray(u).getHex();
										break;
									case "specularCoef":
										c.shininess = u;
										break;
									case "shading":
										"basic" === u.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (c.type = "MeshPhongMaterial");
										break;
									case "mapDiffuse":
										c.map = s(u, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
										break;
									case "mapDiffuseRepeat":
									case "mapDiffuseOffset":
									case "mapDiffuseWrap":
									case "mapDiffuseAnisotropy":
										break;
									case "mapLight":
										c.lightMap = s(u, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
										break;
									case "mapLightRepeat":
									case "mapLightOffset":
									case "mapLightWrap":
									case "mapLightAnisotropy":
										break;
									case "mapAO":
										c.aoMap = s(u, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
										break;
									case "mapAORepeat":
									case "mapAOOffset":
									case "mapAOWrap":
									case "mapAOAnisotropy":
										break;
									case "mapBump":
										c.bumpMap = s(u, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
										break;
									case "mapBumpScale":
										c.bumpScale = u;
										break;
									case "mapBumpRepeat":
									case "mapBumpOffset":
									case "mapBumpWrap":
									case "mapBumpAnisotropy":
										break;
									case "mapNormal":
										c.normalMap = s(u, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
										break;
									case "mapNormalFactor":
										c.normalScale = [u, u];
										break;
									case "mapNormalRepeat":
									case "mapNormalOffset":
									case "mapNormalWrap":
									case "mapNormalAnisotropy":
										break;
									case "mapSpecular":
										c.specularMap = s(u, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
										break;
									case "mapSpecularRepeat":
									case "mapSpecularOffset":
									case "mapSpecularWrap":
									case "mapSpecularAnisotropy":
										break;
									case "mapAlpha":
										c.alphaMap = s(u, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
										break;
									case "mapAlphaRepeat":
									case "mapAlphaOffset":
									case "mapAlphaWrap":
									case "mapAlphaAnisotropy":
										break;
									case "flipSided":
										c.side = n.BackSide;
										break;
									case "doubleSided":
										c.side = n.DoubleSide;
										break;
									case "transparency":
										console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), c.opacity = u;
										break;
									case "depthTest":
									case "depthWrite":
									case "colorWrite":
									case "opacity":
									case "reflectivity":
									case "transparent":
									case "visible":
									case "wireframe":
										c[l] = u;
										break;
									case "vertexColors":
										u === !0 && (c.vertexColors = n.VertexColors), "face" === u && (c.vertexColors = n.FaceColors);
										break;
									default:
										console.error("THREE.Loader.createMaterial: Unsupported", l, u)
								}
							}
							return "MeshBasicMaterial" === c.type && delete c.emissive, "MeshPhongMaterial" !== c.type && delete c.specular, c.opacity < 1 && (c.transparent = !0), r.setTextures(h), r.parse(c)
						}
					}()
				}, n.Loader.Handlers = {
					handlers: [],
					add: function(e, t) {
						this.handlers.push(e, t)
					},
					get: function(e) {
						for (var t = this.handlers, r = 0, i = t.length; i > r; r += 2) {
							var n = t[r],
								o = t[r + 1];
							if (n.test(e)) return o
						}
						return null
					}
				}, n.XHRLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager
				}, n.XHRLoader.prototype = {
					constructor: n.XHRLoader,
					load: function(e, t, r, i) {
						void 0 !== this.path && (e = this.path + e);
						var o = this,
							a = n.Cache.get(e);
						if (void 0 !== a) return t && setTimeout(function() {
							t(a)
						}, 0), a;
						var s = new XMLHttpRequest;
						return s.overrideMimeType("text/plain"), s.open("GET", e, !0), s.addEventListener("load", function(r) {
							var a = r.target.response;
							n.Cache.add(e, a), 200 === this.status ? (t && t(a), o.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."), t && t(a), o.manager.itemEnd(e)) : (i && i(r), o.manager.itemError(e))
						}, !1), void 0 !== r && s.addEventListener("progress", function(e) {
							r(e)
						}, !1), s.addEventListener("error", function(t) {
							i && i(t), o.manager.itemError(e)
						}, !1), void 0 !== this.responseType && (s.responseType = this.responseType), void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials), s.send(null), o.manager.itemStart(e), s
					},
					setPath: function(e) {
						this.path = e
					},
					setResponseType: function(e) {
						this.responseType = e
					},
					setWithCredentials: function(e) {
						this.withCredentials = e
					}
				}, n.FontLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager
				}, n.FontLoader.prototype = {
					constructor: n.FontLoader,
					load: function(e, t, r, i) {
						var o = new n.XHRLoader(this.manager);
						o.load(e, function(e) {
							t(new n.Font(JSON.parse(e.substring(65, e.length - 2))))
						}, r, i)
					}
				}, n.ImageLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager
				}, n.ImageLoader.prototype = {
					constructor: n.ImageLoader,
					load: function(e, t, r, i) {
						void 0 !== this.path && (e = this.path + e);
						var o = this,
							a = n.Cache.get(e);
						if (void 0 !== a) return o.manager.itemStart(e), t ? setTimeout(function() {
							t(a), o.manager.itemEnd(e)
						}, 0) : o.manager.itemEnd(e), a;
						var s = document.createElement("img");
						return s.addEventListener("load", function() {
							n.Cache.add(e, this), t && t(this), o.manager.itemEnd(e)
						}, !1), void 0 !== r && s.addEventListener("progress", function(e) {
							r(e)
						}, !1), s.addEventListener("error", function(t) {
							i && i(t), o.manager.itemError(e)
						}, !1), void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), o.manager.itemStart(e), s.src = e, s
					},
					setCrossOrigin: function(e) {
						this.crossOrigin = e
					},
					setPath: function(e) {
						this.path = e
					}
				}, n.JSONLoader = function(e) {
					"boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : n.DefaultLoadingManager, this.withCredentials = !1
				}, n.JSONLoader.prototype = {
					constructor: n.JSONLoader,
					get statusDomElement() {
						return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")), console.warn("THREE.JSONLoader: .statusDomElement has been removed."), this._statusDomElement
					},
					load: function(e, t, r, i) {
						var o = this,
							a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : n.Loader.prototype.extractUrlBase(e),
							s = new n.XHRLoader(this.manager);
						s.setWithCredentials(this.withCredentials), s.load(e, function(r) {
							var i = JSON.parse(r),
								n = i.metadata;
							if (void 0 !== n) {
								var s = n.type;
								if (void 0 !== s) {
									if ("object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
									if ("scene" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
								}
							}
							var h = o.parse(i, a);
							t(h.geometry, h.materials)
						}, r, i)
					},
					setTexturePath: function(e) {
						this.texturePath = e
					},
					parse: function(e, t) {
						function r(t) {
							function r(e, t) {
								return e & 1 << t
							}
							var i, o, a, h, c, l, u, d, p, f, m, v, g, y, x, b, w, M, _, E, A, S, C, T, L, R, k, P = e.faces,
								D = e.vertices,
								O = e.normals,
								I = e.colors,
								N = 0;
							if (void 0 !== e.uvs) {
								for (i = 0; i < e.uvs.length; i++) e.uvs[i].length && N++;
								for (i = 0; N > i; i++) s.faceVertexUvs[i] = []
							}
							for (h = 0, c = D.length; c > h;) M = new n.Vector3, M.x = D[h++] * t, M.y = D[h++] * t, M.z = D[h++] * t, s.vertices.push(M);
							for (h = 0, c = P.length; c > h;)
								if (f = P[h++], m = r(f, 0), v = r(f, 1), g = r(f, 3), y = r(f, 4), x = r(f, 5), b = r(f, 6), w = r(f, 7), m) {
									if (E = new n.Face3, E.a = P[h], E.b = P[h + 1], E.c = P[h + 3], A = new n.Face3, A.a = P[h + 1], A.b = P[h + 2], A.c = P[h + 3], h += 4, v && (p = P[h++], E.materialIndex = p, A.materialIndex = p), a = s.faces.length, g)
										for (i = 0; N > i; i++)
											for (T = e.uvs[i], s.faceVertexUvs[i][a] = [], s.faceVertexUvs[i][a + 1] = [], o = 0; 4 > o; o++) d = P[h++], R = T[2 * d], k = T[2 * d + 1], L = new n.Vector2(R, k), 2 !== o && s.faceVertexUvs[i][a].push(L), 0 !== o && s.faceVertexUvs[i][a + 1].push(L);
									if (y && (u = 3 * P[h++], E.normal.set(O[u++], O[u++], O[u]), A.normal.copy(E.normal)), x)
										for (i = 0; 4 > i; i++) u = 3 * P[h++], C = new n.Vector3(O[u++], O[u++], O[u]), 2 !== i && E.vertexNormals.push(C), 0 !== i && A.vertexNormals.push(C);
									if (b && (l = P[h++], S = I[l], E.color.setHex(S), A.color.setHex(S)), w)
										for (i = 0; 4 > i; i++) l = P[h++], S = I[l], 2 !== i && E.vertexColors.push(new n.Color(S)), 0 !== i && A.vertexColors.push(new n.Color(S));
									s.faces.push(E), s.faces.push(A)
								} else {
									if (_ = new n.Face3, _.a = P[h++], _.b = P[h++], _.c = P[h++], v && (p = P[h++], _.materialIndex = p), a = s.faces.length, g)
										for (i = 0; N > i; i++)
											for (T = e.uvs[i], s.faceVertexUvs[i][a] = [], o = 0; 3 > o; o++) d = P[h++], R = T[2 * d], k = T[2 * d + 1], L = new n.Vector2(R, k), s.faceVertexUvs[i][a].push(L);
									if (y && (u = 3 * P[h++], _.normal.set(O[u++], O[u++], O[u])), x)
										for (i = 0; 3 > i; i++) u = 3 * P[h++], C = new n.Vector3(O[u++], O[u++], O[u]), _.vertexNormals.push(C);
									if (b && (l = P[h++], _.color.setHex(I[l])), w)
										for (i = 0; 3 > i; i++) l = P[h++], _.vertexColors.push(new n.Color(I[l]));
									s.faces.push(_)
								}
						}

						function i() {
							var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
							if (e.skinWeights)
								for (var r = 0, i = e.skinWeights.length; i > r; r += t) {
									var o = e.skinWeights[r],
										a = t > 1 ? e.skinWeights[r + 1] : 0,
										h = t > 2 ? e.skinWeights[r + 2] : 0,
										c = t > 3 ? e.skinWeights[r + 3] : 0;
									s.skinWeights.push(new n.Vector4(o, a, h, c))
								}
							if (e.skinIndices)
								for (var r = 0, i = e.skinIndices.length; i > r; r += t) {
									var l = e.skinIndices[r],
										u = t > 1 ? e.skinIndices[r + 1] : 0,
										d = t > 2 ? e.skinIndices[r + 2] : 0,
										p = t > 3 ? e.skinIndices[r + 3] : 0;
									s.skinIndices.push(new n.Vector4(l, u, d, p))
								}
							s.bones = e.bones, s.bones && s.bones.length > 0 && (s.skinWeights.length !== s.skinIndices.length || s.skinIndices.length !== s.vertices.length) && console.warn("When skinning, number of vertices (" + s.vertices.length + "), skinIndices (" + s.skinIndices.length + "), and skinWeights (" + s.skinWeights.length + ") should match.")
						}

						function o(t) {
							if (void 0 !== e.morphTargets)
								for (var r = 0, i = e.morphTargets.length; i > r; r++) {
									s.morphTargets[r] = {}, s.morphTargets[r].name = e.morphTargets[r].name, s.morphTargets[r].vertices = [];
									for (var o = s.morphTargets[r].vertices, a = e.morphTargets[r].vertices, h = 0, c = a.length; c > h; h += 3) {
										var l = new n.Vector3;
										l.x = a[h] * t, l.y = a[h + 1] * t, l.z = a[h + 2] * t, o.push(l)
									}
								}
							if (void 0 !== e.morphColors && e.morphColors.length > 0) {
								console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
								for (var u = s.faces, d = e.morphColors[0].colors, r = 0, i = u.length; i > r; r++) u[r].color.fromArray(d, 3 * r)
							}
						}

						function a() {
							var t = [],
								r = [];
							void 0 !== e.animation && r.push(e.animation), void 0 !== e.animations && (e.animations.length ? r = r.concat(e.animations) : r.push(e.animations));
							for (var i = 0; i < r.length; i++) {
								var o = n.AnimationClip.parseAnimation(r[i], s.bones);
								o && t.push(o)
							}
							if (s.morphTargets) {
								var a = n.AnimationClip.CreateClipsFromMorphTargetSequences(s.morphTargets, 10);
								t = t.concat(a)
							}
							t.length > 0 && (s.animations = t)
						}
						var s = new n.Geometry,
							h = void 0 !== e.scale ? 1 / e.scale : 1;
						if (r(h), i(), o(h), a(), s.computeFaceNormals(), s.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length) return {
							geometry: s
						};
						var c = n.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin);
						return {
							geometry: s,
							materials: c
						}
					}
				}, n.LoadingManager = function(e, t, r) {
					var i = this,
						n = !1,
						o = 0,
						a = 0;
					this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = r, this.itemStart = function(e) {
						a++, n === !1 && void 0 !== i.onStart && i.onStart(e, o, a), n = !0
					}, this.itemEnd = function(e) {
						o++, void 0 !== i.onProgress && i.onProgress(e, o, a), o === a && (n = !1, void 0 !== i.onLoad && i.onLoad())
					}, this.itemError = function(e) {
						void 0 !== i.onError && i.onError(e)
					}
				}, n.DefaultLoadingManager = new n.LoadingManager,
				n.BufferGeometryLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager
				}, n.BufferGeometryLoader.prototype = {
					constructor: n.BufferGeometryLoader,
					load: function(e, t, r, i) {
						var o = this,
							a = new n.XHRLoader(o.manager);
						a.load(e, function(e) {
							t(o.parse(JSON.parse(e)))
						}, r, i)
					},
					parse: function(e) {
						var t = new n.BufferGeometry,
							r = e.data.index,
							i = {
								Int8Array: Int8Array,
								Uint8Array: Uint8Array,
								Uint8ClampedArray: Uint8ClampedArray,
								Int16Array: Int16Array,
								Uint16Array: Uint16Array,
								Int32Array: Int32Array,
								Uint32Array: Uint32Array,
								Float32Array: Float32Array,
								Float64Array: Float64Array
							};
						if (void 0 !== r) {
							var o = new i[r.type](r.array);
							t.setIndex(new n.BufferAttribute(o, 1))
						}
						var a = e.data.attributes;
						for (var s in a) {
							var h = a[s],
								o = new i[h.type](h.array);
							t.addAttribute(s, new n.BufferAttribute(o, h.itemSize))
						}
						var c = e.data.groups || e.data.drawcalls || e.data.offsets;
						if (void 0 !== c)
							for (var l = 0, u = c.length; l !== u; ++l) {
								var d = c[l];
								t.addGroup(d.start, d.count, d.materialIndex)
							}
						var p = e.data.boundingSphere;
						if (void 0 !== p) {
							var f = new n.Vector3;
							void 0 !== p.center && f.fromArray(p.center), t.boundingSphere = new n.Sphere(f, p.radius)
						}
						return t
					}
				}, n.MaterialLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager, this.textures = {}
				}, n.MaterialLoader.prototype = {
					constructor: n.MaterialLoader,
					load: function(e, t, r, i) {
						var o = this,
							a = new n.XHRLoader(o.manager);
						a.load(e, function(e) {
							t(o.parse(JSON.parse(e)))
						}, r, i)
					},
					setTextures: function(e) {
						this.textures = e
					},
					getTexture: function(e) {
						var t = this.textures;
						return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
					},
					parse: function(e) {
						var t = new n[e.type];
						if (void 0 !== e.uuid && (t.uuid = e.uuid), void 0 !== e.name && (t.name = e.name), void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.roughness && (t.roughness = e.roughness), void 0 !== e.metalness && (t.metalness = e.metalness), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest), void 0 !== e.depthTest && (t.depthTest = e.depthTest), void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (t.colorWrite = e.colorWrite), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.size && (t.size = e.size), void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (t.map = this.getTexture(e.map)), void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap), t.transparent = !0), void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)), void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale), void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)), void 0 !== e.normalScale) {
							var r = e.normalScale;
							Array.isArray(r) === !1 && (r = [r, r]), t.normalScale = (new n.Vector2).fromArray(r)
						}
						if (void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)), void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (t.roughnessMap = this.getTexture(e.roughnessMap)), void 0 !== e.metalnessMap && (t.metalnessMap = this.getTexture(e.metalnessMap)), void 0 !== e.emissiveMap && (t.emissiveMap = this.getTexture(e.emissiveMap)), void 0 !== e.emissiveIntensity && (t.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)), void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap), t.combine = n.MultiplyOperation), e.reflectivity && (t.reflectivity = e.reflectivity), void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)), void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)), void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity), void 0 !== e.materials)
							for (var i = 0, o = e.materials.length; o > i; i++) t.materials.push(this.parse(e.materials[i]));
						return t
					}
				}, n.ObjectLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager, this.texturePath = ""
				}, n.ObjectLoader.prototype = {
					constructor: n.ObjectLoader,
					load: function(e, t, r, i) {
						"" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
						var o = this,
							a = new n.XHRLoader(o.manager);
						a.load(e, function(e) {
							o.parse(JSON.parse(e), t)
						}, r, i)
					},
					setTexturePath: function(e) {
						this.texturePath = e
					},
					setCrossOrigin: function(e) {
						this.crossOrigin = e
					},
					parse: function(e, t) {
						var r = this.parseGeometries(e.geometries),
							i = this.parseImages(e.images, function() {
								void 0 !== t && t(a)
							}),
							n = this.parseTextures(e.textures, i),
							o = this.parseMaterials(e.materials, n),
							a = this.parseObject(e.object, r, o);
						return e.animations && (a.animations = this.parseAnimations(e.animations)), (void 0 === e.images || 0 === e.images.length) && void 0 !== t && t(a), a
					},
					parseGeometries: function(e) {
						var t = {};
						if (void 0 !== e)
							for (var r = new n.JSONLoader, i = new n.BufferGeometryLoader, o = 0, a = e.length; a > o; o++) {
								var s, h = e[o];
								switch (h.type) {
									case "PlaneGeometry":
									case "PlaneBufferGeometry":
										s = new n[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
										break;
									case "BoxGeometry":
									case "CubeGeometry":
										s = new n.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
										break;
									case "CircleBufferGeometry":
										s = new n.CircleBufferGeometry(h.radius, h.segments, h.thetaStart, h.thetaLength);
										break;
									case "CircleGeometry":
										s = new n.CircleGeometry(h.radius, h.segments, h.thetaStart, h.thetaLength);
										break;
									case "CylinderGeometry":
										s = new n.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
										break;
									case "SphereGeometry":
										s = new n.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
										break;
									case "SphereBufferGeometry":
										s = new n.SphereBufferGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
										break;
									case "DodecahedronGeometry":
										s = new n.DodecahedronGeometry(h.radius, h.detail);
										break;
									case "IcosahedronGeometry":
										s = new n.IcosahedronGeometry(h.radius, h.detail);
										break;
									case "OctahedronGeometry":
										s = new n.OctahedronGeometry(h.radius, h.detail);
										break;
									case "TetrahedronGeometry":
										s = new n.TetrahedronGeometry(h.radius, h.detail);
										break;
									case "RingGeometry":
										s = new n.RingGeometry(h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
										break;
									case "TorusGeometry":
										s = new n.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
										break;
									case "TorusKnotGeometry":
										s = new n.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
										break;
									case "LatheGeometry":
										s = new n.LatheGeometry(h.points, h.segments, h.phiStart, h.phiLength);
										break;
									case "BufferGeometry":
										s = i.parse(h);
										break;
									case "Geometry":
										s = r.parse(h.data, this.texturePath).geometry;
										break;
									default:
										console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
										continue
								}
								s.uuid = h.uuid, void 0 !== h.name && (s.name = h.name), t[h.uuid] = s
							}
						return t
					},
					parseMaterials: function(e, t) {
						var r = {};
						if (void 0 !== e) {
							var i = new n.MaterialLoader;
							i.setTextures(t);
							for (var o = 0, a = e.length; a > o; o++) {
								var s = i.parse(e[o]);
								r[s.uuid] = s
							}
						}
						return r
					},
					parseAnimations: function(e) {
						for (var t = [], r = 0; r < e.length; r++) {
							var i = n.AnimationClip.parse(e[r]);
							t.push(i)
						}
						return t
					},
					parseImages: function(e, t) {
						function r(e) {
							return i.manager.itemStart(e), s.load(e, function() {
								i.manager.itemEnd(e)
							})
						}
						var i = this,
							o = {};
						if (void 0 !== e && e.length > 0) {
							var a = new n.LoadingManager(t),
								s = new n.ImageLoader(a);
							s.setCrossOrigin(this.crossOrigin);
							for (var h = 0, c = e.length; c > h; h++) {
								var l = e[h],
									u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : i.texturePath + l.url;
								o[l.uuid] = r(u)
							}
						}
						return o
					},
					parseTextures: function(e, t) {
						function r(e) {
							return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), n[e])
						}
						var i = {};
						if (void 0 !== e)
							for (var o = 0, a = e.length; a > o; o++) {
								var s = e[o];
								void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
								var h = new n.Texture(t[s.image]);
								h.needsUpdate = !0, h.uuid = s.uuid, void 0 !== s.name && (h.name = s.name), void 0 !== s.mapping && (h.mapping = r(s.mapping)), void 0 !== s.offset && (h.offset = new n.Vector2(s.offset[0], s.offset[1])), void 0 !== s.repeat && (h.repeat = new n.Vector2(s.repeat[0], s.repeat[1])), void 0 !== s.minFilter && (h.minFilter = r(s.minFilter)), void 0 !== s.magFilter && (h.magFilter = r(s.magFilter)), void 0 !== s.anisotropy && (h.anisotropy = s.anisotropy), Array.isArray(s.wrap) && (h.wrapS = r(s.wrap[0]), h.wrapT = r(s.wrap[1])), i[s.uuid] = h
							}
						return i
					},
					parseObject: function() {
						var e = new n.Matrix4;
						return function(t, r, i) {
							function o(e) {
								return void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), r[e]
							}

							function a(e) {
								return void 0 === e ? void 0 : (void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined material", e), i[e])
							}
							var s;
							switch (t.type) {
								case "Scene":
									s = new n.Scene;
									break;
								case "PerspectiveCamera":
									s = new n.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
									break;
								case "OrthographicCamera":
									s = new n.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
									break;
								case "AmbientLight":
									s = new n.AmbientLight(t.color, t.intensity);
									break;
								case "DirectionalLight":
									s = new n.DirectionalLight(t.color, t.intensity);
									break;
								case "PointLight":
									s = new n.PointLight(t.color, t.intensity, t.distance, t.decay);
									break;
								case "SpotLight":
									s = new n.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent, t.decay);
									break;
								case "HemisphereLight":
									s = new n.HemisphereLight(t.color, t.groundColor, t.intensity);
									break;
								case "Mesh":
									var h = o(t.geometry),
										c = a(t.material);
									s = h.bones && h.bones.length > 0 ? new n.SkinnedMesh(h, c) : new n.Mesh(h, c);
									break;
								case "LOD":
									s = new n.LOD;
									break;
								case "Line":
									s = new n.Line(o(t.geometry), a(t.material), t.mode);
									break;
								case "PointCloud":
								case "Points":
									s = new n.Points(o(t.geometry), a(t.material));
									break;
								case "Sprite":
									s = new n.Sprite(a(t.material));
									break;
								case "Group":
									s = new n.Group;
									break;
								default:
									s = new n.Object3D
							}
							if (s.uuid = t.uuid, void 0 !== t.name && (s.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t.position && s.position.fromArray(t.position), void 0 !== t.rotation && s.rotation.fromArray(t.rotation), void 0 !== t.scale && s.scale.fromArray(t.scale)), void 0 !== t.castShadow && (s.castShadow = t.castShadow), void 0 !== t.receiveShadow && (s.receiveShadow = t.receiveShadow), void 0 !== t.visible && (s.visible = t.visible), void 0 !== t.userData && (s.userData = t.userData), void 0 !== t.children)
								for (var l in t.children) s.add(this.parseObject(t.children[l], r, i));
							if ("LOD" === t.type)
								for (var u = t.levels, d = 0; d < u.length; d++) {
									var p = u[d],
										l = s.getObjectByProperty("uuid", p.object);
									void 0 !== l && s.addLevel(l, p.distance)
								}
							return s
						}
					}()
				}, n.TextureLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager
				}, n.TextureLoader.prototype = {
					constructor: n.TextureLoader,
					load: function(e, t, r, i) {
						var o = new n.Texture,
							a = new n.ImageLoader(this.manager);
						return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(e) {
							o.image = e, o.needsUpdate = !0, void 0 !== t && t(o)
						}, r, i), o
					},
					setCrossOrigin: function(e) {
						this.crossOrigin = e
					},
					setPath: function(e) {
						this.path = e
					}
				}, n.CubeTextureLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager
				}, n.CubeTextureLoader.prototype = {
					constructor: n.CubeTextureLoader,
					load: function(e, t, r, i) {
						function o(r) {
							s.load(e[r], function(e) {
								a.images[r] = e, h++, 6 === h && (a.needsUpdate = !0, t && t(a))
							}, void 0, i)
						}
						var a = new n.CubeTexture([]),
							s = new n.ImageLoader(this.manager);
						s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
						for (var h = 0, c = 0; c < e.length; ++c) o(c);
						return a
					},
					setCrossOrigin: function(e) {
						this.crossOrigin = e
					},
					setPath: function(e) {
						this.path = e
					}
				}, n.DataTextureLoader = n.BinaryTextureLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager, this._parser = null
				}, n.BinaryTextureLoader.prototype = {
					constructor: n.BinaryTextureLoader,
					load: function(e, t, r, i) {
						var o = this,
							a = new n.DataTexture,
							s = new n.XHRLoader(this.manager);
						return s.setResponseType("arraybuffer"), s.load(e, function(e) {
							var r = o._parser(e);
							r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width, a.image.height = r.height, a.image.data = r.data), a.wrapS = void 0 !== r.wrapS ? r.wrapS : n.ClampToEdgeWrapping, a.wrapT = void 0 !== r.wrapT ? r.wrapT : n.ClampToEdgeWrapping, a.magFilter = void 0 !== r.magFilter ? r.magFilter : n.LinearFilter, a.minFilter = void 0 !== r.minFilter ? r.minFilter : n.LinearMipMapLinearFilter, a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, void 0 !== r.format && (a.format = r.format), void 0 !== r.type && (a.type = r.type), void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps), 1 === r.mipmapCount && (a.minFilter = n.LinearFilter), a.needsUpdate = !0, t && t(a, r))
						}, r, i), a
					}
				}, n.CompressedTextureLoader = function(e) {
					this.manager = void 0 !== e ? e : n.DefaultLoadingManager, this._parser = null
				}, n.CompressedTextureLoader.prototype = {
					constructor: n.CompressedTextureLoader,
					load: function(e, t, r, i) {
						function o(o) {
							c.load(e[o], function(e) {
								var r = a._parser(e, !0);
								s[o] = {
									width: r.width,
									height: r.height,
									format: r.format,
									mipmaps: r.mipmaps
								}, l += 1, 6 === l && (1 === r.mipmapCount && (h.minFilter = n.LinearFilter), h.format = r.format, h.needsUpdate = !0, t && t(h))
							}, r, i)
						}
						var a = this,
							s = [],
							h = new n.CompressedTexture;
						h.image = s;
						var c = new n.XHRLoader(this.manager);
						if (c.setPath(this.path), c.setResponseType("arraybuffer"), Array.isArray(e))
							for (var l = 0, u = 0, d = e.length; d > u; ++u) o(u);
						else c.load(e, function(e) {
							var r = a._parser(e, !0);
							if (r.isCubemap)
								for (var i = r.mipmaps.length / r.mipmapCount, o = 0; i > o; o++) {
									s[o] = {
										mipmaps: []
									};
									for (var c = 0; c < r.mipmapCount; c++) s[o].mipmaps.push(r.mipmaps[o * r.mipmapCount + c]), s[o].format = r.format, s[o].width = r.width, s[o].height = r.height
								} else h.image.width = r.width, h.image.height = r.height, h.mipmaps = r.mipmaps;
							1 === r.mipmapCount && (h.minFilter = n.LinearFilter), h.format = r.format, h.needsUpdate = !0, t && t(h)
						}, r, i);
						return h
					},
					setPath: function(e) {
						this.path = e
					}
				}, n.Material = function() {
					Object.defineProperty(this, "id", {
						value: n.MaterialIdCount++
					}), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Material", this.side = n.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = n.NormalBlending, this.blendSrc = n.SrcAlphaFactor, this.blendDst = n.OneMinusSrcAlphaFactor, this.blendEquation = n.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = n.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
				}, n.Material.prototype = {
					constructor: n.Material,
					get needsUpdate() {
						return this._needsUpdate
					},
					set needsUpdate(e) {
						e === !0 && this.update(), this._needsUpdate = e
					},
					setValues: function(e) {
						if (void 0 !== e)
							for (var t in e) {
								var r = e[t];
								if (void 0 !== r) {
									var i = this[t];
									void 0 !== i ? i instanceof n.Color ? i.set(r) : i instanceof n.Vector3 && r instanceof n.Vector3 ? i.copy(r) : this[t] = "overdraw" === t ? Number(r) : r : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
								} else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
							}
					},
					toJSON: function(e) {
						function t(e) {
							var t = [];
							for (var r in e) {
								var i = e[r];
								delete i.metadata, t.push(i)
							}
							return t
						}
						var r = void 0 === e;
						r && (e = {
							textures: {},
							images: {}
						});
						var i = {
							metadata: {
								version: 4.4,
								type: "Material",
								generator: "Material.toJSON"
							}
						};
						if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color instanceof n.Color && (i.color = this.color.getHex()), .5 !== this.roughness && (i.roughness = this.roughness), .5 !== this.metalness && (i.metalness = this.metalness), this.emissive instanceof n.Color && (i.emissive = this.emissive.getHex()), this.specular instanceof n.Color && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), this.map instanceof n.Texture && (i.map = this.map.toJSON(e).uuid), this.alphaMap instanceof n.Texture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap instanceof n.Texture && (i.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap instanceof n.Texture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap instanceof n.Texture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalScale = this.normalScale.toArray()), this.displacementMap instanceof n.Texture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap instanceof n.Texture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap instanceof n.Texture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap instanceof n.Texture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap instanceof n.Texture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.envMap instanceof n.Texture && (i.envMap = this.envMap.toJSON(e).uuid, i.reflectivity = this.reflectivity), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), void 0 !== this.vertexColors && this.vertexColors !== n.NoColors && (i.vertexColors = this.vertexColors), void 0 !== this.shading && this.shading !== n.SmoothShading && (i.shading = this.shading), void 0 !== this.blending && this.blending !== n.NormalBlending && (i.blending = this.blending), void 0 !== this.side && this.side !== n.FrontSide && (i.side = this.side), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = this.transparent), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.wireframe === !0 && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), r) {
							var o = t(e.textures),
								a = t(e.images);
							o.length > 0 && (i.textures = o), a.length > 0 && (i.images = a)
						}
						return i
					},
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.name = e.name, this.side = e.side, this.opacity = e.opacity, this.transparent = e.transparent, this.blending = e.blending, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.alphaTest = e.alphaTest, this.overdraw = e.overdraw, this.visible = e.visible, this
					},
					update: function() {
						this.dispatchEvent({
							type: "update"
						})
					},
					dispose: function() {
						this.dispatchEvent({
							type: "dispose"
						})
					}
				}, n.EventDispatcher.prototype.apply(n.Material.prototype), n.MaterialIdCount = 0, n.LineBasicMaterial = function(e) {
					n.Material.call(this), this.type = "LineBasicMaterial", this.color = new n.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = n.NoColors, this.fog = !0, this.setValues(e)
				}, n.LineBasicMaterial.prototype = Object.create(n.Material.prototype), n.LineBasicMaterial.prototype.constructor = n.LineBasicMaterial, n.LineBasicMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.vertexColors = e.vertexColors, this.fog = e.fog, this
				}, n.LineDashedMaterial = function(e) {
					n.Material.call(this), this.type = "LineDashedMaterial", this.color = new n.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = n.NoColors, this.fog = !0, this.setValues(e)
				}, n.LineDashedMaterial.prototype = Object.create(n.Material.prototype), n.LineDashedMaterial.prototype.constructor = n.LineDashedMaterial, n.LineDashedMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this.vertexColors = e.vertexColors, this.fog = e.fog, this
				}, n.MeshBasicMaterial = function(e) {
					n.Material.call(this), this.type = "MeshBasicMaterial", this.color = new n.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e)
				}, n.MeshBasicMaterial.prototype = Object.create(n.Material.prototype), n.MeshBasicMaterial.prototype.constructor = n.MeshBasicMaterial, n.MeshBasicMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
				}, n.MeshLambertMaterial = function(e) {
					n.Material.call(this), this.type = "MeshLambertMaterial", this.color = new n.Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new n.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
				}, n.MeshLambertMaterial.prototype = Object.create(n.Material.prototype), n.MeshLambertMaterial.prototype.constructor = n.MeshLambertMaterial, n.MeshLambertMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
				}, n.MeshPhongMaterial = function(e) {
					n.Material.call(this), this.type = "MeshPhongMaterial", this.color = new n.Color(16777215), this.specular = new n.Color(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new n.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
				}, n.MeshPhongMaterial.prototype = Object.create(n.Material.prototype), n.MeshPhongMaterial.prototype.constructor = n.MeshPhongMaterial, n.MeshPhongMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
				}, n.MeshStandardMaterial = function(e) {
					n.Material.call(this), this.type = "MeshStandardMaterial", this.color = new n.Color(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new n.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
				}, n.MeshStandardMaterial.prototype = Object.create(n.Material.prototype), n.MeshStandardMaterial.prototype.constructor = n.MeshStandardMaterial, n.MeshStandardMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
				}, n.MeshDepthMaterial = function(e) {
					n.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
				}, n.MeshDepthMaterial.prototype = Object.create(n.Material.prototype), n.MeshDepthMaterial.prototype.constructor = n.MeshDepthMaterial, n.MeshDepthMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
				}, n.MeshNormalMaterial = function(e) {
					n.Material.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
				}, n.MeshNormalMaterial.prototype = Object.create(n.Material.prototype), n.MeshNormalMaterial.prototype.constructor = n.MeshNormalMaterial, n.MeshNormalMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
				}, n.MultiMaterial = function(e) {
					this.uuid = n.Math.generateUUID(), this.type = "MultiMaterial", this.materials = e instanceof Array ? e : [], this.visible = !0
				}, n.MultiMaterial.prototype = {
					constructor: n.MultiMaterial,
					toJSON: function(e) {
						for (var t = {
								metadata: {
									version: 4.2,
									type: "material",
									generator: "MaterialExporter"
								},
								uuid: this.uuid,
								type: this.type,
								materials: []
							}, r = this.materials, i = 0, n = r.length; n > i; i++) {
							var o = r[i].toJSON(e);
							delete o.metadata, t.materials.push(o)
						}
						return t.visible = this.visible, t
					},
					clone: function() {
						for (var e = new this.constructor, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
						return e.visible = this.visible, e
					}
				}, n.PointsMaterial = function(e) {
					n.Material.call(this), this.type = "PointsMaterial", this.color = new n.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = n.NoColors, this.fog = !0, this.setValues(e)
				}, n.PointsMaterial.prototype = Object.create(n.Material.prototype), n.PointsMaterial.prototype.constructor = n.PointsMaterial, n.PointsMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.vertexColors = e.vertexColors, this.fog = e.fog, this
				}, n.ShaderMaterial = function(e) {
					n.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = n.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
						derivatives: !1,
						fragDepth: !1,
						drawBuffers: !1,
						shaderTextureLOD: !1
					}, this.defaultAttributeValues = {
						color: [1, 1, 1],
						uv: [0, 0],
						uv2: [0, 0]
					}, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
				}, n.ShaderMaterial.prototype = Object.create(n.Material.prototype), n.ShaderMaterial.prototype.constructor = n.ShaderMaterial, n.ShaderMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = n.UniformsUtils.clone(e.uniforms), this.defines = e.defines, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
				}, n.ShaderMaterial.prototype.toJSON = function(e) {
					var t = n.Material.prototype.toJSON.call(this, e);
					return t.uniforms = this.uniforms, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
				}, n.RawShaderMaterial = function(e) {
					n.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial"
				}, n.RawShaderMaterial.prototype = Object.create(n.ShaderMaterial.prototype), n.RawShaderMaterial.prototype.constructor = n.RawShaderMaterial, n.SpriteMaterial = function(e) {
					n.Material.call(this), this.type = "SpriteMaterial", this.color = new n.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e)
				}, n.SpriteMaterial.prototype = Object.create(n.Material.prototype), n.SpriteMaterial.prototype.constructor = n.SpriteMaterial, n.SpriteMaterial.prototype.copy = function(e) {
					return n.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this.fog = e.fog, this
				}, n.Texture = function(e, t, r, i, o, a, s, h, c) {
					Object.defineProperty(this, "id", {
							value: n.TextureIdCount++
						}), this.uuid = n.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== e ? e : n.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : n.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : n.ClampToEdgeWrapping,
						this.wrapT = void 0 !== i ? i : n.ClampToEdgeWrapping, this.magFilter = void 0 !== o ? o : n.LinearFilter, this.minFilter = void 0 !== a ? a : n.LinearMipMapLinearFilter, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== s ? s : n.RGBAFormat, this.type = void 0 !== h ? h : n.UnsignedByteType, this.offset = new n.Vector2(0, 0), this.repeat = new n.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.version = 0, this.onUpdate = null
				}, n.Texture.DEFAULT_IMAGE = void 0, n.Texture.DEFAULT_MAPPING = n.UVMapping, n.Texture.prototype = {
					constructor: n.Texture,
					set needsUpdate(e) {
						e === !0 && this.version++
					},
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this
					},
					toJSON: function(e) {
						function t(e) {
							var t;
							return void 0 !== e.toDataURL ? t = e : (t = document.createElement("canvas"), t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)), t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
						}
						if (void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
						var r = {
							metadata: {
								version: 4.4,
								type: "Texture",
								generator: "Texture.toJSON"
							},
							uuid: this.uuid,
							name: this.name,
							mapping: this.mapping,
							repeat: [this.repeat.x, this.repeat.y],
							offset: [this.offset.x, this.offset.y],
							wrap: [this.wrapS, this.wrapT],
							minFilter: this.minFilter,
							magFilter: this.magFilter,
							anisotropy: this.anisotropy
						};
						if (void 0 !== this.image) {
							var i = this.image;
							void 0 === i.uuid && (i.uuid = n.Math.generateUUID()), void 0 === e.images[i.uuid] && (e.images[i.uuid] = {
								uuid: i.uuid,
								url: t(i)
							}), r.image = i.uuid
						}
						return e.textures[this.uuid] = r, r
					},
					dispose: function() {
						this.dispatchEvent({
							type: "dispose"
						})
					},
					transformUv: function(e) {
						if (this.mapping === n.UVMapping) {
							if (e.multiply(this.repeat), e.add(this.offset), e.x < 0 || e.x > 1) switch (this.wrapS) {
								case n.RepeatWrapping:
									e.x = e.x - Math.floor(e.x);
									break;
								case n.ClampToEdgeWrapping:
									e.x = e.x < 0 ? 0 : 1;
									break;
								case n.MirroredRepeatWrapping:
									e.x = 1 === Math.abs(Math.floor(e.x) % 2) ? Math.ceil(e.x) - e.x : e.x - Math.floor(e.x)
							}
							if (e.y < 0 || e.y > 1) switch (this.wrapT) {
								case n.RepeatWrapping:
									e.y = e.y - Math.floor(e.y);
									break;
								case n.ClampToEdgeWrapping:
									e.y = e.y < 0 ? 0 : 1;
									break;
								case n.MirroredRepeatWrapping:
									e.y = 1 === Math.abs(Math.floor(e.y) % 2) ? Math.ceil(e.y) - e.y : e.y - Math.floor(e.y)
							}
							this.flipY && (e.y = 1 - e.y)
						}
					}
				}, n.EventDispatcher.prototype.apply(n.Texture.prototype), n.TextureIdCount = 0, n.CanvasTexture = function(e, t, r, i, o, a, s, h, c) {
					n.Texture.call(this, e, t, r, i, o, a, s, h, c), this.needsUpdate = !0
				}, n.CanvasTexture.prototype = Object.create(n.Texture.prototype), n.CanvasTexture.prototype.constructor = n.CanvasTexture, n.CubeTexture = function(e, t, r, i, o, a, s, h, c) {
					t = void 0 !== t ? t : n.CubeReflectionMapping, n.Texture.call(this, e, t, r, i, o, a, s, h, c), this.images = e, this.flipY = !1
				}, n.CubeTexture.prototype = Object.create(n.Texture.prototype), n.CubeTexture.prototype.constructor = n.CubeTexture, n.CubeTexture.prototype.copy = function(e) {
					return n.Texture.prototype.copy.call(this, e), this.images = e.images, this
				}, n.CompressedTexture = function(e, t, r, i, o, a, s, h, c, l, u) {
					n.Texture.call(this, null, a, s, h, c, l, i, o, u), this.image = {
						width: t,
						height: r
					}, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
				}, n.CompressedTexture.prototype = Object.create(n.Texture.prototype), n.CompressedTexture.prototype.constructor = n.CompressedTexture, n.DataTexture = function(e, t, r, i, o, a, s, h, c, l, u) {
					n.Texture.call(this, null, a, s, h, c, l, i, o, u), this.image = {
						data: e,
						width: t,
						height: r
					}, this.magFilter = void 0 !== c ? c : n.NearestFilter, this.minFilter = void 0 !== l ? l : n.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
				}, n.DataTexture.prototype = Object.create(n.Texture.prototype), n.DataTexture.prototype.constructor = n.DataTexture, n.VideoTexture = function(e, t, r, i, o, a, s, h, c) {
					function l() {
						requestAnimationFrame(l), e.readyState === e.HAVE_ENOUGH_DATA && (u.needsUpdate = !0)
					}
					n.Texture.call(this, e, t, r, i, o, a, s, h, c), this.generateMipmaps = !1;
					var u = this;
					l()
				}, n.VideoTexture.prototype = Object.create(n.Texture.prototype), n.VideoTexture.prototype.constructor = n.VideoTexture, n.Group = function() {
					n.Object3D.call(this), this.type = "Group"
				}, n.Group.prototype = Object.create(n.Object3D.prototype), n.Group.prototype.constructor = n.Group, n.Points = function(e, t) {
					n.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new n.Geometry, this.material = void 0 !== t ? t : new n.PointsMaterial({
						color: 16777215 * Math.random()
					})
				}, n.Points.prototype = Object.create(n.Object3D.prototype), n.Points.prototype.constructor = n.Points, n.Points.prototype.raycast = function() {
					var e = new n.Matrix4,
						t = new n.Ray,
						r = new n.Sphere;
					return function(i, o) {
						function a(e, r) {
							var n = t.distanceSqToPoint(e);
							if (d > n) {
								var a = t.closestPointToPoint(e);
								a.applyMatrix4(c);
								var h = i.ray.origin.distanceTo(a);
								if (h < i.near || h > i.far) return;
								o.push({
									distance: h,
									distanceToRay: Math.sqrt(n),
									point: a.clone(),
									index: r,
									face: null,
									object: s
								})
							}
						}
						var s = this,
							h = this.geometry,
							c = this.matrixWorld,
							l = i.params.Points.threshold;
						if (null === h.boundingSphere && h.computeBoundingSphere(), r.copy(h.boundingSphere), r.applyMatrix4(c), i.ray.intersectsSphere(r) !== !1) {
							e.getInverse(c), t.copy(i.ray).applyMatrix4(e);
							var u = l / ((this.scale.x + this.scale.y + this.scale.z) / 3),
								d = u * u,
								p = new n.Vector3;
							if (h instanceof n.BufferGeometry) {
								var f = h.index,
									m = h.attributes,
									v = m.position.array;
								if (null !== f)
									for (var g = f.array, y = 0, x = g.length; x > y; y++) {
										var b = g[y];
										p.fromArray(v, 3 * b), a(p, b)
									} else
										for (var y = 0, w = v.length / 3; w > y; y++) p.fromArray(v, 3 * y), a(p, y)
							} else
								for (var M = h.vertices, y = 0, w = M.length; w > y; y++) a(M[y], y)
						}
					}
				}(), n.Points.prototype.clone = function() {
					return new this.constructor(this.geometry, this.material).copy(this)
				}, n.Line = function(e, t, r) {
					return 1 === r ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new n.LineSegments(e, t)) : (n.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new n.Geometry, void(this.material = void 0 !== t ? t : new n.LineBasicMaterial({
						color: 16777215 * Math.random()
					})))
				}, n.Line.prototype = Object.create(n.Object3D.prototype), n.Line.prototype.constructor = n.Line, n.Line.prototype.raycast = function() {
					var e = new n.Matrix4,
						t = new n.Ray,
						r = new n.Sphere;
					return function(i, o) {
						var a = i.linePrecision,
							s = a * a,
							h = this.geometry,
							c = this.matrixWorld;
						if (null === h.boundingSphere && h.computeBoundingSphere(), r.copy(h.boundingSphere), r.applyMatrix4(c), i.ray.intersectsSphere(r) !== !1) {
							e.getInverse(c), t.copy(i.ray).applyMatrix4(e);
							var l = new n.Vector3,
								u = new n.Vector3,
								d = new n.Vector3,
								p = new n.Vector3,
								f = this instanceof n.LineSegments ? 2 : 1;
							if (h instanceof n.BufferGeometry) {
								var m = h.index,
									v = h.attributes,
									g = v.position.array;
								if (null !== m)
									for (var y = m.array, x = 0, b = y.length - 1; b > x; x += f) {
										var w = y[x],
											M = y[x + 1];
										l.fromArray(g, 3 * w), u.fromArray(g, 3 * M);
										var _ = t.distanceSqToSegment(l, u, p, d);
										if (!(_ > s)) {
											p.applyMatrix4(this.matrixWorld);
											var E = i.ray.origin.distanceTo(p);
											E < i.near || E > i.far || o.push({
												distance: E,
												point: d.clone().applyMatrix4(this.matrixWorld),
												index: x,
												face: null,
												faceIndex: null,
												object: this
											})
										}
									} else
										for (var x = 0, b = g.length / 3 - 1; b > x; x += f) {
											l.fromArray(g, 3 * x), u.fromArray(g, 3 * x + 3);
											var _ = t.distanceSqToSegment(l, u, p, d);
											if (!(_ > s)) {
												p.applyMatrix4(this.matrixWorld);
												var E = i.ray.origin.distanceTo(p);
												E < i.near || E > i.far || o.push({
													distance: E,
													point: d.clone().applyMatrix4(this.matrixWorld),
													index: x,
													face: null,
													faceIndex: null,
													object: this
												})
											}
										}
							} else if (h instanceof n.Geometry)
								for (var A = h.vertices, S = A.length, x = 0; S - 1 > x; x += f) {
									var _ = t.distanceSqToSegment(A[x], A[x + 1], p, d);
									if (!(_ > s)) {
										p.applyMatrix4(this.matrixWorld);
										var E = i.ray.origin.distanceTo(p);
										E < i.near || E > i.far || o.push({
											distance: E,
											point: d.clone().applyMatrix4(this.matrixWorld),
											index: x,
											face: null,
											faceIndex: null,
											object: this
										})
									}
								}
						}
					}
				}(), n.Line.prototype.clone = function() {
					return new this.constructor(this.geometry, this.material).copy(this)
				}, n.LineStrip = 0, n.LinePieces = 1, n.LineSegments = function(e, t) {
					n.Line.call(this, e, t), this.type = "LineSegments"
				}, n.LineSegments.prototype = Object.create(n.Line.prototype), n.LineSegments.prototype.constructor = n.LineSegments, n.Mesh = function(e, t) {
					n.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new n.Geometry, this.material = void 0 !== t ? t : new n.MeshBasicMaterial({
						color: 16777215 * Math.random()
					}), this.drawMode = n.TrianglesDrawMode, this.updateMorphTargets()
				}, n.Mesh.prototype = Object.create(n.Object3D.prototype), n.Mesh.prototype.constructor = n.Mesh, n.Mesh.prototype.setDrawMode = function(e) {
					this.drawMode = e
				}, n.Mesh.prototype.updateMorphTargets = function() {
					if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
						this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
						for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
					}
				}, n.Mesh.prototype.getMorphTargetIndexByName = function(e) {
					return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
				}, n.Mesh.prototype.raycast = function() {
					function e(e, t, r, i, o, a, s) {
						return n.Triangle.barycoordFromPoint(e, t, r, i, v), o.multiplyScalar(v.x), a.multiplyScalar(v.y), s.multiplyScalar(v.z), o.add(a).add(s), o.clone()
					}

					function t(e, t, r, i, o, a, s) {
						var h, c = e.material;
						if (h = c.side === n.BackSide ? r.intersectTriangle(a, o, i, !0, s) : r.intersectTriangle(i, o, a, c.side !== n.DoubleSide, s), null === h) return null;
						y.copy(s), y.applyMatrix4(e.matrixWorld);
						var l = t.ray.origin.distanceTo(y);
						return l < t.near || l > t.far ? null : {
							distance: l,
							point: y.clone(),
							object: e
						}
					}

					function r(r, i, o, a, l, u, d, v) {
						s.fromArray(a, 3 * u), h.fromArray(a, 3 * d), c.fromArray(a, 3 * v);
						var y = t(r, i, o, s, h, c, g);
						return y && (l && (p.fromArray(l, 2 * u), f.fromArray(l, 2 * d), m.fromArray(l, 2 * v), y.uv = e(g, s, h, c, p, f, m)), y.face = new n.Face3(u, d, v, n.Triangle.normal(s, h, c)), y.faceIndex = u), y
					}
					var i = new n.Matrix4,
						o = new n.Ray,
						a = new n.Sphere,
						s = new n.Vector3,
						h = new n.Vector3,
						c = new n.Vector3,
						l = new n.Vector3,
						u = new n.Vector3,
						d = new n.Vector3,
						p = new n.Vector2,
						f = new n.Vector2,
						m = new n.Vector2,
						v = new n.Vector3,
						g = new n.Vector3,
						y = new n.Vector3;
					return function(v, y) {
						var x = this.geometry,
							b = this.material,
							w = this.matrixWorld;
						if (void 0 !== b && (null === x.boundingSphere && x.computeBoundingSphere(), a.copy(x.boundingSphere), a.applyMatrix4(w), v.ray.intersectsSphere(a) !== !1 && (i.getInverse(w), o.copy(v.ray).applyMatrix4(i), null === x.boundingBox || o.intersectsBox(x.boundingBox) !== !1))) {
							var M, _;
							if (x instanceof n.BufferGeometry) {
								var E, A, S, C = x.index,
									T = x.attributes,
									L = T.position.array;
								if (void 0 !== T.uv && (M = T.uv.array), null !== C)
									for (var R = C.array, k = 0, P = R.length; P > k; k += 3) E = R[k], A = R[k + 1], S = R[k + 2], _ = r(this, v, o, L, M, E, A, S), _ && (_.faceIndex = Math.floor(k / 3), y.push(_));
								else
									for (var k = 0, P = L.length; P > k; k += 9) E = k / 3, A = E + 1, S = E + 2, _ = r(this, v, o, L, M, E, A, S), _ && (_.index = E, y.push(_))
							} else if (x instanceof n.Geometry) {
								var D, O, I, N = b instanceof n.MultiMaterial,
									V = N === !0 ? b.materials : null,
									F = x.vertices,
									B = x.faces,
									U = x.faceVertexUvs[0];
								U.length > 0 && (M = U);
								for (var z = 0, j = B.length; j > z; z++) {
									var G = B[z],
										H = N === !0 ? V[G.materialIndex] : b;
									if (void 0 !== H) {
										if (D = F[G.a], O = F[G.b], I = F[G.c], H.morphTargets === !0) {
											var W = x.morphTargets,
												q = this.morphTargetInfluences;
											s.set(0, 0, 0), h.set(0, 0, 0), c.set(0, 0, 0);
											for (var X = 0, Y = W.length; Y > X; X++) {
												var Q = q[X];
												if (0 !== Q) {
													var K = W[X].vertices;
													s.addScaledVector(l.subVectors(K[G.a], D), Q), h.addScaledVector(u.subVectors(K[G.b], O), Q), c.addScaledVector(d.subVectors(K[G.c], I), Q)
												}
											}
											s.add(D), h.add(O), c.add(I), D = s, O = h, I = c
										}
										if (_ = t(this, v, o, D, O, I, g)) {
											if (M) {
												var Z = M[z];
												p.copy(Z[0]), f.copy(Z[1]), m.copy(Z[2]), _.uv = e(g, D, O, I, p, f, m)
											}
											_.face = G, _.faceIndex = z, y.push(_)
										}
									}
								}
							}
						}
					}
				}(), n.Mesh.prototype.clone = function() {
					return new this.constructor(this.geometry, this.material).copy(this)
				}, n.Bone = function(e) {
					n.Object3D.call(this), this.type = "Bone", this.skin = e
				}, n.Bone.prototype = Object.create(n.Object3D.prototype), n.Bone.prototype.constructor = n.Bone, n.Bone.prototype.copy = function(e) {
					return n.Object3D.prototype.copy.call(this, e), this.skin = e.skin, this
				}, n.Skeleton = function(e, t, r) {
					if (this.useVertexTexture = void 0 !== r ? r : !0, this.identityMatrix = new n.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture) {
						var i = Math.sqrt(4 * this.bones.length);
						i = n.Math.nextPowerOfTwo(Math.ceil(i)), i = Math.max(i, 4), this.boneTextureWidth = i, this.boneTextureHeight = i, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new n.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, n.RGBAFormat, n.FloatType)
					} else this.boneMatrices = new Float32Array(16 * this.bones.length);
					if (void 0 === t) this.calculateInverses();
					else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
					else {
						console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
						for (var o = 0, a = this.bones.length; a > o; o++) this.boneInverses.push(new n.Matrix4)
					}
				}, n.Skeleton.prototype.calculateInverses = function() {
					this.boneInverses = [];
					for (var e = 0, t = this.bones.length; t > e; e++) {
						var r = new n.Matrix4;
						this.bones[e] && r.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(r)
					}
				}, n.Skeleton.prototype.pose = function() {
					for (var e, t = 0, r = this.bones.length; r > t; t++) e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
					for (var t = 0, r = this.bones.length; r > t; t++) e = this.bones[t], e && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
				}, n.Skeleton.prototype.update = function() {
					var e = new n.Matrix4;
					return function() {
						for (var t = 0, r = this.bones.length; r > t; t++) {
							var i = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
							e.multiplyMatrices(i, this.boneInverses[t]), e.flattenToArrayOffset(this.boneMatrices, 16 * t)
						}
						this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
					}
				}(), n.Skeleton.prototype.clone = function() {
					return new n.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
				}, n.SkinnedMesh = function(e, t, r) {
					n.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new n.Matrix4, this.bindMatrixInverse = new n.Matrix4;
					var i = [];
					if (this.geometry && void 0 !== this.geometry.bones) {
						for (var o, a, s = 0, h = this.geometry.bones.length; h > s; ++s) a = this.geometry.bones[s], o = new n.Bone(this), i.push(o), o.name = a.name, o.position.fromArray(a.pos), o.quaternion.fromArray(a.rotq), void 0 !== a.scl && o.scale.fromArray(a.scl);
						for (var s = 0, h = this.geometry.bones.length; h > s; ++s) a = this.geometry.bones[s], -1 !== a.parent && null !== a.parent ? i[a.parent].add(i[s]) : this.add(i[s])
					}
					this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new n.Skeleton(i, void 0, r), this.matrixWorld)
				}, n.SkinnedMesh.prototype = Object.create(n.Mesh.prototype), n.SkinnedMesh.prototype.constructor = n.SkinnedMesh, n.SkinnedMesh.prototype.bind = function(e, t) {
					this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
				}, n.SkinnedMesh.prototype.pose = function() {
					this.skeleton.pose()
				}, n.SkinnedMesh.prototype.normalizeSkinWeights = function() {
					if (this.geometry instanceof n.Geometry)
						for (var e = 0; e < this.geometry.skinWeights.length; e++) {
							var t = this.geometry.skinWeights[e],
								r = 1 / t.lengthManhattan();
							r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0)
						} else if (this.geometry instanceof n.BufferGeometry)
							for (var i = new n.Vector4, o = this.geometry.attributes.skinWeight, e = 0; e < o.count; e++) {
								i.x = o.getX(e), i.y = o.getY(e), i.z = o.getZ(e), i.w = o.getW(e);
								var r = 1 / i.lengthManhattan();
								r !== 1 / 0 ? i.multiplyScalar(r) : i.set(1, 0, 0, 0), o.setXYZW(e, i.x, i.y, i.z, i.w)
							}
				}, n.SkinnedMesh.prototype.updateMatrixWorld = function() {
					n.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
				}, n.SkinnedMesh.prototype.clone = function() {
					return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
				}, n.LOD = function() {
					n.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
						levels: {
							enumerable: !0,
							value: []
						},
						objects: {
							get: function() {
								return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
							}
						}
					})
				}, n.LOD.prototype = Object.create(n.Object3D.prototype), n.LOD.prototype.constructor = n.LOD, n.LOD.prototype.addLevel = function(e, t) {
					void 0 === t && (t = 0), t = Math.abs(t);
					for (var r = this.levels, i = 0; i < r.length && !(t < r[i].distance); i++);
					r.splice(i, 0, {
						distance: t,
						object: e
					}), this.add(e)
				}, n.LOD.prototype.getObjectForDistance = function(e) {
					for (var t = this.levels, r = 1, i = t.length; i > r && !(e < t[r].distance); r++);
					return t[r - 1].object
				}, n.LOD.prototype.raycast = function() {
					var e = new n.Vector3;
					return function(t, r) {
						e.setFromMatrixPosition(this.matrixWorld);
						var i = t.ray.origin.distanceTo(e);
						this.getObjectForDistance(i).raycast(t, r)
					}
				}(), n.LOD.prototype.update = function() {
					var e = new n.Vector3,
						t = new n.Vector3;
					return function(r) {
						var i = this.levels;
						if (i.length > 1) {
							e.setFromMatrixPosition(r.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
							var n = e.distanceTo(t);
							i[0].object.visible = !0;
							for (var o = 1, a = i.length; a > o && n >= i[o].distance; o++) i[o - 1].object.visible = !1, i[o].object.visible = !0;
							for (; a > o; o++) i[o].object.visible = !1
						}
					}
				}(), n.LOD.prototype.copy = function(e) {
					n.Object3D.prototype.copy.call(this, e, !1);
					for (var t = e.levels, r = 0, i = t.length; i > r; r++) {
						var o = t[r];
						this.addLevel(o.object.clone(), o.distance)
					}
					return this
				}, n.LOD.prototype.toJSON = function(e) {
					var t = n.Object3D.prototype.toJSON.call(this, e);
					t.object.levels = [];
					for (var r = this.levels, i = 0, o = r.length; o > i; i++) {
						var a = r[i];
						t.object.levels.push({
							object: a.object.uuid,
							distance: a.distance
						})
					}
					return t
				}, n.Sprite = function() {
					var e = new Uint16Array([0, 1, 2, 0, 2, 3]),
						t = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
						r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
						i = new n.BufferGeometry;
					return i.setIndex(new n.BufferAttribute(e, 1)), i.addAttribute("position", new n.BufferAttribute(t, 3)), i.addAttribute("uv", new n.BufferAttribute(r, 2)),
						function(e) {
							n.Object3D.call(this), this.type = "Sprite", this.geometry = i, this.material = void 0 !== e ? e : new n.SpriteMaterial
						}
				}(), n.Sprite.prototype = Object.create(n.Object3D.prototype), n.Sprite.prototype.constructor = n.Sprite, n.Sprite.prototype.raycast = function() {
					var e = new n.Vector3;
					return function(t, r) {
						e.setFromMatrixPosition(this.matrixWorld);
						var i = t.ray.distanceSqToPoint(e),
							n = this.scale.x * this.scale.y;
						i > n || r.push({
							distance: Math.sqrt(i),
							point: this.position,
							face: null,
							object: this
						})
					}
				}(), n.Sprite.prototype.clone = function() {
					return new this.constructor(this.material).copy(this)
				}, n.Particle = n.Sprite, n.LensFlare = function(e, t, r, i, o) {
					n.Object3D.call(this), this.lensFlares = [], this.positionScreen = new n.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, r, i, o)
				}, n.LensFlare.prototype = Object.create(n.Object3D.prototype), n.LensFlare.prototype.constructor = n.LensFlare, n.LensFlare.prototype.add = function(e, t, r, i, o, a) {
					void 0 === t && (t = -1), void 0 === r && (r = 0), void 0 === a && (a = 1), void 0 === o && (o = new n.Color(16777215)), void 0 === i && (i = n.NormalBlending), r = Math.min(r, Math.max(0, r)), this.lensFlares.push({
						texture: e,
						size: t,
						distance: r,
						x: 0,
						y: 0,
						z: 0,
						scale: 1,
						rotation: 0,
						opacity: a,
						color: o,
						blending: i
					})
				}, n.LensFlare.prototype.updateLensFlares = function() {
					var e, t, r = this.lensFlares.length,
						i = 2 * -this.positionScreen.x,
						n = 2 * -this.positionScreen.y;
					for (e = 0; r > e; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + i * t.distance, t.y = this.positionScreen.y + n * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
				}, n.LensFlare.prototype.copy = function(e) {
					n.Object3D.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
					for (var t = 0, r = e.lensFlares.length; r > t; t++) this.lensFlares.push(e.lensFlares[t]);
					return this
				}, n.Scene = function() {
					n.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
				}, n.Scene.prototype = Object.create(n.Object3D.prototype), n.Scene.prototype.constructor = n.Scene, n.Scene.prototype.copy = function(e) {
					return n.Object3D.prototype.copy.call(this, e), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
				}, n.Fog = function(e, t, r) {
					this.name = "", this.color = new n.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== r ? r : 1e3
				}, n.Fog.prototype.clone = function() {
					return new n.Fog(this.color.getHex(), this.near, this.far)
				}, n.FogExp2 = function(e, t) {
					this.name = "", this.color = new n.Color(e), this.density = void 0 !== t ? t : 25e-5
				}, n.FogExp2.prototype.clone = function() {
					return new n.FogExp2(this.color.getHex(), this.density)
				}, n.ShaderChunk = {}, n.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n", n.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n", n.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n", n.ShaderChunk.ambient_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	return PI * ambientLightColor;\n}\n", n.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n	reflectedLight.indirectDiffuse *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n#endif\n", n.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", n.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n", n.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n", n.ShaderChunk.bsdfs = "float calcLightAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	if ( decayExponent > 0.0 ) {\n	  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n	}\n	return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = alpha * alpha;\n	float gl = dotNL + pow( a2 + ( 1.0 - a2 ) * dotNL * dotNL, 0.5 );\n	float gv = dotNV + pow( a2 + ( 1.0 - a2 ) * dotNV * dotNV, 0.5 );\n	return 1.0 / ( gl * gv );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = alpha * alpha;\n	float denom = dotNH * dotNH * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / ( denom * denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = roughness * roughness;\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_Smith( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / square( ggxRoughness + 0.0001 ) - 2.0 );\n}", n.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n", n.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif", n.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n", n.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif", n.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif", n.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat square( const in float x ) { return x*x; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nvec3 inputToLinear( in vec3 a ) {\n	#ifdef GAMMA_INPUT\n		return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n	#else\n		return a;\n	#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n	#ifdef GAMMA_OUTPUT\n		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n	#else\n		return a;\n	#endif\n}\n", n.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n	objectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n", n.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n", n.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n", n.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n	totalEmissiveLight *= emissiveColor.rgb;\n#endif\n", n.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n", n.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n	envColor.xyz = inputToLinear( envColor.xyz );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n", n.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( STANDARD )\n	uniform float reflectivity;\n	uniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n", n.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n	varying vec3 vReflect;\n	uniform float refractionRatio;\n#endif\n", n.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n	vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	#ifdef ENVMAP_MODE_REFLECTION\n		vReflect = reflect( cameraToVertex, worldNormal );\n	#else\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n	#endif\n#endif\n", n.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n#endif", n.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", n.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
				n.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", n.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		directLight = getPointDirectLight( pointLights[ i ], geometry );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		directLight = getSpotDirectLight( spotLights[ i ], geometry );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directLight = getDirectionalDirectLight( directionalLights[ i ], geometry );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n", n.ShaderChunk.lights_pars = "#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	IncidentLight getDirectionalDirectLight( const in DirectionalLight directionalLight, const in GeometricContext geometry ) {\n		IncidentLight directLight;\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		return directLight;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	IncidentLight getPointDirectLight( const in PointLight pointLight, const in GeometricContext geometry ) {\n		IncidentLight directLight;\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= calcLightAttenuation( length( lVector ), pointLight.distance, pointLight.decay );\n		return directLight;\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float angleCos;\n		float exponent;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	IncidentLight getSpotDirectLight( const in SpotLight spotLight, const in GeometricContext geometry ) {\n		IncidentLight directLight;\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float spotEffect = dot( directLight.direction, spotLight.direction );\n		if ( spotEffect > spotLight.angleCos ) {\n			float spotEffect = dot( spotLight.direction, directLight.direction );\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLight.exponent ) );\n			directLight.color = spotLight.color;\n			directLight.color *= ( spotEffect * calcLightAttenuation( length( lVector ), spotLight.distance, spotLight.decay ) );\n		} else {\n			directLight.color = vec3( 0.0 );\n		}\n		return directLight;\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		return PI * mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( STANDARD )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		#ifdef DOUBLE_SIDED\n			float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		#else\n			float flipNormal = 1.0;\n		#endif\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n		#else\n			vec3 envMapColor = vec3( 0.0 );\n		#endif\n		envMapColor.rgb = inputToLinear( envMapColor.rgb );\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( square( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		#ifdef DOUBLE_SIDED\n			float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n		#else\n			float flipNormal = 1.0;\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n		#endif\n		envMapColor.rgb = inputToLinear( envMapColor.rgb );\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n", n.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n", n.ShaderChunk.lights_phong_pars_fragment = "#ifdef USE_ENVMAP\n	varying vec3 vWorldPosition;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * PI * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n", n.ShaderChunk.lights_phong_pars_vertex = "#ifdef USE_ENVMAP\n	varying vec3 vWorldPosition;\n#endif\n", n.ShaderChunk.lights_phong_vertex = "#ifdef USE_ENVMAP\n	vWorldPosition = worldPosition.xyz;\n#endif\n", n.ShaderChunk.lights_standard_fragment = "StandardMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\nmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n", n.ShaderChunk.lights_standard_pars_fragment = "struct StandardMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n};\nvoid RE_Direct_Standard( const in IncidentLight directLight, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * PI * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n}\nvoid RE_IndirectDiffuse_Standard( const in vec3 irradiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Standard( const in vec3 radiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n}\n#define RE_Direct				RE_Direct_Standard\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Standard\n#define RE_IndirectSpecular		RE_IndirectSpecular_Standard\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n", n.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		directLight = getPointDirectLight( pointLight, geometry );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		directLight = getSpotDirectLight( spotLight, geometry );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		directLight = getDirectionalDirectLight( directionalLight, geometry );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		irradiance += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	RE_IndirectSpecular( radiance, geometry, material, reflectedLight );\n#endif\n", n.ShaderChunk.linear_to_gamma_fragment = "\n	outgoingLight = linearToOutput( outgoingLight );\n", n.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif", n.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n", n.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif", n.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n	#endif\n#endif\n", n.ShaderChunk.map_fragment = "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n	diffuseColor *= texelColor;\n#endif\n", n.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", n.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n#endif\n", n.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n#endif\n", n.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n#endif\n", n.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", n.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n", n.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif", n.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n", n.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n	#endif\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n", n.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n", n.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n	vec4 mvPosition = modelViewMatrix * skinned;\n#else\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n", n.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n#endif\n", n.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", n.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n	float unpackDepth( const in vec4 rgba_depth ) {\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		return dot( rgba_depth, bit_shift );\n	}\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return 1.0;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec3 offset = vec3( - 1, 0, 1 ) * shadowRadius * 2.0 * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zzz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zxz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xzz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zzx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xzx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zzy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xzy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zyz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.zyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yzz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxz, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yzx, texelSize.y ), dp )\n			) * ( 1.0 / 21.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n", n.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n#endif\n", n.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif\n", n.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}\n", n.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", n.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n", n.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n#endif\n", n.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n", n.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", n.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", n.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif", n.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif", n.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif", n.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif", n.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n#endif\n",
				n.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif", n.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n	#ifdef USE_SKINNING\n		vec4 worldPosition = modelMatrix * skinned;\n	#else\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n	#endif\n#endif\n", n.UniformsUtils = {
					merge: function(e) {
						for (var t = {}, r = 0; r < e.length; r++) {
							var i = this.clone(e[r]);
							for (var n in i) t[n] = i[n]
						}
						return t
					},
					clone: function(e) {
						var t = {};
						for (var r in e) {
							t[r] = {};
							for (var i in e[r]) {
								var o = e[r][i];
								t[r][i] = o instanceof n.Color || o instanceof n.Vector2 || o instanceof n.Vector3 || o instanceof n.Vector4 || o instanceof n.Matrix3 || o instanceof n.Matrix4 || o instanceof n.Texture ? o.clone() : Array.isArray(o) ? o.slice() : o
							}
						}
						return t
					}
				}, n.UniformsLib = {
					common: {
						diffuse: {
							type: "c",
							value: new n.Color(15658734)
						},
						opacity: {
							type: "f",
							value: 1
						},
						map: {
							type: "t",
							value: null
						},
						offsetRepeat: {
							type: "v4",
							value: new n.Vector4(0, 0, 1, 1)
						},
						specularMap: {
							type: "t",
							value: null
						},
						alphaMap: {
							type: "t",
							value: null
						},
						envMap: {
							type: "t",
							value: null
						},
						flipEnvMap: {
							type: "f",
							value: -1
						},
						reflectivity: {
							type: "f",
							value: 1
						},
						refractionRatio: {
							type: "f",
							value: .98
						}
					},
					aomap: {
						aoMap: {
							type: "t",
							value: null
						},
						aoMapIntensity: {
							type: "f",
							value: 1
						}
					},
					lightmap: {
						lightMap: {
							type: "t",
							value: null
						},
						lightMapIntensity: {
							type: "f",
							value: 1
						}
					},
					emissivemap: {
						emissiveMap: {
							type: "t",
							value: null
						}
					},
					bumpmap: {
						bumpMap: {
							type: "t",
							value: null
						},
						bumpScale: {
							type: "f",
							value: 1
						}
					},
					normalmap: {
						normalMap: {
							type: "t",
							value: null
						},
						normalScale: {
							type: "v2",
							value: new n.Vector2(1, 1)
						}
					},
					displacementmap: {
						displacementMap: {
							type: "t",
							value: null
						},
						displacementScale: {
							type: "f",
							value: 1
						},
						displacementBias: {
							type: "f",
							value: 0
						}
					},
					roughnessmap: {
						roughnessMap: {
							type: "t",
							value: null
						}
					},
					metalnessmap: {
						metalnessMap: {
							type: "t",
							value: null
						}
					},
					fog: {
						fogDensity: {
							type: "f",
							value: 25e-5
						},
						fogNear: {
							type: "f",
							value: 1
						},
						fogFar: {
							type: "f",
							value: 2e3
						},
						fogColor: {
							type: "c",
							value: new n.Color(16777215)
						}
					},
					ambient: {
						ambientLightColor: {
							type: "fv",
							value: []
						}
					},
					lights: {
						directionalLights: {
							type: "sa",
							value: [],
							properties: {
								direction: {
									type: "v3"
								},
								color: {
									type: "c"
								},
								shadow: {
									type: "i"
								},
								shadowBias: {
									type: "f"
								},
								shadowRadius: {
									type: "f"
								},
								shadowMapSize: {
									type: "v2"
								}
							}
						},
						directionalShadowMap: {
							type: "tv",
							value: []
						},
						directionalShadowMatrix: {
							type: "m4v",
							value: []
						},
						spotLights: {
							type: "sa",
							value: [],
							properties: {
								color: {
									type: "c"
								},
								position: {
									type: "v3"
								},
								direction: {
									type: "v3"
								},
								distance: {
									type: "f"
								},
								angleCos: {
									type: "f"
								},
								exponent: {
									type: "f"
								},
								decay: {
									type: "f"
								},
								shadow: {
									type: "i"
								},
								shadowBias: {
									type: "f"
								},
								shadowRadius: {
									type: "f"
								},
								shadowMapSize: {
									type: "v2"
								}
							}
						},
						spotShadowMap: {
							type: "tv",
							value: []
						},
						spotShadowMatrix: {
							type: "m4v",
							value: []
						},
						pointLights: {
							type: "sa",
							value: [],
							properties: {
								color: {
									type: "c"
								},
								position: {
									type: "v3"
								},
								decay: {
									type: "f"
								},
								distance: {
									type: "f"
								},
								shadow: {
									type: "i"
								},
								shadowBias: {
									type: "f"
								},
								shadowRadius: {
									type: "f"
								},
								shadowMapSize: {
									type: "v2"
								}
							}
						},
						pointShadowMap: {
							type: "tv",
							value: []
						},
						pointShadowMatrix: {
							type: "m4v",
							value: []
						},
						hemisphereLights: {
							type: "sa",
							value: [],
							properties: {
								direction: {
									type: "v3"
								},
								skyColor: {
									type: "c"
								},
								groundColor: {
									type: "c"
								}
							}
						}
					},
					points: {
						diffuse: {
							type: "c",
							value: new n.Color(15658734)
						},
						opacity: {
							type: "f",
							value: 1
						},
						size: {
							type: "f",
							value: 1
						},
						scale: {
							type: "f",
							value: 1
						},
						map: {
							type: "t",
							value: null
						},
						offsetRepeat: {
							type: "v4",
							value: new n.Vector4(0, 0, 1, 1)
						}
					}
				}, n.ShaderLib = {
					basic: {
						uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.aomap, n.UniformsLib.fog]),
						vertexShader: [n.ShaderChunk.common, n.ShaderChunk.uv_pars_vertex, n.ShaderChunk.uv2_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.uv_vertex, n.ShaderChunk.uv2_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.skinbase_vertex, "	#ifdef USE_ENVMAP", n.ShaderChunk.beginnormal_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, "	#endif", n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
						fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.uv_pars_fragment, n.ShaderChunk.uv2_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.aomap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec4 diffuseColor = vec4( diffuse, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, "	ReflectedLight reflectedLight;", "	reflectedLight.directDiffuse = vec3( 0.0 );", "	reflectedLight.directSpecular = vec3( 0.0 );", "	reflectedLight.indirectDiffuse = diffuseColor.rgb;", "	reflectedLight.indirectSpecular = vec3( 0.0 );", n.ShaderChunk.aomap_fragment, "	vec3 outgoingLight = reflectedLight.indirectDiffuse;", n.ShaderChunk.envmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
					},
					lambert: {
						uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.aomap, n.UniformsLib.lightmap, n.UniformsLib.emissivemap, n.UniformsLib.fog, n.UniformsLib.ambient, n.UniformsLib.lights, {
							emissive: {
								type: "c",
								value: new n.Color(0)
							}
						}]),
						vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", n.ShaderChunk.common, n.ShaderChunk.uv_pars_vertex, n.ShaderChunk.uv2_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.bsdfs, n.ShaderChunk.lights_pars, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.uv_vertex, n.ShaderChunk.uv2_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.beginnormal_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_lambert_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
						fragmentShader: ["uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.uv_pars_fragment, n.ShaderChunk.uv2_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.aomap_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.emissivemap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.bsdfs, n.ShaderChunk.ambient_pars, n.ShaderChunk.lights_pars, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.shadowmask_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );", "	vec3 totalEmissiveLight = emissive;", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.emissivemap_fragment, "	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );", n.ShaderChunk.lightmap_fragment, "	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );", "	#ifdef DOUBLE_SIDED", "		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;", "	#else", "		reflectedLight.directDiffuse = vLightFront;", "	#endif", "	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();", n.ShaderChunk.aomap_fragment, "	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveLight;", n.ShaderChunk.envmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
					},
					phong: {
						uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.aomap, n.UniformsLib.lightmap, n.UniformsLib.emissivemap, n.UniformsLib.bumpmap, n.UniformsLib.normalmap, n.UniformsLib.displacementmap, n.UniformsLib.fog, n.UniformsLib.ambient, n.UniformsLib.lights, {
							emissive: {
								type: "c",
								value: new n.Color(0)
							},
							specular: {
								type: "c",
								value: new n.Color(1118481)
							},
							shininess: {
								type: "f",
								value: 30
							}
						}]),
						vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", n.ShaderChunk.common, n.ShaderChunk.uv_pars_vertex, n.ShaderChunk.uv2_pars_vertex, n.ShaderChunk.displacementmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.lights_phong_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.uv_vertex, n.ShaderChunk.uv2_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.beginnormal_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED", "	vNormal = normalize( transformedNormal );", "#endif", n.ShaderChunk.begin_vertex, n.ShaderChunk.displacementmap_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = - mvPosition.xyz;", n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_phong_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
						fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", "uniform float opacity;", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.uv_pars_fragment, n.ShaderChunk.uv2_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.aomap_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.emissivemap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.bsdfs, n.ShaderChunk.ambient_pars, n.ShaderChunk.lights_pars, n.ShaderChunk.lights_phong_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.bumpmap_pars_fragment, n.ShaderChunk.normalmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );", "	vec3 totalEmissiveLight = emissive;", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.normal_fragment, n.ShaderChunk.emissivemap_fragment, n.ShaderChunk.lights_phong_fragment, n.ShaderChunk.lights_template, n.ShaderChunk.aomap_fragment, "vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveLight;", n.ShaderChunk.envmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
					},
					standard: {
						uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.aomap, n.UniformsLib.lightmap, n.UniformsLib.emissivemap, n.UniformsLib.bumpmap, n.UniformsLib.normalmap, n.UniformsLib.displacementmap, n.UniformsLib.roughnessmap, n.UniformsLib.metalnessmap, n.UniformsLib.fog, n.UniformsLib.ambient, n.UniformsLib.lights, {
							emissive: {
								type: "c",
								value: new n.Color(0)
							},
							roughness: {
								type: "f",
								value: .5
							},
							metalness: {
								type: "f",
								value: 0
							},
							envMapIntensity: {
								type: "f",
								value: 1
							}
						}]),
						vertexShader: ["#define STANDARD", "varying vec3 vViewPosition;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", n.ShaderChunk.common, n.ShaderChunk.uv_pars_vertex, n.ShaderChunk.uv2_pars_vertex, n.ShaderChunk.displacementmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.uv_vertex, n.ShaderChunk.uv2_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.beginnormal_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED", "	vNormal = normalize( transformedNormal );", "#endif", n.ShaderChunk.begin_vertex, n.ShaderChunk.displacementmap_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = - mvPosition.xyz;", n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
						fragmentShader: ["#define STANDARD", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform float roughness;", "uniform float metalness;", "uniform float opacity;", "uniform float envMapIntensity;", "varying vec3 vViewPosition;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.uv_pars_fragment, n.ShaderChunk.uv2_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.aomap_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.emissivemap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.bsdfs, n.ShaderChunk.ambient_pars, n.ShaderChunk.lights_pars, n.ShaderChunk.lights_standard_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.bumpmap_pars_fragment, n.ShaderChunk.normalmap_pars_fragment, n.ShaderChunk.roughnessmap_pars_fragment, n.ShaderChunk.metalnessmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );", "	vec3 totalEmissiveLight = emissive;", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.roughnessmap_fragment, n.ShaderChunk.metalnessmap_fragment, n.ShaderChunk.normal_fragment, n.ShaderChunk.emissivemap_fragment, n.ShaderChunk.lights_standard_fragment, n.ShaderChunk.lights_template, n.ShaderChunk.aomap_fragment, "vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveLight;", n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
					},
					points: {
						uniforms: n.UniformsUtils.merge([n.UniformsLib.points, n.UniformsLib.fog]),
						vertexShader: ["uniform float size;", "uniform float scale;", n.ShaderChunk.common, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.color_vertex, n.ShaderChunk.begin_vertex, n.ShaderChunk.project_vertex, "	#ifdef USE_SIZEATTENUATION", "		gl_PointSize = size * ( scale / - mvPosition.z );", "	#else", "		gl_PointSize = size;", "	#endif", n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
						fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_particle_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_particle_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphatest_fragment, "	outgoingLight = diffuseColor.rgb;", n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
					},
					dashed: {
						uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, {
							scale: {
								type: "f",
								value: 1
							},
							dashSize: {
								type: "f",
								value: 1
							},
							totalSize: {
								type: "f",
								value: 2
							}
						}]),
						vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", n.ShaderChunk.common, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.color_vertex, "	vLineDistance = scale * lineDistance;", "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	gl_Position = projectionMatrix * mvPosition;", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
						fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	if ( mod( vLineDistance, totalSize ) > dashSize ) {", "		discard;", "	}", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.color_fragment, "	outgoingLight = diffuseColor.rgb;", n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
					},
					depth: {
						uniforms: {
							mNear: {
								type: "f",
								value: 1
							},
							mFar: {
								type: "f",
								value: 2e3
							},
							opacity: {
								type: "f",
								value: 1
							}
						},
						vertexShader: [n.ShaderChunk.common, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
						fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", n.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		float depth = gl_FragDepthEXT / gl_FragCoord.w;", "	#else", "		float depth = gl_FragCoord.z / gl_FragCoord.w;", "	#endif", "	float color = 1.0 - smoothstep( mNear, mFar, depth );", "	gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
					},
					normal: {
						uniforms: {
							opacity: {
								type: "f",
								value: 1
							}
						},
						vertexShader: ["varying vec3 vNormal;", n.ShaderChunk.common, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vNormal = normalize( normalMatrix * normal );", n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
						fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
					},
					cube: {
						uniforms: {
							tCube: {
								type: "t",
								value: null
							},
							tFlip: {
								type: "f",
								value: -1
							}
						},
						vertexShader: ["varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
						fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
					},
					equirect: {
						uniforms: {
							tEquirect: {
								type: "t",
								value: null
							},
							tFlip: {
								type: "f",
								value: -1
							}
						},
						vertexShader: ["varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
						fragmentShader: ["uniform sampler2D tEquirect;", "uniform float tFlip;", "varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "vec3 direction = normalize( vWorldPosition );", "vec2 sampleUV;", "sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );", "sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "gl_FragColor = texture2D( tEquirect, sampleUV );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
					},
					depthRGBA: {
						uniforms: {},
						vertexShader: [n.ShaderChunk.common, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.skinbase_vertex, n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
						fragmentShader: [n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {", "	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "	res -= res.xxyz * bit_mask;", "	return res;", "}", "void main() {", n.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );", "	#else", "		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "	#endif", "}"].join("\n")
					},
					distanceRGBA: {
						uniforms: {
							lightPos: {
								type: "v3",
								value: new n.Vector3(0, 0, 0)
							}
						},
						vertexShader: ["varying vec4 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, "void main() {", n.ShaderChunk.skinbase_vertex, n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.worldpos_vertex, "vWorldPosition = worldPosition;", "}"].join("\n"),
						fragmentShader: ["uniform vec3 lightPos;", "varying vec4 vWorldPosition;", n.ShaderChunk.common, "vec4 pack1K ( float depth ) {", "	depth /= 1000.0;", "	const vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = mod( depth * bitSh * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "	res -= res.xxyz * bitMsk;", "	return res; ", "}", "float unpack1K ( vec4 color ) {", "	const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );", "	return dot( color, bitSh ) * 1000.0;", "}", "void main () {", "	gl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );", "}"].join("\n")
					}
				}, n.WebGLRenderer = function(e) {
					function t() {
						return null === ye ? ke : 1
					}

					function r(e, t, r, i) {
						ae === !0 && (e *= i, t *= i, r *= i), qe.clearColor(e, t, r, i)
					}

					function i() {
						qe.init(), qe.scissor(_e.copy(Pe).multiplyScalar(ke)), qe.viewport(Ae.copy(Oe).multiplyScalar(ke)), r(Ce.r, Ce.g, Ce.b, Te)
					}

					function o() {
						ge = null, Me = null, we = "", be = -1, qe.reset()
					}

					function a(e) {
						e.preventDefault(), o(), i(), Xe.clear()
					}

					function s(e) {
						var t = e.target;
						t.removeEventListener("dispose", s), l(t), Be.textures--
					}

					function h(e) {
						var t = e.target;
						t.removeEventListener("dispose", h), u(t), Be.textures--
					}

					function c(e) {
						var t = e.target;
						t.removeEventListener("dispose", c), d(t)
					}

					function l(e) {
						var t = Xe.get(e);
						if (e.image && t.__image__webglTextureCube) ze.deleteTexture(t.__image__webglTextureCube);
						else {
							if (void 0 === t.__webglInit) return;
							ze.deleteTexture(t.__webglTexture)
						}
						Xe["delete"](e)
					}

					function u(e) {
						var t = Xe.get(e),
							r = Xe.get(e.texture);
						if (e && void 0 !== r.__webglTexture) {
							if (ze.deleteTexture(r.__webglTexture), e instanceof n.WebGLRenderTargetCube)
								for (var i = 0; 6 > i; i++) ze.deleteFramebuffer(t.__webglFramebuffer[i]), ze.deleteRenderbuffer(t.__webglDepthbuffer[i]);
							else ze.deleteFramebuffer(t.__webglFramebuffer), ze.deleteRenderbuffer(t.__webglDepthbuffer);
							Xe["delete"](e.texture), Xe["delete"](e)
						}
					}

					function d(e) {
						p(e), Xe["delete"](e)
					}

					function p(e) {
						var t = Xe.get(e).program;
						e.program = void 0, void 0 !== t && Qe.releaseProgram(t)
					}

					function f(e, t, r, i) {
						var o;
						if (r instanceof n.InstancedBufferGeometry && (o = He.get("ANGLE_instanced_arrays"), null === o)) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
						void 0 === i && (i = 0), qe.initAttributes();
						var a = r.attributes,
							s = t.getAttributes(),
							h = e.defaultAttributeValues;
						for (var c in s) {
							var l = s[c];
							if (l >= 0) {
								var u = a[c];
								if (void 0 !== u) {
									var d = u.itemSize,
										p = Ye.getAttributeBuffer(u);
									if (u instanceof n.InterleavedBufferAttribute) {
										var f = u.data,
											m = f.stride,
											v = u.offset;
										f instanceof n.InstancedInterleavedBuffer ? (qe.enableAttributeAndDivisor(l, f.meshPerAttribute, o), void 0 === r.maxInstancedCount && (r.maxInstancedCount = f.meshPerAttribute * f.count)) : qe.enableAttribute(l), ze.bindBuffer(ze.ARRAY_BUFFER, p), ze.vertexAttribPointer(l, d, ze.FLOAT, !1, m * f.array.BYTES_PER_ELEMENT, (i * m + v) * f.array.BYTES_PER_ELEMENT)
									} else u instanceof n.InstancedBufferAttribute ? (qe.enableAttributeAndDivisor(l, u.meshPerAttribute, o), void 0 === r.maxInstancedCount && (r.maxInstancedCount = u.meshPerAttribute * u.count)) : qe.enableAttribute(l), ze.bindBuffer(ze.ARRAY_BUFFER, p), ze.vertexAttribPointer(l, d, ze.FLOAT, !1, 0, i * d * 4)
								} else if (void 0 !== h) {
									var g = h[c];
									if (void 0 !== g) switch (g.length) {
										case 2:
											ze.vertexAttrib2fv(l, g);
											break;
										case 3:
											ze.vertexAttrib3fv(l, g);
											break;
										case 4:
											ze.vertexAttrib4fv(l, g);
											break;
										default:
											ze.vertexAttrib1fv(l, g)
									}
								}
							}
						}
						qe.disableUnusedAttributes()
					}

					function m(e, t) {
						return Math.abs(t[0]) - Math.abs(e[0])
					}

					function v(e, t) {
						return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
					}

					function g(e, t) {
						return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
					}

					function y(e, t, r, i, n) {
						var o, a;
						r.transparent ? (o = ue, a = ++de) : (o = ce, a = ++le);
						var s = o[a];
						void 0 !== s ? (s.id = e.id, s.object = e, s.geometry = t, s.material = r, s.z = Ve.z, s.group = n) : (s = {
							id: e.id,
							object: e,
							geometry: t,
							material: r,
							z: Ve.z,
							group: n
						}, o.push(s))
					}

					function x(e, t) {
						if (e.visible !== !1) {
							if (e.layers.test(t.layers))
								if (e instanceof n.Light) he.push(e);
								else if (e instanceof n.Sprite)(e.frustumCulled === !1 || Ie.intersectsObject(e) === !0) && fe.push(e);
							else if (e instanceof n.LensFlare) me.push(e);
							else if (e instanceof n.ImmediateRenderObject) ve.sortObjects === !0 && (Ve.setFromMatrixPosition(e.matrixWorld), Ve.applyProjection(Ne)), y(e, null, e.material, Ve.z, null);
							else if ((e instanceof n.Mesh || e instanceof n.Line || e instanceof n.Points) && (e instanceof n.SkinnedMesh && e.skeleton.update(), e.frustumCulled === !1 || Ie.intersectsObject(e) === !0)) {
								var r = e.material;
								if (r.visible === !0) {
									ve.sortObjects === !0 && (Ve.setFromMatrixPosition(e.matrixWorld), Ve.applyProjection(Ne));
									var i = Ye.update(e);
									if (r instanceof n.MultiMaterial)
										for (var o = i.groups, a = r.materials, s = 0, h = o.length; h > s; s++) {
											var c = o[s],
												l = a[c.materialIndex];
											l.visible === !0 && y(e, i, l, Ve.z, c)
										} else y(e, i, r, Ve.z, null)
								}
							}
							for (var u = e.children, s = 0, h = u.length; h > s; s++) x(u[s], t)
						}
					}

					function b(e, t, r, i) {
						for (var o = 0, a = e.length; a > o; o++) {
							var s = e[o],
								h = s.object,
								c = s.geometry,
								l = void 0 === i ? s.material : i,
								u = s.group;
							if (h.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, h.matrixWorld), h.normalMatrix.getNormalMatrix(h.modelViewMatrix), h instanceof n.ImmediateRenderObject) {
								M(l);
								var d = E(t, r, l, h);
								we = "", h.render(function(e) {
									ve.renderBufferImmediate(e, d, l)
								})
							} else ve.renderBufferDirect(t, r, c, l, h, u)
						}
					}

					function w(e, t, r) {
						var i = Xe.get(e),
							o = Qe.getParameters(e, Fe, t, r),
							a = Qe.getProgramCode(e, o),
							s = i.program,
							h = !0;
						if (void 0 === s) e.addEventListener("dispose", c);
						else if (s.code !== a) p(e);
						else {
							if (void 0 !== o.shaderID) return;
							h = !1
						}
						if (h) {
							if (o.shaderID) {
								var l = n.ShaderLib[o.shaderID];
								i.__webglShader = {
									name: e.type,
									uniforms: n.UniformsUtils.clone(l.uniforms),
									vertexShader: l.vertexShader,
									fragmentShader: l.fragmentShader
								}
							} else i.__webglShader = {
								name: e.type,
								uniforms: e.uniforms,
								vertexShader: e.vertexShader,
								fragmentShader: e.fragmentShader
							};
							e.__webglShader = i.__webglShader, s = Qe.acquireProgram(e, o, a), i.program = s, e.program = s
						}
						var u = s.getAttributes();
						if (e.morphTargets) {
							e.numSupportedMorphTargets = 0;
							for (var d = 0; d < ve.maxMorphTargets; d++) u["morphTarget" + d] >= 0 && e.numSupportedMorphTargets++
						}
						if (e.morphNormals) {
							e.numSupportedMorphNormals = 0;
							for (var d = 0; d < ve.maxMorphNormals; d++) u["morphNormal" + d] >= 0 && e.numSupportedMorphNormals++
						}
						i.uniformsList = [];
						var f = i.__webglShader.uniforms,
							m = i.program.getUniforms();
						for (var v in f) {
							var g = m[v];
							g && i.uniformsList.push([i.__webglShader.uniforms[v], g])
						}(e instanceof n.MeshPhongMaterial || e instanceof n.MeshLambertMaterial || e instanceof n.MeshStandardMaterial || e.lights) && (i.lightsHash = Fe.hash, f.ambientLightColor.value = Fe.ambient, f.directionalLights.value = Fe.directional, f.spotLights.value = Fe.spot, f.pointLights.value = Fe.point, f.hemisphereLights.value = Fe.hemi, f.directionalShadowMap.value = Fe.directionalShadowMap, f.directionalShadowMatrix.value = Fe.directionalShadowMatrix, f.spotShadowMap.value = Fe.spotShadowMap, f.spotShadowMatrix.value = Fe.spotShadowMatrix, f.pointShadowMap.value = Fe.pointShadowMap, f.pointShadowMatrix.value = Fe.pointShadowMatrix), i.hasDynamicUniforms = !1;
						for (var y = 0, x = i.uniformsList.length; x > y; y++) {
							var b = i.uniformsList[y][0];
							if (b.dynamic === !0) {
								i.hasDynamicUniforms = !0;
								break
							}
						}
					}

					function M(e) {
						_(e), e.transparent === !0 ? qe.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha) : qe.setBlending(n.NoBlending), qe.setDepthFunc(e.depthFunc), qe.setDepthTest(e.depthTest), qe.setDepthWrite(e.depthWrite), qe.setColorWrite(e.colorWrite), qe.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
					}

					function _(e) {
						e.side !== n.DoubleSide ? qe.enable(ze.CULL_FACE) : qe.disable(ze.CULL_FACE), qe.setFlipSided(e.side === n.BackSide)
					}

					function E(e, t, r, i) {
						Se = 0;
						var o = Xe.get(r);
						void 0 === o.program && (r.needsUpdate = !0), void 0 !== o.lightsHash && o.lightsHash !== Fe.hash && (r.needsUpdate = !0), r.needsUpdate && (w(r, t, i), r.needsUpdate = !1);
						var a = !1,
							s = !1,
							h = !1,
							c = o.program,
							l = c.getUniforms(),
							u = o.__webglShader.uniforms;
						if (c.id !== ge && (ze.useProgram(c.program), ge = c.id, a = !0, s = !0, h = !0), r.id !== be && (be = r.id, s = !0), (a || e !== Me) && (ze.uniformMatrix4fv(l.projectionMatrix, !1, e.projectionMatrix.elements), We.logarithmicDepthBuffer && ze.uniform1f(l.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)), e !== Me && (Me = e, s = !0, h = !0), (r instanceof n.ShaderMaterial || r instanceof n.MeshPhongMaterial || r instanceof n.MeshStandardMaterial || r.envMap) && void 0 !== l.cameraPosition && (Ve.setFromMatrixPosition(e.matrixWorld), ze.uniform3f(l.cameraPosition, Ve.x, Ve.y, Ve.z)), (r instanceof n.MeshPhongMaterial || r instanceof n.MeshLambertMaterial || r instanceof n.MeshBasicMaterial || r instanceof n.MeshStandardMaterial || r instanceof n.ShaderMaterial || r.skinning) && void 0 !== l.viewMatrix && ze.uniformMatrix4fv(l.viewMatrix, !1, e.matrixWorldInverse.elements)), r.skinning)
							if (i.bindMatrix && void 0 !== l.bindMatrix && ze.uniformMatrix4fv(l.bindMatrix, !1, i.bindMatrix.elements), i.bindMatrixInverse && void 0 !== l.bindMatrixInverse && ze.uniformMatrix4fv(l.bindMatrixInverse, !1, i.bindMatrixInverse.elements), We.floatVertexTextures && i.skeleton && i.skeleton.useVertexTexture) {
								if (void 0 !== l.boneTexture) {
									var d = N();
									ze.uniform1i(l.boneTexture, d), ve.setTexture(i.skeleton.boneTexture, d);
								}
								void 0 !== l.boneTextureWidth && ze.uniform1i(l.boneTextureWidth, i.skeleton.boneTextureWidth), void 0 !== l.boneTextureHeight && ze.uniform1i(l.boneTextureHeight, i.skeleton.boneTextureHeight)
							} else i.skeleton && i.skeleton.boneMatrices && void 0 !== l.boneGlobalMatrices && ze.uniformMatrix4fv(l.boneGlobalMatrices, !1, i.skeleton.boneMatrices);
						return s && ((r instanceof n.MeshPhongMaterial || r instanceof n.MeshLambertMaterial || r instanceof n.MeshStandardMaterial || r.lights) && O(u, h), t && r.fog && R(u, t), (r instanceof n.MeshBasicMaterial || r instanceof n.MeshLambertMaterial || r instanceof n.MeshPhongMaterial || r instanceof n.MeshStandardMaterial) && S(u, r), r instanceof n.LineBasicMaterial ? C(u, r) : r instanceof n.LineDashedMaterial ? (C(u, r), T(u, r)) : r instanceof n.PointsMaterial ? L(u, r) : r instanceof n.MeshLambertMaterial ? k(u, r) : r instanceof n.MeshPhongMaterial ? P(u, r) : r instanceof n.MeshStandardMaterial ? D(u, r) : r instanceof n.MeshDepthMaterial ? (u.mNear.value = e.near, u.mFar.value = e.far, u.opacity.value = r.opacity) : r instanceof n.MeshNormalMaterial && (u.opacity.value = r.opacity), V(o.uniformsList)), I(l, i), void 0 !== l.modelMatrix && ze.uniformMatrix4fv(l.modelMatrix, !1, i.matrixWorld.elements), o.hasDynamicUniforms === !0 && A(o.uniformsList, i, e), c
					}

					function A(e, t, r) {
						for (var i = [], n = 0, o = e.length; o > n; n++) {
							var a = e[n][0],
								s = a.onUpdateCallback;
							void 0 !== s && (s.bind(a)(t, r), i.push(e[n]))
						}
						V(i)
					}

					function S(e, t) {
						e.opacity.value = t.opacity, e.diffuse.value = t.color, t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity), e.map.value = t.map, e.specularMap.value = t.specularMap, e.alphaMap.value = t.alphaMap, t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity);
						var r;
						if (t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.displacementMap ? r = t.displacementMap : t.normalMap ? r = t.normalMap : t.bumpMap ? r = t.bumpMap : t.roughnessMap ? r = t.roughnessMap : t.metalnessMap ? r = t.metalnessMap : t.alphaMap ? r = t.alphaMap : t.emissiveMap && (r = t.emissiveMap), void 0 !== r) {
							r instanceof n.WebGLRenderTarget && (r = r.texture);
							var i = r.offset,
								o = r.repeat;
							e.offsetRepeat.value.set(i.x, i.y, o.x, o.y)
						}
						e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof n.WebGLRenderTargetCube ? 1 : -1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio
					}

					function C(e, t) {
						e.diffuse.value = t.color, e.opacity.value = t.opacity
					}

					function T(e, t) {
						e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
					}

					function L(e, t) {
						if (e.diffuse.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size * ke, e.scale.value = ee.clientHeight / 2, e.map.value = t.map, null !== t.map) {
							var r = t.map.offset,
								i = t.map.repeat;
							e.offsetRepeat.value.set(r.x, r.y, i.x, i.y)
						}
					}

					function R(e, t) {
						e.fogColor.value = t.color, t instanceof n.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof n.FogExp2 && (e.fogDensity.value = t.density)
					}

					function k(e, t) {
						t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
					}

					function P(e, t) {
						e.specular.value = t.specular, e.shininess.value = Math.max(t.shininess, 1e-4), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
					}

					function D(e, t) {
						e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
					}

					function O(e, t) {
						e.ambientLightColor.needsUpdate = t, e.directionalLights.needsUpdate = t, e.pointLights.needsUpdate = t, e.spotLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t
					}

					function I(e, t) {
						ze.uniformMatrix4fv(e.modelViewMatrix, !1, t.modelViewMatrix.elements), e.normalMatrix && ze.uniformMatrix3fv(e.normalMatrix, !1, t.normalMatrix.elements)
					}

					function N() {
						var e = Se;
						return e >= We.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + We.maxTextures), Se += 1, e
					}

					function V(e) {
						for (var t, r, i = 0, o = e.length; o > i; i++) {
							var a = e[i][0];
							if (a.needsUpdate !== !1) {
								var s = a.type,
									h = a.value,
									c = e[i][1];
								switch (s) {
									case "1i":
										ze.uniform1i(c, h);
										break;
									case "1f":
										ze.uniform1f(c, h);
										break;
									case "2f":
										ze.uniform2f(c, h[0], h[1]);
										break;
									case "3f":
										ze.uniform3f(c, h[0], h[1], h[2]);
										break;
									case "4f":
										ze.uniform4f(c, h[0], h[1], h[2], h[3]);
										break;
									case "1iv":
										ze.uniform1iv(c, h);
										break;
									case "3iv":
										ze.uniform3iv(c, h);
										break;
									case "1fv":
										ze.uniform1fv(c, h);
										break;
									case "2fv":
										ze.uniform2fv(c, h);
										break;
									case "3fv":
										ze.uniform3fv(c, h);
										break;
									case "4fv":
										ze.uniform4fv(c, h);
										break;
									case "Matrix2fv":
										ze.uniformMatrix2fv(c, !1, h);
										break;
									case "Matrix3fv":
										ze.uniformMatrix3fv(c, !1, h);
										break;
									case "Matrix4fv":
										ze.uniformMatrix4fv(c, !1, h);
										break;
									case "i":
										ze.uniform1i(c, h);
										break;
									case "f":
										ze.uniform1f(c, h);
										break;
									case "v2":
										ze.uniform2f(c, h.x, h.y);
										break;
									case "v3":
										ze.uniform3f(c, h.x, h.y, h.z);
										break;
									case "v4":
										ze.uniform4f(c, h.x, h.y, h.z, h.w);
										break;
									case "c":
										ze.uniform3f(c, h.r, h.g, h.b);
										break;
									case "sa":
										for (var l = 0; l < h.length; l++)
											for (var u in a.properties) {
												var d = a.properties[u],
													p = c[l][u],
													f = h[l][u];
												switch (d.type) {
													case "i":
														ze.uniform1i(p, f);
														break;
													case "f":
														ze.uniform1f(p, f);
														break;
													case "v2":
														ze.uniform2f(p, f.x, f.y);
														break;
													case "v3":
														ze.uniform3f(p, f.x, f.y, f.z);
														break;
													case "v4":
														ze.uniform4f(p, f.x, f.y, f.z, f.w);
														break;
													case "c":
														ze.uniform3f(p, f.r, f.g, f.b);
														break;
													case "m4":
														ze.uniformMatrix4fv(p, !1, f.elements)
												}
											}
										break;
									case "iv1":
										ze.uniform1iv(c, h);
										break;
									case "iv":
										ze.uniform3iv(c, h);
										break;
									case "fv1":
										ze.uniform1fv(c, h);
										break;
									case "fv":
										ze.uniform3fv(c, h);
										break;
									case "v2v":
										void 0 === a._array && (a._array = new Float32Array(2 * h.length));
										for (var l = 0, m = 0, v = h.length; v > l; l++, m += 2) a._array[m + 0] = h[l].x, a._array[m + 1] = h[l].y;
										ze.uniform2fv(c, a._array);
										break;
									case "v3v":
										void 0 === a._array && (a._array = new Float32Array(3 * h.length));
										for (var l = 0, g = 0, v = h.length; v > l; l++, g += 3) a._array[g + 0] = h[l].x, a._array[g + 1] = h[l].y, a._array[g + 2] = h[l].z;
										ze.uniform3fv(c, a._array);
										break;
									case "v4v":
										void 0 === a._array && (a._array = new Float32Array(4 * h.length));
										for (var l = 0, y = 0, v = h.length; v > l; l++, y += 4) a._array[y + 0] = h[l].x, a._array[y + 1] = h[l].y, a._array[y + 2] = h[l].z, a._array[y + 3] = h[l].w;
										ze.uniform4fv(c, a._array);
										break;
									case "m2":
										ze.uniformMatrix2fv(c, !1, h.elements);
										break;
									case "m3":
										ze.uniformMatrix3fv(c, !1, h.elements);
										break;
									case "m3v":
										void 0 === a._array && (a._array = new Float32Array(9 * h.length));
										for (var l = 0, v = h.length; v > l; l++) h[l].flattenToArrayOffset(a._array, 9 * l);
										ze.uniformMatrix3fv(c, !1, a._array);
										break;
									case "m4":
										ze.uniformMatrix4fv(c, !1, h.elements);
										break;
									case "m4v":
										void 0 === a._array && (a._array = new Float32Array(16 * h.length));
										for (var l = 0, v = h.length; v > l; l++) h[l].flattenToArrayOffset(a._array, 16 * l);
										ze.uniformMatrix4fv(c, !1, a._array);
										break;
									case "t":
										if (t = h, r = N(), ze.uniform1i(c, r), !t) continue;
										t instanceof n.CubeTexture || Array.isArray(t.image) && 6 === t.image.length ? W(t, r) : t instanceof n.WebGLRenderTargetCube ? q(t.texture, r) : t instanceof n.WebGLRenderTarget ? ve.setTexture(t.texture, r) : ve.setTexture(t, r);
										break;
									case "tv":
										void 0 === a._array && (a._array = []);
										for (var l = 0, v = a.value.length; v > l; l++) a._array[l] = N();
										ze.uniform1iv(c, a._array);
										for (var l = 0, v = a.value.length; v > l; l++) t = a.value[l], r = a._array[l], t && (t instanceof n.CubeTexture || t.image instanceof Array && 6 === t.image.length ? W(t, r) : t instanceof n.WebGLRenderTarget ? ve.setTexture(t.texture, r) : t instanceof n.WebGLRenderTargetCube ? q(t.texture, r) : ve.setTexture(t, r));
										break;
									default:
										console.warn("THREE.WebGLRenderer: Unknown uniform type: " + s)
								}
							}
						}
					}

					function F(e, t) {
						var r, i, o, a, s, h, c = 0,
							l = 0,
							u = 0,
							d = t.matrixWorldInverse,
							p = 0,
							f = 0,
							m = 0,
							v = 0,
							g = 0;
						for (Fe.shadowsPointLight = 0, r = 0, i = e.length; i > r; r++)
							if (o = e[r], a = o.color, s = o.intensity, h = o.distance, o instanceof n.AmbientLight) c += a.r * s, l += a.g * s, u += a.b * s;
							else if (o instanceof n.DirectionalLight) {
							var y = Ke.get(o);
							y.color.copy(o.color).multiplyScalar(o.intensity), y.direction.setFromMatrixPosition(o.matrixWorld), Ve.setFromMatrixPosition(o.target.matrixWorld), y.direction.sub(Ve), y.direction.transformDirection(d), y.shadow = o.castShadow, o.castShadow && (y.shadowBias = o.shadow.bias, y.shadowRadius = o.shadow.radius, y.shadowMapSize = o.shadow.mapSize, Fe.shadows[g++] = o), Fe.directionalShadowMap[p] = o.shadow.map, Fe.directionalShadowMatrix[p] = o.shadow.matrix, Fe.directional[p++] = y
						} else if (o instanceof n.SpotLight) {
							var y = Ke.get(o);
							y.position.setFromMatrixPosition(o.matrixWorld), y.position.applyMatrix4(d), y.color.copy(a).multiplyScalar(s), y.distance = h, y.direction.setFromMatrixPosition(o.matrixWorld), Ve.setFromMatrixPosition(o.target.matrixWorld), y.direction.sub(Ve), y.direction.transformDirection(d), y.angleCos = Math.cos(o.angle), y.exponent = o.exponent, y.decay = 0 === o.distance ? 0 : o.decay, y.shadow = o.castShadow, o.castShadow && (y.shadowBias = o.shadow.bias, y.shadowRadius = o.shadow.radius, y.shadowMapSize = o.shadow.mapSize, Fe.shadows[g++] = o), Fe.spotShadowMap[m] = o.shadow.map, Fe.spotShadowMatrix[m] = o.shadow.matrix, Fe.spot[m++] = y
						} else if (o instanceof n.PointLight) {
							var y = Ke.get(o);
							y.position.setFromMatrixPosition(o.matrixWorld), y.position.applyMatrix4(d), y.color.copy(o.color).multiplyScalar(o.intensity), y.distance = o.distance, y.decay = 0 === o.distance ? 0 : o.decay, y.shadow = o.castShadow, o.castShadow && (y.shadowBias = o.shadow.bias, y.shadowRadius = o.shadow.radius, y.shadowMapSize = o.shadow.mapSize, Fe.shadows[g++] = o), Fe.pointShadowMap[f] = o.shadow.map, void 0 === Fe.pointShadowMatrix[f] && (Fe.pointShadowMatrix[f] = new n.Matrix4), Ve.setFromMatrixPosition(o.matrixWorld).negate(), Fe.pointShadowMatrix[f].identity().setPosition(Ve), Fe.point[f++] = y
						} else if (o instanceof n.HemisphereLight) {
							var y = Ke.get(o);
							y.direction.setFromMatrixPosition(o.matrixWorld), y.direction.transformDirection(d), y.direction.normalize(), y.skyColor.copy(o.color).multiplyScalar(s), y.groundColor.copy(o.groundColor).multiplyScalar(s), Fe.hemi[v++] = y
						}
						Fe.ambient[0] = c, Fe.ambient[1] = l, Fe.ambient[2] = u, Fe.directional.length = p, Fe.spot.length = m, Fe.point.length = f, Fe.hemi.length = v, Fe.shadows.length = g, Fe.hash = p + "," + f + "," + m + "," + v + "," + g
					}

					function B(e, t, r) {
						var i;
						if (r ? (ze.texParameteri(e, ze.TEXTURE_WRAP_S, $(t.wrapS)), ze.texParameteri(e, ze.TEXTURE_WRAP_T, $(t.wrapT)), ze.texParameteri(e, ze.TEXTURE_MAG_FILTER, $(t.magFilter)), ze.texParameteri(e, ze.TEXTURE_MIN_FILTER, $(t.minFilter))) : (ze.texParameteri(e, ze.TEXTURE_WRAP_S, ze.CLAMP_TO_EDGE), ze.texParameteri(e, ze.TEXTURE_WRAP_T, ze.CLAMP_TO_EDGE), (t.wrapS !== n.ClampToEdgeWrapping || t.wrapT !== n.ClampToEdgeWrapping) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", t), ze.texParameteri(e, ze.TEXTURE_MAG_FILTER, J(t.magFilter)), ze.texParameteri(e, ze.TEXTURE_MIN_FILTER, J(t.minFilter)), t.minFilter !== n.NearestFilter && t.minFilter !== n.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", t)), i = He.get("EXT_texture_filter_anisotropic")) {
							if (t.type === n.FloatType && null === He.get("OES_texture_float_linear")) return;
							if (t.type === n.HalfFloatType && null === He.get("OES_texture_half_float_linear")) return;
							(t.anisotropy > 1 || Xe.get(t).__currentAnisotropy) && (ze.texParameterf(e, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, ve.getMaxAnisotropy())), Xe.get(t).__currentAnisotropy = t.anisotropy)
						}
					}

					function U(e, t, r) {
						void 0 === e.__webglInit && (e.__webglInit = !0, t.addEventListener("dispose", s), e.__webglTexture = ze.createTexture(), Be.textures++), qe.activeTexture(ze.TEXTURE0 + r), qe.bindTexture(ze.TEXTURE_2D, e.__webglTexture), ze.pixelStorei(ze.UNPACK_FLIP_Y_WEBGL, t.flipY), ze.pixelStorei(ze.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), ze.pixelStorei(ze.UNPACK_ALIGNMENT, t.unpackAlignment);
						var i = z(t.image, We.maxTextureSize);
						G(t) && j(i) === !1 && (i = H(i));
						var o = j(i),
							a = $(t.format),
							h = $(t.type);
						B(ze.TEXTURE_2D, t, o);
						var c, l = t.mipmaps;
						if (t instanceof n.DataTexture)
							if (l.length > 0 && o) {
								for (var u = 0, d = l.length; d > u; u++) c = l[u], qe.texImage2D(ze.TEXTURE_2D, u, a, c.width, c.height, 0, a, h, c.data);
								t.generateMipmaps = !1
							} else qe.texImage2D(ze.TEXTURE_2D, 0, a, i.width, i.height, 0, a, h, i.data);
						else if (t instanceof n.CompressedTexture)
							for (var u = 0, d = l.length; d > u; u++) c = l[u], t.format !== n.RGBAFormat && t.format !== n.RGBFormat ? qe.getCompressedTextureFormats().indexOf(a) > -1 ? qe.compressedTexImage2D(ze.TEXTURE_2D, u, a, c.width, c.height, 0, c.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe.texImage2D(ze.TEXTURE_2D, u, a, c.width, c.height, 0, a, h, c.data);
						else if (l.length > 0 && o) {
							for (var u = 0, d = l.length; d > u; u++) c = l[u], qe.texImage2D(ze.TEXTURE_2D, u, a, a, h, c);
							t.generateMipmaps = !1
						} else qe.texImage2D(ze.TEXTURE_2D, 0, a, a, h, i);
						t.generateMipmaps && o && ze.generateMipmap(ze.TEXTURE_2D), e.__version = t.version, t.onUpdate && t.onUpdate(t)
					}

					function z(e, t) {
						if (e.width > t || e.height > t) {
							var r = t / Math.max(e.width, e.height),
								i = document.createElement("canvas");
							i.width = Math.floor(e.width * r), i.height = Math.floor(e.height * r);
							var n = i.getContext("2d");
							return n.drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height, e), i
						}
						return e
					}

					function j(e) {
						return n.Math.isPowerOfTwo(e.width) && n.Math.isPowerOfTwo(e.height)
					}

					function G(e) {
						return e.wrapS !== n.ClampToEdgeWrapping || e.wrapT !== n.ClampToEdgeWrapping ? !0 : e.minFilter !== n.NearestFilter && e.minFilter !== n.LinearFilter ? !0 : !1
					}

					function H(e) {
						if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
							var t = document.createElement("canvas");
							t.width = n.Math.nearestPowerOfTwo(e.width), t.height = n.Math.nearestPowerOfTwo(e.height);
							var r = t.getContext("2d");
							return r.drawImage(e, 0, 0, t.width, t.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e), t
						}
						return e
					}

					function W(e, t) {
						var r = Xe.get(e);
						if (6 === e.image.length)
							if (e.version > 0 && r.__version !== e.version) {
								r.__image__webglTextureCube || (e.addEventListener("dispose", s), r.__image__webglTextureCube = ze.createTexture(), Be.textures++), qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_CUBE_MAP, r.__image__webglTextureCube), ze.pixelStorei(ze.UNPACK_FLIP_Y_WEBGL, e.flipY);
								for (var i = e instanceof n.CompressedTexture, o = e.image[0] instanceof n.DataTexture, a = [], h = 0; 6 > h; h++) a[h] = !ve.autoScaleCubemaps || i || o ? o ? e.image[h].image : e.image[h] : z(e.image[h], We.maxCubemapSize);
								var c = a[0],
									l = j(c),
									u = $(e.format),
									d = $(e.type);
								B(ze.TEXTURE_CUBE_MAP, e, l);
								for (var h = 0; 6 > h; h++)
									if (i)
										for (var p, f = a[h].mipmaps, m = 0, v = f.length; v > m; m++) p = f[m], e.format !== n.RGBAFormat && e.format !== n.RGBFormat ? qe.getCompressedTextureFormats().indexOf(u) > -1 ? qe.compressedTexImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + h, m, u, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : qe.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + h, m, u, p.width, p.height, 0, u, d, p.data);
									else o ? qe.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, u, a[h].width, a[h].height, 0, u, d, a[h].data) : qe.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, u, u, d, a[h]);
								e.generateMipmaps && l && ze.generateMipmap(ze.TEXTURE_CUBE_MAP), r.__version = e.version, e.onUpdate && e.onUpdate(e)
							} else qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_CUBE_MAP, r.__image__webglTextureCube)
					}

					function q(e, t) {
						qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_CUBE_MAP, Xe.get(e).__webglTexture)
					}

					function X(e, t, r, i) {
						var n = $(t.texture.format),
							o = $(t.texture.type);
						qe.texImage2D(i, 0, n, t.width, t.height, 0, n, o, null), ze.bindFramebuffer(ze.FRAMEBUFFER, e), ze.framebufferTexture2D(ze.FRAMEBUFFER, r, i, Xe.get(t.texture).__webglTexture, 0), ze.bindFramebuffer(ze.FRAMEBUFFER, null)
					}

					function Y(e, t) {
						ze.bindRenderbuffer(ze.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (ze.renderbufferStorage(ze.RENDERBUFFER, ze.DEPTH_COMPONENT16, t.width, t.height), ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_ATTACHMENT, ze.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (ze.renderbufferStorage(ze.RENDERBUFFER, ze.DEPTH_STENCIL, t.width, t.height), ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_STENCIL_ATTACHMENT, ze.RENDERBUFFER, e)) : ze.renderbufferStorage(ze.RENDERBUFFER, ze.RGBA4, t.width, t.height), ze.bindRenderbuffer(ze.RENDERBUFFER, null)
					}

					function Q(e) {
						var t = Xe.get(e),
							r = e instanceof n.WebGLRenderTargetCube;
						if (r) {
							t.__webglDepthbuffer = [];
							for (var i = 0; 6 > i; i++) ze.bindFramebuffer(ze.FRAMEBUFFER, t.__webglFramebuffer[i]), t.__webglDepthbuffer[i] = ze.createRenderbuffer(), Y(t.__webglDepthbuffer[i], e)
						} else ze.bindFramebuffer(ze.FRAMEBUFFER, t.__webglFramebuffer), t.__webglDepthbuffer = ze.createRenderbuffer(), Y(t.__webglDepthbuffer, e);
						ze.bindFramebuffer(ze.FRAMEBUFFER, null)
					}

					function K(e) {
						var t = Xe.get(e),
							r = Xe.get(e.texture);
						e.addEventListener("dispose", h), r.__webglTexture = ze.createTexture(), Be.textures++;
						var i = e instanceof n.WebGLRenderTargetCube,
							o = n.Math.isPowerOfTwo(e.width) && n.Math.isPowerOfTwo(e.height);
						if (i) {
							t.__webglFramebuffer = [];
							for (var a = 0; 6 > a; a++) t.__webglFramebuffer[a] = ze.createFramebuffer()
						} else t.__webglFramebuffer = ze.createFramebuffer();
						if (i) {
							qe.bindTexture(ze.TEXTURE_CUBE_MAP, r.__webglTexture), B(ze.TEXTURE_CUBE_MAP, e.texture, o);
							for (var a = 0; 6 > a; a++) X(t.__webglFramebuffer[a], e, ze.COLOR_ATTACHMENT0, ze.TEXTURE_CUBE_MAP_POSITIVE_X + a);
							e.texture.generateMipmaps && o && ze.generateMipmap(ze.TEXTURE_CUBE_MAP), qe.bindTexture(ze.TEXTURE_CUBE_MAP, null)
						} else qe.bindTexture(ze.TEXTURE_2D, r.__webglTexture), B(ze.TEXTURE_2D, e.texture, o), X(t.__webglFramebuffer, e, ze.COLOR_ATTACHMENT0, ze.TEXTURE_2D), e.texture.generateMipmaps && o && ze.generateMipmap(ze.TEXTURE_2D), qe.bindTexture(ze.TEXTURE_2D, null);
						e.depthBuffer && Q(e)
					}

					function Z(e) {
						var t = e instanceof n.WebGLRenderTargetCube ? ze.TEXTURE_CUBE_MAP : ze.TEXTURE_2D,
							r = Xe.get(e.texture).__webglTexture;
						qe.bindTexture(t, r), ze.generateMipmap(t), qe.bindTexture(t, null)
					}

					function J(e) {
						return e === n.NearestFilter || e === n.NearestMipMapNearestFilter || e === n.NearestMipMapLinearFilter ? ze.NEAREST : ze.LINEAR
					}

					function $(e) {
						var t;
						if (e === n.RepeatWrapping) return ze.REPEAT;
						if (e === n.ClampToEdgeWrapping) return ze.CLAMP_TO_EDGE;
						if (e === n.MirroredRepeatWrapping) return ze.MIRRORED_REPEAT;
						if (e === n.NearestFilter) return ze.NEAREST;
						if (e === n.NearestMipMapNearestFilter) return ze.NEAREST_MIPMAP_NEAREST;
						if (e === n.NearestMipMapLinearFilter) return ze.NEAREST_MIPMAP_LINEAR;
						if (e === n.LinearFilter) return ze.LINEAR;
						if (e === n.LinearMipMapNearestFilter) return ze.LINEAR_MIPMAP_NEAREST;
						if (e === n.LinearMipMapLinearFilter) return ze.LINEAR_MIPMAP_LINEAR;
						if (e === n.UnsignedByteType) return ze.UNSIGNED_BYTE;
						if (e === n.UnsignedShort4444Type) return ze.UNSIGNED_SHORT_4_4_4_4;
						if (e === n.UnsignedShort5551Type) return ze.UNSIGNED_SHORT_5_5_5_1;
						if (e === n.UnsignedShort565Type) return ze.UNSIGNED_SHORT_5_6_5;
						if (e === n.ByteType) return ze.BYTE;
						if (e === n.ShortType) return ze.SHORT;
						if (e === n.UnsignedShortType) return ze.UNSIGNED_SHORT;
						if (e === n.IntType) return ze.INT;
						if (e === n.UnsignedIntType) return ze.UNSIGNED_INT;
						if (e === n.FloatType) return ze.FLOAT;
						if (t = He.get("OES_texture_half_float"), null !== t && e === n.HalfFloatType) return t.HALF_FLOAT_OES;
						if (e === n.AlphaFormat) return ze.ALPHA;
						if (e === n.RGBFormat) return ze.RGB;
						if (e === n.RGBAFormat) return ze.RGBA;
						if (e === n.LuminanceFormat) return ze.LUMINANCE;
						if (e === n.LuminanceAlphaFormat) return ze.LUMINANCE_ALPHA;
						if (e === n.AddEquation) return ze.FUNC_ADD;
						if (e === n.SubtractEquation) return ze.FUNC_SUBTRACT;
						if (e === n.ReverseSubtractEquation) return ze.FUNC_REVERSE_SUBTRACT;
						if (e === n.ZeroFactor) return ze.ZERO;
						if (e === n.OneFactor) return ze.ONE;
						if (e === n.SrcColorFactor) return ze.SRC_COLOR;
						if (e === n.OneMinusSrcColorFactor) return ze.ONE_MINUS_SRC_COLOR;
						if (e === n.SrcAlphaFactor) return ze.SRC_ALPHA;
						if (e === n.OneMinusSrcAlphaFactor) return ze.ONE_MINUS_SRC_ALPHA;
						if (e === n.DstAlphaFactor) return ze.DST_ALPHA;
						if (e === n.OneMinusDstAlphaFactor) return ze.ONE_MINUS_DST_ALPHA;
						if (e === n.DstColorFactor) return ze.DST_COLOR;
						if (e === n.OneMinusDstColorFactor) return ze.ONE_MINUS_DST_COLOR;
						if (e === n.SrcAlphaSaturateFactor) return ze.SRC_ALPHA_SATURATE;
						if (t = He.get("WEBGL_compressed_texture_s3tc"), null !== t) {
							if (e === n.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
							if (e === n.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
							if (e === n.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
							if (e === n.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
						}
						if (t = He.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
							if (e === n.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
							if (e === n.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
							if (e === n.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
							if (e === n.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
						}
						if (t = He.get("WEBGL_compressed_texture_etc1"), null !== t && e === n.RGB_ETC1_Format) return t.COMPRESSED_RGB_ETC1_WEBGL;
						if (t = He.get("EXT_blend_minmax"), null !== t) {
							if (e === n.MinEquation) return t.MIN_EXT;
							if (e === n.MaxEquation) return t.MAX_EXT
						}
						return 0
					}
					console.log("THREE.WebGLRenderer", n.REVISION), e = e || {};
					var ee = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
						te = void 0 !== e.context ? e.context : null,
						re = void 0 !== e.alpha ? e.alpha : !1,
						ie = void 0 !== e.depth ? e.depth : !0,
						ne = void 0 !== e.stencil ? e.stencil : !0,
						oe = void 0 !== e.antialias ? e.antialias : !1,
						ae = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
						se = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
						he = [],
						ce = [],
						le = -1,
						ue = [],
						de = -1,
						pe = new Float32Array(8),
						fe = [],
						me = [];
					this.domElement = ee, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0;
					var ve = this,
						ge = null,
						ye = null,
						xe = null,
						be = -1,
						we = "",
						Me = null,
						_e = new n.Vector4,
						Ee = null,
						Ae = new n.Vector4,
						Se = 0,
						Ce = new n.Color(0),
						Te = 0,
						Le = ee.width,
						Re = ee.height,
						ke = 1,
						Pe = new n.Vector4(0, 0, Le, Re),
						De = !1,
						Oe = new n.Vector4(0, 0, Le, Re),
						Ie = new n.Frustum,
						Ne = new n.Matrix4,
						Ve = new n.Vector3,
						Fe = {
							hash: "",
							ambient: [0, 0, 0],
							directional: [],
							directionalShadowMap: [],
							directionalShadowMatrix: [],
							spot: [],
							spotShadowMap: [],
							spotShadowMatrix: [],
							point: [],
							pointShadowMap: [],
							pointShadowMatrix: [],
							hemi: [],
							shadows: [],
							shadowsPointLight: 0
						},
						Be = {
							geometries: 0,
							textures: 0
						},
						Ue = {
							calls: 0,
							vertices: 0,
							faces: 0,
							points: 0
						};
					this.info = {
						render: Ue,
						memory: Be,
						programs: null
					};
					var ze;
					try {
						var je = {
							alpha: re,
							depth: ie,
							stencil: ne,
							antialias: oe,
							premultipliedAlpha: ae,
							preserveDrawingBuffer: se
						};
						if (ze = te || ee.getContext("webgl", je) || ee.getContext("experimental-webgl", je), null === ze) throw null !== ee.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
						ee.addEventListener("webglcontextlost", a, !1)
					} catch (Ge) {
						console.error("THREE.WebGLRenderer: " + Ge)
					}
					var He = new n.WebGLExtensions(ze);
					He.get("OES_texture_float"), He.get("OES_texture_float_linear"), He.get("OES_texture_half_float"), He.get("OES_texture_half_float_linear"), He.get("OES_standard_derivatives"), He.get("ANGLE_instanced_arrays"), He.get("OES_element_index_uint") && (n.BufferGeometry.MaxIndex = 4294967296);
					var We = new n.WebGLCapabilities(ze, He, e),
						qe = new n.WebGLState(ze, He, $),
						Xe = new n.WebGLProperties,
						Ye = new n.WebGLObjects(ze, Xe, this.info),
						Qe = new n.WebGLPrograms(this, We),
						Ke = new n.WebGLLights;
					this.info.programs = Qe.programs;
					var Ze = new n.WebGLBufferRenderer(ze, He, Ue),
						Je = new n.WebGLIndexedBufferRenderer(ze, He, Ue);
					i(), this.context = ze, this.capabilities = We, this.extensions = He, this.properties = Xe, this.state = qe;
					var $e = new n.WebGLShadowMap(this, Fe, Ye);
					this.shadowMap = $e;
					var et = new n.SpritePlugin(this, fe),
						tt = new n.LensFlarePlugin(this, me);
					this.getContext = function() {
						return ze
					}, this.getContextAttributes = function() {
						return ze.getContextAttributes()
					}, this.forceContextLoss = function() {
						He.get("WEBGL_lose_context").loseContext()
					}, this.getMaxAnisotropy = function() {
						var e;
						return function() {
							if (void 0 !== e) return e;
							var t = He.get("EXT_texture_filter_anisotropic");
							return e = null !== t ? ze.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
						}
					}(), this.getPrecision = function() {
						return We.precision
					}, this.getPixelRatio = function() {
						return ke
					}, this.setPixelRatio = function(e) {
						void 0 !== e && (ke = e, this.setSize(Oe.z, Oe.w, !1))
					}, this.getSize = function() {
						return {
							width: Le,
							height: Re
						}
					}, this.setSize = function(e, t, r) {
						Le = e, Re = t, ee.width = e * ke, ee.height = t * ke, r !== !1 && (ee.style.width = e + "px", ee.style.height = t + "px"), this.setViewport(0, 0, e, t)
					}, this.setViewport = function(e, t, r, i) {
						qe.viewport(Oe.set(e, t, r, i))
					}, this.setScissor = function(e, t, r, i) {
						qe.scissor(Pe.set(e, t, r, i))
					}, this.setScissorTest = function(e) {
						qe.setScissorTest(De = e)
					}, this.getClearColor = function() {
						return Ce
					}, this.setClearColor = function(e, t) {
						Ce.set(e), Te = void 0 !== t ? t : 1, r(Ce.r, Ce.g, Ce.b, Te)
					}, this.getClearAlpha = function() {
						return Te
					}, this.setClearAlpha = function(e) {
						Te = e, r(Ce.r, Ce.g, Ce.b, Te)
					}, this.clear = function(e, t, r) {
						var i = 0;
						(void 0 === e || e) && (i |= ze.COLOR_BUFFER_BIT), (void 0 === t || t) && (i |= ze.DEPTH_BUFFER_BIT), (void 0 === r || r) && (i |= ze.STENCIL_BUFFER_BIT), ze.clear(i)
					}, this.clearColor = function() {
						this.clear(!0, !1, !1)
					}, this.clearDepth = function() {
						this.clear(!1, !0, !1)
					}, this.clearStencil = function() {
						this.clear(!1, !1, !0)
					}, this.clearTarget = function(e, t, r, i) {
						this.setRenderTarget(e), this.clear(t, r, i)
					}, this.resetGLState = o, this.dispose = function() {
						ee.removeEventListener("webglcontextlost", a, !1)
					}, this.renderBufferImmediate = function(e, t, r) {
						qe.initAttributes();
						var i = Xe.get(e);
						e.hasPositions && !i.position && (i.position = ze.createBuffer()), e.hasNormals && !i.normal && (i.normal = ze.createBuffer()), e.hasUvs && !i.uv && (i.uv = ze.createBuffer()), e.hasColors && !i.color && (i.color = ze.createBuffer());
						var o = t.getAttributes();
						if (e.hasPositions && (ze.bindBuffer(ze.ARRAY_BUFFER, i.position), ze.bufferData(ze.ARRAY_BUFFER, e.positionArray, ze.DYNAMIC_DRAW), qe.enableAttribute(o.position), ze.vertexAttribPointer(o.position, 3, ze.FLOAT, !1, 0, 0)), e.hasNormals) {
							if (ze.bindBuffer(ze.ARRAY_BUFFER, i.normal), "MeshPhongMaterial" !== r.type && "MeshStandardMaterial" !== r.type && r.shading === n.FlatShading)
								for (var a = 0, s = 3 * e.count; s > a; a += 9) {
									var h = e.normalArray,
										c = (h[a + 0] + h[a + 3] + h[a + 6]) / 3,
										l = (h[a + 1] + h[a + 4] + h[a + 7]) / 3,
										u = (h[a + 2] + h[a + 5] + h[a + 8]) / 3;
									h[a + 0] = c, h[a + 1] = l, h[a + 2] = u, h[a + 3] = c, h[a + 4] = l, h[a + 5] = u, h[a + 6] = c, h[a + 7] = l, h[a + 8] = u
								}
							ze.bufferData(ze.ARRAY_BUFFER, e.normalArray, ze.DYNAMIC_DRAW), qe.enableAttribute(o.normal), ze.vertexAttribPointer(o.normal, 3, ze.FLOAT, !1, 0, 0)
						}
						e.hasUvs && r.map && (ze.bindBuffer(ze.ARRAY_BUFFER, i.uv), ze.bufferData(ze.ARRAY_BUFFER, e.uvArray, ze.DYNAMIC_DRAW), qe.enableAttribute(o.uv), ze.vertexAttribPointer(o.uv, 2, ze.FLOAT, !1, 0, 0)), e.hasColors && r.vertexColors !== n.NoColors && (ze.bindBuffer(ze.ARRAY_BUFFER, i.color), ze.bufferData(ze.ARRAY_BUFFER, e.colorArray, ze.DYNAMIC_DRAW), qe.enableAttribute(o.color), ze.vertexAttribPointer(o.color, 3, ze.FLOAT, !1, 0, 0)), qe.disableUnusedAttributes(), ze.drawArrays(ze.TRIANGLES, 0, e.count), e.count = 0
					}, this.renderBufferDirect = function(e, r, i, o, a, s) {
						M(o);
						var h = E(e, r, o, a),
							c = !1,
							l = i.id + "_" + h.id + "_" + o.wireframe;
						l !== we && (we = l, c = !0);
						var u = a.morphTargetInfluences;
						if (void 0 !== u) {
							for (var d = [], p = 0, v = u.length; v > p; p++) {
								var g = u[p];
								d.push([g, p])
							}
							d.sort(m), d.length > 8 && (d.length = 8);
							for (var y = i.morphAttributes, p = 0, v = d.length; v > p; p++) {
								var g = d[p];
								if (pe[p] = g[0], 0 !== g[0]) {
									var x = g[1];
									o.morphTargets === !0 && y.position && i.addAttribute("morphTarget" + p, y.position[x]), o.morphNormals === !0 && y.normal && i.addAttribute("morphNormal" + p, y.normal[x])
								} else o.morphTargets === !0 && i.removeAttribute("morphTarget" + p), o.morphNormals === !0 && i.removeAttribute("morphNormal" + p)
							}
							var b = h.getUniforms();
							null !== b.morphTargetInfluences && ze.uniform1fv(b.morphTargetInfluences, pe), c = !0
						}
						var x = i.index,
							w = i.attributes.position;
						o.wireframe === !0 && (x = Ye.getWireframeAttribute(i));
						var _;
						null !== x ? (_ = Je, _.setIndex(x)) : _ = Ze, c && (f(o, h, i), null !== x && ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, Ye.getAttributeBuffer(x)));
						var A = 0,
							S = 1 / 0;
						null !== x ? S = x.count : void 0 !== w && (S = w.count);
						var C = i.drawRange.start,
							T = i.drawRange.count,
							L = null !== s ? s.start : 0,
							R = null !== s ? s.count : 1 / 0,
							k = Math.max(A, C, L),
							P = Math.min(A + S, C + T, L + R) - 1,
							D = Math.max(0, P - k + 1);
						if (a instanceof n.Mesh)
							if (o.wireframe === !0) qe.setLineWidth(o.wireframeLinewidth * t()), _.setMode(ze.LINES);
							else switch (a.drawMode) {
								case n.TrianglesDrawMode:
									_.setMode(ze.TRIANGLES);
									break;
								case n.TriangleStripDrawMode:
									_.setMode(ze.TRIANGLE_STRIP);
									break;
								case n.TriangleFanDrawMode:
									_.setMode(ze.TRIANGLE_FAN)
							} else if (a instanceof n.Line) {
								var O = o.linewidth;
								void 0 === O && (O = 1), qe.setLineWidth(O * t()), _.setMode(a instanceof n.LineSegments ? ze.LINES : ze.LINE_STRIP)
							} else a instanceof n.Points && _.setMode(ze.POINTS);
						i instanceof n.InstancedBufferGeometry && i.maxInstancedCount > 0 ? _.renderInstances(i, k, D) : _.render(k, D)
					}, this.render = function(e, t, r, i) {
						if (t instanceof n.Camera == !1) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
						var o = e.fog;
						if (we = "", be = -1, Me = null, e.autoUpdate === !0 && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), Ne.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), Ie.setFromMatrix(Ne), he.length = 0, le = -1, de = -1, fe.length = 0, me.length = 0, x(e, t), ce.length = le + 1, ue.length = de + 1, ve.sortObjects === !0 && (ce.sort(v), ue.sort(g)), F(he, t), $e.render(e, t), Ue.calls = 0, Ue.vertices = 0, Ue.faces = 0, Ue.points = 0, void 0 === r && (r = null), this.setRenderTarget(r), (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), e.overrideMaterial) {
							var a = e.overrideMaterial;
							b(ce, t, o, a), b(ue, t, o, a)
						} else qe.setBlending(n.NoBlending), b(ce, t, o), b(ue, t, o);
						if (et.render(e, t), tt.render(e, t, Ae), r) {
							var s = r.texture;
							s.generateMipmaps && j(r) && s.minFilter !== n.NearestFilter && s.minFilter !== n.LinearFilter && Z(r)
						}
						qe.setDepthTest(!0), qe.setDepthWrite(!0), qe.setColorWrite(!0)
					}, this.setFaceCulling = function(e, t) {
						e === n.CullFaceNone ? qe.disable(ze.CULL_FACE) : (ze.frontFace(t === n.FrontFaceDirectionCW ? ze.CW : ze.CCW), ze.cullFace(e === n.CullFaceBack ? ze.BACK : e === n.CullFaceFront ? ze.FRONT : ze.FRONT_AND_BACK), qe.enable(ze.CULL_FACE))
					}, this.setTexture = function(e, t) {
						var r = Xe.get(e);
						if (e.version > 0 && r.__version !== e.version) {
							var i = e.image;
							return void 0 === i ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e) : i.complete === !1 ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e) : void U(r, e, t)
						}
						qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_2D, r.__webglTexture)
					}, this.setRenderTarget = function(e) {
						ye = e, e && void 0 === Xe.get(e).__webglFramebuffer && K(e);
						var t, r = e instanceof n.WebGLRenderTargetCube;
						if (e) {
							var i = Xe.get(e);
							t = r ? i.__webglFramebuffer[e.activeCubeFace] : i.__webglFramebuffer, _e.copy(e.scissor), Ee = e.scissorTest, Ae.copy(e.viewport)
						} else t = null, _e.copy(Pe).multiplyScalar(ke), Ee = De, Ae.copy(Oe).multiplyScalar(ke);
						if (xe !== t && (ze.bindFramebuffer(ze.FRAMEBUFFER, t), xe = t), qe.scissor(_e), qe.setScissorTest(Ee), qe.viewport(Ae), r) {
							var o = Xe.get(e.texture);
							ze.framebufferTexture2D(ze.FRAMEBUFFER, ze.COLOR_ATTACHMENT0, ze.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, o.__webglTexture, 0)
						}
					}, this.readRenderTargetPixels = function(e, t, r, i, o, a) {
						if (e instanceof n.WebGLRenderTarget == !1) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
						var s = Xe.get(e).__webglFramebuffer;
						if (s) {
							var h = !1;
							s !== xe && (ze.bindFramebuffer(ze.FRAMEBUFFER, s), h = !0);
							try {
								var c = e.texture;
								if (c.format !== n.RGBAFormat && $(c.format) !== ze.getParameter(ze.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
								if (!(c.type === n.UnsignedByteType || $(c.type) === ze.getParameter(ze.IMPLEMENTATION_COLOR_READ_TYPE) || c.type === n.FloatType && He.get("WEBGL_color_buffer_float") || c.type === n.HalfFloatType && He.get("EXT_color_buffer_half_float"))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
								ze.checkFramebufferStatus(ze.FRAMEBUFFER) === ze.FRAMEBUFFER_COMPLETE ? ze.readPixels(t, r, i, o, $(c.format), $(c.type), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
							} finally {
								h && ze.bindFramebuffer(ze.FRAMEBUFFER, xe)
							}
						}
					}
				}, n.WebGLRenderTarget = function(e, t, r) {
					this.uuid = n.Math.generateUUID(), this.width = e, this.height = t, this.scissor = new n.Vector4(0, 0, e, t), this.scissorTest = !1, this.viewport = new n.Vector4(0, 0, e, t), r = r || {}, void 0 === r.minFilter && (r.minFilter = n.LinearFilter), this.texture = new n.Texture(void 0, void 0, r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy), this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0, this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0
				}, n.WebGLRenderTarget.prototype = {
					constructor: n.WebGLRenderTarget,
					setSize: function(e, t) {
						(this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
					},
					clone: function() {
						return (new this.constructor).copy(this)
					},
					copy: function(e) {
						return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.shareDepthFrom = e.shareDepthFrom, this
					},
					dispose: function() {
						this.dispatchEvent({
							type: "dispose"
						})
					}
				}, n.EventDispatcher.prototype.apply(n.WebGLRenderTarget.prototype), n.WebGLRenderTargetCube = function(e, t, r) {
					n.WebGLRenderTarget.call(this, e, t, r), this.activeCubeFace = 0
				}, n.WebGLRenderTargetCube.prototype = Object.create(n.WebGLRenderTarget.prototype), n.WebGLRenderTargetCube.prototype.constructor = n.WebGLRenderTargetCube, n.WebGLBufferRenderer = function(e, t, r) {
					function i(e) {
						s = e
					}

					function o(t, i) {
						e.drawArrays(s, t, i), r.calls++, r.vertices += i, s === e.TRIANGLES && (r.faces += i / 3)
					}

					function a(i) {
						var o = t.get("ANGLE_instanced_arrays");
						if (null === o) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
						var a = i.attributes.position,
							h = 0;
						a instanceof n.InterleavedBufferAttribute ? (h = a.data.count, o.drawArraysInstancedANGLE(s, 0, h, i.maxInstancedCount)) : (h = a.count, o.drawArraysInstancedANGLE(s, 0, h, i.maxInstancedCount)), r.calls++, r.vertices += h * i.maxInstancedCount, s === e.TRIANGLES && (r.faces += i.maxInstancedCount * h / 3)
					}
					var s;
					this.setMode = i, this.render = o, this.renderInstances = a
				}, n.WebGLIndexedBufferRenderer = function(e, t, r) {
					function i(e) {
						s = e
					}

					function n(r) {
						r.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (h = e.UNSIGNED_INT, c = 4) : (h = e.UNSIGNED_SHORT, c = 2)
					}

					function o(t, i) {
						e.drawElements(s, i, h, t * c), r.calls++, r.vertices += i, s === e.TRIANGLES && (r.faces += i / 3)
					}

					function a(i, n, o) {
						var a = t.get("ANGLE_instanced_arrays");
						return null === a ? void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (a.drawElementsInstancedANGLE(s, o, h, n * c, i.maxInstancedCount), r.calls++, r.vertices += o * i.maxInstancedCount, void(s === e.TRIANGLES && (r.faces += i.maxInstancedCount * o / 3)))
					}
					var s, h, c;
					this.setMode = i, this.setIndex = n, this.render = o, this.renderInstances = a
				}, n.WebGLExtensions = function(e) {
					var t = {};
					this.get = function(r) {
						if (void 0 !== t[r]) return t[r];
						var i;
						switch (r) {
							case "EXT_texture_filter_anisotropic":
								i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
								break;
							case "WEBGL_compressed_texture_s3tc":
								i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
								break;
							case "WEBGL_compressed_texture_pvrtc":
								i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
								break;
							case "WEBGL_compressed_texture_etc1":
								i = e.getExtension("WEBGL_compressed_texture_etc1");
								break;
							default:
								i = e.getExtension(r)
						}
						return null === i && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."), t[r] = i, i
					}
				}, n.WebGLCapabilities = function(e, t, r) {
					function i(t) {
						if ("highp" === t) {
							if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
							t = "mediump"
						}
						return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
					}
					this.getMaxPrecision = i, this.precision = void 0 !== r.precision ? r.precision : "highp", this.logarithmicDepthBuffer = void 0 !== r.logarithmicDepthBuffer ? r.logarithmicDepthBuffer : !1, this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS), this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = this.maxVertexTextures > 0, this.floatFragmentTextures = !!t.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
					var n = i(this.precision);
					n !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", n, "instead."), this.precision = n), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
				}, n.WebGLGeometries = function(e, t, r) {
					function i(e) {
						var t = e.geometry;
						if (void 0 !== l[t.id]) return l[t.id];
						t.addEventListener("dispose", o);
						var i;
						return t instanceof n.BufferGeometry ? i = t : t instanceof n.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new n.BufferGeometry).setFromObject(e)), i = t._bufferGeometry), l[t.id] = i, r.memory.geometries++, i
					}

					function o(e) {
						var i = e.target,
							n = l[i.id];
						null !== n.index && s(n.index), h(n.attributes), i.removeEventListener("dispose", o), delete l[i.id];
						var a = t.get(i);
						a.wireframe && s(a.wireframe), t["delete"](i);
						var c = t.get(n);
						c.wireframe && s(c.wireframe), t["delete"](n), r.memory.geometries--
					}

					function a(e) {
						return e instanceof n.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
					}

					function s(t) {
						var r = a(t);
						void 0 !== r && (e.deleteBuffer(r), c(t))
					}

					function h(e) {
						for (var t in e) s(e[t])
					}

					function c(e) {
						t["delete"](e instanceof n.InterleavedBufferAttribute ? e.data : e)
					}
					var l = {};
					this.get = i
				}, n.WebGLLights = function() {
					var e = {};
					this.get = function(t) {
						if (void 0 !== e[t.id]) return e[t.id];
						var r;
						switch (t.type) {
							case "DirectionalLight":
								r = {
									direction: new n.Vector3,
									color: new n.Color,
									shadow: !1,
									shadowBias: 0,
									shadowRadius: 1,
									shadowMapSize: new n.Vector2
								};
								break;
							case "SpotLight":
								r = {
									position: new n.Vector3,
									direction: new n.Vector3,
									color: new n.Color,
									distance: 0,
									angleCos: 0,
									exponent: 0,
									decay: 0,
									shadow: !1,
									shadowBias: 0,
									shadowRadius: 1,
									shadowMapSize: new n.Vector2
								};
								break;
							case "PointLight":
								r = {
									position: new n.Vector3,
									color: new n.Color,
									distance: 0,
									decay: 0,
									shadow: !1,
									shadowBias: 0,
									shadowRadius: 1,
									shadowMapSize: new n.Vector2
								};
								break;
							case "HemisphereLight":
								r = {
									direction: new n.Vector3,
									skyColor: new n.Color,
									groundColor: new n.Color
								}
						}
						return e[t.id] = r, r
					}
				}, n.WebGLObjects = function(e, t, r) {
					function i(t) {
						var r = u.get(t);
						t.geometry instanceof n.Geometry && r.updateFromObject(t);
						var i = r.index,
							a = r.attributes;
						null !== i && o(i, e.ELEMENT_ARRAY_BUFFER);
						for (var s in a) o(a[s], e.ARRAY_BUFFER);
						var h = r.morphAttributes;
						for (var s in h)
							for (var c = h[s], l = 0, d = c.length; d > l; l++) o(c[l], e.ARRAY_BUFFER);
						return r
					}

					function o(e, r) {
						var i = e instanceof n.InterleavedBufferAttribute ? e.data : e,
							o = t.get(i);
						void 0 === o.__webglBuffer ? a(o, i, r) : o.version !== i.version && s(o, i, r)
					}

					function a(t, r, i) {
						t.__webglBuffer = e.createBuffer(), e.bindBuffer(i, t.__webglBuffer);
						var n = r.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
						e.bufferData(i, r.array, n), t.version = r.version
					}

					function s(t, r, i) {
						e.bindBuffer(i, t.__webglBuffer), r.dynamic === !1 || -1 === r.updateRange.count ? e.bufferSubData(i, 0, r.array) : 0 === r.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(i, r.updateRange.offset * r.array.BYTES_PER_ELEMENT, r.array.subarray(r.updateRange.offset, r.updateRange.offset + r.updateRange.count)), r.updateRange.count = 0), t.version = r.version
					}

					function h(e) {
						return e instanceof n.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
					}

					function c(r) {
						var i = t.get(r);
						if (void 0 !== i.wireframe) return i.wireframe;
						var a = [],
							s = r.index,
							h = r.attributes,
							c = h.position;
						if (null !== s)
							for (var u = {}, d = s.array, p = 0, f = d.length; f > p; p += 3) {
								var m = d[p + 0],
									v = d[p + 1],
									g = d[p + 2];
								l(u, m, v) && a.push(m, v), l(u, v, g) && a.push(v, g), l(u, g, m) && a.push(g, m)
							} else
								for (var d = h.position.array, p = 0, f = d.length / 3 - 1; f > p; p += 3) {
									var m = p + 0,
										v = p + 1,
										g = p + 2;
									a.push(m, v, v, g, g, m)
								}
						var y = c.count > 65535 ? Uint32Array : Uint16Array,
							x = new n.BufferAttribute(new y(a), 1);
						return o(x, e.ELEMENT_ARRAY_BUFFER), i.wireframe = x, x
					}

					function l(e, t, r) {
						if (t > r) {
							var i = t;
							t = r, r = i
						}
						var n = e[t];
						return void 0 === n ? (e[t] = [r], !0) : -1 === n.indexOf(r) ? (n.push(r), !0) : !1
					}
					var u = new n.WebGLGeometries(e, t, r);
					this.getAttributeBuffer = h, this.getWireframeAttribute = c, this.update = i
				}, n.WebGLProgram = function() {
					function e(e, t, r) {
						e = e || {};
						var i = [e.derivatives || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && r.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && r.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && r.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
						return i.filter(o).join("\n")
					}

					function t(e) {
						var t = [];
						for (var r in e) {
							var i = e[r];
							i !== !1 && t.push("#define " + r + " " + i)
						}
						return t.join("\n")
					}

					function r(e, t) {
						for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; i > n; n++) {
							var o = e.getActiveUniform(t, n),
								a = o.name,
								s = e.getUniformLocation(t, a),
								h = c.exec(a);
							if (h) {
								var d = h[1],
									p = h[2],
									f = r[d];
								f || (f = r[d] = {}), f[p] = s
							} else if (h = l.exec(a)) {
								var m = h[1],
									v = h[2],
									g = h[3],
									y = r[m];
								y || (y = r[m] = []);
								var x = y[v];
								x || (x = y[v] = {}), x[g] = s
							} else if (h = u.exec(a)) {
								var m = h[1];
								r[m] = s
							} else r[a] = s
						}
						return r
					}

					function i(e, t) {
						for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), n = 0; i > n; n++) {
							var o = e.getActiveAttrib(t, n),
								a = o.name;
							r[a] = e.getAttribLocation(t, a)
						}
						return r
					}

					function o(e) {
						return "" !== e
					}

					function a(e, t) {
						return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
					}

					function s(e) {
						function t(e, t, r, i) {
							for (var n = "", o = parseInt(t); o < parseInt(r); o++) n += i.replace(/\[ i \]/g, "[ " + o + " ]");
							return n
						}
						var r = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
						return e.replace(r, t)
					}
					var h = 0,
						c = /^([\w\d_]+)\.([\w\d_]+)$/,
						l = /^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/,
						u = /^([\w\d_]+)\[0\]$/;
					return function(c, l, u, d) {
						var p = c.context,
							f = u.extensions,
							m = u.defines,
							v = u.__webglShader.vertexShader,
							g = u.__webglShader.fragmentShader,
							y = "SHADOWMAP_TYPE_BASIC";
						d.shadowMapType === n.PCFShadowMap ? y = "SHADOWMAP_TYPE_PCF" : d.shadowMapType === n.PCFSoftShadowMap && (y = "SHADOWMAP_TYPE_PCF_SOFT");
						var x = "ENVMAP_TYPE_CUBE",
							b = "ENVMAP_MODE_REFLECTION",
							w = "ENVMAP_BLENDING_MULTIPLY";
						if (d.envMap) {
							switch (u.envMap.mapping) {
								case n.CubeReflectionMapping:
								case n.CubeRefractionMapping:
									x = "ENVMAP_TYPE_CUBE";
									break;
								case n.EquirectangularReflectionMapping:
								case n.EquirectangularRefractionMapping:
									x = "ENVMAP_TYPE_EQUIREC";
									break;
								case n.SphericalReflectionMapping:
									x = "ENVMAP_TYPE_SPHERE"
							}
							switch (u.envMap.mapping) {
								case n.CubeRefractionMapping:
								case n.EquirectangularRefractionMapping:
									b = "ENVMAP_MODE_REFRACTION"
							}
							switch (u.combine) {
								case n.MultiplyOperation:
									w = "ENVMAP_BLENDING_MULTIPLY";
									break;
								case n.MixOperation:
									w = "ENVMAP_BLENDING_MIX";
									break;
								case n.AddOperation:
									w = "ENVMAP_BLENDING_ADD"
							}
						}
						var M, _, E = c.gammaFactor > 0 ? c.gammaFactor : 1,
							A = e(f, d, c.extensions),
							S = t(m),
							C = p.createProgram();
						u instanceof n.RawShaderMaterial ? (M = "", _ = "") : (M = ["precision " + d.precision + " float;", "precision " + d.precision + " int;", "#define SHADER_NAME " + u.__webglShader.name, S, d.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", c.gammaInput ? "#define GAMMA_INPUT" : "", c.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + E, "#define MAX_BONES " + d.maxBones, d.map ? "#define USE_MAP" : "", d.envMap ? "#define USE_ENVMAP" : "", d.envMap ? "#define " + b : "", d.lightMap ? "#define USE_LIGHTMAP" : "", d.aoMap ? "#define USE_AOMAP" : "", d.emissiveMap ? "#define USE_EMISSIVEMAP" : "", d.bumpMap ? "#define USE_BUMPMAP" : "", d.normalMap ? "#define USE_NORMALMAP" : "", d.displacementMap && d.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", d.specularMap ? "#define USE_SPECULARMAP" : "", d.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", d.metalnessMap ? "#define USE_METALNESSMAP" : "", d.alphaMap ? "#define USE_ALPHAMAP" : "", d.vertexColors ? "#define USE_COLOR" : "", d.flatShading ? "#define FLAT_SHADED" : "", d.skinning ? "#define USE_SKINNING" : "", d.useVertexTexture ? "#define BONE_TEXTURE" : "", d.morphTargets ? "#define USE_MORPHTARGETS" : "", d.morphNormals && d.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", d.doubleSided ? "#define DOUBLE_SIDED" : "", d.flipSided ? "#define FLIP_SIDED" : "", d.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", d.shadowMapEnabled ? "#define " + y : "", d.pointLightShadows > 0 ? "#define POINT_LIGHT_SHADOWS" : "", d.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", d.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", d.logarithmicDepthBuffer && c.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(o).join("\n"), _ = [A, "precision " + d.precision + " float;", "precision " + d.precision + " int;", "#define SHADER_NAME " + u.__webglShader.name, S, d.alphaTest ? "#define ALPHATEST " + d.alphaTest : "", c.gammaInput ? "#define GAMMA_INPUT" : "", c.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + E, d.useFog && d.fog ? "#define USE_FOG" : "", d.useFog && d.fogExp ? "#define FOG_EXP2" : "", d.map ? "#define USE_MAP" : "", d.envMap ? "#define USE_ENVMAP" : "", d.envMap ? "#define " + x : "", d.envMap ? "#define " + b : "", d.envMap ? "#define " + w : "", d.lightMap ? "#define USE_LIGHTMAP" : "", d.aoMap ? "#define USE_AOMAP" : "", d.emissiveMap ? "#define USE_EMISSIVEMAP" : "", d.bumpMap ? "#define USE_BUMPMAP" : "", d.normalMap ? "#define USE_NORMALMAP" : "", d.specularMap ? "#define USE_SPECULARMAP" : "", d.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", d.metalnessMap ? "#define USE_METALNESSMAP" : "", d.alphaMap ? "#define USE_ALPHAMAP" : "", d.vertexColors ? "#define USE_COLOR" : "", d.flatShading ? "#define FLAT_SHADED" : "", d.doubleSided ? "#define DOUBLE_SIDED" : "", d.flipSided ? "#define FLIP_SIDED" : "", d.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", d.shadowMapEnabled ? "#define " + y : "", d.pointLightShadows > 0 ? "#define POINT_LIGHT_SHADOWS" : "", d.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", d.logarithmicDepthBuffer && c.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", d.envMap && c.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "\n"].filter(o).join("\n")), v = a(v, d), g = a(g, d), u instanceof n.ShaderMaterial == !1 && (v = s(v), g = s(g));
						var T = M + v,
							L = _ + g,
							R = n.WebGLShader(p, p.VERTEX_SHADER, T),
							k = n.WebGLShader(p, p.FRAGMENT_SHADER, L);
						p.attachShader(C, R), p.attachShader(C, k), void 0 !== u.index0AttributeName ? p.bindAttribLocation(C, 0, u.index0AttributeName) : d.morphTargets === !0 && p.bindAttribLocation(C, 0, "position"), p.linkProgram(C);
						var P = p.getProgramInfoLog(C),
							D = p.getShaderInfoLog(R),
							O = p.getShaderInfoLog(k),
							I = !0,
							N = !0;
						p.getProgramParameter(C, p.LINK_STATUS) === !1 ? (I = !1, console.error("THREE.WebGLProgram: shader error: ", p.getError(), "gl.VALIDATE_STATUS", p.getProgramParameter(C, p.VALIDATE_STATUS), "gl.getProgramInfoLog", P, D, O)) : "" !== P ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", P) : ("" === D || "" === O) && (N = !1), N && (this.diagnostics = {
							runnable: I,
							material: u,
							programLog: P,
							vertexShader: {
								log: D,
								prefix: M
							},
							fragmentShader: {
								log: O,
								prefix: _
							}
						}), p.deleteShader(R), p.deleteShader(k);
						var V;
						this.getUniforms = function() {
							return void 0 === V && (V = r(p, C)), V
						};
						var F;
						return this.getAttributes = function() {
							return void 0 === F && (F = i(p, C)), F
						}, this.destroy = function() {
							p.deleteProgram(C), this.program = void 0
						}, Object.defineProperties(this, {
							uniforms: {
								get: function() {
									return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
								}
							},
							attributes: {
								get: function() {
									return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
								}
							}
						}), this.id = h++, this.code = l, this.usedTimes = 1, this.program = C, this.vertexShader = R, this.fragmentShader = k, this
					}
				}(), n.WebGLPrograms = function(e, t) {
					function r(e) {
						if (t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture) return 1024;
						var r = t.maxVertexUniforms,
							i = Math.floor((r - 20) / 4),
							o = i;
						return void 0 !== e && e instanceof n.SkinnedMesh && (o = Math.min(e.skeleton.bones.length, o), o < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + o + " (try OpenGL instead of ANGLE)")), o
					}
					var i = [],
						o = {
							MeshDepthMaterial: "depth",
							MeshNormalMaterial: "normal",
							MeshBasicMaterial: "basic",
							MeshLambertMaterial: "lambert",
							MeshPhongMaterial: "phong",
							MeshStandardMaterial: "standard",
							LineBasicMaterial: "basic",
							LineDashedMaterial: "dashed",
							PointsMaterial: "points"
						},
						a = ["precision", "supportsVertexTextures", "map", "envMap", "envMapMode", "lightMap", "aoMap", "emissiveMap", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "pointLightShadows", "shadowMapType", "alphaTest", "doubleSided", "flipSided"];
					this.getParameters = function(i, a, s, h) {
						var c = o[i.type],
							l = r(h),
							u = e.getPrecision();
						null !== i.precision && (u = t.getMaxPrecision(i.precision), u !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", u, "instead."));
						var d = {
							shaderID: c,
							precision: u,
							supportsVertexTextures: t.vertexTextures,
							map: !!i.map,
							envMap: !!i.envMap,
							envMapMode: i.envMap && i.envMap.mapping,
							lightMap: !!i.lightMap,
							aoMap: !!i.aoMap,
							emissiveMap: !!i.emissiveMap,
							bumpMap: !!i.bumpMap,
							normalMap: !!i.normalMap,
							displacementMap: !!i.displacementMap,
							roughnessMap: !!i.roughnessMap,
							metalnessMap: !!i.metalnessMap,
							specularMap: !!i.specularMap,
							alphaMap: !!i.alphaMap,
							combine: i.combine,
							vertexColors: i.vertexColors,
							fog: s,
							useFog: i.fog,
							fogExp: s instanceof n.FogExp2,
							flatShading: i.shading === n.FlatShading,
							sizeAttenuation: i.sizeAttenuation,
							logarithmicDepthBuffer: t.logarithmicDepthBuffer,
							skinning: i.skinning,
							maxBones: l,
							useVertexTexture: t.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture,
							morphTargets: i.morphTargets,
							morphNormals: i.morphNormals,
							maxMorphTargets: e.maxMorphTargets,
							maxMorphNormals: e.maxMorphNormals,
							numDirLights: a.directional.length,
							numPointLights: a.point.length,
							numSpotLights: a.spot.length,
							numHemiLights: a.hemi.length,
							pointLightShadows: a.shadowsPointLight,
							shadowMapEnabled: e.shadowMap.enabled && h.receiveShadow && a.shadows.length > 0,
							shadowMapType: e.shadowMap.type,
							alphaTest: i.alphaTest,
							doubleSided: i.side === n.DoubleSide,
							flipSided: i.side === n.BackSide
						};
						return d
					}, this.getProgramCode = function(e, t) {
						var r = [];
						if (t.shaderID ? r.push(t.shaderID) : (r.push(e.fragmentShader), r.push(e.vertexShader)), void 0 !== e.defines)
							for (var i in e.defines) r.push(i), r.push(e.defines[i]);
						for (var n = 0; n < a.length; n++) {
							var o = a[n];
							r.push(o), r.push(t[o])
						}
						return r.join()
					}, this.acquireProgram = function(t, r, o) {
						for (var a, s = 0, h = i.length; h > s; s++) {
							var c = i[s];
							if (c.code === o) {
								a = c, ++a.usedTimes;
								break
							}
						}
						return void 0 === a && (a = new n.WebGLProgram(e, o, t, r), i.push(a)), a
					}, this.releaseProgram = function(e) {
						if (0 === --e.usedTimes) {
							var t = i.indexOf(e);
							i[t] = i[i.length - 1], i.pop(), e.destroy()
						}
					}, this.programs = i
				}, n.WebGLProperties = function() {
					var e = {};
					this.get = function(t) {
						var r = t.uuid,
							i = e[r];
						return void 0 === i && (i = {}, e[r] = i), i
					}, this["delete"] = function(t) {
						delete e[t.uuid]
					}, this.clear = function() {
						e = {}
					}
				}, n.WebGLShader = function() {
					function e(e) {
						for (var t = e.split("\n"), r = 0; r < t.length; r++) t[r] = r + 1 + ": " + t[r];
						return t.join("\n")
					}
					return function(t, r, i) {
						var n = t.createShader(r);
						return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", r === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), e(i)), n
					}
				}(), n.WebGLShadowMap = function(e, t, r) {
					function i(e, t, r, i) {
						var o = e.geometry,
							a = null,
							s = v,
							h = e.customDepthMaterial;
						if (r && (s = g, h = e.customDistanceMaterial), h) a = h;
						else {
							var c = void 0 !== o.morphTargets && o.morphTargets.length > 0 && t.morphTargets,
								l = e instanceof n.SkinnedMesh && t.skinning,
								u = 0;
							c && (u |= p), l && (u |= f), a = s[u]
						}
						return a.visible = t.visible, a.wireframe = t.wireframe, a.wireframeLinewidth = t.wireframeLinewidth, r && void 0 !== a.uniforms.lightPos && a.uniforms.lightPos.value.copy(i), a
					}

					function o(e, t, r) {
						if (e.visible !== !1) {
							if (e.layers.test(t.layers) && (e instanceof n.Mesh || e instanceof n.Line || e instanceof n.Points) && e.castShadow && (e.frustumCulled === !1 || h.intersectsObject(e) === !0)) {
								var i = e.material;
								i.visible === !0 && (e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, e.matrixWorld), d.push(e))
							}
							for (var a = e.children, s = 0, c = a.length; c > s; s++) o(a[s], t, r)
						}
					}
					for (var a = e.context, s = e.state, h = new n.Frustum, c = new n.Matrix4, l = new n.Vector3, u = new n.Vector3, d = [], p = 1, f = 2, m = (p | f) + 1, v = new Array(m), g = new Array(m), y = [new n.Vector3(1, 0, 0), new n.Vector3(-1, 0, 0), new n.Vector3(0, 0, 1), new n.Vector3(0, 0, -1), new n.Vector3(0, 1, 0), new n.Vector3(0, -1, 0)], x = [new n.Vector3(0, 1, 0), new n.Vector3(0, 1, 0), new n.Vector3(0, 1, 0), new n.Vector3(0, 1, 0), new n.Vector3(0, 0, 1), new n.Vector3(0, 0, -1)], b = [new n.Vector4, new n.Vector4, new n.Vector4, new n.Vector4, new n.Vector4, new n.Vector4], w = n.ShaderLib.depthRGBA, M = n.UniformsUtils.clone(w.uniforms), _ = n.ShaderLib.distanceRGBA, E = n.UniformsUtils.clone(_.uniforms), A = 0; A !== m; ++A) {
						var S = 0 !== (A & p),
							C = 0 !== (A & f),
							T = new n.ShaderMaterial({
								uniforms: M,
								vertexShader: w.vertexShader,
								fragmentShader: w.fragmentShader,
								morphTargets: S,
								skinning: C
							});
						T._shadowPass = !0, v[A] = T;
						var L = new n.ShaderMaterial({
							uniforms: E,
							vertexShader: _.vertexShader,
							fragmentShader: _.fragmentShader,
							morphTargets: S,
							skinning: C
						});
						L._shadowPass = !0, g[A] = L
					}
					var R = this;
					this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = n.PCFShadowMap, this.cullFace = n.CullFaceFront, this.render = function(p, f) {
						var m, v;
						if (R.enabled !== !1 && (R.autoUpdate !== !1 || R.needsUpdate !== !1)) {
							s.clearColor(1, 1, 1, 1), s.disable(a.BLEND), s.enable(a.CULL_FACE), a.frontFace(a.CCW), a.cullFace(R.cullFace === n.CullFaceFront ? a.FRONT : a.BACK), s.setDepthTest(!0), s.setScissorTest(!1);
							for (var g = t.shadows, w = 0, M = g.length; M > w; w++) {
								var _ = g[w],
									E = _.shadow,
									A = E.camera,
									S = E.mapSize;
								if (_ instanceof n.PointLight) {
									m = 6, v = !0;
									var C = S.x / 4,
										T = S.y / 2;
									b[0].set(2 * C, T, C, T), b[1].set(0, T, C, T), b[2].set(3 * C, T, C, T), b[3].set(C, T, C, T), b[4].set(3 * C, 0, C, T), b[5].set(C, 0, C, T)
								} else m = 1, v = !1;
								if (null === E.map) {
									var L = {
										minFilter: n.LinearFilter,
										magFilter: n.LinearFilter,
										format: n.RGBAFormat
									};
									E.map = new n.WebGLRenderTarget(S.x, S.y, L), _ instanceof n.SpotLight && (A.aspect = S.x / S.y), A.updateProjectionMatrix()
								}
								var k = E.map,
									P = E.matrix;
								u.setFromMatrixPosition(_.matrixWorld), A.position.copy(u), e.setRenderTarget(k), e.clear();
								for (var D = 0; m > D; D++) {
									if (v) {
										l.copy(A.position), l.add(y[D]), A.up.copy(x[D]), A.lookAt(l);
										var O = b[D];
										s.viewport(O)
									} else l.setFromMatrixPosition(_.target.matrixWorld), A.lookAt(l);
									A.updateMatrixWorld(), A.matrixWorldInverse.getInverse(A.matrixWorld), P.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), P.multiply(A.projectionMatrix), P.multiply(A.matrixWorldInverse), c.multiplyMatrices(A.projectionMatrix, A.matrixWorldInverse), h.setFromMatrix(c), d.length = 0, o(p, f, A);
									for (var I = 0, N = d.length; N > I; I++) {
										var V = d[I],
											F = r.update(V),
											B = V.material;
										if (B instanceof n.MultiMaterial)
											for (var U = F.groups, z = B.materials, j = 0, G = U.length; G > j; j++) {
												var H = U[j],
													W = z[H.materialIndex];
												if (W.visible === !0) {
													var q = i(V, W, v, u);
													e.renderBufferDirect(A, null, F, q, V, H)
												}
											} else {
												var q = i(V, B, v, u);
												e.renderBufferDirect(A, null, F, q, V, null)
											}
									}
								}
								e.resetGLState()
							}
							var X = e.getClearColor(),
								Y = e.getClearAlpha();
							e.setClearColor(X, Y), s.enable(a.BLEND), R.cullFace === n.CullFaceFront && a.cullFace(a.BACK), e.resetGLState(), R.needsUpdate = !1
						}
					}
				}, n.WebGLState = function(e, t, r) {
					var i = this,
						o = new n.Vector4,
						a = new Uint8Array(16),
						s = new Uint8Array(16),
						h = new Uint8Array(16),
						c = {},
						l = null,
						u = null,
						d = null,
						p = null,
						f = null,
						m = null,
						v = null,
						g = null,
						y = null,
						x = null,
						b = null,
						w = null,
						M = null,
						_ = null,
						E = null,
						A = null,
						S = null,
						C = null,
						T = null,
						L = null,
						R = null,
						k = null,
						P = null,
						D = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
						O = void 0,
						I = {},
						N = new n.Vector4,
						V = null,
						F = null,
						B = new n.Vector4,
						U = new n.Vector4;
					this.init = function() {
						this.clearColor(0, 0, 0, 1), this.clearDepth(1), this.clearStencil(0), this.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.frontFace(e.CCW), e.cullFace(e.BACK), this.enable(e.CULL_FACE), this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)
					}, this.initAttributes = function() {
						for (var e = 0, t = a.length; t > e; e++) a[e] = 0
					}, this.enableAttribute = function(r) {
						if (a[r] = 1, 0 === s[r] && (e.enableVertexAttribArray(r), s[r] = 1), 0 !== h[r]) {
							var i = t.get("ANGLE_instanced_arrays");
							i.vertexAttribDivisorANGLE(r, 0), h[r] = 0
						}
					}, this.enableAttributeAndDivisor = function(t, r, i) {
						a[t] = 1, 0 === s[t] && (e.enableVertexAttribArray(t), s[t] = 1), h[t] !== r && (i.vertexAttribDivisorANGLE(t, r), h[t] = r)
					}, this.disableUnusedAttributes = function() {
						for (var t = 0, r = s.length; r > t; t++) s[t] !== a[t] && (e.disableVertexAttribArray(t), s[t] = 0)
					}, this.enable = function(t) {
						c[t] !== !0 && (e.enable(t), c[t] = !0)
					}, this.disable = function(t) {
						c[t] !== !1 && (e.disable(t), c[t] = !1)
					}, this.getCompressedTextureFormats = function() {
						if (null === l && (l = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
							for (var r = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), i = 0; i < r.length; i++) l.push(r[i]);
						return l
					}, this.setBlending = function(t, i, o, a, s, h, c) {
						t === n.NoBlending ? this.disable(e.BLEND) : this.enable(e.BLEND), t !== u && (t === n.AdditiveBlending ? (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === n.SubtractiveBlending ? (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === n.MultiplyBlending ? (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), u = t), t === n.CustomBlending ? (s = s || i, h = h || o, c = c || a, (i !== d || s !== m) && (e.blendEquationSeparate(r(i), r(s)), d = i, m = s), (o !== p || a !== f || h !== v || c !== g) && (e.blendFuncSeparate(r(o), r(a), r(h), r(c)), p = o, f = a, v = h, g = c)) : (d = null, p = null, f = null, m = null, v = null, g = null)
					}, this.setDepthFunc = function(t) {
						if (y !== t) {
							if (t) switch (t) {
								case n.NeverDepth:
									e.depthFunc(e.NEVER);
									break;
								case n.AlwaysDepth:
									e.depthFunc(e.ALWAYS);
									break;
								case n.LessDepth:
									e.depthFunc(e.LESS);
									break;
								case n.LessEqualDepth:
									e.depthFunc(e.LEQUAL);
									break;
								case n.EqualDepth:
									e.depthFunc(e.EQUAL);
									break;
								case n.GreaterEqualDepth:
									e.depthFunc(e.GEQUAL);
									break;
								case n.GreaterDepth:
									e.depthFunc(e.GREATER);
									break;
								case n.NotEqualDepth:
									e.depthFunc(e.NOTEQUAL);
									break;
								default:
									e.depthFunc(e.LEQUAL)
							} else e.depthFunc(e.LEQUAL);
							y = t
						}
					}, this.setDepthTest = function(t) {
						t ? this.enable(e.DEPTH_TEST) : this.disable(e.DEPTH_TEST)
					}, this.setDepthWrite = function(t) {
						x !== t && (e.depthMask(t), x = t)
					}, this.setColorWrite = function(t) {
						b !== t && (e.colorMask(t, t, t, t), b = t)
					}, this.setStencilFunc = function(t, r, i) {
						(M !== t || _ !== r || E !== i) && (e.stencilFunc(t, r, i), M = t, _ = r, E = i)
					}, this.setStencilOp = function(t, r, i) {
						(A !== t || S !== r || C !== i) && (e.stencilOp(t, r, i), A = t, S = r, C = i)
					}, this.setStencilTest = function(t) {
						t ? this.enable(e.STENCIL_TEST) : this.disable(e.STENCIL_TEST)
					}, this.setStencilWrite = function(t) {
						w !== t && (e.stencilMask(t), w = t)
					}, this.setFlipSided = function(t) {
						T !== t && (e.frontFace(t ? e.CW : e.CCW), T = t)
					}, this.setLineWidth = function(t) {
						t !== L && (e.lineWidth(t), L = t)
					}, this.setPolygonOffset = function(t, r, i) {
						t ? this.enable(e.POLYGON_OFFSET_FILL) : this.disable(e.POLYGON_OFFSET_FILL), !t || R === r && k === i || (e.polygonOffset(r, i), R = r, k = i)
					}, this.getScissorTest = function() {
						return P
					}, this.setScissorTest = function(t) {
						P = t, t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
					}, this.activeTexture = function(t) {
						void 0 === t && (t = e.TEXTURE0 + D - 1), O !== t && (e.activeTexture(t), O = t)
					}, this.bindTexture = function(t, r) {
						void 0 === O && i.activeTexture();
						var n = I[O];
						void 0 === n && (n = {
							type: void 0,
							texture: void 0
						}, I[O] = n), (n.type !== t || n.texture !== r) && (e.bindTexture(t, r), n.type = t, n.texture = r)
					}, this.compressedTexImage2D = function() {
						try {
							e.compressedTexImage2D.apply(e, arguments)
						} catch (t) {
							console.error(t)
						}
					}, this.texImage2D = function() {
						try {
							e.texImage2D.apply(e, arguments)
						} catch (t) {
							console.error(t)
						}
					}, this.clearColor = function(t, r, i, n) {
						o.set(t, r, i, n), N.equals(o) === !1 && (e.clearColor(t, r, i, n), N.copy(o))
					}, this.clearDepth = function(t) {
						V !== t && (e.clearDepth(t), V = t)
					}, this.clearStencil = function(t) {
						F !== t && (e.clearStencil(t), F = t)
					}, this.scissor = function(t) {
						B.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), B.copy(t))
					}, this.viewport = function(t) {
						U.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), U.copy(t))
					}, this.reset = function() {
						for (var t = 0; t < s.length; t++) 1 === s[t] && (e.disableVertexAttribArray(t), s[t] = 0);
						c = {}, l = null, u = null, b = null, x = null, w = null, T = null
					}
				}, n.LensFlarePlugin = function(e, t) {
					function r() {
						var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
							t = new Uint16Array([0, 1, 2, 0, 2, 3]);
						o = p.createBuffer(), a = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, o), p.bufferData(p.ARRAY_BUFFER, e, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), p.bufferData(p.ELEMENT_ARRAY_BUFFER, t, p.STATIC_DRAW), u = p.createTexture(), d = p.createTexture(), f.bindTexture(p.TEXTURE_2D, u), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), f.bindTexture(p.TEXTURE_2D, d), p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), l = p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
						var r;
						r = l ? {
							vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
							fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
						} : {
							vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
							fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
						}, s = i(r), h = {
							vertex: p.getAttribLocation(s, "position"),
							uv: p.getAttribLocation(s, "uv")
						}, c = {
							renderType: p.getUniformLocation(s, "renderType"),
							map: p.getUniformLocation(s, "map"),
							occlusionMap: p.getUniformLocation(s, "occlusionMap"),
							opacity: p.getUniformLocation(s, "opacity"),
							color: p.getUniformLocation(s, "color"),
							scale: p.getUniformLocation(s, "scale"),
							rotation: p.getUniformLocation(s, "rotation"),
							screenPosition: p.getUniformLocation(s, "screenPosition")
						}
					}

					function i(t) {
						var r = p.createProgram(),
							i = p.createShader(p.FRAGMENT_SHADER),
							n = p.createShader(p.VERTEX_SHADER),
							o = "precision " + e.getPrecision() + " float;\n";
						return p.shaderSource(i, o + t.fragmentShader), p.shaderSource(n, o + t.vertexShader), p.compileShader(i), p.compileShader(n), p.attachShader(r, i), p.attachShader(r, n), p.linkProgram(r), r
					}
					var o, a, s, h, c, l, u, d, p = e.context,
						f = e.state;
					this.render = function(i, m, v) {
						if (0 !== t.length) {
							var g = new n.Vector3,
								y = v.w / v.z,
								x = .5 * v.z,
								b = .5 * v.w,
								w = 16 / v.w,
								M = new n.Vector2(w * y, w),
								_ = new n.Vector3(1, 1, 0),
								E = new n.Vector2(1, 1);
							void 0 === s && r(), p.useProgram(s), f.initAttributes(), f.enableAttribute(h.vertex), f.enableAttribute(h.uv), f.disableUnusedAttributes(), p.uniform1i(c.occlusionMap, 0), p.uniform1i(c.map, 1), p.bindBuffer(p.ARRAY_BUFFER, o), p.vertexAttribPointer(h.vertex, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(h.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), f.disable(p.CULL_FACE), f.setDepthWrite(!1);
							for (var A = 0, S = t.length; S > A; A++) {
								w = 16 / v.w, M.set(w * y, w);
								var C = t[A];
								if (g.set(C.matrixWorld.elements[12], C.matrixWorld.elements[13], C.matrixWorld.elements[14]), g.applyMatrix4(m.matrixWorldInverse), g.applyProjection(m.projectionMatrix), _.copy(g), E.x = _.x * x + x, E.y = _.y * b + b, l || E.x > 0 && E.x < v.z && E.y > 0 && E.y < v.w) {
									f.activeTexture(p.TEXTURE0), f.bindTexture(p.TEXTURE_2D, null), f.activeTexture(p.TEXTURE1), f.bindTexture(p.TEXTURE_2D, u), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, v.x + E.x - 8, v.y + E.y - 8, 16, 16, 0), p.uniform1i(c.renderType, 0), p.uniform2f(c.scale, M.x, M.y), p.uniform3f(c.screenPosition, _.x, _.y, _.z), f.disable(p.BLEND), f.enable(p.DEPTH_TEST), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), f.activeTexture(p.TEXTURE0), f.bindTexture(p.TEXTURE_2D, d), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, v.x + E.x - 8, v.y + E.y - 8, 16, 16, 0), p.uniform1i(c.renderType, 1), f.disable(p.DEPTH_TEST), f.activeTexture(p.TEXTURE1), f.bindTexture(p.TEXTURE_2D, u), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), C.positionScreen.copy(_), C.customUpdateCallback ? C.customUpdateCallback(C) : C.updateLensFlares(), p.uniform1i(c.renderType, 2), f.enable(p.BLEND);
									for (var T = 0, L = C.lensFlares.length; L > T; T++) {
										var R = C.lensFlares[T];
										R.opacity > .001 && R.scale > .001 && (_.x = R.x, _.y = R.y, _.z = R.z, w = R.size * R.scale / v.w, M.x = w * y, M.y = w, p.uniform3f(c.screenPosition, _.x, _.y, _.z), p.uniform2f(c.scale, M.x, M.y), p.uniform1f(c.rotation, R.rotation), p.uniform1f(c.opacity, R.opacity), p.uniform3f(c.color, R.color.r, R.color.g, R.color.b), f.setBlending(R.blending, R.blendEquation, R.blendSrc, R.blendDst), e.setTexture(R.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
									}
								}
							}
							f.enable(p.CULL_FACE), f.enable(p.DEPTH_TEST), f.setDepthWrite(!0), e.resetGLState()
						}
					}
				}, n.SpritePlugin = function(e, t) {
					function r() {
						var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
							t = new Uint16Array([0, 1, 2, 0, 2, 3]);
						a = d.createBuffer(), s = d.createBuffer(), d.bindBuffer(d.ARRAY_BUFFER, a), d.bufferData(d.ARRAY_BUFFER, e, d.STATIC_DRAW), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, s), d.bufferData(d.ELEMENT_ARRAY_BUFFER, t, d.STATIC_DRAW), h = i(), c = {
							position: d.getAttribLocation(h, "position"),
							uv: d.getAttribLocation(h, "uv")
						}, l = {
							uvOffset: d.getUniformLocation(h, "uvOffset"),
							uvScale: d.getUniformLocation(h, "uvScale"),
							rotation: d.getUniformLocation(h, "rotation"),
							scale: d.getUniformLocation(h, "scale"),
							color: d.getUniformLocation(h, "color"),
							map: d.getUniformLocation(h, "map"),
							opacity: d.getUniformLocation(h, "opacity"),
							modelViewMatrix: d.getUniformLocation(h, "modelViewMatrix"),
							projectionMatrix: d.getUniformLocation(h, "projectionMatrix"),
							fogType: d.getUniformLocation(h, "fogType"),
							fogDensity: d.getUniformLocation(h, "fogDensity"),
							fogNear: d.getUniformLocation(h, "fogNear"),
							fogFar: d.getUniformLocation(h, "fogFar"),
							fogColor: d.getUniformLocation(h, "fogColor"),
							alphaTest: d.getUniformLocation(h, "alphaTest")
						};
						var r = document.createElement("canvas");
						r.width = 8, r.height = 8;
						var o = r.getContext("2d");
						o.fillStyle = "white", o.fillRect(0, 0, 8, 8), u = new n.Texture(r), u.needsUpdate = !0
					}

					function i() {
						var t = d.createProgram(),
							r = d.createShader(d.VERTEX_SHADER),
							i = d.createShader(d.FRAGMENT_SHADER);
						return d.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), d.shaderSource(i, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), d.compileShader(r), d.compileShader(i), d.attachShader(t, r), d.attachShader(t, i), d.linkProgram(t), t
					}

					function o(e, t) {
						return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
					}
					var a, s, h, c, l, u, d = e.context,
						p = e.state,
						f = new n.Vector3,
						m = new n.Quaternion,
						v = new n.Vector3;
					this.render = function(i, g) {
						if (0 !== t.length) {
							void 0 === h && r(), d.useProgram(h), p.initAttributes(), p.enableAttribute(c.position), p.enableAttribute(c.uv), p.disableUnusedAttributes(), p.disable(d.CULL_FACE), p.enable(d.BLEND), d.bindBuffer(d.ARRAY_BUFFER, a), d.vertexAttribPointer(c.position, 2, d.FLOAT, !1, 16, 0), d.vertexAttribPointer(c.uv, 2, d.FLOAT, !1, 16, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, s), d.uniformMatrix4fv(l.projectionMatrix, !1, g.projectionMatrix.elements), p.activeTexture(d.TEXTURE0), d.uniform1i(l.map, 0);
							var y = 0,
								x = 0,
								b = i.fog;
							b ? (d.uniform3f(l.fogColor, b.color.r, b.color.g, b.color.b), b instanceof n.Fog ? (d.uniform1f(l.fogNear, b.near), d.uniform1f(l.fogFar, b.far), d.uniform1i(l.fogType, 1), y = 1, x = 1) : b instanceof n.FogExp2 && (d.uniform1f(l.fogDensity, b.density), d.uniform1i(l.fogType, 2), y = 2, x = 2)) : (d.uniform1i(l.fogType, 0), y = 0, x = 0);
							for (var w = 0, M = t.length; M > w; w++) {
								var _ = t[w];
								_.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, _.matrixWorld), _.z = -_.modelViewMatrix.elements[14]
							}
							t.sort(o);
							for (var E = [], w = 0, M = t.length; M > w; w++) {
								var _ = t[w],
									A = _.material;
								d.uniform1f(l.alphaTest, A.alphaTest), d.uniformMatrix4fv(l.modelViewMatrix, !1, _.modelViewMatrix.elements), _.matrixWorld.decompose(f, m, v), E[0] = v.x, E[1] = v.y;
								var S = 0;
								i.fog && A.fog && (S = x), y !== S && (d.uniform1i(l.fogType, S), y = S), null !== A.map ? (d.uniform2f(l.uvOffset, A.map.offset.x, A.map.offset.y), d.uniform2f(l.uvScale, A.map.repeat.x, A.map.repeat.y)) : (d.uniform2f(l.uvOffset, 0, 0), d.uniform2f(l.uvScale, 1, 1)), d.uniform1f(l.opacity, A.opacity), d.uniform3f(l.color, A.color.r, A.color.g, A.color.b), d.uniform1f(l.rotation, A.rotation), d.uniform2fv(l.scale, E), p.setBlending(A.blending, A.blendEquation, A.blendSrc, A.blendDst), p.setDepthTest(A.depthTest), p.setDepthWrite(A.depthWrite), A.map && A.map.image && A.map.image.width ? e.setTexture(A.map, 0) : e.setTexture(u, 0), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0)
							}
							p.enable(d.CULL_FACE), e.resetGLState()
						}
					}
				}, Object.defineProperties(n.Box2.prototype, {
					empty: {
						value: function() {
							return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
						}
					},
					isIntersectionBox: {
						value: function(e) {
							return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
						}
					}
				}), Object.defineProperties(n.Box3.prototype, {
					empty: {
						value: function() {
							return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
						}
					},
					isIntersectionBox: {
						value: function(e) {
							return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
						}
					},
					isIntersectionSphere: {
						value: function(e) {
							return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
						}
					}
				}), Object.defineProperties(n.Matrix3.prototype, {
					multiplyVector3: {
						value: function(e) {
							return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
						}
					},
					multiplyVector3Array: {
						value: function(e) {
							return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
						}
					}
				}), Object.defineProperties(n.Matrix4.prototype, {
					extractPosition: {
						value: function(e) {
							return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
						}
					},
					setRotationFromQuaternion: {
						value: function(e) {
							return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
						}
					},
					multiplyVector3: {
						value: function(e) {
							return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
						}
					},
					multiplyVector4: {
						value: function(e) {
							return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
						}
					},
					multiplyVector3Array: {
						value: function(e) {
							return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
						}
					},
					rotateAxis: {
						value: function(e) {
							console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
						}
					},
					crossVector: {
						value: function(e) {
							return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
						}
					},
					translate: {
						value: function() {
							console.error("THREE.Matrix4: .translate() has been removed.")
						}
					},
					rotateX: {
						value: function() {
							console.error("THREE.Matrix4: .rotateX() has been removed.")
						}
					},
					rotateY: {
						value: function() {
							console.error("THREE.Matrix4: .rotateY() has been removed.")
						}
					},
					rotateZ: {
						value: function() {
							console.error("THREE.Matrix4: .rotateZ() has been removed.")
						}
					},
					rotateByAxis: {
						value: function() {
							console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
						}
					}
				}), Object.defineProperties(n.Plane.prototype, {
					isIntersectionLine: {
						value: function(e) {
							return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
						}
					}
				}), Object.defineProperties(n.Quaternion.prototype, {
					multiplyVector3: {
						value: function(e) {
							return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
						}
					}
				}), Object.defineProperties(n.Ray.prototype, {
					isIntersectionBox: {
						value: function(e) {
							return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
						}
					},
					isIntersectionPlane: {
						value: function(e) {
							return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
						}
					},
					isIntersectionSphere: {
						value: function(e) {
							return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
						}
					}
				}), Object.defineProperties(n.Vector3.prototype, {
					setEulerFromRotationMatrix: {
						value: function() {
							console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
						}
					},
					setEulerFromQuaternion: {
						value: function() {
							console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
						}
					},
					getPositionFromMatrix: {
						value: function(e) {
							return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
						}
					},
					getScaleFromMatrix: {
						value: function(e) {
							return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
						}
					},
					getColumnFromMatrix: {
						value: function(e, t) {
							return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
						}
					}
				}), n.Face4 = function(e, t, r, i, o, a, s) {
					return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new n.Face3(e, t, r, o, a, s)
				}, Object.defineProperties(n.Object3D.prototype, {
					eulerOrder: {
						get: function() {
							return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
						},
						set: function(e) {
							console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
						}
					},
					getChildByName: {
						value: function(e) {
							return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
						}
					},
					renderDepth: {
						set: function() {
							console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
						}
					},
					translate: {
						value: function(e, t) {
							return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
						}
					},
					useQuaternion: {
						get: function() {
							console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
						},
						set: function() {
							console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
						}
					}
				}), Object.defineProperties(n, {
					PointCloud: {
						value: function(e, t) {
							return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new n.Points(e, t)
						}
					},
					ParticleSystem: {
						value: function(e, t) {
							return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new n.Points(e, t)
						}
					}
				}), Object.defineProperties(n.Light.prototype, {
					onlyShadow: {
						set: function() {
							console.warn("THREE.Light: .onlyShadow has been removed.")
						}
					},
					shadowCameraFov: {
						set: function(e) {
							console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
						}
					},
					shadowCameraLeft: {
						set: function(e) {
							console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
						}
					},
					shadowCameraRight: {
						set: function(e) {
							console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
						}
					},
					shadowCameraTop: {
						set: function(e) {
							console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
						}
					},
					shadowCameraBottom: {
						set: function(e) {
							console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
						}
					},
					shadowCameraNear: {
						set: function(e) {
							console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
						}
					},
					shadowCameraFar: {
						set: function(e) {
							console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
						}
					},
					shadowCameraVisible: {
						set: function() {
							console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
						}
					},
					shadowBias: {
						set: function(e) {
							console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
						}
					},
					shadowDarkness: {
						set: function() {
							console.warn("THREE.Light: .shadowDarkness has been removed.")
						}
					},
					shadowMapWidth: {
						set: function(e) {
							console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
						}
					},
					shadowMapHeight: {
						set: function(e) {
							console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
						}
					}
				}), Object.defineProperties(n.BufferAttribute.prototype, {
					length: {
						get: function() {
							return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
						}
					}
				}), Object.defineProperties(n.BufferGeometry.prototype, {
					drawcalls: {
						get: function() {
							return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
						}
					},
					offsets: {
						get: function() {
							return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
						}
					},
					addIndex: {
						value: function(e) {
							console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
						}
					},
					addDrawCall: {
						value: function(e, t, r) {
							void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
						}
					},
					clearDrawCalls: {
						value: function() {
							console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
						}
					},
					computeTangents: {
						value: function() {
							console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
						}
					},
					computeOffsets: {
						value: function() {
							console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
						}
					}
				}), Object.defineProperties(n.Material.prototype, {
					wrapAround: {
						get: function() {
							console.warn("THREE." + this.type + ": .wrapAround has been removed.")
						},
						set: function() {
							console.warn("THREE." + this.type + ": .wrapAround has been removed.")
						}
					},
					wrapRGB: {
						get: function() {
							return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new n.Color
						}
					}
				}), Object.defineProperties(n, {
					PointCloudMaterial: {
						value: function(e) {
							return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new n.PointsMaterial(e)
						}
					},
					ParticleBasicMaterial: {
						value: function(e) {
							return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new n.PointsMaterial(e)
						}
					},
					ParticleSystemMaterial: {
						value: function(e) {
							return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new n.PointsMaterial(e)
						}
					}
				}), Object.defineProperties(n.MeshPhongMaterial.prototype, {
					metal: {
						get: function() {
							return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
						},
						set: function() {
							console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
						}
					}
				}), Object.defineProperties(n.ShaderMaterial.prototype, {
					derivatives: {
						get: function() {
							return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
						},
						set: function(e) {
							console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
						}
					}
				}), Object.defineProperties(n.WebGLRenderer.prototype, {
					supportsFloatTextures: {
						value: function() {
							return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
						}
					},
					supportsHalfFloatTextures: {
						value: function() {
							return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
						}
					},
					supportsStandardDerivatives: {
						value: function() {
							return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
						}
					},
					supportsCompressedTextureS3TC: {
						value: function() {
							return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
						}
					},
					supportsCompressedTexturePVRTC: {
						value: function() {
							return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
						}
					},
					supportsBlendMinMax: {
						value: function() {
							return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
						}
					},
					supportsVertexTextures: {
						value: function() {
							return this.capabilities.vertexTextures
						}
					},
					supportsInstancedArrays: {
						value: function() {
							return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
						}
					},
					enableScissorTest: {
						value: function(e) {
							console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
						}
					},
					initMaterial: {
						value: function() {
							console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
						}
					},
					addPrePlugin: {
						value: function() {
							console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
						}
					},
					addPostPlugin: {
						value: function() {
							console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
						}
					},
					updateShadowMap: {
						value: function() {
							console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
						}
					},
					shadowMapEnabled: {
						get: function() {
							return this.shadowMap.enabled
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
						}
					},
					shadowMapType: {
						get: function() {
							return this.shadowMap.type
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
						}
					},
					shadowMapCullFace: {
						get: function() {
							return this.shadowMap.cullFace
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = e
						}
					}
				}), Object.defineProperties(n.WebGLRenderTarget.prototype, {
					wrapS: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
						}
					},
					wrapT: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
						}
					},
					magFilter: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
						}
					},
					minFilter: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
						}
					},
					anisotropy: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
						}
					},
					offset: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
						}
					},
					repeat: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
						}
					},
					format: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
						}
					},
					type: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
						}
					},
					generateMipmaps: {
						get: function() {
							return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
						},
						set: function(e) {
							console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
						}
					}
				}), n.GeometryUtils = {
					merge: function(e, t, r) {
						console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
						var i;
						t instanceof n.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), i = t.matrix, t = t.geometry), e.merge(t, i, r)
					},
					center: function(e) {
						return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
					}
				}, n.ImageUtils = {
					crossOrigin: void 0,
					loadTexture: function(e, t, r, i) {
						console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
						var o = new n.TextureLoader;
						o.setCrossOrigin(this.crossOrigin);
						var a = o.load(e, r, void 0, i);
						return t && (a.mapping = t), a
					},
					loadTextureCube: function(e, t, r, i) {
						console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
						var o = new n.CubeTextureLoader;
						o.setCrossOrigin(this.crossOrigin);
						var a = o.load(e, r, void 0, i);
						return t && (a.mapping = t), a
					},
					loadCompressedTexture: function() {
						console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
					},
					loadCompressedTextureCube: function() {
						console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
					}
				}, n.Projector = function() {
					console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(e, t) {
						console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
					}, this.unprojectVector = function(e, t) {
						console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
					}, this.pickingRay = function() {
						console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
					}
				}, n.CanvasRenderer = function() {
					console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
				}, n.MeshFaceMaterial = n.MultiMaterial, n.CurveUtils = {
					tangentQuadraticBezier: function(e, t, r, i) {
						return 2 * (1 - e) * (r - t) + 2 * e * (i - r)
					},
					tangentCubicBezier: function(e, t, r, i, n) {
						return -3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * i * (1 - e) - 3 * e * e * i + 3 * e * e * n
					},
					tangentSpline: function(e) {
						var t = 6 * e * e - 6 * e,
							r = 3 * e * e - 4 * e + 1,
							i = -6 * e * e + 6 * e,
							n = 3 * e * e - 2 * e;
						return t + r + i + n
					},
					interpolate: function(e, t, r, i, n) {
						var o = .5 * (r - e),
							a = .5 * (i - t),
							s = n * n,
							h = n * s;
						return (2 * t - 2 * r + o + a) * h + (-3 * t + 3 * r - 2 * o - a) * s + o * n + t
					}
				}, n.SceneUtils = {
					createMultiMaterialObject: function(e, t) {
						for (var r = new n.Group, i = 0, o = t.length; o > i; i++) r.add(new n.Mesh(e, t[i]));
						return r
					},
					detach: function(e, t, r) {
						e.applyMatrix(t.matrixWorld), t.remove(e), r.add(e)
					},
					attach: function(e, t, r) {
						var i = new n.Matrix4;
						i.getInverse(r.matrixWorld), e.applyMatrix(i), t.remove(e), r.add(e)
					}
				}, n.ShapeUtils = {
					area: function(e) {
						for (var t = e.length, r = 0, i = t - 1, n = 0; t > n; i = n++) r += e[i].x * e[n].y - e[n].x * e[i].y;
						return .5 * r
					},
					triangulate: function() {
						function e(e, t, r, i, n, o) {
							var a, s, h, c, l, u, d, p, f;
							if (s = e[o[t]].x, h = e[o[t]].y, c = e[o[r]].x, l = e[o[r]].y, u = e[o[i]].x, d = e[o[i]].y, Number.EPSILON > (c - s) * (d - h) - (l - h) * (u - s)) return !1;
							var m, v, g, y, x, b, w, M, _, E, A, S, C, T, L;
							for (m = u - c, v = d - l, g = s - u, y = h - d, x = c - s, b = l - h, a = 0; n > a; a++)
								if (p = e[o[a]].x, f = e[o[a]].y, !(p === s && f === h || p === c && f === l || p === u && f === d) && (w = p - s, M = f - h, _ = p - c, E = f - l, A = p - u, S = f - d, L = m * E - v * _, C = x * M - b * w, T = g * S - y * A, L >= -Number.EPSILON && T >= -Number.EPSILON && C >= -Number.EPSILON)) return !1;
							return !0
						}
						return function(t, r) {
							var i = t.length;
							if (3 > i) return null;
							var o, a, s, h = [],
								c = [],
								l = [];
							if (n.ShapeUtils.area(t) > 0)
								for (a = 0; i > a; a++) c[a] = a;
							else
								for (a = 0; i > a; a++) c[a] = i - 1 - a;
							var u = i,
								d = 2 * u;
							for (a = u - 1; u > 2;) {
								if (d-- <= 0) return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"), r ? l : h;
								if (o = a, o >= u && (o = 0), a = o + 1, a >= u && (a = 0), s = a + 1, s >= u && (s = 0), e(t, o, a, s, u, c)) {
									var p, f, m, v, g;
									for (p = c[o], f = c[a], m = c[s], h.push([t[p], t[f], t[m]]), l.push([c[o], c[a], c[s]]), v = a, g = a + 1; u > g; v++, g++) c[v] = c[g];
									u--, d = 2 * u
								}
							}
							return r ? l : h
						}
					}(),
					triangulateShape: function(e, t) {
						function r(e, t, r) {
							return e.x !== t.x ? e.x < t.x ? e.x <= r.x && r.x <= t.x : t.x <= r.x && r.x <= e.x : e.y < t.y ? e.y <= r.y && r.y <= t.y : t.y <= r.y && r.y <= e.y
						}

						function i(e, t, i, n, o) {
							var a = t.x - e.x,
								s = t.y - e.y,
								h = n.x - i.x,
								c = n.y - i.y,
								l = e.x - i.x,
								u = e.y - i.y,
								d = s * h - a * c,
								p = s * l - a * u;
							if (Math.abs(d) > Number.EPSILON) {
								var f;
								if (d > 0) {
									if (0 > p || p > d) return [];
									if (f = c * l - h * u, 0 > f || f > d) return []
								} else {
									if (p > 0 || d > p) return [];
									if (f = c * l - h * u, f > 0 || d > f) return []
								}
								if (0 === f) return !o || 0 !== p && p !== d ? [e] : [];
								if (f === d) return !o || 0 !== p && p !== d ? [t] : [];
								if (0 === p) return [i];
								if (p === d) return [n];
								var m = f / d;
								return [{
									x: e.x + m * a,
									y: e.y + m * s
								}]
							}
							if (0 !== p || c * l !== h * u) return [];
							var v = 0 === a && 0 === s,
								g = 0 === h && 0 === c;
							if (v && g) return e.x !== i.x || e.y !== i.y ? [] : [e];
							if (v) return r(i, n, e) ? [e] : [];
							if (g) return r(e, t, i) ? [i] : [];
							var y, x, b, w, M, _, E, A;
							return 0 !== a ? (e.x < t.x ? (y = e, b = e.x, x = t, w = t.x) : (y = t, b = t.x, x = e, w = e.x), i.x < n.x ? (M = i, E = i.x, _ = n, A = n.x) : (M = n, E = n.x, _ = i, A = i.x)) : (e.y < t.y ? (y = e, b = e.y, x = t, w = t.y) : (y = t, b = t.y, x = e, w = e.y), i.y < n.y ? (M = i, E = i.y, _ = n, A = n.y) : (M = n, E = n.y, _ = i, A = i.y)), E >= b ? E > w ? [] : w === E ? o ? [] : [M] : A >= w ? [M, x] : [M, _] : b > A ? [] : b === A ? o ? [] : [y] : A >= w ? [y, x] : [y, _]
						}

						function o(e, t, r, i) {
							var n = t.x - e.x,
								o = t.y - e.y,
								a = r.x - e.x,
								s = r.y - e.y,
								h = i.x - e.x,
								c = i.y - e.y,
								l = n * s - o * a,
								u = n * c - o * h;
							if (Math.abs(l) > Number.EPSILON) {
								var d = h * s - c * a;
								return l > 0 ? u >= 0 && d >= 0 : u >= 0 || d >= 0
							}
							return u > 0
						}

						function a(e, t) {
							function r(e, t) {
								var r = y.length - 1,
									i = e - 1;
								0 > i && (i = r);
								var n = e + 1;
								n > r && (n = 0);
								var a = o(y[e], y[i], y[n], s[t]);
								if (!a) return !1;
								var h = s.length - 1,
									c = t - 1;
								0 > c && (c = h);
								var l = t + 1;
								return l > h && (l = 0), a = o(s[t], s[c], s[l], y[e]), a ? !0 : !1
							}

							function n(e, t) {
								var r, n, o;
								for (r = 0; r < y.length; r++)
									if (n = r + 1, n %= y.length, o = i(e, t, y[r], y[n], !0), o.length > 0) return !0;
								return !1
							}

							function a(e, r) {
								var n, o, a, s, h;
								for (n = 0; n < x.length; n++)
									for (o = t[x[n]], a = 0; a < o.length; a++)
										if (s = a + 1, s %= o.length, h = i(e, r, o[a], o[s], !0), h.length > 0) return !0;
								return !1
							}
							for (var s, h, c, l, u, d, p, f, m, v, g, y = e.concat(), x = [], b = [], w = 0, M = t.length; M > w; w++) x.push(w);
							for (var _ = 0, E = 2 * x.length; x.length > 0;) {
								if (E--, 0 > E) {
									console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
									break
								}
								for (c = _; c < y.length; c++) {
									l = y[c], h = -1;
									for (var w = 0; w < x.length; w++)
										if (d = x[w], p = l.x + ":" + l.y + ":" + d, void 0 === b[p]) {
											s = t[d];
											for (var A = 0; A < s.length; A++)
												if (u = s[A], r(c, A) && !n(l, u) && !a(l, u)) {
													h = A, x.splice(w, 1), f = y.slice(0, c + 1), m = y.slice(c), v = s.slice(h), g = s.slice(0, h + 1), y = f.concat(v).concat(g).concat(m), _ = c;
													break
												}
											if (h >= 0) break;
											b[p] = !0
										}
									if (h >= 0) break
								}
							}
							return y
						}
						for (var s, h, c, l, u, d, p = {}, f = e.concat(), m = 0, v = t.length; v > m; m++) Array.prototype.push.apply(f, t[m]);
						for (s = 0, h = f.length; h > s; s++) u = f[s].x + ":" + f[s].y, void 0 !== p[u] && console.warn("THREE.Shape: Duplicate point", u), p[u] = s;
						var g = a(e, t),
							y = n.ShapeUtils.triangulate(g, !1);
						for (s = 0, h = y.length; h > s; s++)
							for (l = y[s], c = 0; 3 > c; c++) u = l[c].x + ":" + l[c].y, d = p[u], void 0 !== d && (l[c] = d);
						return y.concat()
					},
					isClockWise: function(e) {
						return n.ShapeUtils.area(e) < 0
					},
					b2: function() {
						function e(e, t) {
							var r = 1 - e;
							return r * r * t
						}

						function t(e, t) {
							return 2 * (1 - e) * e * t
						}

						function r(e, t) {
							return e * e * t
						}
						return function(i, n, o, a) {
							return e(i, n) + t(i, o) + r(i, a)
						}
					}(),
					b3: function() {
						function e(e, t) {
							var r = 1 - e;
							return r * r * r * t
						}

						function t(e, t) {
							var r = 1 - e;
							return 3 * r * r * e * t
						}

						function r(e, t) {
							var r = 1 - e;
							return 3 * r * e * e * t
						}

						function i(e, t) {
							return e * e * e * t
						}
						return function(n, o, a, s, h) {
							return e(n, o) + t(n, a) + r(n, s) + i(n, h)
						}
					}()
				}, n.Curve = function() {}, n.Curve.prototype = {
					constructor: n.Curve,
					getPoint: function() {
						return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
					},
					getPointAt: function(e) {
						var t = this.getUtoTmapping(e);
						return this.getPoint(t)
					},
					getPoints: function(e) {
						e || (e = 5);
						var t, r = [];
						for (t = 0; e >= t; t++) r.push(this.getPoint(t / e));
						return r
					},
					getSpacedPoints: function(e) {
						e || (e = 5);
						var t, r = [];
						for (t = 0; e >= t; t++) r.push(this.getPointAt(t / e));
						return r
					},
					getLength: function() {
						var e = this.getLengths();
						return e[e.length - 1]
					},
					getLengths: function(e) {
						if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
						this.needsUpdate = !1;
						var t, r, i = [],
							n = this.getPoint(0),
							o = 0;
						for (i.push(0), r = 1; e >= r; r++) t = this.getPoint(r / e), o += t.distanceTo(n), i.push(o), n = t;
						return this.cacheArcLengths = i, i
					},
					updateArcLengths: function() {
						this.needsUpdate = !0, this.getLengths()
					},
					getUtoTmapping: function(e, t) {
						var r, i = this.getLengths(),
							n = 0,
							o = i.length;
						r = t ? t : e * i[o - 1];
						for (var a, s = 0, h = o - 1; h >= s;)
							if (n = Math.floor(s + (h - s) / 2), a = i[n] - r, 0 > a) s = n + 1;
							else {
								if (!(a > 0)) {
									h = n;
									break
								}
								h = n - 1
							}
						if (n = h, i[n] === r) {
							var c = n / (o - 1);
							return c
						}
						var l = i[n],
							u = i[n + 1],
							d = u - l,
							p = (r - l) / d,
							c = (n + p) / (o - 1);
						return c
					},
					getTangent: function(e) {
						var t = 1e-4,
							r = e - t,
							i = e + t;
						0 > r && (r = 0), i > 1 && (i = 1);
						var n = this.getPoint(r),
							o = this.getPoint(i),
							a = o.clone().sub(n);
						return a.normalize()
					},
					getTangentAt: function(e) {
						var t = this.getUtoTmapping(e);
						return this.getTangent(t)
					}
				}, n.Curve.create = function(e, t) {
					return e.prototype = Object.create(n.Curve.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
				}, n.CurvePath = function() {
					this.curves = [], this.autoClose = !1
				}, n.CurvePath.prototype = Object.create(n.Curve.prototype), n.CurvePath.prototype.constructor = n.CurvePath, n.CurvePath.prototype.add = function(e) {
					this.curves.push(e)
				}, n.CurvePath.prototype.closePath = function() {
					var e = this.curves[0].getPoint(0),
						t = this.curves[this.curves.length - 1].getPoint(1);
					e.equals(t) || this.curves.push(new n.LineCurve(t, e))
				}, n.CurvePath.prototype.getPoint = function(e) {
					for (var t = e * this.getLength(), r = this.getCurveLengths(), i = 0; i < r.length;) {
						if (r[i] >= t) {
							var n = r[i] - t,
								o = this.curves[i],
								a = 1 - n / o.getLength();
							return o.getPointAt(a)
						}
						i++
					}
					return null
				}, n.CurvePath.prototype.getLength = function() {
					var e = this.getCurveLengths();
					return e[e.length - 1]
				}, n.CurvePath.prototype.getCurveLengths = function() {
					if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
					for (var e = [], t = 0, r = 0, i = this.curves.length; i > r; r++) t += this.curves[r].getLength(), e.push(t);
					return this.cacheLengths = e, e
				}, n.CurvePath.prototype.createPointsGeometry = function(e) {
					var t = this.getPoints(e);
					return this.createGeometry(t)
				}, n.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
					var t = this.getSpacedPoints(e);
					return this.createGeometry(t)
				}, n.CurvePath.prototype.createGeometry = function(e) {
					for (var t = new n.Geometry, r = 0, i = e.length; i > r; r++) {
						var o = e[r];
						t.vertices.push(new n.Vector3(o.x, o.y, o.z || 0))
					}
					return t
				}, n.Font = function(e) {
					this.data = e
				}, n.Font.prototype = {
					constructor: n.Font,
					generateShapes: function(e, t, r) {
						function i(e) {
							for (var r = String(e).split(""), i = t / a.resolution, n = 0, s = [], h = 0; h < r.length; h++) {
								var c = o(r[h], i, n);
								n += c.offset, s.push(c.path)
							}
							return s
						}

						function o(e, t, i) {
							var o = a.glyphs[e] || a.glyphs["?"];
							if (o) {
								var s, h, c, l, u, d, p, f, m, v, g, y = new n.Path,
									x = [],
									b = n.ShapeUtils.b2,
									w = n.ShapeUtils.b3;
								if (o.o)
									for (var M = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), _ = 0, E = M.length; E > _;) {
										var A = M[_++];
										switch (A) {
											case "m":
												s = M[_++] * t + i, h = M[_++] * t, y.moveTo(s, h);
												break;
											case "l":
												s = M[_++] * t + i, h = M[_++] * t, y.lineTo(s, h);
												break;
											case "q":
												if (c = M[_++] * t + i, l = M[_++] * t, p = M[_++] * t + i, f = M[_++] * t, y.quadraticCurveTo(p, f, c, l), g = x[x.length - 1]) {
													u = g.x, d = g.y;
													for (var S = 1; r >= S; S++) {
														var C = S / r;
														b(C, u, p, c), b(C, d, f, l)
													}
												}
												break;
											case "b":
												if (c = M[_++] * t + i, l = M[_++] * t, p = M[_++] * t + i, f = M[_++] * t, m = M[_++] * t + i, v = M[_++] * t, y.bezierCurveTo(p, f, m, v, c, l), g = x[x.length - 1]) {
													u = g.x, d = g.y;
													for (var S = 1; r >= S; S++) {
														var C = S / r;
														w(C, u, p, m, c), w(C, d, f, v, l)
													}
												}
										}
									}
								return {
									offset: o.ha * t,
									path: y
								}
							}
						}
						void 0 === t && (t = 100), void 0 === r && (r = 4);
						for (var a = this.data, s = i(e), h = [], c = 0, l = s.length; l > c; c++) Array.prototype.push.apply(h, s[c].toShapes());
						return h
					}
				}, n.Path = function(e) {
					n.CurvePath.call(this), this.actions = [], e && this.fromPoints(e)
				}, n.Path.prototype = Object.create(n.CurvePath.prototype), n.Path.prototype.constructor = n.Path, n.Path.prototype.fromPoints = function(e) {
					this.moveTo(e[0].x, e[0].y);
					for (var t = 1, r = e.length; r > t; t++) this.lineTo(e[t].x, e[t].y)
				}, n.Path.prototype.moveTo = function(e, t) {
					this.actions.push({
						action: "moveTo",
						args: [e, t]
					})
				}, n.Path.prototype.lineTo = function(e, t) {
					var r = this.actions[this.actions.length - 1].args,
						i = r[r.length - 2],
						o = r[r.length - 1],
						a = new n.LineCurve(new n.Vector2(i, o), new n.Vector2(e, t));
					this.curves.push(a), this.actions.push({
						action: "lineTo",
						args: [e, t]
					})
				}, n.Path.prototype.quadraticCurveTo = function(e, t, r, i) {
					var o = this.actions[this.actions.length - 1].args,
						a = o[o.length - 2],
						s = o[o.length - 1],
						h = new n.QuadraticBezierCurve(new n.Vector2(a, s), new n.Vector2(e, t), new n.Vector2(r, i));
					this.curves.push(h), this.actions.push({
						action: "quadraticCurveTo",
						args: [e, t, r, i]
					})
				}, n.Path.prototype.bezierCurveTo = function(e, t, r, i, o, a) {
					var s = this.actions[this.actions.length - 1].args,
						h = s[s.length - 2],
						c = s[s.length - 1],
						l = new n.CubicBezierCurve(new n.Vector2(h, c), new n.Vector2(e, t), new n.Vector2(r, i), new n.Vector2(o, a));
					this.curves.push(l), this.actions.push({
						action: "bezierCurveTo",
						args: [e, t, r, i, o, a]
					})
				}, n.Path.prototype.splineThru = function(e) {
					var t = Array.prototype.slice.call(arguments),
						r = this.actions[this.actions.length - 1].args,
						i = r[r.length - 2],
						o = r[r.length - 1],
						a = [new n.Vector2(i, o)];
					Array.prototype.push.apply(a, e);
					var s = new n.SplineCurve(a);
					this.curves.push(s), this.actions.push({
						action: "splineThru",
						args: t
					})
				}, n.Path.prototype.arc = function(e, t, r, i, n, o) {
					var a = this.actions[this.actions.length - 1].args,
						s = a[a.length - 2],
						h = a[a.length - 1];
					this.absarc(e + s, t + h, r, i, n, o)
				}, n.Path.prototype.absarc = function(e, t, r, i, n, o) {
					this.absellipse(e, t, r, r, i, n, o)
				}, n.Path.prototype.ellipse = function(e, t, r, i, n, o, a, s) {
					var h = this.actions[this.actions.length - 1].args,
						c = h[h.length - 2],
						l = h[h.length - 1];
					this.absellipse(e + c, t + l, r, i, n, o, a, s)
				}, n.Path.prototype.absellipse = function(e, t, r, i, o, a, s, h) {
					var c = [e, t, r, i, o, a, s, h || 0],
						l = new n.EllipseCurve(e, t, r, i, o, a, s, h);
					this.curves.push(l);
					var u = l.getPoint(1);
					c.push(u.x), c.push(u.y), this.actions.push({
						action: "ellipse",
						args: c
					})
				}, n.Path.prototype.getSpacedPoints = function(e) {
					e || (e = 40);
					for (var t = [], r = 0; e > r; r++) t.push(this.getPoint(r / e));
					return this.autoClose && t.push(t[0]), t
				}, n.Path.prototype.getPoints = function(e) {
					e = e || 12;
					for (var t, r, i, o, a, s, h, c, l, u, d, p = n.ShapeUtils.b2, f = n.ShapeUtils.b3, m = [], v = 0, g = this.actions.length; g > v; v++) {
						var y = this.actions[v],
							x = y.action,
							b = y.args;
						switch (x) {
							case "moveTo":
								m.push(new n.Vector2(b[0], b[1]));
								break;
							case "lineTo":
								m.push(new n.Vector2(b[0], b[1]));
								break;
							case "quadraticCurveTo":
								t = b[2], r = b[3], a = b[0], s = b[1], m.length > 0 ? (l = m[m.length - 1], h = l.x, c = l.y) : (l = this.actions[v - 1].args, h = l[l.length - 2], c = l[l.length - 1]);
								for (var w = 1; e >= w; w++) {
									var M = w / e;
									u = p(M, h, a, t), d = p(M, c, s, r), m.push(new n.Vector2(u, d))
								}
								break;
							case "bezierCurveTo":
								t = b[4], r = b[5], a = b[0], s = b[1], i = b[2], o = b[3], m.length > 0 ? (l = m[m.length - 1], h = l.x, c = l.y) : (l = this.actions[v - 1].args, h = l[l.length - 2], c = l[l.length - 1]);
								for (var w = 1; e >= w; w++) {
									var M = w / e;
									u = f(M, h, a, i, t), d = f(M, c, s, o, r), m.push(new n.Vector2(u, d))
								}
								break;
							case "splineThru":
								l = this.actions[v - 1].args;
								var _ = new n.Vector2(l[l.length - 2], l[l.length - 1]),
									E = [_],
									A = e * b[0].length;
								E = E.concat(b[0]);
								for (var S = new n.SplineCurve(E), w = 1; A >= w; w++) m.push(S.getPointAt(w / A));
								break;
							case "arc":
								for (var C, T = b[0], L = b[1], R = b[2], k = b[3], P = b[4], D = !!b[5], O = P - k, I = 2 * e, w = 1; I >= w; w++) {
									var M = w / I;
									D || (M = 1 - M), C = k + M * O, u = T + R * Math.cos(C), d = L + R * Math.sin(C), m.push(new n.Vector2(u, d))
								}
								break;
							case "ellipse":
								var C, N, V, T = b[0],
									L = b[1],
									F = b[2],
									B = b[3],
									k = b[4],
									P = b[5],
									D = !!b[6],
									U = b[7],
									O = P - k,
									I = 2 * e;
								0 !== U && (N = Math.cos(U), V = Math.sin(U));
								for (var w = 1; I >= w; w++) {
									var M = w / I;
									if (D || (M = 1 - M), C = k + M * O, u = T + F * Math.cos(C), d = L + B * Math.sin(C), 0 !== U) {
										var z = u,
											j = d;
										u = (z - T) * N - (j - L) * V + T, d = (z - T) * V + (j - L) * N + L
									}
									m.push(new n.Vector2(u, d))
								}
						}
					}
					var G = m[m.length - 1];
					return Math.abs(G.x - m[0].x) < Number.EPSILON && Math.abs(G.y - m[0].y) < Number.EPSILON && m.splice(m.length - 1, 1), this.autoClose && m.push(m[0]), m
				}, n.Path.prototype.toShapes = function(e, t) {
					function r(e) {
						for (var t = [], r = new n.Path, i = 0, o = e.length; o > i; i++) {
							var a = e[i],
								s = a.args,
								h = a.action;
							"moveTo" === h && 0 !== r.actions.length && (t.push(r), r = new n.Path), r[h].apply(r, s)
						}
						return 0 !== r.actions.length && t.push(r), t
					}

					function i(e) {
						for (var t = [], r = 0, i = e.length; i > r; r++) {
							var o = e[r],
								a = new n.Shape;
							a.actions = o.actions, a.curves = o.curves, t.push(a)
						}
						return t
					}

					function o(e, t) {
						for (var r = t.length, i = !1, n = r - 1, o = 0; r > o; n = o++) {
							var a = t[n],
								s = t[o],
								h = s.x - a.x,
								c = s.y - a.y;
							if (Math.abs(c) > Number.EPSILON) {
								if (0 > c && (a = t[o], h = -h, s = t[n], c = -c), e.y < a.y || e.y > s.y) continue;
								if (e.y === a.y) {
									if (e.x === a.x) return !0
								} else {
									var l = c * (e.x - a.x) - h * (e.y - a.y);
									if (0 === l) return !0;
									if (0 > l) continue;
									i = !i
								}
							} else {
								if (e.y !== a.y) continue;
								if (s.x <= e.x && e.x <= a.x || a.x <= e.x && e.x <= s.x) return !0
							}
						}
						return i
					}
					var a = n.ShapeUtils.isClockWise,
						s = r(this.actions);
					if (0 === s.length) return [];
					if (t === !0) return i(s);
					var h, c, l, u = [];
					if (1 === s.length) return c = s[0], l = new n.Shape, l.actions = c.actions, l.curves = c.curves, u.push(l), u;
					var d = !a(s[0].getPoints());
					d = e ? !d : d;
					var p, f = [],
						m = [],
						v = [],
						g = 0;
					m[g] = void 0, v[g] = [];
					for (var y = 0, x = s.length; x > y; y++) c = s[y], p = c.getPoints(), h = a(p), h = e ? !h : h, h ? (!d && m[g] && g++, m[g] = {
						s: new n.Shape,
						p: p
					}, m[g].s.actions = c.actions, m[g].s.curves = c.curves, d && g++, v[g] = []) : v[g].push({
						h: c,
						p: p[0]
					});
					if (!m[0]) return i(s);
					if (m.length > 1) {
						for (var b = !1, w = [], M = 0, _ = m.length; _ > M; M++) f[M] = [];
						for (var M = 0, _ = m.length; _ > M; M++)
							for (var E = v[M], A = 0; A < E.length; A++) {
								for (var S = E[A], C = !0, T = 0; T < m.length; T++) o(S.p, m[T].p) && (M !== T && w.push({
									froms: M,
									tos: T,
									hole: A
								}), C ? (C = !1, f[T].push(S)) : b = !0);
								C && f[M].push(S)
							}
						w.length > 0 && (b || (v = f))
					}
					for (var L, y = 0, R = m.length; R > y; y++) {
						l = m[y].s, u.push(l), L = v[y];
						for (var k = 0, P = L.length; P > k; k++) l.holes.push(L[k].h)
					}
					return u
				}, n.Shape = function() {
					n.Path.apply(this, arguments), this.holes = []
				}, n.Shape.prototype = Object.create(n.Path.prototype), n.Shape.prototype.constructor = n.Shape, n.Shape.prototype.extrude = function(e) {
					return new n.ExtrudeGeometry(this, e)
				}, n.Shape.prototype.makeGeometry = function(e) {
					return new n.ShapeGeometry(this, e)
				}, n.Shape.prototype.getPointsHoles = function(e) {
					for (var t = [], r = 0, i = this.holes.length; i > r; r++) t[r] = this.holes[r].getPoints(e);
					return t
				}, n.Shape.prototype.extractAllPoints = function(e) {
					return {
						shape: this.getPoints(e),
						holes: this.getPointsHoles(e)
					}
				}, n.Shape.prototype.extractPoints = function(e) {
					return this.extractAllPoints(e)
				}, n.LineCurve = function(e, t) {
					this.v1 = e, this.v2 = t
				}, n.LineCurve.prototype = Object.create(n.Curve.prototype), n.LineCurve.prototype.constructor = n.LineCurve, n.LineCurve.prototype.getPoint = function(e) {
					var t = this.v2.clone().sub(this.v1);
					return t.multiplyScalar(e).add(this.v1), t
				}, n.LineCurve.prototype.getPointAt = function(e) {
					return this.getPoint(e)
				}, n.LineCurve.prototype.getTangent = function() {
					var e = this.v2.clone().sub(this.v1);
					return e.normalize()
				}, n.QuadraticBezierCurve = function(e, t, r) {
					this.v0 = e, this.v1 = t, this.v2 = r
				}, n.QuadraticBezierCurve.prototype = Object.create(n.Curve.prototype), n.QuadraticBezierCurve.prototype.constructor = n.QuadraticBezierCurve, n.QuadraticBezierCurve.prototype.getPoint = function(e) {
					var t = n.ShapeUtils.b2;
					return new n.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y))
				}, n.QuadraticBezierCurve.prototype.getTangent = function(e) {
					var t = n.CurveUtils.tangentQuadraticBezier;
					return new n.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
				}, n.CubicBezierCurve = function(e, t, r, i) {
					this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = i
				}, n.CubicBezierCurve.prototype = Object.create(n.Curve.prototype), n.CubicBezierCurve.prototype.constructor = n.CubicBezierCurve, n.CubicBezierCurve.prototype.getPoint = function(e) {
					var t = n.ShapeUtils.b3;
					return new n.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
				}, n.CubicBezierCurve.prototype.getTangent = function(e) {
					var t = n.CurveUtils.tangentCubicBezier;
					return new n.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
				}, n.SplineCurve = function(e) {
					this.points = void 0 == e ? [] : e
				}, n.SplineCurve.prototype = Object.create(n.Curve.prototype), n.SplineCurve.prototype.constructor = n.SplineCurve, n.SplineCurve.prototype.getPoint = function(e) {
					var t = this.points,
						r = (t.length - 1) * e,
						i = Math.floor(r),
						o = r - i,
						a = t[0 === i ? i : i - 1],
						s = t[i],
						h = t[i > t.length - 2 ? t.length - 1 : i + 1],
						c = t[i > t.length - 3 ? t.length - 1 : i + 2],
						l = n.CurveUtils.interpolate;
					return new n.Vector2(l(a.x, s.x, h.x, c.x, o), l(a.y, s.y, h.y, c.y, o))
				}, n.EllipseCurve = function(e, t, r, i, n, o, a, s) {
					this.aX = e, this.aY = t, this.xRadius = r, this.yRadius = i, this.aStartAngle = n, this.aEndAngle = o, this.aClockwise = a, this.aRotation = s || 0
				}, n.EllipseCurve.prototype = Object.create(n.Curve.prototype), n.EllipseCurve.prototype.constructor = n.EllipseCurve, n.EllipseCurve.prototype.getPoint = function(e) {
					var t = this.aEndAngle - this.aStartAngle;
					0 > t && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI);
					var r;
					r = this.aClockwise === !0 ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t;
					var i = this.aX + this.xRadius * Math.cos(r),
						o = this.aY + this.yRadius * Math.sin(r);
					if (0 !== this.aRotation) {
						var a = Math.cos(this.aRotation),
							s = Math.sin(this.aRotation),
							h = i,
							c = o;
						i = (h - this.aX) * a - (c - this.aY) * s + this.aX, o = (h - this.aX) * s + (c - this.aY) * a + this.aY
					}
					return new n.Vector2(i, o)
				}, n.ArcCurve = function(e, t, r, i, o, a) {
					n.EllipseCurve.call(this, e, t, r, r, i, o, a)
				}, n.ArcCurve.prototype = Object.create(n.EllipseCurve.prototype), n.ArcCurve.prototype.constructor = n.ArcCurve, n.LineCurve3 = n.Curve.create(function(e, t) {
					this.v1 = e, this.v2 = t
				}, function(e) {
					var t = new n.Vector3;
					return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
				}), n.QuadraticBezierCurve3 = n.Curve.create(function(e, t, r) {
					this.v0 = e, this.v1 = t, this.v2 = r
				}, function(e) {
					var t = n.ShapeUtils.b2;
					return new n.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y), t(e, this.v0.z, this.v1.z, this.v2.z))
				}), n.CubicBezierCurve3 = n.Curve.create(function(e, t, r, i) {
					this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = i
				}, function(e) {
					var t = n.ShapeUtils.b3;
					return new n.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
				}), n.SplineCurve3 = n.Curve.create(function(e) {
					console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == e ? [] : e
				}, function(e) {
					var t = this.points,
						r = (t.length - 1) * e,
						i = Math.floor(r),
						o = r - i,
						a = t[0 == i ? i : i - 1],
						s = t[i],
						h = t[i > t.length - 2 ? t.length - 1 : i + 1],
						c = t[i > t.length - 3 ? t.length - 1 : i + 2],
						l = n.CurveUtils.interpolate;
					return new n.Vector3(l(a.x, s.x, h.x, c.x, o), l(a.y, s.y, h.y, c.y, o), l(a.z, s.z, h.z, c.z, o))
				}), n.CatmullRomCurve3 = function() {
					function e() {}
					var t = new n.Vector3,
						r = new e,
						i = new e,
						o = new e;
					return e.prototype.init = function(e, t, r, i) {
						this.c0 = e, this.c1 = r, this.c2 = -3 * e + 3 * t - 2 * r - i, this.c3 = 2 * e - 2 * t + r + i
					}, e.prototype.initNonuniformCatmullRom = function(e, t, r, i, n, o, a) {
						var s = (t - e) / n - (r - e) / (n + o) + (r - t) / o,
							h = (r - t) / o - (i - t) / (o + a) + (i - r) / a;
						s *= o, h *= o, this.init(t, r, s, h)
					}, e.prototype.initCatmullRom = function(e, t, r, i, n) {
						this.init(t, r, n * (r - e), n * (i - t))
					}, e.prototype.calc = function(e) {
						var t = e * e,
							r = t * e;
						return this.c0 + this.c1 * e + this.c2 * t + this.c3 * r
					}, n.Curve.create(function(e) {
						this.points = e || [], this.closed = !1
					}, function(e) {
						var a, s, h, c, l = this.points;
						c = l.length, 2 > c && console.log("duh, you need at least 2 points"), a = (c - (this.closed ? 0 : 1)) * e, s = Math.floor(a), h = a - s, this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / l.length) + 1) * l.length : 0 === h && s === c - 1 && (s = c - 2, h = 1);
						var u, d, p, f;
						if (this.closed || s > 0 ? u = l[(s - 1) % c] : (t.subVectors(l[0], l[1]).add(l[0]), u = t), d = l[s % c], p = l[(s + 1) % c], this.closed || c > s + 2 ? f = l[(s + 2) % c] : (t.subVectors(l[c - 1], l[c - 2]).add(l[c - 1]), f = t), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
							var m = "chordal" === this.type ? .5 : .25,
								v = Math.pow(u.distanceToSquared(d), m),
								g = Math.pow(d.distanceToSquared(p), m),
								y = Math.pow(p.distanceToSquared(f), m);
							1e-4 > g && (g = 1), 1e-4 > v && (v = g), 1e-4 > y && (y = g), r.initNonuniformCatmullRom(u.x, d.x, p.x, f.x, v, g, y), i.initNonuniformCatmullRom(u.y, d.y, p.y, f.y, v, g, y), o.initNonuniformCatmullRom(u.z, d.z, p.z, f.z, v, g, y)
						} else if ("catmullrom" === this.type) {
							var x = void 0 !== this.tension ? this.tension : .5;
							r.initCatmullRom(u.x, d.x, p.x, f.x, x), i.initCatmullRom(u.y, d.y, p.y, f.y, x), o.initCatmullRom(u.z, d.z, p.z, f.z, x)
						}
						var b = new n.Vector3(r.calc(h), i.calc(h), o.calc(h));
						return b
					})
				}(), n.ClosedSplineCurve3 = function(e) {
					console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."), n.CatmullRomCurve3.call(this, e), this.type = "catmullrom", this.closed = !0
				}, n.ClosedSplineCurve3.prototype = Object.create(n.CatmullRomCurve3.prototype), n.BoxGeometry = function(e, t, r, i, o, a) {
					function s(e, t, r, i, o, a, s, c) {
						var l, u, d, p = h.widthSegments,
							f = h.heightSegments,
							m = o / 2,
							v = a / 2,
							g = h.vertices.length;
						"x" === e && "y" === t || "y" === e && "x" === t ? l = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (l = "y", f = h.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (l = "x", p = h.depthSegments);
						var y = p + 1,
							x = f + 1,
							b = o / p,
							w = a / f,
							M = new n.Vector3;
						for (M[l] = s > 0 ? 1 : -1, d = 0; x > d; d++)
							for (u = 0; y > u; u++) {
								var _ = new n.Vector3;
								_[e] = (u * b - m) * r, _[t] = (d * w - v) * i, _[l] = s, h.vertices.push(_)
							}
						for (d = 0; f > d; d++)
							for (u = 0; p > u; u++) {
								var E = u + y * d,
									A = u + y * (d + 1),
									S = u + 1 + y * (d + 1),
									C = u + 1 + y * d,
									T = new n.Vector2(u / p, 1 - d / f),
									L = new n.Vector2(u / p, 1 - (d + 1) / f),
									R = new n.Vector2((u + 1) / p, 1 - (d + 1) / f),
									k = new n.Vector2((u + 1) / p, 1 - d / f),
									P = new n.Face3(E + g, A + g, C + g);
								P.normal.copy(M), P.vertexNormals.push(M.clone(), M.clone(), M.clone()), P.materialIndex = c, h.faces.push(P), h.faceVertexUvs[0].push([T, L, k]), P = new n.Face3(A + g, S + g, C + g), P.normal.copy(M), P.vertexNormals.push(M.clone(), M.clone(), M.clone()), P.materialIndex = c, h.faces.push(P), h.faceVertexUvs[0].push([L.clone(), R, k.clone()])
							}
					}
					n.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
						width: e,
						height: t,
						depth: r,
						widthSegments: i,
						heightSegments: o,
						depthSegments: a
					}, this.widthSegments = i || 1, this.heightSegments = o || 1, this.depthSegments = a || 1;
					var h = this,
						c = e / 2,
						l = t / 2,
						u = r / 2;
					s("z", "y", -1, -1, r, t, c, 0), s("z", "y", 1, -1, r, t, -c, 1), s("x", "z", 1, 1, e, r, l, 2), s("x", "z", 1, -1, e, r, -l, 3), s("x", "y", 1, -1, e, t, u, 4), s("x", "y", -1, -1, e, t, -u, 5), this.mergeVertices()
				}, n.BoxGeometry.prototype = Object.create(n.Geometry.prototype), n.BoxGeometry.prototype.constructor = n.BoxGeometry, n.CubeGeometry = n.BoxGeometry, n.CircleGeometry = function(e, t, r, i) {
					n.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
						radius: e,
						segments: t,
						thetaStart: r,
						thetaLength: i
					}, this.fromBufferGeometry(new n.CircleBufferGeometry(e, t, r, i))
				}, n.CircleGeometry.prototype = Object.create(n.Geometry.prototype), n.CircleGeometry.prototype.constructor = n.CircleGeometry, n.CircleBufferGeometry = function(e, t, r, i) {
					n.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
						radius: e,
						segments: t,
						thetaStart: r,
						thetaLength: i
					}, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 2 * Math.PI;
					var o = t + 2,
						a = new Float32Array(3 * o),
						s = new Float32Array(3 * o),
						h = new Float32Array(2 * o);
					s[2] = 1, h[0] = .5, h[1] = .5;
					for (var c = 0, l = 3, u = 2; t >= c; c++, l += 3, u += 2) {
						var d = r + c / t * i;
						a[l] = e * Math.cos(d), a[l + 1] = e * Math.sin(d), s[l + 2] = 1, h[u] = (a[l] / e + 1) / 2, h[u + 1] = (a[l + 1] / e + 1) / 2
					}
					for (var p = [], l = 1; t >= l; l++) p.push(l, l + 1, 0);
					this.setIndex(new n.BufferAttribute(new Uint16Array(p), 1)), this.addAttribute("position", new n.BufferAttribute(a, 3)), this.addAttribute("normal", new n.BufferAttribute(s, 3)), this.addAttribute("uv", new n.BufferAttribute(h, 2)), this.boundingSphere = new n.Sphere(new n.Vector3, e)
				}, n.CircleBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.CircleBufferGeometry.prototype.constructor = n.CircleBufferGeometry, n.CylinderGeometry = function(e, t, r, i, o, a, s, h) {
					n.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
						radiusTop: e,
						radiusBottom: t,
						height: r,
						radialSegments: i,
						heightSegments: o,
						openEnded: a,
						thetaStart: s,
						thetaLength: h
					}, e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, r = void 0 !== r ? r : 100, i = i || 8, o = o || 1, a = void 0 !== a ? a : !1, s = void 0 !== s ? s : 0, h = void 0 !== h ? h : 2 * Math.PI;
					var c, l, u = r / 2,
						d = [],
						p = [];
					for (l = 0; o >= l; l++) {
						var f = [],
							m = [],
							v = l / o,
							g = v * (t - e) + e;
						for (c = 0; i >= c; c++) {
							var y = c / i,
								x = new n.Vector3;
							x.x = g * Math.sin(y * h + s), x.y = -v * r + u, x.z = g * Math.cos(y * h + s), this.vertices.push(x), f.push(this.vertices.length - 1), m.push(new n.Vector2(y, 1 - v))
						}
						d.push(f), p.push(m)
					}
					var b, w, M = (t - e) / r;
					for (c = 0; i > c; c++)
						for (0 !== e ? (b = this.vertices[d[0][c]].clone(), w = this.vertices[d[0][c + 1]].clone()) : (b = this.vertices[d[1][c]].clone(), w = this.vertices[d[1][c + 1]].clone()), b.setY(Math.sqrt(b.x * b.x + b.z * b.z) * M).normalize(), w.setY(Math.sqrt(w.x * w.x + w.z * w.z) * M).normalize(), l = 0; o > l; l++) {
							var _ = d[l][c],
								E = d[l + 1][c],
								A = d[l + 1][c + 1],
								S = d[l][c + 1],
								C = b.clone(),
								T = b.clone(),
								L = w.clone(),
								R = w.clone(),
								k = p[l][c].clone(),
								P = p[l + 1][c].clone(),
								D = p[l + 1][c + 1].clone(),
								O = p[l][c + 1].clone();
							this.faces.push(new n.Face3(_, E, S, [C, T, R])), this.faceVertexUvs[0].push([k, P, O]), this.faces.push(new n.Face3(E, A, S, [T.clone(), L, R.clone()])), this.faceVertexUvs[0].push([P.clone(), D, O.clone()])
						}
					if (a === !1 && e > 0)
						for (this.vertices.push(new n.Vector3(0, u, 0)), c = 0; i > c; c++) {
							var _ = d[0][c],
								E = d[0][c + 1],
								A = this.vertices.length - 1,
								C = new n.Vector3(0, 1, 0),
								T = new n.Vector3(0, 1, 0),
								L = new n.Vector3(0, 1, 0),
								k = p[0][c].clone(),
								P = p[0][c + 1].clone(),
								D = new n.Vector2(P.x, 0);
							this.faces.push(new n.Face3(_, E, A, [C, T, L], void 0, 1)), this.faceVertexUvs[0].push([k, P, D])
						}
					if (a === !1 && t > 0)
						for (this.vertices.push(new n.Vector3(0, -u, 0)), c = 0; i > c; c++) {
							var _ = d[o][c + 1],
								E = d[o][c],
								A = this.vertices.length - 1,
								C = new n.Vector3(0, -1, 0),
								T = new n.Vector3(0, -1, 0),
								L = new n.Vector3(0, -1, 0),
								k = p[o][c + 1].clone(),
								P = p[o][c].clone(),
								D = new n.Vector2(P.x, 1);
							this.faces.push(new n.Face3(_, E, A, [C, T, L], void 0, 2)), this.faceVertexUvs[0].push([k, P, D])
						}
					this.computeFaceNormals()
				}, n.CylinderGeometry.prototype = Object.create(n.Geometry.prototype), n.CylinderGeometry.prototype.constructor = n.CylinderGeometry, n.EdgesGeometry = function(e, t) {
					function r(e, t) {
						return e - t
					}
					n.BufferGeometry.call(this), t = void 0 !== t ? t : 1;
					var i, o = Math.cos(n.Math.degToRad(t)),
						a = [0, 0],
						s = {},
						h = ["a", "b", "c"];
					e instanceof n.BufferGeometry ? (i = new n.Geometry, i.fromBufferGeometry(e)) : i = e.clone(), i.mergeVertices(), i.computeFaceNormals();
					for (var c = i.vertices, l = i.faces, u = 0, d = l.length; d > u; u++)
						for (var p = l[u], f = 0; 3 > f; f++) {
							a[0] = p[h[f]], a[1] = p[h[(f + 1) % 3]], a.sort(r);
							var m = a.toString();
							void 0 === s[m] ? s[m] = {
								vert1: a[0],
								vert2: a[1],
								face1: u,
								face2: void 0
							} : s[m].face2 = u
						}
					var v = [];
					for (var m in s) {
						var g = s[m];
						if (void 0 === g.face2 || l[g.face1].normal.dot(l[g.face2].normal) <= o) {
							var y = c[g.vert1];
							v.push(y.x), v.push(y.y), v.push(y.z), y = c[g.vert2], v.push(y.x), v.push(y.y), v.push(y.z)
						}
					}
					this.addAttribute("position", new n.BufferAttribute(new Float32Array(v), 3))
				}, n.EdgesGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.EdgesGeometry.prototype.constructor = n.EdgesGeometry, n.ExtrudeGeometry = function(e, t) {
					return "undefined" == typeof e ? void(e = []) : (n.Geometry.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), void this.computeFaceNormals())
				}, n.ExtrudeGeometry.prototype = Object.create(n.Geometry.prototype), n.ExtrudeGeometry.prototype.constructor = n.ExtrudeGeometry, n.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
					for (var r = e.length, i = 0; r > i; i++) {
						var n = e[i];
						this.addShape(n, t)
					}
				}, n.ExtrudeGeometry.prototype.addShape = function(e, t) {
					function r(e, t, r) {
						return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(r).add(e)
					}

					function i(e, t, r) {
						var i, o, a = 1,
							s = e.x - t.x,
							h = e.y - t.y,
							c = r.x - e.x,
							l = r.y - e.y,
							u = s * s + h * h,
							d = s * l - h * c;
						if (Math.abs(d) > Number.EPSILON) {
							var p = Math.sqrt(u),
								f = Math.sqrt(c * c + l * l),
								m = t.x - h / p,
								v = t.y + s / p,
								g = r.x - l / f,
								y = r.y + c / f,
								x = ((g - m) * l - (y - v) * c) / (s * l - h * c);
							i = m + s * x - e.x, o = v + h * x - e.y;
							var b = i * i + o * o;
							if (2 >= b) return new n.Vector2(i, o);
							a = Math.sqrt(b / 2)
						} else {
							var w = !1;
							s > Number.EPSILON ? c > Number.EPSILON && (w = !0) : s < -Number.EPSILON ? c < -Number.EPSILON && (w = !0) : Math.sign(h) === Math.sign(l) && (w = !0), w ? (i = -h, o = s, a = Math.sqrt(u)) : (i = s, o = h, a = Math.sqrt(u / 2))
						}
						return new n.Vector2(i / a, o / a)
					}

					function o() {
						if (b) {
							var e = 0,
								t = G * e;
							for (q = 0; H > q; q++) j = I[q], c(j[2] + t, j[1] + t, j[0] + t);
							for (e = M + 2 * x, t = G * e, q = 0; H > q; q++) j = I[q], c(j[0] + t, j[1] + t, j[2] + t)
						} else {
							for (q = 0; H > q; q++) j = I[q], c(j[2], j[1], j[0]);
							for (q = 0; H > q; q++) j = I[q], c(j[0] + G * M, j[1] + G * M, j[2] + G * M)
						}
					}

					function a() {
						var e = 0;
						for (s(N, e), e += N.length, C = 0, T = D.length; T > C; C++) S = D[C], s(S, e), e += S.length
					}

					function s(e, t) {
						var r, i;
						for (q = e.length; --q >= 0;) {
							r = q, i = q - 1, 0 > i && (i = e.length - 1);
							var n = 0,
								o = M + 2 * x;
							for (n = 0; o > n; n++) {
								var a = G * n,
									s = G * (n + 1),
									h = t + r + a,
									c = t + i + a,
									u = t + i + s,
									d = t + r + s;
								l(h, c, u, d, e, n, o, r, i)
							}
						}
					}

					function h(e, t, r) {
						L.vertices.push(new n.Vector3(e, t, r))
					}

					function c(e, t, r) {
						e += R, t += R, r += R, L.faces.push(new n.Face3(e, t, r, null, null, 0));
						var i = A.generateTopUV(L, e, t, r);
						L.faceVertexUvs[0].push(i)
					}

					function l(e, t, r, i) {
						e += R, t += R, r += R, i += R, L.faces.push(new n.Face3(e, t, i, null, null, 1)), L.faces.push(new n.Face3(t, r, i, null, null, 1));
						var o = A.generateSideWallUV(L, e, t, r, i);
						L.faceVertexUvs[0].push([o[0], o[1], o[3]]), L.faceVertexUvs[0].push([o[1], o[2], o[3]])
					}
					var u, d, p, f, m, v = void 0 !== t.amount ? t.amount : 100,
						g = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
						y = void 0 !== t.bevelSize ? t.bevelSize : g - 2,
						x = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
						b = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
						w = void 0 !== t.curveSegments ? t.curveSegments : 12,
						M = void 0 !== t.steps ? t.steps : 1,
						_ = t.extrudePath,
						E = !1,
						A = void 0 !== t.UVGenerator ? t.UVGenerator : n.ExtrudeGeometry.WorldUVGenerator;
					_ && (u = _.getSpacedPoints(M), E = !0, b = !1, d = void 0 !== t.frames ? t.frames : new n.TubeGeometry.FrenetFrames(_, M, !1), p = new n.Vector3, f = new n.Vector3, m = new n.Vector3), b || (x = 0, g = 0, y = 0);
					var S, C, T, L = this,
						R = this.vertices.length,
						k = e.extractPoints(w),
						P = k.shape,
						D = k.holes,
						O = !n.ShapeUtils.isClockWise(P);
					if (O) {
						for (P = P.reverse(), C = 0, T = D.length; T > C; C++) S = D[C], n.ShapeUtils.isClockWise(S) && (D[C] = S.reverse());
						O = !1
					}
					var I = n.ShapeUtils.triangulateShape(P, D),
						N = P;
					for (C = 0, T = D.length; T > C; C++) S = D[C], P = P.concat(S);
					for (var V, F, B, U, z, j, G = P.length, H = I.length, W = [], q = 0, X = N.length, Y = X - 1, Q = q + 1; X > q; q++, Y++, Q++) Y === X && (Y = 0), Q === X && (Q = 0), W[q] = i(N[q], N[Y], N[Q]);
					var K, Z = [],
						J = W.concat();
					for (C = 0, T = D.length; T > C; C++) {
						for (S = D[C], K = [], q = 0, X = S.length, Y = X - 1, Q = q + 1; X > q; q++, Y++, Q++) Y === X && (Y = 0), Q === X && (Q = 0), K[q] = i(S[q], S[Y], S[Q]);
						Z.push(K), J = J.concat(K)
					}
					for (V = 0; x > V; V++) {
						for (B = V / x, U = g * (1 - B), F = y * Math.sin(B * Math.PI / 2), q = 0, X = N.length; X > q; q++) z = r(N[q], W[q], F), h(z.x, z.y, -U);
						for (C = 0, T = D.length; T > C; C++)
							for (S = D[C], K = Z[C], q = 0, X = S.length; X > q; q++) z = r(S[q], K[q], F), h(z.x, z.y, -U)
					}
					for (F = y, q = 0; G > q; q++) z = b ? r(P[q], J[q], F) : P[q], E ? (f.copy(d.normals[0]).multiplyScalar(z.x), p.copy(d.binormals[0]).multiplyScalar(z.y), m.copy(u[0]).add(f).add(p), h(m.x, m.y, m.z)) : h(z.x, z.y, 0);
					var $;
					for ($ = 1; M >= $; $++)
						for (q = 0; G > q; q++) z = b ? r(P[q], J[q], F) : P[q], E ? (f.copy(d.normals[$]).multiplyScalar(z.x), p.copy(d.binormals[$]).multiplyScalar(z.y), m.copy(u[$]).add(f).add(p), h(m.x, m.y, m.z)) : h(z.x, z.y, v / M * $);
					for (V = x - 1; V >= 0; V--) {
						for (B = V / x, U = g * (1 - B), F = y * Math.sin(B * Math.PI / 2), q = 0, X = N.length; X > q; q++) z = r(N[q], W[q], F), h(z.x, z.y, v + U);
						for (C = 0, T = D.length; T > C; C++)
							for (S = D[C], K = Z[C], q = 0, X = S.length; X > q; q++) z = r(S[q], K[q], F), E ? h(z.x, z.y + u[M - 1].y, u[M - 1].x + U) : h(z.x, z.y, v + U)
					}
					o(), a()
				}, n.ExtrudeGeometry.WorldUVGenerator = {
					generateTopUV: function(e, t, r, i) {
						var o = e.vertices,
							a = o[t],
							s = o[r],
							h = o[i];
						return [new n.Vector2(a.x, a.y), new n.Vector2(s.x, s.y), new n.Vector2(h.x, h.y)]
					},
					generateSideWallUV: function(e, t, r, i, o) {
						var a = e.vertices,
							s = a[t],
							h = a[r],
							c = a[i],
							l = a[o];
						return Math.abs(s.y - h.y) < .01 ? [new n.Vector2(s.x, 1 - s.z), new n.Vector2(h.x, 1 - h.z), new n.Vector2(c.x, 1 - c.z), new n.Vector2(l.x, 1 - l.z)] : [new n.Vector2(s.y, 1 - s.z), new n.Vector2(h.y, 1 - h.z), new n.Vector2(c.y, 1 - c.z), new n.Vector2(l.y, 1 - l.z)]
					}
				}, n.ShapeGeometry = function(e, t) {
					n.Geometry.call(this), this.type = "ShapeGeometry", Array.isArray(e) === !1 && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals()
				}, n.ShapeGeometry.prototype = Object.create(n.Geometry.prototype), n.ShapeGeometry.prototype.constructor = n.ShapeGeometry, n.ShapeGeometry.prototype.addShapeList = function(e, t) {
					for (var r = 0, i = e.length; i > r; r++) this.addShape(e[r], t);
					return this
				}, n.ShapeGeometry.prototype.addShape = function(e, t) {
					void 0 === t && (t = {});
					var r, i, o, a = void 0 !== t.curveSegments ? t.curveSegments : 12,
						s = t.material,
						h = void 0 === t.UVGenerator ? n.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
						c = this.vertices.length,
						l = e.extractPoints(a),
						u = l.shape,
						d = l.holes,
						p = !n.ShapeUtils.isClockWise(u);
					if (p) {
						for (u = u.reverse(), r = 0, i = d.length; i > r; r++) o = d[r], n.ShapeUtils.isClockWise(o) && (d[r] = o.reverse());
						p = !1
					}
					var f = n.ShapeUtils.triangulateShape(u, d);
					for (r = 0, i = d.length; i > r; r++) o = d[r], u = u.concat(o);
					var m, v, g = u.length,
						y = f.length;
					for (r = 0; g > r; r++) m = u[r], this.vertices.push(new n.Vector3(m.x, m.y, 0));
					for (r = 0; y > r; r++) {
						v = f[r];
						var x = v[0] + c,
							b = v[1] + c,
							w = v[2] + c;
						this.faces.push(new n.Face3(x, b, w, null, null, s)), this.faceVertexUvs[0].push(h.generateTopUV(this, x, b, w))
					}
				}, n.LatheGeometry = function(e, t, r, i) {
					n.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
						points: e,
						segments: t,
						phiStart: r,
						phiLength: i
					}, t = t || 12, r = r || 0, i = i || 2 * Math.PI;
					for (var o = 1 / (e.length - 1), a = 1 / t, s = 0, h = t; h >= s; s++)
						for (var c = r + s * a * i, l = Math.sin(c), u = Math.cos(c), d = 0, p = e.length; p > d; d++) {
							var f = e[d],
								m = new n.Vector3;
							m.x = f.x * l, m.y = f.y, m.z = f.x * u, this.vertices.push(m)
						}
					for (var v = e.length, s = 0, h = t; h > s; s++)
						for (var d = 0, p = e.length - 1; p > d; d++) {
							var g = d + v * s,
								y = g,
								x = g + v,
								b = g + 1 + v,
								w = g + 1,
								M = s * a,
								_ = d * o,
								E = M + a,
								A = _ + o;
							this.faces.push(new n.Face3(y, x, w)), this.faceVertexUvs[0].push([new n.Vector2(M, _), new n.Vector2(E, _), new n.Vector2(M, A)]), this.faces.push(new n.Face3(x, b, w)), this.faceVertexUvs[0].push([new n.Vector2(E, _), new n.Vector2(E, A), new n.Vector2(M, A)])
						}
					this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals()
				}, n.LatheGeometry.prototype = Object.create(n.Geometry.prototype), n.LatheGeometry.prototype.constructor = n.LatheGeometry, n.PlaneGeometry = function(e, t, r, i) {
					n.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
						width: e,
						height: t,
						widthSegments: r,
						heightSegments: i
					}, this.fromBufferGeometry(new n.PlaneBufferGeometry(e, t, r, i))
				}, n.PlaneGeometry.prototype = Object.create(n.Geometry.prototype), n.PlaneGeometry.prototype.constructor = n.PlaneGeometry, n.PlaneBufferGeometry = function(e, t, r, i) {
					n.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
						width: e,
						height: t,
						widthSegments: r,
						heightSegments: i
					};
					for (var o = e / 2, a = t / 2, s = Math.floor(r) || 1, h = Math.floor(i) || 1, c = s + 1, l = h + 1, u = e / s, d = t / h, p = new Float32Array(c * l * 3), f = new Float32Array(c * l * 3), m = new Float32Array(c * l * 2), v = 0, g = 0, y = 0; l > y; y++)
						for (var x = y * d - a, b = 0; c > b; b++) {
							var w = b * u - o;
							p[v] = w, p[v + 1] = -x, f[v + 2] = 1, m[g] = b / s, m[g + 1] = 1 - y / h, v += 3, g += 2
						}
					v = 0;
					for (var M = new(p.length / 3 > 65535 ? Uint32Array : Uint16Array)(s * h * 6), y = 0; h > y; y++)
						for (var b = 0; s > b; b++) {
							var _ = b + c * y,
								E = b + c * (y + 1),
								A = b + 1 + c * (y + 1),
								S = b + 1 + c * y;
							M[v] = _, M[v + 1] = E, M[v + 2] = S, M[v + 3] = E, M[v + 4] = A, M[v + 5] = S, v += 6
						}
					this.setIndex(new n.BufferAttribute(M, 1)), this.addAttribute("position", new n.BufferAttribute(p, 3)), this.addAttribute("normal", new n.BufferAttribute(f, 3)), this.addAttribute("uv", new n.BufferAttribute(m, 2))
				}, n.PlaneBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.PlaneBufferGeometry.prototype.constructor = n.PlaneBufferGeometry, n.RingGeometry = function(e, t, r, i, o, a) {
					n.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
						innerRadius: e,
						outerRadius: t,
						thetaSegments: r,
						phiSegments: i,
						thetaStart: o,
						thetaLength: a
					}, e = e || 0, t = t || 50, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8, i = void 0 !== i ? Math.max(1, i) : 8;
					var s, h, c = [],
						l = e,
						u = (t - e) / i;
					for (s = 0; i + 1 > s; s++) {
						for (h = 0; r + 1 > h; h++) {
							var d = new n.Vector3,
								p = o + h / r * a;
							d.x = l * Math.cos(p), d.y = l * Math.sin(p), this.vertices.push(d), c.push(new n.Vector2((d.x / t + 1) / 2, (d.y / t + 1) / 2))
						}
						l += u
					}
					var f = new n.Vector3(0, 0, 1);
					for (s = 0; i > s; s++) {
						var m = s * (r + 1);
						for (h = 0; r > h; h++) {
							var p = h + m,
								v = p,
								g = p + r + 1,
								y = p + r + 2;
							this.faces.push(new n.Face3(v, g, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([c[v].clone(), c[g].clone(), c[y].clone()]), v = p, g = p + r + 2, y = p + 1, this.faces.push(new n.Face3(v, g, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([c[v].clone(), c[g].clone(), c[y].clone()])
						}
					}
					this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, l)
				}, n.RingGeometry.prototype = Object.create(n.Geometry.prototype), n.RingGeometry.prototype.constructor = n.RingGeometry, n.SphereGeometry = function(e, t, r, i, o, a, s) {
					n.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
						radius: e,
						widthSegments: t,
						heightSegments: r,
						phiStart: i,
						phiLength: o,
						thetaStart: a,
						thetaLength: s
					}, this.fromBufferGeometry(new n.SphereBufferGeometry(e, t, r, i, o, a, s))
				}, n.SphereGeometry.prototype = Object.create(n.Geometry.prototype), n.SphereGeometry.prototype.constructor = n.SphereGeometry, n.SphereBufferGeometry = function(e, t, r, i, o, a, s) {
					n.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
						radius: e,
						widthSegments: t,
						heightSegments: r,
						phiStart: i,
						phiLength: o,
						thetaStart: a,
						thetaLength: s
					}, e = e || 50, t = Math.max(3, Math.floor(t) || 8), r = Math.max(2, Math.floor(r) || 6), i = void 0 !== i ? i : 0, o = void 0 !== o ? o : 2 * Math.PI, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : Math.PI;
					for (var h = a + s, c = (t + 1) * (r + 1), l = new n.BufferAttribute(new Float32Array(3 * c), 3), u = new n.BufferAttribute(new Float32Array(3 * c), 3), d = new n.BufferAttribute(new Float32Array(2 * c), 2), p = 0, f = [], m = new n.Vector3, v = 0; r >= v; v++) {
						for (var g = [], y = v / r, x = 0; t >= x; x++) {
							var b = x / t,
								w = -e * Math.cos(i + b * o) * Math.sin(a + y * s),
								M = e * Math.cos(a + y * s),
								_ = e * Math.sin(i + b * o) * Math.sin(a + y * s);
							m.set(w, M, _).normalize(), l.setXYZ(p, w, M, _), u.setXYZ(p, m.x, m.y, m.z), d.setXY(p, b, 1 - y), g.push(p), p++
						}
						f.push(g)
					}
					for (var E = [], v = 0; r > v; v++)
						for (var x = 0; t > x; x++) {
							var A = f[v][x + 1],
								S = f[v][x],
								C = f[v + 1][x],
								T = f[v + 1][x + 1];
							(0 !== v || a > 0) && E.push(A, S, T), (v !== r - 1 || h < Math.PI) && E.push(S, C, T)
						}
					this.setIndex(new(l.count > 65535 ? n.Uint32Attribute : n.Uint16Attribute)(E, 1)), this.addAttribute("position", l), this.addAttribute("normal", u), this.addAttribute("uv", d), this.boundingSphere = new n.Sphere(new n.Vector3, e)
				}, n.SphereBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.SphereBufferGeometry.prototype.constructor = n.SphereBufferGeometry, n.TextGeometry = function(e, t) {
					t = t || {};
					var r = t.font;
					if (r instanceof n.Font == !1) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new n.Geometry;
					var i = r.generateShapes(e, t.size, t.curveSegments);
					t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), n.ExtrudeGeometry.call(this, i, t), this.type = "TextGeometry"
				}, n.TextGeometry.prototype = Object.create(n.ExtrudeGeometry.prototype), n.TextGeometry.prototype.constructor = n.TextGeometry, n.TorusGeometry = function(e, t, r, i, o) {
					n.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
						radius: e,
						tube: t,
						radialSegments: r,
						tubularSegments: i,
						arc: o
					}, e = e || 100, t = t || 40, r = r || 8, i = i || 6, o = o || 2 * Math.PI;
					for (var a = new n.Vector3, s = [], h = [], c = 0; r >= c; c++)
						for (var l = 0; i >= l; l++) {
							var u = l / i * o,
								d = c / r * Math.PI * 2;
							a.x = e * Math.cos(u), a.y = e * Math.sin(u);
							var p = new n.Vector3;
							p.x = (e + t * Math.cos(d)) * Math.cos(u), p.y = (e + t * Math.cos(d)) * Math.sin(u), p.z = t * Math.sin(d), this.vertices.push(p), s.push(new n.Vector2(l / i, c / r)), h.push(p.clone().sub(a).normalize())
						}
					for (var c = 1; r >= c; c++)
						for (var l = 1; i >= l; l++) {
							var f = (i + 1) * c + l - 1,
								m = (i + 1) * (c - 1) + l - 1,
								v = (i + 1) * (c - 1) + l,
								g = (i + 1) * c + l,
								y = new n.Face3(f, m, g, [h[f].clone(), h[m].clone(), h[g].clone()]);
							this.faces.push(y), this.faceVertexUvs[0].push([s[f].clone(), s[m].clone(), s[g].clone()]), y = new n.Face3(m, v, g, [h[m].clone(), h[v].clone(), h[g].clone()]), this.faces.push(y), this.faceVertexUvs[0].push([s[m].clone(), s[v].clone(), s[g].clone()])
						}
					this.computeFaceNormals()
				}, n.TorusGeometry.prototype = Object.create(n.Geometry.prototype), n.TorusGeometry.prototype.constructor = n.TorusGeometry, n.TorusKnotGeometry = function(e, t, r, i, o, a, s) {
					function h(e, t, r, i, o) {
						var a = Math.cos(e),
							s = Math.sin(e),
							h = t / r * e,
							c = Math.cos(h),
							l = i * (2 + c) * .5 * a,
							u = i * (2 + c) * s * .5,
							d = o * i * Math.sin(h) * .5;
						return new n.Vector3(l, u, d)
					}
					n.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
						radius: e,
						tube: t,
						radialSegments: r,
						tubularSegments: i,
						p: o,
						q: a,
						heightScale: s
					}, e = e || 100, t = t || 40, r = r || 64, i = i || 8, o = o || 2, a = a || 3, s = s || 1;
					for (var c = new Array(r), l = new n.Vector3, u = new n.Vector3, d = new n.Vector3, p = 0; r > p; ++p) {
						c[p] = new Array(i);
						var f = p / r * 2 * o * Math.PI,
							m = h(f, a, o, e, s),
							v = h(f + .01, a, o, e, s);
						l.subVectors(v, m), u.addVectors(v, m), d.crossVectors(l, u), u.crossVectors(d, l), d.normalize(), u.normalize();
						for (var g = 0; i > g; ++g) {
							var y = g / i * 2 * Math.PI,
								x = -t * Math.cos(y),
								b = t * Math.sin(y),
								w = new n.Vector3;
							w.x = m.x + x * u.x + b * d.x, w.y = m.y + x * u.y + b * d.y, w.z = m.z + x * u.z + b * d.z, c[p][g] = this.vertices.push(w) - 1
						}
					}
					for (var p = 0; r > p; ++p)
						for (var g = 0; i > g; ++g) {
							var M = (p + 1) % r,
								_ = (g + 1) % i,
								E = c[p][g],
								A = c[M][g],
								S = c[M][_],
								C = c[p][_],
								T = new n.Vector2(p / r, g / i),
								L = new n.Vector2((p + 1) / r, g / i),
								R = new n.Vector2((p + 1) / r, (g + 1) / i),
								k = new n.Vector2(p / r, (g + 1) / i);
							this.faces.push(new n.Face3(E, A, C)), this.faceVertexUvs[0].push([T, L, k]), this.faces.push(new n.Face3(A, S, C)), this.faceVertexUvs[0].push([L.clone(), R, k.clone()])
						}
					this.computeFaceNormals(), this.computeVertexNormals()
				}, n.TorusKnotGeometry.prototype = Object.create(n.Geometry.prototype), n.TorusKnotGeometry.prototype.constructor = n.TorusKnotGeometry, n.TubeGeometry = function(e, t, r, i, o, a) {
					function s(e, t, r) {
						return R.vertices.push(new n.Vector3(e, t, r)) - 1
					}
					n.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
						path: e,
						segments: t,
						radius: r,
						radialSegments: i,
						closed: o,
						taper: a
					}, t = t || 64, r = r || 1, i = i || 8, o = o || !1, a = a || n.TubeGeometry.NoTaper;
					var h, c, l, u, d, p, f, m, v, g, y, x, b, w, M, _, E, A, S, C, T, L = [],
						R = this,
						k = t + 1,
						P = new n.Vector3,
						D = new n.TubeGeometry.FrenetFrames(e, t, o),
						O = D.tangents,
						I = D.normals,
						N = D.binormals;
					for (this.tangents = O, this.normals = I, this.binormals = N, g = 0; k > g; g++)
						for (L[g] = [], u = g / (k - 1), v = e.getPointAt(u), h = O[g], c = I[g], l = N[g], p = r * a(u), y = 0; i > y; y++) d = y / i * 2 * Math.PI, f = -p * Math.cos(d), m = p * Math.sin(d), P.copy(v), P.x += f * c.x + m * l.x, P.y += f * c.y + m * l.y, P.z += f * c.z + m * l.z, L[g][y] = s(P.x, P.y, P.z);
					for (g = 0; t > g; g++)
						for (y = 0; i > y; y++) x = o ? (g + 1) % t : g + 1, b = (y + 1) % i, w = L[g][y], M = L[x][y], _ = L[x][b], E = L[g][b], A = new n.Vector2(g / t, y / i), S = new n.Vector2((g + 1) / t, y / i), C = new n.Vector2((g + 1) / t, (y + 1) / i), T = new n.Vector2(g / t, (y + 1) / i), this.faces.push(new n.Face3(w, M, E)), this.faceVertexUvs[0].push([A, S, T]), this.faces.push(new n.Face3(M, _, E)), this.faceVertexUvs[0].push([S.clone(), C, T.clone()]);
					this.computeFaceNormals(), this.computeVertexNormals()
				}, n.TubeGeometry.prototype = Object.create(n.Geometry.prototype), n.TubeGeometry.prototype.constructor = n.TubeGeometry, n.TubeGeometry.NoTaper = function() {
					return 1
				}, n.TubeGeometry.SinusoidalTaper = function(e) {
					return Math.sin(Math.PI * e)
				}, n.TubeGeometry.FrenetFrames = function(e, t, r) {
					function i() {
						f[0] = new n.Vector3, m[0] = new n.Vector3, a = Number.MAX_VALUE, s = Math.abs(p[0].x), h = Math.abs(p[0].y), c = Math.abs(p[0].z), a >= s && (a = s, d.set(1, 0, 0)), a >= h && (a = h, d.set(0, 1, 0)), a >= c && d.set(0, 0, 1), v.crossVectors(p[0], d).normalize(), f[0].crossVectors(p[0], v), m[0].crossVectors(p[0], f[0])
					}
					var o, a, s, h, c, l, u, d = new n.Vector3,
						p = [],
						f = [],
						m = [],
						v = new n.Vector3,
						g = new n.Matrix4,
						y = t + 1;
					for (this.tangents = p, this.normals = f, this.binormals = m, l = 0; y > l; l++) u = l / (y - 1), p[l] = e.getTangentAt(u), p[l].normalize();
					for (i(), l = 1; y > l; l++) f[l] = f[l - 1].clone(), m[l] = m[l - 1].clone(), v.crossVectors(p[l - 1], p[l]), v.length() > Number.EPSILON && (v.normalize(), o = Math.acos(n.Math.clamp(p[l - 1].dot(p[l]), -1, 1)), f[l].applyMatrix4(g.makeRotationAxis(v, o))), m[l].crossVectors(p[l], f[l]);
					if (r)
						for (o = Math.acos(n.Math.clamp(f[0].dot(f[y - 1]), -1, 1)), o /= y - 1, p[0].dot(v.crossVectors(f[0], f[y - 1])) > 0 && (o = -o), l = 1; y > l; l++) f[l].applyMatrix4(g.makeRotationAxis(p[l], o * l)), m[l].crossVectors(p[l], f[l])
				}, n.PolyhedronGeometry = function(e, t, r, i) {
					function o(e) {
						var t = e.normalize().clone();
						t.index = u.vertices.push(t) - 1;
						var r = h(e) / 2 / Math.PI + .5,
							i = c(e) / Math.PI + .5;
						return t.uv = new n.Vector2(r, 1 - i), t
					}

					function a(e, t, r, i) {
						var o = new n.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()], void 0, i);
						u.faces.push(o), b.copy(e).add(t).add(r).divideScalar(3);
						var a = h(b);
						u.faceVertexUvs[0].push([l(e.uv, e, a), l(t.uv, t, a), l(r.uv, r, a)])
					}

					function s(e, t) {
						for (var r = Math.pow(2, t), i = o(u.vertices[e.a]), n = o(u.vertices[e.b]), s = o(u.vertices[e.c]), h = [], c = e.materialIndex, l = 0; r >= l; l++) {
							h[l] = [];
							for (var d = o(i.clone().lerp(s, l / r)), p = o(n.clone().lerp(s, l / r)), f = r - l, m = 0; f >= m; m++) h[l][m] = 0 === m && l === r ? d : o(d.clone().lerp(p, m / f))
						}
						for (var l = 0; r > l; l++)
							for (var m = 0; 2 * (r - l) - 1 > m; m++) {
								var v = Math.floor(m / 2);
								m % 2 === 0 ? a(h[l][v + 1], h[l + 1][v], h[l][v], c) : a(h[l][v + 1], h[l + 1][v + 1], h[l + 1][v], c)
							}
					}

					function h(e) {
						return Math.atan2(e.z, -e.x)
					}

					function c(e) {
						return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
					}

					function l(e, t, r) {
						return 0 > r && 1 === e.x && (e = new n.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new n.Vector2(r / 2 / Math.PI + .5, e.y)), e.clone()
					}
					n.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
						vertices: e,
						indices: t,
						radius: r,
						detail: i
					}, r = r || 1, i = i || 0;
					for (var u = this, d = 0, p = e.length; p > d; d += 3) o(new n.Vector3(e[d], e[d + 1], e[d + 2]));
					for (var f = this.vertices, m = [], d = 0, v = 0, p = t.length; p > d; d += 3, v++) {
						var g = f[t[d]],
							y = f[t[d + 1]],
							x = f[t[d + 2]];
						m[v] = new n.Face3(g.index, y.index, x.index, [g.clone(), y.clone(), x.clone()], void 0, v)
					}
					for (var b = new n.Vector3, d = 0, p = m.length; p > d; d++) s(m[d], i);
					for (var d = 0, p = this.faceVertexUvs[0].length; p > d; d++) {
						var w = this.faceVertexUvs[0][d],
							M = w[0].x,
							_ = w[1].x,
							E = w[2].x,
							A = Math.max(M, _, E),
							S = Math.min(M, _, E);
						A > .9 && .1 > S && (.2 > M && (w[0].x += 1), .2 > _ && (w[1].x += 1), .2 > E && (w[2].x += 1))
					}
					for (var d = 0, p = this.vertices.length; p > d; d++) this.vertices[d].multiplyScalar(r);
					this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, r)
				}, n.PolyhedronGeometry.prototype = Object.create(n.Geometry.prototype), n.PolyhedronGeometry.prototype.constructor = n.PolyhedronGeometry, n.DodecahedronGeometry = function(e, t) {
					var r = (1 + Math.sqrt(5)) / 2,
						i = 1 / r,
						o = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, 0, -r, 0, -i, r, 0, -i, -r, 0, i, r, 0, i],
						a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
					n.PolyhedronGeometry.call(this, o, a, e, t), this.type = "DodecahedronGeometry", this.parameters = {
						radius: e,
						detail: t
					}
				}, n.DodecahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.DodecahedronGeometry.prototype.constructor = n.DodecahedronGeometry, n.IcosahedronGeometry = function(e, t) {
					var r = (1 + Math.sqrt(5)) / 2,
						i = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1],
						o = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
					n.PolyhedronGeometry.call(this, i, o, e, t), this.type = "IcosahedronGeometry", this.parameters = {
						radius: e,
						detail: t
					}
				}, n.IcosahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.IcosahedronGeometry.prototype.constructor = n.IcosahedronGeometry, n.OctahedronGeometry = function(e, t) {
					var r = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
						i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
					n.PolyhedronGeometry.call(this, r, i, e, t), this.type = "OctahedronGeometry", this.parameters = {
						radius: e,
						detail: t
					}
				}, n.OctahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.OctahedronGeometry.prototype.constructor = n.OctahedronGeometry, n.TetrahedronGeometry = function(e, t) {
					var r = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
						i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
					n.PolyhedronGeometry.call(this, r, i, e, t), this.type = "TetrahedronGeometry", this.parameters = {
						radius: e,
						detail: t
					}
				}, n.TetrahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.TetrahedronGeometry.prototype.constructor = n.TetrahedronGeometry, n.ParametricGeometry = function(e, t, r) {
					n.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {
						func: e,
						slices: t,
						stacks: r
					};
					var i, o, a, s, h, c = this.vertices,
						l = this.faces,
						u = this.faceVertexUvs[0],
						d = t + 1;
					for (i = 0; r >= i; i++)
						for (h = i / r, o = 0; t >= o; o++) s = o / t, a = e(s, h), c.push(a);
					var p, f, m, v, g, y, x, b;
					for (i = 0; r > i; i++)
						for (o = 0; t > o; o++) p = i * d + o, f = i * d + o + 1, m = (i + 1) * d + o + 1, v = (i + 1) * d + o, g = new n.Vector2(o / t, i / r), y = new n.Vector2((o + 1) / t, i / r), x = new n.Vector2((o + 1) / t, (i + 1) / r), b = new n.Vector2(o / t, (i + 1) / r), l.push(new n.Face3(p, f, v)), u.push([g, y, b]), l.push(new n.Face3(f, m, v)), u.push([y.clone(), x, b.clone()]);
					this.computeFaceNormals(), this.computeVertexNormals()
				}, n.ParametricGeometry.prototype = Object.create(n.Geometry.prototype), n.ParametricGeometry.prototype.constructor = n.ParametricGeometry, n.WireframeGeometry = function(e) {
					function t(e, t) {
						return e - t
					}
					n.BufferGeometry.call(this);
					var r = [0, 0],
						i = {},
						o = ["a", "b", "c"];
					if (e instanceof n.Geometry) {
						for (var a = e.vertices, s = e.faces, h = 0, c = new Uint32Array(6 * s.length), l = 0, u = s.length; u > l; l++)
							for (var d = s[l], p = 0; 3 > p; p++) {
								r[0] = d[o[p]], r[1] = d[o[(p + 1) % 3]], r.sort(t);
								var f = r.toString();
								void 0 === i[f] && (c[2 * h] = r[0], c[2 * h + 1] = r[1], i[f] = !0, h++)
							}
						for (var m = new Float32Array(2 * h * 3), l = 0, u = h; u > l; l++)
							for (var p = 0; 2 > p; p++) {
								var v = a[c[2 * l + p]],
									g = 6 * l + 3 * p;
								m[g + 0] = v.x, m[g + 1] = v.y, m[g + 2] = v.z
							}
						this.addAttribute("position", new n.BufferAttribute(m, 3))
					} else if (e instanceof n.BufferGeometry)
						if (null !== e.index) {
							var y = e.index.array,
								a = e.attributes.position,
								x = e.groups,
								h = 0;
							0 === x.length && e.addGroup(0, y.length);
							for (var c = new Uint32Array(2 * y.length), b = 0, w = x.length; w > b; ++b)
								for (var M = x[b], _ = M.start, E = M.count, l = _, A = _ + E; A > l; l += 3)
									for (var p = 0; 3 > p; p++) {
										r[0] = y[l + p], r[1] = y[l + (p + 1) % 3], r.sort(t);
										var f = r.toString();
										void 0 === i[f] && (c[2 * h] = r[0], c[2 * h + 1] = r[1], i[f] = !0, h++)
									}
							for (var m = new Float32Array(2 * h * 3), l = 0, u = h; u > l; l++)
								for (var p = 0; 2 > p; p++) {
									var g = 6 * l + 3 * p,
										S = c[2 * l + p];
									m[g + 0] = a.getX(S), m[g + 1] = a.getY(S), m[g + 2] = a.getZ(S)
								}
							this.addAttribute("position", new n.BufferAttribute(m, 3))
						} else {
							for (var a = e.attributes.position.array, h = a.length / 3, C = h / 3, m = new Float32Array(2 * h * 3), l = 0, u = C; u > l; l++)
								for (var p = 0; 3 > p; p++) {
									var g = 18 * l + 6 * p,
										T = 9 * l + 3 * p;
									m[g + 0] = a[T], m[g + 1] = a[T + 1], m[g + 2] = a[T + 2];
									var S = 9 * l + 3 * ((p + 1) % 3);
									m[g + 3] = a[S], m[g + 4] = a[S + 1], m[g + 5] = a[S + 2]
								}
							this.addAttribute("position", new n.BufferAttribute(m, 3))
						}
				}, n.WireframeGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.WireframeGeometry.prototype.constructor = n.WireframeGeometry, n.AxisHelper = function(e) {
					e = e || 1;
					var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]),
						r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]),
						i = new n.BufferGeometry;
					i.addAttribute("position", new n.BufferAttribute(t, 3)), i.addAttribute("color", new n.BufferAttribute(r, 3));
					var o = new n.LineBasicMaterial({
						vertexColors: n.VertexColors
					});
					n.LineSegments.call(this, i, o)
				}, n.AxisHelper.prototype = Object.create(n.LineSegments.prototype), n.AxisHelper.prototype.constructor = n.AxisHelper, n.ArrowHelper = function() {
					var e = new n.Geometry;
					e.vertices.push(new n.Vector3(0, 0, 0), new n.Vector3(0, 1, 0));
					var t = new n.CylinderGeometry(0, .5, 1, 5, 1);
					return t.translate(0, -.5, 0),
						function(r, i, o, a, s, h) {
							n.Object3D.call(this), void 0 === a && (a = 16776960), void 0 === o && (o = 1), void 0 === s && (s = .2 * o), void 0 === h && (h = .2 * s), this.position.copy(i), this.line = new n.Line(e, new n.LineBasicMaterial({
								color: a
							})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new n.Mesh(t, new n.MeshBasicMaterial({
								color: a
							})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(r), this.setLength(o, s, h)
						}
				}(), n.ArrowHelper.prototype = Object.create(n.Object3D.prototype), n.ArrowHelper.prototype.constructor = n.ArrowHelper, n.ArrowHelper.prototype.setDirection = function() {
					var e, t = new n.Vector3;
					return function(r) {
						r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(r.z, 0, -r.x).normalize(), e = Math.acos(r.y), this.quaternion.setFromAxisAngle(t, e))
					}
				}(), n.ArrowHelper.prototype.setLength = function(e, t, r) {
					void 0 === t && (t = .2 * e), void 0 === r && (r = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(r, t, r), this.cone.position.y = e, this.cone.updateMatrix()
				}, n.ArrowHelper.prototype.setColor = function(e) {
					this.line.material.color.set(e), this.cone.material.color.set(e)
				}, n.BoxHelper = function(e) {
					var t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
						r = new Float32Array(24),
						i = new n.BufferGeometry;
					i.setIndex(new n.BufferAttribute(t, 1)), i.addAttribute("position", new n.BufferAttribute(r, 3)), n.LineSegments.call(this, i, new n.LineBasicMaterial({
						color: 16776960
					})), void 0 !== e && this.update(e)
				}, n.BoxHelper.prototype = Object.create(n.LineSegments.prototype), n.BoxHelper.prototype.constructor = n.BoxHelper, n.BoxHelper.prototype.update = function() {
					var e = new n.Box3;
					return function(t) {
						if (e.setFromObject(t), !e.isEmpty()) {
							var r = e.min,
								i = e.max,
								n = this.geometry.attributes.position,
								o = n.array;
							o[0] = i.x, o[1] = i.y, o[2] = i.z, o[3] = r.x, o[4] = i.y, o[5] = i.z, o[6] = r.x, o[7] = r.y, o[8] = i.z, o[9] = i.x, o[10] = r.y, o[11] = i.z, o[12] = i.x, o[13] = i.y, o[14] = r.z, o[15] = r.x, o[16] = i.y, o[17] = r.z, o[18] = r.x, o[19] = r.y, o[20] = r.z, o[21] = i.x, o[22] = r.y, o[23] = r.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
						}
					}
				}(), n.BoundingBoxHelper = function(e, t) {
					var r = void 0 !== t ? t : 8947848;
					this.object = e, this.box = new n.Box3, n.Mesh.call(this, new n.BoxGeometry(1, 1, 1), new n.MeshBasicMaterial({
						color: r,
						wireframe: !0
					}))
				}, n.BoundingBoxHelper.prototype = Object.create(n.Mesh.prototype), n.BoundingBoxHelper.prototype.constructor = n.BoundingBoxHelper, n.BoundingBoxHelper.prototype.update = function() {
					this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
				}, n.CameraHelper = function(e) {
					function t(e, t, i) {
						r(e, i), r(t, i)
					}

					function r(e, t) {
						i.vertices.push(new n.Vector3), i.colors.push(new n.Color(t)), void 0 === a[e] && (a[e] = []), a[e].push(i.vertices.length - 1)
					}
					var i = new n.Geometry,
						o = new n.LineBasicMaterial({
							color: 16777215,
							vertexColors: n.FaceColors
						}),
						a = {},
						s = 16755200,
						h = 16711680,
						c = 43775,
						l = 16777215,
						u = 3355443;
					t("n1", "n2", s), t("n2", "n4", s), t("n4", "n3", s), t("n3", "n1", s), t("f1", "f2", s), t("f2", "f4", s), t("f4", "f3", s), t("f3", "f1", s), t("n1", "f1", s), t("n2", "f2", s), t("n3", "f3", s), t("n4", "f4", s), t("p", "n1", h), t("p", "n2", h), t("p", "n3", h), t("p", "n4", h), t("u1", "u2", c), t("u2", "u3", c), t("u3", "u1", c), t("c", "t", l), t("p", "c", u), t("cn1", "cn2", u), t("cn3", "cn4", u), t("cf1", "cf2", u), t("cf3", "cf4", u), n.LineSegments.call(this, i, o), this.camera = e, this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
				}, n.CameraHelper.prototype = Object.create(n.LineSegments.prototype), n.CameraHelper.prototype.constructor = n.CameraHelper, n.CameraHelper.prototype.update = function() {
					function e(e, n, a, s) {
						i.set(n, a, s).unproject(o);
						var h = r[e];
						if (void 0 !== h)
							for (var c = 0, l = h.length; l > c; c++) t.vertices[h[c]].copy(i)
					}
					var t, r, i = new n.Vector3,
						o = new n.Camera;
					return function() {
						t = this.geometry, r = this.pointMap;
						var i = 1,
							n = 1;
						o.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -i, -n, -1), e("n2", i, -n, -1), e("n3", -i, n, -1), e("n4", i, n, -1), e("f1", -i, -n, 1), e("f2", i, -n, 1), e("f3", -i, n, 1), e("f4", i, n, 1), e("u1", .7 * i, 1.1 * n, -1), e("u2", .7 * -i, 1.1 * n, -1), e("u3", 0, 2 * n, -1), e("cf1", -i, 0, 1), e("cf2", i, 0, 1), e("cf3", 0, -n, 1), e("cf4", 0, n, 1), e("cn1", -i, 0, -1), e("cn2", i, 0, -1), e("cn3", 0, -n, -1), e("cn4", 0, n, -1), t.verticesNeedUpdate = !0
					}
				}(), n.DirectionalLightHelper = function(e, t) {
					n.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, t = t || 1;
					var r = new n.Geometry;
					r.vertices.push(new n.Vector3(-t, t, 0), new n.Vector3(t, t, 0), new n.Vector3(t, -t, 0), new n.Vector3(-t, -t, 0), new n.Vector3(-t, t, 0));
					var i = new n.LineBasicMaterial({
						fog: !1
					});
					i.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new n.Line(r, i), this.add(this.lightPlane), r = new n.Geometry, r.vertices.push(new n.Vector3, new n.Vector3), i = new n.LineBasicMaterial({
						fog: !1
					}), i.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new n.Line(r, i), this.add(this.targetLine), this.update()
				}, n.DirectionalLightHelper.prototype = Object.create(n.Object3D.prototype), n.DirectionalLightHelper.prototype.constructor = n.DirectionalLightHelper, n.DirectionalLightHelper.prototype.dispose = function() {
					this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
				}, n.DirectionalLightHelper.prototype.update = function() {
					var e = new n.Vector3,
						t = new n.Vector3,
						r = new n.Vector3;
					return function() {
						e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), r.subVectors(t, e), this.lightPlane.lookAt(r), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(r), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
					}
				}(), n.EdgesHelper = function(e, t, r) {
					var i = void 0 !== t ? t : 16777215;
					n.LineSegments.call(this, new n.EdgesGeometry(e.geometry, r), new n.LineBasicMaterial({
						color: i
					})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
				}, n.EdgesHelper.prototype = Object.create(n.LineSegments.prototype), n.EdgesHelper.prototype.constructor = n.EdgesHelper, n.FaceNormalsHelper = function(e, t, r, i) {
					this.object = e, this.size = void 0 !== t ? t : 1;
					var o = void 0 !== r ? r : 16776960,
						a = void 0 !== i ? i : 1,
						s = 0,
						h = this.object.geometry;
					h instanceof n.Geometry ? s = h.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
					var c = new n.BufferGeometry,
						l = new n.Float32Attribute(2 * s * 3, 3);
					c.addAttribute("position", l), n.LineSegments.call(this, c, new n.LineBasicMaterial({
						color: o,
						linewidth: a
					})), this.matrixAutoUpdate = !1, this.update()
				}, n.FaceNormalsHelper.prototype = Object.create(n.LineSegments.prototype), n.FaceNormalsHelper.prototype.constructor = n.FaceNormalsHelper, n.FaceNormalsHelper.prototype.update = function() {
					var e = new n.Vector3,
						t = new n.Vector3,
						r = new n.Matrix3;
					return function() {
						this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
						for (var i = this.object.matrixWorld, n = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, h = 0, c = 0, l = s.length; l > c; c++) {
							var u = s[c],
								d = u.normal;
							e.copy(a[u.a]).add(a[u.b]).add(a[u.c]).divideScalar(3).applyMatrix4(i), t.copy(d).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), n.setXYZ(h, e.x, e.y, e.z), h += 1, n.setXYZ(h, t.x, t.y, t.z), h += 1
						}
						return n.needsUpdate = !0, this
					}
				}(), n.GridHelper = function(e, t) {
					var r = new n.Geometry,
						i = new n.LineBasicMaterial({
							vertexColors: n.VertexColors
						});
					this.color1 = new n.Color(4473924), this.color2 = new n.Color(8947848);
					for (var o = -e; e >= o; o += t) {
						r.vertices.push(new n.Vector3(-e, 0, o), new n.Vector3(e, 0, o), new n.Vector3(o, 0, -e), new n.Vector3(o, 0, e));
						var a = 0 === o ? this.color1 : this.color2;
						r.colors.push(a, a, a, a)
					}
					n.LineSegments.call(this, r, i)
				}, n.GridHelper.prototype = Object.create(n.LineSegments.prototype), n.GridHelper.prototype.constructor = n.GridHelper, n.GridHelper.prototype.setColors = function(e, t) {
					this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0
				}, n.HemisphereLightHelper = function(e, t) {
					n.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new n.Color, new n.Color];
					var r = new n.SphereGeometry(t, 4, 2);
					r.rotateX(-Math.PI / 2);
					for (var i = 0, o = 8; o > i; i++) r.faces[i].color = this.colors[4 > i ? 0 : 1];
					var a = new n.MeshBasicMaterial({
						vertexColors: n.FaceColors,
						wireframe: !0
					});
					this.lightSphere = new n.Mesh(r, a), this.add(this.lightSphere), this.update()
				}, n.HemisphereLightHelper.prototype = Object.create(n.Object3D.prototype), n.HemisphereLightHelper.prototype.constructor = n.HemisphereLightHelper, n.HemisphereLightHelper.prototype.dispose = function() {
					this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
				}, n.HemisphereLightHelper.prototype.update = function() {
					var e = new n.Vector3;
					return function() {
						this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
					}
				}(), n.PointLightHelper = function(e, t) {
					this.light = e, this.light.updateMatrixWorld();
					var r = new n.SphereGeometry(t, 4, 2),
						i = new n.MeshBasicMaterial({
							wireframe: !0,
							fog: !1
						});
					i.color.copy(this.light.color).multiplyScalar(this.light.intensity), n.Mesh.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
				}, n.PointLightHelper.prototype = Object.create(n.Mesh.prototype), n.PointLightHelper.prototype.constructor = n.PointLightHelper, n.PointLightHelper.prototype.dispose = function() {
					this.geometry.dispose(), this.material.dispose()
				}, n.PointLightHelper.prototype.update = function() {
					this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
				}, n.SkeletonHelper = function(e) {
					this.bones = this.getBoneList(e);
					for (var t = new n.Geometry, r = 0; r < this.bones.length; r++) {
						var i = this.bones[r];
						i.parent instanceof n.Bone && (t.vertices.push(new n.Vector3), t.vertices.push(new n.Vector3), t.colors.push(new n.Color(0, 0, 1)), t.colors.push(new n.Color(0, 1, 0)))
					}
					t.dynamic = !0;
					var o = new n.LineBasicMaterial({
						vertexColors: n.VertexColors,
						depthTest: !1,
						depthWrite: !1,
						transparent: !0
					});
					n.LineSegments.call(this, t, o), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update()
				}, n.SkeletonHelper.prototype = Object.create(n.LineSegments.prototype), n.SkeletonHelper.prototype.constructor = n.SkeletonHelper, n.SkeletonHelper.prototype.getBoneList = function(e) {
					var t = [];
					e instanceof n.Bone && t.push(e);
					for (var r = 0; r < e.children.length; r++) t.push.apply(t, this.getBoneList(e.children[r]));
					return t
				}, n.SkeletonHelper.prototype.update = function() {
					for (var e = this.geometry, t = (new n.Matrix4).getInverse(this.root.matrixWorld), r = new n.Matrix4, i = 0, o = 0; o < this.bones.length; o++) {
						var a = this.bones[o];
						a.parent instanceof n.Bone && (r.multiplyMatrices(t, a.matrixWorld), e.vertices[i].setFromMatrixPosition(r), r.multiplyMatrices(t, a.parent.matrixWorld), e.vertices[i + 1].setFromMatrixPosition(r), i += 2)
					}
					e.verticesNeedUpdate = !0, e.computeBoundingSphere()
				}, n.SpotLightHelper = function(e) {
					n.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
					var t = new n.CylinderGeometry(0, 1, 1, 8, 1, !0);
					t.translate(0, -.5, 0), t.rotateX(-Math.PI / 2);
					var r = new n.MeshBasicMaterial({
						wireframe: !0,
						fog: !1
					});
					this.cone = new n.Mesh(t, r), this.add(this.cone), this.update()
				}, n.SpotLightHelper.prototype = Object.create(n.Object3D.prototype), n.SpotLightHelper.prototype.constructor = n.SpotLightHelper, n.SpotLightHelper.prototype.dispose = function() {
					this.cone.geometry.dispose(), this.cone.material.dispose()
				}, n.SpotLightHelper.prototype.update = function() {
					var e = new n.Vector3,
						t = new n.Vector3;
					return function() {
						var r = this.light.distance ? this.light.distance : 1e4,
							i = r * Math.tan(this.light.angle);
						this.cone.scale.set(i, i, r), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
					}
				}(), n.VertexNormalsHelper = function(e, t, r, i) {
					this.object = e, this.size = void 0 !== t ? t : 1;
					var o = void 0 !== r ? r : 16711680,
						a = void 0 !== i ? i : 1,
						s = 0,
						h = this.object.geometry;
					h instanceof n.Geometry ? s = 3 * h.faces.length : h instanceof n.BufferGeometry && (s = h.attributes.normal.count);
					var c = new n.BufferGeometry,
						l = new n.Float32Attribute(2 * s * 3, 3);
					c.addAttribute("position", l), n.LineSegments.call(this, c, new n.LineBasicMaterial({
						color: o,
						linewidth: a
					})), this.matrixAutoUpdate = !1, this.update()
				}, n.VertexNormalsHelper.prototype = Object.create(n.LineSegments.prototype), n.VertexNormalsHelper.prototype.constructor = n.VertexNormalsHelper, n.VertexNormalsHelper.prototype.update = function() {
					var e = new n.Vector3,
						t = new n.Vector3,
						r = new n.Matrix3;
					return function() {
						var i = ["a", "b", "c"];
						this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
						var o = this.object.matrixWorld,
							a = this.geometry.attributes.position,
							s = this.object.geometry;
						if (s instanceof n.Geometry)
							for (var h = s.vertices, c = s.faces, l = 0, u = 0, d = c.length; d > u; u++)
								for (var p = c[u], f = 0, m = p.vertexNormals.length; m > f; f++) {
									var v = h[p[i[f]]],
										g = p.vertexNormals[f];
									e.copy(v).applyMatrix4(o), t.copy(g).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), a.setXYZ(l, e.x, e.y, e.z), l += 1, a.setXYZ(l, t.x, t.y, t.z), l += 1
								} else if (s instanceof n.BufferGeometry)
									for (var y = s.attributes.position, x = s.attributes.normal, l = 0, f = 0, m = y.count; m > f; f++) e.set(y.getX(f), y.getY(f), y.getZ(f)).applyMatrix4(o), t.set(x.getX(f), x.getY(f), x.getZ(f)), t.applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), a.setXYZ(l, e.x, e.y, e.z), l += 1, a.setXYZ(l, t.x, t.y, t.z), l += 1;
						return a.needsUpdate = !0, this
					}
				}(), n.WireframeHelper = function(e, t) {
					var r = void 0 !== t ? t : 16777215;
					n.LineSegments.call(this, new n.WireframeGeometry(e.geometry), new n.LineBasicMaterial({
						color: r
					})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
				}, n.WireframeHelper.prototype = Object.create(n.LineSegments.prototype), n.WireframeHelper.prototype.constructor = n.WireframeHelper, n.ImmediateRenderObject = function(e) {
					n.Object3D.call(this), this.material = e, this.render = function() {}
				}, n.ImmediateRenderObject.prototype = Object.create(n.Object3D.prototype), n.ImmediateRenderObject.prototype.constructor = n.ImmediateRenderObject, n.MorphBlendMesh = function(e, t) {
					n.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
					var r = this.geometry.morphTargets.length,
						i = "__default",
						o = 0,
						a = r - 1,
						s = r / 1;
					this.createAnimation(i, o, a, s), this.setAnimationWeight(i, 1)
				}, n.MorphBlendMesh.prototype = Object.create(n.Mesh.prototype), n.MorphBlendMesh.prototype.constructor = n.MorphBlendMesh, n.MorphBlendMesh.prototype.createAnimation = function(e, t, r, i) {
					var n = {
						start: t,
						end: r,
						length: r - t + 1,
						fps: i,
						duration: (r - t) / i,
						lastFrame: 0,
						currentFrame: 0,
						active: !1,
						time: 0,
						direction: 1,
						weight: 1,
						directionBackwards: !1,
						mirroredLoop: !1
					};
					this.animationsMap[e] = n, this.animationsList.push(n)
				}, n.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
					for (var t, r = /([a-z]+)_?(\d+)/i, i = {}, n = this.geometry, o = 0, a = n.morphTargets.length; a > o; o++) {
						var s = n.morphTargets[o],
							h = s.name.match(r);
						if (h && h.length > 1) {
							var c = h[1];
							i[c] || (i[c] = {
								start: 1 / 0,
								end: -(1 / 0)
							});
							var l = i[c];
							o < l.start && (l.start = o), o > l.end && (l.end = o), t || (t = c)
						}
					}
					for (var c in i) {
						var l = i[c];
						this.createAnimation(c, l.start, l.end, e)
					}
					this.firstAnimation = t
				}, n.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
					var t = this.animationsMap[e];
					t && (t.direction = 1, t.directionBackwards = !1)
				}, n.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
					var t = this.animationsMap[e];
					t && (t.direction = -1, t.directionBackwards = !0)
				}, n.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
					var r = this.animationsMap[e];
					r && (r.fps = t, r.duration = (r.end - r.start) / r.fps)
				}, n.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
					var r = this.animationsMap[e];
					r && (r.duration = t, r.fps = (r.end - r.start) / r.duration)
				}, n.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
					var r = this.animationsMap[e];
					r && (r.weight = t)
				}, n.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
					var r = this.animationsMap[e];
					r && (r.time = t)
				}, n.MorphBlendMesh.prototype.getAnimationTime = function(e) {
					var t = 0,
						r = this.animationsMap[e];
					return r && (t = r.time), t
				}, n.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
					var t = -1,
						r = this.animationsMap[e];
					return r && (t = r.duration), t
				}, n.MorphBlendMesh.prototype.playAnimation = function(e) {
					var t = this.animationsMap[e];
					t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
				}, n.MorphBlendMesh.prototype.stopAnimation = function(e) {
					var t = this.animationsMap[e];
					t && (t.active = !1)
				}, n.MorphBlendMesh.prototype.update = function(e) {
					for (var t = 0, r = this.animationsList.length; r > t; t++) {
						var i = this.animationsList[t];
						if (i.active) {
							var o = i.duration / i.length;
							i.time += i.direction * e, i.mirroredLoop ? (i.time > i.duration || i.time < 0) && (i.direction *= -1, i.time > i.duration && (i.time = i.duration, i.directionBackwards = !0), i.time < 0 && (i.time = 0, i.directionBackwards = !1)) : (i.time = i.time % i.duration, i.time < 0 && (i.time += i.duration));
							var a = i.start + n.Math.clamp(Math.floor(i.time / o), 0, i.length - 1),
								s = i.weight;
							a !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0, this.morphTargetInfluences[i.currentFrame] = 1 * s, this.morphTargetInfluences[a] = 0, i.lastFrame = i.currentFrame, i.currentFrame = a);
							var h = i.time % o / o;
							i.directionBackwards && (h = 1 - h), i.currentFrame !== i.lastFrame ? (this.morphTargetInfluences[i.currentFrame] = h * s, this.morphTargetInfluences[i.lastFrame] = (1 - h) * s) : this.morphTargetInfluences[i.currentFrame] = s
						}
					}
				}, "undefined" != typeof i ? ("undefined" != typeof r && r.exports && (i = r.exports = n), i.THREE = n) : this.THREE = n
		}, {}],
		22: [function(e, r, i) {
			! function(e) {
				if ("performance" in e == !1 && (e.performance = {}), Date.now = Date.now || function() {
						return (new Date).getTime()
					}, "now" in e.performance == !1) {
					var t = e.performance.timing && e.performance.timing.navigationStart ? performance.timing.navigationStart : Date.now();
					e.performance.now = function() {
						return Date.now() - t
					}
				}
			}(this);
			var n = n || function() {
				var e = [];
				return {
					REVISION: "14",
					getAll: function() {
						return e
					},
					removeAll: function() {
						e = []
					},
					add: function(t) {
						e.push(t)
					},
					remove: function(t) {
						var r = e.indexOf(t); - 1 !== r && e.splice(r, 1)
					},
					update: function(t) {
						if (0 === e.length) return !1;
						var r = 0;
						for (t = void 0 !== t ? t : window.performance.now(); r < e.length;) e[r].update(t) ? r++ : e.splice(r, 1);
						return !0
					}
				}
			}();
			n.Tween = function(e) {
					var t = e,
						r = {},
						i = {},
						o = {},
						a = 1e3,
						s = 0,
						h = !1,
						c = !1,
						l = !1,
						u = 0,
						d = null,
						p = n.Easing.Linear.None,
						f = n.Interpolation.Linear,
						m = [],
						v = null,
						g = !1,
						y = null,
						x = null,
						b = null;
					for (var w in e) r[w] = parseFloat(e[w], 10);
					this.to = function(e, t) {
						return void 0 !== t && (a = t), i = e, this
					}, this.start = function(e) {
						n.add(this), c = !0, g = !1, d = void 0 !== e ? e : window.performance.now(), d += u;
						for (var a in i) {
							if (i[a] instanceof Array) {
								if (0 === i[a].length) continue;
								i[a] = [t[a]].concat(i[a])
							}
							r[a] = t[a], r[a] instanceof Array == !1 && (r[a] *= 1), o[a] = r[a] || 0
						}
						return this
					}, this.stop = function() {
						return c ? (n.remove(this), c = !1, null !== b && b.call(t), this.stopChainedTweens(), this) : this
					}, this.stopChainedTweens = function() {
						for (var e = 0, t = m.length; t > e; e++) m[e].stop()
					}, this.delay = function(e) {
						return u = e, this
					}, this.repeat = function(e) {
						return s = e, this
					}, this.yoyo = function(e) {
						return h = e, this
					}, this.easing = function(e) {
						return p = e, this
					}, this.interpolation = function(e) {
						return f = e, this
					}, this.chain = function() {
						return m = arguments, this
					}, this.onStart = function(e) {
						return v = e, this
					}, this.onUpdate = function(e) {
						return y = e, this
					}, this.onComplete = function(e) {
						return x = e, this
					}, this.onStop = function(e) {
						return b = e, this
					}, this.update = function(e) {
						var n;
						if (d > e) return !0;
						g === !1 && (null !== v && v.call(t), g = !0);
						var c = (e - d) / a;
						c = c > 1 ? 1 : c;
						var b = p(c);
						for (n in i) {
							var w = r[n] || 0,
								M = i[n];
							M instanceof Array ? t[n] = f(M, b) : ("string" == typeof M && (M = w + parseFloat(M, 10)), "number" == typeof M && (t[n] = w + (M - w) * b))
						}
						if (null !== y && y.call(t, b), 1 == c) {
							if (s > 0) {
								isFinite(s) && s--;
								for (n in o) {
									if ("string" == typeof i[n] && (o[n] = o[n] + parseFloat(i[n], 10)), h) {
										var _ = o[n];
										o[n] = i[n], i[n] = _
									}
									r[n] = o[n]
								}
								return h && (l = !l), d = e + u, !0
							}
							null !== x && x.call(t);
							for (var E = 0, A = m.length; A > E; E++) m[E].start(e);
							return !1
						}
						return !0
					}
				}, n.Easing = {
					Linear: {
						None: function(e) {
							return e
						}
					},
					Quadratic: {
						In: function(e) {
							return e * e
						},
						Out: function(e) {
							return e * (2 - e)
						},
						InOut: function(e) {
							return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
						}
					},
					Cubic: {
						In: function(e) {
							return e * e * e
						},
						Out: function(e) {
							return --e * e * e + 1
						},
						InOut: function(e) {
							return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
						}
					},
					Quartic: {
						In: function(e) {
							return e * e * e * e
						},
						Out: function(e) {
							return 1 - --e * e * e * e
						},
						InOut: function(e) {
							return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
						}
					},
					Quintic: {
						In: function(e) {
							return e * e * e * e * e
						},
						Out: function(e) {
							return --e * e * e * e * e + 1
						},
						InOut: function(e) {
							return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
						}
					},
					Sinusoidal: {
						In: function(e) {
							return 1 - Math.cos(e * Math.PI / 2)
						},
						Out: function(e) {
							return Math.sin(e * Math.PI / 2)
						},
						InOut: function(e) {
							return .5 * (1 - Math.cos(Math.PI * e))
						}
					},
					Exponential: {
						In: function(e) {
							return 0 === e ? 0 : Math.pow(1024, e - 1)
						},
						Out: function(e) {
							return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
						},
						InOut: function(e) {
							return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
						}
					},
					Circular: {
						In: function(e) {
							return 1 - Math.sqrt(1 - e * e)
						},
						Out: function(e) {
							return Math.sqrt(1 - --e * e)
						},
						InOut: function(e) {
							return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
						}
					},
					Elastic: {
						In: function(e) {
							var t, r = .1,
								i = .4;
							return 0 === e ? 0 : 1 === e ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / i)))
						},
						Out: function(e) {
							var t, r = .1,
								i = .4;
							return 0 === e ? 0 : 1 === e ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin(2 * (e - t) * Math.PI / i) + 1)
						},
						InOut: function(e) {
							var t, r = .1,
								i = .4;
							return 0 === e ? 0 : 1 === e ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / i) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / i) * .5 + 1)
						}
					},
					Back: {
						In: function(e) {
							var t = 1.70158;
							return e * e * ((t + 1) * e - t)
						},
						Out: function(e) {
							var t = 1.70158;
							return --e * e * ((t + 1) * e + t) + 1
						},
						InOut: function(e) {
							var t = 2.5949095;
							return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
						}
					},
					Bounce: {
						In: function(e) {
							return 1 - n.Easing.Bounce.Out(1 - e)
						},
						Out: function(e) {
							return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
						},
						InOut: function(e) {
							return .5 > e ? .5 * n.Easing.Bounce.In(2 * e) : .5 * n.Easing.Bounce.Out(2 * e - 1) + .5
						}
					}
				}, n.Interpolation = {
					Linear: function(e, t) {
						var r = e.length - 1,
							i = r * t,
							o = Math.floor(i),
							a = n.Interpolation.Utils.Linear;
						return 0 > t ? a(e[0], e[1], i) : t > 1 ? a(e[r], e[r - 1], r - i) : a(e[o], e[o + 1 > r ? r : o + 1], i - o)
					},
					Bezier: function(e, t) {
						var r, i = 0,
							o = e.length - 1,
							a = Math.pow,
							s = n.Interpolation.Utils.Bernstein;
						for (r = 0; o >= r; r++) i += a(1 - t, o - r) * a(t, r) * e[r] * s(o, r);
						return i
					},
					CatmullRom: function(e, t) {
						var r = e.length - 1,
							i = r * t,
							o = Math.floor(i),
							a = n.Interpolation.Utils.CatmullRom;
						return e[0] === e[r] ? (0 > t && (o = Math.floor(i = r * (1 + t))), a(e[(o - 1 + r) % r], e[o], e[(o + 1) % r], e[(o + 2) % r], i - o)) : 0 > t ? e[0] - (a(e[0], e[0], e[1], e[1], -i) - e[0]) : t > 1 ? e[r] - (a(e[r], e[r], e[r - 1], e[r - 1], i - r) - e[r]) : a(e[o ? o - 1 : 0], e[o], e[o + 1 > r ? r : o + 1], e[o + 2 > r ? r : o + 2], i - o)
					},
					Utils: {
						Linear: function(e, t, r) {
							return (t - e) * r + e
						},
						Bernstein: function(e, t) {
							var r = n.Interpolation.Utils.Factorial;
							return r(e) / r(t) / r(e - t)
						},
						Factorial: function() {
							var e = [1];
							return function(t) {
								var r, i = 1;
								if (e[t]) return e[t];
								for (r = t; r > 1; r--) i *= r;
								return e[t] = i
							}
						}(),
						CatmullRom: function(e, t, r, i, n) {
							var o = .5 * (r - e),
								a = .5 * (i - t),
								s = n * n,
								h = n * s;
							return (2 * t - 2 * r + o + a) * h + (-3 * t + 3 * r - 2 * o - a) * s + o * n + t
						}
					}
				},
				function(e) {
					"function" == typeof t && t.amd ? t([], function() {
						return n
					}) : "object" == typeof i ? r.exports = n : e.TWEEN = n
				}(this)
		}, {}],
		23: [function(e) {
			! function t(r, i, n) {
				function o(s, h) {
					if (!i[s]) {
						if (!r[s]) {
							var c = "function" == typeof e && e;
							if (!h && c) return c(s, !0);
							if (a) return a(s, !0);
							var l = new Error("Cannot find module '" + s + "'");
							throw l.code = "MODULE_NOT_FOUND", l
						}
						var u = i[s] = {
							exports: {}
						};
						r[s][0].call(u.exports, function(e) {
							var t = r[s][1][e];
							return o(t ? t : e)
						}, u, u.exports, t, r, i, n)
					}
					return i[s].exports
				}
				for (var a = "function" == typeof e && e, s = 0; s < n.length; s++) o(n[s]);
				return o
			}({
				1: [function(e, t) {
					function r() {
						this.hardwareUnitId = "webvr-polyfill hardwareUnitId", this.deviceId = "webvr-polyfill deviceId", this.deviceName = "webvr-polyfill deviceName"
					}

					function i() {}

					function n() {}
					i.prototype = new r, n.prototype = new r, t.exports.VRDevice = r, t.exports.HMDVRDevice = i, t.exports.PositionSensorVRDevice = n
				}, {}],
				2: [function(e, t) {
					function r() {
						this.fov = {
							upDegrees: s,
							downDegrees: a,
							leftDegrees: o,
							rightDegrees: o
						}, this.eyeTranslationLeft = {
							x: n * -.5,
							y: 0,
							z: 0
						}, this.eyeTranslationRight = {
							x: .5 * n,
							y: 0,
							z: 0
						}
					}
					var i = e("./base.js").HMDVRDevice,
						n = .06,
						o = 40,
						a = 40,
						s = 40;
					r.prototype = new i, r.prototype.getEyeParameters = function(e) {
						var t;
						if ("left" == e) t = this.eyeTranslationLeft;
						else {
							if ("right" != e) return console.error("Invalid eye provided: %s", e), null;
							t = this.eyeTranslationRight
						}
						return {
							recommendedFieldOfView: this.fov,
							eyeTranslation: t
						}
					}, t.exports = r
				}, {
					"./base.js": 1
				}],
				3: [function(e, t) {
					function r(e) {
						this.kFilter = e, this.currentAccelMeasurement = new i, this.currentGyroMeasurement = new i, this.previousGyroMeasurement = new i, this.filterQ = new n.Quaternion, this.previousFilterQ = new n.Quaternion, this.accelQ = new n.Quaternion, this.isOrientationInitialized = !1, this.estimatedGravity = new n.Vector3, this.measuredGravity = new n.Vector3, this.gyroIntegralQ = new n.Quaternion
					}
					var i = e("./sensor-sample.js"),
						n = e("./three-math.js"),
						o = e("./util.js"),
						a = !1;
					r.prototype.addAccelMeasurement = function(e, t) {
						this.currentAccelMeasurement.set(e, t)
					}, r.prototype.addGyroMeasurement = function(e, t) {
						this.currentGyroMeasurement.set(e, t);
						var r = t - this.previousGyroMeasurement.timestampS;
						o.isTimestampDeltaValid(r) && this.run_(), this.previousGyroMeasurement.copy(this.currentGyroMeasurement)
					}, r.prototype.run_ = function() {
						if (!this.isOrientationInitialized) return this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample), this.previousFilterQ.copy(this.accelQ), void(this.isOrientationInitialized = !0);
						var e = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS,
							t = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, e);
						this.gyroIntegralQ.multiply(t), this.filterQ.copy(this.previousFilterQ), this.filterQ.multiply(t);
						var r = new n.Quaternion;
						r.copy(this.filterQ), r.inverse(), this.estimatedGravity.set(0, 0, -1), this.estimatedGravity.applyQuaternion(r), this.estimatedGravity.normalize(), this.measuredGravity.copy(this.currentAccelMeasurement.sample), this.measuredGravity.normalize();
						var i = new n.Quaternion;
						i.setFromUnitVectors(this.estimatedGravity, this.measuredGravity), i.inverse(), a && console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)", n.Math.radToDeg(o.getQuaternionAngle(i)), this.estimatedGravity.x.toFixed(1), this.estimatedGravity.y.toFixed(1), this.estimatedGravity.z.toFixed(1), this.measuredGravity.x.toFixed(1), this.measuredGravity.y.toFixed(1), this.measuredGravity.z.toFixed(1));
						var s = new n.Quaternion;
						s.copy(this.filterQ), s.multiply(i), this.filterQ.slerp(s, 1 - this.kFilter), this.previousFilterQ.copy(this.filterQ)
					}, r.prototype.getOrientation = function() {
						return this.filterQ
					}, r.prototype.accelToQuaternion_ = function(e) {
						var t = new n.Vector3;
						t.copy(e), t.normalize();
						var r = new n.Quaternion;
						return r.setFromUnitVectors(new n.Vector3(0, 0, -1), t), r.inverse(), r
					}, r.prototype.gyroToQuaternionDelta_ = function(e, t) {
						var r = new n.Quaternion,
							i = new n.Vector3;
						return i.copy(e), i.normalize(), r.setFromAxisAngle(i, e.length() * t), r
					}, t.exports = r
				}, {
					"./sensor-sample.js": 8,
					"./three-math.js": 9,
					"./util.js": 11
				}],
				4: [function(e, t) {
					function r() {
						this.deviceId = "webvr-polyfill:fused", this.deviceName = "VR Position Device (webvr-polyfill:fused)", this.accelerometer = new s.Vector3, this.gyroscope = new s.Vector3, window.addEventListener("devicemotion", this.onDeviceMotionChange_.bind(this)), window.addEventListener("orientationchange", this.onScreenOrientationChange_.bind(this)), this.filter = new n(WebVRConfig.K_FILTER || .98), this.posePredictor = new o(WebVRConfig.PREDICTION_TIME_S || .04), this.touchPanner = new a, this.filterToWorldQ = new s.Quaternion, h.isIOS() ? this.filterToWorldQ.setFromAxisAngle(new s.Vector3(1, 0, 0), Math.PI / 2) : this.filterToWorldQ.setFromAxisAngle(new s.Vector3(1, 0, 0), -Math.PI / 2), this.worldToScreenQ = new s.Quaternion, this.setScreenTransform_(), this.resetQ = new s.Quaternion, this.isFirefoxAndroid = h.isFirefoxAndroid(), this.isIOS = h.isIOS()
					}
					var i = e("./base.js").PositionSensorVRDevice,
						n = e("./complementary-filter.js"),
						o = e("./pose-predictor.js"),
						a = e("./touch-panner.js"),
						s = e("./three-math.js"),
						h = e("./util.js");
					r.prototype = new i, r.prototype.getState = function() {
						return {
							hasOrientation: !0,
							orientation: this.getOrientation(),
							hasPosition: !1,
							position: null
						}
					}, r.prototype.getOrientation = function() {
						var e = this.filter.getOrientation();
						this.predictedQ = this.posePredictor.getPrediction(e, this.gyroscope, this.previousTimestampS);
						var t = new s.Quaternion;
						return t.copy(this.filterToWorldQ), t.multiply(this.resetQ), WebVRConfig.TOUCH_PANNER_DISABLED || t.multiply(this.touchPanner.getOrientation()), t.multiply(this.predictedQ), t.multiply(this.worldToScreenQ), WebVRConfig.YAW_ONLY && (t.x = 0, t.z = 0, t.normalize()), t
					}, r.prototype.resetSensor = function() {
						var e = new s.Euler;
						e.setFromQuaternion(this.filter.getOrientation());
						var t = e.y;
						console.log("resetSensor with yaw: %f", t), this.resetQ.setFromAxisAngle(new s.Vector3(0, 0, 1), -t), WebVRConfig.TOUCH_PANNER_DISABLED || this.touchPanner.resetSensor()
					}, r.prototype.onDeviceMotionChange_ = function(e) {
						var t = e.accelerationIncludingGravity,
							r = e.rotationRate,
							i = e.timeStamp / 1e3;
						this.isFirefoxAndroid && (i /= 1e3);
						var n = i - this.previousTimestampS;
						return n <= h.MIN_TIMESTEP || n > h.MAX_TIMESTEP ? (console.warn("Invalid timestamps detected. Time step between successive gyroscope sensor samples is very small or not monotonic"), void(this.previousTimestampS = i)) : (this.accelerometer.set(-t.x, -t.y, -t.z), this.gyroscope.set(r.alpha, r.beta, r.gamma), (this.isIOS || this.isFirefoxAndroid) && this.gyroscope.multiplyScalar(Math.PI / 180), this.filter.addAccelMeasurement(this.accelerometer, i), this.filter.addGyroMeasurement(this.gyroscope, i), void(this.previousTimestampS = i))
					}, r.prototype.onScreenOrientationChange_ = function() {
						this.setScreenTransform_()
					}, r.prototype.setScreenTransform_ = function() {
						switch (this.worldToScreenQ.set(0, 0, 0, 1), window.orientation) {
							case 0:
								break;
							case 90:
								this.worldToScreenQ.setFromAxisAngle(new s.Vector3(0, 0, 1), -Math.PI / 2);
								break;
							case -90:
								this.worldToScreenQ.setFromAxisAngle(new s.Vector3(0, 0, 1), Math.PI / 2);
								break;
							case 180:
						}
					}, t.exports = r
				}, {
					"./base.js": 1,
					"./complementary-filter.js": 3,
					"./pose-predictor.js": 7,
					"./three-math.js": 9,
					"./touch-panner.js": 10,
					"./util.js": 11
				}],
				5: [function(e) {
					var t = e("./webvr-polyfill.js");
					window.WebVRConfig = window.WebVRConfig || {}, new t
				}, {
					"./webvr-polyfill.js": 12
				}],
				6: [function(e, t) {
					function r() {
						this.deviceId = "webvr-polyfill:mouse-keyboard", this.deviceName = "VR Position Device (webvr-polyfill:mouse-keyboard)", window.addEventListener("keydown", this.onKeyDown_.bind(this)), window.addEventListener("mousemove", this.onMouseMove_.bind(this)), window.addEventListener("mousedown", this.onMouseDown_.bind(this)), window.addEventListener("mouseup", this.onMouseUp_.bind(this)), this.phi = 0, this.theta = 0, this.targetAngle = null, this.euler = new n.Euler, this.orientation = new n.Quaternion, this.rotateStart = new n.Vector2, this.rotateEnd = new n.Vector2, this.rotateDelta = new n.Vector2
					}
					var i = e("./base.js").PositionSensorVRDevice,
						n = e("./three-math.js"),
						o = e("./util.js"),
						a = .15,
						s = 80,
						h = .5,
						c = .3;
					r.prototype = new i, r.prototype.getState = function() {
						return this.euler.set(this.phi, this.theta, 0, "YXZ"), this.orientation.setFromEuler(this.euler), {
							hasOrientation: !0,
							orientation: this.orientation,
							hasPosition: !1,
							position: null
						}
					}, r.prototype.onKeyDown_ = function(e) {
						38 == e.keyCode ? this.animatePhi_(this.phi + a) : 39 == e.keyCode ? this.animateTheta_(this.theta - a) : 40 == e.keyCode ? this.animatePhi_(this.phi - a) : 37 == e.keyCode && this.animateTheta_(this.theta + a)
					}, r.prototype.animateTheta_ = function(e) {
						this.animateKeyTransitions_("theta", e)
					}, r.prototype.animatePhi_ = function(e) {
						e = o.clamp(e, -Math.PI / 2, Math.PI / 2), this.animateKeyTransitions_("phi", e)
					}, r.prototype.animateKeyTransitions_ = function(e, t) {
						this.angleAnimation && clearInterval(this.angleAnimation);
						var r = this[e],
							i = new Date;
						this.angleAnimation = setInterval(function() {
							var n = new Date - i;
							if (n >= s) return this[e] = t, void clearInterval(this.angleAnimation);
							var o = n / s;
							this[e] = r + (t - r) * o
						}.bind(this), 1e3 / 60)
					}, r.prototype.onMouseDown_ = function(e) {
						this.rotateStart.set(e.clientX, e.clientY), this.isDragging = !0
					}, r.prototype.onMouseMove_ = function(e) {
						if (this.isDragging || this.isPointerLocked_()) {
							if (this.isPointerLocked_()) {
								var t = e.movementX || e.mozMovementX || 0,
									r = e.movementY || e.mozMovementY || 0;
								this.rotateEnd.set(this.rotateStart.x - t, this.rotateStart.y - r)
							} else this.rotateEnd.set(e.clientX, e.clientY);
							this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart), this.rotateStart.copy(this.rotateEnd);
							var i = document.body;
							this.phi += 2 * Math.PI * this.rotateDelta.y / i.clientHeight * c, this.theta += 2 * Math.PI * this.rotateDelta.x / i.clientWidth * h, this.phi = o.clamp(this.phi, -Math.PI / 2, Math.PI / 2)
						}
					}, r.prototype.onMouseUp_ = function() {
						this.isDragging = !1
					}, r.prototype.isPointerLocked_ = function() {
						var e = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement;
						return void 0 !== e
					}, r.prototype.resetSensor = function() {
						console.error("Not implemented yet.")
					}, t.exports = r
				}, {
					"./base.js": 1,
					"./three-math.js": 9,
					"./util.js": 11
				}],
				7: [function(e, t) {
					function r(e) {
						this.predictionTimeS = e, this.previousQ = new i.Quaternion, this.previousTimestampS = null, this.deltaQ = new i.Quaternion, this.outQ = new i.Quaternion
					}
					var i = e("./three-math.js"),
						n = !1;
					r.prototype.getPrediction = function(e, t, r) {
						if (!this.previousTimestampS) return this.previousQ.copy(e), this.previousTimestampS = r, e;
						var o = new i.Vector3;
						o.copy(t), o.normalize();
						var a = t.length();
						if (a < i.Math.degToRad(20)) return n && console.log("Moving slowly, at %s deg/s: no prediction", i.Math.radToDeg(a).toFixed(1)), this.outQ.copy(e), this.previousQ.copy(e), this.outQ;
						var s = (r - this.previousTimestampS, a * this.predictionTimeS);
						return this.deltaQ.setFromAxisAngle(o, s), this.outQ.copy(this.previousQ), this.outQ.multiply(this.deltaQ), this.previousQ.copy(e), this.outQ
					}, t.exports = r
				}, {
					"./three-math.js": 9
				}],
				8: [function(e, t) {
					function r(e, t) {
						this.set(e, t)
					}
					r.prototype.set = function(e, t) {
						this.sample = e, this.timestampS = t
					}, r.prototype.copy = function(e) {
						this.set(e.sample, e.timestampS)
					}, t.exports = r
				}, {}],
				9: [function(e, t) {
					var r = window.THREE || {};
					r.Quaternion && r.Vector3 && r.Vector2 && r.Euler && r.Math || (console.log("No THREE.js found."), r.Quaternion = function(e, t, r, i) {
						this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== i ? i : 1
					}, r.Quaternion.prototype = {
						constructor: r.Quaternion,
						_x: 0,
						_y: 0,
						_z: 0,
						_w: 0,
						get x() {
							return this._x
						},
						set x(e) {
							this._x = e, this.onChangeCallback()
						},
						get y() {
							return this._y
						},
						set y(e) {
							this._y = e, this.onChangeCallback()
						},
						get z() {
							return this._z
						},
						set z(e) {
							this._z = e, this.onChangeCallback()
						},
						get w() {
							return this._w
						},
						set w(e) {
							this._w = e, this.onChangeCallback()
						},
						set: function(e, t, r, i) {
							return this._x = e, this._y = t, this._z = r, this._w = i, this.onChangeCallback(), this
						},
						copy: function(e) {
							return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
						},
						setFromEuler: function(e, t) {
							if (e instanceof r.Euler == !1) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
							var i = Math.cos(e._x / 2),
								n = Math.cos(e._y / 2),
								o = Math.cos(e._z / 2),
								a = Math.sin(e._x / 2),
								s = Math.sin(e._y / 2),
								h = Math.sin(e._z / 2);
							return "XYZ" === e.order ? (this._x = a * n * o + i * s * h, this._y = i * s * o - a * n * h, this._z = i * n * h + a * s * o, this._w = i * n * o - a * s * h) : "YXZ" === e.order ? (this._x = a * n * o + i * s * h, this._y = i * s * o - a * n * h, this._z = i * n * h - a * s * o, this._w = i * n * o + a * s * h) : "ZXY" === e.order ? (this._x = a * n * o - i * s * h, this._y = i * s * o + a * n * h, this._z = i * n * h + a * s * o, this._w = i * n * o - a * s * h) : "ZYX" === e.order ? (this._x = a * n * o - i * s * h, this._y = i * s * o + a * n * h, this._z = i * n * h - a * s * o, this._w = i * n * o + a * s * h) : "YZX" === e.order ? (this._x = a * n * o + i * s * h, this._y = i * s * o + a * n * h, this._z = i * n * h - a * s * o, this._w = i * n * o - a * s * h) : "XZY" === e.order && (this._x = a * n * o - i * s * h, this._y = i * s * o - a * n * h, this._z = i * n * h + a * s * o, this._w = i * n * o + a * s * h), t !== !1 && this.onChangeCallback(), this
						},
						setFromAxisAngle: function(e, t) {
							var r = t / 2,
								i = Math.sin(r);
							return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(r), this.onChangeCallback(), this
						},
						setFromRotationMatrix: function(e) {
							var t, r = e.elements,
								i = r[0],
								n = r[4],
								o = r[8],
								a = r[1],
								s = r[5],
								h = r[9],
								c = r[2],
								l = r[6],
								u = r[10],
								d = i + s + u;
							return d > 0 ? (t = .5 / Math.sqrt(d + 1), this._w = .25 / t, this._x = (l - h) * t, this._y = (o - c) * t, this._z = (a - n) * t) : i > s && i > u ? (t = 2 * Math.sqrt(1 + i - s - u), this._w = (l - h) / t, this._x = .25 * t, this._y = (n + a) / t, this._z = (o + c) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - i - u), this._w = (o - c) / t, this._x = (n + a) / t, this._y = .25 * t, this._z = (h + l) / t) : (t = 2 * Math.sqrt(1 + u - i - s), this._w = (a - n) / t, this._x = (o + c) / t, this._y = (h + l) / t, this._z = .25 * t), this.onChangeCallback(), this
						},
						setFromUnitVectors: function() {
							var e, t, i = 1e-6;
							return function(n, o) {
								return void 0 === e && (e = new r.Vector3), t = n.dot(o) + 1, i > t ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, o), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize(), this
							}
						}(),
						inverse: function() {
							return this.conjugate().normalize(), this
						},
						conjugate: function() {
							return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
						},
						dot: function(e) {
							return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
						},
						lengthSq: function() {
							return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
						},
						length: function() {
							return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
						},
						normalize: function() {
							var e = this.length();
							return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
						},
						multiply: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
						},
						multiplyQuaternions: function(e, t) {
							var r = e._x,
								i = e._y,
								n = e._z,
								o = e._w,
								a = t._x,
								s = t._y,
								h = t._z,
								c = t._w;
							return this._x = r * c + o * a + i * h - n * s, this._y = i * c + o * s + n * a - r * h, this._z = n * c + o * h + r * s - i * a, this._w = o * c - r * a - i * s - n * h, this.onChangeCallback(), this
						},
						multiplyVector3: function(e) {
							return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
						},
						slerp: function(e, t) {
							if (0 === t) return this;
							if (1 === t) return this.copy(e);
							var r = this._x,
								i = this._y,
								n = this._z,
								o = this._w,
								a = o * e._w + r * e._x + i * e._y + n * e._z;
							if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = r, this._y = i, this._z = n, this;
							var s = Math.acos(a),
								h = Math.sqrt(1 - a * a);
							if (Math.abs(h) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (i + this._y), this._z = .5 * (n + this._z), this;
							var c = Math.sin((1 - t) * s) / h,
								l = Math.sin(t * s) / h;
							return this._w = o * c + this._w * l, this._x = r * c + this._x * l, this._y = i * c + this._y * l, this._z = n * c + this._z * l, this.onChangeCallback(), this
						},
						equals: function(e) {
							return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
						},
						fromArray: function(e, t) {
							return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
						},
						toArray: function(e, t) {
							return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
						},
						onChange: function(e) {
							return this.onChangeCallback = e, this
						},
						onChangeCallback: function() {},
						clone: function() {
							return new r.Quaternion(this._x, this._y, this._z, this._w)
						}
					}, r.Quaternion.slerp = function(e, t, r, i) {
						return r.copy(e).slerp(t, i)
					}, r.Vector2 = function(e, t) {
						this.x = e || 0, this.y = t || 0
					}, r.Vector2.prototype = {
						constructor: r.Vector2,
						set: function(e, t) {
							return this.x = e, this.y = t, this
						},
						setX: function(e) {
							return this.x = e, this
						},
						setY: function(e) {
							return this.y = e, this
						},
						setComponent: function(e, t) {
							switch (e) {
								case 0:
									this.x = t;
									break;
								case 1:
									this.y = t;
									break;
								default:
									throw new Error("index is out of range: " + e)
							}
						},
						getComponent: function(e) {
							switch (e) {
								case 0:
									return this.x;
								case 1:
									return this.y;
								default:
									throw new Error("index is out of range: " + e)
							}
						},
						copy: function(e) {
							return this.x = e.x, this.y = e.y, this
						},
						add: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
						},
						addVectors: function(e, t) {
							return this.x = e.x + t.x, this.y = e.y + t.y, this
						},
						addScalar: function(e) {
							return this.x += e, this.y += e, this
						},
						sub: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
						},
						subVectors: function(e, t) {
							return this.x = e.x - t.x, this.y = e.y - t.y, this
						},
						multiply: function(e) {
							return this.x *= e.x, this.y *= e.y, this
						},
						multiplyScalar: function(e) {
							return this.x *= e, this.y *= e, this
						},
						divide: function(e) {
							return this.x /= e.x, this.y /= e.y, this
						},
						divideScalar: function(e) {
							if (0 !== e) {
								var t = 1 / e;
								this.x *= t, this.y *= t
							} else this.x = 0, this.y = 0;
							return this
						},
						min: function(e) {
							return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
						},
						max: function(e) {
							return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
						},
						clamp: function(e, t) {
							return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
						},
						clampScalar: function() {
							var e, t;
							return function(i, n) {
								return void 0 === e && (e = new r.Vector2, t = new r.Vector2), e.set(i, i), t.set(n, n), this.clamp(e, t)
							}
						}(),
						floor: function() {
							return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
						},
						ceil: function() {
							return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
						},
						round: function() {
							return this.x = Math.round(this.x), this.y = Math.round(this.y), this
						},
						roundToZero: function() {
							return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
						},
						negate: function() {
							return this.x = -this.x, this.y = -this.y, this
						},
						dot: function(e) {
							return this.x * e.x + this.y * e.y
						},
						lengthSq: function() {
							return this.x * this.x + this.y * this.y
						},
						length: function() {
							return Math.sqrt(this.x * this.x + this.y * this.y)
						},
						normalize: function() {
							return this.divideScalar(this.length())
						},
						distanceTo: function(e) {
							return Math.sqrt(this.distanceToSquared(e))
						},
						distanceToSquared: function(e) {
							var t = this.x - e.x,
								r = this.y - e.y;
							return t * t + r * r
						},
						setLength: function(e) {
							var t = this.length();
							return 0 !== t && e !== t && this.multiplyScalar(e / t), this
						},
						lerp: function(e, t) {
							return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
						},
						equals: function(e) {
							return e.x === this.x && e.y === this.y
						},
						fromArray: function(e, t) {
							return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
						},
						toArray: function(e, t) {
							return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
						},
						fromAttribute: function(e, t, r) {
							return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this
						},
						clone: function() {
							return new r.Vector2(this.x, this.y)
						}
					}, r.Vector3 = function(e, t, r) {
						this.x = e || 0, this.y = t || 0, this.z = r || 0
					}, r.Vector3.prototype = {
						constructor: r.Vector3,
						set: function(e, t, r) {
							return this.x = e, this.y = t, this.z = r, this
						},
						setX: function(e) {
							return this.x = e, this
						},
						setY: function(e) {
							return this.y = e, this
						},
						setZ: function(e) {
							return this.z = e, this
						},
						setComponent: function(e, t) {
							switch (e) {
								case 0:
									this.x = t;
									break;
								case 1:
									this.y = t;
									break;
								case 2:
									this.z = t;
									break;
								default:
									throw new Error("index is out of range: " + e)
							}
						},
						getComponent: function(e) {
							switch (e) {
								case 0:
									return this.x;
								case 1:
									return this.y;
								case 2:
									return this.z;
								default:
									throw new Error("index is out of range: " + e)
							}
						},
						copy: function(e) {
							return this.x = e.x, this.y = e.y, this.z = e.z, this
						},
						add: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
						},
						addScalar: function(e) {
							return this.x += e, this.y += e, this.z += e, this
						},
						addVectors: function(e, t) {
							return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
						},
						sub: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
						},
						subVectors: function(e, t) {
							return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
						},
						multiply: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
						},
						multiplyScalar: function(e) {
							return this.x *= e, this.y *= e, this.z *= e, this
						},
						multiplyVectors: function(e, t) {
							return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
						},
						applyEuler: function() {
							var e;
							return function(t) {
								return t instanceof r.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new r.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this
							}
						}(),
						applyAxisAngle: function() {
							var e;
							return function(t, i) {
								return void 0 === e && (e = new r.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, i)), this
							}
						}(),
						applyMatrix3: function(e) {
							var t = this.x,
								r = this.y,
								i = this.z,
								n = e.elements;
							return this.x = n[0] * t + n[3] * r + n[6] * i, this.y = n[1] * t + n[4] * r + n[7] * i, this.z = n[2] * t + n[5] * r + n[8] * i, this
						},
						applyMatrix4: function(e) {
							var t = this.x,
								r = this.y,
								i = this.z,
								n = e.elements;
							return this.x = n[0] * t + n[4] * r + n[8] * i + n[12], this.y = n[1] * t + n[5] * r + n[9] * i + n[13], this.z = n[2] * t + n[6] * r + n[10] * i + n[14], this
						},
						applyProjection: function(e) {
							var t = this.x,
								r = this.y,
								i = this.z,
								n = e.elements,
								o = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
							return this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * o, this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * o, this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * o, this
						},
						applyQuaternion: function(e) {
							var t = this.x,
								r = this.y,
								i = this.z,
								n = e.x,
								o = e.y,
								a = e.z,
								s = e.w,
								h = s * t + o * i - a * r,
								c = s * r + a * t - n * i,
								l = s * i + n * r - o * t,
								u = -n * t - o * r - a * i;
							return this.x = h * s + u * -n + c * -a - l * -o, this.y = c * s + u * -o + l * -n - h * -a, this.z = l * s + u * -a + h * -o - c * -n, this
						},
						project: function() {
							var e;
							return function(t) {
								return void 0 === e && (e = new r.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
							}
						}(),
						unproject: function() {
							var e;
							return function(t) {
								return void 0 === e && (e = new r.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
							}
						}(),
						transformDirection: function(e) {
							var t = this.x,
								r = this.y,
								i = this.z,
								n = e.elements;
							return this.x = n[0] * t + n[4] * r + n[8] * i, this.y = n[1] * t + n[5] * r + n[9] * i, this.z = n[2] * t + n[6] * r + n[10] * i, this.normalize(), this
						},
						divide: function(e) {
							return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
						},
						divideScalar: function(e) {
							if (0 !== e) {
								var t = 1 / e;
								this.x *= t, this.y *= t, this.z *= t
							} else this.x = 0, this.y = 0, this.z = 0;
							return this
						},
						min: function(e) {
							return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
						},
						max: function(e) {
							return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
						},
						clamp: function(e, t) {
							return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
						},
						clampScalar: function() {
							var e, t;
							return function(i, n) {
								return void 0 === e && (e = new r.Vector3, t = new r.Vector3), e.set(i, i, i), t.set(n, n, n), this.clamp(e, t)
							}
						}(),
						floor: function() {
							return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
						},
						ceil: function() {
							return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
						},
						round: function() {
							return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
						},
						roundToZero: function() {
							return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
						},
						negate: function() {
							return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
						},
						dot: function(e) {
							return this.x * e.x + this.y * e.y + this.z * e.z
						},
						lengthSq: function() {
							return this.x * this.x + this.y * this.y + this.z * this.z
						},
						length: function() {
							return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
						},
						lengthManhattan: function() {
							return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
						},
						normalize: function() {
							return this.divideScalar(this.length())
						},
						setLength: function(e) {
							var t = this.length();
							return 0 !== t && e !== t && this.multiplyScalar(e / t), this
						},
						lerp: function(e, t) {
							return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
						},
						cross: function(e, t) {
							if (void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
							var r = this.x,
								i = this.y,
								n = this.z;
							return this.x = i * e.z - n * e.y, this.y = n * e.x - r * e.z, this.z = r * e.y - i * e.x, this
						},
						crossVectors: function(e, t) {
							var r = e.x,
								i = e.y,
								n = e.z,
								o = t.x,
								a = t.y,
								s = t.z;
							return this.x = i * s - n * a, this.y = n * o - r * s, this.z = r * a - i * o, this
						},
						projectOnVector: function() {
							var e, t;
							return function(i) {
								return void 0 === e && (e = new r.Vector3), e.copy(i).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
							}
						}(),
						projectOnPlane: function() {
							var e;
							return function(t) {
								return void 0 === e && (e = new r.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
							}
						}(),
						reflect: function() {
							var e;
							return function(t) {
								return void 0 === e && (e = new r.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
							}
						}(),
						angleTo: function(e) {
							var t = this.dot(e) / (this.length() * e.length());
							return Math.acos(r.Math.clamp(t, -1, 1))
						},
						distanceTo: function(e) {
							return Math.sqrt(this.distanceToSquared(e))
						},
						distanceToSquared: function(e) {
							var t = this.x - e.x,
								r = this.y - e.y,
								i = this.z - e.z;
							return t * t + r * r + i * i
						},
						setEulerFromRotationMatrix: function() {
							console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
						},
						setEulerFromQuaternion: function() {
							console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
						},
						getPositionFromMatrix: function(e) {
							return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
						},
						getScaleFromMatrix: function(e) {
							return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
						},
						getColumnFromMatrix: function(e, t) {
							return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
						},
						setFromMatrixPosition: function(e) {
							return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
						},
						setFromMatrixScale: function(e) {
							var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
								r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
								i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
							return this.x = t, this.y = r, this.z = i, this
						},
						setFromMatrixColumn: function(e, t) {
							var r = 4 * e,
								i = t.elements;
							return this.x = i[r], this.y = i[r + 1], this.z = i[r + 2], this
						},
						equals: function(e) {
							return e.x === this.x && e.y === this.y && e.z === this.z
						},
						fromArray: function(e, t) {
							return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
						},
						toArray: function(e, t) {
							return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
						},
						fromAttribute: function(e, t, r) {
							return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
						},
						clone: function() {
							return new r.Vector3(this.x, this.y, this.z)
						}
					}, r.Euler = function(e, t, i, n) {
						this._x = e || 0, this._y = t || 0, this._z = i || 0, this._order = n || r.Euler.DefaultOrder
					}, r.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], r.Euler.DefaultOrder = "XYZ", r.Euler.prototype = {
						constructor: r.Euler,
						_x: 0,
						_y: 0,
						_z: 0,
						_order: r.Euler.DefaultOrder,
						get x() {
							return this._x
						},
						set x(e) {
							this._x = e, this.onChangeCallback()
						},
						get y() {
							return this._y
						},
						set y(e) {
							this._y = e, this.onChangeCallback()
						},
						get z() {
							return this._z
						},
						set z(e) {
							this._z = e, this.onChangeCallback()
						},
						get order() {
							return this._order
						},
						set order(e) {
							this._order = e, this.onChangeCallback()
						},
						set: function(e, t, r, i) {
							return this._x = e, this._y = t, this._z = r, this._order = i || this._order, this.onChangeCallback(), this
						},
						copy: function(e) {
							return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
						},
						setFromRotationMatrix: function(e, t, i) {
							var n = r.Math.clamp,
								o = e.elements,
								a = o[0],
								s = o[4],
								h = o[8],
								c = o[1],
								l = o[5],
								u = o[9],
								d = o[2],
								p = o[6],
								f = o[10];
							return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(n(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(p, l), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(h, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-n(d, -1, 1)), Math.abs(d) < .99999 ? (this._x = Math.atan2(p, f), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-s, l))) : "YZX" === t ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, a)) : (this._x = 0, this._y = Math.atan2(h, f))) : "XZY" === t ? (this._z = Math.asin(-n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(h, a)) : (this._x = Math.atan2(-u, f), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, i !== !1 && this.onChangeCallback(), this
						},
						setFromQuaternion: function() {
							var e;
							return function(t, i, n) {
								return void 0 === e && (e = new r.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, i, n), this
							}
						}(),
						setFromVector3: function(e, t) {
							return this.set(e.x, e.y, e.z, t || this._order)
						},
						reorder: function() {
							var e = new r.Quaternion;
							return function(t) {
								e.setFromEuler(this), this.setFromQuaternion(e, t)
							}
						}(),
						equals: function(e) {
							return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
						},
						fromArray: function(e) {
							return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
						},
						toArray: function() {
							return [this._x, this._y, this._z, this._order]
						},
						toVector3: function(e) {
							return e ? e.set(this._x, this._y, this._z) : new r.Vector3(this._x, this._y, this._z)
						},
						onChange: function(e) {
							return this.onChangeCallback = e, this
						},
						onChangeCallback: function() {},
						clone: function() {
							return new r.Euler(this._x, this._y, this._z, this._order)
						}
					}, r.Math = {
						generateUUID: function() {
							var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
								r = new Array(36),
								i = 0;
							return function() {
								for (var n = 0; 36 > n; n++) 8 == n || 13 == n || 18 == n || 23 == n ? r[n] = "-" : 14 == n ? r[n] = "4" : (2 >= i && (i = 33554432 + 16777216 * Math.random() | 0), e = 15 & i, i >>= 4, r[n] = t[19 == n ? 3 & e | 8 : e]);
								return r.join("")
							}
						}(),
						clamp: function(e, t, r) {
							return t > e ? t : e > r ? r : e
						},
						clampBottom: function(e, t) {
							return t > e ? t : e
						},
						mapLinear: function(e, t, r, i, n) {
							return i + (e - t) * (n - i) / (r - t)
						},
						smoothstep: function(e, t, r) {
							return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
						},
						smootherstep: function(e, t, r) {
							return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
						},
						random16: function() {
							return (65280 * Math.random() + 255 * Math.random()) / 65535
						},
						randInt: function(e, t) {
							return Math.floor(this.randFloat(e, t))
						},
						randFloat: function(e, t) {
							return e + Math.random() * (t - e)
						},
						randFloatSpread: function(e) {
							return e * (.5 - Math.random())
						},
						degToRad: function() {
							var e = Math.PI / 180;
							return function(t) {
								return t * e
							}
						}(),
						radToDeg: function() {
							var e = 180 / Math.PI;
							return function(t) {
								return t * e
							}
						}(),
						isPowerOfTwo: function(e) {
							return 0 === (e & e - 1) && 0 !== e
						},
						nextPowerOfTwo: function(e) {
							return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
						}
					}), t.exports = r
				}, {}],
				10: [function(e, t) {
					function r() {
						window.addEventListener("touchstart", this.onTouchStart_.bind(this)), window.addEventListener("touchmove", this.onTouchMove_.bind(this)), window.addEventListener("touchend", this.onTouchEnd_.bind(this)), this.isTouching = !1, this.rotateStart = new i.Vector2, this.rotateEnd = new i.Vector2, this.rotateDelta = new i.Vector2, this.theta = 0, this.orientation = new i.Quaternion
					}
					var i = e("./three-math.js"),
						n = e("./util.js"),
						o = .5;
					r.prototype.getOrientation = function() {
						return this.orientation.setFromEuler(new i.Euler(0, 0, this.theta)), this.orientation
					}, r.prototype.resetSensor = function() {
						this.theta = 0
					}, r.prototype.onTouchStart_ = function(e) {
						1 == e.touches.length && (this.rotateStart.set(e.touches[0].pageX, e.touches[0].pageY), this.isTouching = !0)
					}, r.prototype.onTouchMove_ = function(e) {
						if (this.isTouching) {
							this.rotateEnd.set(e.touches[0].pageX, e.touches[0].pageY), this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart), this.rotateStart.copy(this.rotateEnd), n.isIOS() && (this.rotateDelta.x *= -1);
							var t = document.body;
							this.theta += 2 * Math.PI * this.rotateDelta.x / t.clientWidth * o
						}
					}, r.prototype.onTouchEnd_ = function() {
						this.isTouching = !1
					}, t.exports = r
				}, {
					"./three-math.js": 9,
					"./util.js": 11
				}],
				11: [function(e, t) {
					var r = window.Util || {};
					r.MIN_TIMESTEP = .001, r.MAX_TIMESTEP = 1, r.clamp = function(e, t, r) {
						return Math.min(Math.max(t, e), r)
					}, r.isIOS = function() {
						return /iPad|iPhone|iPod/.test(navigator.platform)
					}, r.isFirefoxAndroid = function() {
						return -1 !== navigator.userAgent.indexOf("Firefox") && -1 !== navigator.userAgent.indexOf("Android")
					}, r.isTimestampDeltaValid = function(e) {
						return isNaN(e) ? !1 : e <= r.MIN_TIMESTEP ? !1 : e > r.MAX_TIMESTEP ? !1 : !0
					}, t.exports = r
				}, {}],
				12: [function(e, t) {
					function r() {
						this.devices = [], this.isWebVRAvailable() || this.enablePolyfill()
					}
					var i = e("./cardboard-hmd-vr-device.js"),
						n = e("./fusion-position-sensor-vr-device.js"),
						o = e("./mouse-keyboard-position-sensor-vr-device.js"),
						a = e("./base.js").HMDVRDevice,
						s = e("./base.js").PositionSensorVRDevice;
					r.prototype.isWebVRAvailable = function() {
						return "getVRDevices" in navigator || "mozGetVRDevices" in navigator
					}, r.prototype.enablePolyfill = function() {
						this.isCardboardCompatible() && this.devices.push(new i), this.isMobile() ? this.devices.push(new n) : WebVRConfig.MOUSE_KEYBOARD_CONTROLS_DISABLED || this.devices.push(new o), navigator.getVRDevices = this.getVRDevices.bind(this), window.HMDVRDevice = a, window.PositionSensorVRDevice = s
					}, r.prototype.getVRDevices = function() {
						var e = this.devices;
						return new Promise(function(t, r) {
							try {
								t(e)
							} catch (i) {
								r(i)
							}
						})
					}, r.prototype.isMobile = function() {
						return /Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)
					}, r.prototype.isCardboardCompatible = function() {
						return this.isMobile() || WebVRConfig.FORCE_ENABLE_VR
					}, t.exports = r
				}, {
					"./base.js": 1,
					"./cardboard-hmd-vr-device.js": 2,
					"./fusion-position-sensor-vr-device.js": 4,
					"./mouse-keyboard-position-sensor-vr-device.js": 6
				}]
			}, {}, [5])
		}, {}],
		24: [function(e, t) {
			t.exports = {
				name: "aframe",
				version: "0.2.0",
				description: "Building blocks for the VR Web",
				main: "dist/aframe.js",
				scripts: {
					browserify: "browserify src/index.js -s 'AFRAME' -p browserify-derequire",
					build: "mkdirp build/ && npm run browserify -- --debug -o build/aframe.js",
					dev: "npm run build && node ./scripts/budo",
					dist: "mkdirp dist/ && npm run browserify -s -- --debug | exorcist dist/aframe.js.map > dist/aframe.js && uglifyjs dist/aframe.js -c warnings=false -m -o dist/aframe.min.js",
					"gh-pages": "npm run ghpages",
					ghpages: "node ./scripts/gh-pages",
					lint: "semistandard -v | snazzy",
					precommit: "npm run lint",
					preghpages: "npm run dist && rimraf gh-pages && mkdirp gh-pages && cp -r {.nojekyll,dist,lib,examples,index.html,style} gh-pages/. 2>/dev/null || : && git checkout dist/ && replace 'build/aframe.js' 'dist/aframe.min.js' gh-pages/ -r --silent",
					"release:bump": "npm run dist && git commit -am 'bump dist' && npm version patch --preminor",
					"release:push": "npm login && npm publish && git push --follow-tags",
					start: "npm run dev",
					test: "karma start ./tests/karma.conf.js",
					"test:ci": "TEST_ENV=ci karma start ./tests/karma.conf.js --single-run",
					version: "npm run dist"
				},
				repository: "aframevr/aframe",
				license: "MIT",
				dependencies: {
					"browserify-css": "^0.8.2",
					debug: "^2.2.0",
					"deep-assign": "^2.0.0",
					"document-register-element": "dmarcos/document-register-element#8ccc532b7",
					"promise-polyfill": "^3.1.0",
					"object-assign": "^4.0.1",
					polymerize: "^1.0.0",
					present: "0.0.6",
					"request-interval": "^1.0.0",
					"style-attr": "^1.0.2",
					three: "^0.74.0",
					"tween.js": "^15.0.0",
					"webvr-polyfill": "borismus/webvr-polyfill#3f47796"
				},
				devDependencies: {
					browserify: "^11.0.1",
					"browserify-derequire": "^0.9.4",
					budo: "^8.1.0",
					chai: "^3.5.0",
					"chai-shallow-deep-equal": "^1.3.0",
					exorcist: "^0.4.0",
					"gh-pages": "^0.6.0",
					husky: "^0.10.1",
					karma: "^0.13.15",
					"karma-browserify": "^4.4.0",
					"karma-chai-shallow-deep-equal": "0.0.4",
					"karma-env-preprocessor": "^0.1.1",
					"karma-firefox-launcher": "^0.1.6",
					"karma-mocha": "^0.2.0",
					"karma-mocha-reporter": "^1.1.0",
					"karma-sinon-chai": "^1.1.0",
					lolex: "^1.4.0",
					mkdirp: "0.5.1",
					mocha: "^2.3.3",
					"mozilla-download": "^1.0.5",
					open: "0.0.5",
					replace: "^0.3.0",
					rimraf: "2.5.0",
					semistandard: "^7.0.2",
					sinon: "^1.17.3",
					"sinon-chai": "^2.8.0",
					snazzy: "^3.0.0",
					uglifyjs: "^2.4.10"
				},
				link: !0,
				browserify: {
					transform: ["browserify-css", ["polymerize", {
						match: ".*.html$"
					}]]
				},
				semistandard: {
					ignore: ["build/**", "dist/**", "examples/_js/**", "examples/**/shaders/*.js", "vendor/**"]
				},
				keywords: ["aframe", "vr", "webvr", "3d", "three", "components", "elements"],
				"browserify-css": {
					minify: !0
				},
				engines: {
					node: ">= 0.12.7",
					npm: "^2.12.1"
				}
			}
		}, {}],
		25: [function(e, t) {
			var r = e("../core/component").registerComponent,
				i = e("../lib/three");
			t.exports.Component = r("camera", {
				schema: {
					active: {
						"default": !0
					},
					far: {
						"default": 1e4
					},
					fov: {
						"default": 80,
						min: 0
					},
					near: {
						"default": .5,
						min: 0
					}
				},
				init: function() {
					var e = this.camera = new i.PerspectiveCamera;
					this.el.setObject3D("camera", e)
				},
				remove: function() {
					this.el.removeObject3D("camera")
				},
				update: function(e) {
					var t = this.el,
						r = this.data,
						i = this.camera,
						n = this.system;
					i.aspect = r.aspect || window.innerWidth / window.innerHeight, i.far = r.far, i.fov = r.fov, i.near = r.near, i.updateProjectionMatrix(), e && e.active === r.active || (r.active && n.activeCameraEl !== this.el ? n.setActiveCamera(t, i) : r.active || n.activeCameraEl !== this.el || n.disableActiveCamera())
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90
		}],
		26: [function(e, t) {
			var r = e("../core/component").registerComponent,
				i = e("../lib/three"),
				n = new i.ColladaLoader;
			n.options.convertUpAxis = !0, t.exports.Component = r("collada-model", {
				schema: {
					type: "src"
				},
				init: function() {
					this.model = null
				},
				update: function() {
					var e = this,
						t = this.el,
						r = this.data;
					r && (this.remove(), n.load(r, function(r) {
						e.model = r.scene, t.setObject3D("mesh", e.model), t.emit("model-loaded", {
							format: "collada",
							model: e.model
						})
					}))
				},
				remove: function() {
					this.model && this.el.removeObject3D("mesh")
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90
		}],
		27: [function(e, t) {
			var r = e("../core/component").registerComponent,
				i = e("../utils/");
			t.exports.Component = r("cursor", {
				schema: {
					timeout: {
						"default": 1500,
						min: 0
					},
					maxDistance: {
						"default": 5,
						min: 0
					},
					fuse: {
						"default": !1
					}
				},
				dependencies: ["raycaster"],
				init: function() {
					this.raycaster = this.el.components.raycaster, this.schema.fuse["default"] = i.isMobile(), this.attachEventListeners()
				},
				attachEventListeners: function() {
					var e = this.el,
						t = e.sceneEl.canvas;
					return t ? (t.addEventListener("mousedown", this.onMouseDown.bind(this)), t.addEventListener("mouseup", this.onMouseUp.bind(this)), e.addEventListener("intersection", this.onIntersection.bind(this)), void e.addEventListener("intersectioncleared", this.onIntersectionCleared.bind(this))) : void e.sceneEl.addEventListener("render-target-loaded", this.attachEventListeners.bind(this))
				},
				onMouseDown: function() {
					this.emit("mousedown"), this.mouseDownEl = this.intersectedEl
				},
				onMouseUp: function() {
					this.emit("mouseup"), this.data.fuse || this.intersectedEl && this.mouseDownEl === this.intersectedEl && this.emit("click")
				},
				emit: function(e) {
					var t = this.intersectedEl;
					this.el.emit(e, {
						target: this.intersectedEl
					}), t && t.emit(e)
				},
				emitter: function(e) {
					return function() {
						this.emit(e)
					}.bind(this)
				},
				onIntersection: function(e) {
					function t() {
						r.el.removeState("fusing"), r.emit("click")
					}
					var r = this,
						i = this.data,
						n = e.detail.el,
						o = e.detail.distance;
					this.intersectedEl !== n && (o >= this.data.maxDistance || (this.intersectedEl = n, n.addState("hovered"), n.emit("mouseenter"), this.el.addState("hovering"), 0 !== i.timeout && i.fuse && (this.el.addState("fusing"), this.fuseTimeout = setTimeout(t, i.timeout))))
				},
				onIntersectionCleared: function(e) {
					var t = e.detail.el;
					t && this.intersectedEl && (t.removeState("hovered"), t.emit("mouseleave"), this.el.removeState("hovering"), this.el.removeState("fusing"), this.intersectedEl = null, clearTimeout(this.fuseTimeout))
				}
			})
		}, {
			"../core/component": 56,
			"../utils/": 102
		}],
		28: [function(e, t) {
			function r(e) {
				switch ("cube" === e.primitive && u('geometry.primitive="cube" should be "box"'), e.primitive) {
					case "box":
						return new a.BoxGeometry(e.width, e.height, e.depth);
					case "circle":
						return new a.CircleGeometry(e.radius, e.segments, l(e.thetaStart), l(e.thetaLength));
					case "cone":
						return new a.CylinderGeometry(e.radiusTop, e.radiusBottom, e.height, e.segmentsRadial, e.segmentsHeight, e.openEnded, l(e.thetaStart), l(e.thetaLength));
					case "cylinder":
						return new a.CylinderGeometry(e.radius, e.radius, e.height, e.segmentsRadial, e.segmentsHeight, e.openEnded, l(e.thetaStart), l(e.thetaLength));
					case "plane":
						return new a.PlaneBufferGeometry(e.width, e.height);
					case "ring":
						return new a.RingGeometry(e.radiusInner, e.radiusOuter, e.segmentsTheta, e.segmentsPhi, l(e.thetaStart), l(e.thetaLength));
					case "sphere":
						return 360 === e.thetaLength && (e.thetaLength = 180), new a.SphereBufferGeometry(e.radius, e.segmentsWidth, e.segmentsHeight, l(e.phiStart), l(e.phiLength), l(e.thetaStart), l(e.thetaLength));
					case "torus":
						return new a.TorusGeometry(e.radius, 2 * e.radiusTubular, e.segmentsRadial, e.segmentsTubular, l(e.arc));
					case "torusKnot":
						return new a.TorusKnotGeometry(e.radius, 2 * e.radiusTubular, e.segmentsRadial, e.segmentsTubular, e.p, e.q, e.scaleHeight);
					default:
						return u("Primitive type not supported: " + e.primitive), new a.Geometry
				}
			}

			function i(e, t, r) {
				var i = c.makeTranslation(t.x - r.x, t.y - r.y, t.z - r.z);
				e.applyMatrix(i), e.verticesNeedsUpdate = !0
			}
			var n = e("../utils/debug"),
				o = e("../core/component").registerComponent,
				a = e("../lib/three"),
				s = e("../utils"),
				h = 1,
				c = new a.Matrix4,
				l = a.Math.degToRad,
				u = n("components:geometry:warn");
			t.exports.Component = o("geometry", {
				schema: {
					arc: {
						"default": 360,
						"if": {
							primitive: ["torus"]
						}
					},
					depth: {
						"default": 1,
						min: 0,
						"if": {
							primitive: ["box"]
						}
					},
					height: {
						"default": 1,
						min: 0,
						"if": {
							primitive: ["box", "plane"]
						}
					},
					openEnded: {
						"default": !1,
						"if": {
							primitive: ["cylinder"]
						}
					},
					p: {
						"default": 2,
						"if": {
							primitive: ["torusKnot"]
						},
						type: "int"
					},
					primitive: {
						"default": "",
						oneOf: ["", "box", "circle", "cylinder", "plane", "ring", "sphere", "torus", "torusKnot"]
					},
					q: {
						"default": 3,
						"if": {
							primitive: ["torusKnot"]
						},
						type: "int"
					},
					phiLength: {
						"default": 360,
						"if": {
							primitive: ["sphere"]
						}
					},
					phiStart: {
						"default": 0,
						min: 0,
						"if": {
							primitive: ["sphere"]
						}
					},
					radius: {
						"default": h,
						min: 0,
						"if": {
							primitive: ["circle", "cylinder", "sphere", "torus", "torusKnot"]
						}
					},
					radiusBottom: {
						"default": h,
						min: 0,
						"if": {
							primitive: ["cylinder"]
						}
					},
					radiusInner: {
						"default": .8,
						min: 0,
						"if": {
							primitive: ["ring"]
						}
					},
					radiusOuter: {
						"default": 1.2,
						min: 0,
						"if": {
							primitive: ["ring"]
						}
					},
					radiusTop: {
						"default": h,
						"if": {
							primitive: ["cylinder"]
						}
					},
					radiusTubular: {
						"default": .2,
						min: 0,
						"if": {
							primitive: ["torus"]
						}
					},
					scaleHeight: {
						"default": 1,
						min: 0,
						"if": {
							primitive: ["torusKnot"]
						}
					},
					segments: {
						"default": 32,
						min: 0,
						"if": {
							primitive: ["circle"]
						},
						type: "int"
					},
					segmentsHeight: {
						"default": 18,
						min: 0,
						"if": {
							primitive: ["cylinder", "sphere"]
						},
						type: "int"
					},
					segmentsPhi: {
						"default": 8,
						min: 0,
						"if": {
							primitive: ["ring"]
						},
						type: "int"
					},
					segmentsRadial: {
						"default": 36,
						min: 0,
						"if": {
							primitive: ["cylinder"]
						},
						type: "int"
					},
					segmentsTheta: {
						"default": 32,
						min: 0,
						"if": {
							primitive: ["ring"]
						},
						type: "int"
					},
					segmentsTubular: {
						"default": 32,
						min: 0,
						"if": {
							primitive: ["torus", "torusKnot"]
						},
						type: "int"
					},
					segmentsWidth: {
						"default": 36,
						min: 0,
						"if": {
							primitive: ["sphere"]
						},
						type: "int"
					},
					thetaLength: {
						"default": 360,
						min: 0,
						"if": {
							primitive: ["circle", "cylinder", "ring", "sphere"]
						}
					},
					thetaStart: {
						"default": 0,
						"if": {
							primitive: ["circle", "cylinder", "ring", "sphere"]
						}
					},
					translate: {
						type: "vec3"
					},
					width: {
						"default": 1,
						min: 0,
						"if": {
							primitive: ["box", "plane"]
						}
					}
				},
				update: function(e) {
					e = e || {};
					var t = this.data,
						n = e.translate || this.schema.translate["default"],
						o = s.diff(e, t),
						h = this.el.getOrCreateObject3D("mesh", a.Mesh),
						c = h.geometry,
						l = !(1 === Object.keys(o).length && "translate" in o),
						u = !s.deepEqual(t.translate, n);
					l && (c = h.geometry = r(this.data, this.schema)), u && i(c, t.translate, n)
				},
				remove: function() {
					this.el.getObject3D("mesh").geometry = new a.Geometry
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"../utils": 102,
			"../utils/debug": 101
		}],
		29: [function(e) {
			e("./camera"), e("./collada-model"), e("./cursor"), e("./geometry"), e("./light"), e("./look-at"), e("./look-controls"), e("./material"), e("./obj-model"), e("./position"), e("./raycaster"), e("./rotation"), e("./scale"), e("./sound"), e("./visible"), e("./wasd-controls"), e("./scene/canvas"), e("./scene/fog"), e("./scene/keyboard-shortcuts"), e("./scene/stats"), e("./scene/vr-mode-ui"), e("./loader")
		}, {
			"./camera": 25,
			"./collada-model": 26,
			"./cursor": 27,
			"./geometry": 28,
			"./light": 30,
			"./loader": 31,
			"./look-at": 32,
			"./look-controls": 33,
			"./material": 34,
			"./obj-model": 35,
			"./position": 36,
			"./raycaster": 37,
			"./rotation": 38,
			"./scale": 39,
			"./scene/canvas": 40,
			"./scene/fog": 41,
			"./scene/keyboard-shortcuts": 42,
			"./scene/stats": 43,
			"./scene/vr-mode-ui": 44,
			"./sound": 45,
			"./visible": 46,
			"./wasd-controls": 47
		}],
		30: [function(e, t) {
			function r(e) {
				var t = e.angle,
					r = new a.Color(e.color).getHex(),
					i = e.decay,
					n = e.distance,
					o = new a.Color(e.groundColor).getHex(),
					c = e.intensity,
					l = e.type;
				switch (l.toLowerCase()) {
					case "ambient":
						return new a.AmbientLight(r);
					case "directional":
						return new a.DirectionalLight(r, c);
					case "hemisphere":
						return new a.HemisphereLight(r, o, c);
					case "point":
						return new a.PointLight(r, c, n, i);
					case "spot":
						return new a.SpotLight(r, c, n, s(t), e.exponent, i);
					default:
						h("%s is not a valid light type. Choose from ambient, directional, hemisphere, point, spot.", l)
				}
			}
			var i = e("../utils").diff,
				n = e("../utils/debug"),
				o = e("../core/component").registerComponent,
				a = e("../lib/three"),
				s = a.Math.degToRad,
				h = n("components:light:warn");
			t.exports.Component = o("light", {
				schema: {
					angle: {
						"default": 60,
						"if": {
							type: ["spot"]
						}
					},
					color: {
						type: "color"
					},
					groundColor: {
						type: "color",
						"if": {
							type: ["hemisphere"]
						}
					},
					decay: {
						"default": 1,
						"if": {
							type: ["point", "spot"]
						}
					},
					distance: {
						"default": 0,
						min: 0,
						"if": {
							type: ["point", "spot"]
						}
					},
					exponent: {
						"default": 10,
						"if": {
							type: ["spot"]
						}
					},
					intensity: {
						"default": 1,
						min: 0,
						"if": {
							type: ["directional", "hemisphere", "point", "spot"]
						}
					},
					type: {
						"default": "directional",
						oneOf: ["ambient", "directional", "hemisphere", "point", "spot"]
					}
				},
				init: function() {
					var e = this.el;
					this.light = null, this.system.registerLight(e)
				},
				update: function(e) {
					var t = this.data,
						r = i(t, e || {}),
						n = this.light;
					return !n || "type" in r ? void this.setLight(this.data) : void Object.keys(r).forEach(function(e) {
						var r = t[e]; - 1 !== ["color", "groundColor"].indexOf(e) && (r = new a.Color(r)), n[e] = r
					})
				},
				setLight: function(e) {
					var t = this.el,
						i = r(e);
					i && (this.light && t.removeObject3D("light"), this.light = i, this.light.el = t, t.setObject3D("light", this.light))
				},
				remove: function() {
					this.el.removeObject3D("light")
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"../utils": 102,
			"../utils/debug": 101
		}],
		31: [function(e, t) {
			var r = e("../utils/debug"),
				i = e("../core/component").registerComponent,
				n = e("../utils/src-loader").parseUrl,
				o = e("../lib/three"),
				a = r("components:loader:warn");
			t.exports.Component = i("loader", {
				dependencies: ["material"],
				schema: {
					src: {
						"default": ""
					},
					format: {
						"default": "obj",
						oneOf: ["obj", "collada"]
					}
				},
				init: function() {
					a("loader component is deprecated. Use collada-model or obj-model component instead.")
				},
				update: function() {
					var e = this.el,
						t = this.data,
						r = this.model,
						i = n(t.src),
						o = t.format;
					if (r && e.removeObject3D("mesh"), !i) return void a("Model URL not provided");
					switch (o) {
						case "obj":
							this.loadObj(i);
							break;
						case "collada":
							this.loadCollada(i);
							break;
						default:
							a("Model format not supported")
					}
				},
				loadObj: function(e) {
					var t = this.el,
						r = new o.OBJLoader;
					r.load(e, function(e) {
						this.model = e, this.applyMaterial(), t.setObject3D("mesh", e)
					})
				},
				applyMaterial: function() {
					var e = this.el.components.material.material;
					this.model && this.model.traverse(function(t) {
						t instanceof o.Mesh && (t.material = e)
					})
				},
				loadCollada: function(e) {
					var t = this,
						r = this.el,
						i = new o.ColladaLoader;
					i.options.convertUpAxis = !0, i.load(e, function(e) {
						t.model = e.scene, r.setObject3D("mesh", e.scene)
					})
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"../utils/debug": 101,
			"../utils/src-loader": 103
		}],
		32: [function(e, t) {
			var r = e("../utils/debug"),
				i = e("../utils/coordinates"),
				n = e("../core/component").registerComponent,
				o = e("../lib/three"),
				a = r("components:look-at:warn"),
				s = i.isCoordinate;
			t.exports.Component = n("look-at", {
				schema: {
					"default": "",
					parse: function(e) {
						return s(e) || "object" == typeof e ? i.parse(e) : e
					},
					stringify: function(e) {
						return "object" == typeof e ? i.stringify(e) : e
					}
				},
				init: function() {
					this.target3D = null, this.vector = new o.Vector3
				},
				update: function() {
					var e, t = this,
						r = t.data,
						i = t.el.object3D;
					return !r || "object" == typeof r && !Object.keys(r).length ? t.remove() : "object" == typeof r ? i.lookAt(new o.Vector3(r.x, r.y, r.z)) : (e = t.el.sceneEl.querySelector(r), e ? e.hasLoaded ? t.beginTracking(e) : e.addEventListener("loaded", function() {
						t.beginTracking(e)
					}) : void a('"' + r + '" does not point to a valid entity to look-at'))
				},
				tick: function() {
					var e = this.target3D;
					return e ? this.el.object3D.lookAt(this.vector.setFromMatrixPosition(e.matrixWorld)) : void 0
				},
				beginTracking: function(e) {
					this.target3D = e.object3D
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"../utils/coordinates": 100,
			"../utils/debug": 101
		}],
		33: [function(e, t) {
			var r = e("../core/component").registerComponent,
				i = e("../lib/three"),
				n = Math.PI / 2;
			t.exports.Component = r("look-controls", {
				dependencies: ["position", "rotation"],
				schema: {
					enabled: {
						"default": !0
					}
				},
				init: function() {
					this.previousPosition = new i.Vector3, this.deltaPosition = new i.Vector3, this.setupMouseControls(), this.setupHMDControls(), this.bindMethods()
				},
				update: function() {
					this.data.enabled && (this.controls.update(), this.updateOrientation(), this.updatePosition())
				},
				play: function() {
					this.previousPosition.set(0, 0, 0), this.addEventListeners()
				},
				pause: function() {
					this.removeEventListeners()
				},
				tick: function() {
					this.update()
				},
				remove: function() {
					this.pause()
				},
				bindMethods: function() {
					this.onMouseDown = this.onMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.releaseMouse = this.releaseMouse.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this)
				},
				setupMouseControls: function() {
					this.mouseDown = !1, this.pitchObject = new i.Object3D, this.yawObject = new i.Object3D, this.yawObject.position.y = 10, this.yawObject.add(this.pitchObject)
				},
				setupHMDControls: function() {
					this.dolly = new i.Object3D, this.euler = new i.Euler, this.controls = new i.VRControls(this.dolly), this.zeroQuaternion = new i.Quaternion
				},
				addEventListeners: function() {
					var e = this.el.sceneEl,
						t = e.canvas;
					return t ? (t.addEventListener("mousedown", this.onMouseDown, !1), t.addEventListener("mousemove", this.onMouseMove, !1), t.addEventListener("mouseup", this.releaseMouse, !1), t.addEventListener("mouseout", this.releaseMouse, !1), t.addEventListener("touchstart", this.onTouchStart), t.addEventListener("touchmove", this.onTouchMove), void t.addEventListener("touchend", this.onTouchEnd)) : void e.addEventListener("render-target-loaded", this.addEventListeners.bind(this))
				},
				removeEventListeners: function() {
					var e = document.querySelector("a-scene"),
						t = e && e.canvas;
					t && (t.removeEventListener("mousedown", this.onMouseDown), t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("mouseup", this.releaseMouse), t.removeEventListener("mouseout", this.releaseMouse), t.removeEventListener("touchstart", this.onTouchStart), t.removeEventListener("touchmove", this.onTouchMove), t.removeEventListener("touchend", this.onTouchEnd))
				},
				updateOrientation: function() {
					var e = new i.Euler;
					return e.order = "YXZ",
						function() {
							var t = this.pitchObject,
								r = this.yawObject,
								n = this.calculateHMDQuaternion();
							e.setFromQuaternion(n), this.el.setAttribute("rotation", {
								x: i.Math.radToDeg(e.x) + i.Math.radToDeg(t.rotation.x),
								y: i.Math.radToDeg(e.y) + i.Math.radToDeg(r.rotation.y),
								z: i.Math.radToDeg(e.z)
							})
						}
				}(),
				calculateHMDQuaternion: function() {
					var e = new i.Quaternion;
					return function() {
						var t = this.dolly;
						return this.zeroed || t.quaternion.equals(this.zeroQuaternion) || (this.zeroOrientation(), this.zeroed = !0), e.copy(this.zeroQuaternion).multiply(t.quaternion), e
					}
				}(),
				updatePosition: function() {
					var e = this.el,
						t = this.calculateDeltaPosition(),
						r = e.getComputedAttribute("position");
					e.setAttribute("position", {
						x: r.x + t.x,
						y: r.y + t.y,
						z: r.z + t.z
					})
				},
				calculateDeltaPosition: function() {
					var e = this.dolly,
						t = this.deltaPosition,
						r = this.previousPosition;
					return t.copy(e.position), t.sub(r), r.copy(e.position), t
				},
				updateHMDQuaternion: function() {
					var e = new i.Quaternion;
					return function() {
						var t = this.dolly;
						return this.controls.update(), this.zeroed || t.quaternion.equals(this.zeroQuaternion) || (this.zeroOrientation(), this.zeroed = !0), e.copy(this.zeroQuaternion).multiply(t.quaternion), e
					}
				}(),
				zeroOrientation: function() {
					var e = new i.Euler;
					e.setFromQuaternion(this.dolly.quaternion.clone().inverse()), e.z = 0, e.x = 0, this.zeroQuaternion.setFromEuler(e)
				},
				onMouseMove: function(e) {
					var t = this.pitchObject,
						r = this.yawObject,
						i = this.previousMouseEvent;
					if (this.mouseDown && this.data.enabled) {
						var o = e.movementX || e.mozMovementX,
							a = e.movementY || e.mozMovementY;
						(void 0 === o || void 0 === a) && (o = e.screenX - i.screenX, a = e.screenY - i.screenY), this.previousMouseEvent = e, r.rotation.y -= .002 * o, t.rotation.x -= .002 * a, t.rotation.x = Math.max(-n, Math.min(n, t.rotation.x))
					}
				},
				onMouseDown: function(e) {
					this.mouseDown = !0, this.previousMouseEvent = e
				},
				releaseMouse: function() {
					this.mouseDown = !1
				},
				onTouchStart: function(e) {
					1 === e.touches.length && (this.touchStart = {
						x: e.touches[0].pageX,
						y: e.touches[0].pageY
					}, this.touchStarted = !0)
				},
				onTouchMove: function(e) {
					var t, r = this.yawObject;
					this.touchStarted && (t = 2 * Math.PI * (e.touches[0].pageX - this.touchStart.x) / this.el.sceneEl.canvas.clientWidth, r.rotation.y -= .5 * t, this.touchStart = {
						x: e.touches[0].pageX,
						y: e.touches[0].pageY
					})
				},
				onTouchEnd: function() {
					this.touchStarted = !1
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90
		}],
		34: [function(e, t) {
			function r(e) {
				switch (e) {
					case "back":
						return a.BackSide;
					case "double":
						return a.DoubleSide;
					default:
						return a.FrontSide
				}
			}
			var i = e("../utils/debug"),
				n = e("../utils"),
				o = e("../core/component"),
				a = e("../lib/three"),
				s = e("../core/shader"),
				h = i("components:material:error"),
				c = n.diff,
				l = o.registerComponent,
				u = s.shaders,
				d = s.shaderNames;
			t.exports.Component = l("material", {
				schema: {
					shader: {
						"default": "standard",
						oneOf: d
					},
					transparent: {
						"default": !1
					},
					opacity: {
						"default": 1,
						min: 0,
						max: 1
					},
					side: {
						"default": "front",
						oneOf: ["front", "back", "double"]
					},
					depthTest: {
						"default": !0
					}
				},
				init: function() {
					this.material = null
				},
				update: function(e) {
					var t = this.data,
						r = e ? c(e, t) : t;
					(!this.shader || r.shader) && this.updateShader(t.shader), this.shader.update(this.data), this.updateMaterial()
				},
				updateSchema: function(e) {
					var t = e.shader,
						r = this.data && this.data.shader,
						i = t || r,
						n = u[i] && u[i].schema;
					n || h("Unknown shader schema " + i), r && t === r || (this.extendSchema(n), this.updateBehavior())
				},
				updateBehavior: function() {
					var e = this.el.sceneEl,
						t = this.schema,
						r = this,
						i = {},
						n = function(e) {
							function t(t) {
								i[t] = e
							}
							var n = Object.keys(i);
							n.forEach(t), r.shader.update(i)
						},
						o = Object.keys(t);
					o.forEach(function(o) {
						"time" === t[o].type && (r.tick = n, i[o] = !0, e.addBehavior(r))
					}), 0 === Object.keys(i).length && e.removeBehavior(this)
				},
				updateShader: function(e) {
					var t, r = this.data,
						i = u[e] && u[e].Shader;
					if (!i) throw new Error("Unknown shader " + e);
					this.shader = new i, this.shader.el = this.el, t = this.shader.init(r), this.setMaterial(t), this.updateSchema(r)
				},
				updateMaterial: function() {
					var e = this.data,
						t = this.material;
					t.side = r(e.side), t.opacity = e.opacity, t.transparent = e.transparent !== !1 || e.opacity < 1, t.depthTest = e.depthTest !== !1
				},
				remove: function() {
					var e = new a.MeshBasicMaterial,
						t = this.el.getObject3D("mesh");
					t && (t.material = e), this.system.unregisterMaterial(this.material)
				},
				setMaterial: function(e) {
					var t = this.el.getOrCreateObject3D("mesh", a.Mesh),
						r = this.system;
					this.material && r.unregisterMaterial(this.material), this.material = t.material = e, r.registerMaterial(e)
				}
			})
		}, {
			"../core/component": 56,
			"../core/shader": 63,
			"../lib/three": 90,
			"../utils": 102,
			"../utils/debug": 101
		}],
		35: [function(e, t) {
			var r = e("../utils/debug"),
				i = e("../core/component").registerComponent,
				n = e("../lib/three"),
				o = r("components:obj-model:warn");
			t.exports.Component = i("obj-model", {
				dependencies: ["material"],
				schema: {
					mtl: {
						type: "src"
					},
					obj: {
						type: "src"
					}
				},
				init: function() {
					this.model = null, this.objLoader = new n.OBJLoader, this.mtlLoader = new n.MTLLoader(this.objLoader.manager)
				},
				update: function() {
					var e = this.data;
					e.obj && (this.remove(), this.loadObj(e.obj, e.mtl))
				},
				remove: function() {
					this.model && this.el.removeObject3D("mesh")
				},
				loadObj: function(e, t) {
					var r = this,
						i = this.el,
						a = this.mtlLoader,
						s = this.objLoader;
					return t ? (HTMLElement.prototype.getAttribute.call(i, "material") && o("Material component properties are ignored when a .MTL is provided"), a.setBaseUrl(t.substr(0, t.lastIndexOf("/") + 1)), void a.load(t, function(t) {
						t.preload(), s.setMaterials(t), s.load(e, function(e) {
							r.model = e, i.setObject3D("mesh", e), i.emit("model-loaded", {
								format: "obj",
								model: e
							})
						})
					})) : void s.load(e, function(e) {
						var t = i.components.material.material;
						e.traverse(function(e) {
							e instanceof n.Mesh && (e.material = t)
						}), r.model = e, i.setObject3D("mesh", e), i.emit("model-loaded", {
							format: "obj",
							model: e
						})
					})
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"../utils/debug": 101
		}],
		36: [function(e, t) {
			var r = e("../core/component").registerComponent;
			t.exports.Component = r("position", {
				schema: {
					type: "vec3"
				},
				update: function() {
					var e = this.el.object3D,
						t = this.data;
					e.position.set(t.x, t.y, t.z)
				}
			})
		}, {
			"../core/component": 56
		}],
		37: [function(e, t) {
			var r = e("../core/component").registerComponent,
				i = e("request-interval"),
				n = e("../lib/three");
			t.exports.Component = r("raycaster", {
				init: function() {
					this.raycaster = new n.Raycaster, this.intersectedEl = null
				},
				play: function() {
					this.pollForHoverIntersections()
				},
				pause: function() {
					var e = this.pollInterval;
					e && i.clear(this.pollInterval)
				},
				remove: function() {
					this.pause()
				},
				pollForHoverIntersections: function() {
					this.pollInterval = i(100, this.getIntersections.bind(this))
				},
				getIntersections: function() {
					var e = this.getClosestIntersected();
					return e ? void this.handleIntersection(e) : void(this.intersectedEl && this.clearExistingIntersection())
				},
				intersect: function(e) {
					var t = this.el,
						r = this.raycaster,
						i = t.object3D,
						o = t.parentNode.object3D,
						a = (new n.Vector3).setFromMatrixPosition(o.matrixWorld),
						s = (new n.Vector3).setFromMatrixPosition(i.matrixWorld),
						h = s.sub(a).normalize();
					return r.set(a, h), r.intersectObjects(e, !0)
				},
				getClosestIntersected: function() {
					for (var e, t = this.el.sceneEl.object3D, r = this.el, i = this.intersect(t.children), n = 0; n < i.length; ++n) {
						for (e = i[n]; e.object.parent && void 0 === e.object.el;) e.object = e.object.parent;
						if (void 0 !== e.object.el && e.object.el !== r && e.object.visible) return e;
					}
					return null
				},
				setExistingIntersection: function(e, t) {
					this.intersectedEl = e, this.el.emit("intersection", {
						el: e,
						distance: t
					})
				},
				clearExistingIntersection: function() {
					var e = this.intersectedEl;
					this.el.emit("intersectioncleared", {
						el: e
					}), this.intersectedEl = null
				},
				handleIntersection: function(e) {
					var t = e.object.el;
					this.intersectedEl !== t && this.clearExistingIntersection(), this.setExistingIntersection(t, e.distance)
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"request-interval": 12
		}],
		38: [function(e, t) {
			var r = e("../lib/three").Math.degToRad,
				i = e("../core/component").registerComponent;
			t.exports.Component = i("rotation", {
				schema: {
					type: "vec3"
				},
				update: function() {
					var e = this.data,
						t = this.el.object3D;
					t.rotation.set(r(e.x), r(e.y), r(e.z)), t.rotation.order = "YXZ"
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90
		}],
		39: [function(e, t) {
			var r = e("../core/component").registerComponent,
				i = 1e-5;
			t.exports.Component = r("scale", {
				schema: {
					type: "vec3",
					"default": {
						x: 1,
						y: 1,
						z: 1
					}
				},
				update: function() {
					var e = this.data,
						t = this.el.object3D,
						r = 0 === e.x ? i : e.x,
						n = 0 === e.y ? i : e.y,
						o = 0 === e.z ? i : e.z;
					t.scale.set(r, n, o)
				}
			})
		}, {
			"../core/component": 56
		}],
		40: [function(e, t) {
			var r = e("../../core/component").registerComponent;
			t.exports.Component = r("canvas", {
				schema: {
					canvas: {
						type: "selector",
						"default": void 0
					},
					height: {
						"default": 100
					},
					width: {
						"default": 100
					}
				},
				update: function() {
					var e = this.data,
						t = e.canvas,
						r = this.el;
					r.canvas || (t || (t = document.createElement("canvas"), t.classList.add("a-canvas"), t.style.height = e.height + "%", t.style.width = e.width + "%", r.appendChild(t)), t.addEventListener("touchmove", function(e) {
						e.preventDefault()
					}), r.canvas = t, r.emit("render-target-loaded", {
						target: t
					}))
				}
			})
		}, {
			"../../core/component": 56
		}],
		41: [function(e, t) {
			function r(e) {
				var t;
				return t = "exponential" === e.type ? new n.FogExp2(e.color, e.density) : new n.Fog(e.color, e.near, e.far), t.name = e.type, t
			}
			var i = e("../../core/component").registerComponent,
				n = e("../../lib/three"),
				o = e("../../utils/debug"),
				a = o("components:fog:warn");
			t.exports.Component = i("fog", {
				schema: {
					color: {
						"default": "#000"
					},
					density: {
						"default": 25e-5
					},
					far: {
						"default": 1e3,
						min: 0
					},
					near: {
						"default": 1,
						min: 0
					},
					type: {
						"default": "linear",
						oneOf: ["linear", "exponential"]
					}
				},
				update: function() {
					var e = this.data,
						t = this.el,
						i = this.el.object3D.fog;
					return t.isScene ? i && e.type === i.name ? void Object.keys(this.schema).forEach(function(t) {
						var r = e[t];
						"color" === t && (r = new n.Color(r)), i[t] = r
					}) : (t.object3D.fog = r(e), void t.systems.material.updateMaterials()) : void a("Fog component can only be applied to <a-scene>")
				},
				remove: function() {
					var e = this.el.object3D.fog;
					e && (e.density = 0, e.far = 0, e.near = 0)
				}
			})
		}, {
			"../../core/component": 56,
			"../../lib/three": 90,
			"../../utils/debug": 101
		}],
		42: [function(e, t) {
			var r = e("../../core/component").registerComponent,
				i = e("../../utils/").shouldCaptureKeyEvent,
				n = e("../../lib/three"),
				o = new n.VRControls(new n.Object3D);
			t.exports.Component = r("keyboard-shortcuts", {
				schema: {
					enterVR: {
						"default": !0
					},
					resetSensor: {
						"default": !0
					}
				},
				init: function() {
					var e = this,
						t = this.el;
					this.listener = window.addEventListener("keyup", function(r) {
						i(r) && (e.enterVREnabled && 70 === r.keyCode && t.enterVR(), e.resetSensorEnabled && 90 === r.keyCode && o.resetSensor())
					}, !1)
				},
				update: function() {
					var e = this.data;
					this.enterVREnabled = e.enterVR, this.resetSensorEnabled = e.resetSensor
				},
				remove: function() {
					window.removeEventListener("keyup", this.listener)
				}
			})
		}, {
			"../../core/component": 56,
			"../../lib/three": 90,
			"../../utils/": 102
		}],
		43: [function(e, t) {
			function r(e) {
				var t = new a(e.renderer),
					r = new s(e),
					i = e.isMobile ? [] : [t, r];
				return new n({
					css: [],
					values: {
						fps: {
							caption: "fps",
							below: 30
						}
					},
					groups: [{
						caption: "Framerate",
						values: ["fps", "raf"]
					}],
					plugins: i
				})
			}
			var i = e("../../core/component").registerComponent,
				n = e("../../../vendor/rStats");
			e("../../../vendor/rStats.extras"), e("../../lib/rStatsAframe");
			var o = "a-hidden",
				a = window.threeStats,
				s = window.aframeStats;
			t.exports.Component = i("stats", {
				init: function() {
					var e = this.el;
					this.stats = r(e), this.statsEl = document.querySelector(".rs-base"), this.hideBound = this.hide.bind(this), this.showBound = this.show.bind(this), e.addEventListener("enter-vr", this.hideBound), e.addEventListener("exit-vr", this.showBound)
				},
				remove: function() {
					this.el.removeEventListener("enter-vr", this.hideBound), this.el.removeEventListener("exit-vr", this.showBound), this.statsEl.parentNode.removeChild(this.statsEl)
				},
				tick: function() {
					var e = this.stats;
					e("rAF").tick(), e("FPS").frame(), e().update()
				},
				hide: function() {
					this.statsEl.classList.add(o)
				},
				show: function() {
					this.statsEl.classList.remove(o)
				}
			})
		}, {
			"../../../vendor/rStats": 107,
			"../../../vendor/rStats.extras": 106,
			"../../core/component": 56,
			"../../lib/rStatsAframe": 89
		}],
		44: [function(e, t) {
			function r(e, t) {
				function r() {
					return h.update(), a = s.quaternion, 0 !== a._x || 0 !== a._y || 0 !== a._z ? !0 : void 0
				}
				var i, n, o, a, f, m, v = t || window.hasNonPolyfillWebVRSupport;
				return m = document.createElement("div"), m.classList.add(c), i = document.createElement("div"), i.className = p, o = document.createElement("p"), n = document.createElement("a"), n.setAttribute("href", "http://mozvr.com/#start"), n.setAttribute("target", "_blank"), n.innerHTML = "Learn more.", f = document.createElement("button"), f.className = d, m.appendChild(f), i && (i.appendChild(o), i.appendChild(n), m.appendChild(i)), r() || t || (o.innerHTML = "Your browser supports WebVR. To enter VR, connect a headset, or use a mobile phone.", m.setAttribute(l, "")), v ? f.addEventListener("click", e) : (o.innerHTML = "Your browser does not support WebVR. To enter VR, use a VR-compatible browser or a mobile phone.", m.setAttribute(u, "")), m
			}

			function i(e) {
				var t = document.createElement("div");
				t.className = m, t.classList.add(f);
				var r = document.createElement("button");
				return r.innerHTML = "Exit VR", r.addEventListener("click", e), t.appendChild(r), t
			}
			var n = e("../../core/component").registerComponent,
				o = e("../../lib/three"),
				a = e("../../utils/"),
				s = new o.Object3D,
				h = new o.VRControls(s),
				c = "a-enter-vr",
				l = "data-a-enter-vr-no-headset",
				u = "data-a-enter-vr-no-webvr",
				d = "a-enter-vr-button",
				p = "a-enter-vr-modal",
				f = "a-hidden",
				m = "a-orientation-modal";
			t.exports.Component = n("vr-mode-ui", {
				dependencies: ["canvas"],
				schema: {
					enabled: {
						"default": !0
					}
				},
				init: function() {
					var e = this,
						t = this.el;
					this.enterVR = t.enterVR.bind(t), this.exitVR = t.exitVR.bind(t), this.insideLoader = !1, this.enterVREl = null, this.orientationModalEl = null, t.addEventListener("enter-vr", this.updateEnterVRInterface.bind(this)), t.addEventListener("exit-vr", this.updateEnterVRInterface.bind(this)), window.addEventListener("message", function(t) {
						"loaderReady" === t.data.type && (e.insideLoader = !0, e.remove())
					}), window.addEventListener("orientationchange", this.toggleOrientationModalIfNeeded.bind(this))
				},
				update: function() {
					var e = this.el;
					return !this.data.enabled || this.insideLoader ? this.remove() : void(this.enterVREl || this.orientationModalEl || (this.enterVREl = r(this.enterVR, e.isMobile), this.el.appendChild(this.enterVREl), this.orientationModalEl = i(this.exitVR), this.el.appendChild(this.orientationModalEl), this.updateEnterVRInterface()))
				},
				remove: function() {
					[this.enterVREl, this.orientationModalEl].forEach(function(e) {
						e && e.parentNode.removeChild(e)
					})
				},
				updateEnterVRInterface: function() {
					this.toggleEnterVRButtonIfNeeded(), this.toggleOrientationModalIfNeeded()
				},
				toggleEnterVRButtonIfNeeded: function() {
					if (this.enterVREl) {
						var e = this.el;
						e.is("vr-mode") ? this.enterVREl.classList.add(f) : this.enterVREl.classList.remove(f)
					}
				},
				toggleOrientationModalIfNeeded: function() {
					var e = this.el;
					this.orientationModalEl && e.isMobile && (!a.isLandscape() && e.is("vr-mode") ? this.orientationModalEl.classList.remove(f) : this.orientationModalEl.classList.add(f))
				}
			})
		}, {
			"../../core/component": 56,
			"../../lib/three": 90,
			"../../utils/": 102
		}],
		45: [function(e, t) {
			var r = e("../utils/debug"),
				i = e("../utils").diff,
				n = e("../core/component").registerComponent,
				o = e("../lib/three"),
				a = r("components:sound:warn");
			t.exports.Component = n("sound", {
				schema: {
					src: {
						"default": ""
					},
					on: {
						"default": "click"
					},
					autoplay: {
						"default": !1
					},
					loop: {
						"default": !1
					},
					volume: {
						"default": 1
					}
				},
				init: function() {
					this.listener = null, this.sound = null
				},
				update: function(e) {
					var t = this.data,
						r = i(e || {}, t),
						n = this.el,
						o = this.sound,
						s = t.src,
						h = "src" in r;
					if (h) {
						if (!s) return void a("Audio source was not specified with `src`");
						o = this.setupSound()
					}(h || "autoplay" in r) && (o.autoplay = t.autoplay), (h || "loop" in r) && o.setLoop(t.loop), (h || "volume" in r) && o.setVolume(t.volume), "on" in r && (e && e.on && n.removeEventListener(e.on), n.addEventListener(t.on, this.play.bind(this))), h && o.load(s)
				},
				remove: function() {
					this.el.removeObject3D("sound"), this.sound.disconnect()
				},
				setupSound: function() {
					var e = this.el,
						t = e.sceneEl,
						r = this.sound;
					r && (this.stop(), e.removeObject3D("sound"));
					var i = this.listener = t.audioListener || new o.AudioListener;
					return t.audioListener = i, t.camera && t.camera.add(i), t.addEventListener("camera-set-active", function(e) {
						e.detail.cameraEl.getObject3D("camera").add(i)
					}), r = this.sound = new o.PositionalAudio(i), e.setObject3D("sound", r), r.source.onended = function() {
						r.onEnded(), e.emit("sound-ended")
					}, r
				},
				play: function() {
					this.sound.source.buffer && this.sound.play()
				},
				stop: function() {
					this.sound.source.buffer && this.sound.stop()
				},
				pause: function() {
					this.sound.source.buffer && this.sound.isPlaying && this.sound.pause()
				}
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"../utils": 102,
			"../utils/debug": 101
		}],
		46: [function(e, t) {
			var r = e("../core/component").registerComponent;
			t.exports.Component = r("visible", {
				schema: {
					type: "boolean",
					"default": !0
				},
				update: function() {
					this.el.object3D.visible = this.data
				}
			})
		}, {
			"../core/component": 56
		}],
		47: [function(e, t) {
			var r = e("../core/component").registerComponent,
				i = e("../utils/").shouldCaptureKeyEvent,
				n = e("../lib/three"),
				o = .2;
			t.exports.Component = r("wasd-controls", {
				schema: {
					easing: {
						"default": 20
					},
					acceleration: {
						"default": 65
					},
					enabled: {
						"default": !0
					},
					fly: {
						"default": !1
					},
					wsAxis: {
						"default": "z",
						oneOf: ["x", "y", "z"]
					},
					adAxis: {
						"default": "x",
						oneOf: ["x", "y", "z"]
					},
					wsInverted: {
						"default": !1
					},
					wsEnabled: {
						"default": !0
					},
					adInverted: {
						"default": !1
					},
					adEnabled: {
						"default": !0
					}
				},
				init: function() {
					this.velocity = new n.Vector3, this.keys = {}, this.onBlur = this.onBlur.bind(this), this.onFocus = this.onFocus.bind(this), this.onVisibilityChange = this.onVisibilityChange.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.attachVisibilityEventListeners()
				},
				update: function(e) {
					var t, r = this.data,
						i = r.acceleration,
						n = r.easing,
						a = this.velocity,
						s = this.prevTime = this.prevTime || Date.now(),
						h = window.performance.now(),
						c = (h - s) / 1e3,
						l = this.keys,
						u = r.adAxis,
						d = r.wsAxis,
						p = r.adInverted ? -1 : 1,
						f = r.wsInverted ? -1 : 1,
						m = this.el;
					if (this.prevTime = h, e || c > o) return a[u] = 0, void(a[d] = 0);
					a[u] -= a[u] * n * c, a[d] -= a[d] * n * c;
					var v = m.getComputedAttribute("position");
					r.enabled && (r.adEnabled && (l[65] && (a[u] -= p * i * c), l[68] && (a[u] += p * i * c)), r.wsEnabled && (l[87] && (a[d] -= f * i * c), l[83] && (a[d] += f * i * c))), t = this.getMovementVector(c), m.object3D.translateX(t.x), m.object3D.translateY(t.y), m.object3D.translateZ(t.z), m.setAttribute("position", {
						x: v.x + t.x,
						y: v.y + t.y,
						z: v.z + t.z
					})
				},
				play: function() {
					this.attachKeyEventListeners()
				},
				pause: function() {
					this.keys = {}, this.removeKeyEventListeners()
				},
				tick: function() {
					this.update()
				},
				remove: function() {
					this.pause(), this.removeVisibilityEventListeners()
				},
				attachVisibilityEventListeners: function() {
					window.addEventListener("blur", this.onBlur), window.addEventListener("focus", this.onFocus), document.addEventListener("visibilitychange", this.onVisibilityChange)
				},
				removeVisibilityEventListeners: function() {
					window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("visibilitychange", this.onVisibilityChange)
				},
				attachKeyEventListeners: function() {
					window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp)
				},
				removeKeyEventListeners: function() {
					window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp)
				},
				onBlur: function() {
					this.pause()
				},
				onFocus: function() {
					this.play()
				},
				onVisibilityChange: function() {
					document.hidden ? this.onBlur() : this.onFocus()
				},
				onKeyDown: function(e) {
					i(e) && (this.keys[e.keyCode] = !0)
				},
				onKeyUp: function(e) {
					i(e) && (this.keys[e.keyCode] = !1)
				},
				getMovementVector: function() {
					var e = new n.Vector3(0, 0, 0),
						t = new n.Euler(0, 0, 0, "YXZ");
					return function(r) {
						var i = this.velocity,
							o = this.el.getAttribute("rotation");
						return e.copy(i), e.multiplyScalar(r), o ? (this.data.fly || (o.x = 0), t.set(n.Math.degToRad(o.x), n.Math.degToRad(o.y), 0), e.applyEuler(t), e) : e
					}
				}()
			})
		}, {
			"../core/component": 56,
			"../lib/three": 90,
			"../utils/": 102
		}],
		48: [function(e, t) {
			var r = e("tween.js"),
				i = {
					alternate: "alternate",
					alternateReverse: "alternate-reverse",
					normal: "normal",
					reverse: "reverse"
				},
				n = {
					linear: r.Easing.Linear.None,
					ease: r.Easing.Cubic.InOut,
					"ease-in": r.Easing.Cubic.In,
					"ease-out": r.Easing.Cubic.Out,
					"ease-in-out": r.Easing.Cubic.InOut,
					"ease-cubic": r.Easing.Cubic.In,
					"ease-in-cubic": r.Easing.Cubic.In,
					"ease-out-cubic": r.Easing.Cubic.Out,
					"ease-in-out-cubic": r.Easing.Cubic.InOut,
					"ease-quad": r.Easing.Quadratic.InOut,
					"ease-in-quad": r.Easing.Quadratic.In,
					"ease-out-quad": r.Easing.Quadratic.Out,
					"ease-in-out-quad": r.Easing.Quadratic.InOut,
					"ease-quart": r.Easing.Quartic.InOut,
					"ease-in-quart": r.Easing.Quartic.In,
					"ease-out-quart": r.Easing.Quartic.Out,
					"ease-in-out-quart": r.Easing.Quartic.InOut,
					"ease-quint": r.Easing.Quintic.InOut,
					"ease-in-quint": r.Easing.Quintic.In,
					"ease-out-quint": r.Easing.Quintic.Out,
					"ease-in-out-quint": r.Easing.Quintic.InOut,
					"ease-sine": r.Easing.Sinusoidal.InOut,
					"ease-in-sine": r.Easing.Sinusoidal.In,
					"ease-out-sine": r.Easing.Sinusoidal.Out,
					"ease-in-out-sine": r.Easing.Sinusoidal.InOut,
					"ease-expo": r.Easing.Exponential.InOut,
					"ease-in-expo": r.Easing.Exponential.In,
					"ease-out-expo": r.Easing.Exponential.Out,
					"ease-in-out-expo": r.Easing.Exponential.InOut,
					"ease-circ": r.Easing.Circular.InOut,
					"ease-in-circ": r.Easing.Circular.In,
					"ease-out-circ": r.Easing.Circular.Out,
					"ease-in-out-circ": r.Easing.Circular.InOut,
					"ease-elastic": r.Easing.Elastic.InOut,
					"ease-in-elastic": r.Easing.Elastic.In,
					"ease-out-elastic": r.Easing.Elastic.Out,
					"ease-in-out-elastic": r.Easing.Elastic.InOut,
					"ease-back": r.Easing.Back.InOut,
					"ease-in-back": r.Easing.Back.In,
					"ease-out-back": r.Easing.Back.Out,
					"ease-in-out-back": r.Easing.Back.InOut,
					"ease-bounce": r.Easing.Bounce.InOut,
					"ease-in-bounce": r.Easing.Bounce.In,
					"ease-out-bounce": r.Easing.Bounce.Out,
					"ease-in-out-bounce": r.Easing.Bounce.InOut
				},
				o = {
					backwards: "backwards",
					both: "both",
					forwards: "forwards",
					none: "none"
				},
				a = {
					indefinite: "indefinite"
				},
				s = {
					attribute: "rotation",
					begin: "0",
					dur: 1e3,
					easing: "ease",
					direction: i.normal,
					fill: o.forwards,
					from: void 0,
					repeat: 0,
					to: void 0
				};
			t.exports.defaults = s, t.exports.directions = i, t.exports.easingFunctions = n, t.exports.fills = o, t.exports.repeats = a
		}, {
			"tween.js": 22
		}],
		49: [function(e, t) {
			function r(e) {
				return d.extend({}, e)
			}

			function i(e, t, r, i, a) {
				function s() {
					v = x[0], m = x[1], f = e.components[v], f || (e.setAttribute(v, ""), f = e.components[v]), p = f.schema, b[t] = void 0 === r ? e.getComputedAttribute(v)[m] : r, b[t] = c(b[t], p[m]), w[t] = c(i, p[m]), g = function(r) {
						t in r && e.setAttribute(v, m, r[t])
					}
				}

				function l() {
					b = r ? h.parse(r) : a, w = h.parse(i), g = function(r) {
						e.setAttribute(t, r)
					}
				}

				function u() {
					b[t] = void 0 === r ? !1 : n(r), b[t] = o(b[t]), w[t] = o(n(i)), g = function(r) {
						e.setAttribute(t, !!r[t])
					}
				}

				function d() {
					b[t] = parseFloat(void 0 === r ? e.getAttribute(t) : r), w[t] = parseFloat(i), g = function(r) {
						e.setAttribute(t, r[t])
					}
				}
				var p, f, m, v, g, x = t.split("."),
					b = {},
					w = {};
				return 2 === x.length ? s() : i && y(i) ? l() : -1 !== ["true", "false"].indexOf(i) ? u() : d(), {
					from: b,
					partialSetAttribute: g,
					to: w
				}
			}

			function n(e) {
				return "true" === e ? !0 : !1
			}

			function o(e) {
				return e ? 1 : 0
			}
			var a = e("./a-node"),
				s = e("../constants/animation"),
				h = e("../utils/").coordinates,
				c = e("./schema").parseProperty,
				l = e("./a-register-element").registerElement,
				u = e("tween.js"),
				d = e("../utils/"),
				p = s.defaults,
				f = s.directions,
				m = s.easingFunctions,
				v = s.fills,
				g = s.repeats,
				y = h.isCoordinate;
			t.exports.AAnimation = l("a-animation", {
				prototype: Object.create(a.prototype, {
					createdCallback: {
						value: function() {
							this.bindMethods(), this.isRunning = !1, this.partialSetAttribute = function() {}, this.tween = null
						}
					},
					attachedCallback: {
						value: function() {
							function e() {
								t.applyMixin(), t.update(), t.load()
							}
							var t = this,
								r = t.el = t.parentNode;
							r.isNode ? r.hasLoaded ? e() : r.addEventListener("loaded", e.bind(t)) : r.addEventListener("nodeready", e.bind(t))
						}
					},
					attributeChangedCallback: {
						value: function() {
							this.hasLoaded && this.isRunning && (this.stop(), this.applyMixin(), this.update())
						}
					},
					detachedCallback: {
						value: function() {
							this.isRunning && this.stop()
						}
					},
					getTween: {
						value: function() {
							var e, t, n, o, a = this,
								s = a.data,
								h = a.el,
								c = s.attribute,
								l = parseInt(s.begin, 10),
								d = h.getComputedAttribute(c),
								p = a.getDirection(s.direction),
								y = m[s.easing],
								x = s.fill,
								b = s.repeat === g.indefinite ? 1 / 0 : 0,
								w = !1;
							return e = i(h, c, s.from || a.initialValue, s.to, d), t = e.from, n = e.to, a.partialSetAttribute = e.partialSetAttribute, void 0 === a.count && (a.count = b === 1 / 0 ? 0 : parseInt(s.repeat, 10)), isNaN(l) && (l = 0), a.initialValue = a.initialValue || r(d), b === 1 / 0 && x === v.forwards && -1 !== [f.alternate, f.alternateReverse].indexOf(s.direction) && (w = !0), p === f.reverse && (o = n, n = r(t), t = r(o)), -1 !== [v.backwards, v.both].indexOf(x) && a.partialSetAttribute(t), new u.Tween(r(t)).to(n, s.dur).delay(l).easing(y).repeat(b).yoyo(w).onUpdate(function() {
								a.partialSetAttribute(this)
							}).onComplete(a.onCompleted.bind(a))
						}
					},
					update: {
						value: function() {
							var e = this.data,
								t = e.begin;
							this.removeEventListeners(this.evt), this.addEventListeners(t), this.evt = t, isNaN(t) || (this.stop(), this.start())
						},
						writable: window.debug
					},
					onCompleted: {
						value: function() {
							var e = this.data;
							return this.isRunning = !1, -1 !== [v.backwards, v.none].indexOf(e.fill) && this.partialSetAttribute(this.initialValue), 0 === this.count ? (this.count = void 0, void this.emit("animationend")) : (this.isRunning = !1, this.count--, void this.start())
						}
					},
					start: {
						value: function() {
							!this.isRunning && this.el.isPlaying && (this.tween = this.getTween(), this.isRunning = !0, this.tween.start(), this.emit("animationstart"))
						},
						writable: !0
					},
					stop: {
						value: function() {
							var e = this.tween;
							e && (e.stop(), this.isRunning = !1, -1 !== [v.backwards, v.none].indexOf(this.data.fill) && this.partialSetAttribute(this.initialValue), this.emit("animationstop"))
						},
						writable: !0
					},
					getDirection: {
						value: function(e) {
							return e === f.alternate ? (this.prevDirection = this.prevDirection === f.normal ? f.reverse : f.normal, this.prevDirection) : e === f.alternateReverse ? (this.prevDirection = this.prevDirection === f.reverse ? f.normal : f.reverse, this.prevDirection) : e
						}
					},
					bindMethods: {
						value: function() {
							this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.onStateAdded = this.onStateAdded.bind(this), this.onStateRemoved = this.onStateRemoved.bind(this)
						}
					},
					addEventListeners: {
						value: function(e) {
							var t = this.el,
								r = this;
							d.splitString(e).forEach(function(e) {
								t.addEventListener(e, r.start)
							}), isNaN(e) || t.addEventListener("play", this.start), t.addEventListener("pause", this.stop), t.addEventListener("stateadded", this.onStateAdded), t.addEventListener("stateremoved", this.onStateRemoved)
						}
					},
					removeEventListeners: {
						value: function(e) {
							var t = this.el,
								r = this.start;
							d.splitString(e).forEach(function(e) {
								t.removeEventListener(e, r)
							}), t.removeEventListener("stateadded", this.onStateAdded), t.removeEventListener("stateremoved", this.onStateRemoved)
						}
					},
					onStateAdded: {
						value: function(e) {
							e.detail.state === this.data.begin && this.start()
						},
						writable: !0
					},
					onStateRemoved: {
						value: function(e) {
							e.detail.state === this.data.begin && this.stop()
						},
						writable: !0
					},
					applyMixin: {
						value: function() {
							var e, t, r, i = {};
							r = document.querySelector("#" + this.getAttribute("mixin")), t = r ? d.getElData(r, p) : {}, e = d.getElData(this, p), d.extend(i, p, t, e), this.data = i
						}
					}
				})
			}), t.exports.getAnimationValues = i
		}, {
			"../constants/animation": 48,
			"../utils/": 102,
			"./a-node": 54,
			"./a-register-element": 55,
			"./schema": 62,
			"tween.js": 22
		}],
		50: [function(e, t) {
			function r(e) {
				return e.hasAttribute("autoplay") || "auto" === e.getAttribute("preload") ? new Promise(function(t, r) {
					function i() {
						for (var r = 0, i = 0; i < e.buffered.length; i++) r += e.buffered.end(i) - e.buffered.start(i);
						r >= e.duration && t()
					}
					return 4 === e.readyState ? t() : e.error ? r() : (e.addEventListener("loadeddata", i, !1), e.addEventListener("progress", i, !1), void e.addEventListener("error", r, !1))
				}) : void 0
			}
			var i = e("./a-node"),
				n = e("../utils/debug"),
				o = e("./a-register-element").registerElement,
				a = e("../lib/three"),
				s = new a.XHRLoader,
				h = n("core:a-assets:warn");
			t.exports = o("a-assets", {
				prototype: Object.create(i.prototype, {
					createdCallback: {
						value: function() {
							this.isAssets = !0
						}
					},
					attachedCallback: {
						value: function() {
							var e = this,
								t = [],
								i = this.querySelectorAll("audio"),
								n = this.querySelectorAll("img"),
								o = parseInt(this.getAttribute("timeout"), 10) || 3e3,
								a = this.querySelectorAll("video");
							if ("A-SCENE" !== this.parentNode.tagName) throw new Error("<a-assets> must be a child of a <a-scene>.");
							for (var s = 0; s < n.length; s++) t.push(new Promise(function(e, t) {
								var r = n[s];
								r.onload = e, r.onerror = t
							}));
							for (s = 0; s < i.length; s++) t.push(r(i[s]));
							for (s = 0; s < a.length; s++) t.push(r(a[s]));
							Promise.all(t).then(this.load.bind(this)), setTimeout(function() {
								e.hasLoaded || (h("Asset loading timed out in ", o, "ms"), e.emit("timeout"), e.load())
							}, o)
						}
					},
					load: {
						value: function() {
							i.prototype.load.call(this, null, function(e) {
								return e.isAssetItem && e.hasAttribute("src")
							})
						}
					}
				})
			}), o("a-asset-item", {
				prototype: Object.create(i.prototype, {
					createdCallback: {
						value: function() {
							this.data = null, this.isAssetItem = !0
						}
					},
					attachedCallback: {
						value: function() {
							var e = this,
								t = this.getAttribute("src");
							s.load(t, function(t) {
								e.data = t, i.prototype.load.call(e)
							})
						}
					}
				})
			})
		}, {
			"../lib/three": 90,
			"../utils/debug": 101,
			"./a-node": 54,
			"./a-register-element": 55
		}],
		51: [function(e, t) {
			var r = e("../utils/debug"),
				i = e("./a-register-element").registerElement,
				n = r("core:cubemap:warn");
			t.exports = i("a-cubemap", {
				prototype: Object.create(HTMLElement.prototype, {
					attachedCallback: {
						value: function() {
							this.srcs = this.validate()
						},
						writable: window.debug
					},
					validate: {
						value: function() {
							var e, t = this.querySelectorAll("[src]"),
								r = [];
							if (6 === t.length) {
								for (e = 0; e < t.length; e++) r.push(t[e].getAttribute("src"));
								return r
							}
							n("<a-cubemap> did not contain exactly six elements each with a `src` attribute.")
						},
						writable: window.debug
					}
				})
			})
		}, {
			"../utils/debug": 101,
			"./a-register-element": 55
		}],
		52: [function(e, t) {
			function r(e, t) {
				return void 0 !== e.defaultComponents[t] ? !0 : e.hasAttribute(t) ? !0 : i(t, e.mixinEls)
			}

			function i(e, t) {
				var r, i = !1;
				for (r = 0; r < t.length && !(i = t[r].hasAttribute(e)); ++r);
				return i
			}

			function n(e, t) {
				e.pause(), e.tick && t.removeBehavior(e)
			}

			function o(e, t) {
				e.play(), e.tick && t.addBehavior(e)
			}
			var a, s = e("./a-node"),
				h = e("./component").components,
				c = e("./a-register-element"),
				l = e("../lib/three"),
				u = e("../utils/"),
				d = c.isNode,
				p = u.debug("core:a-entity:debug"),
				f = c.registerElement,
				m = u.styleParser,
				v = Object.create(s.prototype, {
					defaultComponents: {
						value: {
							position: "",
							rotation: "",
							scale: "",
							visible: ""
						}
					},
					createdCallback: {
						value: function() {
							this.components = {}, this.isEntity = !0, this.isPlaying = !1, this.object3D = new l.Group, this.object3D.el = this, this.object3DMap = {}, this.states = []
						}
					},
					attributeChangedCallback: {
						value: function(e, t, r) {
							this.setEntityAttribute(e, t, r)
						}
					},
					attachedCallback: {
						value: function() {
							this.addToParent(), this.isScene || (this.load(), this.parentNode.paused || this.play())
						}
					},
					detachedCallback: {
						value: function() {
							this.parentEl && !this.isScene && (Object.keys(this.components).forEach(this.removeComponent.bind(this)), this.parentEl.remove(this))
						}
					},
					applyMixin: {
						value: function(e) {
							var t = this.getAttribute(e);
							return e ? void this.updateComponent(e, t) : void this.updateComponents()
						}
					},
					mapStateMixins: {
						value: function(e, t) {
							var r, i = this.getAttribute("mixin");
							i && (r = i.split(" "), r.forEach(function(r) {
								var i = r + "-" + e;
								t(i)
							}), this.updateComponents())
						}
					},
					updateStateMixins: {
						value: function(e, t) {
							var r = this;
							t = t || "";
							var i = e.split(" "),
								n = t ? t.split(" ") : [],
								o = n.filter(function(e) {
									return i.indexOf(e) < 0
								});
							o.forEach(function(e) {
								var t = Array.prototype.forEach,
									i = document.querySelectorAll("[id^=" + e + "-]"),
									n = [];
								t.call(i, function(e) {
									n.push(e.id)
								}), n.forEach(r.unregisterMixin.bind(r))
							}), this.states.forEach(function(e) {
								i.forEach(function(t) {
									var i = t + "-" + e;
									r.registerMixin(i)
								})
							})
						}
					},
					getObject3D: {
						value: function(e) {
							return this.object3DMap[e]
						}
					},
					setObject3D: {
						value: function(e, t) {
							var r = this.object3DMap[e];
							r && this.object3D.remove(r), t instanceof l.Object3D && (t.el = this, this.object3D.add(t)), this.object3DMap[e] = t
						}
					},
					removeObject3D: {
						value: function(e) {
							this.setObject3D(e, null)
						}
					},
					getOrCreateObject3D: {
						value: function(e, t) {
							var r = this.getObject3D(e);
							return !r && t && (r = new t, this.setObject3D(e, r)), r
						}
					},
					add: {
						value: function(e) {
							if (!e.object3D) throw new Error("Trying to add an element that doesn't have an `object3D`");
							this.emit("child-attached", {
								el: e
							}), this.object3D.add(e.object3D)
						}
					},
					addToParent: {
						value: function() {
							function e() {
								t.attachedToParent = !0, r.add && r.add(t)
							}
							var t = this,
								r = this.parentEl = this.parentNode,
								i = this.attachedToParent;
							return r && !i ? d(r) ? void e() : void r.addEventListener("nodeready", e) : void 0
						}
					},
					load: {
						value: function() {
							this.hasLoaded || (this.addToParent(), this.isScene ? s.prototype.load.call(this, this.updateComponents.bind(this)) : s.prototype.load.call(this, this.updateComponents.bind(this), function(e) {
								return e.isEntity
							}))
						},
						writable: window.debug
					},
					remove: {
						value: function(e) {
							this.object3D.remove(e.object3D)
						}
					},
					getChildEntities: {
						value: function() {
							for (var e = this.children, t = [], r = 0; r < e.length; r++) {
								var i = e[r];
								i instanceof a && t.push(i)
							}
							return t
						}
					},
					initComponent: {
						value: function(e, t) {
							var i, n = r(this, e);
							if (h[e] && (n || t)) {
								if (this.initComponentDependencies(e), t && !n) this.setAttribute(e, "");
								else {
									if (this.isScene && !this.hasAttribute(e) && e in this.defaultComponents && HTMLElement.prototype.setAttribute.call(this, e, this.defaultComponents[e]), e in this.components) return;
									i = this.components[e] = new h[e].Component(this), this.isPlaying && o(i, this.sceneEl)
								}
								p("Component initialized: %s", e)
							}
						},
						writable: window.debug
					},
					initComponentDependencies: {
						value: function(e) {
							var t, r = this,
								i = h[e];
							i && (t = h[e].dependencies, t && t.forEach(function(e) {
								r.initComponent(e, !0)
							}))
						}
					},
					removeComponent: {
						value: function(e) {
							var t = this.components[e];
							n(t, this.sceneEl), t.remove(), delete this.components[e]
						}
					},
					updateComponents: {
						value: function() {
							function e(e) {
								var r = t.getAttribute(e);
								t.updateComponent(e, r)
							}
							var t = this,
								r = Object.keys(h);
							r.forEach(e)
						}
					},
					updateComponent: {
						value: function(e, t) {
							var n = this.components[e],
								o = e in this.defaultComponents,
								a = i(e, this.mixinEls);
							return n ? r(this, e) && (null !== t || o || a) ? void n.updateProperties(t) : void this.removeComponent(e) : void this.initComponent(e)
						}
					},
					removeAttribute: {
						value: function(e) {
							var t = h[e];
							t && this.setEntityAttribute(e, void 0, null), HTMLElement.prototype.removeAttribute.call(this, e)
						}
					},
					play: {
						value: function() {
							var e = this.components,
								t = Object.keys(e),
								r = this.sceneEl;
							this.isPlaying || (this.isPlaying = !0, t.forEach(function(t) {
								o(e[t], r)
							}), this.getChildEntities().forEach(function(e) {
								e.play()
							}), this.emit("play"))
						},
						writable: !0
					},
					pause: {
						value: function() {
							var e = this.components,
								t = Object.keys(e),
								r = this.sceneEl;
							this.isPlaying && (this.isPlaying = !1, t.forEach(function(t) {
								n(e[t], r)
							}), this.getChildEntities().forEach(function(e) {
								e.pause()
							}), this.emit("pause"))
						},
						writable: !0
					},
					setEntityAttribute: {
						value: function(e, t, r) {
							var i = h[e];
							return t = t || this.getAttribute(e), this.hasLoaded || this.isScene ? "mixin" === e ? (this.updateStateMixins(r, t), void this.updateComponents()) : void(i && this.updateComponent(e, r)) : void 0
						}
					},
					setAttribute: {
						value: function(e, t, r) {
							var i, n = this,
								o = this.components[e] || h[e];
							t = void 0 === t ? "" : t;
							var a, c = t,
								l = t;
							o && ("string" == typeof t && void 0 !== r && (i = m.parse(HTMLElement.prototype.getAttribute.call(this, e)) || {}, i[t] = r, c = i), l = o.stringify(c)), a = this.getAttribute(e), s.prototype.setAttribute.call(n, e, l), n.setEntityAttribute(e, a, c)
						},
						writable: window.debug
					},
					getAttribute: {
						value: function(e) {
							var t = this.components[e] || h[e],
								r = HTMLElement.prototype.getAttribute.call(this, e);
							return t && "string" == typeof r ? t.parse(r, !0) : r
						},
						writable: window.debug
					},
					getComputedAttribute: {
						value: function(e) {
							var t = this.components[e];
							return t ? t.getData() : HTMLElement.prototype.getAttribute.call(this, e)
						}
					},
					addState: {
						value: function(e) {
							this.is(e) || (this.states.push(e), this.mapStateMixins(e, this.registerMixin.bind(this)), this.emit("stateadded", {
								state: e
							}))
						}
					},
					removeState: {
						value: function(e) {
							var t = this.states.indexOf(e); - 1 !== t && (this.states.splice(t, 1), this.mapStateMixins(e, this.unregisterMixin.bind(this)), this.emit("stateremoved", {
								state: e
							}))
						}
					},
					is: {
						value: function(e) {
							return -1 !== this.states.indexOf(e)
						}
					}
				});
			a = f("a-entity", {
				prototype: v
			}), t.exports = a
		}, {
			"../lib/three": 90,
			"../utils/": 102,
			"./a-node": 54,
			"./a-register-element": 55,
			"./component": 56
		}],
		53: [function(e, t) {
			var r = e("./component").components,
				i = e("./a-node"),
				n = e("./a-register-element").registerElement;
			t.exports = n("a-mixin", {
				prototype: Object.create(i.prototype, {
					attachedCallback: {
						value: function() {
							this.load()
						},
						writable: window.debug
					},
					setAttribute: {
						value: function(e, t) {
							var i = r[e];
							i && "object" == typeof t && (t = i.stringify(t)), HTMLElement.prototype.setAttribute.call(this, e, t)
						},
						writable: window.debug
					},
					getAttribute: {
						value: function(e) {
							var t = r[e],
								i = HTMLElement.prototype.getAttribute.call(this, e);
							return t && "string" == typeof i ? t.parse(i) : i
						},
						writable: window.debug
					}
				})
			})
		}, {
			"./a-node": 54,
			"./a-register-element": 55,
			"./component": 56
		}],
		54: [function(e, t) {
			var r = e("./a-register-element").registerElement,
				i = e("../utils/");
			t.exports = r("a-node", {
				prototype: Object.create(HTMLElement.prototype, {
					createdCallback: {
						value: function() {
							this.hasLoaded = !1, this.isNode = !0, this.mixinEls = [], this.mixinObservers = {}
						}
					},
					attachedCallback: {
						value: function() {
							var e = this.getAttribute("mixin");
							this.sceneEl = "A-SCENE" === this.tagName ? this : this.closest("a-scene"), this.emit("nodeready", {}, !1), e && this.updateMixins(e)
						}
					},
					attributeChangedCallback: {
						value: function(e, t, r) {
							"mixin" === e && this.updateMixins(r, t)
						}
					},
					closest: {
						value: function(e) {
							for (var t = this.matches || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector, r = this; r && !t.call(r, e);) r = r.parentElement;
							return r
						}
					},
					detachedCallback: {
						value: function() {}
					},
					load: {
						value: function(e, t) {
							var r, i, n = this;
							this.hasLoaded || (t = t || function(e) {
								return e.isNode
							}, r = this.getChildren(), i = r.filter(t).map(function(e) {
								return new Promise(function(t) {
									return e.hasLoaded ? t() : void e.addEventListener("loaded", t)
								})
							}), Promise.all(i).then(function() {
								e && e(), n.hasLoaded = !0, n.emit("loaded", {}, !1)
							}))
						},
						writable: !0
					},
					getChildren: {
						value: function() {
							for (var e = [], t = 0; t < this.children.length; t++) e.push(this.children[t]);
							return e
						}
					},
					updateMixins: {
						value: function(e, t) {
							var r = e.split(" "),
								i = t ? t.split(" ") : [],
								n = i.filter(function(e) {
									return r.indexOf(e) < 0
								});
							this.mixinEls = [], n.forEach(this.unregisterMixin.bind(this)), r.forEach(this.registerMixin.bind(this))
						}
					},
					addMixin: {
						value: function(e) {
							var t, r = this.getAttribute("mixin"),
								i = r.split(" ");
							for (t = 0; t < i.length; ++t)
								if (i[t] === e) return;
							i.push(e), this.setAttribute("mixin", i.join(" "))
						}
					},
					removeMixin: {
						value: function(e) {
							var t, r = this.getAttribute("mixin"),
								i = r.split(" ");
							for (t = 0; t < i.length; ++t)
								if (i[t] === e) return i.splice(t, 1), void this.setAttribute("mixin", i.join(" "))
						}
					},
					registerMixin: {
						value: function(e) {
							if (this.sceneEl) {
								var t = this.sceneEl.querySelector("a-mixin#" + e);
								t && (this.attachMixinListener(t), this.mixinEls.push(t))
							}
						}
					},
					setAttribute: {
						value: function(e, t) {
							"mixin" === e && this.updateMixins(t), HTMLElement.prototype.setAttribute.call(this, e, t)
						}
					},
					unregisterMixin: {
						value: function(e) {
							var t, r, i = this.mixinEls;
							for (r = 0; r < i.length; ++r)
								if (t = i[r], e === t.id) {
									i.splice(r, 1);
									break
								}
							this.removeMixinListener(e)
						}
					},
					removeMixinListener: {
						value: function(e) {
							var t = this.mixinObservers[e];
							t && (t.disconnect(), this.mixinObservers[e] = null)
						}
					},
					attachMixinListener: {
						value: function(e) {
							var t = this,
								r = e.id,
								i = this.mixinObservers[r];
							if (e && !i) {
								var n = new MutationObserver(function(e) {
										var r = e[0].attributeName;
										t.applyMixin(r)
									}),
									o = {
										attributes: !0
									};
								n.observe(e, o), this.mixinObservers[r] = n
							}
						}
					},
					applyMixin: {
						value: function() {}
					},
					emit: {
						value: function(e, t, r) {
							var n = this;
							t = t || {}, void 0 === r && (r = !0);
							var o = {
								bubbles: !!r,
								detail: t
							};
							return e.split(" ").map(function(e) {
								return i.fireEvent(n, e, o)
							})
						}
					},
					emitter: {
						value: function(e, t, r) {
							var i = this;
							return function() {
								i.emit(e, t, r)
							}
						}
					}
				})
			})
		}, {
			"../utils/": 102,
			"./a-register-element": 55
		}],
		55: [function(e, t) {
			function r(e) {
				var t = {},
					r = ["attachedCallback", "attributeChangedCallback", "createdCallback"];
				return n(t, r, e, l.prototype), a(e, t), t
			}

			function i(e) {
				var t = {},
					r = ["attachedCallback", "attributeChangedCallback", "createdCallback"],
					i = ["attributeChangedCallback", "attachedCallback", "createdCallback", "detachedCallback"];
				return n(t, r, e, l.prototype), n(t, i, e, u.prototype), a(e, t), t
			}

			function n(e, t, r, i) {
				t.forEach(function(t) {
					o(e, t, r, i)
				})
			}

			function o(e, t, r, i) {
				var n = r[t],
					o = i[t];
				if (n && o && n !== o) {
					var a = function() {
						return o.apply(this, arguments), n.apply(this, arguments)
					};
					e[t] = {
						value: a,
						writable: window.debug
					}
				}
			}

			function a(e, t) {
				var r = Object.getOwnPropertyNames(e);
				r.forEach(function(r) {
					var i;
					t[r] || (i = Object.getOwnPropertyDescriptor(e, r), t[r] = {
						value: e[r],
						writable: i.writable
					})
				})
			}
			e("document-register-element");
			var s = document.registerElement,
				h = t.exports.knownTags = {},
				c = function(e) {
					h[e.toLowerCase()] = !0
				};
			t.exports.isNode = function(e) {
				return e.tagName.toLowerCase() in h || e.isNode
			}, t.exports.registerElement = document.registerElement = function(e, t) {
				var n = Object.getPrototypeOf(t.prototype),
					o = t,
					a = l && n === l.prototype,
					h = u && n === u.prototype;
				return (a || h) && c(e), a && (o = r(t.prototype), o = {
					prototype: Object.create(n, o)
				}), h && (o = i(t.prototype), o = {
					prototype: Object.create(n, o)
				}), s.call(document, e, o)
			};
			var l = e("./a-node"),
				u = e("./a-entity")
		}, {
			"./a-entity": 52,
			"./a-node": 54,
			"document-register-element": 8
		}],
		56: [function(e, t) {
			function r(e, t, r, n, o) {
				function a(e) {
					var r = HTMLElement.prototype.getAttribute.call(e, t);
					r && (r = d ? r : f.parse(r), l = i(l, r, d))
				}
				var s = null !== n,
					l = {},
					d = u(r),
					p = e.mixinEls;
				return d || "string" != typeof n || (n = f.parse(n)), d ? l = r["default"] : Object.keys(r).forEach(function(e) {
					l[e] = r[e]["default"]
				}), p.forEach(a), s && (l = i(l, n, d)), u(r) ? c(l, r) : h(l, r, void 0, o)
			}

			function i(e, t, r) {
				return r ? void 0 === t || "object" == typeof t && 0 === Object.keys(t).length ? e : t : a.extend(e, t)
			}
			var n = e("./schema"),
				o = e("./system"),
				a = e("../utils/"),
				s = t.exports.components = {},
				h = n.parseProperties,
				c = n.parseProperty,
				l = n.process,
				u = n.isSingleProperty,
				d = n.stringifyProperties,
				p = n.stringifyProperty,
				f = a.styleParser,
				m = t.exports.Component = function(e) {
					var t = this.name,
						i = HTMLElement.prototype.getAttribute.call(e, t);
					this.el = e, this.updateSchema && this.updateSchema(r(e, t, this.schema, i, !0)), this.data = r(e, t, this.schema, i), this.init(), this.update()
				};
			m.prototype = {
				schema: {},
				init: function() {},
				update: function() {},
				updateSchema: void 0,
				tick: void 0,
				play: function() {},
				pause: function() {},
				remove: function() {},
				parse: function(e, t) {
					var r = this.schema;
					return u(r) ? c(e, r) : h(f.parse(e), r, !0, t)
				},
				stringify: function(e) {
					var t = this.schema;
					return "string" == typeof e ? e : u(t) ? p(e, t) : (e = d(e, t), f.stringify(e))
				},
				getData: function() {
					var e = this.data;
					return "object" != typeof e ? e : a.extend({}, e)
				},
				updateProperties: function(e) {
					var t = this.el,
						n = u(this.schema),
						o = i({}, this.data, n);
					this.updateSchema && this.updateSchema(r(t, this.name, this.schema, e, !0)), this.data = r(t, this.name, this.schema, e), (n || !a.deepEqual(o, this.data)) && (this.update(o), t.emit("componentchanged", {
						name: this.name,
						newData: this.getData(),
						oldData: o
					}))
				},
				extendSchema: function(e) {
					var t = a.extend({}, s[this.name].schema);
					a.extend(t, e), this.schema = l(t), this.el.emit("schemachanged", {
						component: this.name
					})
				}
			}, t.exports.registerComponent = function(e, t) {
				var r, i = {};
				if (Object.keys(t).forEach(function(e) {
						i[e] = {
							value: t[e],
							writable: !0
						}
					}), s[e]) throw new Error("The component `" + e + "` has been already registered. Check that you are not loading two versions of the same component or two different components of the same name.");
				return r = function(e) {
					m.call(this, e)
				}, r.prototype = Object.create(m.prototype, i), r.prototype.name = e, r.prototype.constructor = r, r.prototype.system = o && o.systems[e], s[e] = {
					Component: r,
					dependencies: r.prototype.dependencies,
					parse: r.prototype.parse.bind(r.prototype),
					schema: a.extend(l(r.prototype.schema)),
					stringify: r.prototype.stringify.bind(r.prototype),
					type: r.prototype.type
				}, r
			}, t.exports.buildData = r
		}, {
			"../utils/": 102,
			"./schema": 62,
			"./system": 64
		}],
		57: [function(e, t) {
			function r(e, t, r, i) {
				return "type" in x ? void y("Property type " + e + " is already registered.") : void(x[e] = {
					"default": t,
					parse: r || o,
					stringify: i || a
				})
			}

			function i(e) {
				function t(e) {
					return e.trim()
				}
				return Array.isArray(e) ? e : e && "string" == typeof e ? e.split(",").map(t) : []
			}

			function n(e) {
				return e.join(", ")
			}

			function o(e) {
				return e
			}

			function a(e) {
				return null === e ? "null" : e.toString()
			}

			function s(e) {
				return "false" !== e && e !== !1
			}

			function h(e) {
				return parseInt(e, 10)
			}

			function c(e) {
				return parseFloat(e, 10)
			}

			function l(e) {
				return e ? "string" != typeof e ? e : document.querySelector(e) : null
			}

			function u(e) {
				return e ? "string" != typeof e ? e : document.querySelectorAll(e) : null
			}

			function d(e) {
				return e.getAttribute ? "#" + e.getAttribute("id") : a(e)
			}

			function p(e) {
				if (e.item) {
					var t, r = "";
					for (t = 0; t < e.length; ++t) r += "#" + e[t].getAttribute("id"), t !== e.length - 1 && (r += ", ");
					return r
				}
				return a(e)
			}

			function f(e) {
				var t = e.match(/\url\((.+)\)/);
				if (t) return t[1];
				var r = l(e);
				return r ? r.getAttribute("src") : ""
			}

			function m(e) {
				return v.parse(e, this["default"])
			}
			var v = e("../utils/coordinates"),
				g = e("debug"),
				y = g("core:propertyTypes:warn"),
				x = t.exports.propertyTypes = {};
			r("array", [], i, n), r("boolean", !1, s), r("color", "#FFF", o, a), r("int", 0, h), r("number", 0, c), r("selector", "", l, d), r("selectorAll", "", u, p), r("src", "", f), r("string", "", o, a), r("time", 0, h), r("vec2", {
				x: 0,
				y: 0
			}, m, v.stringify), r("vec3", {
				x: 0,
				y: 0,
				z: 0
			}, m, v.stringify), r("vec4", {
				x: 0,
				y: 0,
				z: 0,
				w: 0
			}, m, v.stringify), t.exports.registerPropertyType = r
		}, {
			"../utils/coordinates": 100,
			debug: 3
		}],
		58: [function(e, t) {
			function r(e) {
				return v ? {
					height: window.innerHeight,
					width: window.innerWidth
				} : {
					height: e.offsetHeight,
					width: e.offsetWidth
				}
			}

			function i(e) {
				e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
			}
			var n = e("./fullscreen"),
				o = e("./metaTags").inject,
				a = e("./wakelock"),
				s = e("../a-register-element"),
				h = e("../system").systems,
				c = e("../../lib/three"),
				l = e("tween.js"),
				u = e("../../utils/"),
				d = e("../a-entity"),
				p = e("../a-node"),
				f = s.registerElement,
				m = u.isIOS(),
				v = u.isMobile(),
				g = t.exports = f("a-scene", {
					prototype: Object.create(d.prototype, {
						defaultComponents: {
							value: {
								canvas: "",
								"keyboard-shortcuts": "",
								"vr-mode-ui": ""
							}
						},
						createdCallback: {
							value: function() {
								this.isMobile = v, this.isIOS = m, this.isScene = !0, this.object3D = new c.Scene, this.systems = {}, this.time = 0, this.init()
							}
						},
						init: {
							value: function() {
								this.behaviors = [], this.hasLoaded = !1, this.isPlaying = !0, this.originalHTML = this.innerHTML, this.setupSystems(), this.addEventListener("render-target-loaded", function() {
									this.setupRenderer(), this.resize()
								})
							},
							writable: !0
						},
						attachedCallback: {
							value: function() {
								n(this), o(this), a(this), window.addEventListener("load", this.resize.bind(this)), window.addEventListener("resize", this.resize.bind(this), !1), this.addEventListener("fullscreen-exit", this.exitVR.bind(this)), this.play()
							},
							writable: window.debug
						},
						setupSystems: {
							value: function() {
								var e = Object.keys(h);
								e.forEach(this.initSystem.bind(this))
							}
						},
						initSystem: {
							value: function(e) {
								var t;
								this.systems[e] || (t = this.systems[e] = new h[e], t.sceneEl = this, t.init())
							}
						},
						detachedCallback: {
							value: function() {
								window.cancelAnimationFrame(this.animationFrameID), this.animationFrameID = null
							}
						},
						addBehavior: {
							value: function(e) {
								var t = this.behaviors; - 1 === t.indexOf(e) && t.push(e)
							}
						},
						enterVR: {
							value: function(e) {
								this.setStereoRenderer(), v ? i(this.canvas) : this.stereoRenderer.setFullScreen(!0), this.addState("vr-mode"), this.emit("enter-vr", e)
							}
						},
						exitVR: {
							value: function() {
								this.setMonoRenderer(), this.removeState("vr-mode"), this.emit("exit-vr", {
									target: this
								})
							}
						},
						removeBehavior: {
							value: function(e) {
								var t = this.behaviors,
									r = t.indexOf(e); - 1 !== r && t.splice(r, 1)
							}
						},
						resize: {
							value: function() {
								var e, t = this.camera,
									i = this.canvas;
								t && i && (v || (i.style.width = "100%", i.style.height = "100%"), e = r(i, v), t.aspect = e.width / e.height, t.updateProjectionMatrix(), this.renderer.setSize(e.width, e.height, !0))
							},
							writable: window.debug
						},
						setMonoRenderer: {
							value: function() {
								this.renderer = this.monoRenderer, this.resize()
							}
						},
						setStereoRenderer: {
							value: function() {
								this.renderer = this.stereoRenderer, this.resize()
							}
						},
						setupRenderer: {
							value: function() {
								var e = this.canvas,
									t = "true" === this.getAttribute("antialias"),
									r = this.renderer = this.monoRenderer = new c.WebGLRenderer({
										canvas: e,
										antialias: t,
										alpha: !0
									});
								r.setPixelRatio(window.devicePixelRatio), r.sortObjects = !1, g.renderer = r, this.stereoRenderer = new c.VREffect(r)
							},
							writable: window.debug
						},
						play: {
							value: function() {
								var e = this;
								return this.renderStarted ? void d.prototype.play.call(this) : (this.addEventListener("loaded", function() {
									this.renderStarted || (d.prototype.play.call(this), this.resize(), this.renderer && (window.performance && window.performance.mark("render-started"), this.render(), this.renderStarted = !0, this.emit("renderstart")))
								}), void setTimeout(function() {
									d.prototype.load.call(e)
								}))
							}
						},
						reload: {
							value: function(e) {
								function t() {
									r.isPlaying && d.prototype.play.call(r)
								}
								var r = this;
								e && this.pause(), this.innerHTML = this.originalHTML, this.init(), p.prototype.load.call(this, t)
							}
						},
						render: {
							value: function(e) {
								var t = this.camera,
									r = e - this.time,
									i = this.systems;
								this.isPlaying && (l.update(e), this.behaviors.forEach(function(t) {
									t.el.isPlaying && t.tick(e, r)
								}), Object.keys(i).forEach(function(t) {
									i[t].tick && i[t].tick(e, r)
								})), this.renderer.render(this.object3D, t), this.time = e, this.animationFrameID = window.requestAnimationFrame(this.render.bind(this))
							},
							writable: window.debug
						}
					})
				})
		}, {
			"../../lib/three": 90,
			"../../utils/": 102,
			"../a-entity": 52,
			"../a-node": 54,
			"../a-register-element": 55,
			"../system": 64,
			"./fullscreen": 59,
			"./metaTags": 60,
			"./wakelock": 61,
			"tween.js": 22
		}],
		59: [function(e, t) {
			function r() {
				var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
					t = this;
				t.isMobile && window.screen.orientation && (e ? window.screen.orientation.lock("landscape") : window.screen.orientation.unlock()), e ? n(t) : o(t)
			}

			function i(e) {
				var t = this;
				if (e.data) switch (e.data.type) {
					case "fullscreen":
						switch (e.data.data) {
							case "enter":
								n(t);
								break;
							case "exit":
								o(t)
						}
				}
			}

			function n(e) {
				e.addState("fullscreen"), e.emit("fullscreen-enter")
			}

			function o(e) {
				e.removeState("fullscreen"), e.emit("fullscreen-exit")
			}
			var a = e("../../utils/").isIframed;
			t.exports = function(e) {
				var t = r.bind(e);
				document.addEventListener("mozfullscreenchange", t), document.addEventListener("webkitfullscreenchange", t), a() && window.addEventListener("message", i.bind(e))
			}
		}, {
			"../../utils/": 102
		}],
		60: [function(e, t) {
			function r(e) {
				return {
					tagName: "meta",
					attributes: e,
					exists: function() {
						return document.querySelector('meta[name="' + e.name + '"]')
					}
				}
			}

			function i(e) {
				return {
					tagName: "link",
					attributes: e,
					exists: function() {
						return document.querySelector('link[rel="' + e.rel + '"]')
					}
				}
			}

			function n(e) {
				if (e && e.tagName) {
					var t = document.createElement(e.tagName);
					return o(t, e.attributes)
				}
			}
			var o = e("../../utils").extend,
				a = t.exports.MOBILE_HEAD_TAGS = [r({
					name: "viewport",
					content: "width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no,user-scalable=no,minimal-ui"
				}), r({
					name: "mobile-web-app-capable",
					content: "yes"
				}), r({
					name: "theme-color",
					content: "black"
				}), i({
					rel: "icon",
					sizes: "192x192",
					href: "https://aframe.io/images/aframe-logo-192.png"
				})],
				s = [r({
					name: "apple-mobile-web-app-capable",
					content: "yes"
				}), r({
					name: "apple-mobile-web-app-status-bar-style",
					content: "black"
				}), i({
					rel: "apple-touch-icon",
					href: "https://aframe.io/images/aframe-logo-152.png"
				})];
			t.exports.inject = function(e) {
				function t(e) {
					e && !e.exists() && (r = n(e), r && (o ? o.parentNode.insertBefore(r, o) : i.appendChild(r), h.push(r)))
				}
				var r, i = document.head,
					o = i.querySelector("script"),
					h = [];
				return a.forEach(t), e.isIOS && s.forEach(t), h
			}
		}, {
			"../../utils": 102
		}],
		61: [function(e, t) {
			var r = e("../../../vendor/wakelock/wakelock");
			t.exports = function(e) {
				if (e.isMobile) {
					var t = e.wakelock = new r;
					e.addEventListener("enter-vr", function() {
						t.request()
					}), e.addEventListener("exit-vr", function() {
						t.release()
					})
				}
			}
		}, {
			"../../../vendor/wakelock/wakelock": 109
		}],
		62: [function(e, t) {
			function r(e) {
				return "type" in e ? "string" == typeof e.type : "default" in e
			}

			function i(e) {
				var t, r = e["default"],
					i = e.type;
				return e.type ? "bool" === e.type ? i = "boolean" : "float" === e.type && (i = "number") : i = void 0 !== r && -1 !== ["boolean", "number"].indexOf(typeof r) ? typeof r : Array.isArray(r) ? "array" : "string", t = s[i], t || h("Unknown property type: " + i), e.parse = e.parse || t.parse, e.stringify = e.stringify || t.stringify, e.type = i, "default" in e || (e["default"] = t["default"]), e
			}

			function n(e, t) {
				return "string" != typeof e ? e : "undefined" == typeof e ? e : t.parse(e)
			}

			function o(e, t) {
				return "object" != typeof e ? e : t ? t.stringify(e) : JSON.stringify(e)
			}
			var a = e("../utils/debug"),
				s = e("./propertyTypes").propertyTypes,
				h = a("core:schema:warn");
			t.exports.isSingleProperty = r, t.exports.process = function(e) {
				return r(e) ? i(e) : (Object.keys(e).forEach(function(t) {
					e[t] = i(e[t])
				}), e)
			}, t.exports.processPropertyDefinition = i, t.exports.parseProperties = function(e, t, r, i) {
				var o = Object.keys(r ? e : t);
				return null === e || "object" != typeof e ? e : (Object.keys(e).forEach(function(e) {
					t[e] || i || h("Unknown component property: " + e)
				}), o.forEach(function(r) {
					var i = t[r],
						o = e[r];
					t[r] && (o = void 0 === o ? i["default"] : o, e[r] = n(o, i))
				}), e)
			}, t.exports.parseProperty = n, t.exports.stringifyProperties = function(e, t) {
				var r = {};
				return Object.keys(e).forEach(function(i) {
					var n = t[i],
						a = e[i],
						s = a;
					"object" == typeof s && (s = o(a, n), n || h("Unknown component property: " + i)), r[i] = s
				}), r
			}, t.exports.stringifyProperty = o
		}, {
			"../utils/debug": 101,
			"./propertyTypes": 57
		}],
		63: [function(e, t) {
			var r = e("./schema"),
				i = r.process,
				n = t.exports.shaders = {},
				o = t.exports.shaderNames = [],
				a = e("../lib/three"),
				s = {
					number: "f",
					time: "f",
					vec4: "v4",
					vec3: "v3",
					vec2: "v2",
					color: "v3"
				},
				h = t.exports.Shader = function() {};
			h.prototype = {
				schema: {},
				vertexShader: "void main() {gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);}",
				fragmentShader: "void main() {gl_FragColor = vec4(1.0,0.0,1.0,1.0);}",
				init: function(e) {
					return this.attributes = this.initVariables(e, "attribute"), this.uniforms = this.initVariables(e, "uniform"), this.material = new a.ShaderMaterial({
						uniforms: this.uniforms,
						vertexShader: this.vertexShader,
						fragmentShader: this.fragmentShader
					}), this.material
				},
				initVariables: function(e, t) {
					function r(r) {
						if (o[r].is === t) {
							var a = s[o[r].type],
								h = o[r].parse(e[r] || o[r]["default"]);
							n[r] = {
								type: a,
								value: i.parseValue(o[r].type, h)
							}
						}
					}
					var i = this,
						n = {},
						o = this.schema,
						a = Object.keys(o);
					return a.forEach(r), n
				},
				update: function(e) {
					this.updateVariables(e, "attribute"), this.updateVariables(e, "uniform")
				},
				updateVariables: function(e, t) {
					function r(r) {
						a[r] && a[r].is === t && n[r].value !== e[r] && (n[r].value = i.parseValue(a[r].type, e[r]), n[r].needsUpdate = !0)
					}
					var i = this,
						n = "uniform" === t ? this.uniforms : this.attributes,
						o = Object.keys(e),
						a = this.schema;
					o.forEach(r)
				},
				parseValue: function(e, t) {
					var r;
					switch (e) {
						case "vec2":
							return new a.Vector2(t.x, t.y);
						case "vec3":
							return new a.Vector3(t.x, t.y, t.z);
						case "vec4":
							return new a.Vector4(t.x, t.y, t.z, t.w);
						case "color":
							return r = new a.Color(t), new a.Vector3(r.r, r.g, r.b);
						default:
							return t
					}
				}
			}, t.exports.registerShader = function(e, t) {
				var r, a = {};
				if (Object.keys(t).forEach(function(e) {
						a[e] = {
							value: t[e],
							writable: !0
						}
					}), n[e]) throw Error("The shader " + e + " has been already registered");
				return r = function() {
					h.call(this)
				}, r.prototype = Object.create(h.prototype, a), r.prototype.name = e, r.prototype.constructor = r, n[e] = {
					Shader: r,
					schema: i(r.prototype.schema)
				}, o.push(e), r
			}
		}, {
			"../lib/three": 90,
			"./schema": 62
		}],
		64: [function(e, t) {
			var r = e("./component"),
				i = t.exports.systems = {},
				n = t.exports.System = function() {
					var e = r && r.components[this.name];
					e && (e.Component.prototype.system = this)
				};
			n.prototype = {
				init: function() {},
				tick: void 0,
				play: function() {},
				pause: function() {}
			}, t.exports.registerSystem = function(e, t) {
				var r, o, a = {},
					s = document.querySelectorAll("a-scene");
				if (Object.keys(t).forEach(function(e) {
						a[e] = {
							value: t[e],
							writable: !0
						}
					}), i[e]) throw new Error("The system `" + e + "` has been already registered. Check that you are not loading two versions of the same system or two different systems of the same name.");
				for (o = function() {
						n.call(this)
					}, o.prototype = Object.create(n.prototype, a), o.prototype.name = e, o.prototype.constructor = o, i[e] = o, r = 0; r < s.length; r++) s[r].initSystem(e)
			}
		}, {
			"./component": 56
		}],
		65: [function(e, t) {
			var r = e("../../core/a-node"),
				i = e("../../core/a-register-element").registerElement;
			t.exports = i("a-event", {
				prototype: Object.create(r.prototype, {
					createdCallback: {
						value: function() {
							this.el = null, this.isAEvent = !0, this.name = "", this.targetEls = []
						}
					},
					attachedCallback: {
						value: function() {
							var e = this.getAttribute("target");
							this.el = this.parentNode, this.name = this.getAttribute("name") || this.getAttribute("type"), this.targetEls = e ? this.closest("a-scene").querySelectorAll(e) : [this.el], this.deprecated && console.warn("<" + this.tagName.toLowerCase() + '> has been DEPRECATED. Use <a-event name="' + this.name + '"> instead.'), this.hasAttribute("type") && console.log("<a-event type> has been DEPRECATED. Use <a-event name> instead."), this.listener = this.attachEventListener(), this.load()
						}
					},
					detachedCallback: {
						value: function() {
							var e = this.listener;
							e && this.removeEventListener(this.name, e)
						}
					},
					attachEventListener: {
						value: function() {
							var e = this.attributes,
								t = this.el,
								r = this.name,
								i = this.targetEls;
							return t.addEventListener(r, function() {
								for (var t, r, n, o, a, s = 0; s < i.length; s++)
									for (var h = 0; h < e.length; h++) t = e[h], r = t.name, o = t.value, a = i[s], "target" !== r && (-1 === r.indexOf(".") ? a.setAttribute(r, o) : (n = r.split("."), a.setAttribute(n[0], n[1], o)))
							})
						}
					}
				})
			})
		}, {
			"../../core/a-node": 54,
			"../../core/a-register-element": 55
		}],
		66: [function(e, t) {
			t.exports = function() {
				return {
					defaultAttributes: {
						material: {}
					},
					mappings: {
						color: "material.color",
						metalness: "material.metalness",
						opacity: "material.opacity",
						repeat: "material.repeat",
						roughness: "material.roughness",
						shader: "material.shader",
						side: "material.side",
						src: "material.src",
						translate: "geometry.translate",
						transparent: "material.transparent"
					},
					transforms: {
						src: function(e) {
							return "#" === e[0] ? e : "url(" + e + ")"
						}
					}
				}
			}
		}, {}],
		67: [function(e) {
			e("./primitives/a-box"), e("./primitives/a-camera"), e("./primitives/a-circle"), e("./primitives/a-collada-model"), e("./primitives/a-cone"), e("./primitives/a-cursor"), e("./primitives/a-curvedimage"), e("./primitives/a-cylinder"), e("./primitives/a-image"), e("./primitives/a-light"), e("./primitives/a-model"), e("./primitives/a-obj-model"), e("./primitives/a-plane"), e("./primitives/a-ring"), e("./primitives/a-sky"), e("./primitives/a-sphere"), e("./primitives/a-torus"), e("./primitives/a-video"), e("./primitives/a-videosphere")
		}, {
			"./primitives/a-box": 68,
			"./primitives/a-camera": 69,
			"./primitives/a-circle": 70,
			"./primitives/a-collada-model": 71,
			"./primitives/a-cone": 72,
			"./primitives/a-cursor": 73,
			"./primitives/a-curvedimage": 74,
			"./primitives/a-cylinder": 75,
			"./primitives/a-image": 76,
			"./primitives/a-light": 77,
			"./primitives/a-model": 78,
			"./primitives/a-obj-model": 79,
			"./primitives/a-plane": 80,
			"./primitives/a-ring": 81,
			"./primitives/a-sky": 82,
			"./primitives/a-sphere": 83,
			"./primitives/a-torus": 84,
			"./primitives/a-video": 85,
			"./primitives/a-videosphere": 86
		}],
		68: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/"),
				n = i.extendDeep({}, t(), {
					defaultAttributes: {
						geometry: {
							primitive: "box"
						}
					},
					mappings: {
						depth: "geometry.depth",
						height: "geometry.height",
						translate: "geometry.translate",
						width: "geometry.width"
					}
				});
			r("a-box", n), r("a-cube", i.extendDeep({
				deprecated: "<a-cube> is deprecated. Use <a-box> instead."
			}, n))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		69: [function(e) {
			var t = e("../registerPrimitive");
			t("a-camera", {
				defaultAttributes: {
					camera: {},
					"look-controls": {},
					"wasd-controls": {}
				},
				mappings: {
					active: "camera.active",
					far: "camera.far",
					fov: "camera.fov",
					"look-controls-enabled": "look-controls.enabled",
					near: "camera.near",
					"wasd-controls-enabled": "wasd-controls.enabled"
				},
				deprecatedMappings: {
					"cursor-color": "a-camera[cursor-color] has been removed. Use a-cursor[color] instead.",
					"cursor-maxdistance": "a-camera[cursor-maxdistance] has been removed. Use a-cursor[max-distance] instead.",
					"cursor-offset": "a-camera[cursor-offset] has been removed. Use a-cursor[position] instead.",
					"cursor-opacity": "a-camera[cursor-offset] has been removed. Use a-cursor[opacity] instead.",
					"cursor-scale": "a-camera[cursor-scale] has been removed. Use a-cursor[scale] instead.",
					"cursor-visible": "a-camera[cursor-visible] has been removed. Use a-cursor[visible] instead."
				}
			})
		}, {
			"../registerPrimitive": 87
		}],
		70: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-circle", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "circle"
					}
				},
				mappings: {
					radius: "geometry.radius",
					segments: "geometry.segments",
					"theta-length": "geometry.theta-length",
					"theta-start": "geometry.theta-start"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		71: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-collada-model", i.extendDeep({}, t(), {
				mappings: {
					src: "collada-model"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		72: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-cone", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "cone"
					}
				},
				mappings: {
					height: "geometry.height",
					"open-ended": "geometry.openEnded",
					"radius-bottom": "geometry.radiusBottom",
					"radius-top": "geometry.radiusTop",
					"segments-height": "geometry.segmentsHeight",
					"segments-radial": "geometry.segmentsRadial",
					"theta-length": "geometry.thetaLength",
					"theta-start": "geometry.thetaStart",
					translate: "geometry.translate"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		73: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-cursor", i.extendDeep({}, t(), {
				defaultAttributes: {
					cursor: {
						maxDistance: 1e3
					},
					geometry: {
						primitive: "ring",
						radiusOuter: .016,
						radiusInner: .01,
						segmentsTheta: 64
					},
					material: {
						shader: "flat",
						opacity: .8
					},
					position: {
						x: 0,
						y: 0,
						z: -1
					}
				},
				mappings: {
					fuse: "cursor.fuse",
					"max-distance": "cursor.maxDistance",
					timeout: "cursor.timeout"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		74: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-curvedimage", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						height: 1,
						primitive: "cylinder",
						radius: 2,
						segmentsRadial: 48,
						thetaLength: 270,
						openEnded: !0,
						thetaStart: 0
					},
					material: {
						color: "#FFF",
						shader: "flat",
						side: "double",
						transparent: !0,
						repeat: "-1 1"
					}
				},
				mappings: {
					height: "geometry.height",
					"open-ended": "geometry.openEnded",
					radius: "geometry.radius",
					segments: "geometry.segmentsRadial",
					start: "geometry.thetaStart",
					"theta-length": "geometry.thetaLength",
					"theta-start": "geometry.thetaStart",
					translate: "geometry.translate",
					width: "geometry.thetaLength"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		75: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-cylinder", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "cylinder"
					}
				},
				mappings: {
					height: "geometry.height",
					"open-ended": "geometry.openEnded",
					radius: "geometry.radius",
					"radius-bottom": "geometry.radiusBottom",
					"radius-top": "geometry.radiusTop",
					"segments-radial": "geometry.segmentsRadial",
					"theta-length": "geometry.thetaLength",
					"theta-start": "geometry.thetaStart",
					translate: "geometry.translate"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		76: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-image", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "plane"
					},
					material: {
						color: "#FFF",
						shader: "flat",
						side: "double",
						transparent: !0
					}
				},
				mappings: {
					height: "geometry.height",
					translate: "geometry.translate",
					width: "geometry.width"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		77: [function(e) {
			var t = e("../registerPrimitive");
			t("a-light", {
				defaultAttributes: {
					light: {}
				},
				mappings: {
					angle: "light.angle",
					color: "light.color",
					"ground-color": "light.groundColor",
					decay: "light.decay",
					distance: "light.distance",
					exponent: "light.exponent",
					intensity: "light.intensity",
					type: "light.type"
				}
			})
		}, {
			"../registerPrimitive": 87
		}],
		78: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-model", i.extend({}, t(), {
				deprecated: "<a-model> is deprecated. Use <a-obj-model> or <a-collada-model> instead.",
				defaultAttributes: {
					loader: {
						format: "collada"
					},
					material: {
						color: "#FFF"
					}
				},
				mappings: {
					src: "loader.src",
					format: "loader.format"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		79: [function(e) {
			var t = e("../getMeshMixin")(),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-obj-model", i.extendDeep({}, t, {
				mappings: {
					src: "obj-model.obj",
					mtl: "obj-model.mtl"
				},
				transforms: {
					mtl: t.transforms.src
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		80: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-plane", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "plane"
					}
				},
				mappings: {
					height: "geometry.height",
					translate: "geometry.translate",
					width: "geometry.width"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		81: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-ring", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "ring"
					}
				},
				mappings: {
					"radius-inner": "geometry.radiusInner",
					"radius-outer": "geometry.radiusOuter",
					"segments-phi": "geometry.segments-phi",
					"segments-theta": "geometry.segments-theta",
					"theta-length": "geometry.theta-length",
					"theta-start": "geometry.theta-start"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		82: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-sky", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "sphere",
						radius: 5e3,
						segmentsWidth: 64,
						segmentsHeight: 64
					},
					material: {
						color: "#FFF",
						shader: "flat"
					},
					scale: "-1 1 1"
				},
				mappings: {
					radius: "geometry.radius",
					"segments-width": "geometry.segmentsWidth",
					"segments-height": "geometry.segmentsHeight"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		83: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-sphere", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "sphere"
					}
				},
				mappings: {
					radius: "geometry.radius",
					"segments-height": "geometry.segmentsHeight",
					"segments-width": "geometry.segmentsWidth",
					translate: "geometry.translate"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		84: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-torus", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "torus"
					}
				},
				mappings: {
					arc: "geometry.arc",
					radius: "geometry.radius",
					"radius-tubular": "geometry.radiusTubular",
					"segments-radial": "geometry.segmentsRadial",
					"segments-tubular": "geometry.segmentsTubular"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		85: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-video", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "plane"
					},
					material: {
						color: "#FFF",
						shader: "flat",
						side: "double",
						transparent: !0
					}
				},
				mappings: {
					height: "geometry.height",
					translate: "geometry.translate",
					width: "geometry.width"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		86: [function(e) {
			var t = e("../getMeshMixin"),
				r = e("../registerPrimitive"),
				i = e("../../../utils/");
			r("a-videosphere", i.extendDeep({}, t(), {
				defaultAttributes: {
					geometry: {
						primitive: "sphere",
						radius: 5e3,
						segmentsWidth: 64,
						segmentsHeight: 64
					},
					material: {
						color: "#FFF",
						shader: "flat"
					},
					scale: "-1 1 1"
				},
				mappings: {
					radius: "geometry.radius",
					"segments-height": "geometry.segmentsHeight",
					"segments-width": "geometry.segmentsWidth"
				}
			}))
		}, {
			"../../../utils/": 102,
			"../getMeshMixin": 66,
			"../registerPrimitive": 87
		}],
		87: [function(e, t) {
			function r(e) {
				var t = {};
				return Object.keys(e).forEach(function(r) {
					var i = e[r];
					t[r] = "object" == typeof i ? a.extend({}, i) : i
				}), t
			}
			var i = e("../../core/a-entity"),
				n = e("../../core/component").components,
				o = e("../../core/a-register-element").registerElement,
				a = e("../../utils/"),
				s = a.debug,
				h = s("extras:primitives");
			t.exports = function(e, t) {
				return e = e.toLowerCase(), h("Registering <%s>", e), o(e, {
					prototype: Object.create(i.prototype, {
						defaultAttributes: {
							value: t.defaultAttributes || {}
						},
						deprecated: {
							value: t.deprecated || null
						},
						deprecatedMappings: {
							value: t.deprecatedMappings || {}
						},
						mappings: {
							value: t.mappings || {}
						},
						transforms: {
							value: t.transforms || {}
						},
						createdCallback: {
							value: function() {
								this.componentData = {}, t.deprecated && console.warn(t.deprecated)
							}
						},
						attachedCallback: {
							value: function() {
								var e = this,
									t = this.attributes;
								this.componentData = r(this.defaultAttributes), Object.keys(this.componentData).forEach(function(t) {
									e.hasAttribute(t) || e.setAttribute(t, e.componentData[t])
								}), Object.keys(t).forEach(function(r) {
									var i = t[r];
									e.syncAttributeToComponent(i.name, i.value)
								})
							}
						},
						attributeChangedCallback: {
							value: function(e, t, r) {
								return this.mappings[e] ? void this.syncAttributeToComponent(e, r) : void i.prototype.attributeChangedCallback.call(this, e, t, r)
							}
						},
						syncAttributeToComponent: {
							value: function(e, t) {
								var r, i, o;
								e in this.deprecatedMappings && console.warn(this.deprecatedMappings[e]), e && this.mappings[e] && (r = this.mappings[e], -1 !== r.indexOf(".") && (i = this.mappings[e].split("."), r = i[0], o = i[1]), n[r] && (t = this.getTransformedValue(e, t), this.componentData[r] || (this.componentData[r] = this.defaultAttributes[r] || {}), o ? this.componentData[r][o] = t : this.componentData[r] = t, this.setAttribute(r, this.componentData[r])))
							}
						},
						getTransformedValue: {
							value: function(e, t) {
								return this.transforms && this.transforms[e] ? this.transforms[e].bind(this)(t) : t
							}
						}
					})
				})
			}
		}, {
			"../../core/a-entity": 52,
			"../../core/a-register-element": 55,
			"../../core/component": 56,
			"../../utils/": 102
		}],
		88: [function(e, t) {
			window.Promise = window.Promise || e("promise-polyfill"), e("present"), e("./style/aframe.css"), e("./style/rStats.css");
			var r = e("./core/scene/a-scene"),
				i = e("./core/component").components,
				n = e("./core/component").registerComponent,
				o = e("./extras/primitives/registerPrimitive"),
				a = e("./core/shader").registerShader,
				s = e("./core/system").registerSystem,
				h = e("./core/shader").shaders,
				c = e("./core/system").systems,
				l = window.THREE = e("./lib/three"),
				u = window.TWEEN = e("tween.js"),
				d = e("../package"),
				p = e("./utils/");
			e("./systems/index"), e("./components/index"), e("./shaders/index");
			var f = e("./core/a-node"),
				m = e("./core/a-entity");
			window.hasNonPolyfillWebVRSupport = !!navigator.getVRDevices, window.WebVRConfig = {
				TOUCH_PANNER_DISABLED: !0,
				MOUSE_KEYBOARD_CONTROLS_DISABLED: !0
			}, e("webvr-polyfill"), e("./core/a-animation"), e("./core/a-assets"), e("./core/a-cubemap"), e("./core/a-mixin"), e("./extras/declarative-events/"), e("./extras/primitives/"), console.log("A-Frame Version:", d.version), console.log("three Version:", d.dependencies.three), console.log("WebVR Polyfill Version:", d.dependencies["webvr-polyfill"]), t.exports = window.AFRAME = {
				AEntity: m,
				ANode: f,
				AScene: r,
				components: i,
				registerComponent: n,
				registerShader: a,
				registerSystem: s,
				registerPrimitive: o,
				shaders: h,
				systems: c,
				THREE: l,
				TWEEN: u,
				utils: p,
				version: d.version
			}
		}, {
			"../package": 24,
			"./components/index": 29,
			"./core/a-animation": 49,
			"./core/a-assets": 50,
			"./core/a-cubemap": 51,
			"./core/a-entity": 52,
			"./core/a-mixin": 53,
			"./core/a-node": 54,
			"./core/component": 56,
			"./core/scene/a-scene": 58,
			"./core/shader": 63,
			"./core/system": 64,
			"./extras/declarative-events/": 65,
			"./extras/primitives/": 67,
			"./extras/primitives/registerPrimitive": 87,
			"./lib/three": 90,
			"./shaders/index": 92,
			"./style/aframe.css": 94,
			"./style/rStats.css": 95,
			"./systems/index": 97,
			"./utils/": 102,
			present: 10,
			"promise-polyfill": 11,
			"tween.js": 22,
			"webvr-polyfill": 23
		}],
		89: [function(e, t) {
			window.aframeStats = function(e) {
				function t() {
					o("te").set(a.querySelectorAll("a-entity").length), o("lt").set(window.performance.getEntriesByName("render-started")[0].startTime.toFixed(0))
				}

				function r() {}

				function i() {}

				function n(e) {
					o = e
				}
				var o = null,
					a = e,
					s = {
						te: {
							caption: "Entities"
						},
						lt: {
							caption: "Load Time"
						}
					},
					h = [{
						caption: "A-Frame",
						values: ["te", "lt"]
					}];
				return {
					update: t,
					start: r,
					end: i,
					attach: n,
					values: s,
					groups: h,
					fractions: []
				}
			}, "object" == typeof t && (t.exports = {
				aframeStats: window.aframeStats
			})
		}, {}],
		90: [function(e, t) {
			(function(r) {
				var i = r.THREE = e("three");
				i.TextureLoader && (i.TextureLoader.prototype.crossOrigin = ""), i.ImageLoader && (i.ImageLoader.prototype.crossOrigin = ""), i.Cache && (i.Cache.enabled = !0), e("../../node_modules/three/examples/js/loaders/OBJLoader"), e("../../node_modules/three/examples/js/loaders/MTLLoader"), e("../../node_modules/three/examples/js/loaders/ColladaLoader"), e("../../node_modules/three/examples/js/controls/VRControls"), e("../../node_modules/three/examples/js/effects/VREffect"), t.exports = i
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"../../node_modules/three/examples/js/controls/VRControls": 16,
			"../../node_modules/three/examples/js/effects/VREffect": 17,
			"../../node_modules/three/examples/js/loaders/ColladaLoader": 18,
			"../../node_modules/three/examples/js/loaders/MTLLoader": 19,
			"../../node_modules/three/examples/js/loaders/OBJLoader": 20,
			three: 21
		}],
		91: [function(e, t) {
			function r(e) {
				var t = {
					fog: e.fog,
					color: new o.Color(e.color)
				};
				return t
			}
			var i = e("../core/shader").registerShader,
				n = e("../utils/src-loader"),
				o = e("../lib/three"),
				a = e("../utils/texture");
			t.exports.Component = i("flat", {
				schema: {
					color: {
						type: "color"
					},
					fog: {
						"default": !0
					},
					height: {
						"default": 256
					},
					repeat: {
						"default": ""
					},
					src: {
						"default": ""
					},
					width: {
						"default": 512
					}
				},
				init: function(e) {
					return this.textureSrc = null, this.material = new o.MeshBasicMaterial(r(e)), this.updateTexture(e), this.material
				},
				update: function(e) {
					return this.updateMaterial(e), this.updateTexture(e), this.material
				},
				updateTexture: function(e) {
					var t = e.src,
						r = this.material;
					if (t) {
						if (t === this.textureSrc) return;
						this.textureSrc = t, n.validateSrc(t, a.loadImage.bind(this, r, e), a.loadVideo.bind(this, r, e))
					} else a.updateMaterial(r, null)
				},
				updateMaterial: function(e) {
					var t = this.material;
					e = r(e), Object.keys(e).forEach(function(r) {
						t[r] = e[r]
					})
				}
			})
		}, {
			"../core/shader": 63,
			"../lib/three": 90,
			"../utils/src-loader": 103,
			"../utils/texture": 105
		}],
		92: [function(e) {
			e("./flat"), e("./standard")
		}, {
			"./flat": 91,
			"./standard": 93
		}],
		93: [function(e, t) {
			function r(e) {
				var t = {
					color: new o.Color(e.color),
					metalness: e.metalness,
					roughness: e.roughness
				};
				return t
			}
			var i = e("../core/shader").registerShader,
				n = e("../utils/src-loader"),
				o = e("../lib/three"),
				a = e("../utils/"),
				s = new o.CubeTextureLoader,
				h = {};
			t.exports.Component = i("standard", {
				schema: {
					color: {
						type: "color"
					},
					envMap: {
						"default": ""
					},
					fog: {
						"default": !0
					},
					height: {
						"default": 256
					},
					metalness: {
						"default": 0,
						min: 0,
						max: 1
					},
					repeat: {
						"default": ""
					},
					src: {
						"default": ""
					},
					roughness: {
						"default": .5,
						min: 0,
						max: 1
					},
					width: {
						"default": 512
					}
				},
				init: function(e) {
					return this.material = new o.MeshStandardMaterial(r(e)), this.updateTexture(e), this.updateEnvMap(e), this.material
				},
				update: function(e) {
					return this.updateMaterial(e), this.updateTexture(e), this.updateEnvMap(e), this.material
				},
				updateTexture: function(e) {
					var t = e.src,
						r = this.material;
					if (t) {
						if (t === this.textureSrc) return;
						this.textureSrc = t, n.validateSrc(t, a.texture.loadImage.bind(this, r, e), a.texture.loadVideo.bind(this, r, e))
					} else a.texture.updateMaterial(r, null)
				},
				updateMaterial: function(e) {
					var t = this.material;
					e = r(e), Object.keys(e).forEach(function(r) {
						t[r] = e[r]
					})
				},
				updateEnvMap: function(e) {
					var t = this,
						r = this.material,
						i = e.envMap;
					return !i || this.isLoadingEnvMap ? (r.envMap = null, void(r.needsUpdate = !0)) : (this.isLoadingEnvMap = !0, h[i] ? void h[i].then(function(e) {
						t.isLoadingEnvMap = !1, r.envMap = e, r.needsUpdate = !0
					}) : void(h[i] = new Promise(function(e) {
						n.validateCubemapSrc(i, function(i) {
							s.load(i, function(i) {
								t.isLoadingEnvMap = !1, r.envMap = i, e(i)
							})
						})
					})))
				}
			})
		}, {
			"../core/shader": 63,
			"../lib/three": 90,
			"../utils/": 102,
			"../utils/src-loader": 103
		}],
		94: [function(e, t) {
			var r = "html{bottom:0;left:0;position:fixed;right:0;top:0}body{height:100%;margin:0;overflow:hidden;padding:0;width:100%}.a-hidden{display:none!important}.a-canvas{height:100%;left:0;position:absolute;top:0;width:100%}a-assets,a-scene img,a-scene video{display:none}.a-enter-vr{align-items:flex-end;-webkit-align-items:flex-end;bottom:5px;display:flex;display:-webkit-flex;font-family:sans-serif,monospace;font-size:13px;font-weight:200;line-height:16px;height:72px;position:fixed;right:5px}.a-enter-vr-button{background:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20245.82%20141.73%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23fff%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Emask%3C%2Ftitle%3E%3Cpath%20class%3D%22a%22%20d%3D%22M175.56%2C111.37c-22.52%2C0-40.77-18.84-40.77-42.07S153%2C27.24%2C175.56%2C27.24s40.77%2C18.84%2C40.77%2C42.07S198.08%2C111.37%2C175.56%2C111.37ZM26.84%2C69.31c0-23.23%2C18.25-42.07%2C40.77-42.07s40.77%2C18.84%2C40.77%2C42.07-18.26%2C42.07-40.77%2C42.07S26.84%2C92.54%2C26.84%2C69.31ZM27.27%2C0C11.54%2C0%2C0%2C12.34%2C0%2C28.58V110.9c0%2C16.24%2C11.54%2C30.83%2C27.27%2C30.83H99.57c2.17%2C0%2C4.19-1.83%2C5.4-3.7L116.47%2C118a8%2C8%2C0%2C0%2C1%2C12.52-.18l11.51%2C20.34c1.2%2C1.86%2C3.22%2C3.61%2C5.39%2C3.61h72.29c15.74%2C0%2C27.63-14.6%2C27.63-30.83V28.58C245.82%2C12.34%2C233.93%2C0%2C218.19%2C0H27.27Z%22%2F%3E%3C%2Fsvg%3E) 50% 50%/70% 70% no-repeat rgba(0,0,0,.35);border:0;bottom:0;color:#FFF;cursor:pointer;height:50px;position:absolute;right:0;transition:background-color .05s ease;-webkit-transition:background-color .05s ease;width:60px;z-index:999999}.a-enter-vr-button:active,.a-enter-vr-button:hover{background-color:#666}[data-a-enter-vr-no-webvr] .a-enter-vr-button{border-color:#666;opacity:.65}[data-a-enter-vr-no-webvr] .a-enter-vr-button:active,[data-a-enter-vr-no-webvr] .a-enter-vr-button:hover{background-color:rgba(0,0,0,.35);cursor:not-allowed}.a-enter-vr-modal{background-color:#666;border-radius:0;color:#FFF;height:32px;margin-right:70px;padding:9px;width:280px;position:relative;display:none}.a-enter-vr-modal:after{border-bottom:10px solid transparent;border-left:10px solid #666;border-top:10px solid transparent;display:inline-block;content:'';position:absolute;right:-5px;top:5px;width:0;height:0}.a-enter-vr-modal p{margin:0;display:inline}.a-enter-vr-modal p:after{content:' '}.a-enter-vr-modal a{color:#FFF;display:inline}[data-a-enter-vr-no-headset].a-enter-vr:hover .a-enter-vr-modal,[data-a-enter-vr-no-webvr].a-enter-vr:hover .a-enter-vr-modal{display:block}.a-orientation-modal{position:absolute;width:100%;height:100%;top:0;left:0;background:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20version%3D%221.1%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2090%2090%22%20enable-background%3D%22new%200%200%2090%2090%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%220%2C0%200%2C0%200%2C0%20%22%3E%3C/polygon%3E%3Cg%3E%3Cpath%20d%3D%22M71.545%2C48.145h-31.98V20.743c0-2.627-2.138-4.765-4.765-4.765H18.456c-2.628%2C0-4.767%2C2.138-4.767%2C4.765v42.789%20%20%20c0%2C2.628%2C2.138%2C4.766%2C4.767%2C4.766h5.535v0.959c0%2C2.628%2C2.138%2C4.765%2C4.766%2C4.765h42.788c2.628%2C0%2C4.766-2.137%2C4.766-4.765V52.914%20%20%20C76.311%2C50.284%2C74.173%2C48.145%2C71.545%2C48.145z%20M18.455%2C16.935h16.344c2.1%2C0%2C3.808%2C1.708%2C3.808%2C3.808v27.401H37.25V22.636%20%20%20c0-0.264-0.215-0.478-0.479-0.478H16.482c-0.264%2C0-0.479%2C0.214-0.479%2C0.478v36.585c0%2C0.264%2C0.215%2C0.478%2C0.479%2C0.478h7.507v7.644%20%20%20h-5.534c-2.101%2C0-3.81-1.709-3.81-3.81V20.743C14.645%2C18.643%2C16.354%2C16.935%2C18.455%2C16.935z%20M16.96%2C23.116h19.331v25.031h-7.535%20%20%20c-2.628%2C0-4.766%2C2.139-4.766%2C4.768v5.828h-7.03V23.116z%20M71.545%2C73.064H28.757c-2.101%2C0-3.81-1.708-3.81-3.808V52.914%20%20%20c0-2.102%2C1.709-3.812%2C3.81-3.812h42.788c2.1%2C0%2C3.809%2C1.71%2C3.809%2C3.812v16.343C75.354%2C71.356%2C73.645%2C73.064%2C71.545%2C73.064z%22%3E%3C/path%3E%3Cpath%20d%3D%22M28.919%2C58.424c-1.466%2C0-2.659%2C1.193-2.659%2C2.66c0%2C1.466%2C1.193%2C2.658%2C2.659%2C2.658c1.468%2C0%2C2.662-1.192%2C2.662-2.658%20%20%20C31.581%2C59.617%2C30.387%2C58.424%2C28.919%2C58.424z%20M28.919%2C62.786c-0.939%2C0-1.703-0.764-1.703-1.702c0-0.939%2C0.764-1.704%2C1.703-1.704%20%20%20c0.94%2C0%2C1.705%2C0.765%2C1.705%2C1.704C30.623%2C62.022%2C29.858%2C62.786%2C28.919%2C62.786z%22%3E%3C/path%3E%3Cpath%20d%3D%22M69.654%2C50.461H33.069c-0.264%2C0-0.479%2C0.215-0.479%2C0.479v20.288c0%2C0.264%2C0.215%2C0.478%2C0.479%2C0.478h36.585%20%20%20c0.263%2C0%2C0.477-0.214%2C0.477-0.478V50.939C70.131%2C50.676%2C69.917%2C50.461%2C69.654%2C50.461z%20M69.174%2C51.417V70.75H33.548V51.417H69.174z%22%3E%3C/path%3E%3Cpath%20d%3D%22M45.201%2C30.296c6.651%2C0%2C12.233%2C5.351%2C12.551%2C11.977l-3.033-2.638c-0.193-0.165-0.507-0.142-0.675%2C0.048%20%20%20c-0.174%2C0.198-0.153%2C0.501%2C0.045%2C0.676l3.883%2C3.375c0.09%2C0.075%2C0.198%2C0.115%2C0.312%2C0.115c0.141%2C0%2C0.273-0.061%2C0.362-0.166%20%20%20l3.371-3.877c0.173-0.2%2C0.151-0.502-0.047-0.675c-0.194-0.166-0.508-0.144-0.676%2C0.048l-2.592%2C2.979%20%20%20c-0.18-3.417-1.629-6.605-4.099-9.001c-2.538-2.461-5.877-3.817-9.404-3.817c-0.264%2C0-0.479%2C0.215-0.479%2C0.479%20%20%20C44.72%2C30.083%2C44.936%2C30.296%2C45.201%2C30.296z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E) center center/50% 50% no-repeat rgba(244,244,244,1)}.a-orientation-modal:after{display:block;content:\"Insert phone into Cardboard holder.\";color:#333;font-family:sans-serif,monospace;font-size:13px;text-align:center;position:absolute;width:100%;top:70%;transform:translateY(-70%)}.a-orientation-modal button{background:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20version%3D%221.1%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20100%20100%22%20enable-background%3D%22new%200%200%20100%20100%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M55.209%2C50l17.803-17.803c1.416-1.416%2C1.416-3.713%2C0-5.129c-1.416-1.417-3.713-1.417-5.129%2C0L50.08%2C44.872%20%20L32.278%2C27.069c-1.416-1.417-3.714-1.417-5.129%2C0c-1.417%2C1.416-1.417%2C3.713%2C0%2C5.129L44.951%2C50L27.149%2C67.803%20%20c-1.417%2C1.416-1.417%2C3.713%2C0%2C5.129c0.708%2C0.708%2C1.636%2C1.062%2C2.564%2C1.062c0.928%2C0%2C1.856-0.354%2C2.564-1.062L50.08%2C55.13l17.803%2C17.802%20%20c0.708%2C0.708%2C1.637%2C1.062%2C2.564%2C1.062s1.856-0.354%2C2.564-1.062c1.416-1.416%2C1.416-3.713%2C0-5.129L55.209%2C50z%22%3E%3C/path%3E%3C/svg%3E);width:50px;height:50px;border:none;text-indent:-9999px}@media (min-width:480px){.a-enter-vr{bottom:20px;right:20px}.a-enter-vr-modal{width:400px}}";
			e("browserify-css").createStyle(r, {
				href: "src/style/aframe.css"
			}), t.exports = r
		}, {
			"browserify-css": 1
		}],
		95: [function(e, t) {
			var r = ".rs-base{background-color:#EF2D5E;border-radius:0;font:10px monospace;left:5px;line-height:1em;opacity:.75;overflow:hidden;padding:10px;position:fixed;top:5px;width:300px;z-index:10000}.rs-base div.hidden{display:none}.rs-base h1{color:#fff;cursor:pointer;font-size:1.4em;font-weight:300;margin:0 0 5px;padding:0}.rs-group{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column-reverse;flex-direction:column-reverse;margin-bottom:5px}.rs-group:last-child{margin-bottom:0}.rs-counter-base{align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;height:10px;-webkit-justify-content:space-between;justify-content:space-between;margin:2px 0}.rs-counter-id{font-weight:300;-webkit-box-ordinal-group:0;-webkit-order:0;order:0;width:50px}.rs-counter-value{font-weight:300;-webkit-box-ordinal-group:1;-webkit-order:1;order:1;text-align:right;width:35px}.rs-canvas{-webkit-box-ordinal-group:2;-webkit-order:2;order:2}@media (min-width:480px){.rs-base{left:20px;top:20px}}";
			e("browserify-css").createStyle(r, {
				href: "src/style/rStats.css"
			}), t.exports = r
		}, {
			"browserify-css": 1
		}],
		96: [function(e, t) {
			function r(e) {
				var t, r = e.camera;
				r && (t = e.querySelector("[" + n + "]"), t && e.removeChild(t))
			}
			var i = e("../core/system").registerSystem,
				n = "data-aframe-default-camera";
			t.exports.System = i("camera", {
				init: function() {
					this.activeCameraEl = null, this.setupDefaultCamera()
				},
				setupDefaultCamera: function() {
					var e, t, r = this.sceneEl;
					setTimeout(function() {
						var i = r.querySelector("[camera]");
						return i && i.isEntity ? void r.emit("camera-ready", {
							cameraEl: i
						}) : (e = document.createElement("a-entity"), e.setAttribute("position", {
							x: 0,
							y: 1.8,
							z: 4
						}), e.setAttribute(n, ""), t = document.createElement("a-entity"), t.setAttribute("camera", {
							active: !0
						}), t.setAttribute("wasd-controls"), t.setAttribute("look-controls"), e.appendChild(t), r.appendChild(e), void r.emit("camera-ready", {
							cameraEl: t
						}))
					})
				},
				disableActiveCamera: function() {
					var e = this.sceneEl,
						t = e.querySelectorAll("[camera]"),
						r = t[t.length - 1];
					r.setAttribute("camera", "active", !0)
				},
				setActiveCamera: function(e, t) {
					var i, o, a = this.sceneEl,
						s = a.querySelectorAll("[camera]"),
						h = a.querySelector("[" + n + "]"),
						c = h && h.querySelector("[camera]");
					for (e !== c && r(a), this.activeCameraEl = e, a.isPlaying && e.play(), e.setAttribute("camera", "active", !0), a.camera = t, a.emit("camera-set-active", {
							cameraEl: e
						}), o = 0; o < s.length; o++) i = s[o], e !== i && (i.setAttribute("camera", "active", !1), i.pause())
				}
			})
		}, {
			"../core/system": 64
		}],
		97: [function(e) {
			e("./camera"), e("./material"), e("./light")
		}, {
			"./camera": 96,
			"./light": 98,
			"./material": 99
		}],
		98: [function(e, t) {
			var r = e("../core/system").registerSystem,
				i = "data-aframe-default-light";
			t.exports.System = r("light", {
				init: function() {
					this.defaultLightsEnabled = null, this.setupDefaultLights()
				},
				registerLight: function(e) {
					var t, r = this.sceneEl;
					if (this.defaultLightsEnabled && !e.hasAttribute(i)) {
						t = document.querySelectorAll("[" + i + "]");
						for (var n = 0; n < t.length; n++) r.removeChild(t[n]);
						this.defaultLightsEnabled = !1
					}
				},
				setupDefaultLights: function() {
					var e = this.sceneEl,
						t = document.createElement("a-entity"),
						r = document.createElement("a-entity");
					t.setAttribute("light", {
						color: "#fff",
						type: "ambient"
					}), t.setAttribute(i, ""), e.appendChild(t), r.setAttribute("light", {
						color: "#fff",
						intensity: .2
					}), r.setAttribute("position", {
						x: -1,
						y: 2,
						z: 1
					}), r.setAttribute(i, ""), e.appendChild(r), this.defaultLightsEnabled = !0
				}
			})
		}, {
			"../core/system": 64
		}],
		99: [function(e, t) {
			var r = e("../core/system").registerSystem;
			t.exports.System = r("material", {
				init: function() {
					this.materials = {}
				},
				registerMaterial: function(e) {
					this.materials[e.uuid] = e
				},
				unregisterMaterial: function(e) {
					delete this.materials[e.uuid]
				},
				updateMaterials: function() {
					var e = this.materials;
					Object.keys(e).forEach(function(t) {
						e[t].needsUpdate = !0
					})
				}
			})
		}, {
			"../core/system": 64
		}],
		100: [function(e, t) {
			function r(e, t) {
				var r, i = {};
				return e && "object" == typeof e ? n(e) : "string" != typeof e || null === e ? t : (r = e.trim().replace(/\s+/g, " ").split(" "), i.x = r[0] || t && t.x, i.y = r[1] || t && t.y, i.z = r[2] || t && t.z, i.w = r[3] || t && t.w, n(i))
			}

			function i(e) {
				return "object" != typeof e ? e : [e.x, e.y, e.z].join(" ")
			}

			function n(e) {
				return Object.keys(e).forEach(function(t) {
					return void 0 === e[t] ? void delete e[t] : void(e[t] = parseFloat(e[t], 10))
				}), e
			}
			var o = /\s*(-?\d*\.{0,1}\d+)\s*(-?\d*\.{0,1}\d+)\s*(-?\d*\.{0,1}\d+)\s*/;
			t.exports.regex = o, t.exports.parse = r, t.exports.stringify = i, t.exports.isCoordinate = function(e) {
				return o.test(e)
			}
		}, {}],
		101: [function(e, t) {
			(function(r) {
				function i(e) {
					var t = e.split(":");
					return t[t.length - 1]
				}

				function n(e) {
					var t = i(e),
						r = h.colors && h.colors[t];
					return r || null
				}

				function o() {
					try {
						return window.localStorage
					} catch (e) {}
				}
				var a = e("debug"),
					s = e("object-assign"),
					h = {
						colors: {
							debug: "gray",
							error: "red",
							info: "gray",
							warn: "orange"
						}
					},
					c = function(e) {
						var t = a(e);
						return t.color = n(e), t
					};
				s(c, a);
				var l = o();
				c.enable(l && (parseInt(l.logs, 10) || "true" === l.logs) ? "*" : "*:error,*:info,*:warn"), r.browser && (window.logs = c), t.exports = c
			}).call(this, e("_process"))
		}, {
			_process: 2,
			debug: 3,
			"object-assign": 9
		}],
		102: [function(e, t) {
			function r(e, t) {
				var r, i = Object.keys(e),
					n = Object.keys(t);
				if (i.length !== n.length) return !1;
				if (0 === i.length) return e === t;
				for (r = 0; r < i.length; ++r)
					if (e[i[r]] !== t[i[r]]) return !1;
				return !0
			}
			var i = e("deep-assign"),
				n = e("object-assign");
			t.exports.coordinates = e("./coordinates"), t.exports.debug = e("./debug"), t.exports.styleParser = e("./styleParser"), t.exports.texture = e("./texture"), t.exports.fireEvent = function(e, t, r) {
				r = r || {}, r.detail = r.detail || {}, r.detail.target = r.detail.target || e;
				var i = new CustomEvent(t, r);
				i.target = e, e.dispatchEvent(i)
			}, t.exports.error = function(e) {
				throw new Error(e)
			}, t.exports.warn = function() {
				console.warn.apply(console, arguments)
			}, t.exports.log = function() {
				console.log.apply(console, arguments)
			}, t.exports.extend = n, t.exports.extendDeep = i, t.exports.deepEqual = r, t.exports.diff = function(e, t) {
				var i = {},
					n = Object.keys(e);
				return Object.keys(t).forEach(function(e) {
					-1 === n.indexOf(e) && n.push(e)
				}), n.forEach(function(n) {
					var o = e[n],
						a = t[n],
						s = o && a && o.constructor === Object && a.constructor === Object;
					(s && !r(o, a) || !s && o !== a) && (i[n] = a)
				}), i
			}, t.exports.isMobile = function() {
				var e = !1;
				return function(t) {
					(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), o() && (e = !0)
				}(navigator.userAgent || navigator.vendor || window.opera), e
			};
			var o = t.exports.isIOS = function() {
				return /iPad|iPhone|iPod/.test(navigator.platform)
			};
			t.exports.isLandscape = function() {
				return 90 === window.orientation || -90 === window.orientation
			}, t.exports.shouldCaptureKeyEvent = function(e) {
				return e.shiftKey || e.metaKey || e.altKey || e.ctrlKey ? !1 : document.activeElement === document.body
			}, t.exports.splitString = function(e, t) {
				"undefined" == typeof t && (t = " ");
				var r = new RegExp(t, "g");
				return e = (e || "").replace(r, t), e.split(t)
			}, t.exports.getElData = function(e, t) {
				function r(t) {
					e.hasAttribute(t) && (i[t] = e.getAttribute(t))
				}
				t = t || {};
				var i = {};
				return Object.keys(t).forEach(r), i
			}, t.exports.getUrlParameter = function(e) {
				e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
					r = t.exec(location.search);
				return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
			}, t.exports.isIframed = function() {
				return window.top !== window.self
			}, t.exports.srcLoader = e("./src-loader")
		}, {
			"./coordinates": 100,
			"./debug": 101,
			"./src-loader": 103,
			"./styleParser": 104,
			"./texture": 105,
			"deep-assign": 6,
			"object-assign": 9
		}],
		103: [function(e, t) {
			function r(e, t, r) {
				var i, s, c, l = n(e);
				return l ? void o(l, function(e) {
					return e ? void t(l) : void r(l)
				}) : (i = a(e)) ? (s = i && "IMG" === i.tagName, c = i && "VIDEO" === i.tagName, s ? t(i) : c ? r(i) : void h('"%s" does not point to a valid <img> or <video> element', e)) : void 0
			}

			function i(e, t) {
				function i(e) {
					l.push(e), 6 === l.length && t(l)
				}
				var n, o, s, c = "",
					l = [];
				for (o = 0; 6 > o; o++) c += "url((.+))s*,s*";
				if (s = e.match(c))
					for (o = 1; 7 > o; o++) r(s[o], i);
				else if (n = a(e)) return "A-CUBEMAP" === n.tagName && n.srcs ? t(n.srcs) : void h('Selector "%s" does not point to <a-cubemap>', e)
			}

			function n(e) {
				var t = e.match(/\url\((.+)\)/);
				if (t) return t[1]
			}

			function o(e, t) {
				function r() {
					t(!0)
				}

				function i() {
					t(!1)
				}
				var n = new Image;
				n.addEventListener("load", r), n.addEventListener("error", i), n.src = e
			}

			function a(e) {
				try {
					var t = document.querySelector(e);
					return t || h('No element was found matching the selector: "%s"', e), t
				} catch (r) {
					return void h('"%s" is not a valid selector', e)
				}
			}
			var s = e("./debug"),
				h = s("utils:src-loader:warn");
			t.exports = {
				parseUrl: n,
				validateSrc: r,
				validateCubemapSrc: i
			}
		}, {
			"./debug": 101
		}],
		104: [function(e, t) {
			function r(e) {
				function t(e) {
					return e[1].toUpperCase()
				}
				return e.replace(/-([a-z])/g, t)
			}

			function i(e) {
				var t = Object.keys(e),
					i = {};
				return t.forEach(function(t) {
					var n = r(t);
					i[n] = e[t]
				}), i
			}
			var n = e("style-attr");
			t.exports.parse = function(e) {
				var t;
				return "string" != typeof e ? e : (t = n.parse(e), i(t))
			}, t.exports.stringify = function(e) {
				return "string" == typeof e ? e : n.stringify(e)
			}, t.exports.toCamelCase = r, t.exports.transformKeysToCamelCase = i
		}, {
			"style-attr": 15
		}],
		105: [function(e, t) {
			function r(e, t, r) {
				function i(t) {
					o(e, t), n.emit(d.TEXTURE_LOADED, {
						src: r,
						texture: t
					})
				}
				var n = this.el,
					s = t.repeat || "1 1",
					h = r;
				return "string" != typeof r && (h = r.getAttribute("src")), f[r] && f[r][s] ? void f[r][s].then(i) : (f[h] = f[h] || {}, f[h][s] = f[h][s] || {}, f[h][s] = a(e, r, s), void f[h][s].then(i))
			}

			function i(e, t, r) {
				function i(t) {
					c = t.texture, l = t.videoEl, o(e, c), m.emit(d.TEXTURE_LOADED, {
						element: l,
						src: r
					}), l.addEventListener("loadeddata", function() {
						m.emit("material-video-loadeddata", {
							element: l,
							src: r
						})
					}), l.addEventListener("ended", function() {
						m.emit("material-video-ended", {
							element: l,
							src: r
						})
					})
				}
				var a, c, l, p, m = this.el;
				if ("string" != typeof r) {
					if (l = r, a = n(l), f[a]) return void f[a].then(i);
					h(l)
				}
				return l = l || s(e, r, t.width, t.height), a = n(l), f[a] ? void f[a].then(i) : (c = new u.VideoTexture(l), c.minFilter = u.LinearFilter, p = {
					texture: c,
					videoEl: l
				}, f[a] = Promise.resolve(p), void i(p))
			}

			function n(e) {
				var t, r, i, n = e.getAttribute("id");
				if (n) return n;
				for (r = "", i = {}, t = 0; t < e.attributes.length; t++) i[e.attributes[t].name] = e.attributes[t].value;
				return Object.keys(i).sort().forEach(function(e) {
					r += e + ":" + i[e] + ";"
				}), r
			}

			function o(e, t) {
				var r = e.map;
				t && (t.needsUpdate = !0), e.map = t, (null === r && e.map || null === e.map && r) && (e.needsUpdate = !0)
			}

			function a(e, t, r) {
				function i(e) {
					function i(t) {
						var i;
						t instanceof u.Texture || (t = new u.Texture(t)), i = r.split(" "), 2 === i.length && (t.wrapS = u.RepeatWrapping, t.wrapT = u.RepeatWrapping, t.repeat.set(parseInt(i[0], 10), parseInt(i[1], 10))), e(t)
					}
					var n = "string" != typeof t;
					return n ? void i(t) : void m.load(t, i, function() {}, function(e) {
						p("`$s` could not be fetched (Error code: %s; Response: %s)", e.status, e.statusText)
					})
				}
				return new Promise(i)
			}

			function s(e, t, r, i) {
				var n = e.videoEl || document.createElement("video");
				return n.width = r, n.height = i, n !== this.videoEl && (n.setAttribute("webkit-playsinline", ""), n.autoplay = !0, n.loop = !0, n.crossOrigin = !0, n.addEventListener("error", function() {
					v("`$s` is not a valid video", t)
				}, !0), e.videoEl = n), n.src = t, n
			}

			function h(e) {
				return e.autoplay = "false" !== e.getAttribute("autoplay"), e.controls = "false" !== e.getAttribute("controls"), "false" === e.getAttribute("loop") && e.removeAttribute("loop"), "false" === e.getAttribute("preload") && (e.preload = "none"), e.hasAttribute("crossorigin") || (e.crossOrigin = !0), e.hasAttribute("webkit-playsinline") || e.setAttribute("webkit-playsinline", ""), e
			}

			function c() {
				f = {}
			}
			var l = e("./debug"),
				u = e("../lib/three"),
				d = {
					TEXTURE_LOADED: "material-texture-loaded"
				},
				p = l("components:texture:error"),
				f = {},
				m = new u.TextureLoader,
				v = l("components:texture:warn");
			t.exports = {
				clearTextureCache: c,
				createVideoEl: s,
				fixVideoAttributes: h,
				loadImage: r,
				loadVideo: i,
				textureCache: f,
				updateMaterial: o
			}
		}, {
			"../lib/three": 90,
			"./debug": 101
		}],
		106: [function(e, t) {
			window.glStats = function() {
				function e(e, t) {
					return function() {
						t.apply(this, arguments), e.apply(this, arguments)
					}
				}

				function t() {
					o("allcalls").set(a + s), o("drawElements").set(s), o("drawArrays").set(a), o("bindTexture").set(d), o("useProgram").set(h), o("glfaces").set(c), o("glvertices").set(l), o("glpoints").set(u)
				}

				function r() {
					a = 0, s = 0, h = 0, c = 0, l = 0, u = 0, d = 0
				}

				function i() {}

				function n(e) {
					o = e
				}
				var o = null,
					a = 0,
					s = 0,
					h = 0,
					c = 0,
					l = 0,
					u = 0,
					d = 0;
				WebGLRenderingContext.prototype.drawArrays = e(WebGLRenderingContext.prototype.drawArrays, function() {
					a++, arguments[0] == this.POINTS ? u += arguments[2] : l += arguments[2]
				}), WebGLRenderingContext.prototype.drawElements = e(WebGLRenderingContext.prototype.drawElements, function() {
					s++, c += arguments[1] / 3, l += arguments[1]
				}), WebGLRenderingContext.prototype.useProgram = e(WebGLRenderingContext.prototype.useProgram, function() {
					h++
				}), WebGLRenderingContext.prototype.bindTexture = e(WebGLRenderingContext.prototype.bindTexture, function() {
					d++
				});
				var p = {
						allcalls: {
							over: 3e3,
							caption: "Calls (hook)"
						},
						drawelements: {
							caption: "drawElements (hook)"
						},
						drawarrays: {
							caption: "drawArrays (hook)"
						}
					},
					f = [{
						caption: "WebGL",
						values: ["allcalls", "drawelements", "drawarrays", "useprogram", "bindtexture", "glfaces", "glvertices", "glpoints"]
					}],
					m = [{
						base: "allcalls",
						steps: ["drawelements", "drawarrays"]
					}];
				return {
					update: t,
					start: r,
					end: i,
					attach: n,
					values: p,
					groups: f,
					fractions: m
				}
			}, window.threeStats = function(e) {
				function t() {
					o("renderer.info.memory.geometries").set(e.info.memory.geometries), o("renderer.info.memory.programs").set(e.info.memory.programs), o("renderer.info.memory.textures").set(e.info.memory.textures), o("renderer.info.render.calls").set(e.info.render.calls), o("renderer.info.render.faces").set(e.info.render.faces), o("renderer.info.render.points").set(e.info.render.points), o("renderer.info.render.vertices").set(e.info.render.vertices)
				}

				function r() {}

				function i() {}

				function n(e) {
					o = e
				}
				var o = null,
					a = {
						"renderer.info.memory.geometries": {
							caption: "Geometries"
						},
						"renderer.info.memory.textures": {
							caption: "Textures"
						},
						"renderer.info.memory.programs": {
							caption: "Programs"
						},
						"renderer.info.render.calls": {
							caption: "Calls"
						},
						"renderer.info.render.faces": {
							caption: "Faces",
							over: 1e3
						},
						"renderer.info.render.points": {
							caption: "Points"
						},
						"renderer.info.render.vertices": {
							caption: "Vertices"
						}
					},
					s = [{
						caption: "Three.js - memory",
						values: ["renderer.info.memory.geometries", "renderer.info.memory.programs", "renderer.info.memory.textures"]
					}, {
						caption: "Three.js - render",
						values: ["renderer.info.render.calls", "renderer.info.render.faces", "renderer.info.render.points", "renderer.info.render.vertices"]
					}],
					h = [];
				return {
					update: t,
					start: r,
					end: i,
					attach: n,
					values: a,
					groups: s,
					fractions: h
				}
			}, window.BrowserStats = function() {
				function e(e) {
					var t = 100,
						r = Math.floor(Math.log(e) / u);
					return Math.round(e * t / Math.pow(1024, r)) / t
				}

				function t() {
					a = e(performance.memory.usedJSHeapSize), s = e(performance.memory.totalJSHeapSize), o("memory").set(a), o("total").set(s)
				}

				function r() {
					a = 0
				}

				function i() {}

				function n(e) {
					o = e
				}
				var o = null,
					a = 0,
					s = 0;
				window.performance && !performance.memory && (performance.memory = {
					usedJSHeapSize: 0,
					totalJSHeapSize: 0
				}), 0 === performance.memory.totalJSHeapSize && console.warn("totalJSHeapSize === 0... performance.memory is only available in Chrome .");
				var h = {
						memory: {
							caption: "Used Memory",
							average: !0,
							avgMs: 1e3,
							over: 22
						},
						total: {
							caption: "Total Memory"
						}
					},
					c = [{
						caption: "Browser",
						values: ["memory", "total"]
					}],
					l = [{
						base: "total",
						steps: ["memory"]
					}],
					u = Math.log(1024);
				return {
					update: t,
					start: r,
					end: i,
					attach: n,
					values: h,
					groups: c,
					fractions: l
				}
			}, "object" == typeof t && (t.exports = {
				aframeStats: window.aframeStats,
				glStats: window.glStats,
				threeStats: window.threeStats,
				BrowserStats: window.BrowserStats
			})
		}, {}],
		107: [function(e, t) {
			"use strict";
			! function() {
				if ("undefined" == typeof window.performance && (window.performance = {}), !window.performance.now) {
					var e = Date.now();
					performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
						return Date.now() - e
					}
				}
				window.performance.mark || (window.performance.mark = function() {}), window.performance.measure || (window.performance.measure = function() {})
			}(), window.rStats = function(e) {
				function t(e, t) {
					for (var r = Object.keys(e), i = 0, n = r.length; n > i; i++) t(r[i])
				}

				function r(e) {
					var t = document.createElement("link");
					t.href = e, t.rel = "stylesheet", t.type = "text/css", document.getElementsByTagName("head")[0].appendChild(t)
				}

				function i(e, t, r) {
					function i() {
						a.width = g, a.height = v, a.style.width = a.width + "px", a.style.height = a.height + "px", a.className = "rs-canvas", e.appendChild(a), s.fillStyle = "#444444", s.fillRect(0, 0, a.width, a.height)
					}

					function n(e, t) {
						c += .1 * (e - c), h *= .99, c > h && (h = c), s.drawImage(a, 1, 0, a.width - 1, a.height, 0, 0, a.width - 1, a.height), t ? s.drawImage(p, a.width - 1, a.height - c * a.height / h - v) : s.drawImage(u, a.width - 1, a.height - c * a.height / h - v)
					}
					var o = r || {},
						a = document.createElement("canvas"),
						s = a.getContext("2d"),
						h = 0,
						c = 0,
						l = o.color ? o.color : "#666666",
						u = document.createElement("canvas"),
						d = u.getContext("2d");
					u.width = 1, u.height = 2 * v, d.fillStyle = "#444444", d.fillRect(0, 0, 1, 2 * v), d.fillStyle = l, d.fillRect(0, v, 1, v), d.fillStyle = "#ffffff", d.globalAlpha = .5, d.fillRect(0, v, 1, 1), d.globalAlpha = 1;
					var p = document.createElement("canvas"),
						f = p.getContext("2d");
					return p.width = 1, p.height = 2 * v, f.fillStyle = "#444444", f.fillRect(0, 0, 1, 2 * v), f.fillStyle = "#b70000", f.fillRect(0, v, 1, v), f.globalAlpha = .5, f.fillStyle = "#ffffff", f.fillRect(0, v, 1, 1), f.globalAlpha = 1, i(), {
						draw: n
					}
				}

				function n(e, r) {
					function i() {
						o.width = g, o.height = v * r, o.style.width = o.width + "px", o.style.height = o.height + "px", o.className = "rs-canvas", e.appendChild(o), a.fillStyle = "#444444", a.fillRect(0, 0, o.width, o.height)
					}

					function n(e) {
						a.drawImage(o, 1, 0, o.width - 1, o.height, 0, 0, o.width - 1, o.height);
						var r = 0;
						t(e, function(t) {
							var i = e[t] * o.height;
							a.fillStyle = l[t], a.fillRect(o.width - 1, r, 1, i), r += i
						})
					}
					var o = document.createElement("canvas"),
						a = o.getContext("2d");
					return i(), {
						draw: n
					}
				}

				function o(e, t) {
					function r(e) {
						if (E && E.average) {
							g += e, x++;
							var t = performance.now();
							t - y >= (E.avgMs || 1e3) && (v = g / x, g = 0, y = t, x = 0)
						}
					}

					function n() {
						u = performance.now(), c.userTimingAPI && performance.mark(d + "-start"), S = !0
					}

					function o() {
						p = performance.now() - u, c.userTimingAPI && (performance.mark(d + "-end"), S && performance.measure(d, d + "-start", d + "-end")), r(p)
					}

					function a() {
						o(), n()
					}

					function s() {
						var e = E && E.average ? v : p;
						_.nodeValue = Math.round(100 * e) / 100;
						var t = E && (E.below && p < E.below || E.over && p > E.over);
						A.draw(p, t), b.style.color = t ? "#b70000" : "#ffffff"
					}

					function h() {
						var e = performance.now(),
							t = e - u;
						f++, t > 1e3 && (p = E && E.interpolate === !1 ? f : 1e3 * f / t, f = 0, u = e, r(p))
					}

					function l(e) {
						p = e, r(p)
					}
					var u, d = e,
						p = 0,
						f = 0,
						v = 0,
						g = 0,
						y = performance.now(),
						x = 0,
						b = document.createElement("div"),
						w = document.createElement("span"),
						M = document.createElement("div"),
						_ = document.createTextNode(""),
						E = c ? c.values[d.toLowerCase()] : null,
						A = new i(b, d, E),
						S = !1;
					return b.className = "rs-counter-base", w.className = "rs-counter-id", w.textContent = E && E.caption ? E.caption : d, M.className = "rs-counter-value", M.appendChild(_), b.appendChild(w), b.appendChild(M), t ? t.div.appendChild(b) : m.appendChild(b), u = performance.now(), {
						set: l,
						start: n,
						tick: a,
						end: o,
						frame: h,
						value: function() {
							return p
						},
						draw: s
					}
				}

				function a(e) {
					var r = e.toLowerCase();
					if (void 0 === r && (r = "default"), y[r]) return y[r];
					var i = null;
					c && c.groups && t(c.groups, function(e) {
						var t = c.groups[parseInt(e, 10)];
						i || -1 === t.values.indexOf(r.toLowerCase()) || (i = t)
					});
					var n = new o(r, i);
					return y[r] = n, n
				}

				function s() {
					if (c.plugins) {
						c.values || (c.values = {}), c.groups || (c.groups = []), c.fractions || (c.fractions = []);
						for (var e = 0; e < c.plugins.length; e++) c.plugins[e].attach(a), t(c.plugins[e].values, function(t) {
							c.values[t] = c.plugins[e].values[t]
						}), c.groups = c.groups.concat(c.plugins[e].groups), c.fractions = c.fractions.concat(c.plugins[e].fractions)
					} else c.plugins = {};
					f = document.createElement("div"), f.className = "rs-base", m = document.createElement("div"), m.className = "rs-container", m.style.height = "auto", f.appendChild(m), document.body.appendChild(f), c && (c.groups && t(c.groups, function(e) {
						var t = c.groups[parseInt(e, 10)],
							r = document.createElement("div");
						r.className = "rs-group", t.div = r;
						var i = document.createElement("h1");
						i.textContent = t.caption, i.addEventListener("click", function(e) {
							this.classList.toggle("hidden"), e.preventDefault()
						}.bind(r)), m.appendChild(i), m.appendChild(r)
					}), c.fractions && t(c.fractions, function(e) {
						var r = c.fractions[parseInt(e, 10)],
							i = document.createElement("div");
						i.className = "rs-fraction";
						var o = document.createElement("div");
						o.className = "rs-legend";
						var a = 0;
						t(c.fractions[e].steps, function(t) {
							var r = document.createElement("p");
							r.textContent = c.fractions[e].steps[t], r.style.color = l[a], o.appendChild(r), a++
						}), i.appendChild(o), i.style.height = a * v + "px", r.div = i;
						var s = new n(i, a);
						r.graph = s, m.appendChild(i)
					}))
				}

				function h() {
					t(c.plugins, function(e) {
						c.plugins[e].update()
					}), t(y, function(e) {
						y[e].draw()
					}), c && c.fractions && t(c.fractions, function(e) {
						var r = c.fractions[parseInt(e, 10)],
							i = [],
							n = y[r.base.toLowerCase()];
						n && (n = n.value(), t(c.fractions[e].steps, function(t) {
							var r = c.fractions[e].steps[parseInt(t, 10)].toLowerCase(),
								o = y[r];
							o && i.push(o.value() / n)
						})), r.graph.draw(i)
					})
				}
				var c = e || {},
					l = c.colours || ["#850700", "#c74900", "#fcb300", "#284280", "#4c7c0c"],
					u = "//fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300",
					d = (c.CSSPath ? c.CSSPath : "") + "rStats.css",
					p = c.css || [u, d];
				p.forEach(function(e) {
					r(e)
				}), c.values || (c.values = {});
				var f, m, v = 10,
					g = 200,
					y = {};
				return s(),
					function(e) {
						return e ? a(e) : {
							element: f,
							update: h
						}
					}
			}, "object" == typeof t && (t.exports = window.rStats)
		}, {}],
		108: [function(e, t) {
			var r = {};
			r.base64 = function(e, t) {
				return "data:" + e + ";base64," + t
			}, r.isMobile = function() {
				var e = !1;
				return function(t) {
					(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
				}(navigator.userAgent || navigator.vendor || window.opera), e
			}, r.isIOS = function() {
				return /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
			}, r.isIFrame = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}, r.appendQueryParameter = function(e, t, r) {
				var i = e.indexOf("?") < 0 ? "?" : "&";
				return e += i + t + "=" + r
			}, r.getQueryParameter = function(e) {
				e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
					r = t.exec(location.search);
				return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
			}, r.isLandscapeMode = function() {
				return 90 == window.orientation || -90 == window.orientation
			}, t.exports = r
		}, {}],
		109: [function(e, t) {
			function r() {
				var e = document.createElement("video");
				e.addEventListener("ended", function() {
					e.play()
				}), this.request = function() {
					e.paused && (e.src = o.base64("video/webm", "GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4ECQoWBAhhTgGcBAAAAAAAH4xFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsggfG7AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU2LjQwLjEwMVdBjUxhdmY1Ni40MC4xMDFzpJAGSJTMbsLpDt/ySkipgX1fRImIQO1MAAAAAAAWVK5rAQAAAAAAADuuAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDmDgQEj44OEO5rKAOABAAAAAAAABrCBsLqBkB9DtnUBAAAAAAAAo+eBAKOmgQAAgKJJg0IAAV4BHsAHBIODCoAACmH2MAAAZxgz4dPSTFi5JACjloED6ACmAECSnABMQAADYAAAWi0quoCjloEH0ACmAECSnABNwAADYAAAWi0quoCjloELuACmAECSnABNgAADYAAAWi0quoCjloEPoACmAECSnABNYAADYAAAWi0quoCjloETiACmAECSnABNIAADYAAAWi0quoAfQ7Z1AQAAAAAAAJTnghdwo5aBAAAApgBAkpwATOAAA2AAAFotKrqAo5aBA+gApgBAkpwATMAAA2AAAFotKrqAo5aBB9AApgBAkpwATIAAA2AAAFotKrqAo5aBC7gApgBAkpwATEAAA2AAAFotKrqAo5aBD6AApgDAkpwAQ2AAA2AAAFotKrqAo5aBE4gApgBAkpwATCAAA2AAAFotKrqAH0O2dQEAAAAAAACU54Iu4KOWgQAAAKYAQJKcAEvAAANgAABaLSq6gKOWgQPoAKYAQJKcAEtgAANgAABaLSq6gKOWgQfQAKYAQJKcAEsAAANgAABaLSq6gKOWgQu4AKYAQJKcAEqAAANgAABaLSq6gKOWgQ+gAKYAQJKcAEogAANgAABaLSq6gKOWgROIAKYAQJKcAEnAAANgAABaLSq6gB9DtnUBAAAAAAAAlOeCRlCjloEAAACmAECSnABJgAADYAAAWi0quoCjloED6ACmAECSnABJIAADYAAAWi0quoCjloEH0ACmAMCSnABDYAADYAAAWi0quoCjloELuACmAECSnABI4AADYAAAWi0quoCjloEPoACmAECSnABIoAADYAAAWi0quoCjloETiACmAECSnABIYAADYAAAWi0quoAfQ7Z1AQAAAAAAAJTngl3Ao5aBAAAApgBAkpwASCAAA2AAAFotKrqAo5aBA+gApgBAkpwASAAAA2AAAFotKrqAo5aBB9AApgBAkpwAR8AAA2AAAFotKrqAo5aBC7gApgBAkpwAR4AAA2AAAFotKrqAo5aBD6AApgBAkpwAR2AAA2AAAFotKrqAo5aBE4gApgBAkpwARyAAA2AAAFotKrqAH0O2dQEAAAAAAACU54J1MKOWgQAAAKYAwJKcAENgAANgAABaLSq6gKOWgQPoAKYAQJKcAEbgAANgAABaLSq6gKOWgQfQAKYAQJKcAEagAANgAABaLSq6gKOWgQu4AKYAQJKcAEaAAANgAABaLSq6gKOWgQ+gAKYAQJKcAEZAAANgAABaLSq6gKOWgROIAKYAQJKcAEYAAANgAABaLSq6gB9DtnUBAAAAAAAAlOeCjKCjloEAAACmAECSnABF4AADYAAAWi0quoCjloED6ACmAECSnABFwAADYAAAWi0quoCjloEH0ACmAECSnABFoAADYAAAWi0quoCjloELuACmAECSnABFgAADYAAAWi0quoCjloEPoACmAMCSnABDYAADYAAAWi0quoCjloETiACmAECSnABFYAADYAAAWi0quoAfQ7Z1AQAAAAAAAJTngqQQo5aBAAAApgBAkpwARUAAA2AAAFotKrqAo5aBA+gApgBAkpwARSAAA2AAAFotKrqAo5aBB9AApgBAkpwARQAAA2AAAFotKrqAo5aBC7gApgBAkpwARQAAA2AAAFotKrqAo5aBD6AApgBAkpwAROAAA2AAAFotKrqAo5aBE4gApgBAkpwARMAAA2AAAFotKrqAH0O2dQEAAAAAAACU54K7gKOWgQAAAKYAQJKcAESgAANgAABaLSq6gKOWgQPoAKYAQJKcAESAAANgAABaLSq6gKOWgQfQAKYAwJKcAENgAANgAABaLSq6gKOWgQu4AKYAQJKcAERgAANgAABaLSq6gKOWgQ+gAKYAQJKcAERAAANgAABaLSq6gKOWgROIAKYAQJKcAEQgAANgAABaLSq6gB9DtnUBAAAAAAAAlOeC0vCjloEAAACmAECSnABEIAADYAAAWi0quoCjloED6ACmAECSnABEAAADYAAAWi0quoCjloEH0ACmAECSnABD4AADYAAAWi0quoCjloELuACmAECSnABDwAADYAAAWi0quoCjloEPoACmAECSnABDoAADYAAAWi0quoCjloETiACmAECSnABDgAADYAAAWi0quoAcU7trAQAAAAAAABG7j7OBALeK94EB8YIBd/CBAw=="), e.play())
				}, this.release = function() {
					e.pause(), e.src = ""
				}
			}

			function i() {
				var e = null;
				this.request = function() {
					e || (e = setInterval(function() {
						window.location = window.location, setTimeout(window.stop, 0)
					}, 3e4))
				}, this.release = function() {
					e && (clearInterval(e), e = null)
				}
			}

			function n() {
				var e = navigator.userAgent || navigator.vendor || window.opera;
				return e.match(/iPhone/i) || e.match(/iPod/i) ? i : r
			}
			var o = e("./util.js");
			t.exports = n()
		}, {
			"./util.js": 108
		}]
	}, {}, [88])(88)
});
