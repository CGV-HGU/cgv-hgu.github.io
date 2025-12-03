---
layout: page
title: Professor
permalink: /people/professor/
description: Supervisor of CGV Lab.
nav: false
---

<div class="professor-section">
  <div class="profile-header">
    <div class="profile-image-wrapper">
      <img src="/assets/img/members/sshwang.jpeg" alt="Prof. Sung Soo Hwang" class="profile-image">
    </div>
    
    <div class="profile-info">
      <h2 class="professor-name">Prof. Sung Soo Hwang (황성수)</h2>
      <p class="professor-title"><strong>Associate Professor / Ph.D</strong></p>
      
      <div class="contact-info">
        <p><strong>Phone:</strong> +82-54-260-1864</p>
        <p><strong>Fax:</strong> +82-54-260-1976</p>
        <p><strong>E-mail:</strong> <a href="mailto:sshwang@handong.edu">sshwang@handong.edu</a></p>
        <p><strong>Address:</strong><br>
        Ohseok Hall Room 317(B), 558 Handong-ro, Heunghae-eup, Buk-gu,<br>
        Pohang-si, Gyeongsangbuk-do, Republic of Korea, 37554</p>
      </div>
    </div>
  </div>

  <div class="education-section">
    <h3>Education</h3>
    <ul class="education-list">
      <li>
        <strong>2010-2015</strong> / Ph.D., Electrical Engineering<br>
        Korea Advanced Institute of Science and Technology (KAIST)
      </li>
      <li>
        <strong>2008-2010</strong> / M.S., Electrical Engineering<br>
        Korea Advanced Institute of Science and Technology (KAIST)
      </li>
      <li>
        <strong>2002-2008</strong> / B.S., Computer Science and Electrical Engineering<br>
        Handong Global University
      </li>
    </ul>
  </div>

</div>

<style>
/* Professor Section Styles */
.professor-section {
  margin: 2rem 0;
}

.profile-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
}

.profile-image-wrapper {
  flex-shrink: 0;
}

.profile-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--global-theme-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.profile-info {
  flex: 1;
}

.professor-name {
  font-size: 2rem;
  color: var(--global-theme-color);
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.professor-title {
  font-size: 1.1rem;
  color: var(--global-text-color);
  margin: 0 0 1.5rem 0;
}

.contact-info {
  line-height: 1.8;
}

.contact-info p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.contact-info strong {
  color: var(--global-text-color);
  min-width: 80px;
  display: inline-block;
}

.contact-info a {
  color: var(--global-theme-color);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Education Section */
.education-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
}

.education-section h3 {
  font-size: 1.5rem;
  color: var(--global-theme-color);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-theme-color);
}

.education-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.education-list li {
  padding: 1rem 0;
  border-bottom: 1px solid var(--global-divider-color);
  line-height: 1.8;
}

.education-list li:last-child {
  border-bottom: none;
}

.education-list strong {
  color: var(--global-theme-color);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .profile-image {
    width: 150px;
    height: 150px;
  }
  
  .professor-name {
    font-size: 1.5rem;
  }
  
  .contact-info {
    text-align: left;
  }
  
  .contact-info strong {
    display: block;
    margin-bottom: 0.2rem;
  }
}

/* Dark Mode Support */
html[data-theme='dark'] .profile-header,
html[data-theme='dark'] .education-section {
  background: var(--global-bg-color);
  border-color: var(--global-divider-color);
}
</style>
