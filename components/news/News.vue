<template>
    <div class="m-2 bg-white border rounded-xl py-3 px-10">
        <div class="grid grid-cols-2 py-2">
            <p class="text-2xl leading-10 font-semibold">РобоФинист уже скоро</p>
            <p class="text-xl text-right leading-10 text-gray-500">29.03.2020</p>
        </div>

        <p class="py-3 text-base">
            На следующей неделе начинается онлайн-марафон робототехники "РобоФинист-2020"! Многие из наших ребят будут
            участвовать в соревнованиях, но, кроме этого, на марафоне будет много лекций и мастер-классов. Они интересны и
            сами по себе, а учитывая, что за участие в них можно выиграть призы (от футболки до конструктора) - есть смысл
            внимательно изучить расписание и постараться принять участие в как можно большем количестве!
        </p>

        <ul class="list">
            <li class="mr-2 inline rounded-xl p-1 px-2 bg-red-600 font-semibold text-white hover:bg-red-500 transition duration-150 ease-in-out cursor-pointer">
                Робототехника
            </li>

            <li class="mx-2 inline rounded-xl p-1 px-2 bg-orange-600 font-semibold text-white hover:bg-orange-500 transition duration-150 ease-in-out cursor-pointer">
                Электроника
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [
            'news'
        ]
    }
</script>
