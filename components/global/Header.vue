<template>
    <header>
        <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div class="lg:w-0 lg:flex-1">
                        <NuxtLink to="/" class="flex text-2xl font-semibold items-center">
                            ФТК
                        </NuxtLink>
                    </div>

                    <nav class="hidden md:flex space-x-10">
                        <NuxtLink to="/news"
                                  class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Новости
                        </NuxtLink>
                        <NuxtLink to="/events"
                                  class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Расписание
                        </NuxtLink>
                        <NuxtLink to="/rating"
                                  class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Рейтинг
                        </NuxtLink>
                        <NuxtLink to="/articles"
                                  class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Статьи
                        </NuxtLink>
                    </nav>
                    <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                        <a v-if="$auth.loggedIn" class="no-underline text-base leading-6 font-medium">
                            <AccountDropdown></AccountDropdown>
                        </a>
                        <span v-else class="inline-flex rounded-md shadow-sm">
                            <NuxtLink :to="{ name: 'auth-login' }"
                                      class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                Войти
                            </NuxtLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import AccountDropdown from "./AccountDropdown";

    export default {
        components: {
            AccountDropdown: AccountDropdown
        }
    }
</script>
