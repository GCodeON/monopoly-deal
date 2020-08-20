import Vue from 'vue'

export const state = () => ({
    start       : false,
    discardPile : [],
    turn        : 0,
    active      : null,
    players     : [
        {
            id         : 1,
            hand       : [],
            properties : [],
            money      : [],
            sets: [ 

            ]

        },
        {
            id         : 2,
            hand       : [],
            properties : [],
            money      : [],
            sets: [ 

            ]
        },
    ],
    deck: [
        {
            type  : 'money',
            value : 10,
            color : 'red'
        },
        {
            type  : 'money',
            value : 5,
            color : 'purple'
        },
        {
            type  : 'money',
            value : 5,
            color : 'purple'
        },
        {
            type  : 'money',
            value : 4,
            color : 'blue'
        },
        {
            type  : 'money',
            value : 4,
            color : 'blue'
        },
        {
            type  : 'money',
            value : 4,
            color : 'blue'
        },
        {
            type  : 'money',
            value : 3,
            color : 'green'
        },
        {
            type  : 'money',
            value : 3,
            color : 'green'
        },
        {
            type  : 'money',
            value : 3,
            color : 'green'
        },
        {
            type  : 'money',
            value : 2,
            color : 'orange'
        },
        {
            type  : 'money',
            value : 2,
            color : 'orange'
        },
        {
            type  : 'money',
            value : 2,
            color : 'orange'
        },
        {
            type  : 'money',
            value : 2,
            color : 'orange'
        },
        {
            type  : 'money',
            value : 2,
            color : 'orange'
        },
        {
            type  : 'money',
            value : 1,
            color : 'grey'
        },
        {
            type  : 'money',
            value : 1,
            color : 'grey'
        },
        {
            type  : 'money',
            value : 1,
            color : 'grey'
        },
        {
            type  : 'money',
            value : 1,
            color : 'grey'
        },
        {
            type  : 'money',
            value : 1,
            color : 'grey'
        },
        {
            type  : 'money',
            value : 1,
            color : 'grey'
        },
        {
            value : 2,
            type  : 'property',
            title : 'Water Utility',
            color : 'lime'
        },
        {
            value : 2,
            type  : 'property',
            title : 'Electric Utility',
            color : 'lime'
        },
        {
            value : 2,
            type  : 'wild',
            title : 'Wild Property',
            color : ['lime', 'black']
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'brown'
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'brown'
        },
        {
            value : 1,
            type  : 'wild',
            title : 'Wild Property',
            color : 'brown blue'
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'blue'
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'blue'
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'blue'
        },
        {
            value : 1,
            type  : 'wild',
            title : 'Wild Property',
            color : 'black blue'
        },
        
        {
            value : 1,
            type  : 'property',
            title : 'Railroad',
            color : 'black'
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'black'
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'black'
        },
        {
            value : 1,
            type  : 'property',
            title : 'Avenue',
            color : 'black'
        },
        {
            value : 4,
            type  : 'property',
            title : 'Pacific Beach',
            color : 'cyan'
        },
        {
            value : 4,
            type  : 'property',
            title : 'Balboa Park',
            color : 'cyan'
        },
        {
            value : 4,
            type  : 'wild',
            title : 'Wild Property',
            color : ['cyan', 'green']
        },
        {
            value : 4,
            type  : 'property',
            title : 'Avenue',
            color : 'green'
        },
        {
            value : 4,
            type  : 'property',
            title : 'Avenue',
            color : 'green'
        },
        {
            value : 4,
            type  : 'property',
            title : 'Avenue',
            color : 'green'
        },
        {
            value : 4,
            type  : 'wild',
            title : 'Wild Property',
            color : ['black', 'green']
        },
        {
            value : 3,
            type  : 'property',
            title : 'Avenue',
            color : 'red'
        },
        {
            value : 3,
            type  : 'property',
            title : 'Avenue',
            color : 'red'
        },
        {
            value : 3,
            type  : 'property',
            title : 'Avenue',
            color : 'red'
        },
        {
            value : 3,
            type  : 'wild',
            title : 'Wild Property',
            color : ['yellow', 'red']
        },
        {
            value : 3,
            type  : 'wild',
            title : 'Wild Property',
            color : ['yellow', 'red']
        },
        {
            value : 3,
            type  : 'property',
            title : 'Avenue',
            color : 'yellow'
        },
        {
            value : 3,
            type  : 'property',
            title : 'Avenue',
            color : 'yellow'
        },
        {
            value : 3,
            type  : 'property',
            title : 'Avenue',
            color : 'yellow'
        },
        {
            value : 2,
            type  : 'wild',
            title : 'Wild Property',
            color : ['orange', 'purple']
        },
        {
            value : 2,
            type  : 'property',
            title : 'Avenue',
            color : 'orange'
        },
        {
            value : 2,
            type  : 'property',
            title : 'Avenue',
            color : 'orange'
        },
        {
            value : 2,
            type  : 'property',
            title : 'Avenue',
            color : 'orange'
        },
        {
            value : 2,
            type  : 'wild',
            title : 'Wild Property',
            color : ['orange', 'purple']
        },
        {
            value : 2,
            type  : 'property',
            title : 'Avenue',
            color : 'purple'
        },
        {
            value : 2,
            type  : 'property',
            title : 'Avenue',
            color : 'purple'
        },
        {
            value : 2,
            type  : 'property',
            title : 'Avenue',
            color : 'purple'
        },
        {
            value       : 4,
            type        : 'action',
            title       : "Just Say No",
            description : "Cancel an Action card played against you.",
            color       : 'violet',
        },
        {
            value       : 4,
            type        : 'action',
            title       : "Just Say No",
            description : "Cancel an Action card played against you.",
            color       : 'violet',
        },
        {
            value       : 4,
            type        : 'action',
            title       : "Just Say No",
            description : "Cancel an Action card played against you.",
            color       : 'violet',
        },
        {
            value       : 5,
            type        : 'action',
            title       : "Deal Breaker",
            description : "Steal a complete property color, including any buildings, from any player. Place it in front of you.",
            color       : 'steelblue',
        },
        {
            value       : 5,
            type        : 'action',
            title       : "Deal Breaker",
            description : "Steal a complete property color, including any buildings, from any player. Place it in front of you.",
            color       : 'steelblue',
        },
        {
            value       : 2,
            type        : 'action',
            title       : "It's your birthday",
            description : "All players give you $2M",
            color       : 'orange',
        },
        {
            value       : 2,
            type        : 'action',
            title       : "It's your birthday",
            description : "All players give you $2M",
            color       : 'orange',
        },
        {
            value       : 2,
            type        : 'action',
            title       : "It's your birthday",
            description : "All players give you $2M",
            color       : 'orange',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Pass Go",
            description : "Draw 2 Cards",
            color       : 'grey',
        },
        {
            value       : null,
            type        : 'action',
            title       : "Wild Property",
            description : "This can be used as part of any property set.",
            color       : 'rainbow',
        },
        {
            value       : null,
            type        : 'action',
            title       : "Wild Property",
            description : "This can be used as part of any property set.",
            color       : 'rainbow',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Wild Rent",
            description : "Choose a color. Choose one player to pay you rent for all properties you own in that color.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Wild Rent",
            description : "Choose a color. Choose one player to pay you rent for all properties you own in that color.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Wild Rent",
            description : "Choose a color. Choose one player to pay you rent for all properties you own in that color.",
            color       : 'green',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Double the rent",
            description : "Play with a Rent card. Players must pay you double rent.",
            color       : 'grey',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Double the rent",
            description : "Play with a Rent card. Players must pay you double rent.",
            color       : 'grey',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Debt Collector",
            description : "Force any player to pay you $5M",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Debt Collector",
            description : "Force any player to pay you $5M",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Debt Collector",
            description : "Force any player to pay you $5M",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Sly Deal",
            description : "Steal one property from any player, and place it in front of you. You may not steal a property that's part of a complete set.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Sly Deal",
            description : "Steal one property from any player, and place it in front of you. You may not steal a property that's part of a complete set.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Sly Deal",
            description : "Steal one property from any player, and place it in front of you. You may not steal a property that's part of a complete set.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Forced Deal",
            description : "Swap any one of your properties with any one of your opponents' Properties. You may not take a Property that's part of a complete set.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Forced Deal",
            description : "Swap any one of your properties with any one of your opponents' Properties. You may not take a Property that's part of a complete set.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "Forced Deal",
            description : "Swap any one of your properties with any one of your opponents' Properties. You may not take a Property that's part of a complete set.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "House",
            description : "Place on any of your complete Property sets to add 3M to rent. May not be placed on Railroads or Utilies.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "House",
            description : "Place on any of your complete Property sets to add 3M to rent. May not be placed on Railroads or Utilies.",
            color       : 'green',
        },
        {
            value       : 3,
            type        : 'action',
            title       : "House",
            description : "Place on any of your complete Property sets to add 3M to rent. May not be placed on Railroads or Utilies.",
            color       : 'green',
        },
        {
            value       : 4,
            type        : 'action',
            title       : "Hotel",
            description : "Place on any of your complete property sets that has a House to add 4M to rent. The house stays.",
            color       : 'blue',
        },
        {
            value       : 4,
            type        : 'action',
            title       : "Hotel",
            description : "Place on any of your complete property sets that has a House to add 4M to rent. The house stays.",
            color       : 'blue',
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['black', 'lime']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['black', 'lime']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['yellow', 'red']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['yellow', 'red']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['cyan', 'green']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['cyan', 'green']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['orange', 'purple']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['orange', 'purple']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['brown', 'blue']
        },
        {
            value       : 1,
            type        : 'action',
            title       : "Rent",
            description : "Choose one of these colors. All Players pay you rent for all properties you own in that color.",
            color       : 'grey',
            set         : ['brown', 'blue']
        },
    ]
})

