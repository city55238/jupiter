(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{398:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3-1-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-http"}},[t._v("#")]),t._v(" 3.1 HTTP")]),t._v(" "),s("h2",{attrs:{id:"_3-1-1-http介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-http介绍"}},[t._v("#")]),t._v(" 3.1.1 HTTP介绍")]),t._v(" "),s("p",[s("code",[t._v("HTTP")]),t._v("是最常用的一种"),s("code",[t._v("Server")]),t._v("，"),s("code",[t._v("Jupiter")]),t._v("对"),s("code",[t._v("HTTP")]),t._v("服务提供了很多可观察性的手段。")]),t._v(" "),s("p",[t._v("我们内置了多个中间件，可以采集请求日志、采集trace、采集监控、采集慢日志，更加方便我们对"),s("code",[t._v("HTTP")]),t._v("服务的可观测。")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("registry")]),t._v("注册"),s("code",[t._v("HTTP")]),t._v("里的信息，提供给网关使用")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("govern")]),t._v("的治理端口，能够查看监控、HTTP实时信息")]),t._v(" "),s("h2",{attrs:{id:"_3-1-2-配置规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-配置规范"}},[t._v("#")]),t._v(" 3.1.2 配置规范")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/jupiter/6.2httpserver.html"}},[t._v("配置说明")])],1),t._v(" "),s("h2",{attrs:{id:"_3-1-3-简单的http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-简单的http"}},[t._v("#")]),t._v(" 3.1.3 简单的HTTP")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/jupiter/1.1quickstart.html"}},[t._v("查看quickstart")])],1),t._v(" "),s("h2",{attrs:{id:"_3-1-4-注册的http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-注册的http"}},[t._v("#")]),t._v(" 3.1.4 注册的HTTP")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"https://github.com/douyu/jupiter-examples/tree/main/http/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP注册信息示例"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("配置项")]),t._v(" "),s("div",{staticClass:"language-toml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.server.http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.etcdv3.default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("endpoints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2379"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("secure")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.registry.wh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("endpoints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2379"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("configKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jupiter.etcdv3.default"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1s"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("注册"),s("code",[t._v("ETCD")]),t._v("信息")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("eng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetRegistry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    compound_registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        etcdv3_registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wh"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildRegistry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("设置"),s("code",[t._v("HTTP")])]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTTP地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eng "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("serveHTTP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" xecho"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    erver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Gopher Wuhan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" eng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"_3-1-5-完整的http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-完整的http"}},[t._v("#")]),t._v(" 3.1.5 完整的HTTP")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"https://github.com/douyu/jupiter-examples/tree/main/http/all",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整HTTP注册信息示例"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);