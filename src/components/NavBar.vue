<template>
    <header class="container">
        <div class="navbar nav">
            
            <router-link :to="{ name: 'home'}">Boolpress</router-link>
        
            <ul class="nav__menu">

                <li>
                    <router-link :to="{name: 'home'}">Home</router-link>
                </li>

                <li>
                    <router-link :to="{name: 'portfolio'}">Portfolio</router-link>
                </li>

                <li>
                    <router-link :to="{name: 'about'}">About Me</router-link>
                </li>

            </ul>
        
        </div>
    </header> 
</template>
  
<script>

    export default {

    }

</script>
  
<style scoped>

ul,li,menu{
    list-style: none;
    color: black;
}
.navbar{
    width: 1280px;
}

.navbar *{
    font-size: 20px;
}
.nav, .nav__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
</style>