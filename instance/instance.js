var data = { newData : "hello", newNewData: null };

let vm = new Vue({
    el: '#app',
    data: data,
    created: function () { // this is a hook which runs after an instance is created.
        console.log('newNewData is: ' + this.newNewData);
    }
})

vm.newData = "this is the new overrided blah text";
vm.newNewData = 'hello my dear friends!';

vm.$watch('newNewData', function(newValue, oldValue){ // this function is called when the value of the newNewData changes
    console.log(newValue);
    console.log(oldValue);
})