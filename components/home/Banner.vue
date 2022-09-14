<template>
  <section
    id="home-main-banner"
    class="
      content-container
      tw-pt-[24px] tw-pb-[20px]
      lg:tw-pb-[28px] lg:tw-pt-[32px]
    "
  >
    <!-- <div v-if="$fetchState.pending">
      <p>Fetching...</p>
    </div> -->
    <div v-if="$fetchState.error">
      <p>An error occurred :(</p>
    </div>
    <div v-else>
      <banner
        :isLoading="$fetchState.pending"
        :navigation="lg"
        :pagination="true"
        :autoPlay="true"
        :playSpeed="5000"
        :infiniteScroll="true"
        :data="banners"
        :location="'welcome'"
      />
      <button
        class="
          tw-text-white tw-bg-blue-700
          tw-hover:bg-blue-800
          tw-font-medium
          tw-rounded-lg
          tw-text-sm
          tw-px-5
          tw-py-2
          tw-mr-2
          tw-mt-2
          tw-focus:outline-none
        "
        @click="$fetch"
      >
        Refresh
      </button>
    </div>
  </section>
</template>

<script>
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from "@nuxtjs/composition-api";

// import { breakpointsTailwind, useBreakpoints } from "@vueuse/nuxt";

export default defineComponent({
  setup() {
    const banners = ref(null);
    // const isLoading = ref(false);

    const { $http } = useContext();

    useFetch(async () => {
      //   banners.value = await $http.$get(
      //     "https://devel.rumahsiapkerja.com/rsk-backend/v3/website/banners?page=0&size=100&isActive=true&location=welcome"
      //   );

      let res = await $http.$get(
        "https://devel.rumahsiapkerja.com/rsk-backend/v3/website/banners?page=0&size=100&isActive=true&location=welcome"
      );

      banners.value = res.data.content
        .sort((a, b) => a.seq - b.seq)
        .filter((banner) => banner.locations.includes("welcome"));
    });

    // const params = ref({
    //   page: 0,
    //   size: 100,
    //   isActive: true,
    //   location: "welcome",
    // });

    // const fetchBanner = async () => {
    //   isLoading.value = true;
    //   banners.value = await getBannerList(params).then((res) => {
    //     isLoading.value = false;

    //     return res.content
    //       .sort((a, b) => a.seq - b.seq)
    //       .filter((banner) => banner.locations.includes(params.location));
    //   });
    // };

    // onMounted(() => {
    //   fetchBanner();
    // });

    // const breakpoints = useBreakpoints(breakpointsTailwind);

    // const lg = breakpoints.greater("lg");

    return {
      banners,
      //   isLoading,
      //   lg,
    };
  },
});
</script>