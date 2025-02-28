<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { Journal } from '@/types/Journal';
import { MessageType } from '@/types/MessageType';
import { Link, useForm } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import BaseInput from '../../pages/Journals/BaseInput.vue';

const emit = defineEmits(['formSubmitted', 'closeForm', 'formError']);
const props = defineProps(['journal', 'baby']);
const imagePreview = ref<string | null>(null);
const imageError = ref<string | null>(null);

const form = useForm<Journal>({
    date: new Date().toISOString().split('T')[0],
    entry: '',
    image: null,
});

// The useFlashMessage() function returns an object, and the destructuring syntax
// extracts the message, messageType, and showMessage properties into local variables with the same names
//Without destructuring, you'd need to write:
// const flashMessage = useFlashMessage();
// const message = flashMessage.message;
// const messageType = flashMessage.messageType;
// const showMessage = flashMessage.showMessage;

function saveToDatabase() {
    // Inertia's form helpers refreshes the props
    console.log(props.baby);
    form.post(route('babies.journals.store', props.baby), {
        onSuccess: () => {
            form.reset();
            emit('formSubmitted', MessageType.SUCCESS);
            emit('closeForm');
        },
        onError: () => {
            emit('formError');
        },
    });
}

function handleFileInput($event: Event): void {
    const target = $event.target as HTMLInputElement;
    if (target && target.files) {
        const file = target.files[0];
        form.image = file;

        // Create a FileReader to generate a preview
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target?.result as string;
        };

        // when readAsDataUrl(file) is finished reading the file, the reader.onload() above will fire and set the imagePreview.value string
        reader.readAsDataURL(file);
    }
}

onMounted(() => {
    console.log(props.journal);
});
</script>
<template>
    <form @submit.prevent="saveToDatabase()" class="space-x-2 rounded-lg border bg-white p-6">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <BaseInput
                        label="Date"
                        v-model="form.date"
                        type="date"
                        name="date"
                        id="date"
                        :class="form.errors.date ? 'border-red-500' : 'border-gray-300'"
                    />
                    <InputError :message="form.errors.date" class="mt-2" />
                </div>

                <div>
                    <label for="entry">Entry</label>
                    <textarea
                        name="entry"
                        id="entry"
                        rows="8"
                        v-model="form.entry"
                        placeholder="What did your child do today?"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    ></textarea>
                    <InputError :message="form.errors.entry" class="mt-2" />
                </div>
                <div class="col-span-full">
                    <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Cover photo</label>
                    <div class="mt-2 flex flex-col items-center gap-1 rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                        <div class="mt-2 flex text-sm/6 text-gray-600">
                            <label
                                for="file-upload"
                                class="block cursor-pointer rounded-md border border-teal-200 bg-white px-4 py-2 font-semibold text-teal-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only" @input="handleFileInput" />
                            </label>
                        </div>
                        <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        <img v-if="imagePreview" :src="imagePreview" class="mt-4 rounded-lg shadow-md" alt="journal image" />
                        <p v-if="imageError" class="text-red-500">
                            {{ imageError }}
                        </p>
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-right">
            <Link :href="route('babies.journals.index', baby)" class="mb-4 ml-4 mr-4 mt-4">Cancel </Link>
            <PrimaryButton class="mb-4 mt-4 bg-teal-500" :disabled="form.processing">Submit</PrimaryButton>
        </div>
    </form>
</template>
