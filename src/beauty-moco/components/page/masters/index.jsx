import React, {useContext, useEffect, useState} from "react";
import {CompanyContext} from "../../../../../context/company.context";
import {getCompanyEmployees} from "../../../../../_api/company";
import MasterCard from './mastersCard';
import styled from 'styled-components';
import withChildFunction from '../../hoc';
import Spinner from '../../spinner';

const Banner = styled.div`
  width: 100%;
  padding: 50px;
  display: block;
  background: #F5F5F5;
  @media screen and (max-width: 1000px){
    padding: 50px 20px;
  }
`;

const BannerWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  flex-wrap: wrap-reverse;
`;

const Main = () => {
    const [employeesList, setEmployeesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {company}= useContext(CompanyContext);

    useEffect(() => {
        async function getEmployees(id) {
            try{
                const {data} = await getCompanyEmployees(id);
                setEmployeesList(data ? data : []);
                setLoading(false)
            } catch (e) {
                setEmployeesList([])
            }
        }
        getEmployees(company.id);
    }, []);
    return (
        <Banner>
            <BannerWrap>
                {
                    loading ? <Spinner /> :
                        employeesList.map((item) => {
                            return (
                                <MasterCard key={item.id} employee={item} />
                            )
                        })
                }
            </BannerWrap>
        </Banner>
    )
}

export default withChildFunction()(Main);