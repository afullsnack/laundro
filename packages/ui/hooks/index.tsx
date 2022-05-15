import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons";
import { Button } from "antd";
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
 * @Params => pageWidth, action, styles
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