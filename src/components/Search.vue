<template>
  <div class="container-search">
    <div class="container-input-search">
      <div class="container-input">
        <input type="text" placeholder="Buscar producto" />
        <button @click="prueba" class="button-input-scanner">
          <img src="../assets/images/scanner.svg" alt="scanner" />
        </button>
      </div>
      <div class="container-filters">
        <p>Filtros</p>
      </div>
    </div>

    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  setup() {
    const prueba = () => {
      console.log("prueba");
    };
    return { prueba };
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
