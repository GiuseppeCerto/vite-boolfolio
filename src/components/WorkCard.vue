<template>
    <div class="work-card">
        <router-link :to="{ name: 'portfolio', params: { slug: work.slug } }">
            <h3>{{ work.name }}</h3>
            <p>{{ work.type ? work.type.name : '-' }}</p>
            <ul class="technologies-list" v-if="work.technologies && work.technologies.length > 0">
                <li class="technologies" v-for="technologies in work.technologies" :key="technologies.id">{{ technologies.name }}</li>
            </ul>
        </router-link>
    </div>
</template>
  
<script>
    import Button from './Button.vue';
    export default {
        components: {
            Button
        },
        props: {
            work: {
            type: Object,
            required: true
            }
        },
    }
</script>
  
<style scoped>

.work-card{
    background-color: rgba(224, 213, 213, 0.3);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.technologies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin-left: 10px;
    margin-right: 10px;
}
.technologies {
    padding: 0 1rem;
    line-height: 24px;
    font-size: 12px;
    border-radius: 999px;
    background: #a7a7a7;

}
</style>