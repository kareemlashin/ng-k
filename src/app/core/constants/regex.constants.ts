export const REGEX_PATTERNS = {
  // Validation
  EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  USERNAME: /^[a-zA-Z0-9_]{3,16}$/,
  PASSWORD_STRONG: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
  PASSWORD_SIMPLE: /^[a-zA-Z0-9]{6,}$/,

  // Phone Numbers
  PHONE_GENERAL: /^\+?[\d\s\-().]{7,}$/,
  PHONE_US: /^(\+1|1)?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,

  // URLs
  URL_HTTP: /^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}([\/\w .-]*)*\/?$/,
  URL_BASIC: /^(ftp|http|https):\/\/[^ "]+$/,

  // IPs
  IPV4: /^(?:\d{1,3}\.){3}\d{1,3}$/,
  IPV6: /^([a-fA-F0-9:]+:+)+[a-fA-F0-9]+$/,

  // Dates & Times
  DATE_ISO: /^\d{4}-\d{2}-\d{2}$/,
  TIME_24H: /^\d{2}:\d{2}(:\d{2})?$/,
  DATE_US: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,

  // Finance
  VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
  MASTERCARD: /^5[1-5][0-9]{14}$/,
  CVV: /^\d{3}$/,
  CURRENCY: /^\$?\d{1,3}(,\d{3})*(\.\d{2})?$/,

  // Numbers
  DIGITS_ONLY: /^\d+$/,
  INTEGER: /^-?\d+$/,
  FLOAT: /^-?\d*\.\d+$/,
  NUMBER_LIMITED: /^\d{1,5}$/,

  // Alphabetic
  LETTERS: /^[a-zA-Z]+$/,
  UPPERCASE: /^[A-Z]+$/,
  LOWERCASE: /^[a-z]+$/,
  LETTERS_SPACES: /^[a-zA-Z\s]+$/,

  // File Types
  IMAGE_FILE: /\.(jpg|jpeg|png|gif|bmp)$/i,
  DOC_FILE: /\.(doc|docx|pdf|txt)$/i,
  AUDIO_FILE: /\.(mp3|wav|ogg)$/i,
  VIDEO_FILE: /\.(mp4|avi|mov|mkv)$/i,

  // Misc
  HEX_COLOR: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  UUID_V4: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  HTML_TAG: /<("[^"]*"|'[^']*'|[^'">])*>/,
  WHITESPACE: /^\s*$/,
  NON_WHITESPACE: /\S/,
  CONTAINS_DIGIT: /\d/,
  CONTAINS_UPPER: /[A-Z]/,
  CONTAINS_LOWER: /[a-z]/,
  CONTAINS_SPECIAL: /[\W_]/,

  // Custom IDs or Codes
  POSTAL_CODE_US: /^\d{5}(-\d{4})?$/,
  SSN_US: /^\d{3}-\d{2}-\d{4}$/,
  ISBN_10: /^(?:\d[\ |-]?){9}[\d|X]$/,
  ISBN_13: /^(?:\d[\ |-]?){13}$/,

  // Environment and Filesystem
  WINDOWS_PATH: /^[a-zA-Z]:\\(?:[^\\\/:*?"<>|\r\n]+\\)*[^\\\/:*?"<>|\r\n]*$/,
  UNIX_PATH: /^\/([^/\0]+\/)*[^/\0]*$/,
  ENV_VAR: /^\$\{[A-Z_][A-Z0-9_]*\}$/i,

  // Language Specific
  ARABIC_TEXT: /^[\u0600-\u06FF\s]+$/,
  CHINESE_TEXT: /^[\u4e00-\u9fa5]+$/,
  JAPANESE_TEXT: /^[\u3040-\u30FF\u4E00-\u9FFF]+$/,
};
