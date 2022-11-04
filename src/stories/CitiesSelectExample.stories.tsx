import {Select} from "../components/Select/Select";
import {useMemo, useState} from "react";


export default {
    title: 'Cities.select.example',
    component: Select
}

export type CitiesType = {
    title: string
    value: any
    country: string
    population: number
}

export const CitiesFilters = () => {
    const cities: CitiesType[] = [
        {value: '1', title: 'Minsk', population: 2000000, country: 'RB'},
        {value: '2', title: 'Homel', population: 500000, country: 'RB'},
        {value: '3', title: 'Rakow', population: 5000, country: 'RB'},
        {value: '4', title: 'Kiev', population: 3000000, country: 'UA'},
        {value: '5', title: 'Lvov', population: 720000, country: 'UA'},
        {value: '6', title: 'Harkov', population: 1400000, country: 'UA'},
        {value: '7', title: 'Warszawa', population: 1800000, country: 'PL'},
        {value: '8', title: 'Krakow', population: 770000, country: 'PL'},
        {value: '9', title: 'Gdansk', population: 580000, country: 'PL'}
    ]


    let [counter, setCounter] = useState(0);
    const [city, setCity] = useState<CitiesType[]>(cities);
    const [parentValue1, setParentValue1] = useState(null);
    const [parentValue2, setParentValue2] = useState(null);
    const [parentValue3, setParentValue3] = useState(null);

    const citiesTitleFilter = useMemo(() => {
        return city.filter(c => c.title.toLowerCase().indexOf('a') > - 1);
    }, [parentValue1])
    const citiesCountryFilter = useMemo(() => {
        return city.filter(c => c.country === 'RB');
    }, [parentValue2]);
    const citiesPopulationFilter = useMemo(() => {
        return city.filter(c => c.population > 1000000);
    }, [parentValue3]);

    return <>
        {counter}
        <button onClick={() => setCounter(++counter)}>+</button>
        <Select onChange={setParentValue1} items={citiesTitleFilter} value={parentValue1}/>
        <Select onChange={setParentValue2} items={citiesCountryFilter} value={parentValue2}/>
        <Select onChange={setParentValue3} items={citiesPopulationFilter} value={parentValue3}/>
    </>
}