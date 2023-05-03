<template>
  <div class="container-search">
    <div v-if="isScanner" class="container-scanner">
      <div class="return">
        <p @click="scanner">
          <img src="../assets/images/arrow-left.svg" alt="scanner" /> Regresar
        </p>
        <b> Escanea el código </b>
      </div>

      <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded" />
    </div>
    <div class="container-input-search">
      <div class="container-input">
        <input
          type="text"
          placeholder="Buscar producto"
          v-model="search"
          @input="searchProducts"
        />
        <button
          v-if="search.length === 0"
          @click="scanner"
          class="button-input-scanner"
        >
          <img src="../assets/images/scanner.svg" alt="scanner" />
        </button>
        <button v-else @click="clearedSearch" class="button-input-scanner">
          <img src="../assets/images/cancel.svg" alt="scanner" />
        </button>
      </div>
      <div class="container-filters">
        <p>Filtros</p>
      </div>
    </div>

    <div v-if="products.length > 0">
      <div v-for="product in products" :key="product.brand_id">
        <ProductCard :product="product" />
      </div>
    </div>
    <div v-else class="no-products">
      <img width="30" src="../assets/images/no-search.svg" alt="no-products" />
      <h3>No existen resultados para está búsqueda</h3>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";
import orkestraApi from "../api/orkestraApi";
import ProductCard from "./ProductCard.vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  name: "Search",
  components: {
    ProductCard,
    StreamBarcodeReader,
  },
  setup() {
    const search = ref("");
    let products = ref([]);
    let isScanner = ref(false);

    onMounted(async () => {
      const URL = `/smart-cart/products?with_selects=0&page=1&limit=10`;
      const { data } = await orkestraApi.get(URL);
      console.log(data.products.data);
      products.value = data.products.data;

      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const onDecode = (result) => {
      search.value = result;
      isScanner.value = !isScanner.value;
    };

    const scanner = () => {
      isScanner.value = !isScanner.value;
    };

    const searchProducts = async () => {
      const URL = `/smart-cart/products?with_selects=0&page=1&limit=50&search=${search.value}&with_products=1`;
      const { data } = await orkestraApi.get(URL);
      products.value = data.products.data;
    };

    const clearedSearch = () => {
      search.value = "";
    };

    const loadMoreProducts = async () => {
      const URL = `/smart-cart/products?with_selects=0&page=1&limit=50&search=${search.value}&with_products=1`;
      const { data } = await orkestraApi.get(URL);
      products.value = data.products.data;
    };

    const handleScroll = () => {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        loadMoreProducts();
      }
    };

    return {
      search,
      products,
      isScanner,
      scanner,
      searchProducts,
      clearedSearch,
      onDecode,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-scanner {
  background: #fff;
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;

  .return {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    p {
      font-size: 0.9rem;
      font-weight: 600;
      color: #2980b9;
      display: flex;
      align-items: center;
      justify-content: start;

      img {
        width: 20px;
      }
    }
  }
}
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
    outline: none;
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

.no-products {
  height: calc(100vh - 250px);
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: red;
    text-align: center;
  }
}
</style>
