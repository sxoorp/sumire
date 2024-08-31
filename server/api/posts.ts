import type { Response } from "~/types/posts";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const data: Response = await $fetch("https://api.storyblok.com/v2/cdn/stories",
        { query: { token: config.storyblok } });
    return data
});