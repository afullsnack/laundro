import {
  AppstoreOutlined,
  CalendarOutlined,
  HomeOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Card, Col, Grid, Layout, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";

const { Header, Footer } = Layout;
const { useBreakpoint } = Grid;

export function withLayout(PageComp: React.ComponentClass) {
  return function App(props: Object) {
    return (
      <Layout style={{ height: "100vh" }}>
        <Row style={{ width: "100%", margin: 0, padding: 0 }}>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 6 }}
            md={{ span: 7 }}
            xl={{ span: 8 }}
          ></Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 10 }}
            xl={{ span: 8 }}
            style={{ backgroundColor: "#FEFEFE" }}
          >
            <PageComp {...props} />
          </Col>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 6 }}
            md={{ span: 7 }}
            xl={{ span: 8 }}
          ></Col>
        </Row>
      </Layout>
    );
  };
}

export function withUserLayout(PageComp: React.ComponentClass) {
  return function App(props: Object) {
    const parentRef = useRef<HTMLInputElement>(null);
    const [size, setSize] = useState<DOMRect | undefined>();
    const screen = useBreakpoint();

    useEffect(() => {
      // Effect after render done
      
        console.log(
          parentRef,
          // parentRef.current.clientWidth,
          // parentRef.current.getBoundingClientRect().width,
          // parentRef.current.getBoundingClientRect().height,
          // parentRef.current.getBoundingClientRect().top,
          // parentRef.current.getBoundingClientRect().bottom,
          // parentRef.current.getBoundingClientRect(),
          "Parent ref"
        );

      setSize(parentRef?.current?.getBoundingClientRect());

      return () => {};
    }, [parentRef, screen]);
    console.log(parentRef);
    return (
      <Layout style={{ minHeight: "100vh", overflowY: "hidden" }}>
        <Row style={{ width: "100%", margin: 0, padding: 0 }}>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 6 }}
            md={{ span: 7 }}
            xl={{ span: 8 }}
          ></Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 10 }}
            xl={{ span: 8 }}
            style={{
              backgroundColor: "#F2F2FA",
              minHeight: "100%",
              overflowY: "scroll",
              position: "relative",
            }}
            ref={parentRef}
          >
            <PageComp {...props} />
            <Card
              style={{
                width: size ? size.width : 0,
                margin: 0,
                // padding: 10,
                position: "fixed",
                bottom: 0,
                left: size ? size.x : 0,
                right: size ? size.width : 0,
                zIndex: 100,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <a
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <HomeOutlined />
                <span>Home</span>
              </a>
              <a
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <CalendarOutlined />
                <span>Pick Ups</span>
              </a>
              <a
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <UserOutlined />
                <span>Profile</span>
              </a>
              <a
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <AppstoreOutlined />
                <span>Support</span>
              </a>
            </Card>
          </Col>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 6 }}
            md={{ span: 7 }}
            xl={{ span: 8 }}
          ></Col>
        </Row>
      </Layout>
    );
  };
}
