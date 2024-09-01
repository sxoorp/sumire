<script lang="ts" setup>
const { data } = await useFetch("/api/posts");
</script>

<template>
    <Head>
        <Title>All Posts</Title>
    </Head>
    <Headline label="All Posts" />
    <Cards :data="data?.stories" />
</template>