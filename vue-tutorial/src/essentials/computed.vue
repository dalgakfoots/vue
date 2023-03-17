<script>
export default {
    data() {
        return {
            author: {
                name: 'John Doe',
                books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
                ]
            } ,
            firstName : 'John',
            lastName : 'Doe',
        }
    },

    computed : {
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'YESS' : 'NOO';
        } ,
        fullName : {
            get() {
                return this.firstName + ' ' + this.lastName
            }, 
            set(newValue) {
                [this.firstName , this.lastName] = newValue.split(' ');
            }
        }
    } , 

    methods: {
        calculateBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No'
    }
}
}
</script>

<template>
    <p>책을 가지고 있다.</p>
    <span>
        {{ publishedBooksMessage }}
        <!-- 함수의 직접 호출은 리렌더링이 발생할 때 마다 함수를 실행하게 된다. -->
        {{ calculateBooksMessage() }}
        <hr/>
        {{  fullName }} 
    </span>
</template>