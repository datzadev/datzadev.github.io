/*!
 * ScrollSmoother 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GSAP and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GSAP membership. See https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function s() {
        return "undefined" != typeof window
    }

    function t() {
        return I || s() && (I = window.gsap) && I.registerPlugin && I
    }

    function v(e) {
        return Y.maxScroll(e || U)
    }
    var I, D, U, j, G, K, q, V, Y, Q, W, J, X, Z, $, r = (ScrollSmoother.register = function register(e) {
        return D || (I = e || t(), s() && window.document && (U = window, j = document, G = j.documentElement, K = j.body), I && (q = I.utils.toArray, V = I.utils.clamp, W = I.parseEase("expo"), Z = I.core.context || function() {}, Y = I.core.globals().ScrollTrigger, I.core.globals("ScrollSmoother", ScrollSmoother), K && Y && ($ = I.delayedCall(.2, function() {
            return Y.isRefreshing || Q && Q.refresh()
        }).pause(), J = Y.core._getVelocityProp, X = Y.core._inputObserver, ScrollSmoother.refresh = Y.refresh, D = 1))), D
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(ScrollSmoother, [{
        key: "progress",
        get: function get() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]), ScrollSmoother);

    function ScrollSmoother(t) {
        var o = this;
        D || ScrollSmoother.register(I) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), t = this.vars = t || {}, Q && Q.kill(), Z(Q = this);

        function Ba() {
            return M.update(-N)
        }

        function Da() {
            return n.style.overflow = "visible"
        }

        function Fa(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), g = !1, e.animation.progress(e.progress, !0)
        }

        function Ga(e, t) {
            (e !== N && !f || t) && (x && (e = Math.round(e)), H && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", n._gsap.y = e + "px"), F = e - N, N = e, Y.isUpdating || ScrollSmoother.isRefreshing || Y.update())
        }

        function Ha(e) {
            return arguments.length ? (e < 0 && (e = 0), z.y = -e, g = !0, f ? N = -e : Ga(-e), Y.isRefreshing ? i.update() : k(e / A), this) : -N
        }

        function Ka(e) {
            S.scrollTop = 0, e.target.contains && e.target.contains(S) || C && !1 === C(o, e) || (Y.isInViewport(e.target) || e.target === p || o.scrollTo(e.target, !1, "center center"), p = e.target)
        }

        function La(t, e) {
            if (t < e.start) return t;
            var r = isNaN(e.ratio) ? 1 : e.ratio,
                n = e.end - e.start,
                o = t - e.start,
                i = e.offset || 0,
                s = e.pins || [],
                a = s.offset || 0,
                l = e._startClamp && e.start <= 0 || e.pins && e.pins.offset ? 0 : e._endClamp && e.end === v() ? 1 : .5;
            return s.forEach(function(e) {
                n -= e.distance, e.nativeStart <= t && (o -= e.distance)
            }), a && (o *= (n - a / r) / n), t + (o - i * l) / r - o
        }

        function Na(t, r) {
            b.forEach(function(e) {
                return function adjustEffectRelatedTriggers(e, t, r) {
                    r || (e.pins.length = e.pins.offset = 0);
                    var n, o, i, s, a, l, c, f, u = e.pins,
                        h = e.markers;
                    for (c = 0; c < t.length; c++)
                        if (f = t[c], e.trigger && f.trigger && e !== f && (f.trigger === e.trigger || f.pinnedContainer === e.trigger || e.trigger.contains(f.trigger)) && (a = f._startNative || f._startClamp || f.start, l = f._endNative || f._endClamp || f.end, i = La(a, e), s = f.pin && 0 < l ? i + (l - a) : La(l, e), f.setPositions(i, s, !0, (f._startClamp ? Math.max(0, i) : i) - a), f.markerStart && h.push(I.quickSetter([f.markerStart, f.markerEnd], "y", "px")), f.pin && 0 < f.end && !r)) {
                            if (n = f.end - f.start, o = e._startClamp && f.start < 0) {
                                if (0 < e.start) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void adjustEffectRelatedTriggers(e, t);
                                n += f.start, u.offset = -f.start
                            }
                            u.push({
                                start: f.start,
                                nativeStart: a,
                                end: f.end,
                                distance: n,
                                trig: f
                            }), e.setPositions(e.start, e.end + (o ? -f.start : n), !0)
                        }
                }(e, t, r)
            })
        }

        function Oa() {
            Da(), requestAnimationFrame(Da), b && (Y.getAll().forEach(function(e) {
                e._startNative = e.start, e._endNative = e.end
            }), b.forEach(function(e) {
                var t = e._startClamp || e.start,
                    r = e.autoSpeed ? Math.min(v(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                    n = r - e.end;
                if ((r -= n / 2) < (t -= n / 2)) {
                    var o = t;
                    t = r, r = o
                }
                e._startClamp && t < 0 ? (n = (r = e.ratio < 0 ? v() : e.end / e.ratio) - e.end, t = 0) : (e.ratio < 0 || e._endClamp && r >= v()) && (n = ((r = v()) - (t = e.ratio < 0 || 1 < e.ratio ? 0 : r - (r - e.start) / e.ratio)) * e.ratio - (e.end - e.start)), e.offset = n || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, r, !0)
            }), Na(Y.sort())), M.reset()
        }

        function Pa() {
            return Y.addEventListener("refresh", Oa)
        }

        function Qa() {
            return b && b.forEach(function(e) {
                return e.vars.onRefresh(e)
            })
        }

        function Ra() {
            return b && b.forEach(function(e) {
                return e.vars.onRefreshInit(e)
            }), Qa
        }

        function Sa(r, n, o, i) {
            return function() {
                var e = "function" == typeof n ? n(o, i) : n;
                e || 0 === e || (e = i.getAttribute("data-" + E + r) || ("speed" === r ? 1 : 0)), i.setAttribute("data-" + E + r, e);
                var t = "clamp(" === (e + "").substr(0, 6);
                return {
                    clamp: t,
                    value: t ? e.substr(6, e.length - 7) : e
                }
            }
        }

        function Ta(r, e, t, n, o) {
            function cc() {
                e = u(), t = parseFloat(h().value), i = parseFloat(e.value) || 1, a = "auto" === e.value, c = a || s && s._startClamp && s.start <= 0 || p.offset ? 0 : s && s._endClamp && s.end === v() ? 1 : .5, l && l.kill(), l = t && I.to(r, {
                    ease: W,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }), s && (s.ratio = i, s.autoSpeed = a)
            }

            function dc() {
                g.y = d + "px", g.renderTransform(1), cc()
            }

            function gc(e) {
                if (a) {
                    dc();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || G,
                            i = e.getBoundingClientRect(),
                            s = o.getBoundingClientRect(),
                            a = s.top - i.top,
                            l = s.bottom - i.bottom,
                            c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
                            f = -c * t;
                        return 0 < c && (n = .5 == (r = s.height / (U.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, Math.abs(-c * r / (2 * r - 1))) * (t || 1), f += t ? -n * t : -n / 2, c += n), {
                            change: c,
                            offset: f
                        }
                    }(r, V(0, 1, -e.start / (e.end - e.start)));
                    y = t.change, f = t.offset
                } else f = p.offset || 0, y = (e.end - e.start - f) * (1 - i);
                p.forEach(function(e) {
                    return y -= e.distance * (1 - i)
                }), e.offset = y || .001, e.vars.onUpdate(e), l && l.progress(1)
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i, s, a, l, c, f, u = Sa("speed", e, n, r),
                h = Sa("lag", t, n, r),
                d = I.getProperty(r, "y"),
                g = r._gsap,
                p = [],
                m = [],
                y = 0;
            return cc(), (1 !== i || a || l) && (gc(s = Y.create({
                trigger: a ? r.parentNode : r,
                start: function start() {
                    return e.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o
                },
                end: function end() {
                    return e.value < 0 ? "max" : e.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o
                },
                scroller: S,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: dc,
                onRefresh: gc,
                onKill: function onKill(e) {
                    var t = b.indexOf(e);
                    0 <= t && b.splice(t, 1), dc()
                },
                onUpdate: function onUpdate(e) {
                    var t, r, n, o = d + y * (e.progress - c),
                        i = p.length,
                        s = 0;
                    if (e.offset) {
                        if (i) {
                            for (r = -N, n = e.end; i--;) {
                                if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end) return void(l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(g.y), -F, !0), B && l.progress(1)));
                                r > t.end && (s += t.distance), n -= t.distance
                            }
                            o = d + s + y * ((I.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
                        }
                        m.length && !a && m.forEach(function(e) {
                            return e(o - s)
                        }), o = function _round(e) {
                            return Math.round(1e5 * e) / 1e5 || 0
                        }(o + f), l ? (l.resetTo("y", o, -F, !0), B && l.progress(1)) : (g.y = o + "px", g.renderTransform(1))
                    }
                }
            })), I.core.getCache(s.trigger).stRevert = Ra, s.startY = d, s.pins = p, s.markers = m, s.ratio = i, s.autoSpeed = a, r.style.willChange = "transform"), s
        }
        var n, S, e, i, b, s, a, l, c, f, r, u, h, d, g, p, m = t.smoothTouch,
            w = t.onUpdate,
            T = t.onStop,
            _ = t.smooth,
            C = t.onFocusIn,
            P = t.normalizeScroll,
            x = t.wholePixels,
            R = this,
            E = t.effectsPrefix || "",
            k = Y.getScrollFunc(U),
            H = 1 === Y.isTouch ? !0 === m ? .8 : parseFloat(m) || 0 : 0 === _ || !1 === _ ? 0 : parseFloat(_) || .8,
            A = H && +t.speed || 1,
            N = 0,
            F = 0,
            B = 1,
            M = J(0),
            z = {
                y: 0
            },
            L = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function() {
                if (!Y.isRefreshing) {
                    var e = v(S) * A;
                    e < -N && Ha(e), $.restart(!0)
                }
            });

        function refreshHeight() {
            return e = n.clientHeight, n.style.overflow = "visible", K.style.height = U.innerHeight + (e - U.innerHeight) / A + "px", e - U.innerHeight
        }
        Pa(), Y.addEventListener("killAll", Pa), I.delayedCall(.5, function() {
            return B = 0
        }), this.scrollTop = Ha, this.scrollTo = function(e, t, r) {
            var n = I.utils.clamp(0, v(), isNaN(e) ? o.offset(e, r, !!t && !f) : +e);
            t ? f ? I.to(o, {
                duration: H,
                scrollTop: n,
                overwrite: "auto",
                ease: W
            }) : k(n) : Ha(n)
        }, this.offset = function(e, t, r) {
            var n, o = (e = q(e)[0]).style.cssText,
                i = Y.create({
                    trigger: e,
                    start: t || "top top"
                });
            return b && (B ? Y.refresh() : Na([i], !0)), n = i.start / (r ? A : 1), i.kill(!1), e.style.cssText = o, I.core.getCache(e).uncache = 1, n
        }, this.content = function(e) {
            if (arguments.length) {
                var t = q(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || K.children[0];
                return t !== n && (c = (n = t).getAttribute("style") || "", L && L.observe(n), I.set(n, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }), H || I.set(n, {
                    clearProps: "transform"
                })), this
            }
            return n
        }, this.wrapper = function(e) {
            return arguments.length ? (S = q(e || "#smooth-wrapper")[0] || function _wrap(e) {
                var t = j.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = j.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            }(n), l = S.getAttribute("style") || "", refreshHeight(), I.set(S, H ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }), this) : S
        }, this.effects = function(e, t) {
            if (b = b || [], !e) return b.slice(0);
            (e = q(e)).forEach(function(e) {
                for (var t = b.length; t--;) b[t].trigger === e && b[t].kill()
            });
            t = t || {};
            var r, n, o = t.speed,
                i = t.lag,
                s = t.effectsPadding,
                a = [];
            for (r = 0; r < e.length; r++)(n = Ta(e[r], o, i, r, s)) && a.push(n);
            return b.push.apply(b, a), !1 !== t.refresh && Y.refresh(), a
        }, this.sections = function(e, t) {
            if (s = s || [], !e) return s.slice(0);
            var r = q(e).map(function(t) {
                return Y.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(e) {
                        t.style.opacity = e.isActive ? "1" : "0", t.style.pointerEvents = e.isActive ? "all" : "none"
                    }
                })
            });
            return t && t.add ? s.push.apply(s, r) : s = r.slice(0), r
        }, this.content(t.content), this.wrapper(t.wrapper), this.render = function(e) {
            return Ga(e || 0 === e ? e : N)
        }, this.getVelocity = function() {
            return M.getVelocity(-N)
        }, Y.scrollerProxy(S, {
            scrollTop: Ha,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && K.scrollHeight
            },
            fixedMarkers: !1 !== t.fixedMarkers && !!H,
            content: n,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: U.innerWidth,
                    height: U.innerHeight
                }
            }
        }), Y.defaults({
            scroller: S
        });
        var O = Y.getAll().filter(function(e) {
            return e.scroller === U || e.scroller === S
        });
        O.forEach(function(e) {
            return e.revert(!0, !0)
        }), i = Y.create({
            animation: I.fromTo(z, {
                y: function y() {
                    return d = 0
                }
            }, {
                y: function y() {
                    return d = 1, -refreshHeight()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function onUpdate() {
                    if (d) {
                        var e = g;
                        e && (Fa(i), z.y = N), Ga(z.y, e), Ba(), w && !f && w(R)
                    }
                }
            }),
            onRefreshInit: function onRefreshInit(e) {
                if (!ScrollSmoother.isRefreshing) {
                    if (ScrollSmoother.isRefreshing = !0, b) {
                        var t = Y.getAll().filter(function(e) {
                            return !!e.pin
                        });
                        b.forEach(function(r) {
                            r.vars.pinnedContainer || t.forEach(function(e) {
                                if (e.pin.contains(r.trigger)) {
                                    var t = r.vars;
                                    t.pinnedContainer = e.pin, r.vars = null, r.init(t, r.animation)
                                }
                            })
                        })
                    }
                    var r = e.getTween();
                    h = r && r._end > r._dp._time, u = N, z.y = 0, H && (1 === Y.isTouch && (S.style.position = "absolute"), S.scrollTop = 0, 1 === Y.isTouch && (S.style.position = "fixed"))
                }
            },
            onRefresh: function onRefresh(e) {
                e.animation.invalidate(), e.setPositions(e.start, refreshHeight() / A), h || Fa(e), z.y = -k() * A, Ga(z.y), B || (h && (g = !1), e.animation.progress(I.utils.clamp(0, 1, u / A / -e.end))), h && (e.progress -= .001, e.update()), ScrollSmoother.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: U,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: function end() {
                return refreshHeight() / A
            },
            onScrubComplete: function onScrubComplete() {
                M.reset(), T && T(o)
            },
            scrub: H || !0
        }), this.smooth = function(e) {
            return arguments.length && (A = (H = e || 0) && +t.speed || 1, i.scrubDuration(e)), i.getTween() ? i.getTween().duration() : 0
        }, i.getTween() && (i.getTween().vars.ease = t.ease || W), this.scrollTrigger = i, t.effects && this.effects(!0 === t.effects ? "[data-" + E + "speed], [data-" + E + "lag]" : t.effects, {
            effectsPadding: t.effectsPadding,
            refresh: !1
        }), t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections), O.forEach(function(e) {
            e.vars.scroller = S, e.revert(!1, !0), e.init(e.vars, e.animation)
        }), this.paused = function(e, t) {
            return arguments.length ? (!!f !== e && (e ? (i.getTween() && i.getTween().pause(), k(-N / A), M.reset(), (r = Y.normalizeScroll()) && r.disable(), (f = Y.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function onChangeY() {
                    return Ha(-N)
                }
            })).nested = X(G, "wheel,touch,scroll", !0, !1 !== t)) : (f.nested.kill(), f.kill(), f = 0, r && r.enable(), i.progress = (-N / A - i.start) / (i.end - i.start), Fa(i))), this) : !!f
        }, this.kill = this.revert = function() {
            o.paused(!1), Fa(i), i.kill();
            for (var e = (b || []).concat(s || []), t = e.length; t--;) e[t].kill();
            Y.scrollerProxy(S), Y.removeEventListener("killAll", Pa), Y.removeEventListener("refresh", Oa), S.style.cssText = l, n.style.cssText = c;
            var r = Y.defaults({});
            r && r.scroller === S && Y.defaults({
                scroller: U
            }), o.normalizer && Y.normalizeScroll(!1), clearInterval(a), Q = null, L && L.disconnect(), K.style.removeProperty("height"), U.removeEventListener("focusin", Ka)
        }, this.refresh = function(e, t) {
            return i.refresh(e, t)
        }, P && (this.normalizer = Y.normalizeScroll(!0 === P ? {
            debounce: !0,
            content: !H && n
        } : P)), Y.config(t), "overscrollBehavior" in U.getComputedStyle(K) && I.set([K, G], {
            overscrollBehavior: "none"
        }), "scrollBehavior" in U.getComputedStyle(K) && I.set([K, G], {
            scrollBehavior: "auto"
        }), U.addEventListener("focusin", Ka), a = setInterval(Ba, 250), "loading" === j.readyState || requestAnimationFrame(function() {
            return Y.refresh()
        })
    }
    r.version = "3.12.5", r.create = function(e) {
        return Q && e && Q.content() === q(e.content)[0] ? Q : new r(e)
    }, r.get = function() {
        return Q
    }, t() && I.registerPlugin(r), e.ScrollSmoother = r, e.default = r;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});