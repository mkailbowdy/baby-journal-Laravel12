<script setup lang="ts">
import { useFlashMessage } from '@/composables/useFlashMessage';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import JournalForm from '@/pages/Journals/JournalForm.vue';
import { MessageType } from '@/types/MessageType';
const props = defineProps(['baby', 'journal']);
const { showMessage } = useFlashMessage();
</script>
<template>
    <AuthenticatedLayout>
        <div class="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
            <JournalForm @form-error="showMessage(MessageType.ERROR)" :baby="props.baby" :journal="props.journal" />
        </div>
    </AuthenticatedLayout>
</template>
