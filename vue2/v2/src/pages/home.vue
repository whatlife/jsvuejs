<template>
	<router-link to="/home" exact>
		<p class="logo">
			<img src="../assets/logo.png">
		</p>
	</router-link>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
    components: {
        MainLayout
    }
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
	
	.logo {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 44px;
		height: 44px;
		margin: 0;
		img {
			width: 100%;
		}
	}
</style>