<script setup>
import { onMounted, ref, watchEffect } from 'vue';

import ProfileService from '@/services/ProfileService';
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast';
import ProfileCard from '@/components/ProfileCard.vue';
import InfiniteScrollObserver from '@/components/InfiniteScrollObserver.vue';

import './assets/index.css'

const { toast } = useToast()

/**
 * @typedef { import("vue").Ref } Ref
 */

/**
 * Reactive variable to keep the current page for pagination
 * Starts at `1` by default, representing the first page.
 * @type {Ref<number>}
 */
const page = ref(1)
/**
 * Reactive variable to represent hasMore flag used to whether render of not InfiniteScrollObserver
 * @type {Ref<boolean>}
 */
const hasMore = ref(false)
/**
 * Reactive variable to represent isLoading flag used to show skeleton loader
 * @type {Ref<boolean>}
 */
const isLoading = ref(false)
/**
 * Reactive variable to keep the profiles fetched from the API
 * @type {Ref<ProfileDto[]>}
 */
const profiles = ref([])

/**
 * Function to fetch Profiles from API by calling ProfileService's method
 * @param page {number} pagination page
 * @returns {Promise<GetProfilesResponse | undefined>}
 */
const fetchProfiles = async (page) => {
  try {
    const res = await ProfileService.getProfiles(page);
    if (!res.ok) {
      toast({
        title: 'Error',
        description: 'There is a error while fetching profiles. Please try again',
        variant: 'destructive'
      });
    }

    return await res.json()
  } catch (e) {
    console.error(e)
    toast({
      title: 'Error',
      description: 'There is a error while fetching profiles. Please try again',
      variant: 'destructive'
    });
  }

}

onMounted(async () => {
  watchEffect(async () => {
    isLoading.value = true
    const res = await fetchProfiles(page.value)
    if (res.results) {
      profiles.value = [...profiles.value, ...res.results]
      hasMore.value = res.results.length === 20
    }
    isLoading.value = false
  })
})

</script>

<template>
  <h1 class="text-center font-bold pt-2">
    Scroll to fetch more profiles
  </h1>
  <div class="container py-4 items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    <ProfileCard
      v-for="profile in profiles"
      :key="profile.login.uuid"
      :profile="profile"
    />
    <InfiniteScrollObserver
      v-if="hasMore"
      @on-intersection="page++"
    >
      <template #loader>
        <ProfileCard
          v-if="isLoading"
          :loading="isLoading"
        />
      </template>
    </InfiniteScrollObserver>
  </div>

  <Toaster />
</template>

<style>
html, body {
  overflow-x: hidden;
}
body {
  position: relative
}
</style>
