import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import { Select, Space ,Button} from 'antd';



const SelectFields = (props) => {
  // console.log('props');
  console.log(props.grade);
  // console.log({props.subject});
  // console.log({props.vol});
    const Results=()=>(
        <div>
            <div style={{textAlign:'center'}}>
            <h3>{newQue}</h3>
        </div>
    
        <div style={{textAlign:'center'}} >
            <Space >
            <Button type="primary" style={{backgroundColor:'Green'}}>Add Question</Button>
            <Button type="primary" style={{backgroundColor:'Red'}}>Re-Generate Question</Button>
    
            </Space>
        </div>
        </div>
    )
    
    const [showResults,setShowResults]= useState(false);
    const [newQue,setNewQue]=useState('a');
    const difficulties=[
        {label: 'Easy',key:'0'},
        {label:'Medium',key : '1'},
        {label:'Hard',key:'2'},
    ]
    const types=[
        {label:'MCQ',key:'0'},
        {label:'Short Answer',key:'1'},
    ]
    const chapters=[
        {label: 'Ch1', key:'0'},
        {label:'Ch2', key:'1'},
    ]
    const [chapt,setChapt]=useState('Select Chapter');
    const [que_type,setQue_type]=useState('Select Question Type');
    const [diff,setDiff]=useState('Select Difficulty');



    const handleDifficulty=(e)=>{
        setDiff(e);
        setShowResults(false);
    }
    const handleTypes=(e)=>{
        setQue_type(e);
        setShowResults(false);

    }
    const handleChapt=(e)=>{
        setChapt(e);
        setShowResults(false);

    }
    const handleResults=()=>{
        setShowResults(true);

    }

  return (
    <div>
        <Space wrap>
        <Select
      defaultValue={chapt}
      style={{
        width: 150,
      }}
      onChange={handleChapt}
      options={chapters.map((chapt,index)=>({
        label: chapt.label,
        value: chapt.label,
        // key: index,
      }))
    }
    />
    <Select
      defaultValue={que_type}
      style={{
        width: 150,
      }}
      onChange={handleTypes}
      options={types.map((type,index)=>({
        label: type.label,
        value: type.label,
        // key: index,
      }))
    }
    />
    <Select
      defaultValue={diff}
      style={{
        width: 150,
      }}
      onChange={handleDifficulty}
      options={difficulties.map((diff,index)=>({
        label: diff.label,
        value: diff.label,
        // key: index,
      }))
    }
    />
        </Space>

    <div>
    <br/>

        <Button type="primary" onClick={handleResults}>Generate Question</Button>

    </div>
   <div>
   <br/>
    
    {showResults? <Results/> : null}
   </div>
    </div>
  )
}

export default SelectFields;