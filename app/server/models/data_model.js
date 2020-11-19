class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        this.id = id;
        var index = this.data.find(id => id.obj === id);

        if(index == undefined){
            return null;
        }else{
            return index;
        }
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {

        this.obj = obj;
        this.id = id;

        var index = this.data.findindex(obj => obj.id == id);
        if (index === -1) {
            return false;
        } else {
            let copyArray = [...this.data.obj];
            copyArray[index] = { ...copyArray[index], obj: !copyArray[index].obj }
            this.setState({ obj: copyArray })
            return true;

        }

    }

    delete(id) {
        this.id = id;
        for (var i; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                var index = this.data.indexOf(this.data[i])
            }
            if (index > -1) {
                this.data.slice(index, index);
            }
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