// !function (e) {
//     var t = {};
//
//     function n(o) {
//         if (t[o]) return t[o].exports;
//         var a = t[o] = {i: o, l: !1, exports: {}};
//         return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
//     }
//
//     n.m = e, n.c = t, n.d = function (e, t, o) {
//         n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: o})
//     }, n.n = function (e) {
//         var t = e && e.__esModule ? function () {
//             return e.default
//         } : function () {
//             return e
//         };
//         return n.d(t, "a", t), t
//     }, n.o = function (e, t) {
//         return Object.prototype.hasOwnProperty.call(e, t)
//     }, n.p = "", n(n.s = 0)
// }({
//     0: function (e, t, n) {
//         n("sV/x"), e.exports = n("xZZD")
//     }, "sV/x": function (e, t, n) {
//         "use strict";
//         var o, a, s = function (e, t) {
//                 var n = new XMLHttpRequest;
//                 n.onreadystatechange = function () {
//                     4 == n.readyState && (200 == n.status ? t(n.responseText) : 403 == n.status ? (console.log("DAILY LIMIT EXCEEDED!"), t("nex")) : 500 == n.status ? (console.log("User not found!"), t("500")) : t("nex"))
//                 }, n.open("GET", e), n.setRequestHeader("Authorization", "Basic " + btoa("frontend:naix6eiM")), n.send()
//             }, r = function (e, t) {
//                 "textContent" in e ? e.textContent = t : e.innerText = t
//             }, i = {},
//             l = ["instagram", "taylorswift", "neymarjr", "leomessi", "beyonce", "kyliejenner", "kimkardashian", "therock", "selenagomez", "arianagrande", "cristiano", "justinbieber", "billieeilish", "kendalljenner", "shawnmendes", "tomholland2013", "jlo", "mileycyrus", "zendaya", "robertdowneyjr", "bjarnbronsveld"],
//             u = l[Math.floor(Math.random() * l.length)], c = u, m = 0;
//         $("#search-button").click(function () {
//             $("#menu-container").toggleClass("hide"), $("#search-container").toggleClass("hide"), $("#search").focus()
//         }), $("#search-container").submit(function () {
//             $("#menu-container").toggleClass("hide"), $("#search-container").toggleClass("hide");
//             var e = document.getElementById("search").value;
//             null != e && e.trim() != u && "" != e.trim() && (e && i.parseInput(e.trim(), !0), r(document.getElementById("profile-name"), "N/A"), r(document.getElementById("about-section"), "This user has no description."), r(document.getElementById("about-title"), "About"), history.pushState(null, null, "#!/" + u), o = "https://instagram.com/" + u)
//         }), $("#logo").click(function () {
//             var e = l[Math.floor(Math.random() * l.length)];
//             null != e && e.trim() != u && "" != e.trim() && (e && i.parseInput(e.trim(), !1), r(document.getElementById("profile-name"), "N/A"), r(document.getElementById("about-section"), "This user has no description."), r(document.getElementById("about-title"), "About"), history.pushState(null, null, "#!/" + u), o = "https://instagram.com/" + u)
//         }), Array.prototype.shuffle = function () {
//             var e, t, n = this.length;
//             if (0 == n) return this;
//             for (; --n;) e = Math.floor(Math.random() * (n + 1)), t = this[n], this[n] = this[e], this[e] = t;
//             return this
//         }, i.queryName = function () {
//             s("https://api.instastatistics.com/account/info/" + encodeURIComponent(u), function (e) {
//                 if ("nex" != e) {
//                     var t, n = (e = JSON.parse(e)).data.username;
//                     t = d(e.data.fullName) ? n : e.data.fullName;
//                     var a = e.data.avatarHd || e.data.avatar;
//                     o = "https://instagram.com/" + n;
//                     var s, l, u = e.data.biography, c = e.data.externalUrl, m = e.data.verified;
//                     s = "#profile-picture", l = a, document.querySelector(s).src = l, r(document.getElementById("about-section"), u), r(document.getElementById("about-section-url"), c), r(document.getElementById("about-section-username"), n), r(document.getElementById("about-title"), "About " + t), $("#about-section-url").attr("href", c), m ? $("#verified").attr("class", "") : $("#verified").attr("class", "hide"), i.name(t)
//                 } else i.queryName()
//             })
//         }, i.name = function (e) {
//             document.title = e + " - Realtime Instagram Follower Count", r(document.querySelector("#profile-name"), e), a = e
//         }, i.openResult = function (e) {
//             console.log(e);
//             var t = e;
//             null != t && (t.trim() != u && "" != t.trim() ? (t && i.parseInput(t.trim(), !1), r(document.querySelector("#profile-name"), "N/A"), history.pushState(null, null, "#!/" + u)) : $(".searchresults").fadeOut("slow", function () {
//                 $("#search-results").empty()
//             }))
//         }, i.isLive = 0, i.live = function () {
//             var e = "https://api.instastatistics.com/account/realtime/" + encodeURIComponent(u);
//             s(e, function (e) {
//                 if ("nex" != e) if ("500" != e) {
//                     var t = (e = JSON.parse(e)).data.followerCount, n = e.data.followingCount, o = e.data.mediaCount;
//                     i.isLive ? (r(document.querySelector("#follower-count"), t), r(document.querySelector("#following-count"), n), r(document.querySelector("#posts-count"), o), m = t) : (new Odometer({
//                         el: document.querySelector("#follower-count"),
//                         value: t,
//                         format: "(,ddd)"
//                     }), new Odometer({
//                         el: document.querySelector("#following-count"),
//                         value: n,
//                         format: "(,ddd)"
//                     }), new Odometer({
//                         el: document.querySelector("#posts-count"),
//                         value: o,
//                         format: "(,ddd)"
//                     }), m = t, i.isLive = 1)
//                 } else console.log("An error might have occured. Please try again later or contact us on Twitter."); else setTimeout(i.live(), 2e4)
//             })
//         }, i.parseInput = function (e, t) {
//             c = e;
//             s("https://api.instastatistics.com/account/info/" + encodeURIComponent(e), function (t) {
//                 if ("nex" != t) if ("500" != t) if ((t = JSON.parse(t)).data) {
//                     var n = t.data.username;
//                     i.reset(n)
//                 } else M.toast({html: "Uh oh... we were not able to find any users with your search"}, 4e3); else M.toast({html: "Seems to be an error... Please try again later or contact us on Twitter."}, 4e3); else i.parseInput(e)
//             })
//         }, i.showMoreResults = function (e) {
//             c = e, s("https://www.instagram.com/web/search/topsearch/?query=" + encodeURIComponent(e), function (t) {
//                 if ("nex" != t) if ((t = JSON.parse(t)).users.length < 1) M.toast({html: "Uh oh... we were not able to find any users with your search"}, 4e3); else {
//                     $(".searchresults").show(), $(".close-searchresults").show();
//                     for (var n = 0; n < t.users.length; n++) {
//                         var o, a = t.users[n].user.username;
//                         o = d(t.users[n].user.full_name) ? t.users[n].user.username : t.users[n].user.full_name, $(".searchresults ul").append('<li class="search-item row" onClick="RIFC.openResult(\'' + a + '\');"><img src="' + t.users[n].user.profile_pic_url + '" alt="" class="circle search-img col-s2" /><div class="search-item-data col-s10"><strong>' + o + '</strong><br /><span class="sub-id">' + t.users[n].user.byline + "</span></div></li>")
//                     }
//                 } else i.parseInput(e, !0)
//             })
//         }, i.share = function (e) {
//             var t = encodeURIComponent(document.getElementById("shareURL").value),
//                 n = "https://www.facebook.com/sharer/sharer.php?u=" + t,
//                 s = "https://twitter.com/intent/tweet?text=" + a + " has currently got over " + m + " followers! See it yourself, go to " + t + "&via=Instastatistics&related=BjarnBronsveld,Instastatistics",
//                 r = o;
//             switch (e) {
//                 case"twtr":
//                     window.open(s);
//                     break;
//                 case"fb":
//                     window.open(n);
//                     break;
//                 case"ig":
//                     window.open(r);
//                     break;
//                 default:
//                     console.log("Something went wrong.")
//             }
//         }, i.all = function () {
//             document.getElementById("shareURL").value = "https://instastatistics.com/#!/" + u, o = "https://instagram.com/" + u, i.queryName(), i.live()
//         }, i.reset = function (e) {
//             e && e.trim() != u && (u = e.trim(), history.pushState(null, null, "#!/" + u), r(document.getElementById("profile-name"), "N/A"), ga("send", "pageview", {
//                 page: location.pathname + location.search + location.hash,
//                 title: document.title
//             }), $(".searchresults").fadeOut("slow", function () {
//                 $("#search-results").empty()
//             }), i.all())
//         }, window.onpopstate = function () {
//             var e = location.hash.split("!/")[1];
//             e && (u = e.trim(), c = u, r(document.querySelector("#profile-name"), "N/A"), i.parseInput(c, !1))
//         };
//
//         function d(e) {
//             return !(void 0 !== e && e && 0 !== e.length && "" !== e && /[^\s]/.test(e) && !/^\s*$/.test(e) && "" !== e.replace(/\s/g, ""))
//         }
//
//         window.onload = function () {
//             var e, t, n, o, a, s, r = location.hash.split("!/")[1];
//             r ? (u = r.trim(), c = u) : history.pushState(null, null, "#!/" + u), i.all(), setInterval(i.live, 1e4), e = window, t = document, n = "script", o = "ga", e.GoogleAnalyticsObject = o, e.ga = e.ga || function () {
//                 (e.ga.q = e.ga.q || []).push(arguments)
//             }, e.ga.l = 1 * new Date, a = t.createElement(n), s = t.getElementsByTagName(n)[0], a.async = 1, a.src = "https://www.google-analytics.com/analytics.js", s.parentNode.insertBefore(a, s), ga("create", "UA-71725648-7", "auto"), ga("send", "pageview", {
//                 page: location.pathname + location.search + location.hash,
//                 title: document.title
//             })
//         }
//     }, xZZD: function (e, t) {
//     }
// });