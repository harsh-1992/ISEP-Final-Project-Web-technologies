import { CircularProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import JobCardDetail from '../components/jobCardDetail';
import apiService from '../service/apiService';


const JobDetail = () => {

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(false)
    const { jobId } = useParams()

    const getJobById = async () => {
        setLoading(true)
        try {
            const res = await apiService.getJobById(jobId)
            setJob(res.data.job)
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // when the component has loaded, calling the API to retrieve the job by its id
        getJobById()
    }, [])

    return (
        <div>
            {loading && <CircularProgress style={{ alignSelf: "center" }} color="secondary" />}

            {job &&
                <div>
                    <JobCardDetail  {...job} />
                </div>
            }
        </div>
    );


}

export default JobDetail;
