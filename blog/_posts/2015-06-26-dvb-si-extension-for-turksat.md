---
id: 640
title: 'DVB SI &#8211; Extension For TURKSAT'
date: 2015-06-26T09:39:02+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=640
permalink: /index.php/archives/640
categories:
  - DTV
---
### DVB-SI Extension For TURKSAT

SPEC:[TKGS EN DVB-SI\_Ext\_en_v20](http://flylbblog.duapp.com/wp-content/uploads/2015/06/TKGS-EN-DVB-SI_Ext_en_v20.pdf)

#### [](https://github.com/flylb1/TSParser/wiki/Extension-For-TURKSAT#tkgs-sections-are-private-sections-with-generic-section-syntax-section_syntax_indicator--1){#user-content-tkgs-sections-are-private-sections-with-generic-section-syntax-section_syntax_indicator--1.anchor}TKGS sections are private sections with generic section syntax (section\_syntax\_indicator = 1).

<pre>tkgs_section(){
    table_id
    section_syntax_indicator
    reserved_by_tkgs
    reserved
    section_length
    data_type
    reserved
    version_number
    current_next_indicator
    section_number
    last_section_number
    <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span>section_length<span class="pl-k">-</span><span class="pl-c1">9</span>; i<span class="pl-k">++</span>){
        tkgs_data_byte
    }
    <span class="pl-c1">CRC_32</span>
}


</pre>

#### Building TKGS data from TKGS sections:

TKGS data is an array of tkgs\_data\_bytes. The i. tkgs\_data\_byte in the tkgs\_data\_byte loop in a tkgs\_section with section\_number n can be assigned to tkgs_data array using the following equation:
  
**tkgs\_data[n*4084+i] = tkgs\_data\_byte\_loop[i];**

#### [](https://github.com/flylb1/TSParser/wiki/Extension-For-TURKSAT#tkgs-data){#user-content-tkgs-data.anchor}TKGS Data

<div class="highlight highlight-java">
  <pre>tkgs_data(){
    tkgs_info()
    reserved
    broadcast_source_loop_length
    broadcast_source_loop{
        broadcast_source()
    }
    reserved
    service_list_loop_length
    service_list_loop{
        service_list()
    }
    category_loop_length
    category_loop{
        descriptor()
    }
    reserved
}</pre>
</div>

<div class="highlight highlight-java">
  <pre>tkgs_info(){
    reserved
    tkgs_info_descriptors_length
    tkgs_info_descriptor_loop{
        descriptor()
    }
}</pre>
</div>

<div class="highlight highlight-java">
  <pre>broadcast_source_data(){
    broadcast_source_descriptors_length
    broadcast_source_descriptor_loop{
        descriptor()
    }
    reserved
    transport_stream_loop_length
    transport_stream_loop{
        transport_stream_descriptors_length
        transport_stream_descriptor_loop{
            descriptor()
        }
        <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1"></span>;i<span class="pl-k">&lt;</span><span class="pl-smi">N</span>;i<span class="pl-k">++</span>){
            service_description_section()
        }
        program_loop_length
        program_loop{
            reserved
            tkgs_service_locator
            program_map_section()
        }
    }
}</pre>
</div>

<div class="highlight highlight-java">
  <pre>service_list(){
    service_list_descriptors_length
    service_list_descriptor_loop{
        descriptor()
    }
}</pre>
</div>

#### [](https://github.com/flylb1/TSParser/wiki/Extension-For-TURKSAT#create-tkgs-syntax-for-tool-used){#user-content-create-tkgs-syntax-for-tool-used.anchor}Create TKGS syntax for tool used

