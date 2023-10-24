export const validate = (email,password) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) return "Email is not Valid";
    if(!isValidPassword) return "Password is not Valid";

    return null;
}