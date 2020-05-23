<template>
  <LayoutFixedScrollable>
    <template #header>
      <BaseAppBarHeader title="Articles" to-link="/" />
    </template>
    <template #content>
      <tabs
        :tabs="tabs"
        :currentTab="currentTab"
        :wrapper-class="'disabled-tabs'"
        :tab-class="'disabled-tabs__item'"
        :tab-active-class="'disabled-tabs__item_active'"
        :line-class="'disabled-tabs__active-line'"
        @onClick="handleClick"
      />
      <div class="tabs-details">
        <div class="container px-0 md:px-6">
          <div v-if="currentTab === 'today_tab'">
            <BaseTab name="TODAY" selected="true">
              <template v-for="(article, index) in todayArticles">
                <router-link :key="index" :to="{ name: 'ArticleListsItem', params: { id: article.id } }">
                  <ArticleItem :model="article" />
                </router-link>
              </template>
              <div v-if="!todayArticles.length" class="py-8">You don't have an article for today</div>
            </BaseTab>
          </div>
          <div v-if="currentTab === 'upcoming_tab'">
            <BaseTab name="UPCOMING">
              <template v-for="(article, index) in upcomingArticles">
                <router-link :key="index" :to="{ name: 'ArticleListsItem', params: { id: article.id } }">
                  <ArticleItem :model="article" />
                </router-link>
              </template>
              <div v-if="!upcomingArticles.length" class="py-8">You don't have an article for upcoming</div>
            </BaseTab>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <BaseNavigationBottom />
    </template>
  </LayoutFixedScrollable>
</template>

<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
import BaseTab from '@/components/BaseTab.vue';
import ArticleItem from '@/components/ArticleListsItem.vue';
import LayoutFixedScrollable from '@/components/LayoutFixedScrollable.vue';
import BaseNavigationBottom from '@/components/BaseNavigationBottom.vue';
import Tabs from '@/components/BaseTabsAnimation.vue';
import { mapGetters, mapActions } from 'vuex';
import { formatISODate, formatDate } from '@/helpers.js';
import { isToday, parseISO } from 'date-fns';
import { getTabMeta } from '@/helpers';

export default {
  name: 'Articles',
  components: {
    BaseAppBarHeader,
    Tabs,
    BaseTab,
    ArticleItem,
    LayoutFixedScrollable,
    BaseNavigationBottom
  },
  computed: {
    ...mapGetters('email', ['get_daily_plan']),
    todayArticles() {
      const data = this.get_daily_plan.find(article => {
        return isToday(parseISO(article.dateTime));
      });
      return data ? data.articles : [];
    },
    upcomingArticles() {
      let articles = [];
      this.get_daily_plan.forEach(item => {
        if (!isToday(parseISO(item.dateTime))) {
          if (item.articles.length) {
            articles = [...articles, ...item.articles];
          }
        }
      });
      return articles;
    }
  },
  mounted() {
    this.fetch_daily_plan();
  },
  methods: {
    ...mapActions('email', ['fetch_daily_plan']),
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  },
  data: () => ({
    tabs: getTabMeta(),
    currentTab: 'today_tab'
  })
};
</script>
