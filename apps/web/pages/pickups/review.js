// import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Card, CheckOutlined, Col, Row, weekdays } from "ui";
import {
  useConfirmDrawer,
  useEditDrawer,
  useErrorDrawer,
  useRemovedDrawer,
} from "ui/hooks";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default withUserLayout(({ pageWidth }) => {
  const router = useRouter();
  const [day, setDay] = useState(weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");

  const { confirmDrawer, SetConfirmDrawer } = useConfirmDrawer(
    pageWidth,
    () => router.push("/home/"),
    styles
  );

  const { removedDrawer, SetRemovedDrawer } = useRemovedDrawer(
    pageWidth,
    () => router.push("/home/"),
    styles
  );
  const { errorDrawer, SetErrorDrawer } = useErrorDrawer(
    pageWidth,
    () => errorDrawer.close(),
    styles
  );

  const { editDrawer, SetEditDrawer } = useEditDrawer(
    pageWidth,
    () => editDrawer.close(),
    () => {
      editDrawer.close();
      removedDrawer.open();
    },
    () => {
      editDrawer.close();
      errorDrawer.open();
    },
    styles
  );
  const onRecurringChange = (e) => {
    console.log("Recurring checked", e.target.value);
    setRecurringValue(e.target.value);
  };

  console.log(pageWidth, "Review page");

  return (
    <div className={styles.container}>
      <Head>
        <title>Review scheduled pick up</title>
        <meta
          name="description"
          content="Schedule a pickup date for your laundry"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Row
          gutter={[8, 16]}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            padding: "0 0 60px 0",
            // padding: 0,
            overflowY: "scroll",
          }}
        >
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
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
            <h2 style={{ margin: 0 }}>Review your pickup</h2>
            {/* <span>Select a date for your clothes to be picked up</span> */}
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Card
                style={{
                  borderRadius: 10,
                  marginRight: 10,
                  backgroundColor: "#0644A214",
                  flex: 1,
                }}
                bodyStyle={{
                  paddingTop: 25,
                  paddingBottom: 25,
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0644A2",
                }}
                bordered={false}
              >
                <span>Oct</span>
                <h3 style={{ margin: 0, fontWeight: "bold", color: "#0644A2" }}>
                  28
                </h3>
                <span>2021</span>
              </Card>
              <Card
                bordered
                style={{
                  // border: "1px dashed #0644A280",
                  height: "100%",
                  borderRadius: 10,
                  background: "transparent",
                  flex: 2,
                  backgroundImage: "url('/bags_group.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                bodyStyle={{
                  padding: 0,
                  background: "transparent",
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Image
                  src=""
                  // width={"inherit"}
                  preview={false}
                /> */}
              </Card>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "start",
                }}
              >
                <h4 style={{ margin: 0 }}>Address</h4>
                <span style={{ color: "#5D6571AC" }}>333 Fremont Street</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "end",
                }}
              >
                <h4 style={{ margin: 0 }}>Credit Card</h4>
                <span style={{ color: "#5D6571AC" }}>8689 VISA</span>
              </div>
            </div>
            <br />
            <div style={{ display: "flex", flexFlow: "column", width: "100%" }}>
              <h4 style={{ textAlign: "left" }}>Cleaning Preferences</h4>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#5D6571AC" }}>Starch</span>
                <span style={{ color: "#5D6571AC" }}>Light</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#5D6571AC" }}>Starch</span>
                <span style={{ color: "#5D6571AC" }}>Light</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#5D6571AC" }}>Starch</span>
                <span style={{ color: "#5D6571AC" }}>Light</span>
              </div>
            </div>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                className={styles.ghost_btn}
                size="large"
                style={{ marginRight: 10, flex: 1 }}
                onClick={() => editDrawer.open()}
              >
                Edit
              </Button>
              <Button
                className={styles.normal_btn}
                size="large"
                style={{ flex: 2 }}
                onClick={() => confirmDrawer.open()}
              >
                Confirm
              </Button>
            </div>
          </Col>
        </Row>
        {SetConfirmDrawer()}
        {SetEditDrawer()}
        {SetRemovedDrawer()}
        {SetErrorDrawer()}
      </main>
    </div>
  );
});
