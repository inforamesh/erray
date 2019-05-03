class Erray {

    /** Initialization of an object. */
    constructor(array = []) {
        this.array = array;
    }

    /** Get length of specified array.*/
    length() {
        let length = 0;
        for (let element of this.array) {
            length++;
        }
        return length;
    }

    /**
     * Appends new elements to an array, and returns the new length of the array.
     * @param items New elements of the Array.
     */
    push(...items) {
        let length = this.array.length;
        for (let [key, value] of Object.entries(items)) {
            this.array[length] = value;
            length++;
        }
        return this.array.length;
    }

    /**
     * Remove a elements to an array, and returns the array.
     * @param items elements of the Array.
     */
    remove(items) {
        let counter = 0;
        let result = [];
        for (let element of this.array) {
            if (element != items) {
                result[counter] = element;
                counter++;
            }
        }
        return this.array = result;
    }

    /**
     * Returns the position of the first occurrence of an element.
     * @param item Element of an array
     */
    indexOf(item) {
        for (let [key, element] of Object.entries(this.array)) {
            if (item == element) {
                return parseInt(key);
            }
        }
        return null;
    }

    /**
     * Returns the value of the first occurrence of an element.
     * @param item Element of an array
     */
    indexAt(index) {
        return this.array[index];
    }

    /**
     * Adds all the elements of an array separated by the specified separator string.
     * @param string A string used to separate one element of an array from the next in the resulting String.
     */
    join(string) {
        let result = '';
        for (let [key, value] of Object.entries(this.array)) {
            if (key != 0) {
                result += string + value;
            } else {
                result += value;
            }
        }
        return result;
    }

    /**
     * Combines two or more arrays.
     * @param items Additional items to add to the end of arrayx.
     */
    concat(...items) {
        let lengthOfCaller = this.array.length;
        for (let array of items) {
            for (const [key, value] of Object.entries(array)) {
                this.array.push(value);
            }
        }
        return this.array;
    }

    /**
     * Calls dynamic function.
     * @param item Name of function.
     */
    forEach(item) {
        for (let element of this.array) {
            item(element);
        }
    }

    /** Removes the last element from an array and returns it. */
    pop() {
        let length = this.array.length;
        return this.remove(this.array[--length]);
    }

    /**
     * Returns the this object after filling the section identified by start and end with value
     * @param value value to fill array section with.
     * @param start index to start filling the array at.
     * @param end index to stop filling the array at.
     */
    fill(value, start = 0, end = this.array.length) {
        for (let [key, element] of Object.entries(this.array)) {
            if (key >= start && key < end) {
                this.array[key] = value;
            }
        }
        return this.array;
    }

    /**
     * Checking in given array an element is exists.
     * @param value value to fill array section with.
     * @param start index to start filling the array at.
     */
    includes(value, start = 0) {
        for (start; start <= this.array.length; start++) {
            if (value == this.array[start]) {
                return true;
            }
        }
        return false;
    }

    /** Returns the names of the enumerable properties and methods of an object. */
    keys() {
        let keys = [];
        for (let [key, element] of Object.entries(this.array)) {
            keys[key] = key;
        }
        return keys;
    }

    /** Returns the values of the specified array. */
    valueOf() {
        let values = [];
        for (let [key, element] of Object.entries(this.array)) {
            values[key] = element;
        }
        return values;
    }

    /** Returns a string representation of an object. */
    toString() {
        let result = '';
        for (let [key, element] of Object.entries(this.array)) {
            result += element;
            if (key != this.array.length - 1) {
                result += ',';
            }
        }
        return result;
    }

    /** Reverses the elements in an Array. */
    reverse() {
        let length = this.array.length - 1;
        let result = [];
        for (let [key, element] of Object.entries(this.array)) {
            result[length] = element;
            length--;
        }
        return this.array = result;
    }

    /**
     * Returns a array.
     * @param start index to start filling the array at.
     * @param end index to stop filling the array at.
     */
    slice(start = 0, end = this.array.length) {
        let result = [];
        let counter = 0;
        for (let [key, element] of Object.entries(this.array)) {
            if (key >= start && key < end) {
                result[counter] = element;
                counter++;
            }
        }
        return result;
    }

    /** Removes the first element from an array and returns it. */
    shift() {
        let shiftedValed = this.indexAt(0);
        this.remove(this.array[0]);
        return shiftedValed;
    }

    /**
     * Inserts new elements at the start of an array.
     * @param items  Elements to insert at the start of the Array.
     */
    unshift(...items) {
        for (let element of items) {
            this.remove(element);
        }
        return this.array.length;
    }
}