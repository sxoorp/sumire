import type { Story } from "./story";

export type Response = {
    stories: Story[];
    cv: number;
    rels: unknown[];
    links: unknown[];
}