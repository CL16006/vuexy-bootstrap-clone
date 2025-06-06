import Swal from 'sweetalert2'

const ICON_COLORS = {
  primary: '#7367f0',
  secondary: '#808390',
  success: '#28c76f',
  info: '#00bad1',
  warning: '#ff9f43',
  danger: '#ff4c51',
  light: '#f9f9fafa',
  dark: '#444a6993',
}

const ICON_CLASSES = {
  success: 'bi bi-check-circle',
  error: 'bi bi bi-exclamation-circle',
  warning: 'bi bi-exclamation-triangle',
  danger: 'bi bi-x-circle',
  confirm: 'bi bi-info-circle',
  info: 'bi bi-info-circle',
}

const swal = Swal.mixin({
  reverseButtons: true,
  buttonsStyling: false,
  allowEscapeKey: false,
  customClass: {
    popup: 'rounded-4',
    icon: 'custom-icon-class',
    confirmButton: 'btn btn-lg btn-primary col-6',
    cancelButton: 'btn btn-lg btn-outline-secondary col-6',
    input: 'rounded',
  },
})

const swalConfig = {
  alert: ({
    type,
    title,
    text,
    html,
    confirmButtonText = 'Aceptar',
    cancelButtonText = 'Cancelar',
    showConfirmButton = true,
    showLoading = false,
    timer,
  }) => {
    const iconHtml = `<i class="${ICON_CLASSES[type]}" style="font-size: 4rem !important; color: ${ICON_COLORS[type]};"></i>`
    return swal.fire({
      title,
      text,
      iconHtml,
      html,
      confirmButtonText,
      cancelButtonText,
      showConfirmButton,
      showCancelButton: type === 'confirm',
      didOpen: () => {
        !showLoading || swal.showLoading()
      },
      timer,
      allowOutsideClick: false,
    })
  },
  toast: ({ type, title, text, position = 'top-end', timer = 5000, width = 600 }) => {
    const iconHtml = `<i class="${ICON_CLASSES[type]}" style="font-size: 1.5rem; color: ${ICON_COLORS[type]};"></i>`
    return swal.fire({
      toast: true,
      position,
      title,
      text,
      iconHtml,
      showConfirmButton: false,
      showCancelButton: false,
      showCloseButton: false,
      timer,
      width,
      customClass: {
        popup: `swal2-toast toast-${type}`,
      },
    })
  },
  input: ({
    type = 'warning',
    title,
    text,
    inputType = 'text',
    inputLabel,
    inputPlaceholder,
    inputAttributes = {},
    showCancelButton = true,
    inputValidator = null,
  }) => {
    const iconHtml = `<i class="${ICON_CLASSES[type]}" style="font-size: 4rem; color: ${ICON_COLORS[type]};"></i>`
    return swal.fire({
      title,
      text,
      iconHtml,
      input: inputType,
      inputLabel,
      inputPlaceholder,
      inputAttributes,
      showCancelButton,
      inputValidator,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
    })
  },
}

export default swalConfig
