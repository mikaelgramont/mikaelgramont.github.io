---
layout: main
title: Presentation for The New York Times 
---

<style>
hr {
  opacity: .2;
  margin: 2rem auto 1rem;
  width: 50%;
  min-width: 250px;
}

.low-header {
  margin-top: 0;
}

.mid-header {
  margin-top: 1rem;
}

.high-header {
  margin-top: 2rem;
}

.value {
  font-weight: bold;
}

.wrapping-container {
  display: flex;
  flex-wrap: wrap;
}

.ratio {
  width: 320px;
  margin: 0 auto;
}

.toolbox-invest {
  display: flex;
  flex-wrap: wrap;
}
.toolbox-container {
  flex: 2 0;
  min-width: 16rem;
}

.invest {
  flex: 1 0;
  min-width: 12rem;
}

@media screen and (min-width: 800px) {
    .wrapping-container {
      flex-wrap: nowrap;
    }
    .ratio {
      width: 400px;
      margin-left: 40px;
    }
}

.projects,
.toolbox {
  list-style: none;
  margin: 0;
  padding: 0;
}
.project-title {
  display: inline;
  font-size: 16px;
}
.project-title:hover {
  cursor: pointer;
}
.project-date, .tools {
  font-family: Muli, sans-serif;
  font-weight: normal;
}
.toolbox {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;  
  padding: .5rem;
  justify-content: space-around;
  align-items: center;
}
.toolbox li {
    display: contents;
}

.timeline-section {
    position: relative;
}

.experience {
    position: absolute;
    top: -2.6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 3.9rem;
    margin: .5rem auto;
    text-align: center;
    line-height: 1.3rem;
}
.timeline:hover {
    cursor: pointer;
}
.role,
.label,
.location {
    margin: 0;
}
.role,
.label {
    font-weight: bold;
}
.location {
    font-weight: normal;
}

.timeline-table {
    margin: 1rem auto 0;
}
.timeline-table td {
    border: 1px solid #333;
    border-color: var(--font-color);
    padding: 3px;
    font-size: 1rem;
    font-size: clamp(.75rem, 1.5vw, 1.5rem);
}
.invest-list {
    margin: 0;
}
{% include case-studies/case-studies.css %}
</style>

# Hello, NYT!
This is a page I put together to introduce myself and present some projects that you might find relevant.

<h2 id="so-who-is-this-guy" class="high-header inverted">So who is this guy?</h2>
<section>
  <p>My name is Mikaël Gramont, I'm an experienced Web Developer.</p>
  <div class="wrapping-container intro">
    <div class="me">
      <h3 id="background" class="low-header">Background</h3>
      <ul>
        <li>In the industry since 2007</li>
        <li>Confortable on very small and <em>really large scale</em> projects</li>
        <li>Love the Web Platform</li>
        <li><em>Performance</em>, <em>a11y</em> and <em>progressive enhancement</em></li>
        <li>Currently residing and freelancing in France 🇫🇷</li>
      </ul>
    </div>
    <div class="ratio">
      {% include me/ratio.svg %}  
    </div>
  </div>
</section>

<section class="timeline-section">  
  <h3 id="background" class="high-header">Experience</h3>
  {% include me/timeline.html %}
</section>

<hr />

{% include me/toolbox-invest.html %}

<hr />

{% include me/curious-values.html %}

<h2 id="personal-projects-portfolio" class="high-header inverted">Hand-picked projects</h2>
Some of my personal and professional work:
<ul class="projects">
  <li>
    {% include case-studies/surfingdirt.html %}
  </li>
  <li>
    {% include case-studies/arts-and-culture.html %}
  </li>
  <li>
    {% include case-studies/draw-me-a-kicker.html %}
  </li>
  <li>
    {% include case-studies/gangnam-style.html %}
  </li>
</ul>

<h2 id="thanks" class="high-header inverted">Thanks for your time!</h2>
<p>
    For more info, check out my <a href="/resume">full résumé page here</a>.
</p>

<script>
{% include me/timeline.js %}
</script>