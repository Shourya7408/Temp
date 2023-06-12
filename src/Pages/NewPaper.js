import React,{useState} from 'react';
import { Select, Space ,Button} from 'antd';
import { Header } from 'antd/es/layout/layout';
const NewPaper = () => {

  const [Grade, setGrade] = useState('Select Grade');
  // const [Subject, setSubject] = useState('Select Subject');
  const [Vol, setVol] = useState('Select Volume');

  const GradeList = [
      { label : 'Grade_4', key:'0'},
      { label : 'Grade_5', key:'1'},
      { label : 'Grade_6', key:'2'}
  ]

  const SubjectData ={
    Grade_4 :['English','Hindi'],
    Grade_5 :['Maths','Science'],
    Grade_6 :['Maths','Social Science'],

  }
//   const SubjectList = [
//     { label : 'Science', value:'Science'},
//     { label : 'Maths', value:'Maths'},
//     { label : 'English', value:'English'}
// ]
  const [ SubjectList,setSubjectList]=useState(SubjectData[GradeList[0]]);
  const [Subject, setSubject] = useState(SubjectData[GradeList[0]][0]);


const VolList = [
    { label : 'Volume 1', value:'Vol 1'},
    { label : 'Volume 2', value:'Vol 2'},
    { label : 'Volume 3', value:'Vol 3'}
]
  const handleGrade= (e)=>{
    // console.log("Updated");
    setGrade({e})
    console.log({e});
    setSubjectList(GradeList[{e}]);
    setSubject(GradeList[{e}][0]);
    setVol('Select Volume');
  };

  const handleSubject= (e)=>{
    // console.log("Updated");
    setSubject({e})
    console.log({e});
    setVol('Select Volume');
  };

  const handleVol= (e)=>{
    // console.log("Updated");
    setVol({e})
    console.log({e});
  };


    return(
        <div>
            <Header
            className="site-page-header"
            onBack={() => null}
            title="Title"
            style={{backgroundColor:'#bdcf30'}}
         ><h1>Automated Assessment</h1></Header>

         <h3>Selet Filters</h3>

         <Space wrap>
    <Select
      defaultValue={Grade}
      style={{
        width: 150,
      }}
      onChange={handleGrade}
      options={GradeList.map((grade)=>({
        label: grade.label,
        value: grade.label,
      }))
    }
    />

       <Select
      defaultValue={Subject}
      style={{
        width: 150,
      }}
      onChange={handleSubject}
      options={SubjectList.map((grade)=>({
        label: grade.label,
        value: grade.label,
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
    <br/>
      <Button type="primary">Select Qustions Manually</Button>
      <br/>
      <Button type="primary">Generate Paper Randomly</Button>

    </Space>
        </div>
    );

}

export default NewPaper;
