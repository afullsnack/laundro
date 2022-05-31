// import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Col,
  message,
  PageHeader,
  Row,
  weekdays,
} from "ui";
import { usePrefDrawer } from "ui/hooks";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default withUserLayout(({ pageWidth }) => {
  const router = useRouter();
  const [day, setDay] = useState(weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");
  const [visible, setVisible] = useState(false);
  const { prefDrawer, SetPrefDrawer } = usePrefDrawer(
    pageWidth,
    () => {
      // Run any save changes and update the db
      prefDrawer.close();
    },
    () => prefDrawer.close(),
    styles,
    "none"
  ); // The default option after loading from db

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

  return (
    <div className={styles.container}>
      <Head>
        <title>User profile - Bag Request</title>
        <meta name="description" content="The users bag request" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row
          gutter={[8, 16]}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            padding: "0 0 40px 0",
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
              alignItems: "start",
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
            <PageHeader
              onBack={() => window.history.back()}
              title="Bag Request"
              extra={<></>}
            />
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
            <Card
              extra={
                <Button
                  type="link"
                  size="small"
                  onClick={() => prefDrawer.open()}
                  style={{ color: "#0644A2" }}
                >
                  Edit
                </Button>
              }
              headStyle={{ height: 0 }}
            >
              <Card.Meta
                avatar={<Avatar src={"/black_pickupbag.png"} size={52} />}
                title="The black bag,dry cleaning"
              />
            </Card>
            <br />
            <span style={{ color: "#5D6571", textAlign: "center" }}>
              Note: Changes to cleaning preferences will be applied for all
              future pickups that include this service
            </span>
            <br />
            <br />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Button
                className={styles.ghost_btn}
                size="large"
                onClick={() => router.back()}
                style={{ flex: 1, marginRight: 10 }}
              >
                Cancel
              </Button> */}
              <Button
                className={styles.normal_btn}
                size="large"
                onClick={() => message.loading("Saving data....")}
                style={{ flex: 3 }}
              >
                Save
              </Button>
            </div>
          </Col>
        </Row>
        {SetPrefDrawer()}
      </main>
      <style jsx global>{`
        .ant-radio-button-wrapper:not(:first-child):before {
          display: none;
        }
      `}</style>
    </div>
  );
});
