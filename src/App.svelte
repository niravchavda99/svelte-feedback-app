<script lang="ts">
  let firstName: string = "Nirav";
  let lastName: string = "Chavda";
  let color: string = "blue";

  $: name = firstName + " " + lastName;

  const toggleColor = () => {
    color = color === "blue" ? "red" : "blue";
  };
</script>

<main>
  <h1 style="color: {color}">Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>

  <button on:click={toggleColor}>Click</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
