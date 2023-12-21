<template>
  <div class="registration-form-container">
    <h1>Реєстрація користувача</h1>
    <p>Зареєструйтеся, щоб отримати доступ до ексклюзивних функцій</p>

    <h2>Реєстрація</h2>
    <form @submit.prevent="submitForm" class="registration-form animate__animated animate__fadeInDown">
      <label for="firstName">Ім'я:</label>
      <input type="text" id="firstName" v-model="firstName" required>

      <label for="lastName">Прізвище</label>
      <input type="text" id="lastName" v-model="lastName" required>

      <label for="phoneNumber">Номер телефону</label>
      <input type="tel" id="phoneNumber" v-model="phoneNumber" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="selectedService">Вибрана послуга</label>
      <select id="selectedService" v-model="selectedService" required>
        <option value="" disabled>Вибрана послуга</option>
        <option value="generalCheckup">Загальний медичний огляд</option>
        <option value="specializedTreatment">Спеціалізоване лікування</option>
        <option value="preventiveCare">Профілактичний догляд</option>
        <option value="emergencyCare">Невідкладна медична допомога</option>
      </select>

      <button type="submit">Надіслати</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      selectedService: '',
    };
  },
  methods: {
    submitForm() {
      // Обробка події відправлення форми відправлення даних на сервер
      console.log('Registration form submitted:', this.firstName, this.lastName, this.phoneNumber, this.email, this.selectedService);
    },
  },
};
</script>

<style scoped>
.registration-form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.registration-form {
  display: grid;
  gap: 15px;
}

.registration-form label {
  margin-bottom: 5px;
}

.registration-form input,
.registration-form select {
  height: 40px;
}

.registration-form button {
  height: 40px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Анімація випливаючого вікна */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animate__fadeInDown {
  animation-name: fadeInDown;
}
</style>