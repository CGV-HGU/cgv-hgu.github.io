---
layout: page
title: equipment
permalink: /equipment/
description: Lab resources including GPUs, robots, and cameras.
nav: true
nav_order: 8
---

{% if site.data.equipment %}

<div class="projects">
  <!-- Compute Summary Section -->
  <div class="container mb-5 py-5 border rounded shadow-sm bg-white">
    <div class="row align-items-center text-center">
      <div class="col-md-6 border-right">
        <div class="py-2">
          <h2 class="mb-1" style="font-weight: 800; color: #000; font-size: 3rem;">5,300+</h2>
          <div class="text-uppercase text-muted" style="letter-spacing: 2px; font-weight: 600; font-size: 0.9rem;">Total TOPS (INT8)</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="py-2">
          <h2 class="mb-1" style="font-weight: 800; color: #000; font-size: 3rem;">10+</h2>
          <div class="text-uppercase text-muted" style="letter-spacing: 2px; font-weight: 600; font-size: 0.9rem;">Robotic & Sensing Units</div>
        </div>
      </div>
    </div>
    <div class="row mt-4 px-4">
      <div class="col-12 text-center">
        <p class="lead" style="color: #333; font-size: 1.15rem; max-width: 900px; margin: 0 auto; line-height: 1.8;">
          The laboratory is equipped with over <strong>5,300 TOPS</strong> of computing power and <strong>more than 10 specialized robotic/sensing units.</strong> This infrastructure supports a wide range of research in deep learning and robotics, from large-scale model training to real-world hardware validation.
        </p>
      </div>
    </div>
  </div>

{% for group in site.data.equipment %}
...

  <h2 class="category">{{ group.category }}</h2>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {% for item in group.items %}
      <div class="col">
        <div class="card h-100 hoverable border-0 shadow-sm">
          {% if item.img %}
          {% assign img_path = item.img | relative_url %}
          <img src="{{ img_path }}" class="card-img-top" alt="{{ item.title }}" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x300?text=No+Image';">
          {% endif %}
          <div class="card-body d-flex flex-column">
            <h5 class="card-title" style="font-weight: 700;">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <div class="mt-auto d-flex justify-content-between align-items-end">
              <div>
                {% if item.quantity %}
                <small class="text-muted">Quantity: {{ item.quantity }}</small>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
<br>
{% endfor %}
</div>
{% endif %}

<style>
  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #f0f0f0;
  }
  .category {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #1976d2;
    padding-bottom: 0.5rem;
    color: #0d47a1;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .card:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 10px 20px rgba(0,0,0,0.12) !important;
  }
</style>
