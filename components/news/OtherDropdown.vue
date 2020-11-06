<template>
    <div class="relative">
        <a href="#" v-on:click.prevent="isOpen = !isOpen" v-if="$auth.loggedIn ? $auth.user.is_admin : false" class="text-lg text-right ml-6 leading-10 text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
            <font-awesome-icon :icon="['fas', 'ellipsis-v']"/>
        </a>
        <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>
        <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
            <NuxtLink :to="{ name: 'news-id-edit', params: { id: news.id } }" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" v-on:click.prevent="editNews">Редактировать</NuxtLink>

            <div>
                <p v-if="deleting" class="px-4 py-2 block cursor-not-allowed bg-red-500 text-white animate-pulse">Удалить</p>
                <a v-else href="#" class="px-4 py-2 block text-red-800 hover:bg-red-500 hover:text-white" v-on:click.prevent="deleteNews">
                    Удалить
                </a>
            </div>

            <div class="block px-4 py-2 text-gray-800">
                {{ news.views }} 👀
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'news'
    ],

    data() {
        return {
            isOpen: false,

            deleting: false,
            editing: false,
        }
    },
    created() {
        const handleEscape = (e) => {
            if (e.key === 'Esc' || e.key === 'Escape') {
                this.isOpen = false
            }
        }
        document.addEventListener('keydown', handleEscape)
        this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('keydown', handleEscape)
        })
    },
    methods: {
        editNews() {

        },
        deleteNews() {
            this.deleting = true

            this.$axios('http://localhost:8000/api/news/' + this.news.id, {
                method: 'delete',
                withCredentials: true,
            }).then((response) => {
                this.$parent.$parent.news = this.$parent.$parent.news.filter((n) => {
                    return n.id !== this.news.id
                })

                this.isOpen = false
            })
        }
    }
}
</script>
