<script lang="ts" setup>
// @ts-ignore
import dateformat from "dateformat";

const { slug } = useRoute().params
const { data } = await useAsyncData(async () => {
    const [posts, post] = await Promise.all([
        await $fetch("/api/posts"),
        await $fetch("/api/post", { query: { slug: slug } })
    ]);

    return { posts, post }
});

const richtext = computed(() => renderRichText(data.value?.post.story.content.story));
</script>

<template>
    <Head>
        <Title>{{ data?.post.story.content.title }}</Title>
    </Head>
    <UContainer as="div" class="flex flex-col lg:flex-row gap-4">
        <UContainer as="div" class="flex flex-col w-fit gap-2">
            <UContainer as="div" class="flex items-center gap-2">
                <UContainer as="div" v-for="tag in data?.post.story.content.tags">
                    <UButton :label="tag" variant="soft" size="sm" />
                </UContainer>
                <p class="text-sm font-light">{{ dateformat(data?.post.story.published_at, "fullDate") }}</p>
            </UContainer>
            <UContainer as="div">
                <p class="text-2xl font-extrabold">{{ data?.post.story.content.title }}</p>
                <p class="text-lg font-normal opacity-75">{{ data?.post.story.content.description }}</p>
            </UContainer>
            <UContainer as="div" class="flex items-center gap-2">
                <UAvatar :alt="data?.post.story.content.author" size="lg" />
                <p class="text-lg font-medium">{{ data?.post.story.content.author }}</p>
            </UContainer>
            <UDivider />
            <NuxtImg :src="data?.post.story.content.image.filename" :alt="data?.post.story.content.title"
                class="rounded-sm" />
            <UContainer as="div" class="space-y-6">
                <UContainer as="div" v-html="richtext" />
                <UContainer as="div" class="flex justify-center items-center" v-if="data?.post.story.content.trailer">
                    <iframe :src="data?.post.story.content.trailer" frameborder="0"
                        class="w-full h-48 md:w-[480px] md:h-64 lg:w-[560px] lg:h-[315px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </UContainer>
            </UContainer>
            <UContainer as="div" class="flex flex-col justify-center items-center gap-4 my-4"
                v-if="data?.post.story.content.visuals.length! > 0">
                <UContainer as="div" class="flex flex-col items-center gap-2"
                    v-for="(visual, index) in data?.post.story.content.visuals">
                    <p class="text-lg font-semibold text-center" v-if="visual.meta_data.title">
                        {{ visual.meta_data.title }}</p>
                    <NuxtImg :src="visual.filename" :alt="'visual-' + index" class="w-full rounded-sm" />
                </UContainer>
            </UContainer>
            <UDivider />
        </UContainer>
        <UContainer as="div" class="flex flex-col lg:w-[750px] gap-2">
            <Headline label="Latest News" />
            <UContainer as="div" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2">
                <NuxtLink :to="'/post/' + post.slug" class="flex flex-col lg:flex-row lg:items-center gap-2"
                    v-for="post in data?.posts.stories.slice(0, 8)">
                    <UContainer as="div" class="w-full h-full lg:w-40 lg:h-24">
                        <NuxtImg :src="post.content.image.filename" :alt="post.content.title"
                        class="w-full h-full rounded-sm object-cover" />
                    </UContainer>
                    <UContainer as="div" class="flex flex-col flex-1 gap-1">
                        <UContainer as="div" class="flex items-center gap-2">
                            <UContainer as="div" v-for="tag in post.content.tags">
                                <UButton :label="tag" variant="soft" size="2xs" />
                            </UContainer>
                            <p class="text-sm font-light">
                                {{ dateformat(data?.post.story.published_at, "fullDate") }}</p>
                        </UContainer>
                        <p class="text-base font-medium line-clamp-2 transition-colors hover:text-primary">
                            {{ post.content.title }}</p>
                        <p class="text-sm font-light line-clamp-1">{{ post.content.description }}</p>
                    </UContainer>
                </NuxtLink>
            </UContainer>
            <UContainer as="div" class="flex justify-center items-center">
                <UButton to="/posts" label="Browse More" block />
            </UContainer>
        </UContainer>
    </UContainer>
</template>