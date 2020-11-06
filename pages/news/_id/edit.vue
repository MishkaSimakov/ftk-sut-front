<template>
    <div class="container mx-auto">
        <div class="bg-white border rounded-lg p-6 mt-6">
            <form class="w-full">
                <div class="flex -mx-3 mb-6">
                    <div class="w-8/12 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               for="title">
                            Заголовок
                        </label>
                        <input
                            :class="['appearance-none', 'block w-full', 'bg-gray-200', 'text-gray-700', 'border', errors.title ? 'border-red-500' : 'border-gray-200', 'rounded', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500']"
                            id="title" type="text" v-model="form.title" maxlength="75" required autofocus>

                        <p class="text-red-500 text-xs italic" v-if="errors.title">{{ errors.title[0] }}</p>
                    </div>
                    <div class="w-4/12 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               for="date">
                            Дата
                        </label>
                        <input
                            :class="['appearance-none', 'block w-full', 'bg-gray-200', 'text-gray-700', 'border', errors.date ? 'border-red-500' : 'border-gray-200', 'rounded', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500']"
                            id="date" type="date" v-model="form.date" :min="$moment().format('YYYY-MM-DD')" autofocus required>

                        <p class="text-red-500 text-xs italic" v-if="errors.date">{{ errors.date[0] }}</p>
                    </div>
                </div>

                <div class="-mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               for="body">
                            Текст
                        </label>
                        <textarea
                            v-model="form.body"
                            placeholder="Супер-пупер новость"
                            rows="10"
                            name="body"
                            id="body"
                            :class="['resize-y', 'appearance-none', 'block w-full', 'bg-gray-200', 'text-gray-700', 'border', errors.body ? 'border-red-500' : 'border-gray-200', 'rounded', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500']"
                            autofocus
                            required
                        ></textarea>

                        <p class="text-red-500 text-xs italic" v-if="errors.body">{{ errors.body[0] }}</p>
                    </div>
                </div>

                <div class="-mx-3 mb-6">
                    <div class="w-full px-3">
                        <label for="clubs" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Секции
                        </label>
                        <input
                            :class="['appearance-none', 'block w-full', 'bg-gray-200', 'text-gray-700', 'border', errors.clubs ? 'border-red-500' : 'border-gray-200', 'rounded', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500']"
                            name="clubs" id="clubs" v-model="form.clubs">

                        <p class="text-red-500 text-xs italic" v-if="errors.clubs">{{ errors.clubs[0] }}</p>
                    </div>
                </div>

                <div class="-mx-3">
                    <div class="flex w-full px-3">
                        <button v-if="saving" type="button"
                                class="cursor-not-allowed whitespace-no-wrap px-4 py-2 border-2 border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 animate-pulse">
                            Сохранить
                        </button>
                        <button v-else type="submit" v-on:click.prevent="submit"
                                class="whitespace-no-wrap px-4 py-2 border-2 border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition ease-in-out duration-150">
                            Сохранить
                        </button>

                        <div v-if="$moment().isBefore(form.date)" class="ml-6 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-md relative">
                            <span class="block sm:inline">Эта новость будет опубликована {{ $moment(form.date).format('DD.MM.YYYY') }}</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Tagify from "@yaireo/tagify";

export default {
    middleware: 'admin',
    props: [
        'news'
    ],
    data() {
        return {
            form: {
                title: '',
                body: '',
                date: this.$moment().format('YYYY-MM-DD'),
                clubs: ''
            },
            clubs: [],
            tagify: null,
            saving: false,

            errors: []
        }
    },
    methods: {
        pill(color) {
            return `cursor-default py-2 px-4 font-sans whitespace-no-wrap border-transparent text-sm leading-6 font-semibold
                 rounded-full text-white bg-${color}-600`
        },
        submit() {
            this.saving = true

            this.form.clubs = this.tagify.value.map((club) => club.code)

            this.$axios('http://localhost:8000/api/news', {
                method: 'post',
                withCredentials: true,

                data: this.form,
            }).then((response) => {
                this.$router.replace({name: 'news'});
            }).catch((error) => {
                this.saving = false

                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        }
    },
    mounted() {
        console.log(this.news)

        let input = document.getElementById("clubs");

        this.$axios.get('http://localhost:8000/api/clubs').then((response) => {
            this.clubs = response.data.map((club) => {
                return {
                    value: club.name,
                    code: club.id
                }
            })

            this.tagify = new Tagify(input, {
                whitelist: this.clubs,
                enforceWhitelist: true,
                dropdown: {
                    enabled: 0,
                    closeOnSelect: true
                }
            });
        });
    }
}
</script>

<style scoped>

</style>
