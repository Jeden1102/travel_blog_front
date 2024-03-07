<template>
    <div class="container pt-20 md:pt-40 text-white">
        <AtomsSubheading>Checkout the destinations I've been</AtomsSubheading>
        <AtomsHeading>Travel map</AtomsHeading>
        <template v-if="journeys">
            <GoogleMap :disable-default-ui="true" :styles="custom" class="mt-8" :api-key="config.public.googleApiKey"
                style="width: 100%; height: 500px" :center="journeys.center" :zoom="6">
                <MarkerCluster>
                    <Marker v-for="(location, i) in journeys.locations" :options="{ position: location }" :key="i">
                        <InfoWindow class="bg-gray-600 p-4">
                            <p class="text-lg">
                                {{ location.title }}
                            </p>
                            <p>{{ location.location }}</p>
                            <p>{{ location.date }}</p>
                            <AtomsButton v-if="location.blogURI" custom-class="mt-2 text-sm" type="link"
                                :uri="location.blogURI">read more
                                <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
                            </AtomsButton>
                        </InfoWindow>
                    </Marker>
                </MarkerCluster>
            </GoogleMap>
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { GoogleMap, Marker, MarkerCluster, InfoWindow } from 'vue3-google-map'

const config = useRuntimeConfig()
const journeysData = await getJourneys();

const journeys = computed(() => {
    const locations = []
    if (journeysData) {
        journeysData.data.journeys.data.forEach(journey => {
            const blogURI = journey.attributes.blog.data ? `/blog/${convertToSlug(journey.attributes.blog?.data.attributes.title)}?id=${journey.attributes.blog?.data.id}` : false;
            console.log(journey.attributes.blog)
            locations.push({
                lat: +journey.attributes.location.lat,
                lng: +journey.attributes.location.lon,
                title: journey.attributes.title,
                blogURI,
                location: journey.attributes.location.display_name,
                date: journey.attributes.date
            })
        })
        return {
            locations,
            center: locations[0],
        }
    }
    return false
})

const custom =
    [
        {
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "stylers": [
                {
                    "color": "#131314"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "color": "#131313"
                },
                {
                    "lightness": 7
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 25
                }
            ]
        }
    ]

</script>

<style>
.gm-style .gm-style-iw-c {
    padding: 0;
}

.gm-ui-hover-effect>span {
    background: white;
}
</style>