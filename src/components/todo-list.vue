<template>
    <ul class="todo_list">
        <li class="todo_empty" v-if="propsData.length === 0">
            할 일을 작성해보세요.
        </li>
        <li class="todo_item" v-for="(todoItem, index) in propsData" :key="index" v-bind:class="{done: todoItem.done}" v-else>
            <label>
                <input type="checkbox" v-on:change="toggle(todoItem)" v-bind:checked="todoItem.done" />
                <span class="todo_check" v-if="todoItem.done">✓</span>
                <span class="todo_check" v-else></span>
                <span class="todo_text" v-bind:style="{color: todoItem.color}">{{ todoItem.text }}</span>
            </label>
            <button type="button" class="todo_remove" v-on:click="removeItem(todoItem, index)">×</button>
        </li>

        <!-- <li class="todo_item" v-for="(todoItem, index) in propsData" :key="todoItem" v-bind:class="{done: isDone === index}">
                <span class="todo_remove" v-on:click="removeItem(todoItem, index)">x</span>
                <span class="todo_text" v-on:click="doneItem(index)">{{ todoItem }}</span>
                <span class="todo_check">✓</span>
            </li> -->
    </ul>
</template>

<script>
export default {
    data() {
        return {
            todoItems: [
                {text: '1. 할 일 작성하기', done: true},
                {text: '2. 한 일 완료하기', done: true},
                {text: '3. 글자 색 변경하여 작성하기', done: false, color: '#ff3b3b'},
                {text: '4. 모두 삭제하기', done: false, color: '#1fa2ff'},
            ],
        };
    },
    props: ['propsData'],
    methods: {
        removeItem(todoItem, index) {
            this.$emit('removeItem', todoItem, index); //App 컴포넌트로 이벤트 전달
        },
        // doneItem(index) {
        //     this.isDone = index
        //     //this.isDone && !this.isDone
        //     //this.$emit('doneItem', todoItem, index) //App 컴포넌트로 이벤트 전달
        // },
        toggle: function(todo) {
            todo.done = !todo.done;
        },
    },
};
</script>

<style lang="scss" scoped>
.todo_list {
    height: calc(100% - 180px); //-131px
    overflow: auto;

    .todo_empty {
        padding: 40px 20px;
        border-top: 1px solid #f4f4f4;
        color: #aaa;
        font-size: 14px;
        text-align: center;
    }

    .todo_item {
        padding: 8px 10px;
        font-size: 14px;

        & + .todo_item {
            border-top: 1px solid #eee;
        }

        input {
            display: none;
        }

        .todo_remove,
        .todo_text,
        .todo_check {
            display: inline-block;
        }

        .todo_text.color1 {
            color: #221f23;
        }
        .todo_text.color2 {
            color: #ff3b3b;
        }
        .todo_text.color3 {
            color: #45b649;
        }
        .todo_text.color4 {
            color: #1fa2ff;
        }

        .todo_check {
            width: 21px;
            color: #9796f0;
            font-size: 16px;
            line-height: 1;
            vertical-align: top;
        }

        .todo_remove {
            float: right;
            margin-top: -3px;
            width: 18px;
            height: 18px;
            line-height: 1;
            font-size: 18px;
            color: #ff3b3b;
            opacity: 0;
            cursor: pointer;
        }

        &:hover .todo_remove,
        &:active .todo_remove {
            opacity: 1;
        }

        &.done .todo_text {
            text-decoration: line-through;
            opacity: 0.4;
        }
        &.done .todo_check {
            display: inline-block;
        }
    } //_todo_item
}
</style>
