function camelcase(s) {
  let camelCase = 0;
  let firstIndex = false;

  for (let i = 0; i < s.length; i++) {
    if (s[0] == s[0].toLowerCase() && !firstIndex) {
      camelCase += 1;
      firstIndex = true;
    }
    if (s[i] == s[i].toUpperCase()) {
      camelCase += 1;
    }
  }
  return camelCase;
}
