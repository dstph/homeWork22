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
	     	this.dones.unshift(this.todos.shift());
	    },
	    putInFirstOl: function () {
	     	this.todos.unshift(this.dones.shift());
	    }
  	}
})