<template>
	<div id="app">

		<router-link to="/home">Home</router-link>
		<router-link to="/first">first</router-link>
		<router-link to="/second">second</router-link>

		<transition name="fade" mode="out-in">
			<router-view class="view"></router-view>
		</transition>
	</div>
</template>

<script>
    import first from './pages/first.vue';
    import second from './pages/second.vue';
    import subject from './pages/subjectcomponent.vue';

    export default {
        data () {
            return {
                msg: 'home,Hello Vue! & Hello World!'
            }
        },
        components: { first, second, subject }
    }
</script>

<style lang="sass">
	$primary-color: #f00！default;
	body {
		font-family: Helvetica, sans-serif;
	}

	h1 {
		color: $primary-color;
	}
</style>
