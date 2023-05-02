<template>
    <div class="work-card">
      <h3>{{ work.name }}</h3>
      <p>{{ work.type ? work.type.name : '-' }}</p>
      <ul class="technologies-list" v-if="work.technologies && work.technologies.length > 0">
        <li class="technologies" v-for="technologies in work.technologies" :key="technologies.id">{{ technologies.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        work: {
          type: Object,
          required: true
        }
      },
      mounted() {
        console.log(this.work.category)
      },
    }
  </script>
  
  <style scoped>

  .work-card{
    background-color: rgb(224, 213, 213);
    border-radius: 15px;
  }
  .technologies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    list-style: none;
  }
  .technologies {
    padding: 0 1rem;
    line-height: 24px;
    font-size: 12px;
    border-radius: 999px;
    background: #a7a7a7;
  }
  </style>