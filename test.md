그리드, 플로트, 플렉스

부모에 display flex
자녀들은 flexitem이 된다.
보통 인라인 플렉스 보다 그냥 플렉스를 준다.
플렉스는 display block과 같다.
flex direction은 float left right 로우 칼럼 인버스
flex wrap은 wrap nowrap만..
nowrap이 기본이고 wrap이 플로트 처럼 떨어진다.
flexflow는 축약법

justcontent flex엔드  
스페이스 비트윈은 알아서 자녀가 양옆으로 갖는 패딩?이 똑같은거
스페이스 어라운드는 비트윈이랑 같은데 첫번째 마지막에도 마진이 있다 
스페이스 evenly는 어라운드랑 다르게 간격이 전부 동일하다
align item 스트레치 센터 엔드 스타트 만 주로 쓴다
align item 은 개별적인거 align content는 좀 더 전체적인거
align self는 개별적인거 잡아서 하나만 바꾸고 싶을때

flex :숫자는 축약법 된거임 li에 정해놓고 li 개별 잡아서 값을 주면 
flex basis:100px 베이시스는 크기이다 이게 플렉스보다 더 우선순위에 있다. 

오토 리네임 태그
       


<br>
<br>
<br>
<br>
<br>
<br>
<br>


best seller 에서 ul li a 의 a 태그를 막는 방법
 1. href 속성을 'javascript:void(0);'으로 지정해준다.
-> 자바스크립트에서 void(0)은 undefined라서 반환해주는 것 없이 현재 페이지 유지
ex )

<a href='javascript:void(0);'>페이지 이동x</a>


 2. preventDefault() 사용하기
->preventDefault 메소드는 이벤트를 취소할때 사용하는 메소드로서 클릭 이벤트를 취소하여 페이지 이동을 막을 수 있습니다.

ex)

a태그를 클릭하면 onClick속성에 정의되어 있는 함수가 실행되고 preventDefalut()에 의하여 클릭이벤트가 취소

<a href='javascript:void(0)' id='test' onclick='preventClick(event)'>클릭</a>

function preventClick(e){
	e.preventDefalut()
}


스와이퍼 flex wrap 없애고 direction을 칼럼으로 선택 후 저스티스파이를 center로 ,.., align도 삭제해도 된다.