# ssongseung.github.io

퍼블리셔 5년 + 프론트엔드 개발자 송승현의 포트폴리오 사이트입니다.

**🔗 https://ssongseung.github.io**

## 기술 스택

- React 19 + Vite 7
- Tailwind CSS 4
- GitHub Pages (`gh-pages` 브랜치 배포)

애니메이션 라이브러리 없이 React 훅과 CSS만으로 인터랙션을 구현했습니다.

## 주요 인터랙션

| 섹션 | 인터랙션 |
| --- | --- |
| Nav | 스크롤 진행률 바, 현재 섹션 표시, 밑줄 애니메이션 |
| Hero | 텍스트 마스크 리빌, 마우스 추적 스포트라이트, 타이핑 효과, 카운트업, 마그네틱 버튼 |
| Stack | 무한 루프 마퀴 (hover 시 정지) |
| About | 마우스 위치를 따라가는 스포트라이트 보더 카드 |
| Career | 스크롤에 따라 채워지는 타임라인, `grid-template-rows` 아코디언 |
| Project | 3D 틸트 카드, 커서를 따라다니는 썸네일 미리보기, 슬라이딩 필터 |
| Contact | 이메일 복사 + 토스트 |

모든 모션은 `prefers-reduced-motion` 설정 시 비활성화됩니다.

## 시작하기

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173)
```

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | `dist/` 폴더에 프로덕션 빌드 |
| `npm run preview` | 빌드 결과물 로컬 미리보기 |
| `npm run lint` | ESLint 검사 |
| `npm run deploy` | `dist/`를 `gh-pages` 브랜치에 배포 |

## 배포

```bash
# 1. 빌드
npm run build

# 2. (선택) 빌드 결과 확인
npm run preview

# 3. 배포 — dist 폴더가 gh-pages 브랜치로 푸시됨
npm run deploy

# 4. 소스 코드도 main 브랜치에 반영
git add -A
git commit -m "작업 내용"
git push
```

- 배포 후 1~2분 정도 지나면 사이트에 반영됩니다. 바로 안 보이면 강력 새로고침(Cmd+Shift+R)을 해 주세요.
- `npm run deploy`는 빌드를 하지 않으므로, **반드시 `npm run build`를 먼저 실행**해야 최신 내용이 올라갑니다.
- GitHub 저장소 **Settings → Pages → Source**가 `gh-pages` 브랜치로 설정되어 있어야 합니다.

## 프로젝트 구조

```
src/
├── components/
│   ├── sections/        # Hero, About, Career, Projects, Contact
│   ├── Project/         # ProjectCard, ProjectArchive, Filter, Tag
│   ├── Nav.jsx
│   ├── Marquee.jsx
│   ├── CareerItem.jsx
│   └── ...
├── data/                # 화면에 노출되는 콘텐츠
│   ├── profileList.js
│   ├── careerList.js
│   └── projectList.js
├── hooks/
│   ├── useReveal.js         # 스크롤 진입 시 등장 애니메이션
│   ├── useActiveSection.js  # Nav 현재 섹션 추적
│   └── useInteraction.js    # 마그네틱, 틸트, 스포트라이트, 카운트업, 타이핑
└── assets/
    └── index.css        # 테마 컬러 토큰, 애니메이션 정의
public/images/           # 프로젝트 썸네일
```

## 콘텐츠 수정

코드를 건드리지 않고 `src/data/` 파일만 수정하면 됩니다.

- **`profileList.js`** — 소개 문구, Hero 타이핑 키워드, 수치(`stats`), 기술 스택 마퀴, 스킬 카드
- **`careerList.js`** — 경력 타임라인 (배열 순서의 역순 = 최신순으로 노출)
- **`projectList.js`** — 프로젝트 목록
  - `featured: true` → 상단 Selected Work 카드로 노출
  - `tags` → 필터 분류 (`구축` / `운영` / `이벤트/프로모션`)
  - `url`을 비워두면 링크 없이 표시
  - 썸네일은 `public/images/`에 넣고 `/images/파일명`으로 지정

테마 컬러는 `src/assets/index.css`의 `@theme` 블록에서 변경할 수 있습니다.
