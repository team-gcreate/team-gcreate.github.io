---
id: 717
title: 'Private Paste &#8211; Pastie'
date: 2015-09-26T12:06:21+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=717
permalink: /index.php/archives/717
categories:
  - libgdx Ref
---
[Private Paste &#8211; Pastie](http://pastie.org/private/mfb3keufurzp5thfszndcq#2-3,5,8-9,30,37-109).

&nbsp;

<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>
      <pre class="textmate-source-numbers">1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
</pre>
    </td>
    
    <td>
      <pre class="sunburst"><span class="meta meta_package meta_package_java"><span class="keyword keyword_other keyword_other_package keyword_other_package_java">package</span> <span class="storage storage_modifier storage_modifier_package storage_modifier_package_java">carelesslabs</span>;</span>

<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">java.io.BufferedReader</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">java.io.IOException</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">java.io.InputStreamReader</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">java.io.OutputStreamWriter</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">java.net.MalformedURLException</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">java.net.URL</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">java.net.URLConnection</span>;</span>

<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">com.badlogic.gdx.Gdx</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">com.badlogic.gdx.Net.HttpMethods</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">com.badlogic.gdx.Net.HttpRequest</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">com.badlogic.gdx.Net.HttpResponse</span>;</span>
<span class="meta meta_import meta_import_java"><span class="keyword keyword_other keyword_other_import keyword_other_import_java">import</span> <span class="storage storage_modifier storage_modifier_import storage_modifier_import_java">com.badlogic.gdx.Net.HttpResponseListener</span>;</span>

	
<span class="meta meta_class meta_class_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_class meta_class_identifier meta_class_identifier_java"><span class="storage storage_modifier storage_modifier_java">class</span> <span class="entity entity_name entity_name_type entity_name_type_class entity_name_type_class_java">Parse</span></span> <span class="meta meta_definition meta_definition_class meta_definition_class_implemented meta_definition_class_implemented_interfaces meta_definition_class_implemented_interfaces_java"><span class="storage storage_modifier storage_modifier_implements storage_modifier_implements_java">implements</span> <span class="entity entity_other entity_other_inherited-class entity_other_inherited-class_java">HttpResponseListener</span> </span><span class="meta meta_class meta_class_body meta_class_body_java">{
	
	<span class="meta meta_definition meta_definition_variable meta_definition_variable_java"><span class="storage storage_modifier storage_modifier_java">private</span> <span class="storage storage_type storage_type_java">URL</span> <span class="meta meta_definition meta_definition_variable meta_definition_variable_name meta_definition_variable_name_java">url</span> <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="constant constant_language constant_language_java">null</span></span>;
	<span class="meta meta_definition meta_definition_variable meta_definition_variable_java"><span class="storage storage_modifier storage_modifier_java">private</span> <span class="storage storage_type storage_type_java">URLConnection</span> <span class="meta meta_definition meta_definition_variable meta_definition_variable_name meta_definition_variable_name_java">conn</span> <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="constant constant_language constant_language_java">null</span></span>;
	<span class="storage storage_modifier storage_modifier_java">private</span> <span class="storage storage_type storage_type_java">String</span> app_id;
	<span class="storage storage_modifier storage_modifier_java">private</span> <span class="storage storage_type storage_type_java">String</span> app_key;
	
	<span class="meta meta_method meta_method_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_method meta_method_identifier meta_method_identifier_java"><span class="entity entity_name entity_name_function entity_name_function_java">Parse</span>()</span><span class="meta meta_method meta_method_body meta_method_body_java">{	
		<span class="keyword keyword_control keyword_control_catch-exception keyword_control_catch-exception_java">try</span> {
			url <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">URL</span>(<span class="string string_quoted string_quoted_double string_quoted_double_java">"https://api.parse.com/1/classes/score/"</span>);
			app_id <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="string string_quoted string_quoted_double string_quoted_double_java">"foo"</span>;
			app_key <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="string string_quoted string_quoted_double string_quoted_double_java">"bar"</span>;		
		} <span class="keyword keyword_control keyword_control_catch-exception keyword_control_catch-exception_java">catch</span> (<span class="storage storage_type storage_type_java">MalformedURLException</span> e) {
			<span class="storage storage_type storage_type_java">System</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">println(e<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>getMessage())</span>;
		}
	</span>}</span>
	
	<span class="meta meta_method meta_method_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_method meta_method_return-type meta_method_return-type_java"><span class="storage storage_type storage_type_primitive storage_type_primitive_array storage_type_primitive_array_java">void</span> </span><span class="meta meta_method meta_method_identifier meta_method_identifier_java"><span class="entity entity_name entity_name_function entity_name_function_java">add_net_score</span>()</span><span class="meta meta_method meta_method_body meta_method_body_java">{
		<span class="comment comment_line comment_line_double-slash comment_line_double-slash_java">// LibGDX NET CLASS</span>
		<span class="storage storage_type storage_type_java">HttpRequest</span> httpPost <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">HttpRequest</span>(<span class="storage storage_type storage_type_java">HttpMethods</span><span class="constant constant_other constant_other_java"><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>POST</span>);
		httpPost<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setUrl(<span class="string string_quoted string_quoted_double string_quoted_double_java">"https://api.parse.com/1/classes/score/"</span>)</span>;
		httpPost<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setHeader(<span class="string string_quoted string_quoted_double string_quoted_double_java">"Content-Type"</span>, <span class="string string_quoted string_quoted_double string_quoted_double_java">"application/json"</span>)</span>;
		httpPost<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setHeader(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-Application-Id"</span>, app_id)</span>;
		httpPost<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setHeader(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-REST-API-Key"</span>, app_key)</span>;
		httpPost<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setContent(<span class="string string_quoted string_quoted_double string_quoted_double_java">"{<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>score<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>: 1337, <span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>user<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>: <span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>CarelessLabs Java<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>}"</span>)</span>;
		<span class="storage storage_type storage_type_java">Gdx</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>net<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">sendHttpRequest(httpPost,<span class="storage storage_type storage_type_java">Parse</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="variable variable_language variable_language_java">this</span>)</span>;
	</span>}</span>
	
	<span class="meta meta_method meta_method_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_method meta_method_return-type meta_method_return-type_java"><span class="storage storage_type storage_type_primitive storage_type_primitive_array storage_type_primitive_array_java">boolean</span> </span><span class="meta meta_method meta_method_identifier meta_method_identifier_java"><span class="entity entity_name entity_name_function entity_name_function_java">add_score</span>()</span><span class="meta meta_method meta_method_body meta_method_body_java">{
		<span class="comment comment_line comment_line_double-slash comment_line_double-slash_java">// USING JAVA IO AND NET CLASS</span>
		<span class="keyword keyword_control keyword_control_catch-exception keyword_control_catch-exception_java">try</span> {
			conn <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> url<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">openConnection()</span>;
			conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setDoOutput(<span class="constant constant_language constant_language_java">true</span>)</span>;
			conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setRequestProperty(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-Application-Id"</span>, app_id)</span>;
			conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setRequestProperty(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-REST-API-Key"</span>, app_key)</span>;
			conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setRequestProperty(<span class="string string_quoted string_quoted_double string_quoted_double_java">"Content-type"</span>, <span class="string string_quoted string_quoted_double string_quoted_double_java">"application/json"</span>)</span>;			
			<span class="storage storage_type storage_type_java">OutputStreamWriter</span> out <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">OutputStreamWriter</span>(conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">getOutputStream()</span>);
			out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">write(<span class="string string_quoted string_quoted_double string_quoted_double_java">"{<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>score<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>: 1337, <span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>user<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>: <span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>CarelessLabs GDX<span class="constant constant_character constant_character_escape constant_character_escape_java">\"</span>}"</span>)</span>;
			
			out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">close()</span>;
			<span class="storage storage_type storage_type_java">BufferedReader</span> in <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">BufferedReader</span>(<span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">InputStreamReader</span>(conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">getInputStream()</span>));
			<span class="storage storage_type storage_type_java">String</span> decodedString;
			<span class="keyword keyword_control keyword_control_java">while</span> ((decodedString <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> in<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">readLine()</span>) <span class="keyword keyword_operator keyword_operator_comparison keyword_operator_comparison_java">!=</span> <span class="constant constant_language constant_language_java">null</span>) {
				<span class="storage storage_type storage_type_java">System</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">println(decodedString)</span>;
			}
			in<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">close()</span>;
			<span class="keyword keyword_control keyword_control_java">return</span> <span class="constant constant_language constant_language_java">true</span>;
		} <span class="keyword keyword_control keyword_control_catch-exception keyword_control_catch-exception_java">catch</span> (<span class="storage storage_type storage_type_java">IOException</span> e) {
			<span class="storage storage_type storage_type_java">System</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">println(e<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>getMessage())</span>;
			<span class="keyword keyword_control keyword_control_java">return</span> <span class="constant constant_language constant_language_java">false</span>;
		}	
	</span>}</span>
	
	<span class="meta meta_method meta_method_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_method meta_method_return-type meta_method_return-type_java"><span class="storage storage_type storage_type_primitive storage_type_primitive_array storage_type_primitive_array_java">boolean</span> </span><span class="meta meta_method meta_method_identifier meta_method_identifier_java"><span class="entity entity_name entity_name_function entity_name_function_java">get_score</span>()</span><span class="meta meta_method meta_method_body meta_method_body_java">{
		<span class="comment comment_line comment_line_double-slash comment_line_double-slash_java">// USING JAVA IO AND NET CLASS</span>
		<span class="keyword keyword_control keyword_control_catch-exception keyword_control_catch-exception_java">try</span> {       
			conn <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> url<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">openConnection()</span>;
			conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setDoOutput(<span class="constant constant_language constant_language_java">true</span>)</span>;
			conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setRequestProperty(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-Application-Id"</span>, app_id)</span>;
			conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setRequestProperty(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-REST-API-Key"</span>, app_key)</span>;
			<span class="storage storage_type storage_type_java">BufferedReader</span> in <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">BufferedReader</span>(<span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">InputStreamReader</span>(conn<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">getInputStream()</span>));
			<span class="storage storage_type storage_type_java">String</span> inputLine;
			<span class="keyword keyword_control keyword_control_java">while</span> ((inputLine <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> in<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">readLine()</span>) <span class="keyword keyword_operator keyword_operator_comparison keyword_operator_comparison_java">!=</span> <span class="constant constant_language constant_language_java">null</span>) 
			  <span class="storage storage_type storage_type_java">System</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">println(inputLine)</span>;
	    	  in<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">close()</span>;
	    	<span class="keyword keyword_control keyword_control_java">return</span> <span class="constant constant_language constant_language_java">true</span>;
		} <span class="keyword keyword_control keyword_control_catch-exception keyword_control_catch-exception_java">catch</span> (<span class="storage storage_type storage_type_java">IOException</span> e) {
			<span class="storage storage_type storage_type_java">System</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">println(e<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>getMessage())</span>;
			<span class="keyword keyword_control keyword_control_java">return</span> <span class="constant constant_language constant_language_java">false</span>;
		}		
	</span>}</span>
	
	<span class="meta meta_method meta_method_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_method meta_method_return-type meta_method_return-type_java"><span class="storage storage_type storage_type_primitive storage_type_primitive_array storage_type_primitive_array_java">void</span> </span><span class="meta meta_method meta_method_identifier meta_method_identifier_java"><span class="entity entity_name entity_name_function entity_name_function_java">get_net_score</span>()</span><span class="meta meta_method meta_method_body meta_method_body_java">{
		<span class="comment comment_line comment_line_double-slash comment_line_double-slash_java">// LibGDX NET CLASS</span>
		<span class="storage storage_type storage_type_java">HttpRequest</span> httpGet <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> <span class="keyword keyword_control keyword_control_new keyword_control_new_java">new</span> <span class="storage storage_type storage_type_java">HttpRequest</span>(<span class="storage storage_type storage_type_java">HttpMethods</span><span class="constant constant_other constant_other_java"><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>GET</span>);
		httpGet<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setUrl(<span class="string string_quoted string_quoted_double string_quoted_double_java">"https://api.parse.com/1/classes/score/"</span>)</span>;
		httpGet<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setHeader(<span class="string string_quoted string_quoted_double string_quoted_double_java">"Content-Type"</span>, <span class="string string_quoted string_quoted_double string_quoted_double_java">"application/json"</span>)</span>;
		httpGet<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setHeader(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-Application-Id"</span>, app_id)</span>;
		httpGet<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">setHeader(<span class="string string_quoted string_quoted_double string_quoted_double_java">"X-Parse-REST-API-Key"</span>, app_key)</span>;
		<span class="storage storage_type storage_type_java">Gdx</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>net<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">sendHttpRequest(httpGet,<span class="storage storage_type storage_type_java">Parse</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="variable variable_language variable_language_java">this</span>)</span>;
	</span>}</span>

	<span class="storage storage_type storage_type_annotation storage_type_annotation_java">@Override</span>
	<span class="meta meta_method meta_method_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_method meta_method_return-type meta_method_return-type_java"><span class="storage storage_type storage_type_primitive storage_type_primitive_array storage_type_primitive_array_java">void</span> </span><span class="meta meta_method meta_method_identifier meta_method_identifier_java"><span class="entity entity_name entity_name_function entity_name_function_java">handleHttpResponse</span>(<span class="storage storage_type storage_type_java">HttpResponse</span> <span class="variable variable_parameter variable_parameter_java">httpResponse</span>)</span> <span class="meta meta_method meta_method_body meta_method_body_java">{
        <span class="storage storage_modifier storage_modifier_java">final</span> <span class="storage storage_type storage_type_primitive storage_type_primitive_array storage_type_primitive_array_java">int</span> statusCode <span class="keyword keyword_operator keyword_operator_assignment keyword_operator_assignment_java">=</span> httpResponse<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">getStatus()</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">getStatusCode()</span>;
        <span class="storage storage_type storage_type_java">System</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">println(statusCode <span class="keyword keyword_operator keyword_operator_arithmetic keyword_operator_arithmetic_java">+</span> <span class="string string_quoted string_quoted_double string_quoted_double_java">" "</span> <span class="keyword keyword_operator keyword_operator_arithmetic keyword_operator_arithmetic_java">+</span> httpResponse<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>getResultAsString())</span>;
	</span>}</span>

	<span class="storage storage_type storage_type_annotation storage_type_annotation_java">@Override</span>
	<span class="meta meta_method meta_method_java"><span class="storage storage_modifier storage_modifier_java">public</span> <span class="meta meta_method meta_method_return-type meta_method_return-type_java"><span class="storage storage_type storage_type_primitive storage_type_primitive_array storage_type_primitive_array_java">void</span> </span><span class="meta meta_method meta_method_identifier meta_method_identifier_java"><span class="entity entity_name entity_name_function entity_name_function_java">failed</span>(<span class="storage storage_type storage_type_java">Throwable</span> <span class="variable variable_parameter variable_parameter_java">t</span>)</span> <span class="meta meta_method meta_method_body meta_method_body_java">{
		 <span class="storage storage_type storage_type_java">System</span><span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>out<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span><span class="meta meta_method-call meta_method-call_java">println(t<span class="keyword keyword_operator keyword_operator_dereference keyword_operator_dereference_java">.</span>getMessage())</span>;
	</span>}</span>
</span>}</span></pre>
    </td>
  </tr>
</table>