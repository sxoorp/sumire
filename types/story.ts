export type Story = {
    name: string;
    created_at: string;
    published_at: string;
    id: number;
    uuid: string;
    content: {
        _uid: string;
        tags: string[];
        image: {
            id: number;
            alt: string;
            name: string;
            focus: string;
            title: string;
            source: string;
            filename: string;
            copyright: string;
            fieldtype: string;
            meta_data: Record<string, unknown>;
            is_external_url: boolean;
        };
        title: string;
        tweet: string;
        author: string;
        story: {
            type: string;
            content: Array<{
                type: string;
                content: Array<{
                    text: string;
                    type: string;
                    marks?: Array<{ type: string }>;
                }>;
            }>;
        };
        trailer: string;
        visuals: Array<{
            id: number;
            alt: string;
            name: string;
            focus: string;
            title: string;
            source: string;
            filename: string;
            copyright: string;
            fieldtype: string;
            meta_data: Record<string, unknown>;
        }>;
        component: string;
        description: string;
    };
    slug: string;
    full_slug: string;
    sort_by_date: string | null;
    position: number;
    tag_list: string[];
    is_startpage: boolean;
    parent_id: number;
    meta_data: Record<string, unknown> | null;
    group_id: string;
    first_published_at: string;
    release_id: number | null;
    lang: string;
    path: string | null;
    alternates: unknown[];
    default_full_slug: string | null;
    translated_slugs: unknown[] | null;
}