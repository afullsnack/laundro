import React, { useEffect, useRef, useState } from "react";
import {
  AppstoreOutlined,
  CalendarOutlined, Card, Col, Grid, HomeOutlined, Layout, Row, Segmented, UserOutlined
} from "ui";

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
    const [location, setLocation] = useState<String | null>();

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
          "Parent ref",
          window?.location?.pathname,
          "Window property"
        );

      setLocation(window?.location?.pathname);
      setSize(parentRef?.current?.getBoundingClientRect());

      return () => {};
    }, [parentRef, screen]);
    console.log(parentRef);
    props = {
      pageWidth: size? size.width : 0
    }

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
                background: "white"
              }}
              bodyStyle={{
                padding: 0,
              }}
            >
              <Segmented size="large" block value={location != null && location?.includes('home')? 'home' : location?.includes('pickups')? 'pickups' : location?.includes('profile')? 'profile' : location?.includes('support') ? 'support' : 'home'} options={[
                {
                  label: (
                    <a
                      style={{
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        paddingTop: 15,
                        paddingBottom: 15 
                      }}
                      href="/home/"
                    >
                      <HomeOutlined />
                      <span>Home</span>
                    </a>
                  ),
                  value: "home"
                },
                {
                  label: (
                    <a
                      style={{
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        paddingTop: 15,
                        paddingBottom: 15
                      }}
                      href="/pickups/"
                    >
                      <CalendarOutlined />
                      <span>Pick Ups</span>
                    </a>
                  ),
                  value: "pickups"
                },
                {
                  label: (
                    <a
                      style={{
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        paddingTop: 15,
                        paddingBottom: 15
                      }}
                      href="/profile/"
                    >
                      <UserOutlined />
                      <span>Profile</span>
                    </a>
                  ),
                  value: "profile"
                },
                {
                  label: (
                    <a
                      style={{
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        paddingTop: 15,
                            paddingBottom: 15
                      }}
                      href="/support/"
                    >
                      <AppstoreOutlined />
                      <span>Support</span>
                    </a>
                  ),
                  value: "support"
                }
              ]} />
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
