<script lang="ts">
  import FeedbackForm from "./components/FeedbackForm.svelte";

  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";

  let feedbacks = [
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
  ];

  $: count = feedbacks.length;
  $: average = feedbacks.reduce((a, { rating }) => a + rating, 0) / count;

  const addFeedback = ({ detail: newFeedback }) => {
    feedbacks = [newFeedback, ...feedbacks];
  };

  const deleteFeedback = ({ detail: id }) => {
    feedbacks = feedbacks.filter((feedback) => feedback.id !== id);
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedbacks} on:delete-feedback={deleteFeedback} />
</main>
