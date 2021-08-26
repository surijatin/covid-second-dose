import { useState } from 'react';
import DatePicker from 'react-date-picker';
import RadioButton from '../RadioButtonComponent/RadioButton';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import MessageDisplay from '../MessageDisplayComponent/MessageDisplay';
import './BodyContainer.css';


function BodyContainer() {
    const [firstDate, onChange] = useState(new Date());
    const [vaccine, setVaccine] = useState('covishield');
    const [isCalculateBtnClicked, setFlag] = useState(false);
    const [secondDate, setSecondDate] = useState('');
    // const [vaccineRateData, setVaccineData] = useState({});

    // useEffect(() => {
    //     axios.get('https://api.covid19india.org/v4/min/data.min.json')
    //         .then(
    //             (result) => {
    //                 console.log(result.data);

    //                 // const finalData = [];
    //                 // result.data.data.forEach((arr) => {
    //                 //     const obj = {};
    //                 //     arr.forEach((item, index) => {
    //                 //         obj[result.data.columns[index]] = item;
    //                 //     });
    //                 //     finalData.push(obj);
    //                 // });
    //                 // console.log(finalData);
    //                 // setVaccineData(result.data.data);
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
    //         )
    // }, []);

    const onRadioButtonChange = (e) => {
        const { target: { id } } = e;
        setVaccine(id);
        setFlag(false);
    }

    const onBtnClick = () => {
        const copyDate = new Date(firstDate.getTime());
        let gapDays;
        switch (vaccine) {
            case 'covishield':
                gapDays = 84;
                break;
            case 'covaxin':
            case 'moderna':
                gapDays = 28;
                break;
            case 'sputnik':
                gapDays = 21;
                break;
            default:
                gapDays = 0;
                break;
        }
        copyDate.setDate(copyDate.getDate() + gapDays);
        setSecondDate(copyDate);
        setFlag(true);
    }

    return (
        <>
            <div className="main-container">
                <div className="main-wrapper">
                    <h1>
                        Get your COVID second jab due date.
                    </h1>
                    <div className="cont-box">
                        <RadioButton
                            name="vaccine"
                            id="covishield"
                            labelName="COVISHIELD"
                            onChange={onRadioButtonChange}
                            checked={vaccine === "covishield"}
                        />
                        <RadioButton
                            name="vaccine"
                            id="covaxin"
                            labelName="COVAXIN"
                            onChange={onRadioButtonChange}
                            checked={vaccine === "covaxin"}
                        />
                        <RadioButton
                            name="vaccine"
                            id="sputnik"
                            labelName="Sputnik V"
                            onChange={onRadioButtonChange}
                            checked={vaccine === "sputnik"}
                        />
                        <RadioButton
                            name="vaccine"
                            id="moderna"
                            labelName="Moderna"
                            onChange={onRadioButtonChange}
                            checked={vaccine === "moderna"}
                        />
                    </div>
                    <div className="date-picker">
                        <p>
                            Enter first dose date
                        </p>
                        <DatePicker
                            calendarAriaLabel="Toggle calendar"
                            clearAriaLabel="Clear value"
                            dayAriaLabel="Day"
                            monthAriaLabel="Month"
                            nativeInputAriaLabel="Date"
                            onChange={onChange}
                            value={firstDate}
                            yearAriaLabel="Year"
                            showLeadingZeros
                            clearIcon={null}
                            className="date-picker-class"
                        />
                    </div>
                    <div>
                        <ButtonComponent
                            id={"calculate"}
                            btnLabel={"Calculate"}
                            onBtnClick={onBtnClick}
                        />
                    </div>
                    {
                        isCalculateBtnClicked &&
                        <MessageDisplay
                            date={secondDate}
                        />
                    }
                </div>
            </div>
        </>
    );
}

export default BodyContainer;
