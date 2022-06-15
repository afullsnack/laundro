// import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Col, PlusOutlined, Row, weekdays } from "ui";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default withUserLayout(({ pageWidth }) => {
  const router = useRouter();
  const [day, setDay] = useState(weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");
  const [visible, setVisible] = useState(false);

  const onRecurringChange = (e) => {
    console.log("Recurring checked", e.target.value);
    setRecurringValue(e.target.value);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  console.log(pageWidth, "Review page");

  return (
    <div className={styles.container}>
      <Head>
        <title>Upcoming pickups</title>
        <meta
          name="description"
          content="Upcoming pickups you've already set"
        />
        <link rel="icon" href="/favicon.ico" />
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
            {/* <div
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
            </div> */}
            <h2
              style={{
                margin: 0,
                textAlign: "left",
                width: "100%",
                display: "inline-block",
              }}
            >
              Upcoming Pickups
            </h2>
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
              backgroundColor: "white",
              padding: 10,
              borderRadius: 8,
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
                bordered={false}
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
            <Card
              style={{ borderRadius: 20, width: "100%" }}
              bodyStyle={{}}
              bordered={false}
            >
              <div
                style={{ display: "flex", flexFlow: "column", width: "100%" }}
              >
                {/* <h4 style={{ textAlign: "left" }}>Cleaning Preferences</h4> */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 style={{ color: "#000000" }}>Frequency</h4>
                  <span style={{ color: "#5D6571AC" }}>Wednesday Weekly</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 style={{ color: "#000000" }}>Location</h4>
                  <span style={{ color: "#5D6571AC" }}>333 Fremont Street</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 style={{ color: "#000000" }}>Credit Card</h4>
                  <span style={{ color: "#5D6571AC" }}>8689 VISA</span>
                </div>
              </div>
            </Card>
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
            <Card
              hoverable
              bordered
              onClick={() => router.push("/pickups/scheduler")}
              style={{
                width: "100%",
                border: "1px dashed #0644A280",
                borderRadius: 20,
                background: "transparent",
              }}
              bodyStyle={{
                padding: 10,
                background: "transparent",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 20,
                  backgroundColor: "#0644A215",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlusOutlined style={{ color: "#0644A2EB", fontSize: 24 }} />
              </div>
              <h4 style={{ margin: 0, display: "inline-block" }}>
                Create New Pickup
              </h4>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              paddingTop: 10,
              marginTop: 20,
              borderRadius: 8,
            }}
          >
            <Card style={{ width: "100%" }} bordered={false}>
              <h4>Past pickups</h4>
              <span style={{ color: "#5D6571AC" }}>
                No orders to view here. Schedule your first pick up
              </span>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
});
