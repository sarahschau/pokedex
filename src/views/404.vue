<template>
    <div class="404 error-page container mt-5">
        <router-link class="position-absolute error-page__navigation" to="/">
            <svg viewBox="0 0 443.52 443.52" width="20" class="mr-2">
                <path
                    d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z"
                /></svg
            >Pokedex
        </router-link>
        <h1 class="mt-5 text-center">Sorry Pokemon not found!</h1>
        <img class="img-fluid" src="../assets/pokemon-sad.jpg" alt />
    </div>
</template>

<style lang="scss">
.error-page {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &__navigation {
        top: 0;
        left: 0;
    }
}
</style>
