<script setup lang="ts">
import { useFlashMessage } from '@/composables/useFlashMessage';
import { useInfiniteScroll } from '@/composables/useInfiniteScroll';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import JournalDetails from '@/pages/Journals/JournalDetails.vue';
import JournalForm from '@/pages/Journals/JournalForm.vue';
import { MessageType } from '@/types/MessageType';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps({
    journals: {
        type: Object,
        required: true,
    },
    baby: {
        type: Object,
        required: true,
    },
});

const createFormOpen = ref(false);

const landmark = ref(null);
const { items, canLoadMoreItems, reset } = useInfiniteScroll('journals', landmark);
const { message, showMessage, messageClass } = useFlashMessage();

const formSubmitted = () => {
    showMessage(MessageType.SUCCESS);
    console.log(messageClass.value);
    createFormOpen.value = !createFormOpen.value;
    reset();
    router.reload({ only: ['journals'] });
};
</script>
<template>
    <AuthenticatedLayout>
        <Transition>
            <div v-if="message" :class="messageClass">
                {{ message }}
            </div>
        </Transition>

        <template #header>
            <Head title="Timeline" />
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold">{{ baby.first_name }}'s Timeline</h1>
                <div class="flex flex-row gap-4">
                    <Link :href="route('babies.journals.search', { baby: baby })">
                        <svg
                            class="fill-emerald-500"
                            height="32px"
                            width="32px"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488.4 488.4"
                            xml:space="preserve"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <path
                                            d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <button @click.prevent="createFormOpen = !createFormOpen">
                        <svg
                            class="inline-block fill-emerald-500"
                            height="32px"
                            width="32px"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 490 490"
                            xml:space="preserve"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M227.8,174.1v53.7h-53.7c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h53.7v53.7c0,9.5,7.7,17.2,17.2,17.2 s17.1-7.7,17.1-17.2v-53.7h53.7c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2 S227.8,164.6,227.8,174.1z"
                                            ></path>
                                            <path
                                                d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8 C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245 c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7 S354.2,56.2,394,96S455.7,188.7,455.7,245z"
                                            ></path>
                                        </g>
                                    </g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </template>

        <div v-if="createFormOpen" class="mx-auto max-w-2xl p-4 sm:p-2 lg:p-8">
            <div class="mt-2 divide-y rounded-lg bg-white shadow-md">
                <JournalForm :baby="baby" @form-submitted="formSubmitted" />
            </div>
        </div>
        <div v-else>
            <div v-if="journals.data.length">
                <div v-for="journal in items" :key="journal.id">
                    <div class="mx-auto max-w-2xl">
                        <div class="mt-2 divide-y rounded-lg bg-white shadow-md">
                            <JournalDetails :journal="journal" :baby="props.baby" />
                        </div>
                    </div>
                </div>
            </div>
            <span v-if="!canLoadMoreItems" class="ml-4">All journals loaded :)</span>

            <div ref="landmark"></div>
        </div>
    </AuthenticatedLayout>
</template>
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-20%);
}
</style>
