import { CircularProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import MercCardDetail from '../components/mercCardDetail';
import apiService from '../service/apiService';


const MercDetail = () => {

    const [merc, setMerc] = useState(null)
    const [loading, setLoading] = useState(false)
    const { mercId } = useParams()

    const getMercById = async () => {
        setLoading(true)
        try {
            const res = await apiService.getMercById(mercId)
            setMerc(res.data.merc)
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // when the component has loaded, calling the API to retrieve the merc by its id
        getMercById()
    }, [])

    return (
        <div>
            {loading && <CircularProgress style={{ alignSelf: "center" }} color="secondary" />}

            {merc &&
                <div>
                    <MercCardDetail  {...merc} />
                </div>
            }
        </div>
    );


}

export default MercDetail;
