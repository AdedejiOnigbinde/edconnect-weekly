const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {

       
    }

    getFullName() {
      return this.firstname, this.lastname;
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        if(email === this.data.email && password === this.data.password){
            return true;
        }
        return false;
    }

    getByEmail(email) {
        const user = this.data.find(User => User.email === email);
        if(user){
            return user;
        }else{
            return null;
        }
    }

    getByMatricNumber(matricNumber) {
        const user = this.data.find(User=> User.matricNumber === matricNumber);
        if(user){
            return user;
        }else{
            return null;
        }
    }

    validate(obj) {
        if(!Object.values(obj).includes(null)){
            if(this.data.filter(User=> User.matricNumber === obj.matricNumber|| User.email === obj.email).length ===0){
                if(obj.password>=7){
                    return true;
                }else{
                    return false;
                }
            }
        }
        
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};