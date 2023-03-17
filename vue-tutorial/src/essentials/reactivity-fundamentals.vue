<script>
import { nextTick } from 'vue';

    export default {
        data() {
            return {
                count : 1,
                obj : {
                    nested : {count : 0},
                    arr : ['foo' , 'bar']
                }
            }
        } ,
        
        methods: {
            increment() {
                this.count++
            } , 

            mutateDeeply() {
                this.obj.nested.count++;
                this.obj.arr.push('baz');
            }
        },

        mounted() {
            console.log(this.count);
            this.increment();
        }
    }
</script>

<template>
    <h1>{{ count }}</h1>
    <button @click="increment">{{ count }}</button>

    <hr/>
    <h1>{{ obj.nested.count }}</h1>
    <p>{{  obj.arr }}</p>
    <button @click="mutateDeeply">mutateDeeply</button>
</template>