var data = { newData : "hello", newNewData: null };

let vm = new Vue({
    el: '#app',
    data: data,
})

console.log(vm.$data == data);

vm.newData = "this is the new overrided blah text";
vm.newNewData = 'hello idiots!';

vm.$watch('newNewData', function(newValue, oldValue){ // this function is called when the value of the newNewData changes
    console.log(newValue);
    console.log(oldValue);
})