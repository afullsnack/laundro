import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Radio, Row } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { useState } from "react";
import { BottomDrawer } from "../BottomDrawer";


/**
 * @Component => ConfirmDrawer pickup Drawer, extends BottomDrawer
 * @Params => pageWidth, action, styles
**/
export const useConfirmDrawer = (pageWidth: number, action: Function | null, styles: Object | any) => {

  const [confirmDrawerVisible, setConfirmDrawerVisible] = useState(false);

  const showConfirmDrawer = () => {
    setConfirmDrawerVisible(true);
  };
  const onConfirmDrawerClose = () => {
    setConfirmDrawerVisible(false);
  };

  return {
    isVisible: confirmDrawerVisible,
    confirmDrawer: {
      close: () => setConfirmDrawerVisible(false),
      open: () => showConfirmDrawer()
    },
    SetConfirmDrawer: () => <BottomDrawer
    onClose={onConfirmDrawerClose}
    visible={confirmDrawerVisible}
    pageWidth={pageWidth}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#0644A215",
        borderRadius: "100%",
      }}
    >
      <CheckOutlined style={{ color: "#0644A2", fontSize: 25 }} />
    </div>
    <br />
    <h2 style={{ margin: 0, marginBottom: 10 }}>Pick Up Scheduled</h2>
    <span>Your pick up has been successfully scheduled</span>
    <br />
    <Button
      className={styles.normal_btn}
      size="large"
      block
      onClick={() => action? action() : null}
    >
      Got it
    </Button>
  </BottomDrawer>
  };
}

/**
 * @Component => EditModal pickup modal, extends BottomDrawer
 * @Params => pageWidth, action, editAction1, editAction2, styles
 **/
export const useEditDrawer = (pageWidth: number, action: Function | null, editAction1: Function | null, editAction2: Function | null, styles: Object | any) => {
  const [editDrawerVisible, setEditDrawerVisible] = useState(false);

  const showEditDrawer = () => {
    setEditDrawerVisible(true);
  };
  const onEditDrawerClose = () => {
    setEditDrawerVisible(false);
  };

  return {
    isVisible: editDrawerVisible,
    editDrawer: {
      close: () => setEditDrawerVisible(false),
      open: () => showEditDrawer()
    },
    SetEditDrawer: () => <BottomDrawer
        onClose={onEditDrawerClose}
        visible={editDrawerVisible}
        pageWidth={pageWidth}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            backgroundColor: "#0644A215",
            borderRadius: "100%",
          }}
        >
          <ExclamationOutlined style={{ color: "#0644A2", fontSize: 25 }} />
        </div>
        <br />
        <h2 style={{ margin: 0, marginBottom: 10 }}>Remove your pickup</h2>
        <span>
          Would you like to cancel this pick up or your full Recurring schedule
        </span>
        <br />
        <Button
          className={styles.ghost_btn}
          style={{ marginBottom: 8 }}
          size="large"
          block
          onClick={() => editAction1? editAction1() : null} //DONE: Clip to open Pick Removed Drawer
        >
          Only This Pick Up
        </Button>
        <Button
          className={styles.ghost_btn}
          style={{ marginBottom: 8 }}
          size="large"
          block
          onClick={() => editAction2? editAction2() : null} //DONE: Clip to open Pickup Removed Drawer
        >
          Full Schedule
        </Button>
        <Button
          className={styles.normal_btn}
          size="large"
          block
          onClick={() => action? action() : null}
        >
          Close
        </Button>
      </BottomDrawer>
  };
}

/**
 * @Component => removedDrawer pickup Drawer, extends BottomDrawer
 * @Params => pageWidth, action, styles
**/
export const useRemovedDrawer = (pageWidth: number, action: Function | null, styles: Object | any) => {

  const [removedDrawerVisible, setRemovedDrawerVisible] = useState(false);

  const showRemovedDrawer = () => {
    setRemovedDrawerVisible(true);
  };
  const onRemovedDrawerClose = () => {
    setRemovedDrawerVisible(false);
  };

  return {
    isVisible: removedDrawerVisible,
    removedDrawer: {
      close: () => setRemovedDrawerVisible(false),
      open: () => showRemovedDrawer()
    },
    SetRemovedDrawer: () => <BottomDrawer
    onClose={onRemovedDrawerClose}
    visible={removedDrawerVisible}
    pageWidth={pageWidth}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#0644A215",
        borderRadius: "100%",
      }}
    >
      <CheckOutlined style={{ color: "#0644A2", fontSize: 25 }} />
    </div>
    <br />
    <h2 style={{ margin: 0, marginBottom: 10 }}>Pick Up Removed</h2>
    <span>Your pick up has been successfully removed</span>
    <br />
    <Button
      className={styles.normal_btn}
      size="large"
      block
      onClick={() => action? action() : null}
    >
      Got it
    </Button>
  </BottomDrawer>
  };
}


