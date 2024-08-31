<script lang="ts" setup>
const { label } = defineProps(["label"]);
</script>

<template>
    <UContainer as="div" class="flex justify-start items-center">
        <p class="text-2xl font-extrabold">{{ label }}</p>
    </UContainer>
</template>