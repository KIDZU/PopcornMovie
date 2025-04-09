import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import style from "./Login.module.css"

const onFinish = values => {
  console.log('Success:', values.username == userData.name,values.password == userData.password );
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const userData = {
  name:"Никита",
  password:"1111"
}

export function Login() {
  
return(
  <div className={style.formBlock}>
 <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Имя"
      name="username"
      rules={[{ required: true, message: 'Пожалуйста введите своё имя!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Пароль"
      name="password"
      rules={[{ required: true, message: 'Пожалуйста введите свой пароль' }]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
    </Form.Item>
    
  </Form>

</div>
)
}