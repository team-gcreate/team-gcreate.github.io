---
id: 85
title: MPEG2 Transport Stream Parser
date: 2015-03-11T14:58:56+00:00
author: fly_lb
layout: page
guid: http://flylbblog.duapp.com/?page_id=85
---
### 1 Introduction

TSParser is a powerful cross-platform DVB/ MPEG stream analyzer. It works well under Windows, Linux, and Mac OS.

[### 1 Introduction

TSParser is a powerful cross-platform DVB/ MPEG stream analyzer. It works well under Windows, Linux, and Mac OS.

](https://github.com/flylb1/TSParser) .

<img class="alignnone" src="https://drive.google.com/uc?id=0Bw_ZwnkZyTMvTzhxOHpHOUszbkk" alt="" width="629" height="407" />

&nbsp;

<a href="https://cloud.githubusercontent.com/assets/8717254/6841219/94298906-d3c1-11e4-9fcb-225089ada675.png" target="_blank"><img src="https://cloud.githubusercontent.com/assets/8717254/6841219/94298906-d3c1-11e4-9fcb-225089ada675.png" alt="introduce" /></a>

2 Features

#### [](https://github.com/flylb1/TSParser#21-web-based-application){#user-content-21-web-based-application.anchor}2.1 Web based application

TSParser is a web-based application. User can install it on a server, and the client will access the application via a browser. [Main](https://cloud.githubusercontent.com/assets/8717254/6841100/dc949af2-d3bf-11e4-9f97-6208ba18921a.png)

#### [](https://github.com/flylb1/TSParser#22-easy-to-configure-pid-table-id){#user-content-22-easy-to-configure-pid-table-id.anchor}2.2 Easy to configure PID/ Table ID

User can customize the PID filters easily for runtime usage. Notice that PMT filter will be disabled if PAT is disabled. Besides, decreasing the number of filters can make parser faster. [system\_setting\_pid](https://cloud.githubusercontent.com/assets/8717254/6841193/144da38e-d3c1-11e4-8c6b-685dad7f58de.png)

Table ID filters can also be customized. User can enable/disable a special Table when parsing a stream.[system\_setting\_tid](https://cloud.githubusercontent.com/assets/8717254/6841213/61f5b6a8-d3c1-11e4-9db0-484645f1c764.png)

#### [](https://github.com/flylb1/TSParser#23-easy-to-add-new-section-descriptor-syntax){#user-content-23-easy-to-add-new-section-descriptor-syntax.anchor}2.3 Easy to add new Section/ Descriptor syntax

TSParser uses Section/Descriptor syntax to parse sections/ descriptors. It has the ability to let user modify the Section & Descriptor syntax at runtime. Once the syntax is changed, the stream’s analysis result will be updated meanwhile. Syntax files locate under %INSTALL_DIR%\syntax. User can also modify these syntax files outside of the system.

TSParser has already integrated SPEC listed as below. The main work is to copy syntax from SPEC and paste it into the application.

<ul class="task-list">
  <li>
    13818
  </li>
  <li>
    <a href="http://www.etsi.org/deliver/etsi_en/300400_300499/300468/01.11.01_60/en_300468v011101p.pdf">ETSI EN 300 468</a>
  </li>
  <li>
    <a href="http://www.etsi.org/deliver/etsi_ts/102800_102899/102809/01.01.01_60/ts_102809v010101p.pdf">ETSI TS 102 809</a>
  </li>
  <li>
    <a href="http://www.etsi.org/deliver/etsi_ts/102800_102899/102812/01.02.01_60/ts_102812v010201p.pdf">ETSI TS 102 812</a>
  </li>
  <li>
    DTG D-Book
  </li>
  <li>
    <a href="http://www.etsi.org/deliver/etsi_tr/101200_101299/101202/01.02.01_60/tr_101202v010201p.pdf">ETSI TR 101 202</a>
  </li>
  <li>
    Polsat_stb
  </li>
</ul>

#### [](https://github.com/flylb1/TSParser#24-dynamically-load-section-descriptor-script){#user-content-24-dynamically-load-section-descriptor-script.anchor}2.4 Dynamically load Section/ Descriptor script

TSParser has both Lexer and Parser, which can help recognize the Section/ Descriptor scripts. (Thanks[Antlr](http://www.antlr.org/))

TSParser translates the scripts into java source code at first, then to compile java code into byte code, finally to dynamically load byte code into JVM at runtime. (Thanks [Janino](http://docs.codehaus.org/display/JANINO/Home))

#### [](https://github.com/flylb1/TSParser#25-friendly-presentation-of-sectiondescriptor){#user-content-25-friendly-presentation-of-sectiondescriptor.anchor}2.5 Friendly presentation of Section/Descriptor

For a specific section, TSParser has three methods to show the section/descriptor data.

<ul class="task-list">
  <li>
    <a href="https://cloud.githubusercontent.com/assets/8717254/6841486/65445c56-d3c6-11e4-99a0-d1c01e6e5db5.png">Tree view</a>
  </li>
  <li>
    <a href="https://cloud.githubusercontent.com/assets/8717254/6841499/98f1e276-d3c6-11e4-9010-7c1e4e81f169.png">Text view</a>
  </li>
  <li>
    <a href="https://cloud.githubusercontent.com/assets/8717254/6841507/b7a141c6-d3c6-11e4-9eb3-342c54311e31.png">Raw data view</a>
  </li>
  <li>
    <a href="https://cloud.githubusercontent.com/assets/8717254/6841517/d6a27572-d3c6-11e4-90a4-688382fda603.png">Syntax view</a>
  </li>
</ul>

#### [](https://github.com/flylb1/TSParser#26-export-sispi-data-to-file){#user-content-26-export-sispi-data-to-file.anchor}2.6 Export SI/SPI data to file

Usually, the size of stream is very large. It costs time to transfer the stream for analysis. TSParser supports a way to export only SI/ PSI data. It can be very useful since the size of SI/ PSI data becomes very small while audio/ video data is ignored. Especially, it makes quite convenient when field try.

#### [](https://github.com/flylb1/TSParser#27-support-3rd-to-add-new-application-in-java){#user-content-27-support-3rd-to-add-new-application-in-java.anchor}2.7 Support 3rd to add new application in Java

User can write third party applications based on stream data in Java with Java1.5 style. Third party Applications locate in %INSTALL_DIR%/3rd/src. When TSParser startups, these applications will be auto registered into the system.

There are 3 build-in applications in TSParser:

<ul class="task-list">
  <li>
    Service List application base on SDT(Show service list )
  </li>
  <li>
    EPG Application base on EIT (show EPG)
  </li>
  <li>
    Demo Application (simple demo)
  </li>
</ul>

### [](https://github.com/flylb1/TSParser#3-run-and-build){#user-content-3-run-and-build.anchor}3 Run and Build

Please see file &#8220;HowToRun&#8221; for detail

### [](https://github.com/flylb1/TSParser#4-license){#user-content-4-license.anchor}4 LICENSE

TSParser is licensed under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0.html), which means user can use it for free, and without strings attached in commercial or non-commercial projects.

### [](https://github.com/flylb1/TSParser#5-explanation){#user-content-5-explanation.anchor}5 Explanation

Most codes are open source except for Lexer and Parser which are compiled in tsp_core.jar.

<a href="https://drive.google.com/file/d/0Bw_ZwnkZyTMvWk96c1M4RzZpY0U/view?usp=sharing" target="_blank">TSP_Manual</a>