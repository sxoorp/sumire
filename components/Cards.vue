<script lang="ts" setup>
// @ts-ignore
import dateformat from "dateformat";
const { data } = defineProps(["data"]);
</script>

<template>
    <UContainer as="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 select-none">
        <NuxtLink :to="'/post/' + post.slug" class="group space-y-2" v-for="post in data">
            <UContainer as="div" class="rounded-sm overflow-hidden">
                <NuxtImg :src="post.content.image.filename" :alt="post.content.title"
                    class="w-full h-fit rounded-sm object-cover transition-transform group-hover:scale-105" />
            </UContainer>
            <UContainer as="div" class="flex items-center gap-2">
                <UContainer as="div" v-for="tag in post.content.tags">
                    <UButton :label="tag" variant="soft" size="xs" />
                </UContainer>
                <p class="text-sm font-light">{{ dateformat(post.published_at, "fullDate") }}</p>
            </UContainer>
            <UContainer as="div">
                <p class="text-base font-medium line-clamp-2 transition-colors hover:text-primary">
                    {{ post.content.title }}</p>
                <p class="text-sm font-light opacity-75 truncate">{{ post.content.description }}</p>
            </UContainer>
            <UContainer as="div" class="flex items-center gap-2">
                <UAvatar :alt="post.content.author" size="xs" />
                <p class="text-primary text-sm">{{ post.content.author }}</p>
            </UContainer>
        </NuxtLink>
    </UContainer>
</template>