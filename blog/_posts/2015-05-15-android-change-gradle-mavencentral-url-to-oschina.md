---
id: 545
title: 'gradle &#8211; Change Gradle mavenCentral URL to oschina'
date: 2015-05-15T10:25:48+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=545
permalink: /index.php/archives/545
categories:
  - Other
---
Create gradle.properties file and there add this line:
  
REPO_URL=http://maven.oschina.net/content/groups/public

In all other build.gradle files copy the following:

repositories {
      
maven {
          
url project.REPO_URL
      
}
  
}