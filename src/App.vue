<template>
    <div id="app">
        <div class="wrap">
            <div class="todo_wrap">
                <div class="todo_top">
                    <h1 class="todo_title">To Do</h1>
                    <todo-input v-bind:propsData="todoItems" v-on:addItem="addItem"></todo-input>
                </div>
                <div class="todo_mid">
                    <todo-list v-bind:propsData="todoItems" v-on:removeItem="removeItem"></todo-list>
                    <div class="todo_bottom">
                        <!-- <button type="button" class="btn btn_sort_all">전체</button>
                        <button type="button" class="btn btn_sort_undone">미완료</button> -->
                        <button type="button" class="btn btn_remove_list" v-on:click="removeAll">전체 삭제</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/css/common.css';
import TodoInput from '@/components/todo-input';
import TodoList from '@/components/todo-list';

export default {
    data() {
        return {
            todoItems: [],
        };
    },
    methods: {
        addItem(todoItem, color) {
            //localStorage.setItem(todoItem, todoItem)
            this.todoItems.push({text: todoItem, done: false, color: color});
        },
        removeItem(todoItem, index) {
            //localStorage.removeItem(todoItem)
            this.todoItems.splice(index, 1);
        },
        removeAll() {
            //localStorage.clear()
            this.todoItems = [];
        },
    },
    components: {
        //지역 컴포넌트 선언
        'todo-input': TodoInput,
        'todo-list': TodoList,
    },
};
</script>

<style lang="scss" scoped>
#app {
    height: 100%;
}

.wrap {
    height: 100%;
    overflow: hidden;
}
.todo_wrap {
    margin: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    max-width: 540px;
    background-color: #fff;
    overflow: hidden;
}

@media screen and (min-width: 541px) {
    .todo_wrap {
        margin: 20px auto;
    }
}

.todo_top {
    height: 131px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

    .todo_title {
        margin: 0;
        height: 50px;
        line-height: 48px;
        font-size: 27px;
        color: #96c93d;
        text-align: center;
    }
}

.todo_mid {
    height: 100%;
}

.todo_bottom {
    padding: 0 6px;
    height: 50px;
    line-height: 43px;
    text-align: right;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.17);

    .btn {
        margin: 0 6px;
        padding: 0 10px;
        display: inline-block;
        height: 30px;
        font-size: 14px;
        line-height: 1;
        color: #fff;
        background-color: #00b09b;
    }

    .btn_remove_all {
        position: absolute;
        right: 20px;
        bottom: 2px;
        z-index: 10;
    }
}
</style>
