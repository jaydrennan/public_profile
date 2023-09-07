<script>
  import LogoHelix from '$lib/LogoHelix.svelte';

  import {page} from '$app/stores';
  let isNightMode = false;

  function switchMode() {
    isNightMode = !isNightMode;
    document.body.classList.toggle('night-mode');
  }
</script>

<div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <LogoHelix />
      <a href="/" class="btn btn-ghost normal-case text-xl">Jay</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/" class:underline={$page.route.id === '/' ? 'underline' : ''} class:decoration-pink-500={$page.route.id === '/' ? 'underline' : ''} class="hover:btn-secondary">Home</a></li>
        <li><a href="/projects" class:underline={$page.route.id?.match('/projects')} class:decoration-pink-500={$page.route.id?.match('/projects')} class="hover:btn-secondary">Projects</a></li>
        <li><a href="/blog" class:underline={$page.route.id?.match('/blog')} class:decoration-pink-500={$page.route.id?.match('/blog')} class="hover:btn-secondary">Blog</a></li>
        <li><a href="/python-tools" class:underline={$page.route.id?.match('/python-tools')} class:decoration-pink-500={$page.route.id?.match('/python-tools')} class="hover:btn-secondary">Python Tools</a></li>
        <li><a href="/learning-resources" class:underline={$page.route.id?.match('/learning-resources')} class:decoration-pink-500={$page.route.id?.match('/learning-resources')} class="hover:btn-secondary">Learning Resources</a></li>
      </ul>
    </div>
    <div class="navbar-end">
    </div>
  </div>
  