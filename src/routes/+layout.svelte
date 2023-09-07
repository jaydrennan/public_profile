<script lang="ts">
    import "../app.css";
    import Navbar from '$lib/Navbar.svelte';
</script>

<style>
    .fixed-navbar {
        position: fixed;
        top: 0;
        width: 100%;
    }
</style>

<div class="fixed-navbar">
    <Navbar/>
</div>

<slot/>