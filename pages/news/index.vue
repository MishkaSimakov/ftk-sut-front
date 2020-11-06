<template>
    <div class="container mx-auto">
        <div class="text-center text-lg text-gray-500 mt-6" v-if="$fetchState.pending">Загрузка...</div>

        <div v-else>
            <div class="flex items-end space-x-4 mw-100 overflow-x-scroll xl:overflow-auto">
                <NuxtLink to="/news/create" v-if="$auth.loggedIn ? $auth.user.is_admin : false" :class="['my-3', button('indigo') ]">
                    Добавить новость
                </NuxtLink>

                <a
                    v-on:click.prevent="clickOnClub(club)"
                    v-for="club in clubs"
                    :key="club.id"
                    href="#"
                    :class="['my-3', button(club.color, club.active)]"
                >
                    {{ club.name }}
                </a>
            </div>

            <div v-if="filteredNews.length">
                <News v-for="current_news in filteredNews" :key="current_news.id" :news="current_news"></News>
            </div>
            <div v-else class="text-center text-xl mt-6">
                🦖 Ничего не найдено!
            </div>
        </div>
    </div>
</template>

<script>
import News from "../../components/news/News";

export default {
    data() {
        return {
            news: [],
            clubs: []
        }
    },
    components: {
        News
    },
    async fetch() {
        await this.$axios.get('http://localhost:8000/api/news').then((response) => {
            this.news = response.data
        });

        await this.$axios.get('http://localhost:8000/api/clubs').then((response) => {
            this.clubs = response.data
        })
    },
    methods: {
        clickOnClub(club) {
            this.clubs = this.clubs.map((c) => {
                if (club.id === c.id) {
                    c.active = !c.active
                }

                return c
            })
        },
        button(color, active = false) {
            if (active) {
                return `whitespace-no-wrap px-4 py-2 border-2 border-transparent text-base leading-6 font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none transition ease-in-out duration-150`
            }

            return `whitespace-no-wrap px-4 py-2 border-2 border-${color}-500 text-base leading-6 font-medium rounded-md bg-white hover:bg-${color}-500 hover:text-white focus:outline-none transition ease-in-out duration-150`
        }
    },
    computed: {
        filteredNews() {
            if (this.clubs.some((club) => club.active)) {
                let activeIds = this.clubs.filter((club) => club.active).map((club) => club.id)

                return this.news.filter((news) => {
                    return news.clubs.some((club) => activeIds.includes(club.id))
                });
            }

            return this.news
        }
    }
}
</script>

<style scoped>

</style>