/**
 * @Component => errorDrawer pickup Drawer, extends BottomDrawer
 * @Params => pageWidth, action, styles
**/
export const useErrorDrawer = (pageWidth: number, action: Function | null, styles: Object | any) => {

  const [errorDrawerVisible, setErrorDrawerVisible] = useState(false);

  const showErrorDrawer = () => {
    setErrorDrawerVisible(true);
  };
  const onErrorDrawerClose = () => {
    setErrorDrawerVisible(false);
  };

  return {
    isVisible: errorDrawerVisible,
    errorDrawer: {
      close: () => setErrorDrawerVisible(false),
      open: () => showErrorDrawer()
    },
    SetErrorDrawer: () => <BottomDrawer
    onClose={onErrorDrawerClose}
    visible={errorDrawerVisible}
    pageWidth={pageWidth}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#0644A215",
        borderRadius: "100%",
      }}
    >
      <ExclamationOutlined style={{ color: "#0644A2", fontSize: 25 }} />
    </div>
    <br />
    <h2 style={{ margin: 0, marginBottom: 10 }}>Error</h2>
    <span>Please choose any recurring options</span>
    <br />
    <Button
      className={styles.normal_btn}
      size="large"
      block
      onClick={() => action? action() : null}
    >
      Got it
    </Button>
  </BottomDrawer>
  };
}

/**
  * @Component => useCustomRadioGroup
  * @Params => options, defaultVal, title

**/

export const useCustomRadioGroup = (options: Array<{label: String, value: String}>, defaultVal: String, title: String) => {
  const [value, setValue] = useState(defaultVal);

  return [
    value,
    () => (
      <Card style={{width: "100%", borderRadius: 10}} headStyle={{borderBottom: 'none'}} bodyStyle={{paddingTop: 10}} title={<h4 style={{textAlign: "left", margin: 0}}>{title}</h4>}>
        <Radio.Group optionType="button" size="large" defaultValue={defaultVal} value={value} onChange={e => setValue(e.target.value)} style={{width: "100%", backgroundColor: ""}}>
          {
            options.map((item) => <Radio.Button key={item.value.toString()} style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", border: 0, outline: "none"}} type="text" value={item.value}>{item.label} {item.value === value && <CheckOutlined style={{color: "#0644A2", fontSize: 24, marginLeft: 120 }} />}</Radio.Button> )
          }
        </Radio.Group>
      </Card>
    )
  ]
}


/**
  * @Component => useCustomCheckBoxGroup
  * @Params => options, defaultVal, title

**/

export const useCustomCheckBoxGroup = (options: Array<{label: String, value: String}>, defaultVal: CheckboxValueType[], title: String) => {
  const [value, setValue] = useState<CheckboxValueType[]>(defaultVal);
  console.log(defaultVal, "from inside comp");


  return [
    value,
    () => (
      <Card style={{width: "100%", borderRadius: 10}} headStyle={{borderBottom: 'none'}} bodyStyle={{paddingTop: 10}} title={<h4 style={{textAlign: "left", margin: 0}}>{title}</h4>}>
        <Checkbox.Group defaultValue={value} value={value}  onChange={(checkedValues) => setValue(checkedValues)} style={{width: "100%"}}>
          <Row gutter={[0, 16]}>
            {
              options.map((item) => 
                <Col span={24} key={item.value.toString()}>
                  <Checkbox style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "start"}} value={item.value}>{item.label}</Checkbox>
                </Col>
              )
            }
          </Row>
        </Checkbox.Group>
      </Card>
    )
  ]
}