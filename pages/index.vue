<script lang="ts" setup>
const { data } = await useFetch("/api/posts");
</script>

<template>
    <Head>
        <Title>Sumire • Read Latest Anime/Manga News & Announcements</Title>
    </Head>
    <Headline label="Latest Posts" />
    <Cards :data="data?.stories" />
</template>