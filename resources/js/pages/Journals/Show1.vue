<script setup lang="ts">
import Dropdown from '@/components/Dropdown.vue';
import { Journal } from '@/types/Journal';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

defineProps<{ journal: Journal }>();
dayjs.extend(relativeTime);

const awsEndpoint = import.meta.env.VITE_AWS_ENDPOINT
</script>

<template>
    <div class="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
        <div class="mt-6 divide-y rounded-lg bg-white shadow-sm">
            <div class="flex space-x-2 p-6">
                <div class="flex-1">
                    <div class="flex items-center justify-between">
                        <div>
                            <small class="ml-2 text-sm text-gray-600">{{
                                new Date(journal.date).toLocaleString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })
                            }}</small>
                            <small class="ml-2 text-sm text-gray-600">{{ dayjs(journal.date).fromNow() }}</small>
                            <!--                    <small v-if="journal.created_at !== journal.updated_at">&middot; edited</small>-->
                        </div>
                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>
                                <button
                                    class="block w-full py-2 text-center text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                >
                                    Edit
                                </button>
                            </template>
                        </Dropdown>
                    </div>
                    <div>
                        <div class="mb-8">
                            <img :src="`${awsEndpoint}/${journal.image}`" alt="journal image" />
                        </div>
                        <p class="mt-4 text-lg text-gray-900">
                            {{ journal.entry }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
