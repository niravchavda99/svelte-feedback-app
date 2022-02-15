import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "This is a first feedback with rating 10",
  },
  {
    id: 2,
    rating: 9,
    text: "This is a second feedback with rating NINE",
  },
  {
    id: 3,
    rating: 8,
    text: "This is a third feedback with rating 8",
  },
]);
