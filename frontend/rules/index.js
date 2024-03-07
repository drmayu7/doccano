// Rules for project label.
export const colorRules = (msg) => {
  return [(v) => !!v || msg.colorRequired]
}

export const labelNameRules = (msg) => {
  return [(v) => !!v || msg.labelRequired, (v) => (v && v.length <= 30) || msg.labelLessThan30Chars]
}

// Rules for project member.
export const userNameRules = (msg) => {
  return [
    (v) => !!v || msg.userNameRequired,
    (v) => (v && v.length <= 30) || msg.userNameLessThan30Chars
  ]
}

export const roleRules = (msg) => {
  return [(v) => !!v || msg.roleRequired]
}

// Rules for Document.
export const fileFormatRules = (msg) => {
  return [(v) => !!v || msg.fileFormatRequired]
}

export const uploadFileRules = (msg) => {
  return [
    (v) => !!v || msg.fileRequired
  ]
}

export const uploadSingleFileRules = (msg) => {
  return [(v) => !!v || msg.fileRequired]
}

// Rules for user.
export const passwordRules = (msg) => {
  return [
    (v) => !!v || msg.passwordRequired,
    (v) => (v && v.length <= 30) || msg.passwordLessThan30Chars
  ]
}

export const templateNameRules = () => {
  return [(v) => !!v || 'Name is required']
}
