<script setup>
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarIcon } from '@radix-icons/vue';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * @type {{profile: ProfileDto, loading: boolean}}
 */
const { profile, loading } = defineProps({
  profile: Object,
  loading: Boolean
})

const profileRegisteredDate = profile && new Date(profile.registered.date)
</script>

<template>
  <Card class="p-4 flex gap-4 h-full">
    <Avatar>
      <Skeleton v-if="loading" />
      <AvatarImage
        v-if="!loading"
        :src="profile.picture.medium"
      />
      <AvatarFallback v-if="!loading">
        {{ profile.name.first[0] + profile.name.last[0] }}
      </AvatarFallback>
    </Avatar>
    <div class="flex flex-col gap-2 w-full">
      <Skeleton
        v-if="loading"
        class="w-full h-4"
      />
      <h4
        v-if="!loading"
        class="text-sm font-semibold"
      >
        {{ `${profile.name.title} ${profile.name.first} ${profile.name.last}` }}
      </h4>
      <div class="text-left text-sm flex-grow break-words">
        <Skeleton
          v-if="loading"
          class="w-full h-14 mt-1"
        />
        <ul v-if="!loading">
          <li>
            Address: {{ `${profile.location.country}, ${profile.location.city}, ${profile.location.state}` }}
          </li>
          <li>
            Tel: {{ `${profile.cell}` }}
          </li>
          <li>
            Email: {{ `${profile.email}` }}
          </li>
        </ul>
      </div>

      <Skeleton
        v-if="loading"
        class="w-full h-4"
      />
      <div
        v-if="!loading"
        class="flex items-center pt-2"
      >
        <CalendarIcon class="mr-2 h-4 w-4 opacity-70" />
        <span class="text-xs text-muted-foreground">
          Joined {{ `${profileRegisteredDate.toLocaleString('default', { month: 'long' })} ${profileRegisteredDate.getFullYear()}` }}
        </span>
      </div>
    </div>
  </Card>
</template>

<style scoped>

</style>
