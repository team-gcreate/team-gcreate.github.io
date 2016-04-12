---
id: 626
title: How to Parse bit stream Section Header
date: 2015-06-25T17:30:58+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=626
permalink: /index.php/archives/626
categories:
  - DTV
---
For example ,we use PAT (program map section)

[<img class="alignleft size-full wp-image-627" src="http://flylbblog.duapp.com/wp-content/uploads/2015/06/common_section.png" alt="common_section" width="521" height="623" />](http://flylbblog.duapp.com/wp-content/uploads/2015/06/common_section.png)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

the hight part is section common part.

<pre class="EnlighterJSRAW" data-enlighter-language="java">private boolean parseSectionHeader() throws Exception {
    byte[] rawSection = sectionData.array();
    if (rawSection == null)
        return false;

    SectionParser sectionParser = new SectionParser();
    sectionParser.setBuffer(rawSection);

    table_id = (Integer) (sectionParser.parseData(8));//
    section_syntax_indicator = (Integer) (sectionParser.parseData(1));
    reserved_future_use = (Integer) (sectionParser.parseData(1));// reserved_future_use 1 bslbf
    reserved1 = (Integer) (sectionParser.parseData(2));// reserved 2 bslbf
    section_length = (Integer) (sectionParser.parseData(12));// section_length 12 uimsbf
    // section_length -- This is a 12 bit field, the first two bits of which shall be '00'. It specifies the number of bytes
    // of the section starting immediately following the section_length field, and including the CRC.
    section_length += 3;// there are 3 bytes before field "section_length"
    table_id_extension = (Integer) (sectionParser.parseData(16));// service_id 16 uimsbf
    reserved2 = (Integer) (sectionParser.parseData(2));// reserved 2 bslbf
    version_number = (Integer) (sectionParser.parseData(5));// version_number 5 uimsbf
    current_next_indicator = (Integer) (sectionParser.parseData(1));// current_next_indicator 1 bslbf
    section_number = (Integer) (sectionParser.parseData(8));// section_number 8 uimsbf
    last_section_number = (Integer) (sectionParser.parseData(8));// last_section_number 8 uimsbf
    return true;
}</pre>

&nbsp;

[see full src](https://github.com/flylb1/TSParser/blob/master/src/core/TSSection.java)

&nbsp;

&nbsp;