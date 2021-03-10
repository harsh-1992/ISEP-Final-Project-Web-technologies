
const initialState = {
    jobs: [],
    mercs: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "setJobs":
            return { ...state, jobs: action.value };
        case "setMercs":
            return { ...state, mercs: action.value };
        default:
            return state;
    }
};


export default reducers