export const getters = {
    getDeck: (state) => {
        return state.deck;
    }
}

export const mutations = {
    shuffleDeck(state) {
        for(let i = state.deck.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * i);
            
            let temp = state.deck[i];
            Vue.set(state.deck, i, state.deck[randomIndex]);
            Vue.set(state.deck, randomIndex, temp);
          }
    },
    initialDeal(state) {
        for(var i = 0; i < 5; i++) {
            for(var player = 0; player < state.players.length; player++) {
                state.players[player].hand.push(state.deck.pop());
            }
        }
    },
    draw(state, cards) {
        for(var i = 0; i < cards; i++) {
            state.active.hand.push(state.deck.pop());
        }
    },
    startGame(state) {
        state.start = true;
    },
    nextTurn(state) {
        if(state.start) {
            state.turn++;
        }
    },
    startTurn(state) {
        
        let turn = state.turn % state.players.length;

        if(!turn == 0) {
            state.active = state.players[1];
        } else {
            state.active =  state.players[0];
        }
    }
}

export const actions = {
   shuffle(context) {
       context.commit('shuffleDeck');
   },
   deal(context) {
        context.commit('initialDeal');
    },
    draw(context) {
        context.commit('draw');
    },
    start(context) {
        context.commit('startGame');
    },
    nextTurn(context) {
        context.commit('nextTurn');
        context.commit('startTurn');
        context.commit('draw', 2);
    },
    
}