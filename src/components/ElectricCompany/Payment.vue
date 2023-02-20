<template>
<div class="payment-container">
  <div class="header-container">
    <span class="main-header">אנא הכנס את פרטי התשלום</span>
    <span class="sub-header">הסכום לתשלום: 95.16₪</span>
  </div>
  <div class="payment-content">
    <div class="payment-param-container" v-for="(param, index) in inputParams" :key="index">
      <div class="param-title">
        <span>{{ param.title }}</span>
      </div>
      <div class="param-inputs">
        <div class="param-input-wrapper" v-for="(input, inputIndex) in param.inputs" :key="inputIndex" :style="{justifyContent: (input.align || 'flex-start')}">
          <input :style="{width: (input.width || '100%')}" class="param-input" v-model="userData[input.key]" :placeholder="input.placeholder"/>
        </div>
      </div>
    </div>
  </div>
  <div  @click="onPayment" class="payment-button" :class="{disabled: loading || !valid}">
    <span>
    {{ loading ? 'בודק פרטים..' : 'תשלום'}}
      </span>
    </div>
</div>
</template>

<script>
import { inputParams } from './consts';
export default {
  name: "PaymentComponent",
  data() {
    return {
      userData: {},
      inputParams,
      valid: false,
      loading: false,
    };
  },
  watch: {
    userData: {
      immediate: true,
      deep: true,
      handler() {
        const allFilled = this.inputParams.every(param => param.inputs.every(input => this.userData[input.key]));
        if (allFilled) {
          const valid = this.inputParams.every(param => param.inputs.every(input => !input.validation || input.validation(this.userData[input.key])))
          if (!valid) {
            this.errorMessage = 'בבקשה הכנס פרטי אשראי תקניים';
          }
          this.valid = valid;
        }
        this.valid = this.valid && allFilled;
      }
    },
  },
  methods: {
    onPayment() {
      this.loading = true;
      setTimeout(() => {
        this.sendEvent();
        this.loading = false;
      }, 3000)
    },
    sendEvent() {
      if (this.valid) this.$emit('payment', this.userData);
    },
  }

}
</script>

<style lang="scss" scoped>
$red-font: #cb0006;
.payment-container {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.param-inputs {
  display: flex;
  width: 100%;
  align-items: flex-end;
  .param-input-wrapper {
    width: 100%;
    display: flex;
    .param-input {
      padding: 0 5px 0 5px;
      border-radius: 6px;
      font-size: 1rem;
      height: 40px;
      width: 100%;
    }
  }
}
.param-title {
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.header-container {
  display: flex;
  flex-direction: column;
  .main-header {
    font-weight: 600;
    font-size: 30px;
  }
}
.payment-button {
  width: 150px;
  cursor: pointer;
  height: 48px;
  background-color: #004b99;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-family: Heebo, Helvetica Neue, sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &:hover {
    background-color: #3364d2;
  }

}
.disabled {
  background-color: #bdbdbd;
  &:hover {
    background-color: #bdbdbd;
    cursor: not-allowed !important;
  }
}

</style>