<script setup lang="ts">
import Dropdown from '@/components/Dropdown.vue';
import DropdownLink from '@/components/DropdownLink.vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

defineProps(['journal', 'baby']);

dayjs.extend(relativeTime);

const awsUrl = import.meta.env.VITE_AWS_URL

</script>

<template>
    <div class="flex space-x-2 rounded-lg border p-6">
        <div class="flex-1">
            <div class="flex items-center justify-between">
                <div class="mb-4">
                    <span class="text-2xl font-bold">
                        {{
                            new Date(journal.date).toLocaleString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            })
                        }}
                    </span>
                    <small class="ml-4 text-gray-500">{{ dayjs(journal.date).fromNow() }}</small>
                </div>

                <Dropdown v-if="journal.baby.user_id === $page.props.auth.user.id">
                    <template #trigger>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                    </template>
                    <template #content>
                        <DropdownLink
                            :href="
                                route('babies.journals.edit', {
                                    baby: baby,
                                    journal: journal,
                                })
                            "
                            >Edit</DropdownLink
                        >
                    </template>
                </Dropdown>
            </div>
            <div>
                <img v-if="journal.image" :src="`${awsUrl}${journal.image}`" alt="journal image" class="rounded-lg" />
                <p class="mt-4 whitespace-pre-wrap text-xl text-gray-900">
                    {{ journal.entry }}
                </p>
            </div>
        </div>
    </div>
</template>
