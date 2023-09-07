<script>
    import Helix from "$lib/Helix.svelte";
    import { fly } from "svelte/transition";

</script>

<div class="flex flex-col justify-center items-center h-screen md:flex-row">
  <div class="w-full md:w-1/4"></div> <!-- Added this div to push the content to the right -->
  <div class="flex flex-col items-center justify-center w-full md:w-1/2">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Jay Drennan</h1>
    <h2 class="text-xl md:text-2xl mb-4">Python Enthusiast. Learning from AI.</h2>
    <div class="flex space-x-4 mb-4 justify-center items-center"> <!-- Added items-center to align the links vertically -->
      <button class="btn btn-primary text-white" on:click={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
        View Projects
      </button>
      <a href="https://github.com/jaydrennan" target="_blank">
        <img src="/github.svg" alt="GitHub" class="w-6 h-6"/> 
      </a>
      <a href="https://www.linkedin.com/in/jay-drennan/" target="_blank">
        <img src="/linkedin.svg" alt="LinkedIn" class="w-6 h-6"/> 
      </a>
    </div>
  </div>
  <div class="w-full md:w-1/2 flex justify-center items-center"> <!-- Adjusted this div to center the image -->
    <img src="/jay.jpeg" alt="Profile Picture" class="rounded-full w-50 h-50 md:w-50 md:h-50 object-cover"> <!-- Adjusted width and height to make the image smaller -->
  </div>
  <div class="w-full md:w-1/4"></div> <!-- Added this div to push the content to the right -->

</div>
<div class="bg-base-200 p-4"> <!-- Added padding -->
  <div class="container mx-auto px-8 py-6"> <!-- Increased padding -->
    <h2 class="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6 underline decoration-pink-400">Project Highlights</h2> <!-- Increased margin-bottom -->
    <div class="flex justify-center py-4"> <!-- Added padding -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Increased gap -->
        <!-- Project 1 -->
        <div class="bg-white rounded-lg shadow-md p-10"> <!-- Increased padding -->
          <img src="/Imagine_AI_screenshot.png" alt="Screenshot of ImaginAIry on Githbub" class="w-full h-1/2 object-cover border-2 border-black mb-6"> <!-- Increased margin-bottom -->
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Video to Text Summarizer</h3> <!-- Increased margin-bottom -->
          <p class="text-gray-700 mb-6">A feature added to ImaginAIry python package to summarize eventful moments from video.</p> <!-- Increased margin-bottom -->
          <a href="https://github.com/brycedrennan/imaginAIry/pull/358" target="_blank" class="btn btn-accent mb-6">View on GitHub</a> <!-- Increased margin-bottom -->
          <p class="text-gray-700 font-bold">Tech: Python, ChatGPT, ImaginAIry</p> <!-- Made the tech part bold -->
        </div>
        <!-- Project 2 -->
        <div class="bg-white rounded-lg shadow-md p-10"> <!-- Increased padding -->
          <img src="/portfolio_website.png" alt="Picture of Portfolio Website" class="w-full h-1/2 object-cover border-2 border-black mb-6"> <!-- Increased margin-bottom -->
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Portfolio Website</h3> <!-- Increased margin-bottom -->
          <p class="text-gray-700 mb-6">A responsive portfolio website to present an individual's work, skills, and learning.</p> <!-- Increased margin-bottom -->
          <a href="https://github.com/jaydrennan/public_profile" target="_blank" class="btn btn-accent mb-6">View on GitHub</a> <!-- Increased margin-bottom -->
          <p class="text-gray-700 font-bold">Tech: Svelte, SvelteKit, Tailwind, DaisyUI, Docker, EC2</p> <!-- Made the tech part bold -->
        </div>
        <!-- Project 3 -->
        <div class="bg-white rounded-lg shadow-md p-10"> <!-- Increased padding -->
          <img src="/FastAI_screenshot.png" alt="Screenshot of a FastAI jupyter notebook" class="w-full h-1/2 object-cover border-2 border-black mb-6"> <!-- Increased margin-bottom -->
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Image Classifier</h3> <!-- Increased margin-bottom -->
          <p class="text-gray-700 mb-6">Project uses FastAI to collect data, organize it, and train to recognize image content.</p> <!-- Increased margin-bottom -->
          <a href="https://github.com/jaydrennan/project3" target="_blank" class="btn btn-accent mb-6">View on GitHub</a> <!-- Increased margin-bottom -->
          <p class="text-gray-700 font-bold">Tech: Python, FastAI, Google Collab</p> <!-- Made the tech part bold -->
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-6"> <!-- Increased margin-top -->
      <a href="/projects" class="btn btn-secondary">View More</a>
    </div>
  </div>
</div>

