<template>
  <div class="container-search">
    <div class="container-input-search">
      <div class="container-input">
        <input type="text" placeholder="Buscar producto" v-model="search" />
        <button @click="prueba" class="button-input-scanner">
          <img src="../assets/images/scanner.svg" alt="scanner" />
        </button>
      </div>
      <div class="container-filters">
        <p>Filtros</p>
      </div>
    </div>

    <h1>{{ search }}</h1>
    <div v-if="products.length > 0">
      <div v-for="product in products.slice(0, 10)" :key="product.brand_id">
        <p>{{ product.product_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import orkestraApi from "../api/orkestraApi";
export default {
  name: "Search",
  setup() {
    const prueba = () => {
      console.log("prueba");
    };
    const search = ref("");
    let products = ref([]);

    onMounted(async () => {
      // "/smart-cart/products?with_selects=0&page=1&limit=50&search=17378260&with_products=1";
      const URL = `/smart-cart/products?with_selects=0&page=1&limit=50`;

      const { data } = await orkestraApi.get(URL);
      //   console.log(data.products.data);
      products.value = data.products.data;
    });

    return { prueba, search, products };
  },
};
</script>

<style lang="scss" scoped>
.container-search {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-input-search {
  background: #e3e9ee;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0.5rem;

  .container-input {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .container-filters {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    p {
      text-align: end;
      font-size: 0.8rem;
      font-weight: 500;
      color: #2780ba;
      text-decoration: underline;
    }
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 1rem;
    border-radius: 3px;
    border: 1.5px solid #95a5a6;
    background-image: url("../assets/images/search.svg");
    background-repeat: no-repeat;
    background-position: 3% 50%;
    background-size: 14px;
    padding-left: 30px;
    font-size: 1rem;
    font-weight: 500;
    color: #95a5a6;
  }

  input::placeholder {
    color: #95a5a6;
    font-size: 1rem;
    font-weight: 500;
  }

  .button-input-scanner {
    position: absolute;
    right: 3%;
    top: 19%;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
}
</style>
