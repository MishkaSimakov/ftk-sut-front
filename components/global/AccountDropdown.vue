<template>
    <div class="relative">
        <button @click="isOpen = !isOpen" class="relative text-base leading-6 font-medium">
            {{ $auth.user.name }}
        </button>
        <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>
        <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Личный кабинет</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Настройки аккаунта</a>
            <a href="#" v-on:click.prevent="logout" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Выйти</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
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
        logout() {
            this.$auth.logout()

            this.isOpen = false
        }
    }
}
</script>
