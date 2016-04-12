---
id: 701
title: ShadowSocket + Proxies as global proxy
date: 2015-09-08T19:35:19+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=701
permalink: /index.php/archives/701
categories:
  - Other
---
1 . start ShadowSocket,ShadowSocket &#8220;自动代理模式&#8221;

2. start Proxies

proxies

name        Port     Type

127.0.0.1 1080    SOCKS5

rule

shadowsocketsX using Direct action

Default :Proxy SOCKS5 120.0.0.1:1080

3 start application to test

Done