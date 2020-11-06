<template>
    <div>
        <div v-if="error.statusCode === 401">
            <img class="mx-auto mt-10" src="~/static/401.svg" alt="401!">

            <p class="text-center text-gray-500 text-5xl mt-6">Вы не администратор!</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>
