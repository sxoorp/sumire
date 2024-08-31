import type { Response } from "~/types/post";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { slug } = getQuery(event);
    const data: Response = await $fetch(`https://api.storyblok.com/v2/cdn/stories/post/${slug}`,
        { query: { token: config.storyblok } });
    return data
});