<!-- 구조(템플릿) -->
<template>
    <div>
        <div class="color_palette">
            <input type="radio" name="sel_color" id="selColor1" value="#221f23" v-model="pickColor" v-on:change="setFocus" />
            <label class="sel_color color1" for="selColor1"></label>

            <input type="radio" name="sel_color" id="selColor2" value="#ff3b3b" v-model="pickColor" v-on:change="setFocus" />
            <label class="sel_color color2" for="selColor2"></label>

            <input type="radio" name="sel_color" id="selColor3" value="#45b649" v-model="pickColor" v-on:change="setFocus" />
            <label class="sel_color color3" for="selColor3"></label>

            <input type="radio" name="sel_color" id="selColor4" value="#1fa2ff" v-model="pickColor" v-on:change="setFocus" />
            <label class="sel_color color4" for="selColor4"></label>
        </div>

        <div class="add_todo">
            <input v-model="todoItem" type="text" ref="add_todo" placeholder="할 일 입력" v-bind:style="{color: pickColor}" v-on:keyup.enter="addItem" autofocus />
            <button type="button" class="btn_add_todo" v-on:click="addItem">추가</button>
        </div>
    </div>
</template>

<!-- 동작(로직) -->
<script>
export default {
    data() {
        return {
            pickColor: '#221f23',
            todoItem: '',
            done: false,
        };
    },
    methods: {
        setFocus() {
            this.$refs.add_todo.focus();
        },
        addItem() {
            //빈값 체크
            if (this.todoItem !== '') {
                var value = this.todoItem.trim();
                var color = this.pickColor;

                this.$emit('addItem', value, color); //App 컴포넌트로 이벤트 전달
                this.clearInputbox();
            } else {
                alert('할 일을 입력해주세요.');
            }
        },
        clearInputbox() {
            this.todoItem = '';
        },
    },
};
</script>

<!-- 표현(스타일) -->
<style lang="scss" scoped>
.color_palette {
    margin: 0 auto 12px;
    width: 94%;
    text-align: center;

    input {
        display: none;

        &:checked + .sel_color {
            outline: 2px solid #9796f0;
            opacity: 1;
        }
    }
}
.sel_color {
    display: inline-block;
    margin: 0 6px;
    width: 27px;
    height: 27px;
    font-size: 0;
    vertical-align: top;
    opacity: 0.3;
    cursor: pointer;

    &.color1 {
        background-color: #221f23;
    }
    &.color2 {
        background-color: #ff3b3b;
    }
    &.color3 {
        background-color: #45b649;
    }
    &.color4 {
        background-color: #1fa2ff;
    }
}

.add_todo {
    margin-bottom: 12px;
    font-size: 0;

    & input {
        display: inline-block;
        margin: 0 3%;
        padding: 0 2%;
        width: 70%;
        height: 28px;
        font-size: 15px;
        border: 1px solid #ddd;
    }

    &.color1 input {
        color: #221f23;
    }
    &.color2 input {
        color: #ff3b3b;
    }
    &.color3 input {
        color: #45b649;
    }
    &.color4 input {
        color: #1fa2ff;
    }

    .btn_add_todo {
        display: inline-block;
        width: 17%;
        height: 30px;
        font-size: 15px;
        color: #fff;
        background-color: #96c93d;
    }
}
</style>
