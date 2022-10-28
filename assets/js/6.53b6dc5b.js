(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{313:function(a,t,s){a.exports=s.p+"assets/img/monitor-5.1-aaaa.ff2228b0.png"},314:function(a,t,s){a.exports=s.p+"assets/img/monitor-5.1-aaaaaaaaaaaaaaa.61646ec1.png"},315:function(a,t,s){a.exports=s.p+"assets/img/monitor-5.1-x123xdasdas.f23f589d.png"},316:function(a,t,s){a.exports=s.p+"assets/img/monitor-5.1.5.1.eb05ec07.png"},317:function(a,t,s){a.exports=s.p+"assets/img/monitor-5.1.5.2.fd3b3552.png"},318:function(a,t,s){a.exports=s.p+"assets/img/image-20200904151850462.74b31328.png"},378:function(a,t,s){"use strict";s.r(t);var r=s(10),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_5-1-监控配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-监控配置"}},[a._v("#")]),a._v(" 5.1 监控配置")]),a._v(" "),t("h2",{attrs:{id:"_5-1-1-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-流程"}},[a._v("#")]),a._v(" 5.1.1 流程")]),a._v(" "),t("ul",[t("li",[a._v("[安装Grafana](#5.1.2 Grafana安装)，不限制版本，建议使用最新版")]),a._v(" "),t("li",[a._v("[修改配置](#5.1.3 配置调整)，Grafana开始子域名访问与header头鉴权，开启iframe访问支持；Juno修改相应的配置")]),a._v(" "),t("li",[a._v("[导入Dashboard模板](#5.1.4 导入Dashboard模板)")]),a._v(" "),t("li",[a._v("[Juno系统设置](#5.1.5 Juno系统设置)")])]),a._v(" "),t("h2",{attrs:{id:"_5-1-2-grafana安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-grafana安装"}},[a._v("#")]),a._v(" 5.1.2 Grafana安装")]),a._v(" "),t("p",[a._v("按照官方文档安装即可")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/installation/debian/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://grafana.com/docs/grafana/latest/installation/debian/"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo rpm -Uvh grafana-7.1.1-1.x86_64.rpm\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-1-3-配置调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-配置调整"}},[a._v("#")]),a._v(" 5.1.3 配置调整")]),a._v(" "),t("h3",{attrs:{id:"_5-1-3-1-grafana配置调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-1-grafana配置调整"}},[a._v("#")]),a._v(" 5.1.3.1 Grafana配置调整")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root_url = %(protocol)s://%(domain)s:%(http_port)s/grafana\n\nserve_from_sub_path = true\n\nallow_embedding = true\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("其他的鉴权配置，例如：是否开启登录界面、是否支持匿名访问等，根据自己的需求来即可。")]),a._v(" "),t("h3",{attrs:{id:"_5-1-3-2-juno文件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-2-juno文件配置"}},[a._v("#")]),a._v(" 5.1.3.2 Juno文件配置")]),a._v(" "),t("p",[a._v("配置文件里面增加如下配置")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('[grafanaProxy]\n  enable = true\n  name = "grafana"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"_5-1-4-导入dashboard模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-4-导入dashboard模板"}},[a._v("#")]),a._v(" 5.1.4 导入Dashboard模板")]),a._v(" "),t("p",[a._v("访问："),t("code",[a._v("http://127.0.0.1:50000/grafana/")]),a._v("；")]),a._v(" "),t("p",[t("img",{attrs:{src:s(313),alt:"image-20200904150251572"}})]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:s(314),alt:"image-20200904150421375"}}),a._v(" "),t("p",[a._v("在仓库"),t("a",{attrs:{href:"https://github.com/douyu/juno/blob/master/data/grafana",target:"_blank",rel:"noopener noreferrer"}},[a._v("路径"),t("OutboundLink")],1),a._v("中，有三个配置好的dashboard配置文件。分别导入即可。")]),a._v(" "),t("p",[a._v("例如，此处，导入API-xxxxxx.json。")]),a._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:s(315),alt:"image-20200904151458986"}}),a._v(" "),t("p",[a._v("此处"),t("code",[a._v("uid")]),a._v("是文件中的配置项，同时，在Juno中，也是此dashboard的访问路径。")]),a._v(" "),t("h2",{attrs:{id:"_5-1-5-juno系统设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-5-juno系统设置"}},[a._v("#")]),a._v(" 5.1.5 Juno系统设置")]),a._v(" "),t("h3",{attrs:{id:"_5-1-5-1-grafana设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-5-1-grafana设置"}},[a._v("#")]),a._v(" 5.1.5.1 Grafana设置")]),a._v(" "),t("p",[a._v("进入管理后台：\n系统设置——>系统设置")]),a._v(" "),t("p",[t("img",{attrs:{src:s(316),alt:"../static/juno/monitor-5.1.5.1.png"}})]),a._v(" "),t("p",[a._v("Host：Grafana实际访问的地址，只填写 "),t("code",[a._v("IP:PORT")]),a._v("，例如："),t("code",[a._v("127.0.0.1:3000")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("X-WEBAUTH-USER\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_5-1-5-2-应用监控设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-5-2-应用监控设置"}},[a._v("#")]),a._v(" 5.1.5.2 应用监控设置")]),a._v(" "),t("p",[t("code",[a._v("系统设置")]),a._v("页面下方，找到"),t("code",[a._v("应用版本相关设置")]),a._v("。")]),a._v(" "),t("p",[a._v("这里设计的目的是支持不同版本的监控Dashboard展示，一般情况下只需要配置一条记录即可。\n"),t("img",{attrs:{src:s(317),alt:"../static/juno/monitor-5.1.5.2.png"}})]),a._v(" "),t("ul",[t("li",[a._v("应用版本名称，会在监控界面应用版本展示部分显示")]),a._v(" "),t("li",[a._v("应用版本号，指的是jupiter的版本，使用 "),t("code",[a._v("，")]),a._v("进行分割")]),a._v(" "),t("li",[a._v("应用版本key，目前配置应用监控版本的唯一标识，适用于Prometheus数据源指定")])]),a._v(" "),t("p",[a._v("Dashboard配置，"),t("code",[a._v("/grafana/d/")]),a._v("为固定前缀，不得更改，"),t("code",[a._v("api")]),a._v("则是"),t("code",[a._v("dashboard")]),a._v("导入时，配置的"),t("code",[a._v("uid")]),a._v("。")]),a._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:s(318),alt:"image-20200904151850462"}})])}),[],!1,null,null,null);t.default=e.exports}}]);