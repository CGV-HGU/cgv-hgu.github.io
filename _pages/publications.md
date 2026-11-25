---
layout: page
permalink: /publications/
title: publications
description: Publications from CGV Lab.
nav: true
nav_order: 5
---

<!-- _pages/publications.md -->

<div class="row">
  <!-- Sidebar Navigation -->
  <div class="col-sm-2">
    <nav id="toc-sidebar" class="sticky-top pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" onclick="scrollToSection('intl-journals')">International Journals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" onclick="scrollToSection('intl-conferences')">International Conferences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" onclick="scrollToSection('dom-journals')">Domestic Journals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" onclick="scrollToSection('dom-conferences')">Domestic Conferences</a>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Main Content -->
  <div class="col-sm-10">
    {% include bib_search.liquid %}

    <h2 id="intl-journals">International Journals</h2>
    <div class="publications">
    {% bibliography --query @article[keywords=intl_journal] %}
    </div>
    <hr>

    <h2 id="intl-conferences">International Conferences</h2>
    <div class="publications">
    {% bibliography --query @inproceedings[keywords=intl_conf] %}
    </div>
    <hr>

    <h2 id="dom-journals">Domestic Journals</h2>
    <div class="publications">
    {% bibliography --query @article[keywords=dom_journal] %}
    </div>
    <hr>

    <h2 id="dom-conferences">Domestic Conferences</h2>
    <div class="publications">
    {% bibliography --query @inproceedings[keywords=dom_conf] %}
    </div>
  </div>
</div>

<script>
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      // Offset to account for the sticky header (adjust 80 if needed)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
</script>

<style>
  /* Sidebar positioning */
  .sticky-top {
    top: 80px;
    height: calc(100vh - 80px);
    overflow-y: auto;
  }
  .nav-link {
    cursor: pointer;
    color: black !important;
    padding-left: 0; /* Pull text to the left edge of the column */
  }
  .nav-link:hover {
    color: var(--global-theme-color) !important;
    font-weight: bold;
  }
  /* Responsive adjustment for small screens */
  @media (max-width: 576px) {
    .sticky-top {
      position: static;
      height: auto;
    }
    .nav-link {
      padding-left: 1rem;
    }
  }
</style>
