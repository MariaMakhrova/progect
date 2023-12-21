Copy code
<template>
  <div>
    <h1>User Registration</h1>
    <p>Register to access exclusive features.</p>

    <h2>Registration Form</h2>
    <form @submit.prevent="submitForm">
      <!-- Тут ваша форма, яку ви вже маєте -->

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import ExcelJS from 'exceljs';
import Docxtemplater from 'docxtemplater';

export default {
  name: 'Registration',
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
      // Обробка події відправлення форми
      console.log('Registration form submitted:', this.firstName, this.lastName, this.phoneNumber, this.email, this.selectedService);

      // Збереження в Excel
      this.saveToExcel();

      // Збереження в Word
      this.saveToWord();
    },
    async saveToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Registration Data');

      worksheet.columns = [
        { header: 'First Name', key: 'firstName', width: 15 },
        { header: 'Last Name', key: 'lastName', width: 15 },
        { header: 'Phone Number', key: 'phoneNumber', width: 15 },
        { header: 'Email', key: 'email', width: 20 },
        { header: 'Selected Service', key: 'selectedService', width: 20 },
      ];

      worksheet.addRow({
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        selectedService: this.selectedService,
      });

      const buffer = await workbook.xlsx.writeBuffer();
      this.downloadFile(buffer, 'registration_data.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    },
    async saveToWord() {
      const templateFilePath = 'path_to_your_word_template.docx'; // Замініть шлях на шлях до вашого шаблону Word файлу
      const outputFilePath = 'registration_data.docx';

      const content = fs.readFileSync(templateFilePath, 'binary');
      const doc = new Docxtemplater(content);

      doc.setData({
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        selectedService: this.selectedService,
      });

      try {
        doc.render();
        const buf = doc.getZip().generate({ type: 'nodebuffer' });
        this.downloadFile(buf, outputFilePath, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      } catch (error) {
        console.error(error);
      }
    },
    downloadFile(buffer, fileName, mimeType) {
      const blob = new Blob([buffer], { type: mimeType });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    },
  },
};
</script>

<style scoped>
/* Додайте стилі за потребою */
</style>