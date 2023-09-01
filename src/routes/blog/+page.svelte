<script>
    import Navbar from "$lib/Navbar.svelte";
  import { onMount } from 'svelte';
  let message = '';
  
  onMount(() => {
    message = 'This page is currently in development and will be available soon.';
  });
</script>

<Navbar/>

<main class="flex items-center justify-center h-screen bg-gray-100">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Coming Soon</h1>
    <p class="text-xl">{message}</p>
  </div>
</main>