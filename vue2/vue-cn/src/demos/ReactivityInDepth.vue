<template>
    <div id="example">{{ message }}</div>
</template>

<script>
    import Vue from 'vue';

    var vm = new Vue({
        el: "#example",
        data: {
            message: '123'
        }
    })
    vm.message = 'new message';
    vm.$el.textContent  === 'new message';
    Vue.nextTick(function() {
        vm.$el.textContent === 'new message'; 
    });


    Vue.component('example', {
        template: '<span>{{ message }}</span>',
        data: function () {
            return {
                message: 'not updated'
            }
        },
        methods: {
            updateMessage: function () {
            this.message = 'updated'
            console.log(this.$el.textContent) // => 'not updated'
            this.$nextTick(function () {
                console.log(this.$el.textContent) // => 'updated'
            })
            }
        }
    })
</script>