<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useFlashMessage } from '@/composables/useFlashMessage';
import DeleteJournalConfirmation from '@/pages/Journals/DeleteJournalConfirmation.vue';
import { MessageType } from '@/types/MessageType';
import { Link } from '@inertiajs/vue3';
const props = defineProps(['baby', 'form']);
const emit = defineEmits(['submitted', 'cancelled', 'deleted']);

const localForm = props.form;

const { message, showMessage, messageClass } = useFlashMessage();

function editFormSubmitted() {
    showMessage(MessageType.SUCCESS);
    localForm.patch(route('babies.update', props.baby));
    emit('submitted');
}
</script>

<template>
    <Transition>
        <div v-if="message" class="text-center" :class="messageClass">
            {{ message }}
        </div>
    </Transition>

    <div class="mx-auto mt-8 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="mx-auto max-w-3xl pb-36">
            <form @submit.prevent="editFormSubmitted()" class="space-y-6 bg-white p-4 shadow-lg">
                <!-- First Name -->
                <div class="space-y-2">
                    <label for="firstName" class="block text-sm font-medium"> First Name </label>
                    <input
                        type="text"
                        id="firstName"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        v-model="localForm.first_name"
                    />
                </div>

                <!-- Birthday -->
                <div class="space-y-2">
                    <label for="birthday" class="block text-sm font-medium"> Birthday </label>
                    <input
                        type="date"
                        id="birthday"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        v-model="localForm.birthday"
                    />
                </div>

                <!-- Allergies -->
                <div class="space-y-2">
                    <label for="allergies" class="block text-sm font-medium"> Allergies </label>
                    <textarea
                        id="allergies"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        v-model="localForm.allergies"
                    ></textarea>
                </div>

                <!-- Vaccinations -->
                <div class="space-y-2">
                    <label for="vaccinations" class="block text-sm font-medium"> Vaccinations </label>
                    <textarea
                        id="vaccinations"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        v-model="localForm.vaccinations"
                    ></textarea>
                </div>

                <!-- Likes -->
                <div class="space-y-2">
                    <label for="likes" class="block text-sm font-medium"> Likes </label>
                    <textarea
                        id="likes"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        v-model="localForm.likes"
                    ></textarea>
                </div>

                <!-- Dislikes -->
                <div class="space-y-2">
                    <label for="dislikes" class="block text-sm font-medium"> Dislikes </label>
                    <textarea
                        id="dislikes"
                        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        v-model="localForm.dislikes"
                    ></textarea>
                </div>
                <div class="mt-4 flex justify-around gap-2">
                    <DeleteJournalConfirmation @journal-deleted="emit('deleted')" />
                    <Link
                        :href="
                            route('babies.show', {
                                baby: props.baby,
                            })
                        "
                        class="inline-flex items-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-400"
                        >Cancel
                    </Link>
                    <PrimaryButton class="bg-emerald-500 hover:bg-emerald-400">Save</PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>
