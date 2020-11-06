<template>
    <div class="my-2 bg-white border rounded-xl py-3 px-10">
        <div class="flex flex-row py-2">
            <p class="text-2xl leading-10 font-semibold">{{ news.title }}</p>
            <p class="text-xl text-right ml-auto leading-10 text-gray-500">{{ $moment(news.date).format('DD.MM.YYYY') }}</p>
            <OtherDropdown :news="news"></OtherDropdown>
        </div>

        <p class="py-3 text-base">
            {{ news.body }}
        </p>

        <ul class="list mt-3 mb-1" v-if="news.clubs.length">
            <li v-for="club in news.clubs" :key="club.id" :class="['mr-2', 'inline', pill(club.color)]">
                {{ club.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import OtherDropdown from "./OtherDropdown";
export default {
    components: {OtherDropdown},
    props: [
        'news'
    ],
    methods: {
        pill(color) {
            return `cursor-default py-2 px-4 font-sans whitespace-no-wrap border-transparent text-sm leading-6 font-semibold
                 rounded-full text-white bg-${color}-600`
        }
    }
}
</script>
