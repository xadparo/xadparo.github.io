# xadparo.github.io

`xadparo`의 Markdown 기반 GitHub Pages 블로그(Jekyll) 프로젝트입니다.

## 포함된 기능

- `_posts`의 Markdown 글을 페이지로 자동 생성
- 포스트 디렉터리 구조를 카테고리 메타데이터로 사용
- 로컬 개발 서버에서 변경사항 자동 반영(`livereload`)
- `main` 브랜치 푸시 시 GitHub Actions로 Pages 자동 배포

## 글 작성 방식

게시글 파일 위치(권장 규칙):
- `_posts/{post-group nested path}/YYYY-MM-DD-title.md`
- 예: `_posts/dev/frontend/2026-03-05-nextjs-isr.md`

이 구조에서 `dev/frontend`는 Jekyll의 `categories`로 해석됩니다.

빠른 생성(입력 최소화):
```bash
./script/new-post
# -> _posts/inbox/YYYY-MM-DD-post-HHMMSS.md 생성

./script/new-post "포스트 제목"
# -> _posts/inbox/YYYY-MM-DD-{slug}.md 생성

./script/new-post dev/frontend "Next.js ISR 정리"
# -> _posts/dev/frontend/YYYY-MM-DD-{slug}.md 생성
```

예시 front matter:
```markdown
---
---

본문 Markdown
```

참고:
- `categories`는 front matter에 쓰지 않아도 디렉터리 경로에서 자동 파생됩니다.
- `layout`은 `_config.yml` 기본값으로 자동 적용됩니다.

## 로컬 서빙 (권장: Docker)

시작:
```bash
docker compose up
```

접속:
- http://127.0.0.1:4000

특징:
- 파일 수정 시 자동 빌드/자동 새로고침
- 로컬 Ruby 버전 영향을 받지 않음

## 로컬 서빙 (로컬 Ruby 직접 사용)

권장 런타임:
- Ruby 3.x
- Bundler 2.x

설치 및 실행:
```bash
bundle config set path vendor/bundle
bundle install
bundle exec jekyll serve --livereload
```

## GitHub Pages 자동 배포

워크플로 파일:
- `.github/workflows/pages.yml`

필수 설정(저장소 한 번만):
1. GitHub 저장소 `Settings > Pages`
2. `Build and deployment`의 Source를 `GitHub Actions`로 선택

이후 `main`에 푸시하면 자동으로 빌드/배포됩니다.
