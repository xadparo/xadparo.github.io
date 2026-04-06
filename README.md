# xadparo.github.io

Jekyll 기반 GitHub Pages 사이트의 최소 시작점입니다.

## 현재 상태

- 기존 페이지와 포스트를 제거하고 초기 상태로 되돌렸습니다.
- 배포 워크플로와 기본 Jekyll 설정은 유지되어 있습니다.
- 홈 화면은 새 사이트를 위한 임시 시작 페이지 한 장만 남겨둔 상태입니다.

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve --livereload
```

기본 접속 주소:
- http://127.0.0.1:4000

## 다음 작업 추천

1. 사이트 제목과 설명을 [`_config.yml`](/mnt/c/workspace/xadparo.github.io/_config.yml)에서 정리
2. 홈 화면을 [`index.md`](/mnt/c/workspace/xadparo.github.io/index.md)에서 새로 작성
3. 필요하면 레이아웃, 스타일, 포스트 구조를 다시 설계
