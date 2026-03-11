---
layout: default
title: xadparo
---

<section class="home-hero">
  <h1>xadparo blog</h1>
  <p>Markdown으로 작성한 글을 정리하고 공유하는 기술 블로그입니다.</p>
</section>

<section class="home-section">
  <h2>최근 게시글</h2>
  {%- if site.posts.size > 0 -%}
    <ul>
      {%- for post in site.posts limit: 10 -%}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <small>({{ post.date | date: "%Y-%m-%d" }})</small>
        </li>
      {%- endfor -%}
    </ul>
  {%- else -%}
    <p>아직 게시글이 없습니다.</p>
  {%- endif -%}
</section>
