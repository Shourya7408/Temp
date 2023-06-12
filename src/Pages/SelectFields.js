import React,{useState} from "react";
const FormComponent = ()=>{
    const [Grade, setGrade] = useState('');
    const [Subject, setSubject] = useState('');
    const [Vol, setVol] = useState('');

    let GradeList = [
        { label : 'Grade 4', value:'Grade 4'},
        { label : 'Grade 5', value:'Grade 5'},
        { label : 'Grade 6', value:'Grade 6'}
    ]

    let SubjectList = [
        { label : 'Science', value:'Science'},
        { label : 'Maths', value:'Maths'},
        { label : 'English', value:'English'}
    ]

    let VolList = [
        { label : 'Volume 1', value:'Vol 1'},
        { label : 'Volume 2', value:'Vol 2'},
        { label : 'Volume 3', value:'Vol 3'}
    ]
    const handleGrade= (e)=>{
        const selectedValue= e.target.value;
        setGrade(selectedValue);
        setSubject('');
        setVol('');
    };

    const handleSubject= (e)=>{
        const selectedValue= e.target.value;
        setSubject(selectedValue);
        setVol('');
    };

    const handleVol= (e)=>{
        const selectedValue= e.target.value;
        setVol(selectedValue);
    };

    return (
        <div>
            <label>
                Grade: 
                <select value={Grade} onChange={handleGrade}>
                <option value=""> Select an option</option>
                {GradeList.map((Grade)=><option value={Grade.value}> {Grade.label}</option>)}
                </select>
            </label>
            <label>
                Subject: 
                <select value={Subject} onChange={handleSubject}>
                <option value=""> Select an option</option>
                {SubjectList.map((Subject)=> <option value={Subject.value}>{Subject.label}</option>)}
                </select>
            </label>
            <label>
                Volume: 
                <select value={Vol} onChange={handleVol}>
                <option value=""> Select an option</option>
                {VolList.map((Vol)=><option value={Vol.value}>{Vol.label}</option>)}
                </select>
            </label>
        </div>
    );
};
export default FormComponent;

