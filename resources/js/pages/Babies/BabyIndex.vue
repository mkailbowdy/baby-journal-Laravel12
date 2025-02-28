<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import BaseInput from '@/pages/Journals/BaseInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps(['babies']);
function saveToDatabase() {
    console.log('submit button clicked');
    // Inertia's form helpers refreshes the props
    form.post(route('babies.store'), {
        onSuccess: () => {
            console.log('success');
            form.reset();
        },
        onError: (errors) => {
            console.log(':error' + errors);
        },
    });
}
const form = useForm({
    first_name: '',
});
</script>
<template>
    <AuthenticatedLayout>
        <template #header>
            <Head title="Babies" />
            <h1 class="text-xl font-semibold leading-tight text-gray-800">My Kids</h1>
        </template>
        <div class="bg-white px-4 sm:px-6 lg:px-8">
            <div class="flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Details</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Journal</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-if="!babies.length">
                                    <td class="p-4">Add a child in the form below to get started :)</td>
                                </tr>
                                <tr v-for="baby in babies" :key="baby.id">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        <span class="text-lg">{{ baby.first_name }}</span>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <Link :href="route('babies.show', baby)" class="font-semibold text-emerald-500 hover:text-emerald-400"
                                            >View
                                        </Link>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <Link :href="route('babies.journals.index', baby)" class="inline-block hover:text-emerald-400">
                                            <svg
                                                class="fill-emerald-500 hover:fill-emerald-400"
                                                height="16px"
                                                width="16px"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 330 330"
                                                xml:space="preserve"
                                            >
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        id="XMLID_222_"
                                                        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </Link>
                                    </td>
                                    <!--                                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">-->
                                    <!--                                    <a href="#" class="text-indigo-600 hover:text-indigo-900"-->
                                    <!--                                    >Edit<span class="sr-only">, {{ person.name }}</span></a-->
                                    <!--                                    >-->
                                    <!--                                </td>-->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:flex sm:items-center">
            <div class="p-4">
                <h2 class="text-2xl text-emerald-600">Add A Child!</h2>
                <form @submit.prevent="saveToDatabase()">
                    <BaseInput label="First Name" type="text" v-model="form.first_name" />
                    <div v-if="form.errors.first_name" class="error">
                        {{ form.errors.first_name }}
                    </div>
                    <PrimaryButton class="mt-4 bg-emerald-500">Submit</PrimaryButton>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