<div class="highlight highlight-java">
  <pre>tkgs_data_section(){
    <span class="pl-c1">NODE_START</span> tkgs_info
    reserved    <span class="pl-c1">4</span>   bslbf
    tkgs_info_descriptors_length    <span class="pl-c1">12</span>  uimbf
    <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1"></span>;i<span class="pl-k">&lt;</span><span class="pl-smi">N</span>;i<span class="pl-k">++</span>){
        descriptor()
    }
    <span class="pl-c1">NODE_END</span> tkgs_info

    reserved                        <span class="pl-c1">4</span>   bslbf
    broadcast_source_loop_length    <span class="pl-c1">20</span>  uimsbf
    <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span>broadcast_source_loop_length; i<span class="pl-k">++</span>)<span class="pl-c">/*broadcast_source_loops*/</span>{       
        broadcast_source_descriptors_length     <span class="pl-c1">8</span> uimsbf
        <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1"></span>;i<span class="pl-k">&lt;</span>broadcast_source_descriptors_length;i<span class="pl-k">++</span>){
            descriptor()
        }
        reserved                                <span class="pl-c1">4</span>   bslbf   
        transport_stream_loop_length            <span class="pl-c1">20</span>  uimsbf
        <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span>transport_stream_loop_length; i<span class="pl-k">++</span>)<span class="pl-c">/*transport_streams*/</span>{        
            transport_stream_descriptors_length <span class="pl-c1">8</span>   uimbsf
            <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1"></span>;i<span class="pl-k">&lt;</span><span class="pl-smi">N</span>;i<span class="pl-k">++</span>){
                descriptor()
            }

            <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span><span class="pl-smi">N</span>; i<span class="pl-k">++</span>)<span class="pl-c">/*service_lists*/</span>{
                read_sdt_table_id               <span class="pl-c1">8</span>   uimsbf
                rewind(<span class="pl-c1">8</span>)

                <span class="pl-k">if</span>(read_sdt_table_id <span class="pl-k">==</span> 0x42){
                    <span class="pl-c1">CALL</span> <span class="pl-c1">S20_300468</span><span class="pl-k">.</span>section<span class="pl-k">.</span>service_description_section
                }<span class="pl-k">else</span>{
                    <span class="pl-k">break</span>
                }
            }

            program_loop_length                 <span class="pl-c1">16</span>  uimbsf
            <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span>program_loop_length; i<span class="pl-k">++</span>)<span class="pl-c">/*programs*/</span>{      
                reserved                    <span class="pl-c1">3</span> uimsbf
                tkgs_service_locator        <span class="pl-c1">13</span> uimsbf
                <span class="pl-c1">CALL</span> <span class="pl-c1">S10_13818</span><span class="pl-k">.</span><span class="pl-smi">section<span class="pl-k">.</span>TS_program_map_section</span>
            }
        }
    }   
    reserved                                    <span class="pl-c1">4</span>   bslbf

    <span class="pl-c1">NODE_START</span> service_list_loop
    service_list_loop_length                    <span class="pl-c1">20</span>  uimsbf
    <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span>service_list_loop_length; i<span class="pl-k">++</span>)<span class="pl-c">/*service_lists*/</span>{    
        service_list_descriptors_length <span class="pl-c1">16</span> uimsbf
        <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span>service_list_descriptors_length; i<span class="pl-k">++</span>) {
            descriptor()
        }
    }
    <span class="pl-c1">NODE_END</span> service_list_loop

    <span class="pl-c1">NODE_START</span> category_loop
    category_loop_length                        <span class="pl-c1">16</span>  uimsbf
    <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1"></span>;i<span class="pl-k">&lt;</span><span class="pl-smi">N</span>;i<span class="pl-k">++</span>){
        descriptor()
    }
    <span class="pl-c1">NODE_END</span> category_loop
    reserved                                    <span class="pl-c1">16</span>  bslbf
}
</pre>
</div>

Reference S20\_300468.section.service\_description_section

<div class="highlight highlight-java">
  <pre>service_description_section(){
    table_id <span class="pl-c1">8</span> uimsbf
    section_syntax_indicator <span class="pl-c1">1</span> bslbf
    reserved_future_use <span class="pl-c1">1</span> bslbf
    reserved <span class="pl-c1">2</span> bslbf
    section_length <span class="pl-c1">12</span> uimsbf
    transport_stream_id <span class="pl-c1">16</span> uimsbf
    reserved <span class="pl-c1">2</span> bslbf
    version_number <span class="pl-c1">5</span> uimsbf
    current_next_indicator <span class="pl-c1">1</span> bslbf
    section_number <span class="pl-c1">8</span> uimsbf
    last_section_number <span class="pl-c1">8</span> uimsbf
    original_network_id <span class="pl-c1">16</span> uimsbf
    reserved_future_use <span class="pl-c1">8</span> bslbf
    <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>;i<span class="pl-k">&lt;</span>section_length<span class="pl-k">-</span><span class="pl-c1">12</span>;i<span class="pl-k">++</span>)<span class="pl-c">/*services*/</span>{
        service_id <span class="pl-c1">16</span> uimsbf
        reserved_future_use <span class="pl-c1">6</span> bslbf
        <span class="pl-smi">EIT_schedule_flag</span> <span class="pl-c1">1</span> bslbf
        <span class="pl-smi">EIT_present_following_flag</span> <span class="pl-c1">1</span> bslbf
        running_status <span class="pl-c1">3</span> uimsbf
        free_CA_mode <span class="pl-c1">1</span> bslbf
        descriptors_loop_length <span class="pl-c1">12</span> uimsbf
        <span class="pl-k">for</span> (j<span class="pl-k">=</span><span class="pl-c1"></span>;j<span class="pl-k">&lt;</span><span class="pl-smi">N</span>;j<span class="pl-k">++</span>){
            descriptor()
        }
    }
    <span class="pl-c1">CRC_32</span> <span class="pl-c1">32</span> rpchof
}</pre>
</div>

Reference S10\_13818.section.TS\_program\_map\_section

