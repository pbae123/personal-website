---
title: "Meta Team Lead"
description: "Led a 7-person team to build an ML classifier detecting harmful content across millions of posts, presenting findings to Meta stakeholders"
tags: ["Machine Learning", "Leadership"]
year: 2026
demos:
  - url: "https://drive.google.com/file/d/1xuY0nvRwP13uXD7hI5tdvICGmNK_rCBo/view?resourcekey"
    label: "View Demo" 
semester: Spring 2026
order: 2
---
### My Thoughts: 
- This was my first time leading a group project, and though it was challenging, it was one of the most rewarding experiences of my spring semester. I learned a lot through this project — how to lead, how to teach and guide others, and a lot about myself as well. There were many times when I thought we had hit a brick wall and didn't know what to do next; however, part of being a leader is knowing how to respond so we can finish the job. Having the weight of responsibility and the pressure of delivering definitely added more stress to my life, but the final presentation made it all worth it.

### What we did: 
- Our team was given a real dataset extracted from a fully anonymous social media platform called Whisper (which was taken down years ago). We received 3.9 million lines of data.
- Since these posts were anonymous, a common theme we found was that many people had no filter in terms of what they would post, as one would imagine.
- With this data, we decided it would be best to create an ML classifier targeting five categories: self-harm, depression, aggression, anxiety, and sexually suggestive material, with the idea that Meta would be able to implement this as some sort of API that gets called whenever someone posts on social media. (We learned that Meta has hundreds of these classifiers running for many different categories — kind of cool, yet kind of shocking, because even with these methods of preventing/blocking inappropriate posts, people are still able to bypass them).
- So we built a classifier: first labeling the data using SetFit, then fine-tuning a MentalBERT-based multilabel classifier (no need to reinvent the wheel).
- Achieved a 0.86 micro-F1 score across all five categories.