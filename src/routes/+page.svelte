<script>
    import Navbar from "$lib/Navbar.svelte";
    import Helix from "$lib/Helix.svelte";
    import { fly } from "svelte/transition";

</script>
<Navbar/>

<div class="flex justify-center items-center h-screen">
  <div class="w-1/4"></div> <!-- Added this div to push the content to the right -->
  <div class="flex flex-col items-start justify-center w-1/2">
    <h1 class="text-6xl font-bold mb-4">Jay Drennan</h1>
    <h2 class="text-2xl mb-4">Python Enthusiast. Learning from AI.</h2>
    <div class="flex space-x-4 mb-4 justify-center"> <!-- Kept justify-center to center the links -->
      <button class="btn btn-primary" on:click={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
        View Projects
      </button>
      <a href="https://github. com/jaydrennan" target="_blank">
        <img src="/github.svg" alt="GitHub" class="w-6 h-6"/> 
      </a>
      <a href="https://www.linkedin.com/in/jay-drennan/" target="_blank">
        <img src="/linkedin.svg" alt="LinkedIn" class="w-6 h-6"/> 
      </a>
    </div>
  </div>
  <div class="w-1/2 flex justify-center items-center"> <!-- Adjusted this div to center the image -->
    <img src="/jay.jpeg" alt="Profile Picture" class="rounded-full w-50 h-50 object-cover"> <!-- Adjusted width and height to make the image smaller -->
  </div>
  <div class="w-1/4"></div> <!-- Added this div to push the content to the right -->

</div>
<div class="min-h-screen bg-base-200">
  <div class="container mx-auto px-6 py-8">
    <h2 class="text-6xl font-bold text-center text-gray-800 mb-7 underline decoration-pink-400">Project Highlights</h2>
    <div class="flex">
      <div class="w-1/4"></div>
      <div class="w-2/3"> <!-- Added this div to take up the left 2/3 of the page -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <!-- Project 1 -->
          <div class="bg-white rounded-lg shadow-md p-8 col-start-1 row-start-1">
            <h3 class="text-4xl font-bold text-gray-800 mb-2">Video to Text Summary</h3>
            <p class="text-gray-700 mb-4">A feature added to ImaginAIry python package to summarize eventful moments from video.</p>
            <a href="https://github.com/brycedrennan/imaginAIry/pull/358" target="_blank" class="btn btn-accent mb-2">View on GitHub</a>
            <p class="text-gray-700">Tech used: Python, ChatGPT, ImaginAIry</p>
          </div>
          <!-- Project 2 -->
          <div class="bg-white rounded-lg shadow-md p-8 col-start-2 row-start-2">
            <h3 class="text-4xl font-bold text-gray-800 mb-2">Portfolio Website</h3>
            <p class="text-gray-700 mb-4">A responsive portfolio website to present an individual's work, skills, and learning.</p>
            <a href="https://github.com/jaydrennan/showcase" target="_blank" class="btn btn-accent mb-2">View on GitHub</a>
            <p class="text-gray-700">Tech used: Svelte, SvelteKit, Tailwind, DaisyUI, Docker, EC2</p>
          </div>
          <!-- Project 3 -->
          <div class="bg-white rounded-lg shadow-md p-8 col-start-1 row-start-3">
            <h3 class="text-4xl font-bold text-gray-800 mb-2">Image Classifier</h3>
            <p class="text-gray-700 mb-4">Project uses FastAI to collect data, organize it, and train to recognize image content.</p>
            <a href="https://github.com/jaydrennan/project3" target="_blank" class="btn btn-accent mb-2">View on GitHub</a>
            <p class="text-gray-700">Tech used: Python, FastAI, Google Collab</p>
          </div>
        </div>

      </div>
      
      <div class="w-1/3 flex justify-center items-center"> <!-- Added this div to take up the right 1/3 of the page and center the Helix -->
        <Helix/>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <a href="/projects" class="btn btn-secondary">View More</a>
    </div>

  </div>
</div>

