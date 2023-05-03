<template>
  <header class="header-container">
    <nav>
      <div class="container-logo">
        <img src="../assets/images/logo.svg" alt="logo" />
      </div>
      <div class="container-navigation">
        <img
          class="full-logo"
          src="../assets/images/full-logo.svg"
          alt="full-logo"
        />
        <ul class="container-navigation-list">
          <li>
            <img src="../assets/images/user.svg" alt="user" />
          </li>
          <li>
            <img src="../assets/images/cart.svg" alt="user" />
          </li>
          <li>
            <img src="../assets/images/notification.svg" alt="user" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.header-container {
  margin: 0;
  padding: 0;
  background-image: url("../assets/images/background-header.svg");
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

nav {
  display: flex;
  .container-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 15%;
    border-right: 1px solid #d6dfe4;
  }

  .container-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    height: 60px;
    width: 85%;
  }

  .full-logo {
    width: 132px;
  }

  .container-navigation-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    list-style: none;
    li {
      margin: 0 0.2rem;
      cursor: pointer;
    }
  }
}
</style>
