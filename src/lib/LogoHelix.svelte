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
      width: 10px; /* Decreased the width of the helix */
      height: 30px; /* Decreased the height of the helix */
      perspective: 1000px;
      
      /* Add other styles as needed */
    }
  
    /* Adjust styles below to design the helix and its segments */
    .segment {
      width: 2px; /* Decreased the width of the segments */
      height: 2px; /* Decreased the height of the segments */
      border-radius: 50%;
      position: absolute;
      /* Adjust these styles to design your helix segments */
    }
    
    .segment-pink {
      background-color: rgba(241,1,184,255);
    }
    
    .segment-teal {
      background-color: rgba(31,205,188,255);
    }
  </style>
  
  <div id="helix">
    
    {#each Array.from({length: 8}, (_, i) => i) as index (index)}
      <div class="segment segment-pink" style="top: {index * 4}px; left: calc(50% + {Math.sin(index + rotation) * 3}px;"></div>
      
      <div class="segment segment-teal" style="top: {index * 4}px; left: calc(50% - {Math.sin(index + rotation) * 3}px;"></div>
    {/each}
  </div>
