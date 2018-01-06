<template>
  <div class="home">
    <SearchSection></SearchSection>
    <CategoriesSection></CategoriesSection>
    <FoodItemSection></FoodItemSection>
    <RestaurantsSection></RestaurantsSection>
    <AboutSection></AboutSection>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import SearchSection from './search/search'
import RestaurantsSection from './resturant/resturant'
import FoodItemSection from './fooditems/food-item'
import CategoriesSection from './categories/categories'
import AboutSection from './about/about'
import FooterSection from '../footer/footer'
export default {
  name: 'home',
  components: {
    SearchSection,
    RestaurantsSection,
    FoodItemSection,
    CategoriesSection,
    AboutSection,
    FooterSection
  },
  data () {
    return {
      msg: 'home'
    }
  }
}
</script>
