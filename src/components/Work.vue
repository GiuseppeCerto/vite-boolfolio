<script>
import axios from 'axios'
import WorkCard from './WorkCard.vue'
    export default {
        components: {
        WorkCard
    },
    data() {
        return {
            works: [],
            lastPage: 0,
            currentPage: 1,
            links: []
        }
    },
    methods: {
        fetchWorks(page) {

            axios.get('http://127.0.0.1:8001/api/works',{
                params: {
                    page: page
                }
            })
            .then(res => {

                const results = res.data.results
                this.links = results.links
                this.lastPage = results.last_page
                this.works = results.data
                this.currentPage = results.current_page
            })
            .catch(err => {
                console.log(err)
            })
        },

        fetchWorksByUrl(url) {
            axios.get(url)
            .then(res => {

                const results = res.data.results
                this.links = results.links
                this.lastPage = results.last_page
                this.works = results.data
                this.currentPage = results.current_page
            })
            .catch(err => {
                console.log(err)
            })
        }
    },

    mounted() {
        this.fetchWorks(this.currentPage)
    },
  }

</script>

<template>
    <div>
        <div class="works">
          <WorkCard v-for="work in works" :key="work.id" :work="work" /> 

            <ul class="pagination">
                <li :class="[ link.active ? 'active' : '', 'page-link']" v-for="link in links" @click="fetchWorksByUrl(link.url)" :key="link.label" v-html="link.label"></li>
            </ul>
        </div>
    </div>
</template>

<style >
    .works {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(3,1fr);
    }
    .pagination {
        background-color: white;
        padding: 20px;
        border-radius: 20px;
        display: flex;
        gap: 10px;
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%);
        padding: 5px, 0;
    }
    .page-link {
        background: #ddd;
        border-radius: 50%;
        width: 2rem;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        white-space: nowrap;
    }
    .page-link.active {
        background: crimson;
        color: white;
    }
</style>