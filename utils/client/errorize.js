export default function setErrorOnForm(error, form) {
  if (error.name === 'AxiosError') {
    if ([
      400,
      401,
      404,
    ].indexOf(error.response.status) === -1) {
      return;
    }

    try {
      const {
        fields,
      } = error.response.data;

      const errors = {};

      fields.forEach((item) => {
        errors[item.field] = item.message;
      });
      form.setErrors(errors);
    } catch (fallacy) {
      // TODO: log
      // Malformed error response
    }
  }
}
