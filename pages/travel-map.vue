<template>
    <div class="container pt-20 md:pt-40 text-white">
        <AtomsSubheading>Checkout the destinations I've been</AtomsSubheading>
        <AtomsHeading>Travel map</AtomsHeading>
        <template v-if="journeys">
            <GoogleMap class="mt-8" :api-key="config.public.googleApiKey" style="width: 100%; height: 500px"
                :center="journeys.center" :zoom="6">
                <MarkerCluster>
                    <Marker v-for="(location, i) in journeys.locations" :options="{ position: location }" :key="i" />
                </MarkerCluster>
            </GoogleMap>
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

const config = useRuntimeConfig()
const journeysData = await getJourneys();

const journeys = computed(() => {
    const locations = []
    if (journeysData) {
        journeysData.data.journeys.data.forEach(journey => {
            locations.push({
                lat: +journey.attributes.location.lat,
                lng: +journey.attributes.location.lon,
            })
        })
        return {
            locations,
            center: locations[0],
        }
    }
    return false
})
</script>