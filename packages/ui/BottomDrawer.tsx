import { Drawer } from "antd";

interface BottomDrawerProps {
  children: JSX.Element | null;
  pageWidth: number | undefined;
  onClose(e: any): Function;
  visible: boolean;
}

export const BottomDrawer = ({ children, pageWidth, onClose, visible }: any) => {

  return (
    <Drawer
      placement="bottom"
      onClose={onClose}
      visible={visible}
      // drawerStyle={{ width: pageWidth }}
      width={pageWidth}
      bodyStyle={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Drawer>
  );
}