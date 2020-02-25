const state = {
    funds: 1000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}) {
        const totalCost = stockPrice * quantity;

        if (state.funds > totalCost) {
            const record = state.stocks.find(el => el.stockId === stockId);

            if (record) {
                record.quantity += quantity;
            } else {
                state.stocks.push({
                    stockId, quantity
                });
            }

            state.funds -= totalCost;
        } else {
            alert('No funds!');
        }
    },
    'SELL_STOCK'(state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(el => el.stockId === stockId);

        if (record) {
            if (record.quantity > quantity) {
                record.quantity -= quantity;
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }

            state.funds += stockPrice * quantity;
        }

    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order)
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.stockId === stock.id);

            return {
                id: stock.stockId,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        })
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    getters,
    actions,
    mutations,
    state
}