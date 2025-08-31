---
layout: home
title: Home
---

# Marjan Stoimchev
**PhD Researcher in Machine Learning & Remote Sensing**  
Jožef Stefan Institute, Ljubljana, Slovenia

---

## About Me

I am a PhD researcher at the Jožef Stefan Institute, specializing in machine learning, computer vision, and remote sensing image analysis. My research focuses on developing innovative methods for supervised and semi-supervised hierarchical multi-label classification using deep learning approaches.

Currently pursuing a PhD in Information and Communication Technologies, I work on advancing the state-of-the-art in remote sensing image analysis through novel combinations of classical machine learning and deep learning methods, with particular emphasis on masked autoencoders and self-supervised learning.

### Research Interests
- Deep Learning & Neural Networks
- Remote Sensing Image Analysis  
- Semi-supervised & Self-supervised Learning
- Medical Image Analysis
- Computer Vision Applications

---

## Recent Publications

{% assign recent_pubs = site.publications | sort: 'year' | reverse | limit: 4 %}
{% for pub in recent_pubs %}
  {% include publication-card.html publication=pub %}
{% endfor %}

[📚 View All Publications](/publications/) | [Google Scholar](https://scholar.google.com/citations?user={{ site.google_scholar_id }}&hl=en)

---

## Featured Projects

{% assign featured_projects = site.projects | where: 'featured', true | limit: 3 %}
{% for project in featured_projects %}
  {% include project-card.html project=project %}
{% endfor %}

[🔍 View All Projects](/projects/)

---

## Technical Skills

**Programming Languages:** Python, MATLAB  
**Deep Learning:** PyTorch, Keras, TensorFlow, HuggingFace Transformers  
**Computer Vision:** OpenCV, Medical Image Analysis, Remote Sensing  
**Data Science:** NumPy, SciPy, Pandas, Matplotlib, Scikit-Learn  
**Specialized:** PyTorch Geometric, Semi-supervised Learning, Self-supervised Learning  
**Tools:** Git, LaTeX, MS Office, VBA

---

## Education

**PhD in Information and Communication Technologies** (2021-2025)  
*Jožef Stefan Institute, Ljubljana, Slovenia*

**MSc in Electrical Engineering** (2018-2021)  
*Faculty of Electrical Engineering, University of Ljubljana*  
🏆 Prešern Award for Best Master's Thesis  
*Thesis: Learning to Combine Local and Global Image Information for Contactless Palmprint Recognition*

**BSc in Electrical Engineering** (2013-2018)  
*Ss. Cyril and Methodius University of Skopje, North Macedonia*  
*Specialization: Computer System Engineering, Automation and Robotics*
