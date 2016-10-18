<template>
	<div class="container">
		<img src="../assets/logo.png">
    <p>i am in layouts </p>

	</div>
</template>


<script>
  import VLink from '../component/VLink.vue';

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 15px 30px;
		background: #f9f7f5;
	}
</style>