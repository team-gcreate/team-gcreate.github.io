---
id: 135
title: BitWise Parser
date: 2015-03-30T14:40:27+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=135
permalink: /index.php/archives/135
categories:
  - DTV
---
In DTV field, we often need to analyze packet stream.
  
The packet&#8217;s syntax is as follows

[java]
  
transport_packet(){
    
sync_byte 8 bslbf
    
transport\_error\_indicator 1 bslbf
    
payload\_unit\_start_indicator 1 bslbf
    
transport_priority 1 bslbf
    
PID 13 uimsbf
    
transport\_scrambling\_control 2 bslbf
    
adaptation\_field\_control 2 bslbf
    
continuity_counter 4 uimsbf
    
if(adaptation\_field\_control==&#8217;10&#8217; || adaptation\_field\_control==&#8217;11&#8217;){
      
adaptation_field()
    
}
    
if(adaptation\_field\_control==&#8217;01&#8217; || adaptation\_field\_control==&#8217;11&#8217;) {
      
for (i=0;i<N;i++){
        
data_byte 8 bslbf
      
}
    
}
  
}
  
[/java]

A simple algorithm proposed here：

[java]
  
public Object parseData(int bitused, boolean parseBuffer, boolean skip) throws Exception { //
      
Object obj = null;
      
needsBits = bitused;
      
// System.out.print(token + " " + validBitPos + " " + needsBits);
      
allNeedsBits = validBitPos + needsBits;
      
if (parseBuffer) {
          
if (bitused == 0) {
              
return null;
          
}
          
if (allNeedsBits <= 8) {
              
short _short = (short) (//
              
(buffer[token] & ((0x1 << (8 &#8211; validBitPos)) &#8211; 1)) >> (8 &#8211; needsBits &#8211; validBitPos)//
              
);
              
_short &= 0x00FF;
              
obj = new Integer(_short);
          
} else if (allNeedsBits <= 16) {
              
int _int = (int) ((//
              
(buffer[token] & 0xff) << 8) | //
              
(buffer[token + 1] & 0xFF));
              
\_int = (int) ((\_int & ((0x1 << (16 &#8211; validBitPos)) &#8211; 1)) >> (16 &#8211; needsBits &#8211; validBitPos));
              
obj = new Integer(_int);
          
} else if (allNeedsBits <= 32) {
              
long _long = 0;
              
if (allNeedsBits <= 24) {
                  
_long = (long) (//
                  
((buffer[token] & 0xFF) << 24) | //
                          
((buffer[token + 1] & 0xFF) << 16) | //
                  
((buffer[token + 2] & 0xFF) << 8)); //
              
} else {
                  
_long = (long) (//
                  
((buffer[token] & 0xFF) << 24) | //
                          
((buffer[token + 1] & 0xFF) << 16) | //
                          
((buffer[token + 2] & 0xFF) << 8) | //
                  
((buffer[token + 3] & 0xFF) & 0xFF)//
                  
);
              
}
              
\_long = (long) ((\_long & ((0x1L << (32 &#8211; validBitPos)) &#8211; 1)) >> (32 &#8211; needsBits &#8211; validBitPos));
              
obj = new Long((long) _long);
          
} else {// copy buffer
              
byte[] byteBuffer = new byte[bitused / 8];
              
System.arraycopy(buffer, token, byteBuffer, 0, bitused / 8);
              
obj = byteBuffer;
          
}
      
} else {
          
if (!skip) {
              
byte[] byteBuffer = new byte[bitused / 8];
              
try {
                  
System.arraycopy(buffer, token, byteBuffer, 0, bitused / 8);
              
} catch (Exception e) {
                  
throw e;
              
}
              
obj = byteBuffer;
          
}
      
}

bitUsed += needsBits;
      
token = bitUsed >> 3;
      
validBitPos = bitUsed &#8211; (token << 3);
      
return obj;
  
}
  
[/java]

When we parse packet header,we can simply do as bellow

[java]

private Map<String, Integer> header = new HashMap<String, Integer>();
   
private static byte[] HEADER\_BIT\_DESCRIPT = { 8, 1, 1, 1, 13, 2, 2, 4 };
   
private static String[] HEADER_NAME = {
              
//
              
sync_byte,//
              
transport\_error\_indicator,//
              
payload\_unit\_start_indicator,//
              
transport_priority,//
              
packet_identifier,//
              
transport\_scrambling\_control,//
              
adaptation\_field\_control,//
              
continuity_counter //
   
};

public void parseHeader() { //
          
System.arraycopy(rawData, 0, headerBytes, 0, 4);

SectionParser sectionParser = new SectionParser();
          
sectionParser.setBuffer(headerBytes);

int len = HEADER\_BIT\_DESCRIPT.length;
          
try {
              
for (int i = 0; i < len; i++) {
                  
Integer data = (Integer) sectionParser.parseData(HEADER\_BIT\_DESCRIPT[i]);
                  
header.put(HEADER_NAME[i], data);
              
}
          
} catch (Exception e) {
              
e.printStackTrace();
          
}
      
}
  
[/java]

For more detail,please see [GitHub](https://github.com/flylb1/TSParser/blob/master/src/core/SectionParser.java)