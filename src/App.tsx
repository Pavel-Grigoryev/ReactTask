import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log("App rendering");
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [unContrRatingValue, setunContrRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false);
    const onClickHandler = (value: any) => {
        console.log(`${value} was clicked`)
    }

    return (
        <div className="App">
            {/* <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            Article 2
            <Rating value={5}/>
            <Accordion titleValue={"Submenu"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff on={on} setOn={setOn}/>
            <hr/>
            <UncontrolledOnOff/>
            <hr/>
            <UncontrolledAccordion titleValue={"SubMenu"}/>
            <hr/>
            <Accordion titleValue={"Menu"}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       accordionCollapsed={accordionCollapsed}
                       items={[{title: 'Shop', value: '1'},
                           {title: 'About us', value: '2'}
                       ]}
                       onClick={onClickHandler}
            />
            <hr/>
            <UncontrolledRating onChange={setunContrRatingValue}/>
            <hr/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>

        </div>
    );

}

type PageTitlePropsTitle = {
    title: string;
}

function PageTitle(props: PageTitlePropsTitle) {
    console.log("AppTitle rendering");
    return <h1>{props.title}</h1>
}


export default App;
