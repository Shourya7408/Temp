import React,{useState} from 'react';
import { Select, Space ,Button} from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SelectFields from './SelectFields';
const NewPaper = () => {
  const navigate=useNavigate();

  const [showFields,setShowFields] = useState(false);
  const [Grade, setGrade] = useState('Select Grade');
  const [Subject, setSubject] = useState('Select Subject');
  const [Vol, setVol] = useState('Select Volume');

  const GradeList = [
      { label : 'Grade 4', key:'0'},
      { label : 'Grade 5', key:'1'},
      { label : 'Grade 6', key:'2'}
  ]

  const SubjectData =[
    {gradeName : ['English','Hindi']},
    {gradeName : ['Maths','Social Science']},
    {gradeName : ['Science','Maths']},

  ]

  const [ subjectList,setSubjectList]=useState(SubjectData[0].gradeName);
  // console.log("Subject");
  console.log(subjectList);


const VolList = [
    { label : 'Volume 1', value:'Vol 1'},
    { label : 'Volume 2', value:'Vol 2'},
    { label : 'Volume 3', value:'Vol 3'}
]
  const handleGrade= (e)=>{
    // console.log("Grade Updated");
    setShowFields(false);
    setGrade(e)
    setSubjectList(SubjectData[e].gradeName);
    setSubject(subjectList[0]);
    setVol('Select Volume');
  };

  const handleSubject= (e)=>{
    // console.log("Updated");
    setShowFields(false);

    setSubject(e)
    // console.log({e});
    setVol('Select Volume');
  };

  const handleVol= (e)=>{
    // console.log("Updated");
    setShowFields(false);

    setVol(e)
    console.log(e);
  };

  const handleSubmit=()=>{
    // <Link to="add-filt"></Link>
    // navigate('/add-filt')
    setShowFields(true);
    console.log(Vol);

    

  }
    return(
        <div style={{textAlign:'center'}}>
            <Header
            className="site-page-header"
            onBack={() => null}
            title="Title"
            style={{backgroundColor:'#bdcf30', height:'10vh',paddingTop:'0px'}}

         ><h1>Automated Assessment</h1></Header>

         <h3>Selet Filters</h3>

         <Space wrap>
    <Select
      defaultValue={Grade}
      style={{
        width: 150,
      }}
      onChange={handleGrade}
      options={GradeList.map((grade,index)=>({
        label: grade.label,
        value: index,
        // key: index,
      }))
    }
    />

       <Select
      // defaultValue="Select Subject"
      style={{
        width: 150,
      }}
      onChange={handleSubject}
      options={subjectList.map((subject)=>({
        label: subject,
        value: subject,
      }))
    }
    />

       <Select
      defaultValue={Vol}
      style={{
        width: 150,
      }}
      onChange={handleVol}
      options={VolList.map((grade)=>({
        label: grade.label,
        value: grade.label,
      }))
    }
    />


    </Space>
    <br/>
    <Button type="primary" style={{margin: '10px'}} onClick={handleSubmit}>Next</Button>
    <div style={{textAlign:'center'}}>{showFields?<SelectFields grade={Grade} vol={Vol} subject={Subject}></SelectFields>: null}</div>
        </div>
    );

}

export default NewPaper;
