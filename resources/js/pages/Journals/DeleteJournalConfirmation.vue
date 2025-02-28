<script setup lang="ts">
import DangerButton from '@/components/DangerButton.vue';
import { ref } from 'vue';
const emit = defineEmits(['journalDeleted']);
const open = ref(false);

const deleteConfirmed = () => {
    open.value = false;
    emit('journalDeleted');
};
</script>
<template>
    <div class="relative">
        <DangerButton @click.prevent="open = true">Delete</DangerButton>
        <div v-if="open" class="absolute top-12 w-80 rounded border-2 border-gray-200 bg-white p-4 shadow-xl">
            <div class="arrow"></div>
            <p>Are you sure you'd like to delete?</p>
            <div class="flex justify-end space-x-2">
                <button @click="deleteConfirmed" class="rounded bg-red-500 px-4 py-2 text-white">Yes</button>
                <button @click="open = false" class="rounded bg-gray-500 px-4 py-2 text-white">No</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.arrow {
    position: absolute;
    top: -12px; /* Position it just above the popup */
    left: 10px; /* Adjust this to align with the button */
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #e5e7eb; /* Match popup's background color (gray-200) */
    z-index: 1;
}
</style>
