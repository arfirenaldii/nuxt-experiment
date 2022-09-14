<template>
  <section
    id="home-advantage"
    class="
      tw-pt-[24px] tw-pb-[24px]
      lg:tw-pt-[40px] lg:tw-pb-[40px]
      tw-bg-blue-400
    "
  >
    <div class="content-container">
      <div class="tw-flex tw-flex-col lg:tw-flex-row tw-bg-white tw-rounded-xl">
        <template v-for="(item, n) in advantageList">
          <div
            :key="n + '-list'"
            class="tw-px-5 tw-py-8 lg:tw-p-8 tw-flex tw-items-center tw-gap-3"
          >
            <div class="tw-rounded-xl">
              <div class="tw-w-[64px] tw-h-[64px]">
                <img
                  :src="item.image"
                  alt="Benefit di Rumah Siap Kerja"
                  class=""
                />
              </div>
            </div>
            <div
              class="
                tw-font-semibold tw-text-p-mobile
                lg:tw-text-body-lg-desktop
              "
              v-text="item.text"
            ></div>
          </div>

          <div
            v-if="n < advantageList.length - 1"
            :key="n + '-divider'"
            class="tw-px-6 lg:tw-px-0 lg:tw-py-6"
          >
            <div
              class="tw-bg-gray-400 tw-h-[1px] lg:tw-h-full lg:tw-w-[1px]"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const advantageList = ref([
      {
        image: require("@/assets/new/images/homepage-benefit/benefit-1.svg"),
        text: "Mudah mengakses program dimanapun dan kapanpun!",
      },
      {
        image: require("@/assets/new/images/homepage-benefit/benefit-2.svg"),
        text: "Langsung praktik, karena akan mendapatkan alat praktik usaha!",
      },
      {
        image: require("@/assets/new/images/homepage-benefit/benefit-3.svg"),
        text: "Terdapat sesi konsultasi untuk merencakan karier impianmu!",
      },
    ]);

    return {
      advantageList,
    };
  },
});
</script>