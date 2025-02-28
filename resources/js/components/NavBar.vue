<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const open = ref<boolean>(false);
function toggleMenu(): void {
    open.value = !open.value;
}
const page = usePage();
</script>
<template>
    <div class="relative z-50">
        <div class="flex justify-end bg-emerald-500">
            <button @click.prevent="toggleMenu" class="static z-50">
                <svg width="48" height="48" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="rectangles">
                        <g id="crimsonGroup">
                            <rect :class="open ? 'rotate-crimson1' : ''" id="crimson1" x="20" y="45" width="80" height="10" />
                            <rect :class="{ 'rotate-crimson2': open }" id="crimson2" x="20" y="45" width="80" height="10" />
                        </g>
                        <g id="indigoGroup">
                            <rect :class="open ? 'slide-indigo1' : ''" id="indigo1" x="20" y="25" width="80" height="10" />
                            <rect :class="open ? 'slide-indigo2' : ''" id="indigo2" x="20" y="65" width="80" height="10" />
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <Transition name="blur">
            <div v-if="open" class="fixed inset-0 bg-gray-400/10 backdrop-blur-sm transition-all duration-300 ease-in-out"></div>
        </Transition>
        <Transition name="slide">
            <div v-if="open" class="fixed inset-0">
                <div @click="toggleMenu" class="fixed inset-0"></div>
                <nav id="navbar" class="fixed right-0 h-screen w-48 bg-emerald-400">
                    <div class="flex min-h-screen flex-col text-center">
                        <div class="mt-16 flex flex-col gap-2 text-xl">
                            <Link
                                :href="route('babies.index')"
                                :class="{
                                    'text-white': page.url.startsWith('/babies'),
                                }"
                            >
                                My Kids
                            </Link>
                            <Link
                                :href="route('profile.edit')"
                                :class="{
                                    'text-white': page.url.startsWith('/profile'),
                                }"
                                >Settings</Link
                            >
                        </div>

                        <div class="mb-20 mt-auto">
                            <Link
                                v-show="page.props.auth.user.name"
                                class="mx-auto inline-block h-8 w-1/2 rounded bg-gray-800 text-gray-200"
                                method="post"
                                :href="route('logout')"
                                as="Button"
                            >
                                Log Out
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </Transition>
    </div>
</template>

<style>
:root {
    --indigo-color: #ffffff;
    --crimson-color: #ffffff;
}

#indigoGroup {
    fill: var(--indigo-color);
}

#crimsonGroup {
    fill: var(--crimson-color);
}

#crimson1,
#crimson2 {
    transition: all 0.3s ease;
}

#indigo1,
#indigo2 {
    transition: all 0.3s ease;
}

.rotate-crimson1 {
    transform-origin: 60px 50px;
    transform: rotate(45deg);
}

.rotate-crimson2 {
    transform-origin: 60px 50px;
    transform: rotate(-45deg);
}

.slide-indigo1,
.slide-indigo2,
.slide-indigo1:hover,
.slide-indigo2:hover {
    transform: translateX(100px);
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-active {
    transition: all 0.2s ease;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-active {
    transition: all 0.2s ease-in;
}

.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

/* Add these transition classes */
.blur-enter-from {
    opacity: 0;
    backdrop-filter: blur(0);
}

.blur-enter-active {
    transition: all 0.3s ease-out;
}

.blur-enter-to {
    opacity: 1;
    backdrop-filter: blur(4px);
}

.blur-leave-from {
    opacity: 1;
    backdrop-filter: blur(4px);
}

.blur-leave-active {
    transition: all 0.3s ease-in;
}

.blur-leave-to {
    opacity: 0;
    backdrop-filter: blur(0);
}
</style>
