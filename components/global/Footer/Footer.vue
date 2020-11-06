<template>
    <footer>
        <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    class="text-xl flex justify-between items-center border-t-2 border-gray-100 py-1 md:justify-start md:space-x-10">
                    <div class="lg:w-0 lg:flex-1">
                        <popper
                            :options="{
                                placement: 'right',
                            }"

                            transition='fade'
                            enter-active-class='fade-enter-active'
                            leave-active-class='fade-leave-active'
                        >
                            <div class="popper">
                                Наверх
                            </div>

                            <a slot="reference" href="#" v-on:click.prevent="$scrollTo('html')">👆</a>
                        </popper>
                    </div>

                    <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                        <popper
                            :options="{
                                placement: 'left',
                            }"

                            transition='fade'
                            enter-active-class='fade-enter-active'
                            leave-active-class='fade-leave-active'
                        >
                            <div class="popper">
                                Есть, что сказать?
                            </div>

                            <a slot="reference" href="#" v-on:click.prevent="openModal()">💭</a>
                        </popper>


                        <popper
                            :options="{
                                placement: 'left',
                            }"

                            transition='fade'
                            enter-active-class='fade-enter-active'
                            leave-active-class='fade-leave-active'
                        >
                            <div class="popper">
                                Тёмная сторона силы
                            </div>

                            <a slot="reference" href="#">🌑</a>
                        </popper>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Popper from 'vue-popperjs';

export default {
    components: {
        popper: Popper,
    },
    methods: {
        openModal() {
            this.$nuxt.$emit('opened-things-modal')
        }
    }
}
</script>
