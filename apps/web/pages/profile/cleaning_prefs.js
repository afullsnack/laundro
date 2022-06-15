// import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, PageHeader, Row, weekdays } from "ui";
import { useCustomRadioGroup } from "ui/hooks";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default withUserLayout(({ pageWidth }) => {
  const router = useRouter();
  const [day, setDay] = useState(weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");
  const [visible, setVisible] = useState(false);
  const [currentValue, StarchLevelOptions] = useCustomRadioGroup(
    [
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
    ],
    "none",
    "STARCH LEVEL"
  );

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

  console.log(
    pageWidth,
    "Cleaning prefs page",
    currentValue,
    "Current custom radio value"
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>User profile - Cleaning Preferences</title>
        <meta name="description" content="The users cleaning preferences" />
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
              title="Cleaning Preferences"
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
            {StarchLevelOptions()}
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
              <Button
                className={styles.ghost_btn}
                size="large"
                onClick={() => router.back()}
                style={{ flex: 1, marginRight: 10 }}
              >
                Cancel
              </Button>
              <Button
                className={styles.normal_btn}
                size="large"
                onClick={() => {}}
                style={{ flex: 3 }}
              >
                Save Changes
              </Button>
            </div>
          </Col>
        </Row>
      </main>
      <style jsx global>{`
        .ant-radio-button-wrapper:not(:first-child):before {
          display: none;
        }
      `}</style>
    </div>
  );
});
