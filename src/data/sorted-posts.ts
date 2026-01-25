import { allPosts } from "content-collections";

export const sortedPosts = allPosts.sort((a, b) => {
    if (a.pinned !== b.pinned) {
        return b.pinned - a.pinned;
    }

    return new Date(b.published).getTime() - new Date(a.published).getTime();
});