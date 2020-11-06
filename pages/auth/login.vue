<template>
    <div class="flex flex-col items-center mt-10">
        <div class="w-full max-w-xs">
            <form class="bg-white border rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
                <div class="mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="email">
                        Email
                    </label>
                    <input
                        :class="['appearance-none', 'block w-full', 'bg-gray-200', 'text-gray-700', 'border', errors.email ? 'border-red-500' : 'border-gray-200', 'rounded', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500']"
                        id="email" type="email" v-model="form.email" required autofocus autocomplete="on">

                    <p class="text-red-500 text-xs italic" v-if="errors.email">{{ errors.email[0] }}</p>
                </div>
                <div class="mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="password">
                        Пароль
                    </label>
                    <input
                        :class="['appearance-none', 'block w-full', 'bg-gray-200', 'text-gray-700', 'border', errors.password ? 'border-red-500' : 'border-gray-200', 'rounded', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500']"
                        id="password" type="password" v-model="form.password" required autofocus autocomplete="on">

                    <p class="text-red-500 text-xs italic" v-if="errors.password">{{ errors.password[0] }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        v-if="loading"
                        class="cursor-not-allowed whitespace-no-wrap px-4 py-2 border-2 border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 focus:outline-none animate-pulse"
                        type="button">
                        Войти
                    </button>
                    <button
                        v-else
                        class="whitespace-no-wrap px-4 py-2 border-2 border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none transition ease-in-out duration-150"
                        type="submit">
                        Войти
                    </button>

                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Забыли пароль?
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            loading: false,
            errors: []
        }
    },
    methods: {
        submit() {
            this.loading = true

            this.$axios.get('http://localhost:8000/sanctum/csrf-cookie')
            this.$auth.loginWith('local', { data: this.form }).catch((error) => {
                this.loading = false
                this.errors = error.response.data.errors
            })
        }
    },
}
</script>
