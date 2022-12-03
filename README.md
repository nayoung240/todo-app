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

### 컴포넌트 구조
App.js -- todotemplate
       -- todoinsert
       -- todolist -- todolistitem


### import
- 아이콘
react-icons/md - MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdAdd
- 클래스명
classnames - cn