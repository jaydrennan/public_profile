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











<!-- 

 <script>
  import { onMount } from 'svelte';
  
  let rotation = 0;
  let previousLeftPositionsPurple = Array.from({length: 15}, () => 0);
  let currentLeftPositionsPurple = Array.from({length: 15}, () => 0);
  let isMovingRightPurple = Array.from({length: 15}, () => false);

  let previousLeftPositionsTeal = Array.from({length: 15}, () => 0);
  let currentLeftPositionsTeal = Array.from({length: 15}, () => 0);
  let isMovingRightTeal = Array.from({length: 15}, () => false);

  onMount(() => {
    const handleScroll = () => {
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

  // Update currentLeftPositions whenever rotation changes
  $: {
    currentLeftPositionsPurple = currentLeftPositionsPurple.map((_, index) => {
      const newPosition = Math.sin(index + rotation) * 50;
      isMovingRightPurple[index] = newPosition > previousLeftPositionsPurple[index];
      return newPosition;
    });

    currentLeftPositionsTeal = currentLeftPositionsTeal.map((_, index) => {
      const newPosition = Math.sin(index + rotation) * 50;
      isMovingRightTeal[index] = newPosition > previousLeftPositionsTeal[index];
      return newPosition;
    });
  }

  let switchPurple = Array.from({length: 15}, () => false);
let switchTeal = Array.from({length: 15}, () => false);

$: {
  currentLeftPositionsPurple.forEach((position, index) => {
    if (position >= 49 || position <= -49) {
      switchPurple[index] = !switchPurple[index];
      if(index === 0) {
        console.log(position);
        console.log(switchPurple[index]);
      }
      // console.log(`switchPurple[${index}]:`, switchPurple[index]);
    }
  });

  currentLeftPositionsTeal.forEach((position, index) => {
    if (position >= 49 || position <= -49) {
      switchTeal[index] = !switchTeal[index];
      // console.log(`switchTeal[${index}]:`, switchTeal[index]);
    }
  });
}

</script>

<style>
  #helix {
    width: 200px;
    height: 600px;
    perspective: 1000px;
  }

  .segment {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    position: absolute;
    /* transition: width 0.5s, height 0.5s; Add transition to width and height */
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
    <div class="segment segment-purple" style="
      --size: {switchPurple ? `${10 + 10 * (1 - Math.abs(currentLeftPositionsPurple[index]) / 50)}px` : `${20 - 20 * (1 - Math.abs(currentLeftPositionsPurple[index]) / 50)}px`};
      top: {index * 40}px; 
      left: calc(50% + {previousLeftPositionsPurple[index] = currentLeftPositionsPurple[index]}px);
      z-index: {isMovingRightPurple[index] ? '1' : '0'};
      "></div>
    <div class="segment segment-teal" style="
      --size: {switchTeal ? `${20 - 20 * (1 - Math.abs(currentLeftPositionsTeal[index]) / 50)}px` : `${10 + 10 * (1 - Math.abs(currentLeftPositionsTeal[index]) / 50)}px`};
      top: {index * 40}px; 
      left: calc(50% - {previousLeftPositionsTeal[index] = currentLeftPositionsTeal[index]}px);
      z-index: {isMovingRightTeal[index] ? '0' : '1'};
    "></div>

    
  {/each}
</div>
 -->
