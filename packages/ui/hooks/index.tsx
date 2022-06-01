import { CheckOutlined, EllipsisOutlined, ExclamationOutlined, MailFilled, MessageFilled } from "@ant-design/icons";
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
 * @Component => referralDrawer Refer a friend actions drawer Drawer, extends BottomDrawer
 * @Params => pageWidth, action, styles
**/
export const useReferralDrawer = (pageWidth: number, action: Function[] | null, styles: Object | any) => {

  const [referralDrawerVisible, setReferralDrawerVisible] = useState(false);

  const showReferralDrawer = () => {
    setReferralDrawerVisible(true);
  };
  const onReferralDrawerClose = () => {
    setReferralDrawerVisible(false);
  };

  return {
    isVisible: referralDrawerVisible,
    referralDrawer: {
      close: () => setReferralDrawerVisible(false),
      open: () => showReferralDrawer()
    },
    SetReferralDrawer: () => <BottomDrawer
      onClose={onReferralDrawerClose}
      visible={referralDrawerVisible}
      pageWidth={pageWidth}
    >
      <br />
      <h2 style={{ margin: 0, marginBottom: 10 }}>Give $20 Get $20</h2>
      <span>Friends don’t let friends do Laundry</span>
      <br />
      <br />
      <span>Share</span>
      <br/>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        // padding: 10,
        // borderRadius: "100%",
      }}>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: "#0644A215",
            borderRadius: "100%",
          }}
        >
          <MessageFilled style={{ color: "#0644A2", fontSize: 25 }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: "#0644A215",
            borderRadius: "100%",
          }}
        >
          <MailFilled style={{ color: "#0644A2", fontSize: 25 }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: "#0644A215",
            borderRadius: "100%",
          }}
        >
          <EllipsisOutlined style={{ color: "#0644A2", fontSize: 25 }} />
        </div>
      </div>
      <br/>
      <br/>
      <Button
        className={styles.ghost_btn}
        size="large"
        block
        onClick={() => action? action[0]() : null}
      >
        Cancel
      </Button>
    </BottomDrawer>
  };
}


/**
 * @Component => LogoutDrawer logout Drawer, extends BottomDrawer
 * @Params => pageWidth, action, styles
**/
export const useLogoutDrawer = (pageWidth: number, action: Function[] | null, styles: Object | any) => {

  const [logoutDrawerVisible, setLogoutDrawerVisible] = useState(false);

  const showLogoutDrawer = () => {
    setLogoutDrawerVisible(true);
  };
  const onLogoutDrawerClose = () => {
    setLogoutDrawerVisible(false);
  };

  return {
    isVisible: logoutDrawerVisible,
    logoutDrawer: {
      close: () => setLogoutDrawerVisible(false),
      open: () => showLogoutDrawer()
    },
    SetLogoutDrawer: () => <BottomDrawer
      onClose={onLogoutDrawerClose}
      visible={logoutDrawerVisible}
      pageWidth={pageWidth}
    >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: "#0644A215",
            borderRadius: "100%",
          }}
        >
          <MessageFilled style={{ color: "#0644A2", fontSize: 25 }} />
        </div>
      <br />
      <h2 style={{ margin: 0, marginBottom: 10 }}>Log Out</h2>
      <span>Are you sure you want to logout?</span>
      <br />
      <br/>
      <Button
        className={styles.ghost_btn}
        size="large"
        block
        onClick={() => action? action[0]() : null}
      >
        Yes, Log out
      </Button>
      <Button
        className={styles.normal_btn}
        size="large"
        block
        onClick={() => action? action[1]() : onLogoutDrawerClose()}
      >
        No
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
 * @Component => PrefDrawer profile Drawer, extends BottomDrawer
 * @Params => pageWidth, action, styles
**/
export const usePrefDrawer = (pageWidth: number, primaryAction: Function | null, secondaryAction: Function | null, styles: Object | any, defaultOption: String) => {

  const options = [
    {
      label: "None",
      value: "none",
    },
    {
      label: "Light",
      value: "light",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "Heavy",
      value: "heavy",
    },
  ];
  const [starchOption, setStarchOption] = useState(defaultOption || 'none');
  const [prefDrawerVisible, setPrefDrawerVisible] = useState(false);

  const showPrefDrawer = () => {
    setPrefDrawerVisible(true);
  };
  const onPrefDrawerClose = () => {
    setPrefDrawerVisible(false);
  };

  return {
    isVisible: prefDrawerVisible,
    prefDrawer: {
      close: () => setPrefDrawerVisible(false),
      open: () => showPrefDrawer()
    },
    SetPrefDrawer: () => <BottomDrawer
    onClose={onPrefDrawerClose}
    visible={prefDrawerVisible}
    pageWidth={pageWidth}
  >
    <Card style={{width: "100%", borderRadius: 10}} headStyle={{borderBottom: 'none'}} bodyStyle={{paddingTop: 10}} title={<h4 style={{textAlign: "left", margin: 0}}>{"STARCH LEVEL"}</h4>}>
      <Radio.Group optionType="button" size="large" defaultValue={starchOption} value={starchOption} onChange={e => setStarchOption(e.target.value)} style={{width: "100%", backgroundColor: ""}}>
        {
          options.map((item) => <Radio.Button key={item.value.toString()} style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", border: 0, outline: "none"}} type="text" value={item.value}>{item.label} {item.value === starchOption && <CheckOutlined style={{color: "#0644A2", fontSize: 24, marginLeft: 120 }} />}</Radio.Button> )
        }
      </Radio.Group>
    </Card>
    <br/>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        width: "100%"
      }}
    >
      <Button
        className={styles.ghost_btn}
        size="large"
        style={{flex: 1, marginRight: 10}}
        onClick={() => secondaryAction? secondaryAction() : null}
      >
        Cancel
      </Button>
      <Button
        className={styles.normal_btn}
        size="large"
        style={{flex: 3}}
        onClick={() => primaryAction? primaryAction() : null}
      >
        Save Changes
      </Button>
    </div>
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