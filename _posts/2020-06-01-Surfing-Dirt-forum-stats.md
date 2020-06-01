---
layout: post
title: Surfing Dirt forum stats
tag: surfingdirt, d3
published: true
---

As I'm finally getting around to playing with data visualisation a bit, I decided to try a real-life exercice: rendering
data from the Surfing Dirt forum.

So I extracted data from the salvaged database, and came up with 3 things I wanted to see:
- new topics per week
- new posts per week
- total amount of posts per user for the top 20 or so

Turns out it wasn't too hard, just a little time-consuming. D3's cool!

<style>
.vx-axis text,
.vx-axis-label,
.vx-axis-tick {
    fill: #8e205f;
    fill: var(--font-color, #8e205f);
}
.vx-line {
    stroke: #8e205f;
    stroke: var(--font-color, #8e205f);
}

.vx-axis text {
    font-size: 1rem;
    font-size: clamp(.75rem, calc(2rem - 2vw), 1.5rem);
}

.topicBar {
    fill: #26a3bc;
}

.postBar {
    fill: #986934;
}
.userPost1 {
    fill: #26a3bc;
}
.userPost2 {
    fill: #f5d58a;
}
.userPost3 {
    fill: #986934;
}
</style>

<article>
<h1 >New topics per week</h1>
<div class="statWrapper">
  <svg viewBox="0 0 800 350">
    <g class="vx-group" transform="translate(0, 0)">
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="80" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="81.22707659115426" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="82.45415318230852" y="158" height="72" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="83.68122977346279" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="84.90830636461705" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="86.1353829557713" y="185" height="45" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="87.36245954692556" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="88.58953613807982" y="94" height="136" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="89.8166127292341" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="91.04368932038835" y="170" height="60" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="92.27076591154261" y="143" height="87" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="93.49784250269687" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="94.72491909385113" y="0" height="230" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="95.95199568500539" y="53" height="177" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="97.17907227615966" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="98.40614886731392" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="99.63322545846817" y="64" height="166" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="100.86030204962243" y="23" height="207" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="102.0873786407767" y="34" height="196" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="103.31445523193096" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="104.54153182308522" y="124" height="106" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="105.76860841423948" y="143" height="87" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="106.99568500539374" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="108.222761596548" y="155" height="75" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="109.44983818770227" y="98" height="132" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="110.67691477885653" y="60" height="170" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="111.90399137001079" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="113.13837198849335" y="49" height="181" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="114.3654485796476" y="53" height="177" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="115.59252517080188" y="75" height="155" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="116.81960176195614" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="118.0466783531104" y="41" height="189" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="119.27375494426465" y="53" height="177" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="120.50083153541891" y="45" height="185" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="121.72790812657317" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="122.95498471772744" y="151" height="79" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="123.1302813736066" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="124.35735796476087" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="125.58443455591514" y="15" height="215" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="126.8115111470694" y="11" height="219" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="128.03858773822367" y="4" height="226" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="129.26566432937793" y="4" height="226" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="130.49274092053219" y="60" height="170" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="131.71981751168644" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="132.9468941028407" y="64" height="166" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="134.17397069399496" y="109" height="121" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="135.40104728514922" y="68" height="162" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="136.6281238763035" y="38" height="192" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="137.85520046745773" y="106" height="124" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="139.08227705861202" y="53" height="177" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="140.30204962243798" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="141.52912621359224" y="94" height="136" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="142.7562028047465" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="143.98327939590075" y="98" height="132" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="145.21035598705504" y="94" height="136" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="146.43743257820927" y="136" height="94" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="147.66450916936355" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="148.89158576051778" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="150.11866235167207" y="72" height="158" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="151.34573894282633" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="152.5728155339806" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="153.79989212513485" y="109" height="121" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="155.0269687162891" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="156.25404530744336" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="157.48112189859762" y="106" height="124" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="158.70819848975188" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="159.93527508090614" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="161.16235167206042" y="68" height="162" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="162.38942826321468" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="163.61650485436894" y="53" height="177" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="164.8435814455232" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="166.07065803667746" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="167.2977346278317" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="168.52481121898597" y="98" height="132" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="169.75188781014023" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="170.9789644012945" y="124" height="106" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="172.20604099244875" y="106" height="124" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="173.433117583603" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="174.6601941747573" y="106" height="124" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="175.88727076591155" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="177.1143473570658" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="178.34872797554834" y="94" height="136" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="179.57580456670263" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="180.8028811578569" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="182.02995774901115" y="147" height="83" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="183.2570343401654" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="184.48411093131966" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="185.71118752247395" y="151" height="79" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="186.93826411362818" y="136" height="94" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="187.1135607695074" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="188.34063736066165" y="109" height="121" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="189.5677139518159" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="190.79479054297016" y="124" height="106" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="192.02186713412442" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="193.24894372527865" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="194.47602031643294" y="4" height="226" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="195.7030969075872" y="109" height="121" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="196.93017349874145" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="198.1572500898957" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="199.38432668104997" y="102" height="128" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="200.61140327220426" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="201.83847986335851" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="203.06555645451277" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="204.28532901833876" y="124" height="106" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="205.512405609493" y="57" height="173" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="206.73948220064725" y="136" height="94" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="207.9665587918015" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="209.19363538295576" y="49" height="181" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="210.42071197411005" y="72" height="158" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="211.64778856526428" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="212.87486515641856" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="214.10194174757282" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="215.32901833872708" y="64" height="166" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="216.55609492988134" y="38" height="192" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="217.7831715210356" y="38" height="192" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="219.01024811218986" y="72" height="158" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="220.23732470334411" y="34" height="196" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="221.46440129449837" y="53" height="177" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="222.69147788565266" y="64" height="166" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="223.9185544768069" y="166" height="64" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="225.14563106796118" y="72" height="158" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="226.37270765911543" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="227.5997842502697" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="228.82686084142395" y="158" height="72" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="230.0539374325782" y="68" height="162" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="231.28101402373247" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="232.50809061488673" y="132" height="98" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="233.73516720604098" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="234.96224379719524" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="236.18932038834953" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="237.41639697950376" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="238.64347357065805" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="239.8705501618123" y="151" height="79" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="241.09762675296656" y="136" height="94" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="242.33200737144912" y="143" height="87" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="243.55908396260335" y="173" height="57" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="244.78616055375764" y="136" height="94" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="246.0132371449119" y="151" height="79" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="247.24031373606616" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="248.46739032722041" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="249.6944669183747" y="132" height="98" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="250.92154350952896" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="252.3239167565624" y="102" height="128" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="253.55099334771663" y="102" height="128" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="254.77806993887089" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="256.0051465300252" y="124" height="106" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="257.23222312117946" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="258.4592997123337" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="259.6863763034879" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="260.9134528946422" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="262.1405294857965" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="263.3676060769507" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="264.59468266810495" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="265.82175925925924" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="267.0488358504135" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="268.26860841423945" y="143" height="87" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="269.49568500539374" y="151" height="79" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="270.722761596548" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="271.9498381877023" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="273.17691477885654" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="274.4039913700108" y="147" height="83" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="275.63106796116506" y="106" height="124" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="276.85814455231935" y="72" height="158" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="278.0852211434736" y="90" height="140" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="279.3122977346278" y="102" height="128" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="280.5393743257821" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="281.7664509169364" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="282.9935275080906" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="284.22060409924484" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="285.4476806903991" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="286.6747572815534" y="155" height="75" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="287.9018338727077" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="289.1289104638619" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="290.35598705501616" y="94" height="136" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="291.58306364617044" y="166" height="64" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="292.81014023732473" y="185" height="45" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="294.03721682847896" y="147" height="83" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="295.2642934196332" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="296.4913700107875" y="173" height="57" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="297.71844660194176" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="298.94552319309605" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="300.1725997842502" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="301.3996763754045" y="166" height="64" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="302.6267529665588" y="173" height="57" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="303.8538295577131" y="189" height="41" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="305.0809061488673" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="306.31528676734985" y="189" height="41" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="307.54236335850413" y="185" height="45" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="308.76943994965836" y="147" height="83" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="309.99651654081265" y="83" height="147" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="311.22359313196694" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="312.4506697231212" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="313.67774631427545" y="151" height="79" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="314.9048229054297" y="143" height="87" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="316.13189949658397" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="315.2554162171881" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="316.48249280834233" y="173" height="57" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="317.70956939949656" y="173" height="57" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="318.93664599065085" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="320.16372258180513" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="321.39079917295936" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="322.6178757641136" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="323.8449523552679" y="170" height="60" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="325.07202894642217" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="326.29910553757645" y="189" height="41" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="327.5261821287306" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="328.7532587198849" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="329.9803353110392" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="331.2074119021935" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="332.4271844660194" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="333.6542610571737" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="334.881337648328" y="166" height="64" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="336.1084142394822" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="337.33549083063645" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="338.56256742179073" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="339.789644012945" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="341.01672060409925" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="342.2437971952535" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="343.47087378640776" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="344.697950377562" y="189" height="41" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="345.9250269687163" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="347.15210355987057" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="348.3791801510248" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="349.6062567421791" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="350.83333333333337" y="177" height="53" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="352.0604099244876" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="353.28748651564183" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="354.5145631067961" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="355.7416396979504" y="189" height="41" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="356.96871628910463" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="358.1957928802589" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="359.42286947141315" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="360.64994606256744" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="361.87702265372167" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="363.10409924487595" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="364.3311758360302" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="365.55825242718447" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="366.78532901833876" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="368.012405609493" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="369.2467862279755" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="370.4738628191298" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="371.7009394102841" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="372.9280160014383" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="374.1550925925926" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="375.3821691837469" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="376.6092457749011" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="377.83632236605536" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="379.06339895720964" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="379.2386956130888" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="380.4657722042431" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="381.69284879539737" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="382.9199253865516" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="384.1470019777059" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="385.3740785688601" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="386.6011551600144" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="387.82823175116863" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="389.0553083423229" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="390.28238493347715" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="391.50946152463143" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="392.7365381157857" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="393.96361470693995" y="189" height="41" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="395.1906912980942" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="396.41046386192016" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="397.63754045307445" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="398.8646170442287" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="400.09169363538297" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="401.3187702265372" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="402.5458468176915" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="403.77292340884577" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="405" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="406.22707659115423" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="407.4541531823085" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="408.68122977346275" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="409.90830636461703" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="411.1353829557713" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="412.3624595469256" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="413.58953613807984" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="414.81661272923407" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="416.04368932038835" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="417.2707659115426" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="418.49784250269687" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="420.95199568500544" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="422.1790722761597" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="424.6332254584682" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="425.8603020496224" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="427.0873786407767" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="428.31445523193094" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="429.5415318230852" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="430.76860841423945" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="431.9956850053938" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="433.23006562387627" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="434.45714221503056" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="435.68421880618484" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="436.91129539733913" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="438.13837198849336" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="439.3654485796476" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="440.5925251708019" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="443.0466783531104" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="443.2219750089896" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="444.44905160014383" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="445.6761281912981" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="446.90320478245235" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="448.1302813736066" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="449.35735796476087" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="450.5844345559151" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="451.81151114706944" y="166" height="64" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="453.03858773822367" y="200" height="30" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="454.26566432937796" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="455.4927409205322" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="456.7198175116865" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="457.9468941028407" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="459.17397069399493" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="460.3937432578209" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="462.84789644012943" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="465.30204962243795" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="466.5291262135922" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="467.75620280474647" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="468.9832793959008" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="470.21035598705504" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="471.43743257820927" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="472.66450916936355" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="475.11866235167207" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="476.3457389428263" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="478.7998921251349" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="480.0269687162891" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="481.2540453074434" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="482.4811218985976" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="484.93527508090614" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="486.16235167206037" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="487.38942826321465" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="488.61650485436894" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="489.8435814455232" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="491.07065803667746" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="492.29773462783174" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="493.524811218986" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="494.7518878101402" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="495.9789644012945" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="497.2133450197771" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="498.4404216109313" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="499.6674982020856" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="500.8945747932398" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="502.12165138439406" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="505.8028811578569" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="507.02995774901115" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="508.4323309960446" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="509.65940758719887" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="510.88648417835316" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="512.1135607695073" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="513.3406373606616" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="514.5677139518159" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="515.7947905429701" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="517.0218671341245" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="518.2489437252787" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="553.8268608414239" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="555.0539374325782" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="556.2810140237325" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="562.4237010068321" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="564.8778541891406" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="567.3320073714491" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="569.7861605537576" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="578.7262900035958" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="640.255416217188" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar topicBar" x="730" y="226" height="4" width="1"></rect>
      </g>
    </g>
    <g class="vx-group" transform="translate(80, 0)">
      <g class="vx-group vx-axis vx-axis-left" transform="translate(0, 20)">
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="192" x2="-8" y2="192" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="192">10
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="155" x2="-8" y2="155" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="155">20
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="117" x2="-8" y2="117" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="117">30
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="79" x2="-8" y2="79" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="79">40
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="41" x2="-8" y2="41" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="41">50
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="4" x2="-8" y2="4" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="4">60
          </text>
        </g>
        <line class="vx-line vx-axis-line" x1="0" y1="230.5" x2="0" y2="0.5" fill="transparent" stroke="#1b1a1e"
              stroke-width="1"></line>
        <svg x="0" y="0" font-size="12" style="overflow:visible">
          <text transform="rotate(-90)" class="vx-axis-label" x="-115" y="-44" fill="#8e205f" font-size="12"
                font-family="Arial" text-anchor="left">
            <tspan x="-115" dy="0em">Topics</tspan>
          </text>
        </svg>
      </g>
    </g>
    <g class="vx-group vx-axis vx-axis-bottom" transform="translate(80, 230)">
      <g class="my-custom-bottom-axis">
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="44.35735796476087" y1="0" x2="44.35735796476087" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(44.35735796476087, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2010
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="108.34063736066165" y1="0" x2="108.34063736066165" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(108.34063736066165, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2011
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="172.3239167565624" y1="0" x2="172.3239167565624" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(172.3239167565624, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2012
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="236.48249280834233" y1="0" x2="236.48249280834233" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(236.48249280834233, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2013
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="300.4657722042431" y1="0" x2="300.4657722042431" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(300.4657722042431, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2014
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="364.44905160014383" y1="0" x2="364.44905160014383" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(364.44905160014383, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2015
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="428.4323309960446" y1="0" x2="428.4323309960446" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(428.4323309960446, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2016
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="492.5909070478245" y1="0" x2="492.5909070478245" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(492.5909070478245, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2017
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="556.5741864437252" y1="0" x2="556.5741864437252" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(556.5741864437252, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2018
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="620.557465839626" y1="0" x2="620.557465839626" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(620.557465839626, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2019
          </text>
        </g>
        <text text-anchor="left" transform="translate(325, 100)" font-size="16">Year</text>
        <line class="vx-line" x1="0.5" y1="0" x2="650.5" y2="0" fill="transparent" stroke="#8e205f"></line>
      </g>
    </g>
  </svg>
</div>

<p>
  Things started out really well for Surfing Dirt, 30 topics per week for a small community is not shabby at all!
</p>

<p>
  The downwards trend started pretty early on, but it took a while for Surfing Dirt to really start suffering from the
  <a href="/The-death-of-the-message-board/">Facebook forum drain</a>.
</p>
</article>



<article>
<h1>Posts per week</h1>
<div class="statWrapper">
  <svg viewBox="0 0 800 350">
    <g class="vx-group" transform="translate(0, 0)">
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="80" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="81.2178800856531" y="225" height="5" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="82.43576017130621" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="83.65364025695932" y="210" height="20" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="84.87152034261241" y="199" height="31" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="86.08940042826552" y="203" height="27" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="87.30728051391863" y="205" height="25" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="88.52516059957173" y="175" height="55" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="89.74304068522484" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="90.96092077087795" y="170" height="60" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="92.17880085653105" y="187" height="43" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="93.39668094218416" y="160" height="70" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="94.61456102783725" y="78" height="152" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="95.83244111349036" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="97.05032119914347" y="122" height="108" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="98.26820128479658" y="111" height="119" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="99.48608137044968" y="40" height="190" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="100.70396145610277" y="9" height="221" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="101.9218415417559" y="54" height="176" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="103.13972162740899" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="104.3576017130621" y="133" height="97" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="105.5754817987152" y="122" height="108" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="106.79336188436831" y="114" height="116" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="108.01124197002142" y="160" height="70" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="109.22912205567452" y="122" height="108" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="110.44700214132763" y="103" height="127" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="111.66488222698072" y="117" height="113" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="112.89001159885797" y="59" height="171" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="114.10789168451106" y="49" height="181" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="115.32577177016418" y="55" height="175" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="116.54365185581727" y="80" height="150" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="117.76153194147037" y="61" height="169" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="118.97941202712349" y="78" height="152" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="120.19729211277658" y="38" height="192" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="121.4151721984297" y="134" height="96" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="122.6330522840828" y="160" height="70" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="122.80703515346181" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="124.02491523911492" y="84" height="146" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="125.24279532476803" y="0" height="230" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="126.46067541042112" y="32" height="198" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="127.67855549607424" y="6" height="224" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="128.89643558172733" y="35" height="195" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="130.11431566738045" y="39" height="191" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="131.33219575303355" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="132.55007583868667" y="99" height="131" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="133.76795592433976" y="107" height="123" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="134.98583600999285" y="91" height="139" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="136.20371609564597" y="67" height="163" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="137.42159618129907" y="78" height="152" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="138.6394762669522" y="98" height="132" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="139.85010706638116" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="141.06798715203428" y="21" height="209" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="142.28586723768737" y="73" height="157" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="143.50374732334046" y="121" height="109" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="144.72162740899358" y="136" height="94" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="145.93950749464668" y="150" height="80" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="147.15738758029977" y="130" height="100" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="148.3752676659529" y="102" height="128" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="149.593147751606" y="79" height="151" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="150.8110278372591" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="152.0289079229122" y="100" height="130" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="153.24678800856532" y="96" height="134" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="154.46466809421844" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="155.6825481798715" y="141" height="89" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="156.90042826552462" y="136" height="94" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="158.11830835117775" y="130" height="100" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="159.33618843683084" y="104" height="126" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="160.55406852248393" y="93" height="137" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="161.77194860813705" y="87" height="143" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="162.98982869379014" y="73" height="157" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="164.20770877944327" y="63" height="167" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="165.42558886509636" y="104" height="126" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="166.64346895074948" y="131" height="99" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="167.86134903640257" y="91" height="139" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="169.07922912205566" y="106" height="124" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="170.2971092077088" y="140" height="90" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="171.5149892933619" y="139" height="91" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="172.73286937901497" y="142" height="88" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="173.9507494646681" y="156" height="74" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="175.1686295503212" y="133" height="97" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="176.3865096359743" y="171" height="59" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="177.61163900785152" y="137" height="93" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="178.82951909350464" y="133" height="97" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="180.04739917915776" y="138" height="92" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="181.26527926481086" y="155" height="75" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="182.48315935046395" y="147" height="83" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="183.70103943611707" y="164" height="66" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="184.91891952177016" y="167" height="63" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="186.13679960742328" y="160" height="70" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="186.31078247680227" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="187.5286625624554" y="125" height="105" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="188.7465426481085" y="148" height="82" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="189.96442273376158" y="142" height="88" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="191.1823028194147" y="152" height="78" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="192.40018290506782" y="119" height="111" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="193.6180629907209" y="108" height="122" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="194.835943076374" y="146" height="84" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="196.05382316202713" y="145" height="85" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="197.27170324768025" y="152" height="78" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="198.48958333333331" y="150" height="80" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="199.70746341898644" y="153" height="77" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="200.92534350463956" y="134" height="96" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="202.14322359029265" y="143" height="87" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="203.35385438972162" y="129" height="101" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="204.57173447537474" y="126" height="104" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="205.78961456102783" y="166" height="64" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="207.00749464668093" y="141" height="89" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="208.22537473233405" y="138" height="92" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="209.44325481798717" y="127" height="103" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="210.66113490364026" y="122" height="108" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="211.87901498929335" y="112" height="118" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="213.09689507494647" y="111" height="119" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="214.31477516059957" y="114" height="116" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="215.53265524625266" y="58" height="172" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="216.75053533190578" y="57" height="173" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="217.96841541755887" y="44" height="186" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="219.186295503212" y="69" height="161" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="220.4041755888651" y="95" height="135" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="221.6220556745182" y="131" height="99" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="222.8399357601713" y="143" height="87" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="224.05781584582442" y="131" height="99" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="225.27569593147751" y="142" height="88" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="226.49357601713064" y="156" height="74" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="227.71145610278373" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="228.92933618843685" y="128" height="102" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="230.14721627408994" y="156" height="74" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="231.36509635974303" y="185" height="45" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="232.58297644539616" y="162" height="68" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="233.80085653104925" y="139" height="91" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="235.01873661670234" y="135" height="95" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="236.23661670235546" y="156" height="74" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="237.45449678800856" y="150" height="80" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="238.67237687366168" y="163" height="67" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="239.89025695931477" y="158" height="72" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="241.11538633119198" y="154" height="76" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="242.3332664168451" y="161" height="69" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="243.5511465024982" y="169" height="61" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="244.76902658815132" y="170" height="60" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="245.98690667380444" y="183" height="47" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="247.2047867594575" y="157" height="73" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="248.42266684511063" y="153" height="77" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="249.64054693076375" y="187" height="43" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="251.0324098857959" y="144" height="86" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="252.25028997144895" y="91" height="139" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="253.46817005710207" y="132" height="98" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="254.68605014275516" y="158" height="72" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="255.90393022840829" y="145" height="85" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="257.12181031406135" y="144" height="86" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="258.33969039971447" y="124" height="106" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="259.5575704853676" y="139" height="91" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="260.7754505710207" y="120" height="110" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="261.9933306566738" y="148" height="82" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="263.2112107423269" y="113" height="117" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="264.42909082798" y="163" height="67" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="265.64697091363314" y="133" height="97" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="266.8576017130621" y="139" height="91" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="268.0754817987152" y="168" height="62" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="269.2933618843683" y="154" height="76" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="270.5112419700214" y="150" height="80" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="271.7291220556745" y="170" height="60" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="272.94700214132763" y="169" height="61" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="274.1648822269807" y="152" height="78" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="275.3827623126338" y="127" height="103" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="276.60064239828694" y="144" height="86" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="277.81852248394006" y="75" height="155" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="279.0364025695931" y="130" height="100" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="280.25428265524624" y="130" height="100" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="281.47216274089936" y="169" height="61" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="282.6900428265525" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="283.90792291220555" y="169" height="61" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="285.12580299785867" y="178" height="52" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="286.3436830835118" y="178" height="52" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="287.56156316916486" y="197" height="33" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="288.779443254818" y="157" height="73" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="289.9973233404711" y="195" height="35" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="291.21520342612416" y="180" height="50" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="292.43308351177734" y="168" height="62" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="293.6509635974304" y="185" height="45" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="294.86884368308347" y="190" height="40" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="296.08672376873665" y="197" height="33" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="297.3046038543897" y="198" height="32" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="298.5224839400428" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="299.74036402569595" y="181" height="49" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="300.958244111349" y="202" height="28" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="302.1761241970022" y="209" height="21" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="303.39400428265526" y="208" height="22" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="304.61913365453245" y="197" height="33" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="305.83701374018557" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="307.0548938258387" y="172" height="58" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="308.2727739114918" y="155" height="75" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="309.4906539971449" y="160" height="70" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="310.708534082798" y="156" height="74" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="311.9264141684511" y="173" height="57" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="313.14429425410424" y="189" height="41" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="314.3621743397573" y="220" height="10" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="313.4922599928623" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="314.71014007851534" y="187" height="43" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="315.92802016416846" y="196" height="34" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="317.1459002498216" y="192" height="38" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="318.36378033547464" y="202" height="28" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="319.58166042112776" y="191" height="39" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="320.7995405067809" y="209" height="21" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="322.01742059243395" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="323.2353006780871" y="202" height="28" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="324.4531807637402" y="208" height="22" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="325.67106084939326" y="201" height="29" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="326.88894093504643" y="202" height="28" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="328.1068210206995" y="195" height="35" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="329.32470110635256" y="199" height="31" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="330.5353319057816" y="214" height="16" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="331.7532119914347" y="209" height="21" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="332.9710920770878" y="195" height="35" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="334.1889721627409" y="204" height="26" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="335.406852248394" y="203" height="27" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="336.6247323340471" y="209" height="21" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="337.84261241970023" y="216" height="14" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="339.06049250535335" y="217" height="13" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="340.2783725910064" y="210" height="20" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="341.49625267665954" y="218" height="12" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="342.71413276231266" y="214" height="16" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="343.9320128479657" y="217" height="13" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="345.14989293361884" y="218" height="12" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="346.36777301927197" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="347.58565310492503" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="348.80353319057815" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="350.02141327623127" y="214" height="16" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="351.23929336188434" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="352.45717344753746" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="353.6750535331906" y="211" height="19" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="354.89293361884364" y="207" height="23" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="356.11081370449676" y="210" height="20" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="357.3286937901499" y="217" height="13" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="358.546573875803" y="218" height="12" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="359.76445396145607" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="360.9823340471092" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="362.2002141327623" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="363.41809421841543" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="364.6359743040685" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="365.8538543897216" y="220" height="10" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="367.07898376159886" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="368.296863847252" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="369.51474393290505" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="370.73262401855817" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="371.9505041042113" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="373.16838418986435" y="218" height="12" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="374.3862642755175" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="375.6041443611706" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="376.82202444682366" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="376.9960073162027" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="378.2138874018558" y="213" height="17" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="379.4317674875089" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="380.64964757316204" y="218" height="12" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="381.8675276588151" y="214" height="16" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="383.0854077444682" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="384.30328783012135" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="385.52116791577447" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="386.73904800142753" y="225" height="5" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="387.95692808708066" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="389.1748081727338" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="390.3926882583869" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="391.61056834403996" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="392.8284484296931" y="218" height="12" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="394.039079229122" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="395.25695931477514" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="396.47483940042827" y="210" height="20" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="397.6927194860814" y="217" height="13" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="398.91059957173445" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="400.1284796573876" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="401.3463597430407" y="225" height="5" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="402.5642398286938" y="225" height="5" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="403.7821199143469" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="405" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="406.21788008565306" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="407.43576017130624" y="220" height="10" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="408.6536402569593" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="409.87152034261237" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="411.08940042826555" y="220" height="10" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="412.3072805139186" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="413.5251605995718" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="414.74304068522486" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="415.9609207708779" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="417.1788008565311" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="418.39668094218416" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="419.6145610278372" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="420.83244111349035" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="422.05032119914347" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="423.2682012847966" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="424.48608137044965" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="425.7039614561028" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="426.9218415417559" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="428.13972162740896" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="429.3576017130621" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="430.5827310849393" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="431.8006111705924" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="433.01849125624557" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="434.23637134189863" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="435.45425142755175" y="225" height="5" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="436.6721315132049" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="437.89001159885794" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="439.10789168451106" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="440.3257717701642" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="440.4997546395432" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="441.7176347251963" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="442.9355148108494" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="444.1533948965025" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="445.3712749821556" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="446.5891550678087" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="447.8070351534618" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="449.02491523911493" y="219" height="11" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="450.242795324768" y="221" height="9" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="451.4606754104211" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="452.67855549607424" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="453.89643558172736" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="455.1143156673804" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="456.33219575303355" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="457.54282655246254" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="458.76070663811566" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="459.97858672376873" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="461.19646680942185" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="462.41434689507497" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="463.63222698072803" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="464.85010706638116" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="466.0679871520343" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="467.28586723768734" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="468.50374732334046" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="469.7216274089936" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="470.9395074946467" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="472.15738758029977" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="473.3752676659529" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="474.593147751606" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="475.8110278372591" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="477.0289079229122" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="478.2467880085653" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="479.4646680942184" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="480.68254817987156" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="481.9004282655246" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="483.1183083511777" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="484.33618843683087" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="485.55406852248393" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="486.771948608137" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="487.9898286937902" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="489.20770877944324" y="225" height="5" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="490.4255888650964" y="215" height="15" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="491.6434689507495" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="492.86134903640254" y="222" height="8" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="494.0864784082798" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="495.3043584939329" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="496.52223857958603" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="497.7401186652391" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="498.9579987508922" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="500.17587883654534" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="501.3937589221984" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="502.6116390078516" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="503.82951909350464" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="504.0035019628836" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="505.2213820485368" y="224" height="6" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="506.43926213418985" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="507.6571422198429" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="508.8750223054961" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="510.09290239114915" y="223" height="7" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="511.31078247680233" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="512.5286625624553" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="513.7465426481085" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="514.9644227337617" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="550.2756959314775" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="551.4935760171306" y="220" height="10" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="552.7114561027837" y="226" height="4" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="555.1472162740899" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="556.365096359743" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="557.5829764453962" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="558.8081058172734" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="560.0259859029265" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="561.2438659885796" y="227" height="3" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="562.4617460742327" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="563.6796261598859" y="228" height="2" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="566.115386331192" y="229" height="1" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="570.1169923269093" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="572.5527524982156" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="574.9885126695217" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="636.056499821556" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="665.2783725910065" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="725.1284796573876" y="230" height="0" width="1"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar postBar" x="730" y="230" height="0" width="1"></rect>
      </g>
    </g>
    <g class="vx-group" transform="translate(80, 0)">
      <g class="vx-group vx-axis vx-axis-left" transform="translate(0, 20)">
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="186" x2="-8" y2="186" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="186">200
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="142" x2="-8" y2="142" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="142">400
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="98" x2="-8" y2="98" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="98">600
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="54" x2="-8" y2="54" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="54">800
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="10" x2="-8" y2="10" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="10">1,000
          </text>
        </g>
        <line class="vx-line vx-axis-line" x1="0" y1="230.5" x2="0" y2="0.5" fill="transparent" stroke="#1b1a1e"
              stroke-width="1"></line>
        <svg x="0" y="0" font-size="12" style="overflow:visible">
          <text transform="rotate(-90)" class="vx-axis-label" x="-115" y="-44" fill="#8e205f" font-size="12"
                font-family="Arial" text-anchor="left">
            <tspan x="-115" dy="0em">Posts</tspan>
          </text>
        </svg>
      </g>
    </g>
    <g class="vx-group vx-axis vx-axis-bottom" transform="translate(80, 230)">
      <g class="my-custom-bottom-axis">
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="44.02491523911492" y1="0" x2="44.02491523911492" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(44.02491523911492, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2010
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="107.5286625624554" y1="0" x2="107.5286625624554" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(107.5286625624554, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2011
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="171.0324098857959" y1="0" x2="171.0324098857959" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(171.0324098857959, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2012
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="234.71014007851534" y1="0" x2="234.71014007851534" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(234.71014007851534, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2013
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="298.2138874018558" y1="0" x2="298.2138874018558" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(298.2138874018558, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2014
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="361.7176347251963" y1="0" x2="361.7176347251963" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(361.7176347251963, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2015
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="425.2213820485368" y1="0" x2="425.2213820485368" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(425.2213820485368, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2016
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="488.89911224125626" y1="0" x2="488.89911224125626" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(488.89911224125626, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2017
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="552.4028595645967" y1="0" x2="552.4028595645967" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(552.4028595645967, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2018
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="615.9066068879372" y1="0" x2="615.9066068879372" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(615.9066068879372, 26) rotate(90)" font-size="10" text-anchor="left"
                fill="#8e205f">2019
          </text>
        </g>
        <text text-anchor="left" transform="translate(325, 100)" font-size="16">Year</text>
        <line class="vx-line" x1="0.5" y1="0" x2="650.5" y2="0" fill="transparent" stroke="#8e205f"></line>
      </g>
    </g>
  </svg>
</div>
<p>
  This graph looks a lot like the other, but in the end, when the forum was slowing down, it looks like new posts slowed
  down faster than new topics. I imagine this means that there were fewer engaging discussions, but a few people kept posting
  new things, just less successfully for the site.
</p>

<p>
  At some point in 2016, before I took it over and re-hosted it, the site went down for months. Re-hosting happened too
  late, the damage was done. Sad!
</p>

</article>

<article>
<h1>Posts per user</h1>
<div class="statWrapper">
  <svg viewBox="0 0 800 400">
    <g class="vx-group" transform="translate(0, 0)">
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost1" x="95.80645161290323" y="20" height="230" width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="121.61290322580646" y="153.9620164537021" height="96.03798354629791"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="147.4193548387097" y="181.21739891475582" height="68.78260108524418"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="173.2258064516129" y="196.69700682653598" height="53.30299317346402"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="199.03225806451613" y="198.46840539121303" height="51.531594608786975"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="224.83870967741936" y="198.4885349203571" height="51.5114650796429"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="250.64516129032256" y="200.6423945387712" height="49.357605461228786"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="276.4516129032258" y="201.5079642919657" height="48.49203570803431"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost2" x="302.258064516129" y="205.6747768247856" height="44.325223175214404"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="328.06451612903226" y="214.75319446875548" height="35.24680553124452"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="353.8709677419355" y="215.61876422194993" height="34.38123577805007"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="379.6774193548387" y="218.11482583581306" height="31.885174164186935"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="405.4838709677419" y="221.11412567827762" height="28.885874321722383"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="431.2903225806451" y="222.24137931034483" height="27.758620689655174"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="457.09677419354836" y="224.63679327848766" height="25.36320672151234"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="482.9032258064516" y="226.81078242604585" height="23.189217573954153"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="508.7096774193549" y="228.58218099072292" height="21.417819009277082"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="534.516129032258" y="229.40749168562925" height="20.592508314370747"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="560.3225806451612" y="230.93733590057764" height="19.062664099422364"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="586.1290322580645" y="231.48083318746717" height="18.51916681253283"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="611.9354838709678" y="231.50096271661124" height="18.49903728338876"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="637.741935483871" y="232.66847540696656" height="17.331524593033436"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="663.5483870967741" y="233.47365657272886" height="16.526343427271144"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="689.3548387096773" y="233.8359880973219" height="16.164011902678112"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="715.1612903225805" y="234.05741291790653" height="15.942587082093468"
              width="20"></rect>
      </g>
      <g class="vx-group" transform="translate(0, 0)">
        <rect class="vx-bar userPost3" x="740.9677419354839" y="234.13793103448276" height="15.862068965517238"
              width="20"></rect>
      </g>
    </g>
    <g class="vx-group" transform="translate(80, 0)">
      <g class="vx-group vx-axis vx-axis-left" transform="translate(0, 20)">
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="230" x2="-8" y2="230" fill="transparent" stroke="#8e205f"
                stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="230">0
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="189.74094171188517" x2="-8" y2="189.74094171188517" fill="transparent"
                stroke="#8e205f" stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="189.74094171188517">2,000
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="149.48188342377034" x2="-8" y2="149.48188342377034" fill="transparent"
                stroke="#8e205f" stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="149.48188342377034">4,000
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="109.22282513565551" x2="-8" y2="109.22282513565551" fill="transparent"
                stroke="#8e205f" stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="109.22282513565551">6,000
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="68.9637668475407" x2="-8" y2="68.9637668475407" fill="transparent"
                stroke="#8e205f" stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="68.9637668475407">8,000
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="0" y1="28.704708559425864" x2="-8" y2="28.704708559425864" fill="transparent"
                stroke="#8e205f" stroke-linecap="square"></line>
          <text fill="#8e205f" text-anchor="end" font-size="10" font-family="Arial" dx="-0.25em" dy="0.25em" x="-8"
                y="28.704708559425864">10,000
          </text>
        </g>
        <line class="vx-line vx-axis-line" x1="0" y1="230.5" x2="0" y2="0.5" fill="transparent" stroke="#1b1a1e"
              stroke-width="1"></line>
        <svg x="0" y="0" font-size="12" style="overflow:visible">
          <text transform="rotate(-90)" class="vx-axis-label" x="-115" y="-44" fill="#8e205f" font-size="12"
                font-family="Arial" text-anchor="left">
            <tspan x="-115" dy="0em">Posts</tspan>
          </text>
        </svg>
      </g>
    </g>
    <g class="vx-group vx-axis vx-axis-bottom" transform="translate(80, 250)">
      <g class="my-custom-bottom-axis">
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="25.80645161290323" y1="0" x2="25.80645161290323" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(25.80645161290323, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">McCarver
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="51.612903225806456" y1="0" x2="51.612903225806456" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(51.612903225806456, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Jasper
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="77.41935483870968" y1="0" x2="77.41935483870968" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(77.41935483870968, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">BgSurfer
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="103.2258064516129" y1="0" x2="103.2258064516129" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(103.2258064516129, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">BryceAZ
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="129.03225806451613" y1="0" x2="129.03225806451613" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(129.03225806451613, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">etchy6
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="154.83870967741936" y1="0" x2="154.83870967741936" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(154.83870967741936, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Jimmy Chaos
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="180.64516129032256" y1="0" x2="180.64516129032256" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(180.64516129032256, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Brennig
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="206.4516129032258" y1="0" x2="206.4516129032258" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(206.4516129032258, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Ian@KentATB
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="232.25806451612902" y1="0" x2="232.25806451612902" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(232.25806451612902, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">leapb4ulook
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="258.06451612903226" y1="0" x2="258.06451612903226" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(258.06451612903226, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">The 6th degree
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="283.8709677419355" y1="0" x2="283.8709677419355" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(283.8709677419355, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Ben
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="309.6774193548387" y1="0" x2="309.6774193548387" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(309.6774193548387, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Mikael
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="335.4838709677419" y1="0" x2="335.4838709677419" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(335.4838709677419, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">belac
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="361.2903225806451" y1="0" x2="361.2903225806451" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(361.2903225806451, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Raoul Duke
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="387.09677419354836" y1="0" x2="387.09677419354836" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(387.09677419354836, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">buggley
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="412.9032258064516" y1="0" x2="412.9032258064516" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(412.9032258064516, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">stlmtboarder
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="438.7096774193548" y1="0" x2="438.7096774193548" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(438.7096774193548, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Travis
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="464.51612903225805" y1="0" x2="464.51612903225805" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(464.51612903225805, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Alan_RTH
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="490.3225806451613" y1="0" x2="490.3225806451613" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(490.3225806451613, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Jhammo52
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="516.1290322580645" y1="0" x2="516.1290322580645" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(516.1290322580645, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">parkerbomar
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="541.9354838709678" y1="0" x2="541.9354838709678" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(541.9354838709678, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Wyoming Adrenaline Junkie
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="567.741935483871" y1="0" x2="567.741935483871" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(567.741935483871, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">GoofyMark
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="593.5483870967741" y1="0" x2="593.5483870967741" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(593.5483870967741, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">Mutley
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="619.3548387096773" y1="0" x2="619.3548387096773" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(619.3548387096773, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">DirtDave
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="645.1612903225805" y1="0" x2="645.1612903225805" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(645.1612903225805, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">pd2h
          </text>
        </g>
        <g class="vx-group vx-axis-tick" transform="translate(0, 0)">
          <line class="vx-line" x1="670.9677419354839" y1="0" x2="670.9677419354839" y2="8" fill="transparent"
                stroke="#8e205f"></line>
          <text transform="translate(670.9677419354839, 26) rotate(45)" font-size="10" text-anchor="left"
                fill="#8e205f">BDirthead
          </text>
        </g>
        <text text-anchor="left" transform="translate(400, 80)" font-size="16"></text>
        <line class="vx-line" x1="0.5" y1="0" x2="800.5" y2="0" fill="transparent" stroke="#8e205f"></line>
      </g>
    </g>
  </svg>
</div>

<p>
  What to say here other than McCarver's got a big mouth?
</p>
</article>
