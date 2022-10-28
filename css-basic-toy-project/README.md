# css 연습용 토이 프로젝트

- src/components에 css옵션인 이름의 컴포넌트를 생성함
  - ex) display의 경우 Display.tsx와 Display.css

# display

- none: 존재자체가 사라짐, 아예 렌더링되지 않음
- block
  - 가로 영역을 모두 채움
  - 다음에 등장하는 태그는 아랫줄에 나타남
- inline: 줄바꿈이 되지 않음, height나 width 지정 X
- inline-block
  - block과 inline의 중간
  - 줄바꿈은 되지 않음
  - height나 width 지정 가능

### flex

- 위의 것들과는 다르게 여러가지 태그를 담는 container가 가지는 display 속성

```
<div className="flex_container">
    <div>여기는</div>
    <div>flex</div>
    <div>container안</div>
    <div>입니다.</div>
</div>
```

- container안의 요소들은 마치 inline처럼 한 줄에 여러가지 태그가 나옴
- justify-content
  - 아이템들을 가로기준에서 어떻게 정렬할 것인지
  - 오른쪽에 모두 붙여서? 중앙에? 일정 간격을 두고 띄어서? 등등
- align-items
  - 세로축으로는 어떻게 보이게 할 것인지
  - container의 height에 딱 맞게? 아님 위에서 정렬?
  - 아래에서 정렬? 중앙에 정렬? 등등
- flex-direction: 아이템을 위치시킬 방향을 선택
  - 오른쪽에서 왼쪽으로?
  - 왼쪽에서 오른쪽으로?
  - 위에서 아래로?
  - 아래에서 위로?
- gap
  - 자식 태그들이 일정한 간격으로 떨어질 수 있도록 만듬
  - margin과 다른 점은 자식들 사이에만 공간을 만든다는 점
    - 불필요한 공간을 만들지 않음
- flex
  - flex-grow, flex-shrink, flex-basis을 한 번에 사용할 수 있는 축약어
  - flex-grow
    - 0일 경우 자식 태그의 내용물만큼의 크기만 감싼 공간을 할당
    - 1일 경우 자식 태그의 내용물과는 관계없이 컨테이너를 꽉채울 수 있도록 공간배정
      - 여백에 해당하는 크기만큼을 준 수치에 기반하여 비율로 나누어가짐
  - flex-shrink: 1일 경우 아이템의 크기를 flex-basis보다 작지 않도록 설정

- flex-flow
  - flex-direction, flex-wrap을 한 번에 쓸 수 있는 속성
  - flex-wrap: 컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 줄바꿈을 결정


### reference

- [none, inline, inline-block](https://ofcourse.kr/css-course/display-%EC%86%8D%EC%84%B1)
- [flex](https://studiomeal.com/archives/197)

# 단위에 대해서
- rem은 일종의 상대 단위
- px는 절대 단위임
- rem은 root의 font size를 기준으로 크기를 변경시킴
- em은 자신이 포함되고 있는 태그의 font size를 기준으로 변경시킴

# box-shadow
- box-shadow: 30px 30px 8px blue;
- 1번째는 해당 태그를 기준으로 얼마나 오른쪽에 위치시킬지를 결정
- 2번째는 해당 태그를 기준으로 얼마나 아래에 위치시킬지를 결정
- 3번째는 얼마나 색을 퍼지게 할 것인지를 결정, 높을수록 연함

# @media
- css에서 쓰는 일종의 조건문
- 이를 이용해서 반응형 웹을 만들 수 있을 듯?
```
@media (조건) {
  스타일
}
```
- 위의 형식으로 지정

```
@media (min-width: 1000px) {
    .media {
        background-color: black;
    }
}

@media (max-width: 1000px) {
    .media {
        background-color: red;
    }
}
```
- 1000px보다 커진다면 검은 배경색이 지정됨
- 1000px보다 작아진다면 빨간 배경색이 지정됨