<script>
export default {
  data() {
    return {
      message: "",
      checked: false,
      checkedNames: [], // 항상 현재 체크된 순서대로 값을 표함한다.
      picked: "",
      selected: "",
      options: [
        { text: "하나", value: "1" },
        { text: "둘", value: "2" },
        { text: "셋", value: "3" },
      ],
      toggle: false,
      pick: "",
      first: "1",
      second: "2",
      msg: "",
      age: "",
    };
  },
};
</script>

<template>
  <input :value="text" @input="(e) => (text = e.target.value)" />
  <!-- 위 코드는 아래와 같다. -->
  <input v-model="text" />
  <!-- v-model은 모든 폼 엘리먼트에서 감지되는 초기 value, checked 또는 selected 속성 값을 무시합니다.
   항상 현재 바인딩된 JavaScript 상태를 유효한 값으로 취급합니다.
   data 옵션을 사용하여 JavaScript에서 초기 값을 선언해야 합니다. -->
  <hr />
  <p>메세지 : {{ message }}</p>
  <input v-model="message" placeholder="메세지 입력하기" />
  <hr />

  <span>여러줄 메시지</span>
  <p style="white-spcae: pre-line">{{ message }}</p>
  <textarea v-model="message" placeholder="여러줄 입력">
  <!-- textarea 안에는 이중중괄호 문법은 적용되지 않는다.` -->
  </textarea>

  <hr />
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <hr />
  <div>체크된 이름 : {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="젝" v-model="checkedNames" />
  <label for="jack">젝</label>

  <input type="checkbox" id="john" value="존" v-model="checkedNames" />
  <label for="john">존</label>

  <input type="checkbox" id="mike" value="마이크" v-model="checkedNames" />
  <label for="mike">마이크</label>
  <hr />

  <div>선택한 것 : {{ picked }}</div>

  <input type="radio" id="one" value="하나" v-model="picked" />
  <label for="one">하나</label>
  <input type="radio" id="two" value="둘" v-model="picked" />
  <label for="two">둘</label>

  <hr />

  <div>선택됨 : {{ selected }}</div>

  <select v-model="selected">
    <!-- v-model 표현식의 초기 값이 옵션과 일치하지 않으면 <select> 엘리먼트가 "선택되지 않은" 상태로 렌더링됩니다.
         iOS에서는 이 경우 변경 이벤트를 발생시키지 않기 때문에 사용자가 첫 번째 항목을 선택할 수 없게 됩니다. 
        따라서 위의 예에서 설명한 것처럼 비활성화된 옵션에 빈 값을 제공하는 것이 좋습니다. -->
    <option disabled value="">다음 중 하나를 선택하세요</option>
    <option>가</option>
    <option>나</option>
    <option>다</option>
  </select>

  <hr />

  <div>선택됨 : {{ selected }}</div>

  <select v-model="selected" multiple>
    <option>가</option>
    <option>나</option>
    <option>다</option>
  </select>

  <hr />

  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>

  <div>선택됨 : {{ selected }}</div>

  <hr />

  <input
    type="checkbox"
    v-model="toggle"
    true-value="네"
    false-value="아니오"
  />
  {{ toggle }}

  <hr />
  <input type="radio" v-model="pick" :value="first" />
  <input type="radio" v-model="pick" :value="second" />
  {{ pick }}

  <hr />

  <select v-model="selected">
    <option :value="{ number: 123 }">123</option>
  </select>

  <hr />

  <!-- input 대신 change 이벤트 이후 동기화됨 -->
  <input v-model.lazy="msg" /> {{ msg }}
  <!-- 사용자 입력을 자동으로 숫자로 유형변환 하도록 함 -->
  <br /><input v-model.number="age" /> {{ typeof age }}
  <!-- 사용자의 입력의 공백을 자동으로 트리밍 한다. -->
  <br /><input v-model.trim="msg" /> {{ msg }}
</template>
