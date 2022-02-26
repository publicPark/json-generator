# 테스트 케이스 제너레이터

코딩 테스트 케이스 데이터를 수동으로 입력하다가 지쳐서 케이스 생성기를 만들고 있는 중입니다.\
리액트는 잘 몰라서 공부하는 중이고용.\
그룹이 여러개 있을 수 있고 각 그룹에는 여러개의 옵션이 있을 수 있는데요, 
### `그룹 추가 폼`
'그룹 추가' 버튼을 누르면 title(String), options(Array)로 이루어진 오브젝트를 추가할 수 있습니다. 그룹 최대 N개 추가했다고 하자.\
그리고 옵션 추가 버튼을 눌러 각 그룹에 옵션을 최대 M개 추가.

### `리스트 생성`
그룹, 옵션을 입력한 것을 바탕으로 각 그룹의 옵션을 조합한 모든 경우의 수 리스트를 생성합니다.\
이건 재귀함수로 구현. (다음 그룹에 있는 애를 하나씩 푸시하는)\
각 옵션 수를 모두 곱한 수가 리스트의 length가 되겠지.\
옵션이 최대 M개, 그룹은 최대 N개니 length는 최대 M의 N제곱이 되겠다.\
Oh.. 이건.. 위험하다.. 어느 정도 선에서 더 이상 추가할 수 없게 막아야만 한다.. 그룹과 옵션 둘다..

각 조합 항목에 '남은 개수'를 입력할 수 있다.\
그 후 테스트에 맞게 데이터를 약간 가공.\
데이터의 최종 형태는 이렇게 될 것이다.

{\
  titleList: [a, b, c],\
  optionList: [\
    [ optionNameList, remainCount ]\
  ]\
}