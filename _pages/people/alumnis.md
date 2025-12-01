---
layout: page
title: Alumni
permalink: /people/alumni/
description: Alumni of CGV Lab
nav: false
---

<style>
  .members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px; /* ← 카드 간 가로/세로 여백 */
  }

  .member-card-grid {
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }
</style>

<div class="alumni-section">
  
  <!-- MS Alumni -->
  <h2 class="section-title">M.S Alumni</h2>
  <div class="members-grid">
    {% assign ms_alumni = site.pages
         | where_exp: "page", "page.path contains '_pages/people/alumni/'"
         | where_exp: "page", "page.degree == 'M.S'"
         | sort: "order" %}
    {% if ms_alumni.size > 0 %}
      {% for member in ms_alumni %}
        <div class="member-card-grid">
          <div class="member-info-grid">
            <h3 class="member-name">{{ member.member_name }}</h3>

            {% if member.period %}
              <p class="member-detail"><strong>Period:</strong> {{ member.period }}</p>
            {% endif %}

            {% if member.education %}
              <div class="member-education">
                {{ member.education | markdownify }}
              </div>
            {% endif %}

            {% if member.email %}
              <p class="member-email">
                <strong>Email:</strong>
                <a href="mailto:{{ member.email }}">{{ member.email }}</a>
              </p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    {% else %}
      <p class="no-members">No M.S alumni yet.</p>
    {% endif %}

  </div>

  <!-- BS Alumni -->
  <h2 class="section-title">B.S Alumni</h2>
  <div class="members-grid">
    {% assign bs_alumni = site.pages
         | where_exp: "page", "page.path contains '_pages/people/alumni/'"
         | where_exp: "page", "page.degree == 'B.S'"
         | sort: "order" %}
    {% if bs_alumni.size > 0 %}
      {% for member in bs_alumni %}
        <div class="member-card-grid">
          <div class="member-info-grid">
            <h3 class="member-name">{{ member.member_name }}</h3>

            {% if member.period %}
              <p class="member-detail"><strong>Period:</strong> {{ member.period }}</p>
            {% endif %}

            {% if member.education %}
              <div class="member-education">
                {{ member.education | markdownify }}
              </div>
            {% endif %}

            {% if member.email %}
              <p class="member-email">
                <strong>Email:</strong>
                <a href="mailto:{{ member.email }}">{{ member.email }}</a>
              </p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    {% else %}
      <p class="no-members">No B.S alumni yet.</p>
    {% endif %}

  </div>

</div>
