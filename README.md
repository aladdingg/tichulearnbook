# 티츄 모바일 설명서

현재 디자인과 기능을 보존한 GitHub / Vercel 배포용 소스입니다.

## 로컬 실행
Node.js 22 이상 설치 후:
```
npm ci
npm run dev
```
## 배포
GitHub 저장소 루트에 이 폴더의 내용물을 올립니다. Vercel에서 해당 저장소를 Import하고 Next.js 기본 설정으로 Deploy합니다.
- Framework: Next.js
- Root Directory: ./
- Build Command: npm run build
- Install Command: npm ci
- Output Directory: 기본값 유지

node_modules, .next*, .env*, *.tsbuildinfo는 업로드하지 않습니다.
public의 카드와 폰트는 실제 사용 및 동적 경로 참조를 위해 원본 그대로 유지했습니다.
앞으로 수정할 파일은 src 안에 있으며, 변경사항을 GitHub에 push하면 연결된 Vercel이 자동 배포합니다.
