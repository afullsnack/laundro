// import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, PageHeader, Row, weekdays } from "ui";
import { useCustomCheckBoxGroup, useCustomRadioGroup } from "ui/hooks";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default withUserLayout(({ pageWidth }) => {
  const router = useRouter();
  const [day, setDay] = useState(weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");
  const [visible, setVisible] = useState(false);
  const [currentContactValue, ContactMethodOptions] = useCustomRadioGroup(
    [
      {
        label: "Email",
        value: "email",
      },
      {
        label: "Call",
        value: "call",
      },
      {
        label: "Chat",
        value: "chat",
      },
    ],
    "email",
    "PREFERRED CONTACT METHOD"
  );
  const [currentPushNotificationsValue, PushNotificationsOptions] =
    useCustomCheckBoxGroup(
      [
        {
          label: "Account Alerts",
          value: "account_alerts",
        },
        {
          label: "Arrival Notifications",
          value: "arrival_notifications",
        },
        {
          label: "Promotional Offers",
          value: "promotional_offers",
        },
      ],
      ["account_alerts"],
      "PUSH NOTIFICATIONS"
    );
  const [currentSMSNotificationsValue, SMSNotificationOptions] =
    useCustomCheckBoxGroup(
      [
        {
          label: "Account Alerts",
          value: "account_alerts",
        },
        {
          label: "Arrival Notifications",
          value: "arrival_notifications",
        },
        {
          label: "Promotional Offers",
          value: "promotional_offers",
        },
      ],
      ["account_alerts", "arrival_notifications"],
      "SMS NOTIFICATIONS"
    );

  const [currentEmailNotificationsValue, EmailNotificationOptions] =
    useCustomCheckBoxGroup(
      [
        {
          label: "Account Alerts",
          value: "account_alerts",
        },
        {
          label: "Arrival Notifications",
          value: "arrival_notifications",
        },
        {
          label: "Promotional Offers",
          value: "promotional_offers",
        },
      ],
      ["account_alerts", "arrival_notifications", "promotional_offers"],
      "EMAIL NOTIFICATIONS"
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
    "Comms prefs page",
    currentContactValue,
    "Current custom radio value"
  );
  console.log(
    pageWidth,
    "Comms prefs page",
    currentPushNotificationsValue,
    "Current custom radio value"
  );
  console.log(
    pageWidth,
    "Comms prefs page",
    currentSMSNotificationsValue,
    "Current custom radio value"
  );
  console.log(
    pageWidth,
    "Comms prefs page",
    currentEmailNotificationsValue,
    "Current custom radio value"
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>User profile - Communication Preferences</title>
        <meta
          name="description"
          content="The users Communication Preferences"
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
              title="Communication Preferences"
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
            {ContactMethodOptions()}
            <br />
            {PushNotificationsOptions()}
            <br />
            {SMSNotificationOptions()}
            <br />
            {EmailNotificationOptions()}
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
