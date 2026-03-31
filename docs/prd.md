# 프로젝트
## 목표: 
1. 평범한 사람이 사용하기 편한 마이크로 웹 서비스 개발
2. 1개의 컨텐츠 당 1개의 웹 페이지로 개발
3. 첫 화면에는 랜딩 페이지와 마이크로 웹 서비스 리스트
4. 일단 10개의 페이지 생성해서 연결해줘.

## 컨셉
1. 인간 나이 20살 ~ 80살 까지 살면서 필요한 유틸이나 정보를 전달하는 서비스



## archtecct
1. cleanarchitect
2. monopero


## 기술 스택 및 버전 고정

| 구분 | 패키지 | 버전 | 용도 |
|------|--------|------|------|
| **패키지 매니저** | pnpm | 9.x | workspace 관리 |
| **빌드 시스템** | Turborepo | latest | monorepo 빌드 오케스트레이션 |
| **런타임** | Node.js | 20.x LTS | 백엔드 실행 |
| **언어** | TypeScript | 5.x | 전체 타입 안전성 |
| **백엔드** | Fastify | 5.x | HTTP 서버 |
| **WebSocket** | ws | 8.x | 키움 WebSocket 클라이언트 |
| **프론트엔드** | Next.js | 16.x (App Router) | 대시보드 |
| **UI** | shadcn/ui + Tailwind CSS 3 | latest | 컴포넌트 라이브러리 |
| **상태관리** | Zustand | latest | 클라이언트 상태 |
| **프로세스** | PM2 | latest | 프로세스 관리 |
| **테스트** | Vitest | latest | 단위/통합 테스트 |