<script>
import MyComponent from "./component/ComponentForList.vue";
export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [
        { id: 1, message: "foo", children: ["1", "2"] },
        { id: 2, message: "bar", children: ["a", "b"] },
      ],
      myObject: {
        title: "Vue 에서 목록을 작성하는 방법",
        author: "홍길동",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((e) => e % 2 === 0);
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
  },
  components: {
    MyComponent,
  },
};
</script>
<template>
  <li v-for="item in items">
    {{ item.message }}
  </li>

  <hr />

  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <hr />

  <li v-for="({ message }, index) in items">{{ message }} {{ index }}</li>

  <hr />

  <li v-for="item in items">
    <span v-for="childItem in item.children">
      &nbsp;{{ item.message }} {{ childItem }}
    </span>
  </li>

  <hr />

  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>

  <hr />

  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }} . {{ key }} : {{ value }}
    </li>
  </ul>

  <hr />

  <span v-for="n in 10"> {{ n }} &nbsp; </span>

  <hr />

  <ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>

  <hr />

  <template v-for="item in items">
    <li v-if="item.message !== 'foo'">
      {{ item }}
    </li>
  </template>

  <hr />

  <div v-for="item in items" :key="item.id">
    {{ item.message }} {{ item.children }}
  </div>

  <hr />
  <MyComponent v-for="item in items" :key="item.id" />

  <hr />

  <MyComponent
    v-for="(item, index) in items"
    :item="item"
    :index="index"
    :key="item.id"
  />

  <hr />

  <ul>
    <li v-for="n in evenNumbers">{{ n }}</li>
  </ul>

  <hr />

  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)">{{ n }}</li>
  </ul>
</template>
