<script setup>

    // ########################### Navbar Toogle Functionallity #########################
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        
        }); 
    });

</script>

<template>

    <nav class="navbar pt-5" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        
            <RouterLink class="navbar-item" to="/"><h1 class="title pr-6">fernando.. </h1></RouterLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <RouterLink class="navbar-item" to="/"> home </RouterLink>
                <RouterLink class="navbar-item" to="/about-me"> about me </RouterLink>
                <RouterLink class="navbar-item" to="/my-services"> my services </RouterLink>
                <RouterLink class="navbar-item" to="/portfolio"> portfolio </RouterLink>
                <RouterLink class="navbar-item" to="/contact-me"> contact me! </RouterLink>
            </div>

            <div class="navbar-end pr-5">
                
                <button class="button">Dark</button>

            </div>
        </div>
    </nav>
    
</template>
