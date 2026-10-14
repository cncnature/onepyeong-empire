# 일평제국 안드로이드 앱

구석기 1평에서 근대 제국까지 키우는 시대 진화 전략 게임의 안드로이드(APK) 프로젝트입니다.
HTML5 게임(`www/index.html`)을 Capacitor로 감싼 구조이며, 가로 화면 전용·몰입형 전체화면으로 실행됩니다.

- 앱 이름: 일평제국 / 패키지: `com.medihealthtech.onepyeong`
- 최소 안드로이드 7.0 (API 24) 이상
- 저장: 폰 안에 자동 저장 (10초마다, 앱을 내릴 때도 저장)

## 방법 1 — GitHub가 APK를 자동으로 만들어 주기 (PC 설치 불필요)

1. https://github.com 에 로그인 → 오른쪽 위 **+** → **New repository**
   - 이름: `onepyeong-empire` / **Private** 선택 → **Create repository**
2. 새 저장소 화면에서 **uploading an existing file** 클릭
3. 이 zip을 푼 폴더 안의 **파일과 폴더 전부**(android, scripts, www, package.json 등)를 드래그해서 올리고 **Commit changes**
4. `.github` 폴더는 숨김 폴더라 드래그에서 빠질 수 있습니다. 그런 경우:
   - 저장소에서 **Add file → Create new file**
   - 파일 이름 칸에 `.github/workflows/build-apk.yml` 입력
   - 이 zip의 `.github/workflows/build-apk.yml` 내용을 그대로 붙여넣고 **Commit changes**
5. 상단 **Actions** 탭 → **일평제국 APK 빌드** 실행이 끝날 때까지 약 5~8분 대기 (초록 체크)
   - 자동으로 안 돌았다면 **Run workflow** 버튼을 누르세요
6. 완료된 실행을 눌러 맨 아래 **Artifacts → onepyeong-empire-apk** 다운로드 → 압축을 풀면 `.apk` 파일

## 방법 2 — 내 PC의 Android Studio로 빌드

1. Node.js 22, Android Studio(최신) 설치
2. 이 폴더에서 터미널: `npm install` → `npm run sync`
3. Android Studio에서 `android` 폴더 열기 → 메뉴 **Build → Build APK(s)**
   - 결과: `android/app/build/outputs/apk/debug/app-debug.apk`

## 폰에 설치하기

1. APK 파일을 폰으로 옮기기 (카카오톡 나에게 보내기, 구글 드라이브, USB 등)
2. 폰에서 APK 파일을 눌러 설치
3. "출처를 알 수 없는 앱" 경고가 나오면 **설정 → 이 출처 허용** 후 설치
   (직접 만든 앱이라 플레이스토어 서명이 없어서 나오는 정상적인 안내입니다)

## 조작

- 영지: 한 손가락 드래그로 이동, 두 손가락으로 확대·축소, 땅을 눌러 분양·건설
- 밤 습격: 화면을 좌우로 끌어 부대 이동, 🔥 폭격 버튼 → 화면 탭, 📯 함성, ⏩ 배속
- 원정: 월드맵 → 도전 → 영웅 5명 편성 → 전투 시작, 스킬 카드를 눌러 기술 사용
- 안드로이드 뒤로가기: 열린 창을 닫고, 마지막엔 두 번 눌러 종료
- ⚙ 메뉴 → **테스트 치트**: 자원·군사력 +100M, 뽑기권 +1000, 지금 습격

## 게임 수정 후 다시 빌드

`www/index.html`만 바꿔서 GitHub에 다시 올리면 Actions가 새 APK를 자동으로 만듭니다.
버전을 올릴 때는 `android/app/build.gradle`의 `versionCode`(숫자 +1)와 `versionName`을 바꿔 주세요.

## 플레이스토어 출시 시 추가로 필요한 것

- 업로드 키로 서명한 릴리스 빌드(`.aab`) — 지금 만드는 APK는 테스트용(debug) 서명입니다
- Google Play Console 개발자 계정(1회 $25). 법인(조직) 계정으로 등록하면 개인 계정의 비공개 테스트 의무 절차를 피할 수 있습니다
- 개인정보처리방침 URL, 게임 등급 설문, 스토어 스크린샷
