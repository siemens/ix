---
sidebar_position: 3
title: Confirming requests
---
# Confirming requests 
## Overview 

Chatbots in industrial applications are sometimes required to carry out long-lasting and consequential changes to systems. Changing a system incorrectly can lead to substantial issues within a plant or a factory, such as not connecting a device properly, resetting a password without informing users, or onboarding new roles or user permissions incorrectly. To mitigate these risks, chatbots should always confirm user requests. 
## Examples 

**Chatbot:** Do you want me to implement this?   
**User:** Yes.  
**Chatbot:** Shall I continue?  
**User:** Yes.   
**Chatbot:** Can I implement now with changes effective immediately?   
**User:** Yes.   
**Chatbot:** Are you sure? Changing user permissions may lead to accessibility issues.   
**User:** Yes

This interaction is frustrating and inefficient. It seems as if the chatbot does not trust the request and therefore the user. This would break trust between human and machine and result in a negative user experience. We recommend asking for confirmation only once and, if necessary, giving warnings or alerting users to possible consequences at the same time. 

**User:** Change elena_harrison@factory.com from general user to admin.   
**Chatbot:** Sure. Changing from general user to admin means they can edit other user roles and permissions for all factories. Shall I continue?   
**User:** Yes  
**Chatbot:** Ok, elena_harrison@factory.com is now an admin. Can I assist you with anything else? 

In this interaction we see a simple request for confirmation before completing the task. The chatbot clarifies the user knows the consequences and then fulfills the task. In these types of interactions, asking for confirmation has similar advantages to acknowledging users; it further removes doubt and builds user confidence that the chatbot has correctly comprehended the query and is able to respond accurately.  
## Dos and Don’ts

-	Do make all confirmations clear and transparent before processing tasks  
-	Do mitigate risks associated with making changes to systems or processes  
-	Do add warnings and consequences for significant or hazardous changes  
-	Don’t ask for confirmation more than once 
