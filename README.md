- **UI/UX**
  - 팀만의 창의적인 UI/UX로 과제를 만드세요. (예시는 예시일뿐 입니다)
  - 예시에 없어도 팀에서 만들고 싶은 기능이 있다면 **OK!**
- **필수 요구 사항**
  - **동적 라우팅을 사용**하세요.
  - 1개 이상의 `Custom Hook`을 구현하세요.
  - **Form에 유효성 검증 기능을 적용**하세요. _유효성 검증이란, 아래의 예시들을 의미합니다._
    - ex: 제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없도록 제한 → `Alert` 으로 안내
    - ex: Form에서 모든 input에 값을 입력하지 않으면, 버튼이 비활성화
  - 버튼 **컴포넌트 1개로 모든 버튼을 구현**하세요. 모든 스타일과 기능을 버튼을 구현할 수 있는 **만능 버튼**을 만들어보는 것 입니다.
  - `development` 환경에서만 `redux devtool`이 활성화 되도록 처리합니다.
  - 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리합니다.
  - `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리합니다.

---

feat : 새로운 기능에 대한 커밋

fix : 버그 수정에 대한 커밋

build : 빌드 관련 파일 수정에 대한 커밋

chore : 그 외 자잘한 수정에 대한 커밋

ci : CI관련 설정 수정에 대한 커밋

docs : 문서 수정에 대한 커밋

style : 코드 스타일 혹은 포맷 등에 관한 커밋

refactor : 코드 리팩토링에 대한 커밋

test : 테스트 코드 수정에 대한 커밋