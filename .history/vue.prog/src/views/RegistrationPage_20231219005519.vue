<template>
  <div class="registration-container">
    <h1>Реєстрація </h1>
    <p>Зареєструйтеся, щоб отримати доступ до ексклюзивних функцій.</p>

    <div class="registration-form">
      <form @submit.prevent="submitForm">
        <table>
          <tr>
            <td><label for="firstName">Ім'я</label></td>
            <td><input type="text" id="firstName" v-model="firstName" required></td>
          </tr>
          <tr>
            <td><label for="lastName">Прізвище</label></td>
            <td><input type="text" id="lastName" v-model="lastName" required></td>
          </tr>
          <tr>
            <td><label for="phoneNumber">Номер телефону:</label></td>
            <td><input type="tel" id="phoneNumber" v-model="phoneNumber" required></td>
          </tr>
          <tr>
            <td><label for="email">Email:</label></td>
            <td><input type="email" id="email" v-model="email" required></td>
          </tr>
          <tr>
            <td><label for="selectedService">Вибрана послуга:</label></td>
            <td>
              <select id="selectedService" v-model="selectedService" required>
                <option value="" disabled>Вибрана послуга:</option>
                <option value="generalCheckup">Загальний медичний огляд</option>
                <option value="specializedTreatment">Спеціалізоване лікування</option>
                <option value="preventiveCare">Профілактичний догляд</option>
                <option value="emergencyCare">Emergency Medical Care</option>
              </select>
            </td>
          </tr>
        </table>

        <button type="submit">Submit</button>
      </form>
    </div>
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
      // Обробка події відправлення форми, наприклад, відправлення даних на сервер
      console.log('Registration form submitted:', this.firstName, this.lastName, this.phoneNumber, this.email, this.selectedService);
    },
  },
};
</script>

<style scoped>
.registration-container {
  text-align: center;
  padding: 20px;
}

.registration-form {
  margin-top: 20px;
}

form {
  display: inline-block;
}

table {
  width: 100%;
}

table tr {
  margin-bottom: 10px;
}

table td {
  padding: 5px;
}

button {
  padding: 10px;
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>