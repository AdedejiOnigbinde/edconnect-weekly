const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {

        
    }
}

class Projects extends DataModel {
    validate(obj) {
        if(Array.isArray(this.data.filter(Project => Project.authors ===obj.authors 
            && Project.tags === obj.tags))){
            if(!Object.values(obj).includes(null)){
                return true;
            }else{
                return false;
            }
        }
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};