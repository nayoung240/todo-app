# [리액트를 다루는 기술] 10장 일정 관리 웹 애플리케이션 만들기

![](https://velog.velcdn.com/images/fzerome240/post/01c50ac7-9a74-4586-825d-e29e98398320/image.png)
### 프로젝트 생성
```
$ yarn create react-app todo-app
```

### 라이브러리 설치 - sass, classnames, react-icons
```
$ yarn add sass classnames react-icons
```

## 컴포넌트 구조
```
App.js -- todotemplate
       -- todoinsert
       -- todolist -- todolistitem
```

- 부모 컴포넌트(App.js)에서 자식 컴포넌트에서 사용할 함수, 변수를 props로 설정해준다.

## import 패키지

### import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md'
: 아이콘
### import cn from 'classnames'
: className을 두개 이상 사용하고 싶을 때, 조건 결과값에 맞게 출력하고 싶을 때
```
className={cn("checkbox", {checked})} // checked가 true면 className="checkbox checked"
```