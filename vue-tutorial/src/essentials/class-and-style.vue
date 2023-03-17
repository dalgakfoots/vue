<script>
export default {
    data() {
        return {
            isActive : true,
            hasError : false,
            classObject : {
                active : true,
                'text-danger' : false,
            } ,
            error : null,
            activeClass : 'active',
            errorClass : 'text-danger',

            activeColor : 'red',
            fontSize : 30,

            styleObject : {
                color : 'green',
                fontSize : '60px',
            } , 
        }
    } ,
    computed : {
        computedClassObject () {
            return {
                active : this.isActive && !this.error,
                'text-danger' : this.error && this.error.type === 'fatal'
            }
        }
    }
}
</script>

<template>
    <div class="static"
        :class="{active : isActive , 'text-danger' : hasError}">
        isActive : {{ isActive }}
    </div>

    <div :id="`test`"
        :class="classObject"> test</div>

    <div :class="computedClassObject">
        computedClassObject
    </div>

    <div :class="[activeClass , errorClass ]">
        binding-to-arrays
    </div>

    <div :class="[isActive ? activeClass : '' , errorClass]">
        Conditional Operator
    </div>

    <p :class="$attrs.class">HELLO!</p>

    <div :style="{
        color : activeColor,
        fontSize : fontSize + 'px'
    }"> style binding </div>

    <div :style="styleObject"> style binding 1 </div>

    <div :style="{ display : ['flex' , '-webkit-box' , '-ms-flexbox']}">
        multiple value
        <!-- 브라우저가 지원하는 배열 내 마지막 값을 렌더링 한다. -->
    </div>
</template>