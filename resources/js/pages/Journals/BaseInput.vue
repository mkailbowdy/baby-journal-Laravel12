<script setup lang="ts">
const props = defineProps(['label']);
const model = defineModel();
</script>
<template>
    <label :for="props.label">{{ props.label }}</label>
    <input
        v-model="model"
        v-bind="$attrs"
        class="block rounded-md shadow-sm focus:border-teal-200 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
    />
</template>
