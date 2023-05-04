<template>
  <div class="container-card-product">
    <span class="container-image">
      <img
        :src="
          product.images.length > 0
            ? product.images[0].path + product.images[0].file
            : 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1683150664/default_ifwn9k.png'
        "
        :alt="product.product_name"
        class="image-product"
      />
    </span>
    <span class="container-info">
      <p>{{ product.product_name }}</p>
      <p>
        <b>{{ product.brand_name }}</b>
      </p>
      <p>${{ product.price }}</p>
      <p>{{ product.product_description }}</p>
      <p>{{ product.color_name }}</p>
      <p v-if="product.price_with_discount > 0">
        <b style="color: red">${{ product.price_with_discount }} descuento</b>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container-card-product {
  width: 310px;
  display: flex;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 8px;

  .container-image {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-product {
    height: 74px;
  }

  .container-info {
    padding: 0 5px;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
      margin: 0;
      font-size: 15px;
      padding: 2px 0;
      color: #95a5a6;

      b {
        color: #000;
      }
    }
  }
}
</style>
