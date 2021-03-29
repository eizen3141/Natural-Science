<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
      <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" :exact="link.exact">
        <a href="#" class="waves-effect waves-green pointer">{{link.title}}</a>
      </router-link>
    </ul>
</template>

<script>
export default {
    props: ['value'],
    data: () => ({
        links: [
            {title: 'Teмa', url: '/title', exact: true},
            {title: 'Тест', url: '/undefined'},
            {title: 'Оценка', url: '/undefined'},
            {title: 'Рейтинг', url: '/undefined'}
        ]
    })
}
</script>