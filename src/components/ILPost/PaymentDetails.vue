<template>
  <div class="payment-details-wrapper">
    <div class="payment-details-headers">
      <span class="payment-details-sub-header">הזן את הפרטים כהלכה ולחץ על המשך. שלב הבא: אישור תשלום ושליחת חשבונית למייל.</span>
      <div class="payment-details-main-header">
        <span>החבילה שלך ממתינה למשלוח, עלינו לאשר את התשלום לקבלה בארבעה ימים הקרובים</span>
        <img style="width: 400px" :src="paymentImages"/>
      </div>
      <span class="payment-details-amount"> סכום לתשלום: 45.16₪</span>
    </div>

    <div class="payment-details-container">
      <div class="param-wrapper" v-for="(param, paramIndex) in inputParams" :key="paramIndex">
          <div class="param-title">
            <span>{{ param.title }}</span>
          </div>
          <div class="param-inputs">
            <div class="param-input-wrapper" v-for="(input, inputIndex) in param.inputs" :key="inputIndex">
              <input :style="{width: (input.width || '100%')}" class="param-input" v-model="userData[input.key]" :placeholder="input.placeholder"/>
            </div>
          </div>
      </div>
      <div class="payment-button-wrapper" :class="{'not-allowed': (!valid || loading), 'checking-payment': loading}" >
        <div  @click="() => save()" class="payment-button">{{ loading ? 'בודק פרטי תשלום...' : 'המשך'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { inputParams } from './consts.js';
import paymentImages from './paymentImages.png'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  name: "PaymentDetails",
  data() {
    return {
      paymentImages,
      inputParams,
      errorMessage: 'בבקשה הכנס פרטי אשראי תקניים',
      userData: {},
      valid: false,
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
    save() {
      this.$emit('payed', this.userData);
    },
  },
}
</script>

<style lang="scss" scoped>
$red-font: #cb0006;

.payment-details-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .payment-details-headers {
    display: flex;
    flex-direction: column;
    text-align: right;
    max-width: 700px;
    margin-bottom: 20px;
    .payment-details-sub-header {
      font-size: 16px;
    }
    .payment-details-main-header {
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
      font-size: 18px;
      font-weight: 700;
    }
    .payment-details-amount {
      font-size: 24px;
    }
  }
  .payment-details-container {
    align-items: center;
    .param-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 10px;
      .param-inputs {
        display: flex;
        width: 50%;
        .param-input-wrapper {
          display: flex;
          margin-right: 5px;
          .param-input {
            width: auto;
            border: 1px #efefef solid;
            outline: none;
            padding: 5px;
            box-shadow: 0px -1px 20px 0px rgb(17 43 85 / 8%);
          }
        }
      }
    }
    .payment-button-wrapper {
      background-color: $red-font;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      &.not-allowed {
        background-color: #FA6868FC;
        cursor: not-allowed;
        &:hover {
          background-color: #FA6868FC !important;
          cursor: not-allowed !important;
        }
      }
      &:hover {
        background-color: rgba(213, 68, 68, 0.99)
      }
      .payment-button {
        padding: 5px;
      }
    }
  }
}
.checking-payment {
  background-color: #efefef !important;
}
</style>