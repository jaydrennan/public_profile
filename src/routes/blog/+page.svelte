<script>
  let blogPosts = [

    {
      title: 'Sort Python Lists by Complex Criteria',
      summary: 'Learn how to sort lists with complex objects, or by multiple criteria.',
      link: 'https://jaydrennan.github.io/sort_by_complex_criteria',
      imageUrl: '/sort.png'
    },
    {
      title: 'Write Debug Friendly Python Wrappers',
      summary: 'Learn how to avoid unwanted wrapper behaviors when debugging.',
      link: 'https://jaydrennan.github.io/use_functools_wraps_for_wrappers',
      imageUrl: '/wrapper.png'
    },
    {
      title: 'How to Loop with Two Iterators in Python',
      summary: 'Learn how to loop through two lists simultaneously in Python.',
      link: 'https://jaydrennan.github.io/parallel_processing_with_zip.html',
      imageUrl: '/zip.png'
    },

  ];
</script>

<!-- Main Blog Page Layout -->
<div class="h-screen bg-base-200 mt-10 p-6">
  <div class="container mx-auto px-10 py-8">
    <h2 class="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8 underline decoration-pink-400">Blog Posts</h2>

    <div class="grid grid-cols-1 gap-10 max-w-3xl mx-auto"> <!-- Adjusted max-width to 3xl for narrower blog posts -->

      {#each blogPosts as post}
        <!-- Individual Blog Post -->
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4"> <!-- Unchanged padding and gap -->
          <!-- Blog Content -->
          <div class="flex-1">
            <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3> <!-- Unchanged font size and margin -->
            <p class="text-gray-600 mb-4">{post.summary}</p> <!-- Unchanged font color and margin -->
            <a href={post.link} class="btn btn-accent">Read More</a>
          </div>
          <!-- Blog Image -->
          <div class="flex-none md:w-1/4"> <!-- Unchanged width -->
            <img src={post.imageUrl} alt="Blog Post Image" class="w-full h-auto rounded-md object-cover">
          </div>
        </div>
      {/each}

    </div>
  </div>
</div>