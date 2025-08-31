---
layout: default
---

<div class="hero">
  <img src="/assets/img/marjan_img.jpg" alt="Marjan Stoimchev" class="profile-img">
  <div class="hero-text">
    <h1>Marjan Stoimchev</h1>
    <p class="title">PhD Researcher in Machine Learning</p>
    <p class="affiliation">Jožef Stefan Institute, Ljubljana</p>
    {% include social-links.html %}
  </div>
</div>

## Research Interests
Machine Learning, Deep Learning, Remote Sensing, Computer Vision, Semi-supervised Learning

## Recent Publications
{% for pub in site.data.publications limit:3 %}
  {% include publication-card.html publication=pub %}
{% endfor %}

[View all publications →](/publications/)

## Featured Projects
{% for project in site.data.projects %}
  {% if project.featured %}
    {% include project-card.html project=project %}
  {% endif %}
{% endfor %}

[View all projects →](/projects/)
