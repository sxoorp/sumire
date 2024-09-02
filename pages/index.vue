<script lang="ts" setup>
const { data } = await useFetch("/api/posts");
</script>

<template>
    <Head>
        <Title>Sumire • Read Latest Anime/Manga News & Announcements</Title>
    </Head>
    <Headline label="Latest Posts" />
    <Cards :data="data?.stories.slice(0, 8)" />
    <UContainer as="div" class="flex justify-center items-center h-20">
        <UButton to="/posts" label="Browse More" />
    </UContainer>
</template>