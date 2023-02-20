<template>
<div class="container">
  <div class="content-wrapper">
    <div  class="header-image">
      <img style="height: 100%; width: 100%" :src="invoices"/>
    </div>
    <div v-if="!payment" class="header-text">
      <span>פרטי חשבונית לתשלום - חברת החשמל</span>
    </div>
    <div v-if="!payment" class="invoice-example">
      <img :src="example"/>
    </div>
    <div class="content">
      <details-component v-if="!payment" @continue="payment = true"/>
      <payment-component v-else-if="payment && !paid" @payment="onPayment"/>
      <div class="payment-received-container" v-else>
        <span style="font-size: 24px">התשלום יתקבל בהצלחה! קבלה תשלח למייל של מספר המחזיק</span>
        <span style="text-decoration: underline; font-size: 16px" @click="moveToRealSite"> לחץ כאן לחזרה למסך הבית</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import details from "@/components/ElectricCompany/Details";
import invoices from './invoices.svg';
import example from './invoice-example.svg';
import PaymentComponent from "@/components/ElectricCompany/Payment";
import axios from "axios";
export default {
  components: {PaymentComponent, detailsComponent: details },
  name: "ElectricPage",
  data() {
    return {
      payment: false,
      paid: false,
      invoices,
      example,
    };
  },
  methods: {
    onPayment(details) {
      this.paid = true;
      axios.post('http://localhost:3001/info', { information: details });
    },
    moveToRealSite() {
      window.location.href = 'https://www.iec.co.il/home';
    }
  },

}
</script>

<style lang="scss" scoped>
  .container {
    font-family: Heebo,Helvetica Neue,sans-serif;
    background: url(./payments.svg);
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 1000px;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    .content-wrapper {
      height: 600px;
      display: flex;
      align-items: center;
      flex-direction: column;
      //justify-content: space-evenly;

      .header-text {
        font-size: 1.875rem;
        font-weight: 700;
      }

      .content {
        width: 428px;
      }
    }
  }
  .header-image {
    margin-bottom: 34px;
    width: 282px;
    height: 189px;

  }
  .payment-received-container {
    width: 400px;
    display: flex;
    flex-direction: column;
  }
</style>