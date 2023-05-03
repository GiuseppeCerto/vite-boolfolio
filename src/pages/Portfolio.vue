<template>
    <DefaultLayout>
        <div class="container">
            <h1>Portfolio</h1>
        </div>
        <div class="container">
            <Work  />
        </div>
  
    </DefaultLayout>
</template>
  
<script>
    import DefaultLayout from '../layouts/Default.vue';

    import Work from '../components/Work.vue';
  
    export default {

        components: {
            Work,
            DefaultLayout
        }
      
    }
</script>
  
<style scoped>

</style>