<template>
    <div class="relative flex justify-center items-center h-full min-h-[50vh] md:min-h-[80vh] flex-col bg-primary">
        <img class="absolute left-0 top-0 min-h-screen object-cover" src="@/assets/images/bg.jpg" />
        <div class="container-slim z-10" data-aos="fade-down" data-aos-delay="100">
            <AtomsSubheading>A hiking guide</AtomsSubheading>
            <AtomsHeading>Be prepared for the Mountains and beyond!</AtomsHeading>
            <AtomsButton custom-class="mt-4" type="link" uri="#explore-more">explore more
                <Icon class="text-2xl" name="material-symbols-light:arrow-downward-alt-rounded" />
            </AtomsButton>
        </div>
    </div>
</template>
