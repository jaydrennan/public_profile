<script>
    import 'daisyui/dist/full.css';
  
    let activeTab = "projects";
  
    const projects = [
      {
        title: "Portfolio Website",
        description: "Website to showcase projects and learning",
        tech: "Svelte, SvelteKit, Tailwind, DaisyUI, Docker, AWS EC2",
        link: "https://github.com/jaydrennan/showcase"
      },
      //... Add more fake projects
    ];
  
    const blogPosts = [
      {
        title: "How to Use DaisyUI with Svelte",
        description: "A detailed guide on integrating DaisyUI components in Svelte projects.",
        link: "https://github.com/jaydrennan/sudoku_solver"
      },
      //... Add more fake blog posts
    ];
  </script>
  
  <main class="min-h-screen bg-gray-100 flex justify-center">
    <div class="p-8 bg-white rounded-lg shadow-xl max-w-xl">
      <h1 class="text-4xl font-bold mb-4 text-center">Jay Drennan</h1>
      <div class="mb-6 flex justify-center">
  
        <a href="https://github.com/jaydrennan" target="_blank" class="mr-2 flex items-center">
            <img src="/GitHub-Wordmark-White-Dark-Background-Logo.wine.svg" alt="GitHub" class="w-6 h-6 mr-2"/> 
        </a>
        
        <a href="https://www.linkedin.com/in/jay-drennan/" target="_blank" class="flex items-center">
            <img src="/LinkedIn_logo_initials.png" alt="LinkedIn" class="w-6 h-6 mr-2"/> 
        </a>
        
      </div>
  
      <div class="tabs">
        <div class="tab tab-bordered w-full flex justify-center">
            <button 
                class="tab tab-bordered mr-2 transition-all duration-200 
                       {activeTab === 'projects' ? 'bg-gray-100 text-white' : 'hover:bg-gray-200'}" 
                on:click={() => activeTab = 'projects'}>
                Projects
            </button>
            <button 
                class="tab tab-bordered transition-all duration-200 
                       {activeTab === 'blog' ? 'bg-gray-200 text-white' : 'hover:bg-gray-200'}" 
                on:click={() => activeTab = 'blog'}>
                Blog posts
            </button>
        </div>
  
        {#if activeTab === 'projects'}
          <div class="mt-4">
            {#each projects as project}
            <a href={project.link} target="_blank" class="block card shadow-lg mt-4">
                <div class="card-body">
                    <h2 class="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <div class="text-sm text-gray-500">Tech: {project.tech}</div>
                </div>
            </a>
        {/each}
          </div>
        {:else}
          <div class="mt-4">
            {#each blogPosts as post}
            <a href={post.link} target="_blank" class="block card shadow-lg mb-4">
                <div class="card-body">
                    <h2 class="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            </a>
        {/each}
          </div>
        {/if}
      </div>
    </div>
  </main>
  
  <style>
    a {
      text-decoration: none;
      color: inherit;
    }
  </style>
  