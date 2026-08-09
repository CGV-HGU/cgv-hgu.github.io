# CGV Lab Website

CGV Lab 공식 홈페이지입니다. 이 사이트는 Jekyll 기반 정적 사이트이며, Docker를 사용해 로컬 환경에서 실행할 수 있습니다.

- Website: <https://cgv-hgu.github.io>
- Framework: Jekyll
- Template: al-folio 기반 커스터마이징

## 실행 방법

### 1. Docker 설치

로컬 실행을 위해 Docker가 필요합니다.

- macOS/Windows: [Docker Desktop](https://www.docker.com/products/docker-desktop/) 설치
- Linux: Docker Engine 및 Docker Compose 설치

설치 후 아래 명령어로 Docker가 정상 동작하는지 확인합니다.

```bash
docker --version
docker compose version
```

### 2. 저장소 받기

```bash
git clone https://github.com/cgv-hgu/cgv-hgu.github.io.git
cd cgv-hgu.github.io
```

### 3. 로컬 서버 실행

이 프로젝트는 Docker 컨테이너 안에서 Jekyll 서버를 실행하며, 로컬 파일 변경 사항이 사이트에 반영됩니다.

```bash
docker compose up
```

최초 실행 또는 Docker 이미지 변경 후에는 아래 명령어를 사용할 수 있습니다.

```bash
docker compose up --build
```

### 4. 브라우저에서 확인

서버가 실행되면 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:8080
```

### 5. 서버 종료

터미널에서 `Ctrl + C`를 누르면 실행 중인 서버가 종료됩니다.

백그라운드로 실행한 경우에는 아래 명령어로 종료합니다.

```bash
docker compose down
```

## 폴더 구조

```text
.
├── _bibliography/          논문 및 특허 BibTeX 데이터
├── _config.yml             사이트 전체 설정
├── _data/                  장비, 네비게이션 등 구조화 데이터
├── _includes/              재사용 Liquid 컴포넌트
├── _layouts/               페이지 레이아웃
├── _news/                  News 항목
├── _pages/                 주요 페이지
│   └── people/             교수님, 학생, 졸업생 관련 페이지와 데이터
├── _plugins/               Jekyll 플러그인
├── _sass/                  SCSS 스타일 소스
├── assets/                 이미지, 영상, CSS, JS 등 정적 파일
├── bin/                    Docker 실행 스크립트
├── Dockerfile              Docker 이미지 정의
├── docker-compose.yml      로컬 실행 설정
├── Gemfile                 Ruby/Jekyll 의존성
└── package.json            Prettier 등 Node 개발 도구 의존성
```

## 콘텐츠 수정 방법

### 메인 페이지 수정

메인 페이지의 소개 문구, 연구 분야, 소개 영상, 프로필 이미지는 아래 파일에서 수정합니다.

```text
_pages/about.md
```

대표 설정 항목:

- `subtitle`: 메인 페이지 부제
- `video`: 소개 영상 경로
- `profile.image`: 메인 프로필 이미지
- 본문 Markdown 영역: About, Mission, Research Areas 등

### 사이트 전체 설정 수정

사이트 제목, 설명, URL, 검색 설정 등 전체 설정은 아래 파일에서 수정합니다.

```text
_config.yml
```

주요 항목:

- `title`: 사이트 제목
- `description`: 사이트 설명
- `url`: 배포 주소
- `baseurl`: 하위 경로 배포 시 사용
- `search_enabled`: 검색 기능 사용 여부
- `announcements`: 메인 페이지 News 표시 설정

### 메뉴 수정

상단 메뉴와 People 하위 메뉴는 아래 파일에서 수정합니다.

```text
_data/navigation.yml
```

각 페이지의 노출 여부와 순서는 페이지 파일의 front matter에서도 제어합니다.

```yaml
nav: true
nav_order: 3
```

### 교수 정보 수정

교수님 프로필, 연락처, 학력 등은 아래 파일에서 수정합니다.

```text
_pages/people/professor.md
```

교수님 사진은 현재 아래 경로를 사용합니다.

```text
assets/img/members/sshwang.jpeg
```

### 학생 추가 및 수정

학생 목록 페이지는 아래 파일입니다.

```text
_pages/people/students.md
```

다만 실제 학생 정보는 개별 Markdown 파일에서 관리합니다.

- 석사 학생: `_pages/people/MS_student/`
- 학부 학생: `_pages/people/BS_student/`

새 학생을 추가할 때는 기존 파일을 복사해 이름, 기간, 학위, 학력, 이메일, 이미지 경로, 정렬 순서를 수정하면 됩니다.

예시:

```yaml
---
layout: page
member_name: Name
period: 2026 - present
degree: M.S
education: |
  M.S in Dept. of Information Technology, HGU
  Mar 2026 - present
email: name@handong.edu
profile:
  image: /assets/img/members/MS/Name.jpg
order: 1
nav: false
---
```

학생 사진은 주로 아래 경로에 둡니다.

```text
assets/img/members/MS/
assets/img/members/BS/
```

### 졸업생 추가 및 수정

졸업생 목록 페이지는 아래 파일입니다.

```text
_pages/people/alumnis.md
```

실제 졸업생 정보는 개별 Markdown 파일에서 관리합니다.

- 석사 졸업생: `_pages/people/alumni/MS/`
- 학부 졸업생: `_pages/people/alumni/BS/`

졸업생을 추가할 때는 기존 파일을 복사해 이름, 기간, 학위, 학력, 이메일, 정렬 순서를 수정하면 됩니다.

### News 추가 및 수정

News 항목은 아래 폴더에서 관리합니다.

```text
_news/
```

파일명은 날짜 형식을 사용합니다.

```text
YYYY-MM-DD.md
```

새 News를 추가할 때는 기존 파일을 참고해 같은 형식으로 작성합니다. 메인 페이지에는 `_pages/about.md`의 `announcements.limit` 설정에 따라 최근 News가 표시됩니다.

### 논문 추가 및 수정

논문 데이터는 BibTeX 파일에서 관리합니다.

```text
_bibliography/papers.bib
```

논문 페이지는 아래 파일입니다.

```text
_pages/publications.md
```

논문은 BibTeX 항목의 `keywords` 값에 따라 페이지에서 분류됩니다.

| keywords       | 표시 섹션                 |
| -------------- | ------------------------- |
| `intl_journal` | International Journals    |
| `intl_conf`    | International Conferences |
| `dom_journal`  | Domestic Journals         |
| `dom_conf`     | Domestic Conferences      |

예시:

```bibtex
@article{example2026paper,
  title={Paper Title},
  author={Author, A and Author, B},
  journal={Journal Name},
  year={2026},
  keywords={intl_journal}
}
```

### 특허 추가 및 수정

특허 데이터는 아래 파일에서 관리합니다.

```text
_bibliography/patents.bib
```

특허 페이지는 아래 파일입니다.

```text
_pages/patents.md
```

### 장비 추가 및 수정

장비 데이터는 아래 파일에서 관리합니다.

```text
_data/equipment.yml
```

장비 페이지는 아래 파일입니다.

```text
_pages/equipment.md
```

장비 이미지는 주로 아래 경로에 둡니다.

```text
assets/img/equipment/
```

예시:

```yaml
- category: Robots
  items:
    - title: "Unitree Go2"
      description: "Description"
      quantity: 1
      img: assets/img/equipment/go2.png
```

### 갤러리 수정

갤러리 페이지는 아래 파일에서 직접 수정합니다.

```text
_pages/gallery.md
```

갤러리 이미지는 아래 경로에 둡니다.

```text
assets/img/gallery/
```

이미지를 추가한 뒤 `_pages/gallery.md`에 연도, 행사명, 이미지 태그를 추가합니다.

```html
<div class="gallery-event">
  <h3 class="gallery-title">2026 Event Name</h3>
  <img src="/assets/img/gallery/2026_event_name.jpg" alt="2026 Event Name" class="gallery-photo" />
</div>
```

## 작업 전 확인하면 좋은 파일

수정 작업을 시작하기 전에 아래 파일들을 먼저 확인하면 전체 구조를 이해하기 쉽습니다.

- `_config.yml`
- `_data/navigation.yml`
- `_pages/about.md`
- `_pages/people/students.md`
- `_pages/people/alumnis.md`
- `_pages/publications.md`
- `_pages/equipment.md`
- `_pages/gallery.md`
