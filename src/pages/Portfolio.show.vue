<template>
    <DefaultLayout>
        <template v-if="loading === false">
            <div>
                <h1>
                    {{ work.title }}
                </h1>
                <p v-if="work.type">{{ work.type.name }}</p>
  
                <ul >
                    <li v-for="tag in work.technology" :key="technology.slug">{{ technology.name }}</li>
                </ul>
            </div>
  
            <div class="container">
                <div v-html="work.description"></div>
            </div>
  
            <div class="container" v-if="relatedWorks.length > 0">
                <ul>
                    <li v-for="related in relatedWorks" :key="related.id">
                        <WorkCard :work="related" />
                    </li>
                </ul>
  
            </div>
  
        </template>

            <div v-else>

                ...loading

            </div>

        </DefaultLayout>

  </template>
  
  <script>
  import DefaultLayout from '../layouts/Default.vue'; 
  import WorkCard from '../components/WorkCard.vue';
    export default {
      components: {
        DefaultLayout,
        WorkCard
      },
      data() {
        return {
          work: null,
          loading: true
        }
      },
      props: ['slug'],
      computed: {
        relatedWorks() {
          if(this.work.relatedWorks) {
            return this.work.relatedWorks
          }
          return []
        }
      },
      methods: {
        fetchWork(slug) {
          this.loading = true
          axios.get(`http://127.0.0.1:8001/api/work/${ slug }`)
          .then(res => {
            const { success, work } = res.data
            if(success) {
              this.work = work
            } else {

              this.$router.replace({ name: '404' })
            }
          })
          .catch(err => {

            this.$router.replace({ name: '404' })
          })
          .finally(() => {
            
            this.loading = false
          }) 
        }
      },
      created() {
        this.fetchWork(this.slug)
      },
      beforeRouteUpdate(to,from) {
        const newSlug = to.params.slug
        console.log(newSlug)
        
        this.fetchWork(newSlug)
      }
      
    }
  </script>
  
  <style lang="scss" scoped>

  </style>