<div class="highlight highlight-java">
  <pre>TS_program_map_section() {
    table_id                    <span class="pl-c1">8</span> uimsbf
    section_syntax_indicator    <span class="pl-c1">1</span> bslbf
    noused                      <span class="pl-c1">1</span> bslbf
    reserved                    <span class="pl-c1">2</span> bslbf
    section_length              <span class="pl-c1">12</span> uimsbf
    program_number              <span class="pl-c1">16</span> uimsbf
    reserved                    <span class="pl-c1">2</span> bslbf
    version_number              <span class="pl-c1">5</span> uimsbf
    current_next_indicator      <span class="pl-c1">1</span> bslbf
    section_number              <span class="pl-c1">8</span> uimsbf
    last_section_number         <span class="pl-c1">8</span> uimsbf
    reserved                    <span class="pl-c1">3</span> bslbf
    <span class="pl-c1">PCR_PID</span>                     <span class="pl-c1">13</span> uimsbf
    reserved                    <span class="pl-c1">4</span> bslbf
    program_info_length         <span class="pl-c1">12</span> uimsbf
    <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span>program_info_length; i<span class="pl-k">++</span>) {
        descriptor()
    }
    <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>;i<span class="pl-k">&lt;</span>section_length<span class="pl-k">-</span>program_info_length<span class="pl-k">-</span><span class="pl-c1">4</span><span class="pl-k">-</span><span class="pl-c1">9</span>;i<span class="pl-k">++</span>)<span class="pl-c">/*streams*/</span> {
        stream_type             <span class="pl-c1">8</span> uimsbf
        reserved                <span class="pl-c1">3</span> bslbf
        elementary_PID          <span class="pl-c1">13</span> uimsnf
        reserved                <span class="pl-c1">4</span> bslbf
        <span class="pl-smi">ES_info_length</span>          <span class="pl-c1">12</span> uimsbf
        <span class="pl-k">for</span> (i<span class="pl-k">=</span><span class="pl-c1"></span>; i<span class="pl-k">&lt;</span><span class="pl-smi">ES_info_length</span>; i<span class="pl-k">++</span>) {
            descriptor()
        }
    }
    <span class="pl-c1">CRC_32</span> <span class="pl-c1">32</span> rpchof
}</pre>
</div>

#### 

<div class="markdown-body">
  <h4>
    Text View
  </h4>
  
  <div class="highlight highlight-java">
    <pre>tkgs_info                                                                       
  reserved                                                                      <span class="pl-c1"></span>          [0x0         ]
  tkgs_info_descriptors_length                                                  <span class="pl-c1">32</span>         [0x20        ]
  descriptors                                                                   
    multilingual_user_message_descriptor                                        
      descriptor_tag                                                            <span class="pl-c1">144</span>        [0x90        ]
      descriptor_length                                                         <span class="pl-c1">27</span>         [0x1B        ]
      languages                                                                 
        language                                                                
          <span class="pl-smi">ISO_639_language_code</span>                                                 <span class="pl-c1">5526866</span>    [0x545552    ]
          message_length                                                        <span class="pl-c1">23</span>         [0x17        ]
          <span class="pl-k">char</span>                                                                  <span class="pl-c1">32</span> <span class="pl-c1">36</span> 2E <span class="pl-c1">30</span> <span class="pl-c1">32</span> 2E <span class="pl-c1">32</span> <span class="pl-c1">30</span> <span class="pl-c1">31</span> <span class="pl-c1">35</span> <span class="pl-c1">20</span> <span class="pl-c1">47</span> <span class="pl-c1">FC</span> 6E <span class="pl-c1">63</span> <span class="pl-c1">65</span> 
                                                                                6C <span class="pl-c1">20</span> 4C <span class="pl-c1">69</span> <span class="pl-c1">73</span> <span class="pl-c1">74</span> <span class="pl-c1">65</span>
    tkgs_standard_descriptor                                                    
      descriptor_tag                                                            <span class="pl-c1">145</span>        [0x91        ]
      descriptor_length                                                         <span class="pl-c1">1</span>          [0x1         ]
      interface_version                                                         <span class="pl-c1">17</span>         [0x11        ]
reserved                                                                        <span class="pl-c1"></span>          [0x0         ]
broadcast_source_loop_length                                                    <span class="pl-c1">46289</span>      [0xB4D1      ]
broadcast_source_loops                                                          
  broadcast_source_loop                                                         
    broadcast_source_descriptors_length                                         <span class="pl-c1">20</span>         [0x14        ]
    descriptors                                                                 
      satellite_broadcast_source_descriptor                                     
        descriptor_tag                                                          <span class="pl-c1">160</span>        [0xA0        ]
        descriptor_length                                                       <span class="pl-c1">18</span>         [0x12        ]
        reserved                                                                <span class="pl-c1"></span>          [0x0         ]
        name_length                                                             <span class="pl-c1">11</span>         [0xB         ]
<span class="pl-c1">...</span></pre>
  </div>
</div>

<div id="wiki-footer" class="gollum-markdown-content boxed-group">
</div>

<pre><a href="https://github.com/flylb1/TSParser/wiki/Extension-For-TURKSAT"> Wiki link</a></pre>