import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailFetchSampleData } from '../../store/action/SampleAction';
import { useParams } from 'react-router';

const SamplePageDetail = () => {
    const {
        getDetailListSampleDataLoading, 
        getDetailListSampleDataResult
      } = useSelector((state) => state.SampleReducer)

    let { companyId } = useParams(); 
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        console.log('1. Use effect component did mount');
        dispatch(getDetailFetchSampleData(companyId));
    },[companyId, dispatch]);

    const data = getDetailListSampleDataResult

    return (
        <div>
        <h1>SamplePageDetail</h1>

        {
        getDetailListSampleDataLoading ? 
             "loading mas bro..."
        :
            data ? 
                (
                    <div>
                        <h3>Company: {getDetailFetchSampleData ? data.company : "kosong" }</h3>
                        <h3>Contact: {getDetailFetchSampleData ? data.contact : "kosong" }</h3>
                        <h3>Email: {getDetailFetchSampleData ? data.email : "kosong" }</h3>
                    </div>
                )
            : "data Kosong"
        }
        </div>
    );
}

export default SamplePageDetail;
