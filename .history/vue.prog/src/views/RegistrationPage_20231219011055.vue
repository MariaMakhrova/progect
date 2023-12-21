<template>
  <div class="registration-form-container">
    <h1>User Registration</h1>
    <p>Register to access exclusive features.</p>

    <h2>Registration Form</h2>
    <form @submit.prevent="submitForm" class="registration-form">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required>

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" required>

      <label for="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" v-model="phoneNumber" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="selectedService">Selected Service:</label>
      <select id="selectedService" v-model="selectedService" required>
        <option value="" disabled>Select a service</option>
        <option value="generalCheckup">General Medical Checkup</option>
        <option value="specializedTreatment">Specialized Treatment</option>
        <option value="preventiveCare">Preventive Care</option>
        <option value="emergencyCare">Emergency Medical Care</option>
      </select>

      <button type="submit">Submit</button>
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
      // Обробка події відправлення форми, наприклад, відправлення даних на сервер
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
  border: 1px solid #ddd; /* Додайте рамку */
  border-radius: 8px; /* Закруглені кути */
}

.registration-form {
  display: grid;
  gap: 10px;
}

/* Додайте інші стилі за потребою */
</style>