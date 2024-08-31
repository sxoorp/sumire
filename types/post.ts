import type { Story } from "./story";

export type Response = {
    story: Story;
    cv: number;
    rels: unknown[];
    links: unknown[];
}