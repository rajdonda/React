let inlazetions = {
    budgetData: JSON.parse(localStorage.getItem('budget')) || []
}

const bugetRedu = (state = inlazetions, action) => {
    switch (action.type) {
        case 'add':
            let newdata = [...state.budgetData, action.payload]
            localStorage.setItem('budget', JSON.stringify(newdata))
            return {
                ...state,
                budgetData: newdata
            }

        case 'exp':

            let newdata1 = [...state.budgetData, action.payload]
            localStorage.setItem('budget', JSON.stringify(newdata1))
            return {
                ...state,
                budgetData: newdata1
            }

        case 'delet':
            
            let dData = state.budgetData.filter((val) => val.id !== action.payload)
            localStorage.setItem('budget', JSON.stringify(dData))
            return {
                ...state,
                budgetData: dData,
            }

        default:
            return state

    }
}

export default bugetRedu