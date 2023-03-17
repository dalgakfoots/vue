<script>
export default {
    data() {
        return {
            awesome : true,
            
            type : 'A',

            ok : false,
        }
    }
}
</script>
<template v-if="ok">

    <button @click="awesome = !awesome">전환</button>
    <h1 v-if="awesome">Vue 는 정말 멋지죠!</h1>
    <h1 v-else>아닌가요? 😂</h1>

    <div v-if="type === 'A'">
        A
    </div>
    <div v-else-if="type === 'B'">
        B
    </div>
    <div v-else-if="type === 'C'">
        C
    </div>
    <div v-else>
        A/B/C 아님
    </div>

    <div v-show="ok">
        V-SHOW
        <!-- display : none 으로 토글됨. 항상 렌더링 됨. -->

        <!-- 일반적으로 v-if는 전환 비용이 더 높고, 
            v-show는 초기 렌더링 비용이 더 높습니다. 
            따라서 매우 자주 전환해야 하는 경우 v-show를, 
            실행 중에 조건이 변경되지 않는 경우 v-if를 사용하는 것이 좋습니다. -->
    </div>

</template>