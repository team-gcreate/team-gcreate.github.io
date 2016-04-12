---
id: 548
title: Basic Binding using RoboVM and libGDXSeven Armed Squid
date: 2015-05-16T11:09:47+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=548
permalink: /index.php/archives/548
categories:
  - libgdx Ref
---
[Basic Binding using RoboVM and libGDXSeven Armed Squid](http://www.sevenarmsquid.com/help/robovmbinding#step14=).

Summary -Click on a step for details

Create a static Objective C library
  
Take only the filename.a archive file from the build
  
Put the filename.a file in your libGDX projectname-robovm/libs/ios folder
  
Edit the robovm.xml in your libGDX projectname-robovm folder to include the <libs>libs/ios/filename.a</libs> within the parent <libs> . . . </lib>s
  
Also be sure to edit and include any additional frameworks within the <frameworks> . . . </frameworks> that are needed in your Objective C code
  
Now we are going to bind it to a Java class, create a empty Java class
  
Type @Library(Library.INTERNAL) @NativeClass above the class declaration
  
Extend your java class with extends NSObject
  
Be sure to be importing all the necessary libraries as we go
  
Make a static field to bind the class, static { ObjCRuntime.bind(nameOfJavaClass.class); }
  
Create a static final ObjC selector and have it register the right ObjC method name
  
private static final Selector selectorName = Selector.register(&#8220;objCMethodName&#8221;);
  
Add a bridge notation, @Bridge
  
create the bridged method, private native static returnType nativeBindingMethodName(javaClassName \_\_self\_\_, Selector \_\_cmd\_\_);
  
Now create the java method, public returnType methodName( {nativeBindingMethodName(this, selectorObject); }
  
Boom Done
  
Credits