<template>
<div class="il-main-container">
  <div class="topbar-il-wrapper">
    <div class="topbar-il">
    <div class="top-side">
      <span>מכרזים</span>
      <span>דרושים</span>
      <span>עברית</span>
    </div>
    <div class="bottom-side">
      <div class="left-wrapper">
        <div class="left-right side">
          <div class="right-wrapper">
            <img class="logo-image" :src="ilLogo"/>
          </div>
          <div class="separator"></div>
          <div class="menu-button">
            <span style="margin: 0 10px 0 0 ">תפריט</span>
            <img :src="hamburger"/>
          </div>
        </div>
        <div class="left-left">

          <div class="left-bottom-side">
            <div class="contact-us-button">
              <img :src="chat"/>
              <span>יצירת קשר</span>
            </div>
            <div class="separator"></div>
            <img class="search" :src="search"/>
            <div class="personal-space-button">
              <span style="top: 2px; position: relative; text-align: center">כניסה לאיזור אישי</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="il-main-wrapper">
    <div class="il-container">
      <div class="breadcrumb">
        <span>{{ ' תשלום מכס / עמילות מכס < '}}</span>
        <span style="text-decoration: underline">דואר ישראל </span>
      </div>
      <div class="header">
        <span>תשלום מכס / עמילות מכס</span>
      </div>
    </div>
    <payment-box/>
  </div>
</div>
</template>

<script>
import paymentBox from './PaymentBox';
import ilLogo from './ILlogo.png';
import hamburger from './hamburger.png';
import chat from './chat.png';
import search from './search.png';
export default {
  name: "ILPost",
  components: { paymentBox },
  data () {
    return {
      chat,
      hamburger,
      search,
      ilLogo,
    };
  },
}
</script>

<style lang="scss" scoped>
$red-font: #cb0006;
.il-main-container {
  font-family: 'Assistant';
  .topbar-il-wrapper {
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, .72);
    background-image: url(./blur.png);
    background-repeat: repeat-x;
    width: 100%;
    box-shadow: -15px 24px 20px rgb(64 64 64 / 8%);
    height: 100px;
    z-index: 120;
    position: fixed;
    top: 0;
    .topbar-il {
      width: 85%;


      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .top-side {
        padding: 0 20px 0 40px;
        display: flex;
        width: 200px;
        justify-content: space-between;
      }

      .bottom-side {
        padding: 0 20px 0 40px;

        .side {
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
        }


        .left-wrapper {
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;

          .left-left {
            display: flex;
            align-self: center;
            width: 80%;
            flex-direction: column;

            .left-bottom-side {
              display: flex;
              flex-direction: row-reverse;
              justify-content: flex-end;

              .contact-us-button {
                color: $red-font;
              }

              .search {
                margin-left: 10px;
                width: 20px;
                height: 20px;
                align-self: center;
              }

              .personal-space-button {
                text-align: center;
                display: flex;
                justify-content: center;
                background-color: $red-font;
                color: white;
                border-radius: 25px;
                font-size: 15px;
                text-decoration: none;
                align-items: center;
                margin: 0 6px 3px 6px;
                width: 164px;
                justify-content: center;
                align-items: center;
                border-radius: 25px;
                padding: 9px 0 16px 1px;
              }
            }
          }

          .right-left {

          }
        }

        .right-wrapper {
          .logo-image {
            width: 108px;
            height: 56px;
          }
        }
      }
    }
  }
  .il-main-wrapper {
    margin: 20px 80px 80px 80px;
    position: relative;
    top: 120px;

    .breadcrumb {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      color:#505050;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .header {
      display: flex;
      justify-content: flex-end;
      font-weight: 600;
      font-size: 40px;
      color: #cb0006;
    }
  }
}
.separator {
  margin: 0 20px 0 20px;
  width: 1px;
  height: 32px;
  opacity: .11;
  border: solid 1px #828184;
  background-color: #75757c;
}
.menu-button {
  color: #cb0006;
  display: flex;
}

</style>