class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        for (const obj of this.data) {
            if (obj.id === id){
                return obj;
            }
        };
        return null;
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    getIndexOf(id){
        let index = -1;
        for(var i = 0; i < this.data.length; i++ ){
            if(id === this.data[i].id){
                return i;
            }
        }
        return index;
    }

    update(obj, id) {
        const index = this.getIndexOf(id);
        if(index > -1){
            var temp = this.data[index];
            for (const property in obj) {
                temp[property] = obj[property];
            }
            this.data[index] = temp;
            return true;
        }
        return false;
    }

    delete(id) {
        const index = this.getIndexOf(id);
       
            if (index > -1) {
                this.data.splice(index, 1);
                return true;
            }
            
        
        return false;
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;