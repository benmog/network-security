<template>
  <div class="details-content">
    <div class="input-container">
      <span class="input-header">מספר חשבון חוזה</span>
      <input class="input-data-container" v-model="contractName"/>
    </div>
    <div class="input-container">
      <span class="input-header">4 ספרות אחרונות של מספר החשבונית</span>
      <input class="input-data-container" v-model="contractNumber"/>
    </div>
    <button :class="{'disabled': !valid}" @click="cont" class="continue-button">המשך</button>
  </div>
</template>

<script>
export default {
  name: "DetailsComponent",
  computed: {
    valid() {
      return this.contractNumber.length === 4 && this.contractName.length === 9;
    },
  },
  data() {
    return {
      contractName: '',
      contractNumber: '',
    };
  },
  methods: {
    cont() {
      if (this.valid) this.$emit('continue');
    }
  }
}
</script>

<style lang="scss" scoped>
.disabled {
  background-color: #adadad !important;
  cursor: not-allowed !important;
  &:hover {
    background-color: #adadad !important;
  }
}
.details-content {
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 36px;

    .input-header {
      font-size: 1rem;
      font-weight: 500;
      display: flex;
      justify-content: flex-end;
      width: 100%;

    }

    .input-data-container {
      border-radius: 6px;
      font-size: 1rem;
      height: 59px;
      width: 100%;
    }
  }

  .continue-button {
    width: 90px;
    cursor: pointer;
    height: 48px;
    background-color: #004b99;
    color: #fff;
    border: none;
    border-radius: 25px;
    font-family: Heebo, Helvetica Neue, sans-serif;
    font-weight: 500;

    &:hover {
      background-color: #3364d2;
    }

  }
}
</style>