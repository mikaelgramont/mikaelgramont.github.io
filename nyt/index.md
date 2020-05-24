---
layout: main
title: Presentation for The New York Times 
---

<style>
hr {
  opacity: .2;
  margin: 1rem auto;
  width: 50%;
  min-width: 250px;
}

.low-header {
  margin-top: 0;
}

.high-header {
  margin-top: 3.5rem;
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

.curious-values {
  justify-content: space-between;
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
  max-width: 600px;
  margin: 0 auto;  
  padding: .5rem;
  justify-content: space-around;
  align-items: center;
}
.toolbox li {
    display: contents;
}

.experience {
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

.timeline-table td {
    border: 1px solid #333;
    border-color: var(--font-color);
    padding: 3px;
    font-size: 1rem;
    font-size: clamp(1rem, 2.5vw, 2rem);
}

</style>

# Hello, NYT!
This is a page I put together to introduce myself and present some projects that you might find relevant.

<h2 id="so-who-is-this-guy" class="high-header">So who is this guy?</h2>
<section>
  <p>My name is Mikaël Gramont, I'm an experienced Web Developer.</p>
  <div class="wrapping-container intro">
    <div class="me">
      <h3 id="background" class="low-header">Background</h3>
      <ul>
        <li>In the industry since 2007</li>
        <li>Love the Web Platform. Care about <em>webperf</em>, <em>a11y</em> and <em>progressive enhancement</em></li>
        <li>Worked on YouTube Front-end for 5 years</li>
        <li>Currently residing and freelancing in France 🇫🇷</li>
      </ul>
    </div>
    <div class="ratio">
      {% include me/ratio.svg %}  
    </div>
  </div>
  
  <h3 id="background" class="low-header">Experience</h3>
  {% include me/timeline.html %}
  
</section>

<hr />

{% include me/toolbox.html %}

<hr />

{% include me/curious-values.html %}

<h2 id="personal-projects-portfolio" class="high-header">Personal projects portfolio</h2>
Check out some of my personal projects that could convey my interests:
<ul class="projects">
  <li>
    <details>
      <summary><h2 class="project-title">Surfing Dirt - <span class="project-date">2019/2020</span> - <span class="tools">React / Node / GraphQL</span></h2></summary>
      {% include case-studies/surfingdirt.html %}
    </details>
  </li>
  <li>
    <details>
      <summary><h2 class="project-title">Draw me a kicker - <span class="project-date">2015</span> - <span class="tools">Polymer JS / three.js</span></h2></summary>
      {% include case-studies/draw-me-a-kicker.html %}
    </details>
  </li>
</ul>

## My full résumé
Those above projects are things I did of my own volition. For a more complete picture of my background, please check out
 my [résumé](/resume) or [LinkedIn](https://www.linkedin.com/in/mikaelgramont).

## Code samples
You can find code samples on [my résumé page](/resume).
 
## That's it
So there you have it, I hope to hear from you soon!

<script>
{% include me/timeline.js %}
</script>