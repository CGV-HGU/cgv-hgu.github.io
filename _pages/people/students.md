---
layout: page
title: Students
permalink: /people/students/
description: Current Students in CGV Lab
nav: false
---

<div class="students-section">
  
  <!-- MS Candidates -->
  <h2 class="section-title">MS Candidates</h2>
  <div class="members-grid">
    {% assign ms_students = site.pages | where_exp: "page", "page.path contains '_pages/people/MS_student/'" | where_exp: "page", "page.member_name != nil" | sort: "order" %}
    {% if ms_students.size > 0 %}
      {% for member in ms_students %}
        <div class="member-card-grid">
          <div class="member-photo-wrapper">
            {% if member.profile.image %}
              <img src="{{ member.profile.image | relative_url }}" alt="{{ member.member_name }}" class="member-photo">
            {% else %}
              <div class="member-photo-placeholder">
                <i class="fas fa-user"></i>
              </div>
            {% endif %}
          </div>
          
          <div class="member-info-grid">
            <h3 class="member-name">{{ member.member_name }}</h3>
            
            {% if member.period %}
              <p class="member-detail"><strong>Period:</strong> {{ member.period }}</p>
            {% endif %}
            
            {% if member.degree %}
              <p class="member-detail"><strong>Degree:</strong> {{ member.degree }}</p>
            {% endif %}
            
            {% if member.education %}
              <div class="member-education">
                {{ member.education | markdownify }}
              </div>
            {% endif %}
            
            {% if member.email %}
              <p class="member-email">
                <strong>Email:</strong> <a href="mailto:{{ member.email }}">{{ member.email }}</a>
              </p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    {% else %}
      <p class="no-members">No MS students currently.</p>
    {% endif %}
  </div>

  <!-- BS Candidates -->
  <h2 class="section-title">BS Candidates</h2>
  <div class="members-grid">
    {% assign bs_students = site.pages | where_exp: "page", "page.path contains '_pages/people/BS_student/'" | where_exp: "page", "page.member_name != nil" | sort: "order" %}
    {% if bs_students.size > 0 %}
      {% for member in bs_students %}
        <div class="member-card-grid">
          <div class="member-photo-wrapper">
            {% if member.profile.image %}
              <img src="{{ member.profile.image | relative_url }}" alt="{{ member.member_name }}" class="member-photo">
            {% else %}
              <div class="member-photo-placeholder">
                <i class="fas fa-user"></i>
              </div>
            {% endif %}
          </div>
          
          <div class="member-info-grid">
            <h3 class="member-name">{{ member.member_name }}</h3>
            
            {% if member.period %}
              <p class="member-detail"><strong>Period:</strong> {{ member.period }}</p>
            {% endif %}
            
            {% if member.degree %}
              <p class="member-detail"><strong>Degree:</strong> {{ member.degree }}</p>
            {% endif %}
            
            {% if member.education %}
              <div class="member-education">
                {{ member.education | markdownify }}
              </div>
            {% endif %}
            
            {% if member.email %}
              <p class="member-email">
                <strong>Email:</strong> <a href="mailto:{{ member.email }}">{{ member.email }}</a>
              </p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    {% else %}
      <p class="no-members">No BS students currently.</p>
    {% endif %}
  </div>

</div>

<style>
/* Students Section */
.students-section {
  margin: 2rem 0;
}

.section-title {
  font-size: 2rem;
  color: var(--global-theme-color);
  margin: 3rem 0 2rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid var(--global-theme-color);
}

/* Grid Layout - 3 columns */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

/* Member Card */
.member-card-grid {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.member-card-grid:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
  border-color: var(--global-theme-color);
}

/* Photo */
.member-photo-wrapper {
  margin-bottom: 1rem;
}

.member-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--global-theme-color);
  margin: 0 auto;
  display: block;
}

.member-photo-placeholder {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--global-divider-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--global-text-color-light);
  margin: 0 auto;
  border: 4px solid var(--global-divider-color);
}

/* Member Info */
.member-info-grid {
  text-align: left;
}

.member-name {
  font-size: 1.3rem;
  color: var(--global-theme-color);
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-align: center;
  border-bottom: 2px solid var(--global-divider-color);
  padding-bottom: 0.5rem;
}

.member-detail {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

.member-detail strong {
  color: var(--global-text-color);
  font-weight: 600;
}

.member-education {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  line-height: 1.6;
}

.member-education p {
  margin: 0.3rem 0;
}

.member-email {
  margin: 0.75rem 0 0 0;
  font-size: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--global-divider-color);
}

.member-email strong {
  display: block;
  margin-bottom: 0.3rem;
  color: var(--global-text-color);
}

.member-email a {
  color: var(--global-theme-color);
  text-decoration: none;
  word-break: break-all;
}

.member-email a:hover {
  text-decoration: underline;
}

.no-members {
  text-align: center;
  color: var(--global-text-color-light);
  font-style: italic;
  padding: 3rem;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 992px) {
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .member-photo,
  .member-photo-placeholder {
    width: 120px;
    height: 120px;
  }
  
  .member-name {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 576px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .member-card-grid {
    max-width: 400px;
    margin: 0 auto;
  }
}

/* Dark Mode Support */
html[data-theme='dark'] .member-card-grid {
  background: var(--global-bg-color);
  border-color: var(--global-divider-color);
}

html[data-theme='dark'] .member-card-grid:hover {
  border-color: var(--global-theme-color);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.08);
}
</style>
