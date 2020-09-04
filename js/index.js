//22-1

let taskManager = new Vue({
	el: '#app',
	data: {
	    todos: [
	      { text: 'Изучить JavaScript' },
	      { text: 'Изучить Vue' },
	      { text: 'Создать что-нибудь классное' }
	    ],
	    dones: [
	    	{ text: 'Изучить JavaScript' },
	    	{ text: 'Изучить Vue' },
	    	{ text: 'Создать что-нибудь классное' }
	    ]
  	},
  	methods: {
	    putInSecondOl: function () {
	     	this.dones.unshift(this.todos.pop());
	    },
	    putInFirstOl: function () {
	     	this.todos.unshift(this.dones.pop());
	    }
  	}
})

// 22-2

 let taskManagerSecond = new Vue({
	el: '#app2',
	data: {
	    allLists: [ [1,2,3], [4,5,6], [7,8,9], [10,11,12], [4, 8, 1255] ],
	    checked: []
  	},
  	methods: {
	   transfer: function(event) {
	   	let current = event.currentTarget.id,
	   		next = Number(current) + 1,
	   		previous = Number(current) - 1;
	   		console.log(this.checked);
	   		if(current == 0){
	   			this.allLists[next].push(this.allLists[current].pop());
	   		} else if(current  == this.allLists.length-1){
	   			this.allLists[previous].push(this.allLists[current].pop());
	   			console.log('here');
	   		} else if(current !== 0 && current  !== this.allLists.length-1 && this.checked.includes(Number(current))){
	   			this.allLists[next].push(this.allLists[current].pop());
	   			console.log('here');
	   		} else{
	   			this.allLists[previous].push(this.allLists[current].pop());
	   		}
	   		
	   }
  	}
})
