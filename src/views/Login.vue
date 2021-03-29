<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">
        Авторизация
      </span>
      <div class="input-field">
        <input id="email" type="text" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">
          пусто
        </small>
        <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">
          некоректно
        </small>
      </div>
      <div class="input-field">
        <input id="password" type="password" v-model.trim="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">
          введите пароль
        </small>
        <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">
          пароль должен больше {{$v.password.$params.minLength.min - 1}} символов. Сейчас он {{password.length}}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const mongoose = require("mongoose");
      const Schema = mongoose.Schema;
 
      // установка схемы
      const userScheme = new Schema({
        email: String,
        password: String,
      });
 
      // подключение
      mongoose.connect('mongouri', { useUnifiedTopology: true, useNewUrlParser: true })
 
      const User = mongoose.model("User", userScheme)
      const user = new User({email: this.email, password: this.password})
      user.findOne(function(err){
        mongoose.disconnect();  // отключение от базы данных
        if(err) return console.log(err);
        console.log("Сохранен объект", user);
      });
      this.$router.push('/') 
    }
  }
}
</script>