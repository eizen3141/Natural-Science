<template>
  <div>
    <div class="page-title">
      <h3>Тема</h3>
    </div>
    <div class="circle">
      <router-link v-for="link in links" :key="link.url" :to="link.url">
        <a href="#" class="card light-blue white-text">{{link.title}}</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'title',
    data: () => ({
        links: [
            {title: 'Кинематика', url: '/undefined'},
            {title: 'Динамика', url: '/undefined'},
            {title: 'Статика', url: '/undefined'},
            {title: 'Закон сохранения энергии', url: 'undefined'}
        ]
    })
}
</script>