export const checkFormData = (email, password,name) =>{
   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/.test(password);
   const isNameValid = /^[A-Za-z]+([-' ][A-Za-z]+)*$/.test(name)

   if(!isEmailValid) return "Invalid Email Address";
   if(!isPasswordValid ) return "Invalid Password";
   if(!isNameValid) return "Invalid Name"
   
   return null;
}