import React, {useState} from "react";
import axios from "axios";
// import { Button,Container, TextField, Grid, Link, Typography } from "@mui/material";

import { Form , Input, Icon, Button, Space } from "antd";
const Login=()=>{
    const [erp, setErp] = useState('');
    const [password,setPassword]=useState('');
    const [usertype, setUsertype]=useState('');
    
    const [isloading, setLoading] =useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.erp);
        console.log(e.password);
        setLoading(true);

        const userData ={
            username: e.erp,
            password: e.password,
        };
        prompt('Login Successful')
        const url='';
        axios.post(url, userData).then(response=>{
            console.log('Response from server',response.data);

        }).catch(error=>{
            console.log('Error',error);
        });

        setTimeout(()=>{
            console.log('Recieved');
            setLoading(false);

        },2000);
        
    };
    return(
        <div style={{width: '400px', margin: '0 auto' ,backgroundColor:'white', marginTop:'10px', padding: '10px', border:'0.5px solid blue',  borderRadius:'10px',  padding:'4%'}}>

            <Form onFinish={handleSubmit} labelCol={{span: 8}} wrapperCol={{span: 18}} labelAlign="left">
                <Form.Item name="ERP number" label="ERP Number" rules={[{required:true, message:'Please enter your ERP number!'}, {whitespace:true}]}>
                    <Input placeholder="ERP Number" value={erp} onChange={(e)=>setErp(e.target.value)}/>
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{required:true, message:'Please enter your password!'}]}>
                    <Input.Password placeholder="password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item style={{marginRight:'0px'}} wrapperCol={{span: 24}} >

                        <Button  block type="primary" htmlType="submit" style={{ backgroundColor:'green'}} size="default" loading={isloading} >
                            Login
                        </Button>
                </Form.Item>

            </Form>
        </div>
    );

};
export default Login;