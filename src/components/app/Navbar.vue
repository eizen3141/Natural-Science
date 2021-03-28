<template>
    <nav class="navbar green lighten-0">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('click')">
                    <i class="material-icons black-text">dehaze</i>
                </a>
            </div>
            <ul class="right hide-on-small-and-down">
                <li>
                    <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
                        USER NAME
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <router-link to="/profile" class="black-text">
                                <i class="material-icons">account_circle</i>Профиль
                            </router-link>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <router-link to="/" class="black-text">
                                <i class="material-icons">assignment_return</i>Выйти
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import M from "materialize-css"
export default {
    methods: {
        logout() {
            console.log('Logout')
            this.$router.push('/login?message = logout')
        }
    },
    mounted() {
        M.Dropdown.init(this.$refs.dropdown, {constrainWidth: true})
    }    
}
</script>
