import React from 'react';
import { Layout ,Typography,Avatar,Menu,Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import ModalComponent from './Modal';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content} = Layout;
const { Title } = Typography;
 const content = "jkljflk mk nkjkfks knkjsjfkjk"
function App() {
  const columns = [
    {
      title: 'Task ID',
      dataIndex: 'id',
      
    },
    {
      title: 'Task Name',
      dataIndex: 'name',
    },
    {
      title: 'Project',
      dataIndex: 'age',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
    },
    {
      title: 'Task Edit ',
      dataIndex: 'taskedit',
      render: (text, record) => (
        <button onClick={()=> console.log(record)}>
          {"Task edit"}
        </button>
       ),
    },
    {
      title: 'Task Delete',
      dataIndex: 'taskdelete',
      render: (text, record) => (
        <button onClick={()=> console.log(record)}>
          {"task delete"}
        </button>
       ),
    },
  ];
  const data = [
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      age: 'project 1',
      comment: 'New York No. 1 Lake Park',
      taskedit:'hello',
      taskdelete:'hgjk',
    },
    {
      key: '2',
      id: '2',
      name: 'Jim Green',
      age: 'project 1',
      comment: 'London No. 1 Lake Park',
      taskedit:'hello',
      taskdelete:'hgjk',

},
    {
      key: '3',
      id: '3',
      name: 'Joe Black',
      age: 'project 1',
      comment: 'Sidney No. 1 Lake Park',
      taskedit:'hello',
      taskdelete:'hgjk',

},
  ];
  
  return (
    <div className="App">
     <Layout>
      <Header style={{padding:'10px 10px',overflow:'hidden'}}>
      <Avatar style={{float:'right'}} icon={<UserOutlined />} />
      <Title style={{color:'white', textAlign:'left'}} level={3}>Comapany Name</Title>
      </Header>
      <Layout>
     
        <Sider style={{backgroundColor:'#0a0a3d',textAlign:'center',height:'100vh'}}>

        <Menu defaultSelectedKeys={['Dashboard']}>
        <Menu.Item key={['Dashboard']} style={{backgroundColor:'grey',color:'white',top:'0'}}>
          Tasks
        </Menu.Item>
        <Menu.Item key={['Dashboard']}>
          Contact us
        </Menu.Item>
      </Menu>
        </Sider>
        <Layout>
        <Content style={{textAlign:'center',padding:'20px 20px'}}>
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <ModalComponent Content={content} />
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      </Layout>
     
    </Layout>

    </div>
  );
}

export default App;
