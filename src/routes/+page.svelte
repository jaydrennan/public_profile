<script>
    import Helix from "$lib/Helix.svelte";
    import { onMount } from 'svelte';
    import { fly } from "svelte/transition";


    let blogPosts = [
        {
            title: 'Sort Python Lists by Complex Criteria',
            excerpt: 'Learn how to sort lists with complex objects, or by multiple criteria.',
            link: 'https://jaydrennan.github.io/sort_by_complex_criteria',
        },
        {
            title: 'Write Debug Friendly Python Wrappers',
            excerpt: 'Learn how to avoid unwanted wrapper behaviors when debugging.',
            link: 'https://jaydrennan.github.io/use_functools_wraps_for_wrappers',
        },
        {
            title: 'How to Loop with Two Iterators in Python',
            excerpt: 'Learn how to loop through two lists simultaneously in Python.',
            link: 'https://jaydrennan.github.io/parallel_processing_with_zip.html',
        },
    ];
    let showPosts = false;

    onMount(() => {
        const blogSection = document.getElementById('blog-section');
        window.addEventListener('scroll', () => {
            const rect = blogSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                showPosts = true;
            }
        });
    });


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
<div class="bg-base-200 p-6"> <!-- Increased padding -->
  <div class="container mx-auto px-10 py-8"> <!-- Increased padding -->
    <h2 class="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8 underline decoration-pink-400">Project Highlights</h2> <!-- Increased margin-bottom -->
    <div class="flex justify-center py-6"> <!-- Increased padding -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10"> <!-- Increased gap -->
        <!-- Project 1 -->
        <div class="bg-white rounded-lg shadow-md p-12"> <!-- Increased padding -->
          <img src="/Imagine_AI_screenshot.png" alt="Screenshot of ImaginAIry on Githbub" class="w-full h-1/2 object-cover border-2 border-black mb-8"> <!-- Increased margin-bottom -->
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">Video to Text Summarizer</h3> <!-- Increased margin-bottom -->
          <p class="text-gray-700 mb-8">A feature added to ImaginAIry python package to summarize eventful moments from video.</p> <!-- Increased margin-bottom -->
          <a href="https://github.com/brycedrennan/imaginAIry/pull/358" target="_blank" class="btn btn-accent mb-8">View on GitHub</a> <!-- Increased margin-bottom -->
          <p class="text-gray-700 font-bold">Tech: Python, ChatGPT, ImaginAIry</p> <!-- Made the tech part bold -->
        </div>
        <!-- Project 2 -->
        <div class="bg-white rounded-lg shadow-md p-12"> <!-- Increased padding -->
          <img src="/financial_ai.png" alt="Picture of Portfolio Website" class="w-full h-1/2 object-cover border-2 border-black mb-8"> <!-- Increased margin-bottom -->
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">AI Financial Advisor</h3> <!-- Increased margin-bottom -->
          <p class="text-gray-700 mb-8">Web interface for conversing with AI version of one of my favorite financial advisors.</p> <!-- Increased margin-bottom -->
          <a href="https://github.com/jaydrennan/public_profile" target="_blank" class="btn btn-accent mb-8">View on GitHub</a> <!-- Increased margin-bottom -->
          <p class="text-gray-700 font-bold">Tech: Python, OpenAI, FastAPI, Tailwind</p> <!-- Made the tech part bold -->
        </div>
        <!-- Project 3 -->
        <div class="bg-white rounded-lg shadow-md p-12"> <!-- Increased padding -->
          <img src="/FastAI_screenshot.png" alt="Screenshot of a FastAI jupyter notebook" class="w-full h-1/2 object-cover border-2 border-black mb-8"> <!-- Increased margin-bottom -->
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">Image Classifier</h3> <!-- Increased margin-bottom -->
          <p class="text-gray-700 mb-8">Project uses FastAI to collect data, organize it, and train to recognize image content.</p> <!-- Increased margin-bottom -->
          <a href="https://jaydrennan.github.io/FastAI_ch_1" target="_blank" class="btn btn-accent mb-8">View on GitHub</a> <!-- Increased margin-bottom -->
          <p class="text-gray-700 font-bold">Tech: Python, FastAI, Google Collab, Jupyter Notebook</p> <!-- Made the tech part bold -->
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8"> <!-- Increased margin-top -->
      <a href="/projects" class="btn btn-secondary">View More</a>
    </div>
  </div>
</div>


<!-- Blog Posts Section -->
<div id="blog-section" class="bg-base-100">
  <div class="container mx-auto py-16">

    <!-- Title -->
    <h2 class="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16 underline decoration-pink-400">Recent Blog Posts</h2>

    <!-- Content: Blog Posts and Helix Component -->
    <div class="flex flex-col md:flex-row items-center justify-center"> <!-- Changed to justify-center -->

      <!-- Blog Posts on Left Side -->
      <div class="grid grid-cols-1 gap-16 mb-8 md:mb-0 md:mr-2 w-full md:w-3/12"> <!-- Added width constraints -->
          {#each blogPosts.slice(0,2) as post, i (post.title)}
              {#if showPosts}
                  <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
                       transition:fly="{{ y: 50, duration: 300, delay: i * 100 }}">
                      <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                      <p class="text-gray-700 mb-4">{post.excerpt}</p>
                      <a href={post.link} class="btn btn-accent">Read More</a>
                  </div>
              {/if}
          {/each}
      </div>

      <!-- Helix Component -->
      <div class="flex justify-center "> <!-- Added horizontal margins for spacing -->
          <Helix />
      </div>

      <!-- Blog Posts on Right Side -->
      <div class="grid grid-cols-1 md:ml-8 w-full md:w-3/12"> <!-- Added width constraints -->
          {#each blogPosts.slice(2,4) as post, i (post.title)}
              {#if showPosts}
                  <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
                       transition:fly="{{ y: 50, duration: 300, delay: i * 100 }}">
                      <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                      <p class="text-gray-700 mb-4">{post.excerpt}</p>
                      <a href={post.link} class="btn btn-accent">Read More</a>
                  </div>
              {/if}
          {/each}
      </div>

    </div>

    <div class="flex justify-center mt-8"> <!-- Increased margin-top -->
      <a href="/blog" class="btn btn-secondary">View More</a>
    </div>

  </div>
</div>


