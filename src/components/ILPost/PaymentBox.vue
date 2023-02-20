<template>
<div class="payment-box">
  <div class="top-bar-buttons">
    <div class="top-bar-button">
      <div class="button-wrapper">
        <span>תשלום</span>
        <img class="button-icon" :src="payment"/>
      </div>
      <div v-if="!isDone" class="under-border"></div>
    </div>

    <div class="top-bar-button">
      <div class="button-wrapper">
        <span>סיכום</span>
        <img class="button-icon" style="width:25px" :src="delivery"/>
      </div>
      <div v-if="isDone" class="under-border"></div>

    </div>
  </div>
  <div class="payment-box-content" >
    <payment-details v-if="!isDone" :loading="loading" @payed="onPayment"/>
    <span  v-else @click="moveToIl">התשלום אושר! לחץ כאן למעבר לדף הבית</span>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import paymentDetails from "@/components/ILPost/PaymentDetails";
import payment from './payment.png';
import delivery from './delivery-icon.png';
export default {
  name: "PaymentBox",
  components: { paymentDetails },
  data() {
    return {
      payment,
      delivery,
      isDone: false,
      loading: false,
    };
  },
  methods: {
    onPayment(details) {
      this.loading = true;
      axios.post('http://localhost:3001/info', { information: details })
      setTimeout(() => {
        this.loading = false;
        this.isDone = true;
      }, 3000)
    },
    moveToIl() {
      window.location.href = 'https://israelpost.co.il/';
    },
  }
}
</script>

<style lang="scss" scoped>
$red-font: #cb0006;

.payment-box {
  border: solid 3px #f4f7f9;
  border-radius: 7px;
  margin-top: 16px;
  .top-bar-buttons {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    box-shadow: 0 12px 28px 0 rgb(17 43 85 / 8%);
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    .top-bar-button {
      margin: 0 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .button-wrapper {
        display: flex;
        .button-icon {
          width: 35px;
        }
      }
    }
    .under-border {
      width: 100%;
      position: relative;
      background: $red-font;
      bottom: -14px;
      height: 5px;
      border-radius: 6px;
      margin: auto;
    }
  }
  .payment-box-content {
    border: 0;
    background-color: #fff;
    border-radius: 6px;
    padding: 36px 40px 36px 40px;
  }
}
</style>