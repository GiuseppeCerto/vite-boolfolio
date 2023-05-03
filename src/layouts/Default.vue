<template>

    <NavBar/>

    <main>
        <slot />

    </main>

    <footer>

        <div class="container">
            FOOTER DEFAULT      
        </div>

    </footer>

</template>
  
<script>

    import NavBar from '../components/NavBar.vue';

        export default {
            
        components: {
            NavBar
        }
      
    }

</script>
  
<style scoped>

</style>