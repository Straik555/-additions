import React, {useContext, useState, useEffect, useMemo, useCallback} from 'react';
import { getCompanySchedule } from "../../../../../_api/company";
import { CompanyContext } from '../../../../../context/company.context';
import { extractDataByInstruction } from '../../../../../utils/helpers';
import Schedule from '../../../../../core-entities/Schedule';
import {Banner, BannerWrap, BannerLeft, BannerRight} from './styled';
import ContactsCard from "./contactsCard";
import ClockIcon from "../../../assets/img/contacts/clock.svg";
import MapIcon from "../../../assets/img/contacts/map.svg";
import PhoneIcon from "../../../assets/img/contacts/phone.svg";
import GoogleMapsContainer from '../../../../../containers/Map'
import Spinner from '../../spinner';
import withChildFunction from "../../hoc";

const mapDay = {
    'MONDAY': 'Пн',
    'TUESDAY': 'Вт',
    'WEDNESDAY': 'Ср',
    'THURSDAY': 'Чт',
    'FRIDAY': 'Пт',
    'SATURDAY': 'Сб',
    'SUNDAY': 'Нд'
}

const instruction = {
    'contactsPage.email': 'email',
    'contactsPage.address': 'address',
    'contactsPage.mapCoords.lat': 'lat',
    'contactsPage.mapCoords.lng': 'lng',
    'contactsPage.telephone': 'phone'
}

const Contacts = () => {
    const { company, landingInfo } = useContext(CompanyContext);
    const pageData = extractDataByInstruction(landingInfo, instruction);
    const [schedule, setSchedule] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (company.id) {
            async function fetch() {
                try {
                    const { data } = await getCompanySchedule(company.id);
                    setSchedule(new Schedule(data));
                    setLoading(false)
                } catch (err) {
                    console.error(err);
                }
            }
            fetch();
        };
    }, [company]);

    const squashedSchedule = useMemo(() => {
        if (schedule) {
            return schedule.getSquashedDays();
        }
    }, [schedule]);

    const formatScheduleItem = useCallback(({ name, isWorking, multiple, daysRange, hoursRange }) => {
        let daysText = '';
        if (multiple) {
            const { from, to } = daysRange;
            daysText = `${mapDay[from]}-${mapDay[to]}`;
        } else {
            daysText = mapDay[name]
        }

        if (!isWorking) {
            return `${daysText} – вихідний`;
        }

        return `${daysText} з ${hoursRange.from} до ${hoursRange.to}`
    }, []);

    return (
        <Banner>
            <BannerWrap>
                {loading ? <Spinner /> :
                    <>
                        <BannerLeft>
                            {pageData.phone && <ContactsCard icon={PhoneIcon} title='Ресепшн'>
                                {<a href={`tel:${pageData.phone}`}>{pageData.phone}</a>}
                            </ContactsCard>}
                            {pageData.address && <ContactsCard icon={MapIcon} title='Адреса'>
                                {pageData.address}
                            </ContactsCard>}
                            {squashedSchedule && <ContactsCard icon={ClockIcon} title='Графік роботи'>
                                {squashedSchedule.map(item => {
                                    return (
                                        <>
                                            {formatScheduleItem(item)}
                                        </>
                                    )
                                })}
                            </ContactsCard>}
                        </BannerLeft>
                        <BannerRight>
                        <GoogleMapsContainer coordinates={pageData}/>
                        </BannerRight>
                    </>
                }
            </BannerWrap>
        </Banner>
    )
}

export default  withChildFunction()(Contacts);