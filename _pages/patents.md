---
layout: page
permalink: /patents/
title: patents
description: Patents from our lab.
nav: true
nav_order: 4
---

{% include bib_search.liquid %}

<style>
  /* 리스트 스타일(숫자) 제거 */
  .patents ol.bibliography {
    list-style: none;
    padding-left: 0;
  }
  /* 리스트 아이템 간격 및 정렬 */
  .patents ol.bibliography li {
    margin-bottom: 10px;
  }
</style>

<div class="patents">

{% bibliography --file patents %}

</div>
