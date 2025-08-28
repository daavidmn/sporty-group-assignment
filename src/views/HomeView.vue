<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" class="breadcrumbs">
      <template v-slot:item="{ item }">
        <router-link
          class="text-background font-weight-regular"
          v-if="item.title != route.meta.breadcrumb && item.title != 'Not Found'"
          :to="item.to || ''"
        >
          {{ item.title }}
        </router-link>
        <span class="font-weight-bold" v-else>{{ item.title }}</span>
      </template>
    </v-breadcrumbs>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  return route.matched
    .filter((r) => r.name !== 'league-fetcher')
    .map((r) => ({
      title: r.meta.breadcrumb?.toString() ?? r.name?.toString() ?? '',
      to: r.path,
    }))
})
</script>

<style scoped lang="scss">
.breadcrumbs {
  height: 30px;
  margin: 1rem 0;
  span {
    padding: 3px;
  }
}
</style>
