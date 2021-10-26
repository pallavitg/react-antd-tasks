import React , {useState} from "react";
import { Modal, Button, Radio,Input,Typography,Select } from "antd";
import ReactDOM from "react-dom";
const ModalComponent = (content) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectRadio, setselectRadio] = useState("preselect");
    const showModal = () => {
      setIsModalVisible(true);
    };
    const select = (e) => {
      // you can save the value in here
      setselectRadio(e.target.value);
      console.log(e.target.value);
    };
    const { TextArea } = Input;
    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    function modalclick() {
      if (selectRadio === "preselect") {
        alert("pre-select");
      } else {
        //---------------> UNABLE TO OPEN ANOTHER MODAL HERE   <-------------------------------------
        <Modal title="Create Task" visible={isModalVisible}>
          MODAL 2 COMES HERE
        </Modal>;
        alert("manual");
      }
    }
return(
    <>
     <Button type="primary" style={{ float: "left" , marginBottom:"10px" }} onClick={showModal}>
        Create Task
      </Button>
      <Modal
        title="Create Task"
        visible={isModalVisible}
       
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,

          <Button type="primary" key="next" onClick={modalclick}>
            Next
          </Button>
        ]}
      >
       <Typography>Task Name</Typography>
       <Input placeholder="Type here" required/>
       <Typography>Project</Typography>
     
       <Select defaultValue="lucy" placeholder="selectprojects" style={{ width: '100%' }} onChange={handleChange}>
         
      <Option value="jack">project 1</Option>
      <Option value="lucy">project 2</Option>
    </Select>
    <Typography>Comments</Typography>
       <TextArea rows={4} />
      </Modal>
    </>
);

};





export default ModalComponent;