import React, {useContext, useEffect, useState} from 'react';
import {CompanyContext} from "../../../../../context/company.context";
import {getServices} from "../../../../../_api/services";
import ServicesCard from './servicesCard';
import {Banner, BannerHeader, BannerWrap, Title, BannerContainer} from './styled'
import Spinner from '../../spinner';
import withChildFunction from "../../hoc";

const Services = () => {
    const { company } = useContext(CompanyContext);
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await getServices(company.id);
                setCategories(data);
                setLoading(false)
            } catch (err) {
                console.error(err);
            }
        }
        if (company) {
            fetchData();
        }
    }, [company]);
    return (
        <Banner>
            <BannerHeader>
                {loading ? <Spinner /> :
                    categories.map(data => {
                            return (
                                <BannerWrap
                                    background={data.category.image}
                                    key={data.id}
                                    onClick={() => {setItem(data)
                                    }}>
                                    <Title>{data.category.title}</Title>
                                </BannerWrap>
                            )
                        })
                }
            </BannerHeader>
            <BannerContainer>
                {item !== undefined ? <ServicesCard categories={item} /> : null}
            </BannerContainer>
        </Banner>

    )
}
export default  withChildFunction()(Services);