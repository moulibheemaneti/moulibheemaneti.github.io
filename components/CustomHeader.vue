<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar">
            <!-- <ul :class="{ 'side-menu-overlay': isSideMenuToggled }"> -->
            <ul>
                <nuxt-link to="/" class="nav-item__brand"><img src="@/assets/images/mb-logomark.svg" />
                    Mouli Bheemaneti
                </nuxt-link>
                <!-- <li class="navbar_toggle"><i class="fa fa-bars"></i></li>
                <li class="navbar-item">
                    <NuxtLink to="/coming-soon">About MB</NuxtLink>
                </li>
                <li class="navbar-item">
                    <NuxtLink to="/coming-soon">Software Dev</NuxtLink>
                </li>
                <li class="navbar-item">
                    <NuxtLink to="/coming-soon">Musical Artist</NuxtLink>
                </li>
                <li class="navbar-item">
                    <NuxtLink to="/coming-soon">Designer</NuxtLink>
                </li>
                <li class="navbar-item">
                    <NuxtLink to="/coming-soon">Blogger</NuxtLink>
                </li> -->
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
// const isSideMenuToggled = ref<boolean>(false)

// onMounted(() => {
//     const toggleButton = document.getElementsByClassName("navbar_toggle")[0];
//     const navbarItems = document.getElementsByClassName("navbar-item");

//     toggleButton.addEventListener('click', function () {
//         for (var i = 0; i < navbarItems.length; i++) {
//             navbarItems[i].classList.toggle('active');
//         }
//         isSideMenuToggled.value = !isSideMenuToggled.value;
//     });
// })
</script>

<style lang="scss">
.side-menu-overlay {
    background-color: rgba($color: #000000, $alpha: 0.7);
}

.navbar ul {
    // background-color: rgba($color: #000000, $alpha: 0.7);
    padding: 1rem 2rem;
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-item {
    list-style-type: none;
    padding: 1rem 2rem;
    text-align: center;
    color: white;
}

.navbar_toggle {
    display: none;
    cursor: pointer;
}

.nav-item__brand {
    list-style-type: none;
    display: flex;
    margin: auto;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;

    img {
        height: 2.5rem;
    }
}

@media (max-width: 600px) {
    .navbar {
        background-color: transparent;
        position: absolute;
        z-index: 10;
        width: 100%;
    }

    .navbar ul {
        // background-color: rgba($color: #000000, $alpha: 0.7);
        flex-wrap: wrap;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .navbar_toggle {
        display: block;
    }

    .navbar-item {
        display: none;
        width: 100%;
        text-align: center;
    }

    .navbar-item:first {
        padding: 4rem 0rem;
    }

    .nav_item__brand {
        display: block;
        padding: 1rem 0rem;
        flex-grow: 4;
    }

    .active {
        display: block;

    }
}
</style>
