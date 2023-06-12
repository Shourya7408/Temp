import React, {useState} from "react";
import axios from "axios";
// import { Button,Container, TextField, Grid, Link, Typography } from "@mui/material";
import { Form , Input, Icon, Button } from "antd";

const SignUp= ()=>{
    const [erp, setErp] = useState('');
    const [password,setPassword]=useState('');
    const [cnfrmpassword,setCnfrmPassword]=useState('');
    const [usertype, setUsertype]=useState('');
    
    const url='';
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({e});
        console.log(usertype);
        const userData ={
            username: e.erp,
            password: e.password,
        };
        axios.post(url, userData).then(response=>{
            console.log('Response from server',response.data);
        }).catch(error=>{
            console.log('Error',error);
        });

    };

    return(
        <div style={{width: '400px',height:'auto', margin: '0 auto',backgroundColor:'white', marginTop:'10px', padding: '10px', border:'0.5px solid blue',  borderRadius:'10px'}}>

            {/* <h1>SignUp</h1> */}
            <Form onFinish={handleSubmit}
            labelCol={{span: 10}} wrapperCol={{span: 24}} labelAlign="left" style={{borderColor:'red', margin:'10px', }}>
                <Form.Item name="ERP number" label="ERP Number" rules={[{required:true, message:'Please enter your ERP number!'},{whitespace:true}]}>
                    <Input placeholder="ERP Number" onChange={(e)=>setErp(e.target.value)}/>
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{required:true, message:'Please enter your password!'}]}>
                    <Input.Password placeholder="password" label="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item name="cnfrmpassword" dependencies={["password"]} label="Confirm Password" rules={[{required:true, message:'Please re-enter your password!'},({getFieldValue})=>({validator(_,value){
                    if(!value || getFieldValue("password")=== value){
                        return Promise.resolve();
                    }
                    return Promise.reject("Password doesn't match");
                },}),]}>
                    <Input.Password placeholder="Confirm Cpassword" label="Confirm Password" onChange={(e)=>setCnfrmPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item style={{marginRight:'0px'}} wrapperCol={{span: 24}}>
                    <Button block type="primary" htmlType="submit" onClick={()=>setUsertype(1)}>
                        SignUp as Teacher
                    </Button>
                </Form.Item>

                <Form.Item style={{marginRight:'0px'}} wrapperCol={{span: 24}}>
                    <Button block type="primary" htmlType="submit" onClick={()=>setUsertype(2)}> SignUp as Planner</Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default SignUp;