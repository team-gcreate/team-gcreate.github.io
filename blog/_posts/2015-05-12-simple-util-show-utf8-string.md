---
id: 533
title: Simple Util Show UTF8 String
date: 2015-05-12T18:01:12+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=533
permalink: /index.php/archives/533
categories:
  - DTV
---
This Util convert raw HEX string data to UTF8 format string.

[java]
  
import java.io.UnsupportedEncodingException;

public class Utf8Show {
      
public static void main(String[] args) {
          
String[] rawStr = new String[] {//
          
&#8220;21 22 23 24 25 26 27 28 29 2a 2b 2c 2d 2e 2f 30 31 32 33 34 35 36 37 38 39 3a 3b 3c 3d 3e 3f 40 41 42 43 44 45 46 47 48 49 4a 4b 4c 4d 4e 4f 50 51 52 53 54 55 56 57 58 59 5a 5b 5c 5d 5e 5f 60 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a 7b 7c 7d 7e c2 a0 c2 a4 d8 8c c2 ad d8 9b d8 9f d8 a1 d8 a2 d8 a3 d8 a4 d8 a5 d8 a6 d8 a7 d8 a8 d8 a9 d8 aa d8 ab d8 ac d8 ad d8 ae d8 af d8 b0 d8 b1 d8 b2 d8 b3 d8 b4 d8 b5 d8 b6 d8 b7 d8 b8 d8 b9 d8 ba d9 80 d9 81 d9 82 d9 83 d9 84 d9 85 d9 86 d9 87 d9 88 d9 89 d9 8a d9 8b d9 86 d9 8c d9 88 d9 8d d9 88 d9 8e d9 88 d9 8f d9 88 d9 90 d9 88 d9 91 d9 81 d9 92&#8243;, };

try {
              
for (int i = 0; i < rawStr.length; i++) { String rawString = rawStr[i]; int endIndex = rawString.indexOf(" 00"); if (endIndex != -1) { rawString = rawString.substring(0, endIndex); } String[] strs = rawString.split(" "); byte[] bytes = new byte[strs.length]; for (int j = 0; j < strs.length; j++) { bytes\[j] = Integer.valueOf(strs[j], 16).byteValue(); } System.out.println(); System.out.println("Raw bytes size=" + bytes.length); String s = new String(bytes, "UTF-8"); System.out.println("utf8 string =" + s); System.out.println(s.length()); } } catch (NumberFormatException e) { e.printStackTrace(); } catch (UnsupportedEncodingException e) { e.printStackTrace(); } } } [/java\] \[java\] Raw bytes size=210 utf8 string =!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ ¤،­؛؟ءآأؤإئابةتثجحخدذرزسشصضطظعغـفقكلمنهوىيًنٌوٍوَوُوِوّفْ
  
152
  
[/java]