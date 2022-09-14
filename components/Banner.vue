<template>
  <div
    v-if="isLoading"
    class="shining-loading tw-aspect-[3/1] tw-bg-neutrals-10p tw-rounded-xl"
  ></div>
  <hooper
    v-else
    id="hooper-banner"
    ref="hooper"
    :infiniteScroll="infiniteScroll"
    :playSpeed="playSpeed"
    :autoPlay="autoPlay"
    :wheelControl="false"
    class="!tw-h-full"
  >
    <slide v-for="(item, n) in data" :key="n">
      <img
        :src="item.imagePath"
        @click="handleClickBanner($event, item, location)"
        alt="item"
        class="
          tw-rounded-lg
          tw-w-full
          tw-aspect-[3/1]
          tw-object-cover
          tw-cursor-pointer
        "
      />
    </slide>

    <hooper-navigation
      v-if="navigation && data.length > 1"
      slot="hooper-addons"
    ></hooper-navigation>
    <hooper-pagination
      v-if="pagination && data.length > 1"
      slot="hooper-addons"
    ></hooper-pagination>
  </hooper>
</template>

<script>
import { defineComponent, ref, useRouter } from "@nuxtjs/composition-api";

import { convertHeaderTitleIntoSlugUrl } from "~/util/string.js";

import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";

// import "hooper/dist/hooper.css";

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    navigation: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    infiniteScroll: {
      type: Boolean,
      default: false,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    playSpeed: {
      type: [Number, String],
      default: 3000,
    },
    data: {
      default: [],
    },
    location: {
      type: String,
      default: "welcome",
    },
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  setup() {
    const hooper = ref(null);

    const router = useRouter();

    const handleClickBanner = (event, item, location) => {
      console.log(location);
      if (hooper.value.isSliding) {
        event.preventDefault();
      } else {
        if (item.link) {
          window.location.href = item.link;
        } else if (location !== "welcome") {
          router.push(
            `/${location}/banner/${convertHeaderTitleIntoSlugUrl(item.title)}`
          );
        } else {
          router.push(`/banner/${convertHeaderTitleIntoSlugUrl(item.title)}`);
        }
      }
    };

    return {
      hooper,
      handleClickBanner,
    };
  },
});
</script>

<style lang="scss" scoped>
#hooper-banner {
  & ::v-deep .hooper-pagination {
    @apply tw-relative;
    right: unset !important;
    left: 0 !important;
    transform: none !important;
    padding: 5px;
  }

  & ::v-deep .hooper-indicator {
    @apply tw-w-[6px] tw-h-[6px] lg:tw-w-[12px] lg:tw-h-[12px];
    border-radius: 8px !important;
    background-color: #d9d9d9;
  }

  & ::v-deep .hooper-indicator.is-active {
    @apply tw-rounded-full;
    width: 24px !important;
  }

  & ::v-deep .hooper-indicator:hover {
    background-color: #029ffd !important;
  }

  & ::v-deep .hooper-indicator.is-active {
    background-color: #029ffd !important;
  }

  & ::v-deep .hooper-next {
    fill: #029ffd;
    background-color: white;
    padding: 0.5rem;
    border-radius: 50%;
    top: 47%;
    cursor: pointer;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  & ::v-deep .hooper-prev {
    fill: #029ffd;
    background-color: white;
    padding: 0.5rem;
    border-radius: 50%;
    top: 47%;
    cursor: pointer;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  & ::v-deep .hooper-next {
    right: -1.2rem;
  }

  & ::v-deep .hooper-prev {
    left: -1.2rem;
  }
}
</style>
