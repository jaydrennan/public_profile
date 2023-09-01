  <div class="flex justify-center items-center h-screen">
    <div class="w-1/4"></div> <!-- Added this div to push the content to the right -->
    <div class="flex flex-col items-start justify-center w-1/2">
      <h1 class="text-6xl font-bold mb-4">Jay Drennan</h1>
      <h2 class="text-2xl mb-4">Python Enthusiast. Learning from AI.</h2>
      <div class="flex space-x-4 mb-4 justify-center"> <!-- Kept justify-center to center the links -->
        <a href="https://github.com/jaydrennan" target="_blank">
          <img src="/GitHub-Wordmark-White-Dark-Background-Logo.wine.svg" alt="GitHub" class="w-5 h-5"/> 
        </a>
        <a href="https://www.linkedin.com/in/jay-drennan/" target="_blank">
          <img src="/LinkedIn_logo_initials.png" alt="LinkedIn" class="w-5 h-5"/> 
        </a>
      </div>
      <button class="btn btn-primary" on:click={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
        View Projects
      </button>
    </div>
    <div class="w-1/2 flex justify-center items-center"> <!-- Adjusted this div to center the image -->
      <img src="/jay.jpeg" alt="Profile Picture" class="rounded-full w-50 h-50 object-cover"> <!-- Adjusted width and height to make the image smaller -->
    </div>
  </div>

