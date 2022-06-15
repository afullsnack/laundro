import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AddressComp,
  Button,
  CardComp,
  Col,
  DownCircleOutlined,
  Input,
  Row,
} from "ui";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

const { TextArea } = Input;

export default withUserLayout(() => {
  const router = useRouter();

  const [recurringValue, setRecurringValue] = useState("weekly");

  const onRecurringChange = (e) => {
    console.log("Recurring checked", e.target.value);
    setRecurringValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Schedule a pickup extra info</title>
        <meta name="description" content="Schedule a pickup extra info" />
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
              <DownCircleOutlined style={{ color: "#0644A2", fontSize: 25 }} />
            </div>
            <h3
              style={{
                width: "100%",
                margin: 0,
                textAlign: "left",
                display: "block",
              }}
            >
              Address
            </h3>
            <span style={{ textAlign: "left" }}>
              If changed, your most recent location will be your new default
              location
            </span>
            <br />
            <AddressComp />
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
            <h3
              style={{
                width: "100%",
                margin: 0,
                textAlign: "left",
                display: "block",
              }}
            >
              Payment Method
            </h3>
            <span style={{ textAlign: "left" }}>
              If changed, your most recent selection will be your new default
              payment method
            </span>
            <br />
            <CardComp />
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
            <h3 style={{ margin: 0, marginBottom: 10 }}>Additional Note</h3>
            <TextArea
              rows={5}
              style={{ borderRadius: 5, backgroundColor: "#0644A214" }}
            />
            <br />
            {/* <Radio.Group
              onChange={onRecurringChange}
              value={recurringValue}
              size="large"
              style={{ textAlign: "left" }}
            >
              <Space direction="vertical">
                <Radio value="weekly">{day} weekly</Radio>
                <Radio value="biweekly">{day} biweekly</Radio>
                <Radio value="not-recurring">
                  No this is just a one time pick up
                </Radio>
              </Space>
            </Radio.Group> */}
            <Button
              className={styles.normal_btn}
              block
              size="large"
              onClick={() => router.push("/pickups/review")}
            >
              Continue
            </Button>
          </Col>
        </Row>
      </main>
    </div>
  );
});
