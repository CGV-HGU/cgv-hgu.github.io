---
layout: page
permalink: /publications/
title: publications
description: Publications from our lab.
nav: true
nav_order: 7
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

## International Journals
<div class="publications">
{% bibliography --query @article[keywords=intl_journal] %}
</div>
<br>

## International Conferences
<div class="publications">
{% bibliography --query @inproceedings[keywords=intl_conf] %}
</div>
<br>

## Domestic Journals
<div class="publications">
{% bibliography --query @article[keywords=dom_journal] %}
</div>
<br>

## Domestic Conferences
<div class="publications">
{% bibliography --query @inproceedings[keywords=dom_conf] %}
</div>
