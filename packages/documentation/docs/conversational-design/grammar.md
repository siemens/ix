---
sidebar_position: 5
title: Grammar
---
# Wording and grammar

## Overview 

The key to chatbot wording and grammar use in industrial contexts is simplicity. Use clear and concise grammar and wording for all responses without idiomatic language or slang. Instead, focus on domain-specific vocabulary. We recommend using both the Defining conversations section to support your creation of sample dialogs and our UX Writing style guide for grammar and wording support.   

## Generative AI and language 

Current generative models need prompts to ensure they respond appropriately for the industrial scenario they’re in. Teams and developers train chatbots with the right datasets and NLP components to fine tune and generate suitable responses. This means individual companies, projects and software can tailor their chatbot vocabulary and define rules for sentence structure and task-specific grammar. 

### Pre-trained language models  
Most chatbots use a pre-trained model that knows grammar and syntax from a large corpus (a collection of texts for language research). It already has linguistic knowledge which means teams can focus on domain-specific data to further refine their chatbot’s language capabilities. With advances in AI and NLP models, teams will no longer need to explain or give their chatbots specific grammar structures or responses. As modern chatbots consider context, user intent and conversational flow, they will be able to generate more meaningful responses and adapt to user input dynamically. 

## Wording 

### Concise
Use concise and short responses while considering device type and use case. Lengthy responses overwhelm users and take up precious space. However, we do not recommend using one-word responses like “Yes” and “No”. Always provide useful context for informative and engaging interactions. 
 
**User**: Is there maintenance scheduled today?  
**Chatbot:** Yes. 

Although the chatbot responds accurately and concisely, it’s robotic, unnatural and does not encourage engagement. 

**User:** Is there maintenance scheduled today?   
**Chatbot:** Yes. Zone 1 and 3 have maintenance today. Shall I open the maintenance log? 
**User:** Yes please. 

Here the chatbot knows to be concise but informative, based on its knowledge of the user’s working environment. 

### Polite
Always use polite language such as “Please wait a moment.” and “Thank you for your patience.” However, only apologize when it’s clear the user is dissatisfied or the chatbot has provided incorrect information. 

**User:** That’s not the right number.  
**Chatbot:** I apologize. As an AI language model, I am constantly looking to develop. Please feel free to ask something else and I’ll do my best to answer. 

Here the chatbot apologizes immediately, makes their limitations transparent and then works to engage the user again. 

### Domain-specific 
Use the language of your users’ industrial working environment. If your chatbot is within a power plant, for example, it should be trained to understand that the word “current” means both the present and an electrical current. 

**User:** What’s the current of the relay?  
**Chatbot:** The current status of the relay is online and ready for operation.   
**User:** That’s not what I mean.  

Here the chatbot mistakenly assumed the user missed the word “status” in their query and provided an incorrect response, not knowing enough about user to answer accurately. 

**User:** What’s the current of the relay?  
**Chatbot:** It’s 50 mA (milliamperes). If you need more detailed information, feel free to ask.

Here the chatbot knows the word “current” refers to voltage as it’s a domain-specific word that’s often used within their user queries. 

## Grammar 

### Pronouns 
Chatbots typically refer to themselves as “I” and always avoid gender-specific language and terms. 

**Chatbot:** Hello Susanne! I’m your industrial assistant. How can I help you today, my dear? 

Here the chatbot has used the name and the phrase “my dear” to make assumptions about the user. It’s essential to have inclusive, unbiased and neutral responses. 

### Question forms
Use well-structured questions forms in your chatbot responses to clarify user intent. Within industrial contexts, questions help to structure and funnel complex requests, such as PLC engineering, which involves multiple steps and changes. 

Chatbots should use questions to engage the user and move interactions forward: 

How can I assist you today?   
Is there anything else I can assist you with?   
Would you like me to …?   
Shall I continue?   

For more question examples within specific communicative functions, see the designing conversations section.

### Contractions 
We recommend using contractions (connecting words such as it is – it’s) as these sound less formal and more conversational. Unlike in our UI writing rules, we recommend using negative contractions such as “can’t” instead of “cannot” as these sound more personable and natural within chatbots.  

**User:** Show me my tasks for today  
**Chatbot:** I cannot process your request at the moment.  

**User:** Show me my tasks for today  
**Chatbot:** I can’t process your request right now. 

Although both express the same meaning, using “cannot” sounds stricter and more robotic.  

### Discourse markers
Probably the most important language feature to enhance engagement with your users is discourse markers. These are words or phrases that connect responses and express tone, emotion and acknowledgement, such as certainly, of course, right, ok, etc. They help maintain a conversation flow with users and work as natural turn-taking mechanisms to encourage human to machine interaction. 


**User:** Can you provide more details about our pricing plans?  
**Chatbot:** Certainly! We have three pricing tiers: Basic, Premium, and Enterprise.

**User:** Is there a trial period for your software?  
**Chatbot:** Of course! You can try our software free for 14 days.

**User:** Can I customize the dashboard layout?  
**Chatbot:** Absolutely! You can rearrange widgets and choose your preferred layout.

**User:** Are there any discounts for adding user licenses?  
**Chatbot:** Indeed! Every additional 10 user licenses offer a 2% discount.

## Punctuation

We recommend a minimal approach to punctuation in terms of how chatbots use it and the level expected by users’ queries. Unnecessary punctuation, such as excessive exclamation marks, add to our users’ cognitive load. 

**User:** Can you tell me what assigned tasks I have today?  
**Chatbot:** Your tasks!?! Sure!!!!! Not a problem!!! 

## Emojis 

Although emojis are used in many chatbots to enhance communications to add some emotion and tone to their responses, they are more appropriate for social media and messaging. Using emojis in industrial settings can be seen as minimizing the work and environment of the user. Consequently, we do not recommend using emojis at all for industrial software applications. 

**User:** There’s an issue with the storage tank  
**Chatbot:** Oh no! 😱 The tank is broken! 🛠️ Don’t worry; we’ll fix it soon! 😊 

Here if the chatbot is assisting with technical troubleshooting in a manufacturing plant, and a worker is reporting an issue with a manufacturing machine, this undermines the seriousness of the situation. 

**User:** There’s an issue with the storage tank    
**Chatbot:** Thank you for reporting the issue. Our maintenance team is on it. Feel free to give me more details to pass on to the team. 

Here the response is more concise, professional and shows the chatbot is aware of the working environment and the seriousness of the situation. 

## Dos and Don'ts

- Do use your brand’s voice rules to shape your chatbot voice
- Do work with developers to support data set collection
- Don’t assume your users write correctly or accurately
- Don’t forget to implement new NLP models as they advance 