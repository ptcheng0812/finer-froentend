export function validateEmail(email: any) {
  return email.toString()
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function validateTelephone(telephone: any) {
  console.log("PPPPPP>>>>", parseInt(telephone))
  if (isNaN(parseInt(telephone)) || digitsCount(parseInt(telephone)) < 10) {
    return false;
  } else {
    return true;
  }
}

const digitsCount = (n: number) => {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

export function validateDateOfBirth(dob1: string, dob2: string, dob3: string) {
  var subCheckDate = dob1 + "/" + dob2 + "/" + dob3;
  var pattern = /^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/;

  return subCheckDate.toString().match(pattern);
}
