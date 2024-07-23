---
sidebar_position: 2
title: User intent
---
# User intent

## Overview

User intent refers to the main purpose or goal of the user and is directly related to what they want to achieve – whether they’re trying to access information, schedule maintenance, or ask a question about a product or system.

For a chatbot to recognize and establish intent correctly, they need knowledge of the user’s working environment that continuously builds as users give them input. It often requires the chatbot to use follow-up questions to correctly establish intent and then provide the most accurate response. When chatbots are unable to understand user intent, they cannot provide relevant or helpful responses.

## Explicit vs. implicit intent

When a user asks a direct and clear question, user intent is explicit and makes it easier for the chatbot to respond quickly and accurately. When a user asks a more general question or even just enters keywords, user intent is unclear (implicit) requiring more information. Training chatbots to understand both explicit (clear) and implicit (unclear) user intent is essential to provide effective and supportive solutions.

**User intent:** An engineer in a plant needs to install a new gateway  
**User:** I need a step by step guide to installing a gateway  
**Chatbot:** Sure. Here are the steps for installation and a link to the chapter in the user manual.

Here the user intent is explicit and clear, giving the chatbot a clear purpose and goal. The chatbot does not need to ask further questions and can easily and quickly provide an accurate solution.

**User intent:** An engineer in a plant needs to install a new gateway  
**User:** Tell me about gateways  
**Chatbot:** Gateways form a passage between two networks operating with different transmission protocols. It is a piece of software that acts as an entry point to connect different networks or systems.  
**User:** No I need a guide for my gateways  
**Chatbot:** Here’s a link to the user manual for this system.  
**User:** How do I install them?  
**Chatbot:** Here are the steps for installation and a link to the chapter in the user manual.

Here, the user intent is implicit and unclear. The chatbot has interpreted what the user wants and initially provides what it thinks could be the desired response. The user is then required to keep asking and clarifying so the chatbot finally understands intent and provides the desired solution. In this interaction, the user had to work to establish intent, which leads to a frustrating user experience. When we know our users and their working environment, it’s much easier to train our chatbots to comprehend user intent correctly to give them the right response:

**User:** All valves need maintenance next week.  
**Chatbot:** Which day is best for you?  
**User:** Thursday  
**Chatbot:** Ok great. Do you want all valves from all zones scheduled for maintenance?  
**User:** Only zone 3 please  
**Chatbot:** Got it. All valves within zone 3 are scheduled for maintenance next Thursday.

Here we see that although the intent for maintenance is very explicit, the chatbot knows to ask which day and which zones as follow-up questions to provide the most precise solution. The chatbot used its training to build on the user’s intent to create a more supportive and satisfying user experience.

## Benefits of establishing user intent

- **Relevant interactions:** When a chatbot understands user intent and provides relevant responses, it enhances the overall user experience, builds trust and improves satisfaction.
- **Personalized interactions:** When a chatbot collects feedback and trains with user data, it's better able to create personalized interactions.
- **Contextualized interactions:** When a chatbot understands the working environment, it provides context-relevant responses that better support users.
- **Accurate interactions:** When a chatbot can accurately recognize intent, it minimizes misunderstandings and helps reduce errors.

## Dos and Don'ts 

- Do carry out extensive research on user needs and goals 
- Do work with your teams to establish and predict user intent with example dialogs
- Do test your chatbot with explicit and implicit requests to assess evaluation of user intent 
- Don’t assume your users will be explicit about what they need 
- Don’t assume users are skilled at prompting your chatbot 
