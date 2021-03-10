
const setJobs = (jobs) => {
    return {
        type: "setJobs",
        value: jobs
    };
}

const setMercs = (mercs) => {
    return {
        type: "setMercs",
        value: mercs
    };
}


export {
    setJobs,
    setMercs
};