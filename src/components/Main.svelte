<script>
    import Step from "./Step.svelte";

    let steps= [
        {
            name: 'Event Ticket Platform', icon: 'fa-solid fa-ticket', href: 'https://github.com/netsfreak/event-ticket-platform'
        },
        {
            name: 'Yet To Update', icon: 'fa-solid fa-list-check', href: 'https://github.com/netsfreak'
        },
        {
            name: 'Yet to update', icon: 'fa-solid fa-diagram-project', href: 'https://github.com/netsfreak'
        },
    ]

    let benefits=[
        {name:'Software Developer', description: 'Skilled in building web applications using modern frameworks.'},
        {name:'Problem Solver', description: 'Adept at troubleshooting and optimizing code for performance.'},
        {name:'Team Player', description: 'Collaborates effectively with cross-functional teams to deliver high-quality software.'},
    ]


</script>

<main class="flex flex-col p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-green-400">Shreedhar</span> 
                <br />
                Full Stack
                <span class="poppins text-green-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-green-400">favourite tech</span> includes JavaScript, SvelteKit,
                Spring Boot, Vue.js, GCP, PostgreSQL, Splunk, and Dynatrace.<br />
                I design scalable REST APIs, build interactive UIs, implement robust monitoring and analytics for modern web applications.
            </p>
            <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative
            overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
            href='mailto:snghshreedhar@gmail.com'
            target="_blank"
            >
                    <div class='absolute top-0 right-full w-full h-full bg-green-400 opacity-20 
                    group-hover:translate-x-full z-0 duration-200'></div>
                    <h4 class="relative z-10">
        Get in Touch &rarr;
    </h4>
        </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/profile.png"} alt="Profile image" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
    </section>
    <section id="projects" class= "py-2 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl">
            A few of my creative endeavors.
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">   
            Curious to <span class="poppins text-green-400">see </span> of my work?
        </h3>
        
    </div>
    <a
  href="https://blogs.mtdv.me/videos/tIojEbtonl"
  target="_blank"
  rel="noopener noreferrer"
  class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 hover:border-green-700 duration-200 cursor-pointer relative z-10"
>
  <i class="fa-regular fa-circle-play"></i>
  <p>Watch The Video</p>
</a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        <Step step={steps[0]}>
            <p>
                Event Ticket Platform is a comprehensive web application that allows users to browse, search, and purchase tickets for various events.
            </p>
            </Step>
        <Step step={steps[1]}>
            <p>
                Yet to update
            </p>
            </Step>
        <Step step={steps[2]}>
            <p>
                Yet to update
            </p>
            </Step>

    </div>
    </section>
    <section id="About" class="py-20 pt-10 lg:py-32 flex flex-col 
    gap-16 sm:gap-20 md:gap-24 relative">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0
    before:left-0 before:w-3/4 before:h-1.5 before:bg-green-700 after:absolute 
    after:bottom-0 after:right-0 after:w-3/4 after:h-1.5 after:bg-green-700 py-4">

    <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit more <span class="poppins text-green-700">About</span> me.
</h3>
    
</div>
<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl"> I am a</p>
<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
    {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500
                font-semibold">
                0{index + 1}
                </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>
                            {benefit.description}
                        </p>
                </div>
             </div>
        {/each}
</div>
    </section>
</main>
