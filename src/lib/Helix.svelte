<script>
    import { onMount } from 'svelte';
    
    let rotation = 0;
  
    onMount(() => {
      const handleScroll = () => {
        // Adjust this value to change the speed of rotation
        // Decreased the rotation speed to slow down the helix spin
        const rotationSpeed = 0.01;
        rotation = window.scrollY * rotationSpeed;
        const helix = document.getElementById('helix');
        if(helix) {
          helix.style.transform = `rotateX(${rotation}deg)`;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    });
  </script>
  
  <style>
    #helix {
      width: 200px;
      height: 600px; /* Increased the height of the helix */
      perspective: 1000px;
      /* Add other styles as needed */
    }
  
    /* Adjust styles below to design the helix and its segments */
    .segment {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      /* Adjust these styles to design your helix segments */
    }
    
    .segment-purple {
      background-color: rgba(87,13,248,255);
    }
    
    .segment-teal {
      background-color: rgba(31,205,188,255);
    }
  </style>
  
  <div id="helix">
    
    {#each Array.from({length: 15}, (_, i) => i) as index (index)}
      <div class="segment segment-purple" style="top: {index * 40}px; left: calc(50% + {Math.sin(index + rotation) * 50}px;"></div>
      
      <div class="segment segment-teal" style="top: {index * 40}px; left: calc(50% - {Math.sin(index + rotation) * 50}px;"></div>
    {/each}
  </div>






